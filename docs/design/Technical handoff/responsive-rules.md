# San Martín Finanzas — Responsive Rules

Fuente: Figma. Desktop `1440px` y Mobile `390px` son canónicos; `1024px`, `768px` y `320px` son QA. El frontend debe comportarse de forma continua entre ellos.

## Comportamiento

| Width | Patrón | Reglas |
|---|---|---|
| `1440` | Full Desktop | Navbar Desktop, Hero horizontal, Simulator integrado en Hero y Auth split layout |
| `1024` | Compact Desktop | Mantener desktop mientras sea funcional; reducir containers y gaps; sin overflow; Auth puede mantener split layout |
| `768` | Tablet / Compact | `MobileNav`; Home apila Hero + Simulator; Auth usa BrandHeader + formulario de una columna; Simulator con navegación compacta y card centrado |
| `390` | Canonical Mobile | Usar las pantallas Mobile de Figma como referencia principal |
| `320` | Compact Mobile | Sin scroll horizontal ni labels truncados; safe margins, wrapping natural y sin widths fijos heredados de 390; social links pueden apilarse |

## Assets responsive

- Desktop: Hero Desktop y Horizon Desktop.
- Mobile: Hero Mobile y Horizon Mobile.
- Tablet: usar el asset más apropiado y ajustar crop/positioning.
- No crear assets por breakpoint salvo necesidad futura.

## Implementación

Definir breakpoints CSS después de inspeccionar el repositorio. No usar igualdad exacta de viewport, como `viewport === 768`; preferir breakpoints semánticos y comportamiento fluido.

## QA

Validar `1440`, `1024`, `768`, `390`, `320` y anchos intermedios. Revisar overflow, wrapping, navegación, formularios, Simulator, image crop, CTA y Footer.
