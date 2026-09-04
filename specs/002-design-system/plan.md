# Implementation Plan: Design System & Identité NEDEN

**Branch**: `002-design-system` | **Date**: 2026-09-04 | **Spec**: specs/002-design-system/spec.md

**Input**: Feature specification from `/specs/002-design-system/spec.md`

## Summary

Formaliser l’identité duale Site (éditorial, motion forte, orange) vs App (outil, navy, indigo), livrer tokens CSS, documentation master, prompts Figma/IA, wireframes, et structure CV éditable — sans déployer en production sans GO.

## Technical Context

**Language/Version**: Markdown specs + CSS tokens + React 18/Vite (site) + HTML/GAS (app)

**Primary Dependencies**: Framer Motion (site), existing tokens.css, Figma (manuel si MCP limit)

**Storage**: Git docs + memory/* ; pas de DB design

**Testing**: Review visuelle checklist ; reduced-motion manual

**Target Platform**: Web desktop/tablet/mobile ; Figma design file

**Project Type**: design-system + documentation + front site

**Performance Goals**: 60fps transform/opacity animations ; LCP hero acceptable

**Constraints**: Vert non dominant ; 3 pages Figma max Starter ; MCP rate limit possible ; GO before prod

**Scale/Scope**: ~7 site sections × 3 breakpoints ; ~11 app screens × 2–3 breakpoints ; 1 CV A4

## Constitution Check

| Principle | Status |
|-----------|--------|
| I Preserve > Refactor | PASS — extend tokens/docs, no rewrite app architecture |
| IV Protect secrets | PASS — no secrets in design docs |
| V Respect architecture | PASS — site React Pages ; app remains GAS |
| VI Deterministic data | PASS — CV from memory only |
| IX Spec before significant implementation | PASS — this feature |
| X Production deliberate | PASS — explicit GO gate in tasks |

## Project Structure

### Documentation (this feature)

```text
specs/002-design-system/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── tokens.contract.md
└── tasks.md
```

### Related repo paths

```text
Neden-pages/
├── src/styles/tokens.css
├── src/styles/global.css
├── memory/*
├── docs/DESIGN_SYSTEM_MASTER.md
├── docs/WIREFRAMES_SPEC.md
├── docs/MOTION.md
├── docs/TYPOGRAPHY.md
├── docs/CV_SYSTEM.md
└── prompts/FIGMA_AND_AI_PROMPTS.md
```

**Structure Decision**: Design source of truth lives in Neden-pages; app consumes shared principles (indigo/navy) without copying site motion.

## Complexity Tracking

| Note | Detail |
|------|--------|
| Dual brand surfaces | Required by product (marketing site ≠ productivity app) |
| Figma MCP limits | Mitigated by prompts + manual checklist |
