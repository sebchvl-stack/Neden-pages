# AI Continuity — NEDEN Pages + Profil + CV

> **Dernière MAJ :** 2026-09-04
> **Branches :** Neden-pages `design/site-foundation` · App `Neden-application` main
> **Figma :** https://www.figma.com/design/NOLZUnUcR2iFPiu0bAzZjz (3 pages max · MCP rate-limited Starter)

## Double identité
| Couche | Rôle | Stack |
|--------|------|-------|
| NEDEN App | Cockpit candidatures / JARVIS | GAS + Notion + Make + Discord + PWA |
| neden.fr | Site public OAuth + brand | React Vite RR · Cloudflare Pages |
| NEDEN Studio | Photo · DA · design · GP | Au service du sens · Nantes |

Slogan : **Au service du sens.** Nom turc « pourquoi », palindrome.

## Sources vérité profil
memory/COMPETENCES, CHIFFRES_CLES, TITRES_POSTE, MOTS_CLES, MISSIONS_XYZ, OUTILS, CERTIFICATIONS, PROFILE.json, BRAND_NEDEN, POSITIONNEMENT

## Constitution
Respecter Neden-application/.specify/memory/constitution.md — Preserve before refactor · Spec before implementation · Human validation prod · No secrets · GAS unless AD

## Specs
.specify/specs/001-cv-system.md · 002-site-content-blocks.md

## Figma
01 DS · 02 Components · 03 Hero — MCP limit: frames CV à compléter manuellement

## Sans GO
Deploy prod GAS / Cloudflare prod définitif
