#!/usr/bin/env node
/**
 * Applique la configuration Cloudflare de neden.fr — réglages de zone, DNS,
 * protection anti-robots — par l'API, de façon IDEMPOTENTE.
 *
 * POURQUOI CE SCRIPT PLUTÔT QUE LE TABLEAU DE BORD
 * Un réglage cliqué à la main n'est nulle part : personne ne sait qu'il a été
 * changé, ni pourquoi, ni ce qu'il valait avant. Ici chaque valeur est dans le
 * dépôt avec sa justification, l'exécution dit ce qu'elle change, et relancer
 * ne fait rien si tout est déjà en place.
 *
 * IDEMPOTENCE RÉELLE : chaque réglage est LU avant d'être écrit. Une valeur
 * déjà correcte n'est pas réécrite — l'API Cloudflare n'aime pas les PATCH
 * inutiles, et surtout le journal d'exécution ne doit lister que de vrais
 * changements.
 *
 * SÉCURITÉ : le jeton vient de l'environnement (secret GitHub), jamais d'un
 * fichier ni d'un argument de ligne de commande (les arguments se retrouvent
 * dans l'historique du shell et dans la liste des processus).
 *
 * Utilisation :
 *   CLOUDFLARE_API_TOKEN=... node scripts/cloudflare-setup.mjs [--dry-run]
 */

const API = 'https://api.cloudflare.com/client/v4';
const ZONE = process.env.CLOUDFLARE_ZONE_NAME || 'neden.fr';
const TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const DRY = process.argv.includes('--dry-run');

if (!TOKEN) {
  console.error('CLOUDFLARE_API_TOKEN absent. En local :');
  console.error('  CLOUDFLARE_API_TOKEN=... node scripts/cloudflare-setup.mjs --dry-run');
  process.exit(1);
}

let modifs = 0, dejaOk = 0, echecs = 0;

async function cf(chemin, options = {}) {
  const r = await fetch(API + chemin, {
    ...options,
    headers: {
      Authorization: 'Bearer ' + TOKEN,
      'Content-Type': 'application/json',
      ...(options.headers || {})
    }
  });
  const json = await r.json().catch(() => ({}));
  if (!r.ok || json.success === false) {
    const msg = (json.errors || []).map((e) => `${e.code} ${e.message}`).join(' | ') || `HTTP ${r.status}`;
    const err = new Error(msg);
    err.status = r.status;
    err.codes = (json.errors || []).map((e) => e.code);
    throw err;
  }
  return json.result;
}

/**
 * Les réglages appliqués, avec pour chacun la raison — c'est ce qui manque
 * toujours quand on relit une configuration six mois plus tard.
 */
const REGLAGES = [
  ['ssl', 'strict',
    "Full (strict). Google et Cloudflare Pages présentent des certificats valides émis par une autorité publique : la condition est remplie sans rien installer. Flexible provoquerait une boucle de redirection, Google redirigeant déjà HTTP vers HTTPS."],
  ['always_use_https', 'on',
    "Empêche un client de partir en clair avant même la première redirection."],
  ['min_tls_version', '1.2',
    "1.0 et 1.1 sont dépréciés. Exiger 1.3 seul exclurait de vieux clients sans gain réel."],
  ['tls_1_3', 'on', "Poignée de main plus rapide, aucun effet de bord."],
  ['automatic_https_rewrites', 'on',
    "Réécrit les liens http:// internes qui casseraient l'affichage en contenu mixte."],
  ['opportunistic_encryption', 'on', "Sans effet de bord."],
  ['security_level', 'medium',
    "Pas 'high' : high déclenche des défis sur du trafic légitime, y compris celui de Sébastien."],
  ['brotli', 'on', "Compression meilleure que gzip. La vitesse de chargement compte dans le classement."],
  ['early_hints', 'on', "Le navigateur précharge les ressources pendant que le serveur répond."],
  ['always_online', 'off',
    "Servirait une version archivée du site en cas de panne — trompeur pour un site qui doit refléter l'état réel."],
  ['security_header', {
    strict_transport_security: {
      enabled: true,
      max_age: 31536000,        // 12 mois
      include_subdomains: true,
      nosniff: true,
      preload: false            // volontaire, voir ci-dessous
    }
  },
    "HSTS 12 mois, sous-domaines inclus. `preload` VOLONTAIREMENT désactivé : l'inscription à la liste de préchargement des navigateurs est quasi irréversible (plusieurs mois pour en sortir) et impose que TOUS les sous-domaines, présents et futurs, servent du HTTPS valide."]
];

function memeValeur(a, b) {
  if (typeof a !== 'object' || a === null) return a === b;
  // security_header renvoie plus de champs qu'on n'en envoie : on ne compare
  // que ceux qu'on impose, sinon le script se croirait toujours en retard.
  return Object.keys(b).every((k) =>
    typeof b[k] === 'object' && b[k] !== null
      ? memeValeur(a?.[k], b[k])
      : a?.[k] === b[k]);
}

async function appliquerReglage(zoneId, [nom, valeur, pourquoi]) {
  let actuel;
  try {
    actuel = (await cf(`/zones/${zoneId}/settings/${nom}`)).value;
  } catch (err) {
    // Un réglage indisponible sur le plan (ou renommé) ne doit pas faire
    // échouer tout le script : on le signale et on continue.
    console.log(`  ⏭️  ${nom} — indisponible sur ce plan (${err.message})`);
    return;
  }
  if (memeValeur(actuel, valeur)) {
    dejaOk++;
    console.log(`  ✓ ${nom} déjà à la bonne valeur`);
    return;
  }
  const avant = JSON.stringify(actuel);
  if (DRY) {
    modifs++;
    console.log(`  → ${nom} : ${avant} deviendrait ${JSON.stringify(valeur)}`);
    console.log(`     ${pourquoi}`);
    return;
  }
  try {
    await cf(`/zones/${zoneId}/settings/${nom}`, { method: 'PATCH', body: JSON.stringify({ value: valeur }) });
    modifs++;
    console.log(`  ✅ ${nom} : ${avant} → ${JSON.stringify(valeur)}`);
    console.log(`     ${pourquoi}`);
  } catch (err) {
    echecs++;
    console.log(`  ❌ ${nom} : ${err.message}`);
  }
}

/**
 * app.neden.fr doit exister en DNS pour que la route du Worker s'active.
 * 100:: est l'adresse de trou noir IPv6 : le trafic n'atteint jamais une vraie
 * machine, il est intercepté par le Worker. Procédé recommandé par Cloudflare
 * pour un sous-domaine servi uniquement par un Worker.
 */
async function assurerDnsApp(zoneId) {
  const nomComplet = `app.${ZONE}`;
  const existants = await cf(`/zones/${zoneId}/dns_records?name=${encodeURIComponent(nomComplet)}`);
  const aaaa = existants.find((r) => r.type === 'AAAA');
  if (aaaa) {
    if (aaaa.content === '100::' && aaaa.proxied) {
      dejaOk++;
      console.log(`  ✓ ${nomComplet} déjà en AAAA 100:: proxifié`);
      return;
    }
    // Un enregistrement existant mais différent : on ne l'écrase pas en
    // silence, on le dit. Écraser un DNS sans prévenir peut couper un service
    // dont on ignore l'existence.
    console.log(`  ⚠️  ${nomComplet} existe déjà en AAAA ${aaaa.content} (proxifié: ${aaaa.proxied}).`);
    console.log(`     Non modifié : un enregistrement DNS existant peut servir autre chose.`);
    console.log(`     Pour le corriger : Cloudflare → DNS → Records → modifier en 100:: et activer le proxy.`);
    return;
  }
  if (DRY) {
    modifs++;
    console.log(`  → ${nomComplet} serait créé : AAAA 100:: proxifié`);
    return;
  }
  try {
    await cf(`/zones/${zoneId}/dns_records`, {
      method: 'POST',
      body: JSON.stringify({
        type: 'AAAA', name: 'app', content: '100::', proxied: true, ttl: 1,
        comment: 'Trou noir IPv6 — le trafic est servi par le Worker app.neden.fr'
      })
    });
    modifs++;
    console.log(`  ✅ ${nomComplet} créé : AAAA 100:: proxifié`);
  } catch (err) {
    echecs++;
    console.log(`  ❌ création DNS ${nomComplet} : ${err.message}`);
  }
}

/**
 * Bot Fight Mode. La documentation publique ne décrit que le tableau de bord ;
 * l'endpoint API existe mais n'est pas garanti selon le plan. Best-effort
 * assumé : un échec ici est signalé et n'arrête rien.
 */
async function assurerBotFightMode(zoneId) {
  try {
    const actuel = await cf(`/zones/${zoneId}/bot_management`);
    if (actuel && actuel.fight_mode === true) {
      dejaOk++;
      console.log('  ✓ Bot Fight Mode déjà actif');
      return;
    }
    if (DRY) { modifs++; console.log('  → Bot Fight Mode serait activé'); return; }
    await cf(`/zones/${zoneId}/bot_management`, { method: 'PUT', body: JSON.stringify({ fight_mode: true }) });
    modifs++;
    console.log('  ✅ Bot Fight Mode activé');
  } catch (err) {
    console.log(`  ⏭️  Bot Fight Mode non réglable par API ici (${err.message})`);
    console.log('     À activer au tableau de bord : Security → Settings → Bot traffic.');
  }
}

async function main() {
  console.log(`\nConfiguration Cloudflare — ${ZONE}${DRY ? '  [simulation, rien ne sera écrit]' : ''}\n`);

  const zones = await cf(`/zones?name=${encodeURIComponent(ZONE)}`);
  if (!zones.length) throw new Error(`Zone ${ZONE} introuvable — le jeton a-t-il accès à cette zone ?`);
  const zoneId = zones[0].id;
  console.log(`Zone : ${zones[0].name} (plan ${zones[0].plan?.name || 'inconnu'})\n`);

  console.log('Réglages SSL/TLS et sécurité');
  for (const r of REGLAGES) await appliquerReglage(zoneId, r);

  console.log('\nDNS');
  await assurerDnsApp(zoneId);

  console.log('\nProtection anti-robots');
  await assurerBotFightMode(zoneId);

  console.log(`\n${modifs} changement(s), ${dejaOk} déjà conforme(s), ${echecs} échec(s).`);
  if (echecs) {
    console.log('\nUn échec vient presque toujours des permissions du jeton.');
    console.log('Portées requises : Zone:Zone:Read, Zone:Zone Settings:Edit, Zone:DNS:Edit.');
    process.exit(1);
  }
  if (DRY && modifs) console.log('Relance sans --dry-run pour appliquer.');
}

main().catch((err) => {
  console.error(`\n❌ ${err.message}`);
  if (err.status === 403 || err.codes?.includes(9109)) {
    console.error('Le jeton n\'a pas les permissions nécessaires sur cette zone.');
  }
  process.exit(1);
});
