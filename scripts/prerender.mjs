// Pré-rendu statique des pages publiques — nécessaire parce que Google
// OAuth Branding vérifie la page d'accueil et la page de confidentialité
// avec un robot qui NE LANCE PAS JavaScript (contrairement à Googlebot pour
// l'indexation classique). Sans ça, ce robot ne voit que
// <div id="root"></div> vide — d'où "contenu insuffisant" / "n'explique pas
// l'objectif" même avec du vrai contenu dans l'app.
//
// Aucune dépendance lourde (pas de navigateur headless, portable partout
// — y compris le serveur de build Cloudflare qui reconstruit le site à
// chaque push) : utilise react-dom/server (déjà fourni par react-dom) via
// le bundle SSR généré par `vite build --ssr` (voir package.json).
//
// Pour chaque route : rend le HTML côté serveur, l'injecte dans le gabarit
// dist/index.html à la place de <div id="root"></div>, corrige le <title>
// et les balises meta/OG pour cette route précise (même contenu que
// src/hooks/useDocumentMeta.ts, qui ne s'exécute que côté navigateur — voir
// son commentaire), puis écrit le résultat à l'emplacement que Workers
// Static Assets sert pour cette URL.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');

const PRIVACY_URL = 'https://neden.fr/confidentialite/';
const CGU_URL = 'https://neden.fr/cgu/';

const ROUTES = [
  {
    path: '/',
    canonical: 'https://neden.fr/',
    titre: 'NEDEN — orchestrateur personnel de recherche d’emploi',
    description:
      'NEDEN est l’orchestrateur personnel de Sébastien Cheval : candidatures, emails Gmail, agenda Google Calendar et documents Google Drive, pour un unique utilisateur. Application privée — pas un service public. Politique de confidentialité : https://neden.fr/confidentialite/'
  },
  {
    path: '/confidentialite',
    canonical: PRIVACY_URL,
    titre: 'Politique de confidentialité — NEDEN',
    description:
      "NEDEN accède à Gmail (gmail.modify), Calendar, Drive, l'identité Google et deux scopes techniques Apps Script, uniquement pour l'orchestration personnelle d'un unique utilisateur. Collecte, usage, stockage, partage, rétention, suppression et Limited Use."
  },
  {
    path: '/cgu',
    canonical: CGU_URL,
    titre: "Conditions d'utilisation — NEDEN",
    description: "Conditions d'utilisation de NEDEN, l'orchestrateur personnel de Sébastien Cheval."
  }
];

function injectMeta(html, route) {
  const url = route.canonical;
  return html
    .replace(/<title>.*?<\/title>/, `<title>${route.titre}</title>`)
    .replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`)
    .replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${url}"`)
    .replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${route.titre}"`)
    .replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${route.description}"`
    )
    .replace(
      /<meta property="og:description" content="[^"]*"/,
      `<meta property="og:description" content="${route.description}"`
    );
}

function assertPrerender(route, html) {
  const failures = [];
  if (!html.includes('<noscript')) {
    failures.push('noscript absent');
  }
  if (!html.includes(PRIVACY_URL)) {
    failures.push(`lien privacy canonique ${PRIVACY_URL} absent`);
  }
  if (route.path === '/') {
    const body = html.slice(html.indexOf('<body'));
    const banner = body.indexOf('neden-oauth-banner');
    const obj = body.indexOf('orchestrateur personnel');
    const hero = body.indexOf('Pilote d');
    if (banner === -1) failures.push('bannière OAuth statique absente');
    if (obj === -1) failures.push('objectif NEDEN absent du body');
    if (hero !== -1 && obj > hero) {
      failures.push('objectif NEDEN apparaît après le hero portfolio');
    }
    if (!body.includes(CGU_URL)) failures.push('lien CGU canonique absent de la home');
  }
  if (route.path === '/confidentialite') {
    for (const needle of [
      'NEDEN accède',
      'Limited Use',
      "NEDEN's use and transfer to any other app",
      'gmail.modify',
      'script.scriptapp',
      'script.external_request',
      'Rétention',
      'Suppression'
    ]) {
      if (!html.includes(needle)) failures.push(`privacy: « ${needle} » absent`);
    }
  }
  if (failures.length) {
    throw new Error(`Pré-rendu ${route.path} : ${failures.join(' ; ')}`);
  }
}

async function main() {
  const template = readFileSync(join(DIST, 'index.html'), 'utf-8');
  const { render } = await import(join(ROOT, 'dist-ssr', 'entry-server.js'));

  for (const route of ROUTES) {
    const appHtml = render(route.path);
    const finalHtml = injectMeta(template, route).replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );
    assertPrerender(route, finalHtml);
    const outDir = route.path === '/' ? DIST : join(DIST, route.path.slice(1));
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), finalHtml, 'utf-8');
    console.log(`✅ Pré-rendu ${route.path} -> ${outDir.replace(ROOT + '/', '')}/index.html (${route.canonical})`);
  }
}

main().catch((err) => {
  console.error('❌ Pré-rendu échoué:', err);
  process.exit(1);
});
