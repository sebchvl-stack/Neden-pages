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

Workflow CI : `.github/workflows/cloudflare.yml` (réglages de zone
`neden.fr` uniquement).

## `app.neden.fr`

Ce dépôt ne déploie plus rien pour `app.neden.fr` (décision du 16/09/2026,
suite à l'audit du 15/09 — voir historique git de ce README/`worker/` pour
le détail). Le Worker de production (`app.neden.fr` = shell COMMAND OS +
proxy API + PWA installable) vit entièrement dans
`Neden-application/workers/app-proxy/`. Avant, ce dépôt avait son propre
`worker/app-proxy.js`, qui ciblait le même Worker Cloudflare et relayait
encore les en-têtes navigateur bruts (502) — supprimé plutôt que
synchronisé, pour ne garder qu'une seule source de vérité de déploiement.

## État du contenu

La majorité du contenu biographique/professionnel (profil, compétences,
expériences, formations, logos clients, réalisations, outils, passions,
chiffres clés, historique NEDEN) est **en attente des sources réelles**
que Sébastien doit fournir — voir `src/pages/Home.tsx` et
`specs/001-site-portfolio/spec.md` (Assumptions). Rien n'est publié sans
source réelle (constitution, Principe I).
