# Checklist OAuth Branding — NEDEN (neden.fr)

À relire **avant chaque re-soumission** Google Auth Platform. Ce dépôt ne
déploie pas tout seul : merge GO, puis retester, puis soumettre.

## URLs exactes à coller dans Google Cloud Console → Auth Platform → Branding

| Champ console | Valeur | Interdit |
|---|---|---|
| Authorized domains | `neden.fr` | `app.neden.fr` comme domaine d’accueil |
| Application home page | `https://neden.fr` | **JAMAIS** `https://app.neden.fr` (page de connexion SPA) |
| Privacy policy | `https://neden.fr/confidentialite/` | sans slash → 307 ; URL relative |
| Terms of service | `https://neden.fr/cgu/` | `https://neden.fr/cgu` redirige 307 vers la forme slash |

`https://app.neden.fr/` est l’écran de connexion / l’espace privé. Ce n’est
pas la homepage Branding. Le lien header « app.neden.fr » peut rester sur
le site public ; il ne doit figurer dans aucun des trois champs console.

## Forme canonique privacy (pourquoi le slash)

Cloudflare Workers Static Assets (`html_handling` = auto-trailing-slash)
sert `dist/confidentialite/index.html` à **`/confidentialite/`** (200).
Une requête vers `/confidentialite` (sans slash) répond **307** vers
`/confidentialite/`.

Un checker OAuth qui ne suit pas les redirections, ou qui tombe sur le 307
puis un défi Cloudflare, lit une privacy « vide ». D’où :

- canonical HTML = `https://neden.fr/confidentialite/`
- tous les liens OAuth-critiques (home, header, footer, noscript, docs) =
  cette URL **absolue, avec slash**
- coller **cette** URL dans la console, pas `/confidentialite`

Même logique pour les CGU : forme 200 = `https://neden.fr/cgu/`.

## Cloudflare — Bot Fight / défis (cause probable n°1 des refus)

Depuis certains réseaux (dont des datacenters), `neden.fr` peut répondre
**403** + HTML « Just a moment... » (`cf-mitigated: challenge`,
`cType: managed`) **y compris** avec un User-Agent Googlebot. Un
vérificateur Google qui ne passe pas le défi JS ne voit ni l’objectif ni
la privacy.

Sur la zone **neden.fr** (projet Pages / Workers Static Assets du site
public — pas le Worker `app.neden.fr`) :

1. **Bot Fight Mode = OFF**
2. **Super Bot Fight Mode = OFF** (si le plan l’affiche)
3. **Aucune Managed Challenge** (WAF / Custom Rules) sur `/` ni sur
   `/confidentialite` / `/confidentialite/`
4. Skip / allowlist **Googlebot** et **Google-InspectionTool** si une
   règle bots doit rester ailleurs
5. Ne pas bloquer les crawlers sans JS : le checker OAuth Branding
   n’exécute en général **pas** JavaScript

Vérification **après deploy**, depuis un réseau qui n’est pas déjà
challengé :

```bash
# Doit être 200 + HTML NEDEN, PAS « Just a moment »
curl -sI -A 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' https://neden.fr
curl -s  -A 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' https://neden.fr | grep -iE 'Just a moment|orchestrateur personnel|neden.fr/confidentialite/'

curl -sI -A 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' https://neden.fr/confidentialite
# Attendu : 307 Location: /confidentialite/   OU 200 si CF change
curl -sI -A 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' https://neden.fr/confidentialite/
# Attendu : 200
curl -s  -A 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' https://neden.fr/confidentialite/ | grep -iE 'Just a moment|NEDEN accède|Limited Use'
```

Si le HTML contient `Just a moment` ou `cf-mitigated: challenge` : **ne
pas re-soumettre**. Régler Cloudflare d’abord.

Le script `scripts/cloudflare-setup.mjs` ne peut pas fiablement éteindre
Bot Fight Mode (API non documentée / selon le plan). C’est un clic
manuel : Security → Bots / Settings.

## www.neden.fr

`www.neden.fr` est **NXDOMAIN** (pas d’enregistrement DNS). Ce n’est pas
bloquant tant que la console et Search Console visent l’apex `neden.fr`.
Ne pas mettre `www.neden.fr` dans Branding. Ne pas ajouter www « pour
faire joli » sans certificat + redirect, ça créerait un second host à
vérifier.

## Contenu que le checker doit voir (sans JS)

Home `https://neden.fr` :

- `<noscript>` en tête de `<body>` : titre NEDEN, 2–3 phrases d’objectif,
  liens absolus privacy + CGU
- Dans `#root` pré-rendu : bloc « Objectif de l’application » **au-dessus**
  du hero portfolio ; le `<h1>` dit NEDEN, pas seulement le titre CV
- `<title>` / meta description mènent par NEDEN

Privacy `https://neden.fr/confidentialite/` :

- Sections explicites : collecte · usage · stockage · partage ·
  protection · rétention · suppression
- Phrases « NEDEN accède à… » pour gmail.modify, calendar, drive,
  userinfo, script.scriptapp, script.external_request
- Limited Use **EN verbatim** + FR
- Tiers : Notion perso, Cloudflare TLS, modèles d’IA ponctuels

## Après deploy (merge GO) — ordre

1. Attendre que Workers Assets ait publié le commit
2. Retester les `curl` Googlebot ci-dessus (home + privacy slash)
3. Confirmer les 3 URLs console (tableau)
4. Re-soumettre la vérification OAuth
5. Ne pas pointer la home console vers app.neden.fr « pour voir »

Hors scope de ce dépôt : Worker app.neden.fr, C9, Google Apps Script.
