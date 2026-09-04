/smf-design-system

Continue building the EXISTING page `03 — Components`.

Level 1 — Primitives is approved.

In this execution build ONLY Level 2 — Feedback:

10 / Alert
11 / FormMessage
12 / Badge
13 / Toast

Do NOT create Product Patterns yet.
Do NOT create Navigation/Layout components.
Do NOT create Sprint 2 components.
Do NOT create Product Screens.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MANDATORY EXISTING SOURCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use the existing pages in this same Figma file as authoritative sources:

`00 — Direction & Audit`
→ visual direction

`01 — Brand & Assets`
→ approved brand identity

`02 — Foundations`
→ semantic colors, typography, spacing, radius, effects and accessibility

`03 — Components`
→ approved component architecture

Follow the architecture already validated in:

Button
Input
IconButton
TextLink
PasswordInput
Select
Checkbox
Radio
SegmentedControl
OTPInput

Use the same documentation structure:

Documentation
↓
Canonical Component Set / Master
↓
Examples built with instances

Do NOT create parallel design tokens.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GENERAL FEEDBACK PRINCIPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Feedback components must communicate meaning clearly.

Do not rely only on color.

Where applicable combine:

- icon
- title
- message
- state color

Use restrained visual treatment.

Do NOT make alerts/toasts look like marketing cards.

Do NOT use Earth Gold as a generic warning/status color unless explicitly appropriate.

Functional state colors from Foundations are the source of truth.

All visible product/example copy must be Spanish (Peru).

Technical component/property names may remain English.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
10 / ALERT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a real reusable Component Set:

`Alert`

Purpose:
persistent contextual feedback inside a page, form or flow.

Variant property:

Type:
- Info
- Success
- Warning
- Error
- Neutral

Optional properties:

Title
→ Text property

Message
→ Text property

Show Title
→ Boolean property

Show Icon
→ Boolean property

Show Action
→ Boolean property

Action Label
→ Text property

Dismissible
→ Boolean property if useful

Use Instance Swap for icon where practical.

Recommended anatomy:

Alert
- Icon
- Content
  - Title
  - Message
  - Action
- Close / Dismiss control if enabled

Use Auto Layout.

Support long Spanish copy.

Do not use fixed heights.

Use Hug Contents vertically.

Examples:

Info:
“Información referencial”
“Revisa los datos antes de continuar.”

Success:
“Información guardada”
“Los cambios se registraron correctamente.”

Warning:
“Revisa esta información”
“Hay datos que conviene verificar antes de continuar.”

Error:
“No pudimos continuar”
“Revisa la información ingresada.”

Neutral:
“Ten en cuenta”
“Esta información puede cambiar durante el proceso.”

Do NOT use:

“Crédito aprobado”
“Solicitud rechazada”
“Desembolso exitoso”

or any other unvalidated financial outcome.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
11 / FORMMESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`FormMessage`

Purpose:
small contextual feedback associated with a form, field group or validation area.

Variants:

Type:
- Helper
- Error
- Success
- Warning

Expose:

Message
→ Text property

Show Icon
→ Boolean property

Optional Icon
→ Instance Swap where practical

This component should be visually lighter than Alert.

Examples:

Helper:
“Completa la información requerida.”

Error:
“Revisa los datos ingresados.”

Success:
“Información válida.”

Warning:
“Verifica este dato antes de continuar.”

Do not create field-specific business validation rules.

For example, do NOT invent:

- DNI must contain exactly X digits
- phone number rules
- password requirements
- OTP attempts

unless they are later approved requirements.

Use state/error etc. from Foundations.

Ensure Error is not communicated only by color.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
12 / BADGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a reusable Component Set:

`Badge`

Purpose:
compact status/category label.

Variants:

Type:
- Neutral
- Info
- Success
- Warning
- Error
- Brand

Size:
- S
- M

Expose:

Label
→ Text property

Show Icon
→ Boolean property

Optional Icon
→ Instance Swap where practical

Use Hug Contents.

Keep badges visually compact.

Do not make them look like buttons.

Do not use excessive pill styling if it conflicts with the approved radius language.

A moderate rounded shape is acceptable.

Examples:

Neutral:
“Referencial”

Info:
“Información”

Success:
“Completado”

Warning:
“Pendiente”

Error:
“Requiere revisión”

Brand:
“San Martín”

IMPORTANT:

These are generic visual examples.

Do NOT establish them as real business statuses.

Do not create badges such as:

“Aprobado”
“Rechazado”
“Elegible”
“Preaprobado”

unless later approved by product requirements.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
13 / TOAST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Toast`

Purpose:
temporary system notification after an interaction.

Variants:

Type:
- Info
- Success
- Warning
- Error

Expose:

Title
→ Text property

Message
→ Text property

Show Title
→ Boolean property

Show Icon
→ Boolean property

Dismissible
→ Boolean property

Optional action:

Show Action
Action Label

Recommended anatomy:

Toast
- Icon
- Content
  - Title
  - Message
  - Optional Action
- Close control

Use Auto Layout.

Use Hug Contents vertically.

Set a practical min/max width for readable notifications.

Do not create giant toast cards.

Keep visual hierarchy compact.

Examples:

Success:
“Cambios guardados”
“La información se actualizó correctamente.”

Error:
“No se pudo guardar”
“Inténtalo nuevamente.”

Info:
“Información actualizada”
“Revisa los cambios realizados.”

Warning:
“Acción pendiente”
“Revisa la información antes de continuar.”

Do NOT define toast duration as a product rule in this phase.

Do NOT invent:
- 3 second duration
- retry behavior
- automatic dismissal policy
- queue limits

These can be defined during interaction/prototype work later.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FOUNDATION CONSUMPTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

All feedback components must consume existing Foundations.

Use:

state/success
state/error
state/warning
state/info

text/primary
text/secondary
text/inverse where appropriate

surface/default
surface/raised
surface/subtle

border/default
border/strong

approved spacing
approved radius
approved typography
approved focus treatment where interactive elements exist

Do NOT hardcode duplicate approved values.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPONENT ARCHITECTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use:

- real Figma Components
- Component Sets
- Variants
- Component Properties
- Auto Layout
- Hug Contents
- semantic layer naming

Prefer properties over unnecessary variant multiplication.

Example:

Do NOT create separate variants for:

Title On / Title Off
Icon On / Icon Off
Action On / Action Off

Use Boolean properties instead.

Use text properties for editable content.

Use Instance Swap for icons where practical.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DOCUMENTATION STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create these Sections:

10 / Alert
11 / FormMessage
12 / Badge
13 / Toast

Each Section must contain:

1. Documentation
2. Canonical Component Set / Master
3. Examples built from instances

Use the same 1280px page alignment currently established in the repaired Primitive sections.

Avoid arbitrary negative X positions.

Ensure all documentation containers fully contain their text.

No clipping.

No overflow.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACCESSIBILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Feedback must not depend only on color.

For status communication use a combination of:

- icon
- text
- visual styling

Ensure:

- sufficient contrast
- readable text
- actionable elements have visible focus
- dismiss controls have adequate interaction targets
- long Spanish messages reflow correctly

Do not claim accessibility certification.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DO NOT CREATE YET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Do NOT create:

Accordion
FAQItem
TrustItem
ProcessStep
SectionHeading
Stepper

Navbar
MobileNav
Footer
AuthShell
AuthBrandPanel

AmountInput
AmountSlider
TermSelector
BreakdownRow
Simulator
SimulationSummary

Do not create Product Screens.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL VALIDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before finishing verify:

ALERT
- real reusable Component Set
- Type property works
- title/message are editable
- optional elements use component properties
- long copy does not clip

FORMMESSAGE
- real reusable Component Set
- Helper/Error/Success/Warning work
- message editable
- error does not rely only on color

BADGE
- real reusable Component Set
- Type and Size work
- label editable
- Hug Contents works
- does not visually behave like a Button

TOAST
- real reusable Component Set
- Type works
- title/message editable
- dismiss/action visibility is configurable
- content reflows correctly

GENERAL
- documentation uses instances
- no duplicated hardcoded Foundations
- no unsupported business statuses were established
- Level 1 components remain unchanged
- no Product Patterns were created
- no Product Screens were created
- no other Figma page was modified

Finish ONLY Level 2 — Feedback inside `03 — Components`.