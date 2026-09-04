# San Martín Finanzas — Product Design Roadmap

**Documento maestro de ruta para Figma Pro**  
**Estado:** Activo  
**Propósito:** servir como fuente de verdad para ejecutar el rediseño de San Martín Finanzas por etapas, sin depender del contexto completo del chat ni cambiar de rumbo durante el proceso.

---

## 1. Principios de trabajo

- Figma Design será la fuente maestra del producto.
- Figma Make se usará después de aprobar Design System y pantallas críticas.
- No se volverá a intentar resolver todo mediante un único prompt maestro.
- Cada fase debe cerrarse antes de escalar a la siguiente.
- Se reutilizará lo válido del trabajo anterior, pero no se conservarán estructuras obsoletas por obligación.
- Los assets raster PNG/WebP son válidos para el MVP.
- La vectorización de logos y recursos gráficos queda como mejora futura, no como bloqueo del MVP.
- Todo contenido visible del producto debe estar en español (Perú).
- No inventar tasas, TCEA, montos definitivos, aprobación, tiempos, claims regulatorios, alianzas, certificaciones ni reglas comerciales no validadas.
- Sprint 1 y Sprint 2 son los límites funcionales activos del MVP de diseño actual.

---

## 2. Arquitectura oficial del archivo Figma

```text
00 — Direction & Audit
01 — Brand & Assets
02 — Foundations
03 — Components
04 — Sprint 01 · Public & Auth
05 — Sprint 02 · Simulator
06 — Flows & Prototype
90 — Archive
```

Cada página tiene una función específica y no debe mezclarse con las demás.

---

## 3. FASE 0 — Protección del trabajo anterior

### Objetivo
Asegurar que el archivo anterior pueda consultarse si se necesita recuperar una referencia.

### Acciones
- Crear o conservar una copia/versionado `Legacy AI Pass`.
- Mantener ese archivo como histórico.
- Eliminar del archivo activo las pantallas antiguas que se decidió rehacer.
- No migrar componentes falsos, duplicados manuales ni variables obsoletas solo por conservar trabajo previo.

### Criterio de salida
- Existe una copia histórica accesible.
- El archivo activo está listo para reorganizarse desde una base limpia.

---

## 4. FASE 1 — `00 — Direction & Audit`

### Objetivo
Crear la página que gobierna la dirección visual y de producto.

Esta página **no** es el repositorio de assets. Es un tablero de intención, referencias y decisiones.

### 4.1 Product Direction

**Título:** `San Martín Finanzas — Product Direction`

**Descripción breve:**

> Plataforma digital regional de microfinanzas para San Martín, Perú. El producto debe transmitir claridad, cercanía, responsabilidad y profesionalismo, con una identidad regional propia y reconocible.

**Principios:**
- Claro antes que complejo.
- Regional, no turístico.
- Profesional, no bancario genérico.
- Humano, no artificial.
- Digital, pero cercano.

### 4.2 Visual Principles

**Debe sentirse:**
- regional
- cálido
- confiable
- serio
- contemporáneo
- editorial
- distintivo

**Evitar:**
- estética SaaS genérica
- fintech cripto
- banco tradicional frío
- selva turística cliché
- exceso de cards
- exceso de verde
- Earth Gold dominante
- estética AI-template
- fotografía de stock artificial

### 4.3 Hero Visual Target

Colocar la imagen de referencia principal del Hero.

**Etiqueta obligatoria:**

`HERO REFERENCE — COMPOSITION ONLY — NOT FOR PRODUCTION`

**Tomar de la referencia:**
- composición integrada
- fotografía como parte real del Hero
- simulador con gran protagonismo
- balance izquierda/derecha
- profundidad
- presencia comercial
- jerarquía clara
- regionalidad
- sensación premium

**No tomar:**
- cifras
- montos
- plazos
- TCEA
- cuota
- aprobación
- desembolso
- tiempos
- claims SBS
- teléfono
- WhatsApp
- textos comerciales de la imagen
- cualquier dato no validado

### 4.4 Approved Hero Photography

Colocar la fotografía aprobada para Hero.

**Etiqueta:**

`APPROVED HERO PHOTOGRAPHY — CURRENT MVP`

**Documentar:**
- uso: Home Hero
- desktop: permitido
- mobile crop: permitido
- se puede aplicar overlay/gradiente/crop
- no alterar rasgos faciales
- no presentar IA como cliente real si la imagen no es fotografía real

### 4.5 Graphic System Reference

Mostrar previews de:
- La Ruta
- Horizonte
- Topografía

**La Ruta**
- dirección
- continuidad
- recorrido
- progreso

**Horizonte**
- territorialidad
- atmósfera
- profundidad regional

**Topografía**
- textura secundaria
- fondo de baja intensidad

**Regla:** No usar La Ruta + Horizonte + Topografía indiscriminadamente en una sola composición.

### 4.6 Brand Recognition Snapshot

Mostrar solo previews:
- logo horizontal positivo
- logo horizontal negativo
- logo compacto positivo
- logo compacto negativo
- isotipo
- símbolo águila
- app icon
- favicon

### 4.7 Current Decisions

- Tipografía aprobada: `Cormorant Garamond + Source Sans 3`
- Assets raster aprobados para MVP
- Vectorización: post-MVP / Brand System v2
- Hero photography aprobada
- Simulator = uno de los dos anclajes principales del Hero
- Desktop first
- Mobile se diseña después del Desktop aprobado
- Earth Gold = acento, no color dominante
- Figma Design = fuente maestra

### Criterio de salida
- La dirección visual está documentada.
- La referencia Hero está separada de contenido real.
- Los recursos gráficos tienen función definida.
- Las decisiones activas son inequívocas.

---

## 5. FASE 2 — `01 — Brand & Assets`

### Objetivo
Crear el catálogo organizado de assets oficiales que utilizará el MVP.

### Regla principal
No importar todas las resoluciones como assets distintos. Por cada variante visual se elegirá un master raster de máxima calidad disponible.

### 5.1 Logo System

Crear:
- `Brand/Logo/Horizontal/Positive`
- `Brand/Logo/Horizontal/Negative`
- `Brand/Logo/Compact/Positive`
- `Brand/Logo/Compact/Negative`

Cada uno como componente Figma aunque internamente utilice PNG. No crear tamaños como variantes.

### 5.2 Symbol System

Crear:
- `Brand/Symbol/Isotype`
- `Brand/Symbol/Eagle`

**Isotype**
- águila + montañas + ruta
- identidad compacta

**Eagle**
- símbolo digital simplificado
- aplicaciones pequeñas o de marca secundaria

### 5.3 Digital Identity

Crear:
- `Brand/Digital/AppIcon`
- `Brand/Digital/Favicon`

**Favicon**
- master
- preview 16
- preview 32
- preview 48

**App Icon**
- master
- preview 64
- preview 128
- safe area

### 5.4 Graphic System

**La Ruta**
- `Brand/Graphic/Route/Forest`
- `Brand/Graphic/Route/White`

**Topografía**
- `Brand/Graphic/Topography/Light`
- `Brand/Graphic/Topography/Dark`

**Horizonte**
- `Brand/Graphic/Horizon/Desktop`
- `Brand/Graphic/Horizon/Mobile`

Desktop y Mobile pueden conservar masters separados porque son composiciones adaptadas al breakpoint.

### 5.5 Photography

Crear sección:

```text
Photography
  Hero
  People
  Business
  Territory
```

Por ahora:
- registrar la fotografía Hero aprobada
- no convertir todas las fotografías en componentes
- usar fills/crops cuando corresponda
- conservar el master sin crop destructivo

### 5.6 References

Registrar:
- Hero visual reference
- guideline boards relevantes
- material conceptual

Etiquetar como:

`REFERENCE — NOT FOR PRODUCTION`

### 5.7 Política raster del MVP

> Raster masters approved for MVP. Vector replacements may be introduced in Brand System v2 without changing component naming or product architecture.

### Criterio de salida
- Todos los assets principales tienen nombre canónico.
- Las pantallas futuras usarán instancias/componentes, no PNG sueltos.
- No hay duplicación innecesaria por tamaño.
- Hero reference y production assets están diferenciados.

---

## 6. FASE 3 — `02 — Foundations`

### Objetivo
Construir foundations operativos y vinculables al frontend.

### 6.1 Color Primitives

```text
Forest/900
Forest/700
Forest/500
Earth/Gold
Warm/White
Neutral/White
Ink
Muted
Border
```

Valores base:

```text
Forest 900  #0E3F2B
Forest 700  #145C3A
Forest 500  #2F7D57
Earth Gold  #C79A52
Warm White  #F7F4EE
White       #FFFFFF
Ink         #24312B
Muted       #66736D
Border      #DCE5DF
```

### 6.2 Semantic Color Tokens

```text
surface/default
surface/subtle
surface/raised
surface/brand
surface/inverse

text/primary
text/secondary
text/inverse
text/brand

action/primary
action/primary-hover
action/secondary

border/default
border/strong
border/focus

state/success
state/error
state/warning
state/info
```

### 6.3 Typography

- Cormorant Garamond SemiBold → display/editorial
- Source Sans 3 → UI/producto

Text styles:

```text
Display/L
Display/M
Heading/H1
Heading/H2
Heading/H3
Heading/H4
Body/L
Body/M
Body/S
Label/M
Label/S
Caption
Button
```

### 6.4 Spacing

```text
4
8
12
16
24
32
40
48
64
80
96
120
```

### 6.5 Radius

```text
8
12
16
20
```

### 6.6 Grid

Crear grids para:
- Desktop 1440
- Tablet
- Mobile 390

Referencia:
- Desktop: 12 columnas
- Mobile: 4 columnas
- max content desktop aproximado: 1200px
- mobile margins: 16–20px

### 6.7 Effects

Solo:
- shadow/subtle
- shadow/card
- focus ring

### 6.8 Accessibility Base

Revisar:
- WCAG 2.2 AA
- contraste
- focus
- touch targets
- error states
- información no dependiente solo de color

### Criterio de salida
- Foundations sin duplicados.
- Variables vinculables.
- Text styles aplicables.
- Grid definido.
- Tokens semánticos preparados para código.

---

## 7. FASE 4 — `03 — Components`

### Objetivo
Construir una biblioteca real de componentes e instancias.

### Orden de construcción

**Nivel 1 — Primitives**
1. Button
2. IconButton
3. TextLink
4. Input
5. PasswordInput
6. Select
7. Checkbox
8. Radio / Segmented Control
9. OTPInput

**Nivel 2 — Feedback**
10. Alert
11. FormMessage
12. Badge
13. Toast

**Nivel 3 — Product Patterns**
14. Accordion
15. FAQItem
16. TrustItem
17. ProcessStep
18. SectionHeading
19. Stepper

**Nivel 4 — Navigation / Layout**
20. Navbar
21. MobileNav
22. Footer
23. AuthShell
24. AuthBrandPanel

**Nivel 5 — Sprint 2**
25. AmountInput
26. AmountSlider
27. TermSelector
28. BreakdownRow
29. Simulator
30. SimulationSummary

### 7.1 Estados

- default
- hover
- focus
- active
- filled
- disabled
- loading
- error
- success

### 7.2 Primer piloto

Antes de escalar:
1. Button
2. Input

Validar:
- variables
- variants
- properties
- Auto Layout
- accesibilidad
- contenido largo
- naming

### Criterio de salida
- Componentes reutilizables reales.
- Pantallas futuras construidas con instancias.
- Naming consistente.
- Variantes controladas.

---

## 8. FASE 5 — Primer vertical slice

Validar el nuevo método con:

```text
Foundations
→ Brand Assets
→ Button/Input
→ Header
→ Hero Desktop
→ Hero Mobile
```

Este es el primer milestone visual real.

---

## 9. FASE 6 — `04 — Sprint 01 · Public & Auth`

### Objetivo
Construir Sprint 1 usando exclusivamente foundations/componentes aprobados.

### 9.1 Home Desktop

Primero Hero Desktop.

**Prioridades:**
- headline/contenido a la izquierda
- fotografía aprobada integrada
- simulator como gran anclaje a la derecha
- profundidad visual
- regionalidad
- composición unificada
- evitar módulos desconectados
- no usar claims no validados

### 9.2 Home Sections

**Bloque A**
- Hero
- Trust/value strip
- Cómo funciona

**Bloque B**
- Pensada desde San Martín
- Transparencia
- Seguridad

**Bloque C**
- FAQ
- Final CTA
- Footer

Ecosistema/institucional solo sin inventar partners.

### 9.3 Home Mobile

Diseñar después de aprobar Desktop.

Revisar:
- header
- Hero
- fotografía
- simulator
- CTA
- steps
- spacing
- FAQ
- footer

### 9.4 Authentication Master

Comenzar con `Login / Desktop`.

Después:
- Login Mobile
- Register Desktop
- Register Mobile
- OTP Desktop
- OTP Mobile
- Recover Desktop
- Recover Mobile
- Reset Desktop
- Reset Mobile

### 9.5 Auth Principles

- form-first
- branding controlado
- copy español
- no fake bank claims
- no fake security certifications
- no OTP limits inventados
- no reglas de contraseña inventadas si no están definidas
- no KYC completo dentro de Register

### Criterio de salida
- Home Desktop/Mobile aprobados.
- Auth Desktop/Mobile coherente.
- Todas las pantallas usan componentes.
- Sprint 1 visualmente cerrado.

---

## 10. FASE 7 — `05 — Sprint 02 · Simulator`

### Objetivo
Convertir el simulador informativo de Sprint 1 en el simulador referencial funcional definido para Sprint 2.

### 10.1 Estados obligatorios

```text
Simulator / Default
Simulator / Editing
Simulator / Calculating
Simulator / Result
Simulator / Invalid
Simulator / Error
```

### 10.2 UX del simulador

Debe permitir:
- seleccionar monto
- seleccionar plazo
- obtener cálculo referencial
- mostrar desglose
- continuar a Solicitar

Mostrar:
- capital
- interés
- conceptos aplicables
- total referencial

No presentar como definitivos:
- tasa comercial
- TCEA
- min/max monto
- mora
- ITF
- reglas comerciales pendientes

Los plazos 7 / 15 / 30 días se consideran parámetros provisionales de Sprint 2.

### 10.3 Summary

Diseñar `Simulation Summary`.

Debe ser un resumen informativo, no contrato final.

### 10.4 Solicitar

```text
Simulator
→ Result
→ Solicitar
→ Login / Register
```

Nunca:

```text
Simulator
→ Crédito aprobado
```

### Criterio de salida
- Simulador funcional a nivel UX/prototipo.
- Todos los estados diseñados.
- Información financiera claramente referencial.
- Integrado con Auth.

---

## 11. FASE 8 — `06 — Flows & Prototype`

### Objetivo
Crear un prototipo demostrable del MVP.

### Happy paths

**Flow A**
```text
Home
→ Simulator
→ Result
→ Solicitar
→ Login/Register
```

**Flow B**
```text
Register
→ OTP
→ Account created / continuation
```

**Flow C**
```text
Login
→ authenticated continuation
```

**Flow D**
```text
Forgot Password
→ Recover
→ Reset
→ Login
```

### Estados críticos

- loading
- disabled
- validation
- error
- success
- OTP invalid
- OTP expired
- calculation error

### QA Responsive

- 1440
- 1024
- 768
- 390
- 320

### QA Accessibility

- contrast
- focus
- labels
- touch targets
- keyboard
- reflow
- error clarity

### QA Content

- español Perú
- no claims inventados
- no fake regulation
- no partners inventados
- no cifras provisionales presentadas como definitivas

### Criterio de salida
El flujo principal puede ser demostrado sin explicación externa.

---

## 12. FASE 9 — Figma Make

### Objetivo
Usar Make solamente cuando el sistema y las pantallas críticas estén aprobados.

### Entrada mínima
- Library publicada
- Foundations estables
- Components estables
- Hero aprobado
- Home aprobado
- Auth master aprobado
- Simulator aprobado

### Uso
Make se utilizará para:
- prototipo funcional
- interacción
- exploración puntual
- responsive
- comportamiento
- demostraciones

No se usará para redefinir la marca desde cero.

---

## 13. FASE 10 — Make Kit

Crear:

`San Martín Finanzas Make Kit`

Incluir:
- variables
- styles
- components
- guidelines
- design rules

---

## 14. FASE 11 — Handoff a Frontend

### Objetivo
Preparar el sistema para implementación.

Alinear:
- nombres de tokens
- components
- states
- responsive
- assets
- copy
- interactions

Figma Design continúa siendo fuente visual de verdad.

---

## 15. FASE 12 — `90 — Archive`

### Objetivo
Conservar material histórico sin contaminar las páginas activas.

Mover aquí:
- exploraciones descartadas
- Hero variants rechazadas
- componentes deprecated
- pantallas antiguas útiles como referencia
- decisiones visuales anteriores
- pruebas AI
- alternativas descartadas

No debe utilizarse contenido de Archive como fuente activa de producto.

---

## 16. Orden maestro de ejecución

```text
0. Backup / Legacy AI Pass

1. 00 — Direction & Audit
2. 01 — Brand & Assets
3. 02 — Foundations
4. 03 — Components

5. Vertical Slice:
   Button/Input
   Header
   Hero Desktop
   Hero Mobile

6. 04 — Sprint 01 · Public & Auth
   Home Desktop
   Home Mobile
   Login
   Register
   OTP
   Recover
   Reset

7. 05 — Sprint 02 · Simulator
   Simulator states
   Result
   Summary
   Auth handoff

8. 06 — Flows & Prototype

9. QA

10. Publish Library

11. Figma Make

12. Make Kit

13. Handoff frontend

14. 90 — Archive / cleanup
```

---

## 17. Regla para retomar trabajo en futuras conversaciones

Antes de continuar cualquier fase:

1. Revisar este archivo.
2. Identificar la fase activa.
3. Verificar criterios de salida de la fase anterior.
4. No adelantar fases salvo decisión explícita.
5. Registrar cualquier cambio estructural importante en este roadmap.

---

## 18. Estado inicial del roadmap

### Completado / decidido

- Figma Pro adquirido.
- Auditoría inicial realizada.
- Trabajo anterior protegido mediante enfoque Legacy.
- Pantallas anteriores no se consideran necesarias para migración.
- Assets PNG/WebP aprobados para MVP.
- Vectorización postergada.
- Hero visual reference definido.
- Hero photography definida.
- Tipografía vigente: Cormorant Garamond + Source Sans 3.
- Paleta vigente definida.
- Nueva arquitectura de páginas aprobada conceptualmente.

### Próximo paso activo

`00 — Direction & Audit`

Después:

`01 — Brand & Assets`

No avanzar a Foundations hasta que ambas páginas estén suficientemente ordenadas.

---

## 19. Log de decisiones

| Fecha | Decisión | Motivo |
|---|---|---|
| 2026-09-03 | PNG/WebP válidos como masters MVP | Evitar bloquear el MVP por vectorización |
| 2026-09-03 | Vectorización post-MVP | Mejora futura de Brand System |
| 2026-09-03 | Pantallas antiguas se rehacen | Calidad insuficiente |
| 2026-09-03 | Figma Design es fuente maestra | Make se usará después |
| 2026-09-03 | Trabajo por fases, no mega prompts | Mejor control y calidad |
| 2026-09-03 | Hero Desktop se aprueba antes de Home completa | Es la pieza visual prioritaria |
| 2026-09-03 | Mobile se deriva de una dirección Desktop aprobada | Evitar divergencia visual |

---

## 20. Definition of Done global

El Product Design del MVP estará listo cuando:

- Brand & Assets esté organizado.
- Foundations esté operativo.
- Components esté componentizado.
- Home Desktop/Mobile esté aprobado.
- Auth Desktop/Mobile esté completo.
- Simulator Sprint 2 esté completo.
- Flujos principales estén prototipados.
- Responsive esté revisado.
- Accessibility tenga QA.
- Copy esté validado.
- No existan claims financieros/regulatorios inventados.
- Library esté publicada.
- El handoff a frontend sea inequívoco.
