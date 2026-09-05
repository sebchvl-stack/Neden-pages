# NEDEN — Design Source of Truth

> **Statut :** ACTIVE · 2026-09-05  
> **Repo :** Neden-pages · branche `002-design-system`  
> **Principe :** le design ne bloque jamais sur Figma Free. Git = vérité ; Figma/Penpot = projection optionnelle.

## Pipeline officiel

```text
Spec → Design Contract → Figma/Penpot (opt.) → Code → QA → DONE
```

### Statuts d’un livrable design

| Status | Signification |
|--------|----------------|
| SPECIFIED | Besoin / US / FR écrits |
| WIREFRAME | Structure, hiérarchie, breakpoints |
| DESIGNED | Tokens + composants + contrats visuels |
| PROTOTYPED | Interaction / motion décrite ou prototype |
| IMPLEMENTED | Dans le code (pages et/ou app) |
| QA | Review accessibilité / dual surface / reduced-motion |
| DONE | Accepté + documenté dans STATUS |

## Arborescence canonique

```text
design/
├── README.md                 # Index registry
├── tokens/                   # DS-F0x foundations
├── components/               # DS-C0x UI primitives
├── screens/
│   ├── app/                  # Cockpit GAS (contrats, pas rewrite React)
│   ├── site/                 # neden.fr
│   └── cv/                   # A4 print / editor
├── motion/                   # Patterns motion
├── content/                  # Copy slots (pointe memory/*)
└── assets/                   # Liens public/brand
```

## Surfaces (ne jamais fusionner)

| Surface | BG | Primary | Typo display |
|---------|-----|---------|--------------|
| **Site** | `#050505` | Orange `#F97316` | Satoshi |
| **App** | `#0B1120` | Indigo `#6366F1` | Inter only |
| **CV print** | `#FFFFFF` | Vert accent `#1B4D3E` | Inter |

Vert = **soutien uniquement** (path, success, labels).

## Modules métier — séparation stricte

| Module | Rôle | Ne pas confondre avec |
|--------|------|------------------------|
| **ARWEN** | Product Owner / pilotage produit & delivery | — |
| **VIDEO STUDIO** | Module vidéo (scripts, flux) | Brainstorm |
| **BRAINSTORMING** | Module créatif d’idéation | Video Studio |
| **JARVIS** | Orchestrateur / assistant (délègue) | Les 3 modules ci-dessus |

Aucun mélange de copy, d’écrans ou de composants nominatifs entre ARWEN, VIDEO STUDIO et BRAINSTORMING.

## Lien code existant

| Design | Code |
|--------|------|
| tokens | `src/styles/tokens.css` + `tailwind.config.js` |
| micro-interactions | `src/styles/micro.css` |
| site home | `src/pages/Home.tsx` |
| moodboard | `/moodboard` |
| CV | `cv-template/` |
| brand | `public/brand/` |

## Figma Free

- Max 3 pages : empiler frames  
- MCP optionnel — les **Design Contracts** Git suffisent pour coder  
- Voir `prompts/FIGMA_AND_AI_PROMPTS.md`

## Gouvernance

Constitution app : Preserve > Refactor · GO prod · pas de données inventées.  
Suivi permanent : `STATUS.md`.
