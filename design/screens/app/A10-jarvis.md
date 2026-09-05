# A10 — JARVIS

**Status :** DESIGNED  
**See also :** `design/components/N01-agent-persona.md`

## Layout
```
┌─────────────────────────┐
│ Orb + state label       │
├─────────────────────────┤
│ Message list (scroll)   │
├─────────────────────────┤
│ Input + send + mic/file │
└─────────────────────────┘
```

## States UI
| State | Visual |
|-------|--------|
| idle | orb cyan soft pulse |
| listening | waveform / ring pulse |
| speaking | indigo glow |
| thinking | opacity pulse |
| error | danger text under orb |

## Input
- Text field
- Mic if available
- **File audio capture** fallback (GAS iframe blocks getUserMedia)

## Rules
JARVIS délègue aux modules — UI ne duplique pas ARWEN/Video/Brainstorm
