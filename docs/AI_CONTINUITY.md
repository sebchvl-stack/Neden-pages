# AI Continuity — NEDEN Pages + Profil + CV

> **Dernière MAJ :** 2026-09-04 15:25 CEST  
> **Branche active :** `002-design-system`  
> **Master status :** `/STATUS.md`

## Double / triple identité

| Couche | Rôle | Stack |
|--------|------|-------|
| NEDEN App | Cockpit candidatures / JARVIS | GAS + Notion + Index.html + PWA |
| neden.fr | Site public OAuth + brand | React Vite Tailwind · Cloudflare |
| NEDEN Studio | Photo · DA · design · GP | Au service du sens · Nantes |

Slogan studio : **Au service du sens.** · NEDEN = turc « pourquoi », palindrome.

## Reprise en 60 secondes

```bash
git checkout 002-design-system && npm install && npm run dev
```

Lire : `STATUS.md` → `memory/AI_HANDOFF.md` → `prompts/NEXT_AI_DESIGN.md`

## Sources vérité profil

`memory/COMPETENCES`, `CHIFFRES_CLES`, `TITRES_POSTE`, `MOTS_CLES`, `MISSIONS_XYZ`, `OUTILS`, `CERTIFICATIONS`, `PROFILE.json`, `BRAND_NEDEN`, `BRAND_STUDIO`, `POSITIONNEMENT`

## Constitution (app + pages)

`Neden-application/.specify/memory/constitution.md`  
Preserve > Refactor · Spec before significant impl · Human GO prod · No secrets · Deterministic data · GAS reste backend app

## Specs pages

- `specs/002-design-system/*` (identité, site, logo, CV blocks)
- `.specify/specs/001-cv-system.md`, `002-site-content-blocks.md` (legacy notes)

## Figma

https://www.figma.com/design/NOLZUnUcR2iFPiu0bAzZjz — 3 pages max Starter · compléter via prompts si MCP limité

## Sans GO

- Deploy Cloudflare prod / merge main définitif
- Deploy GAS production
- Clasp push production

## Changelog design (002)

Voir section 7 de `STATUS.md` et `docs/DELIVERY_002.md`
