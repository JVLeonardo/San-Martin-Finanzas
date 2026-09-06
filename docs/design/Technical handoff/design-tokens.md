# San Martín Finanzas — Design Tokens

Fuente: `Figma → 02 — Foundations`

Mapear estos valores a la estrategia existente del repositorio. No crear una segunda estrategia de tokens.

## Colors

| Token | Valor |
|---|---|
| Forest 900 | `#0E3F2B` |
| Forest 700 | `#145C3A` |
| Forest 500 | `#2F7D57` |
| Earth Gold | `#C79A52` |
| Warm White | `#F7F4EE` |
| White | `#FFFFFF` |
| Surface Subtle | `#F2EFE9` |
| Surface Secondary | `#EAF2ED` |
| Ink | `#24312B` |
| Muted | `#66736D` |
| Border | `#DCE5DF` |
| Border Strong | `#A8BFB0` |
| Success | `#1A7A3D` |
| Error | `#C53030` |
| Warning | `#B8860B` |
| Info | `#2563EB` |

`Earth Gold`: `ACCENT ONLY`.

## Typography

- Display: `Cormorant Garamond`
- UI, forms, navigation y body: `Source Sans 3`

| Style | Size/Line height |
|---|---|
| Display/L | `56/64` |
| Display/M | `44/52` |
| H1 | `36/44` |
| H2 | `30/38` |
| H3 | `24/32` |
| H4 | `20/28` |
| Body/L | `18/28` |
| Body/M | `16/24` |
| Body/S | `14/20` |
| Label/M | `14/20` |
| Label/S | `12/16` |
| Caption | `13/18` |
| Button | `16/24` |

## Spacing

`4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 120`

## Radius

`8 / 12 / 16 / 20`

## Effects

Implementar según Figma: subtle shadow, card shadow y visible focus ring.

## Reglas técnicas

- Preferir tokens semánticos; evitar colores y spacing arbitrarios.
- Usar `next/font` si encaja con la arquitectura actual.
- Objetivo de accesibilidad: WCAG 2.2 AA.
