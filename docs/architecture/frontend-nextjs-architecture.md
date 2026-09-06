# Arquitectura frontend Next.js

## Estado

Arquitectura vigente para `apps/web/`, aceptada mediante `ADR-013`. Debe materializarse incrementalmente con cada feature autorizada.

## Principios

- Feature-first con capas ligeras.
- Server Components por defecto; Client Components solo donde exista interacción.
- Pages y layouts delgados: componen, no concentran implementación.
- Design tokens únicos y semánticos; no duplicar la estrategia de Figma.
- Backend como autoridad de negocio y autorización.
- BFF sin tokens sensibles en el navegador.
- Accesibilidad y responsive forman parte del componente, no son una fase correctiva tardía.
- No crear abstracciones hasta que exista un consumidor real.

## Estructura objetivo

```text
apps/web/
├─ app/
│  ├─ (public)/
│  │  ├─ page.tsx
│  │  └─ simulador/
│  │     ├─ page.tsx
│  │     └─ continuar/page.tsx
│  ├─ (auth)/
│  │  ├─ layout.tsx
│  │  ├─ ingresar/page.tsx
│  │  ├─ registro/page.tsx
│  │  ├─ recuperar-acceso/page.tsx
│  │  ├─ verificar/page.tsx
│  │  ├─ nueva-contrasena/page.tsx
│  │  └─ contrasena-actualizada/page.tsx
│  ├─ api/                         # BFF futuro; crear solo con integración aprobada
│  ├─ error.tsx
│  ├─ not-found.tsx
│  ├─ globals.css
│  └─ layout.tsx
├─ features/
│  ├─ home/
│  │  ├─ components/
│  │  └─ index.ts
│  ├─ simulator/
│  │  ├─ components/
│  │  ├─ model/
│  │  ├─ mocks/
│  │  └─ index.ts
│  └─ auth/
│     ├─ components/
│     ├─ model/
│     ├─ schemas/                  # Crear al aprobar estrategia de validación
│     ├─ mocks/
│     └─ index.ts
├─ components/
│  ├─ ui/
│  └─ layout/
├─ lib/
│  ├─ config/
│  ├─ shared/
│  ├─ client/
│  └─ server/                      # Sesión, Cognito y API; nunca importar en cliente
├─ styles/
│  ├─ tokens.css
│  └─ utilities.css
├─ tests/
│  ├─ integration/
│  └─ e2e/
├─ public/
└─ package.json
```

Solo deben existir las carpetas que ya tengan archivos necesarios. `api/`, `schemas/`, `lib/server` y pruebas se materializan cuando sus tareas sean autorizadas.

## Responsabilidad por capa

| Capa | Contiene | No contiene |
|---|---|---|
| `app` | Rutas, layouts, metadata, loading/error boundaries y composición | Secciones extensas, reglas de negocio o clientes HTTP reutilizables |
| `features` | UI y estado propios de Home, Auth o Simulator; mocks y modelos de UI | Primitives genéricos, secretos o acceso directo a otras features |
| `components/ui` | Button, Input, Select, Checkbox, OTPInput, Alert, Badge, Toast | Copy de una pantalla, navegación de negocio o llamadas a API |
| `components/layout` | Navbar, MobileNav, Footer, AuthShell y AuthBrandPanel | Reglas de formularios o del Simulator |
| `lib/shared` | Utilidades puras, tipos transversales y helpers sin entorno | Código dependiente del navegador o servidor |
| `lib/client` | Adaptadores exclusivos del navegador y hooks realmente compartidos | Secretos, tokens o acceso a servicios internos |
| `lib/server` | Sesión, configuración privada, adaptadores Cognito/API y protección BFF | Imports desde Client Components o reglas financieras |
| `styles` | Tokens, foundations y utilidades globales aprobadas | Estilos específicos de una feature sin reutilización |
| `public` | Assets exactos de `asset-map.md` | Duplicados o reexportaciones de Figma |

## Módulos de Sprint 1

### Home

`features/home` contiene Hero, Value, Process, Regional, Allies, FAQ, CTA y Social. Navbar y Footer permanecen compartidos en `components/layout`.

### Simulator referencial

`features/simulator` contiene AmountInput, AmountSlider, TermSelector, BreakdownRow, SimulationSummary y Simulator. Sus valores viven en `mocks/`, se etiquetan como demostración y no implementan fórmulas, persistencia ni endpoints.

### Auth visual

`features/auth` contiene los formularios y estados visuales de Login, Register, Forgot Password, Verification, New Password y Password Updated. `app/(auth)/layout.tsx` aplica AuthShell sin duplicarlo. La integración Cognito/BFF queda fuera de esta fase.

## API pública de una feature

Cada feature expone únicamente lo necesario mediante su `index.ts`:

```ts
export { LoginForm } from "./components/login-form";
```

Código externo importa desde `@/features/auth`, no desde internals profundos. Dentro de la propia feature se permiten imports relativos.

## Datos y flujo futuro

```text
Browser
  └─ Client Component
       └─ Route Handler / Server Action autorizado
            └─ lib/server
                 ├─ sesión server-side
                 ├─ Cognito/OIDC
                 └─ Spring Boot API ──> dominio y persistencia
```

- El navegador recibe cookies protegidas, nunca access o refresh tokens.
- Un Server Component puede llamar `lib/server` directamente y evitar una llamada HTTP a su propio Route Handler.
- Todo Route Handler se trata como endpoint público y valida entrada, autenticación y autorización.
- Ninguna validación frontend sustituye la validación o autorización backend.

## Estado y formularios

- Estado local para interacción aislada.
- URL/search params para estado navegable y no sensible cuando sea útil.
- Estado de servidor para datos remotos futuros.
- No agregar un store global sin una necesidad transversal demostrada.
- Mantener schemas junto a la feature; compartir únicamente contratos verdaderamente transversales.
- En la fase visual, los submits se simulan de forma explícita y no aparentan una sesión real.

## Styling y Design System

- `styles/tokens.css` traduce `design-tokens.md` a custom properties semánticas.
- `app/globals.css` importa Tailwind 4, tokens y utilidades globales.
- Variantes de componentes se resuelven en el primitive, no copiando clases entre pantallas.
- Evitar valores arbitrarios cuando exista un token.
- Desktop `1440` y mobile `390` son referencias canónicas; `1024`, `768` y `320` son anchos de QA, no implementaciones separadas.

## Convenciones

- Archivos y carpetas: `kebab-case`.
- Componentes y tipos: `PascalCase`.
- Funciones y variables: `camelCase`.
- Un componente por responsabilidad; no un archivo por cada fragmento de markup.
- Evitar carpetas genéricas como `utils/` o `common/` sin propósito definido.
- Promover una pieza desde feature a shared solo cuando tenga reutilización real.
- Mantener el alias existente `@/*`; no crear aliases adicionales sin necesidad.

## Testing objetivo

- Tests unitarios colocados junto al módulo: `component.test.tsx` o `model.test.ts`.
- Tests de integración en `tests/integration` para flujos entre componentes.
- Tests E2E en `tests/e2e` para rutas y recorridos críticos.
- La elección e instalación de herramientas de testing requiere tarea y aprobación separadas.

## Adopción incremental

1. Foundations: mover tokens a `styles/` y configurar fuentes desde RootLayout.
2. UI primitives: crear solo los componentes exigidos por la primera vertical slice.
3. Layout: Navbar, MobileNav y estructura compartida.
4. Vertical slice: `Navbar + Hero + Simulator` con mocks aislados.
5. Completar Home.
6. Crear AuthShell y rutas de autenticación reutilizando primitives.
7. Añadir estados de ruta, responsive, accesibilidad y visual QA.
8. Incorporar pruebas y BFF en tareas posteriores autorizadas.

Cada paso debe conservar build funcional, pruebas proporcionales, diff pequeño y revisión antes del siguiente.

## Fuentes de verdad

1. Figma aprobado para intención visual.
2. `docs/design/Technical handoff/` para contrato de implementación.
3. ADR aceptados para decisiones arquitectónicas.
4. `docs/architecture/` para arquitectura vigente.
5. Código y pruebas para comportamiento implementado.
