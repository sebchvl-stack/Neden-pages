# Neden-pages

Site public de Sébastien Cheval — **neden.fr** — React + Vite + React Router,
déployé via **Cloudflare Workers Static Assets** (`wrangler.jsonc` à la
racine). Sert aussi de page publique (accueil, confidentialité, CGU) pour
la vérification OAuth Google de l'application NEDEN (dépôt séparé
`Neden-application`).

> Ancien nom produit « Cloudflare Pages » : Cloudflare a fusionné Pages
> dans Workers Assets. Ce dépôt ne cible plus un projet Pages classique.

Voir `.specify/memory/constitution.md` pour les principes du projet
(notamment : jamais de contenu biographique/professionnel inventé) et
`specs/001-site-portfolio/spec.md` pour la spécification complète.

## Développement local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # sortie dans dist/
```

## Déploiement (Workers Static Assets)

1. Compte Cloudflare qui gère `neden.fr`.
2. Depuis la racine : `npx wrangler deploy` (lit `wrangler.jsonc`, assets =
   `dist/` après `npm run build`).
3. Domaine personnalisé : `neden.fr` sur ce Worker Assets.
4. Les routes SPA (`/confidentialite`, `/cgu`, …) sont gérées par le
   fallback Assets (voir `wrangler.jsonc` / `public/_redirects`).

Workflow CI : `.github/workflows/cloudflare.yml` (réglages de zone +
éventuel Worker `app.neden.fr` — **voir avertissement ci-dessous**).

## ⚠️ `app.neden.fr` / dossier `worker/` — conflit de déploiement

Le Worker de **production** maintenu pour `app.neden.fr` vit dans
`Neden-application/workers/app-proxy/` (correction 502 du 14/09 : en-têtes
reconstruits, jamais les en-têtes navigateur bruts vers
`script.google.com`).

Le fichier `worker/app-proxy.js` de **ce** dépôt est une copie obsolète qui
relaie encore `request.headers` tel quel — un `wrangler deploy` depuis
`worker/` **écraserait la prod COMMAND OS**.

**Décision produit ouverte (Sébastien)** :
- (a) retirer `worker/` + le job Worker du workflow, ou
- (b) le synchroniser avec `Neden-application/workers/app-proxy/`.

En attendant : le job CI « Worker app.neden.fr » est **désactivé** pour
éviter un écrasement accidentel. Ne pas redéployer `worker/` à la main.

## État du contenu

La majorité du contenu biographique/professionnel (profil, compétences,
expériences, formations, logos clients, réalisations, outils, passions,
chiffres clés, historique NEDEN) est **en attente des sources réelles**
que Sébastien doit fournir — voir `src/pages/Home.tsx` et
`specs/001-site-portfolio/spec.md` (Assumptions). Rien n'est publié sans
source réelle (constitution, Principe I).
