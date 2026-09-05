# STATUS NEDEN-PAGES — Point d’entrée reprise

> **MAJ :** 2026-09-05 10:17 CEST  
> **Branche :** `002-design-system`

## Feux

| Zone | État |
|------|------|
| Design contracts (F/C/N + screens) | 🟢 pack utilisable sans Figma |
| Site IMPLEMENTED | 🟢 Home Privacy CGU Moodboard |
| App contracts A01–A11 | 🟢 DESIGNED |
| A12–A14 modules isolés | 🟡 WIREFRAME |
| Code site Tailwind/micro/CV/brand | 🟢 |
| Prod Cloudflare / merge main | 🔴 GO |
| PNG favicon 120 | 🟡 |

## Isolation
ARWEN (A12) ≠ VIDEO (A13) ≠ BRAINSTORM (A14) ≠ JARVIS (A10)

## Lire dans l’ordre
1. STATUS.md  
2. NEDEN_DESIGN_SOURCE_OF_TRUTH.md  
3. design/README.md  
4. design/screens/app/README.md  
5. design/content/CONTENT_MAP.md  
6. memory/AI_HANDOFF.md

## Backlog

**P0** npm dev · PNG favicon · GO deploy  
**P1** Framer path scrub · logo tracks · A12–A14 → DESIGNED si besoin métier  
**P2** Index.html pass (app) · 001-cv-generator pont  

## Journal
| Quand | Quoi |
|-------|------|
| 09-04 | Site + SpecKit 002 + Tailwind |
| 09-05 | design/ SoT · A01–A14 · C01–C08 · N01–N09 |
| 09-05 | **N06 · site S0x · CONTENT_MAP** |

```bash
git checkout 002-design-system && npm i && npm run dev
```
