# San Martín Finanzas — Asset Map

Fuente visual: `Figma → 01 — Brand & Assets`  
Fuente técnica: `/public`

## Logos

| Asset | Ruta |
|---|---|
| Logo Horizontal Positive | `/brand/logos/logo-horizontal-positive.png` |
| Logo Horizontal Negative | `/brand/logos/logo-horizontal-negative.png` |
| Logo Compact Positive | `/brand/logos/logo-compact-positive.png` |
| Logo Compact Negative | `/brand/logos/logo-compact-negative.png` |
| Compact Monochrome Light | `/brand/logos/logo-compact-monochrome-light.png` |
| Compact Monochrome Dark | `/brand/logos/logo-compact-monochrome-dark.png` |

Uso: identidad principal según la composición aprobada. Auth compacto/móvil debe usar `Logo Horizontal Negative`.

## Symbols

| Asset | Ruta |
|---|---|
| Isotype | `/brand/symbols/isotype.png` |
| Eagle Symbol | `/brand/symbols/eagle-symbol.png` |

Uso: solo donde la composición aprobada lo requiera; no sustituyen al logo principal.

## Digital

| Asset | Ruta |
|---|---|
| App Icon | `/brand/digital/app-icon.png` |
| Favicon | `/brand/digital/favicon.png` |

Uso: superficies digitales correspondientes; no usar como logo de navegación.

## Graphic System

| Asset | Ruta |
|---|---|
| Route Primary Forest | `/brand/graphics/route-primary-forest.png` |
| Route White | `/brand/graphics/route-white.png` |
| Route Vertical Forest | `/brand/graphics/route-vertical-forest.png` |
| Route Fragment Forest | `/brand/graphics/route-fragment-forest.png` |
| Route Microaccent Gold | `/brand/graphics/route-microaccent-gold.png` |
| Topography Light | `/brand/graphics/topography-light.png` |
| Topography Dark | `/brand/graphics/topography-dark.png` |
| Horizon Desktop | `/brand/graphics/horizon-desktop.png` |
| Horizon Mobile | `/brand/graphics/horizon-mobile.png` |

Uso: Route como acento direccional, Topography como textura sutil y Horizon como atmósfera regional. Prioridad: `Content > Brand > Decoration`.

### Reserved for future evaluation

| Asset | Ruta | Estado |
|---|---|---|
| Topography Dark 2 | `/brand/graphics/topography-dark2.png` | Reserva técnica para posible uso futuro; no forma parte de las variantes activas del handoff y no debe utilizarse sin validación visual y aprobación explícita |

## Hero Photography

| Uso | Ruta |
|---|---|
| Desktop | `/images/hero/hero-desktop-approved-01.png` |
| Mobile | `/images/hero/hero-mobile-approved-01.jpg` |

Son composiciones distintas; no reemplazar Mobile con un crop de Desktop. La UI del teléfono debe neutralizarse y validarse antes de producción.

## Reglas críticas

- Inspeccionar `/public` y reutilizar estos archivos antes de crear assets.
- No duplicar ni reexportar assets desde capturas de Figma.
- Preservar aspect ratio; los decorativos pueden recortarse o reposicionarse sin causar overflow funcional.
- No inventar sustitutos: reportar cualquier asset faltante.
