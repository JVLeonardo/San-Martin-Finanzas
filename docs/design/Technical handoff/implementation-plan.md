# San Martín Finanzas — Frontend Implementation Plan

## Workflow

`Inspect → Plan → Implement → Validate`

No implementar todo el sitio desde Figma en una sola tarea.

## Approved Sprint 1 visual exception

El Simulator y las rutas `/simulador` y `/simulador/continuar` están autorizados en Sprint 1 solo como frontend visual referencial. Usar estados simulados y datos de demostración claramente aislados. No implementar fórmulas, persistencia, endpoints, scoring, elegibilidad, solicitud de crédito ni otras decisiones funcionales de Sprint 2. La autenticación también permanece simulada hasta la etapa de Backend Integration.

## 1. Repository Audit

Antes de modificar archivos, inspeccionar `package.json`, `src/`, `app/`, `components/`, `styles/`, `public/`, TypeScript, Next, ESLint, styling, fonts, aliases, forms, validation, icons y testing. No imponer una arquitectura sin comprender la existente.

## 2. Foundations

Mapear colors, typography, spacing, radius, shadows y focus states desde `design-tokens.md`.

## 3. UI Primitives

Reutilizar o implementar Button, IconButton, TextLink, Input, PasswordInput, Select, Checkbox, Radio, SegmentedControl, OTPInput, Alert, FormMessage, Badge y Toast. Evitar duplicados.

## 4. Structural Components

Implementar Navbar, MobileNav, Footer, AuthShell, AuthBrandPanel, SectionHeading, FAQItem, TrustItem y ProcessStep.

## 5. Simulator Components

Implementar AmountInput, AmountSlider, TermSelector, BreakdownRow, SimulationSummary y Simulator. El simulador permanece `REFERENCIAL`, usa únicamente datos visuales de demostración aprobados y no ejecuta cálculos crediticios reales.

## 6. Vertical Slice

Implementar `Navbar + Hero + Simulator` y validar en `1440`, `1024`, `768`, `390` y `320`. Antes de continuar con Home, validar fonts, assets, tokens, responsive y reutilización de componentes.

## 7. Home

Implementar Hero, Simulator, Value, Process, Regional, Allies, FAQ, CTA, Social y Footer.

## 8. Authentication

Implementar con componentes compartidos: Login, Register, Forgot Password, Verification, New Password y Password Updated. No duplicar layouts.

## 9. Simulator Routes

Implementar `/simulador` y `/simulador/continuar` como rutas visuales de Sprint 1. `Continuar` puede navegar a registro o ingreso, pero no crea una solicitud ni conecta lógica de Sprint 2.

## 10. Routing & States

Conectar `screen-map.md`. Implementar hover, focus, active, disabled, loading y errors. No inventar reglas de negocio.

## 11. Responsive QA

Validar `1440`, `1024`, `768`, `390`, `320` y anchos intermedios.

## 12. Visual QA

Comparar con Figma: spacing, typography, wrapping, alignment, radii, image crop, section sizing y responsive behavior.

## 13. Accessibility

Validar keyboard, focus, semantic HTML, labels, ARIA, asociación de errores, touch targets y contraste.

## 14. Backend Integration

Después de estabilizar el frontend, integrar auth, register, OTP, password recovery, session y Spring Boot APIs.

## Codex Rules

- Inspeccionar antes de modificar.
- Reutilizar arquitectura, componentes y assets de `/public`.
- Evitar valores visuales arbitrarios.
- No inventar contenido financiero.
- Consultar Figma por nodos concretos.
- Validar después de cada etapa importante.
