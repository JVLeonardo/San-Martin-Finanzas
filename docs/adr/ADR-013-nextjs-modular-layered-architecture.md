# ADR-013: Arquitectura modular por capas para Next.js

- Estado: Aceptado
- Fecha: 2026-09-05
- Aprobación: decisión humana expresa para materializar la arquitectura en `feature/s1-frontend`

## Contexto

El frontend en `apps/web/` usa Next.js 16, React 19, TypeScript estricto, App Router y Tailwind CSS 4. El contrato de Figma exige Home, autenticación, un Simulator referencial, componentes reutilizables, responsive continuo, accesibilidad y una integración posterior mediante BFF.

La aplicación todavía conserva la estructura mínima de `create-next-app`. Se necesita una organización escalable que permita implementar el Sprint 1 por etapas sin duplicar componentes, mezclar código cliente y servidor, ni trasladar reglas de negocio financiero al frontend.

## Decisión

Adoptar una arquitectura **feature-first con capas ligeras**:

1. `app/`: routing, layouts, metadata, boundaries y Route Handlers futuros.
2. `features/`: módulos verticales de producto, inicialmente `home`, `auth` y `simulator`.
3. `components/`: primitives y estructuras visuales compartidas, sin conocimiento de features.
4. `lib/`: infraestructura transversal, configuración y adaptadores separados entre servidor y cliente.
5. `styles/`: tokens semánticos y estilos globales integrados con Tailwind CSS 4.
6. `public/`: assets aprobados del contrato visual.

Las capas se crearán incrementalmente cuando una tarea las necesite. No se crearán carpetas vacías, abstracciones especulativas ni una réplica del dominio del backend.

## Reglas de dependencia

```text
app ───────────────> features ───────────────> components/ui
 │                       │                         │
 └───────────────> lib/shared <───────────────────┘
 │
 └───────────────> lib/server  (solo código servidor)

features X──> app
components X──> features
client code X──> lib/server
```

- `app/` compone features; no contiene lógica de producto extensa.
- Una feature no importa internals de otra feature. La composición entre features ocurre en `app/`.
- `components/ui` no importa desde `features`, `app` ni `lib/server`.
- Los módulos cliente nunca importan código de servidor, secretos, sesiones ni tokens.
- El BFF transforma y protege tráfico, pero no implementa reglas financieras ni sustituye Spring Boot.
- Los modelos del frontend representan estado de UI o contratos de transporte; las entidades y reglas de negocio pertenecen al backend.
- Los datos simulados se aíslan en `features/*/mocks` y nunca se presentan como resultados reales.

## Server y Client Components

- `page.tsx` y `layout.tsx` permanecen como Server Components por defecto.
- Usar `"use client"` únicamente en hojas interactivas: formularios, navegación móvil, sliders, OTP y controles con estado.
- Mantener los Client Components pequeños y recibir datos serializables mediante props.
- Los Server Components futuros llaman adaptadores de `lib/server` directamente; no llaman por HTTP a Route Handlers de la misma aplicación.
- Los Route Handlers son endpoints públicos y deben validar entrada, autenticación, autorización, CSRF cuando aplique y errores no sensibles.

## Consecuencias

### Positivas

- Crecimiento por feature sin convertir `app/` en un directorio monolítico.
- Reutilización controlada de primitives y layouts del Design System.
- Separación visible entre presentación, interacción y futura integración segura.
- Menor JavaScript cliente al conservar Server Components por defecto.
- Mocks reemplazables sin contaminar contratos funcionales futuros.

### Costes

- Requiere disciplina en imports y APIs públicas de cada feature.
- Algunas piezas pequeñas pueden permanecer locales antes de justificar promoción a `components/`.
- La validación automática de límites entre capas podría requerir tooling futuro y aprobación de dependencia.

## Alternativas consideradas

- **Todo dentro de `app/`:** válida para aplicaciones pequeñas, pero facilita mezclar routing, UI e integración al crecer Home y Auth.
- **Carpetas globales por tipo (`components`, `hooks`, `services`) solamente:** simple al inicio, pero dispersa cada feature entre muchas carpetas.
- **Clean Architecture completa en frontend:** descartada para el MVP por exceso de capas y porque el dominio financiero pertenece a Spring Boot.
- **Estado global desde el inicio:** descartado; usar estado local, servidor o URL hasta demostrar una necesidad compartida.

## Alcance de adopción

La propuesta se limita al frontend visual del Sprint 1. No autoriza dependencias, endpoints, Cognito, sesión, persistencia, fórmulas financieras ni funcionalidad de Sprint 2.

## Validación pendiente

- Decisión separada para formularios, esquemas de validación, iconos y tooling de pruebas.
- Revisión de límites al comenzar la integración BFF/Cognito.

## Referencias

- `docs/design/Technical handoff/implementation-plan.md`
- `docs/design/Technical handoff/screen-map.md`
- `docs/design/Technical handoff/design-tokens.md`
- `docs/adr/ADR-002-nextjs-app-router.md`
- `docs/adr/ADR-007-bff-authentication.md`
- <https://nextjs.org/docs/app/getting-started/project-structure>
- <https://nextjs.org/docs/app/getting-started/server-and-client-components>
- <https://nextjs.org/docs/app/guides/backend-for-frontend>
