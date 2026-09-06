# San Martín Finanzas — Figma Handoff

## Estado

- Design Freeze: `v1`
- Estado: `APPROVED FOR FRONTEND IMPLEMENTATION`
- Responsive QA: `PASS`

## Figma Source of Truth

Archivo principal: <https://www.figma.com/design/8ISzLY2nkzyb5eMIGb2UlP/San-Martin-Finanzas---Product-Design>

| Página | Fuente para |
|---|---|
| `01 — Brand & Assets` | Logos, símbolos, fotografía aprobada, Route, Topography, Horizon, App Icon y Favicon |
| `02 — Foundations` | Colores, tipografía, spacing, radius, sombras, accesibilidad, grids y breakpoints de referencia |
| `03 — Components` | Componentes reutilizables y Simulator |
| `04 — Sprint 01 · Public & Auth` | Home, Login, Register, Forgot Password, Verification, New Password y Password Updated |
| `05 — Sprint 02 · Simulator` | Simulator y Continue Gate |
| `06 — Flows & Prototype` | Navegación, prototipo y QA responsive en 1024 / 768 / 320 |

`04` y `05` son las fuentes visuales canónicas de producción. `06` es solo referencia de flujo y validación.

## Sprint 1 visual scope exception

Por decisión humana, el Simulator, `/simulador` y `/simulador/continuar` se incluyen en Sprint 1 únicamente para la implementación visual de la demo. Aunque los diseños canónicos continúan organizados en la página de Figma `05 — Sprint 02 · Simulator`, esta excepción no adelanta datos, fórmulas, reglas, persistencia, evaluación ni integraciones funcionales de Sprint 2. Los estados de autenticación también serán simulados durante esta fase visual.

Componentes definidos en `03`: Button, IconButton, TextLink, Input, PasswordInput, Select, Checkbox, Radio, SegmentedControl, OTPInput, Alert, FormMessage, Badge, Toast, FAQItem, TrustItem, ProcessStep, SectionHeading, Navbar, MobileNav, Footer, AuthShell, AuthBrandPanel, Simulator y subcomponentes.

## Canonical Widths

- Desktop canónico: `1440px`
- Mobile canónico: `390px`
- Validación: `1024px`, `768px`, `320px`

El frontend debe responder de forma continua entre estos puntos. No crear una implementación por cada ancho exacto de Figma.

## Principio de implementación

Figma define intención visual, jerarquía, composición, estados canónicos y marca. Frontend define responsive continuo, interacción, routing, accesibilidad, estados, validaciones e integración con backend.

Los ajustes técnicos responsive pueden resolverse en código si preservan la intención aprobada. Los cambios visuales o de producto importantes deben sincronizarse con Figma.

## Restricciones financieras

El simulador es `REFERENCIAL`. No inventar ni inferir tasas, TCEA, comisiones, seguros, montos, plazos o cuotas oficiales, tiempos de aprobación o desembolso, scoring, elegibilidad, garantías, claims regulatorios, certificaciones, partners ni testimonios.

Los valores de demostración deben quedar aislados en frontend, identificados como referenciales y ser reemplazables cuando exista una especificación funcional aprobada. `Continuar` no crea ni inicia una solicitud de crédito.

Crear una cuenta no implica aprobación de préstamo.

## Brand & Assets

- Usar assets aprobados; no reconstruir logos con texto.
- No estirar ni deformar logos, símbolos, fotografía, Route, Topography o Horizon.
- Auth móvil usa `Logo Horizontal Negative`; no sustituirlo por Compact Negative, Isotype, Eagle, App Icon o Favicon.
- Prioridad: `Content > Brand > Decoration`.
- Route comunica dirección, continuidad, progreso o acento; no usar como gráfico, mapa, flecha ni relleno repetitivo.
- Topography es textura secundaria; evitarla en formularios densos, OTP o interfaces de alta carga cognitiva.
- Horizon aporta profundidad regional y atmósfera territorial.

## Hero Photography

La composición está aprobada, pero la UI visible en el teléfono contiene contenido similar a una aprobación de crédito. Debe reemplazarse por contenido neutral y validado antes de producción. No tratar la fotografía como evidencia de un cliente real.

## Known Non-Blocking Debt

- **Hero Phone UI:** neutralizar antes de producción.
- **Raster Assets:** PNG/WebP aceptados para MVP; vectorización en POST-MVP / Brand System v2.
- **Responsive QA Layer Names:** pueden conservar nombres históricos como `status-BLOCKER` o `status-REFINE` aunque el estado visible sea PASS; es solo deuda documental.
