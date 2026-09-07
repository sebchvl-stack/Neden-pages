# Cloudflare — configuration automatisée

## Ce qui tourne tout seul

`.github/workflows/cloudflare.yml` fait deux choses, à chaque push sur `main`
touchant `worker/` ou le script, et à la demande depuis l'onglet Actions :

1. **Applique les réglages de zone** (`scripts/cloudflare-setup.mjs`) — SSL,
   HSTS, TLS, sécurité, compression, et l'enregistrement DNS de app.neden.fr.
2. **Déploie le Worker** app.neden.fr.

Le script est **idempotent** : il lit chaque réglage avant de l'écrire, ne
touche que ce qui diffère, et son journal ne liste que de vrais changements.
Le relancer dix fois ne fait rien de plus que la première.

## La seule chose à faire, une fois

Créer le jeton Cloudflare et le déposer dans GitHub. **Ne jamais le coller
dans une conversation** — il donne accès à la zone.

### 1. Créer le jeton

Cloudflare → **My Profile** → **API Tokens** → **Create Token** →
*Create Custom Token*.

| Permission | Niveau |
|---|---|
| Zone · Zone | Read |
| Zone · Zone Settings | Edit |
| Zone · DNS | Edit |
| Account · Workers Scripts | Edit |

**Zone Resources** : limiter à `neden.fr`. Un jeton restreint qui fuite fait
beaucoup moins de dégâts qu'un jeton global.

### 2. Le déposer dans GitHub

Dépôt `neden-pages` → **Settings** → **Secrets and variables** → **Actions** →
*New repository secret* → nom exact `CLOUDFLARE_API_TOKEN`.

### 3. Lancer

Onglet **Actions** → *Cloudflare — zone et Worker* → **Run workflow**.
Cocher **Simulation** au premier essai : le script affiche ce qu'il changerait
sans rien écrire. Relancer sans la case pour appliquer.

## Ce que le script applique, et pourquoi

| Réglage | Valeur | Raison |
|---|---|---|
| `ssl` | Full (strict) | Google et Pages présentent des certificats valides : rien à installer. Flexible provoquerait une boucle de redirection |
| `always_use_https` | on | Empêche un client de partir en clair |
| `min_tls_version` | 1.2 | 1.0 et 1.1 dépréciés ; 1.3 seul exclurait de vieux clients |
| `automatic_https_rewrites` | on | Corrige les liens `http://` internes qui casseraient l'affichage |
| `security_header` | HSTS 12 mois, sous-domaines, **sans preload** | Le preload est quasi irréversible — plusieurs mois pour en sortir |
| `security_level` | medium | *high* déclenche des défis sur du trafic légitime, y compris le tien |
| `brotli`, `early_hints` | on | La vitesse de chargement compte dans le classement |
| `always_online` | off | Servirait une version archivée — trompeur pour un site qui doit refléter l'état réel |
| DNS `app` | AAAA `100::` proxifié | Trou noir IPv6 : le trafic est intercepté par le Worker, procédé recommandé par Cloudflare |

Le script **ne modifie jamais un enregistrement DNS existant** : s'il en trouve
un différent sur `app`, il le signale et s'arrête là. Écraser un DNS en silence
peut couper un service dont on ignore l'existence.

## Ce qui reste manuel, et pourquoi

- **Bot Fight Mode** — l'endpoint API existe mais n'est pas documenté
  publiquement et dépend du plan. Le script tente, et signale s'il n'y arrive
  pas. Sinon : Security → Settings → Bot traffic.
- **Le WAF géré gratuit** — passe par l'API Rulesets, nettement plus verbeuse,
  et une règle mal posée bloque du trafic légitime. Un clic au tableau de bord
  est ici plus sûr qu'un script.
- **La redirection www → apex** — Redirect Rules, à créer une fois.
- **`APPS_SCRIPT_EXEC_URL`** — variable du Worker, pas un secret GitHub. Elle
  change à chaque nouveau déploiement Apps Script. Une erreur 503 sur
  app.neden.fr vient presque toujours de là :
  `cd worker && npx wrangler secret put APPS_SCRIPT_EXEC_URL`
- **Google Search Console** — vérification par TXT et soumission du sitemap.
  Tant que ce n'est pas fait, Google ne sait pas que le site existe, et aucun
  réglage Cloudflare n'y changera rien.

## Un piège qui coûte cher

Ne jamais poser de **Managed Challenge** sur `app.neden.fr`. Les appels
`google.script.run` ne sont pas des navigations : le défi les fait échouer en
silence, et l'application semble planter sans raison.

## Vérifier

```bash
curl -sI https://neden.fr | grep -iE 'strict-transport|content-security|x-frame'
curl -sI https://app.neden.fr | grep -iE 'strict-transport|permissions-policy|x-robots-tag'
curl -s https://neden.fr/robots.txt
```

Deux vérificateurs externes gratuits, sans compte : `ssllabs.com/ssltest`
(viser A ou A+) et `securityheaders.com`.
