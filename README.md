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

Workflow CI : `.github/workflows/cloudflare.yml` — **réglages de zone
uniquement** (SSL, DNS, HSTS).

## `app.neden.fr` — hors de ce dépôt

Le reverse-proxy COMMAND OS (`app.neden.fr` → Apps Script `/exec`) est
maintenu **uniquement** dans
`Neden-application/workers/app-proxy/` (correction 502 du 14/09).

Le dossier `worker/` a été **retiré** de `Neden-pages` (décision produit
15/09/2026, option a) pour éviter tout écrasement silencieux de la prod
app. Ne pas le réintroduire ici.

## État du contenu

La majorité du contenu biographique/professionnel (profil, compétences,
expériences, formations, logos clients, réalisations, outils, passions,
chiffres clés, historique NEDEN) est **en attente des sources réelles**
que Sébastien doit fournir — voir `src/pages/Home.tsx` et
`specs/001-site-portfolio/spec.md` (Assumptions). Rien n'est publié sans
source réelle (constitution, Principe I).
