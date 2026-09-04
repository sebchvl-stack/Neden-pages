# Tasks: Design System & Identité NEDEN

**Input**: specs/002-design-system/
**Prerequisites**: plan.md, spec.md, research.md

## Format: `[ID] [P?] [Story] Description`

## Phase 1: Setup

- [x] T001 Create branch `002-design-system` from design/site-foundation
- [x] T002 [P] Scaffold specs/002-design-system SpecKit files
- [ ] T003 [P] Ensure prompts/ and docs/ paths exist on branch

## Phase 2: Foundational (BLOCKS stories)

- [ ] T004 [P] Publish `docs/DESIGN_SYSTEM_MASTER.md` (dual surface charte)
- [ ] T005 [P] Publish `prompts/FIGMA_AND_AI_PROMPTS.md`
- [ ] T006 [P] Publish `docs/WIREFRAMES_SPEC.md`
- [ ] T007 Align `src/styles/tokens.css` with contract tokens.contract.md
- [ ] T008 [P] Update `docs/MOTION.md` + `docs/TYPOGRAPHY.md` cross-links
- [ ] T009 Verify memory/* OUTILS includes Figma Mobbin Vercel Cloudflare Grok etc.

**Checkpoint**: Foundation docs complete

## Phase 3: US1 — Tokens applicables (P1) 🎯 MVP

- [ ] T010 [US1] Validate tokens.css against FR-001/FR-002
- [ ] T011 [US1] Add short `docs/SITE_VS_APP.md` one-pager difference table
- [ ] T012 [US1] Sample component classes in global.css (btn site vs note app)

**Checkpoint**: US1 testable via CSS alone

## Phase 4: US2 — Maquettes site (P1)

- [ ] T013 [P] [US2] Figma or prompt-run Hero desktop 1440
- [ ] T014 [P] [US2] Hero mobile 390
- [ ] T015 [US2] Sections frame (Profil, Skills, XYZ, NEDEN, Contact)
- [ ] T016 [US2] Document node names / export checklist in docs/FIGMA_FRAMES.md

**Checkpoint**: Third party can rebuild site marketing frames

## Phase 5: US3 — Maquettes app (P2)

- [ ] T017 [P] [US3] App mobile shell + tabs
- [ ] T018 [P] [US3] Dashboard + Candidatures + JARVIS states list in FIGMA_FRAMES.md
- [ ] T019 [US3] Desktop app sidebar wireframe spec

## Phase 6: US4 — Logo & favicon (P2)

- [ ] T020 [P] [US4] Generate/export wordmark NEDEN (PNG/SVG)
- [ ] T021 [P] [US4] Favicon 120×120 PNG ≤1Mo
- [ ] T022 [US4] Store under public/brand/ + document usage

## Phase 7: US5 — CV editable (P2)

- [ ] T023 [US5] CV A4 frame spec + named layers (link CV_TEMPLATE_FIGMA.md)
- [ ] T024 [US5] Map each layer → memory/* field
- [ ] T025 [US5] Cross-link feature `001-cv-generator` for HTML/PDF implementation

## Phase 8: Polish

- [ ] T026 [P] AI_HANDOFF.md update with 002-design-system pointers
- [ ] T027 Consistency pass Site vs App table
- [ ] T028 **GATE: GO utilisateur** avant implémentation motion complète + deploy Cloudflare

## Dependencies

- Phase 2 blocks US1–US5
- US2/US3 can run parallel after Phase 2
- US5 depends on memory/* (already present)
- T028 blocks production

## MVP

Phase 1–3 (docs + tokens) = MVP design system without Figma GUI if MCP blocked.
