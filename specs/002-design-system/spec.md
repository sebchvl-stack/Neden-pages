# Feature Specification: Design System & Identité graphique NEDEN

**Feature Branch**: `002-design-system`

**Created**: 2026-09-04

**Status**: Draft

**Input**: Identité graphique duale (Site neden.fr ≠ App NEDEN), logo typo + favicon 120×120, design system, maquettes PC/tablette/mobile site et app, CV Figma blocs éditables, motion inspirée Framer (Clearpath, Marketing Lab, Sensoria, Strand, Trova, Spector, Habitline). Vert soutien uniquement.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Design System tokens documentés et applicables (Priority: P1)

En tant que designer/dev, je dispose d’une charte unique (couleurs, typo, radius, motion) différenciant site et app, consomable en CSS et en Figma.

**Why this priority**: Bloque toutes les maquettes et le développement.

**Independent Test**: `tokens.css` + doc master permettent de styler un bouton site (orange) et un bouton app (indigo) sans ambiguïté.

**Acceptance Scenarios**:

1. **Given** le design system, **When** je lis les tokens site, **Then** fond #050505, CTA #F97316, vert uniquement soutien
2. **Given** le design system, **When** je lis les tokens app, **Then** fond #0B1120, primary #6366F1, cyan data
3. **Given** les tokens, **When** export CSS, **Then** variables `--neden-*` présentes et nommées

---

### User Story 2 - Maquettes site responsive (Priority: P1)

En tant que DA, je fournis (Figma ou spec+prompts) Home et sections clés en 1440 / 768 / 390 avec path scroll, hero monumental, blocs cascade.

**Why this priority**: Base OAuth homepage + image de marque.

**Independent Test**: Un tiers peut reconstruire le hero + 3 sections depuis prompts/spec sans inventer la charte.

**Acceptance Scenarios**:

1. **Given** prompts Hero, **When** génération Figma/IA, **Then** path vertical, titre accent green-light, KPI, CTA orange
2. **Given** breakpoints, **When** mobile 390, **Then** layout non compact, nav adaptée

---

### User Story 3 - Maquettes app + JARVIS (Priority: P2)

Écrans app desktop/mobile : dashboard, candidatures, tâches, JARVIS, réglages — style produit distinct du site.

**Independent Test**: Sidebar/tabs + cards navy reconnaissables vs site marketing noir.

---

### User Story 4 - Logo + favicon 120×120 (Priority: P2)

Wordmark NEDEN Satoshi-like + icône N 120×120 squircle.

**Acceptance Scenarios**:

1. **Given** wordmark, **When** sur fond noir/blanc, **Then** lisible, moderne, palindrome respecté
2. **Given** favicon 120×120, **When** import OAuth consent, **Then** ≤1 Mo PNG/JPG/BMP carré

---

### User Story 5 - CV Figma blocs éditables (Priority: P2)

Template A4 avec calques nommés (titre, profil, KPI, XYZ, skills, tools, keywords, formation) alimentés par memory/*.

**Acceptance Scenarios**:

1. **Given** memory/PROFILE.json, **When** remplissage CV, **Then** aucune donnée inventée
2. **Given** changement d’offre, **When** édition titre/mots-clés/XYZ, **Then** blocs modifiables indépendamment

---

### Edge Cases

- Plan Figma Starter : max 3 pages → empiler frames, ne pas createPage au-delà
- MCP Figma rate limit → livrer prompts + checklist manuelle
- `prefers-reduced-motion` → pas d’animation obligatoire

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST document dual surfaces Site vs App (tokens, motion, typo)
- **FR-002**: Site MUST use orange CTA; App MUST use indigo primary; green MUST be support-only
- **FR-003**: Motion patterns MUST include Clearpath path, Marketing Lab hero reveal, Strand subtle icons, Sensoria cascade
- **FR-004**: Logo MUST be typographic NEDEN; favicon MUST be 120×120
- **FR-005**: CV template MUST expose editable named blocks for offer adaptation
- **FR-006**: All factual CV/site content MUST trace to memory/* (Constitution-compatible)
- **FR-007**: Deliverables MUST include SpecKit plan/tasks + prompts for third-party AI/Figma
- **FR-008**: Production deploy of site/app visuals MUST wait explicit GO

### Key Entities

- **DesignToken**: name, hex/value, surface (site|app|shared)
- **MockupFrame**: name, breakpoint, surface
- **CvBlock**: id, memorySource, editable
- **MotionPattern**: id, inspiration, implementation hint

## Success Criteria *(mandatory)*

- **SC-001**: Dev can implement hero + tokens without asking color questions
- **SC-002**: Site and App are visually distinguishable in < 3 seconds
- **SC-003**: CV blocks cover all memory categories needed for offer adapt
- **SC-004**: Another AI can execute FIGMA_AND_AI_PROMPTS.md end-to-end

## Assumptions

- Figma file NOLZUnUcR2iFPiu0bAzZjz (3 pages max Starter)
- Content memory already on design/site-foundation
- React+Vite site on Neden-pages; GAS app on Neden-application
- No production deploy without GO
