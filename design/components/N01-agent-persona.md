# DS-N01 — Agent / Persona (JARVIS)

**Status :** DESIGNED  
**Screen :** A10  
**Isolation :** JARVIS only — not ARWEN, not Video, not Brainstorm

## Orb
- Size mobile 56–72px · desktop 80px
- Gradient cyan → indigo subtle
- Shadow glow-cyan idle

## State machine (UI)
```text
idle → listening → thinking → speaking → idle
         ↘ error ↗
```

| State | Motion | Color |
|-------|--------|-------|
| idle | pulse 3s opacity 0.85–1 | cyan soft |
| listening | scale ring 1→1.08 | cyan |
| thinking | rotate dots or opacity | muted/indigo |
| speaking | glow indigo stronger | indigo |
| error | static | danger text |

## Chat
- User bubble : indigo soft right
- Agent bubble : surface left
- Meta time 11px subtle
- N02 for structured AI result cards inside thread

## Reduced motion
Static orb color change only, no pulse
