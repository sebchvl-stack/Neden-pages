# DS-N06 — Roadmap / Activity

**Status :** DESIGNED  
**Used by :** A01 dashboard activity · optional ARWEN signals · formations progress

## Activity feed row
```
┌──────────────────────────────────────┐
│ •  14:32  Label action               │
│           Context muted · optional → │
└──────────────────────────────────────┘
```
- Dot color by type : cyan (system) · indigo (user) · green-light (success) · orange (urgent)
- Time mono 11–12px muted
- Max 10 items on dashboard then « Voir tout »

## Roadmap (horizontal, optional)
```
[Phase 1] ——— [Phase 2] ——— [Phase 3]
   done         current        todo
```
- Phase chip : done = green-light · current = indigo · todo = muted border
- Connector line 2px border-strong
- Mobile : vertical stack same semantics

## Rules
- Only real events from API / Notion / triggers
- No fake « activity » placeholders presented as fact
