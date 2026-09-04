/smf-design-system

Continue building the EXISTING page `03 — Components`.

Level 1 — Primitives is approved.
Level 2 — Feedback is approved after the Badge correction.

In this execution build ONLY Level 3 — Product Patterns:

14 / Accordion
15 / FAQItem
16 / TrustItem
17 / ProcessStep
18 / SectionHeading
19 / Stepper

Do NOT create Navigation/Layout components yet.
Do NOT create Sprint 2 simulator components.
Do NOT create Product Screens.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MANDATORY EXISTING SOURCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use these existing pages in the same Figma file as authoritative sources:

`00 — Direction & Audit`
→ visual direction

`01 — Brand & Assets`
→ approved identity and graphic system

`02 — Foundations`
→ colors, semantic tokens, typography, spacing, radius, effects, accessibility

`03 — Components`
→ approved implementation architecture

Follow the architecture already validated in Levels 1 and 2:

Documentation
↓
Canonical Component Set / Master
↓
Examples built with instances

Use:

- real reusable Figma components
- Component Sets where appropriate
- Variants
- Component Properties
- Auto Layout
- Hug Contents
- semantic naming
- existing Foundation variables and Text Styles

Do NOT recreate Foundations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GENERAL PRODUCT PATTERN PRINCIPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These components represent reusable content/product patterns.

They are NOT final Home sections or Product Screens.

Keep them generic enough to support multiple screens.

Do not hardcode business decisions into component masters.

Visible example copy must be Spanish (Peru).

Technical property names may remain English.

Avoid:

- marketing-card overload
- excessive shadows
- unnecessary decorative containers
- unsupported claims
- invented financial metrics
- invented security/regulatory statements

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
14 / ACCORDION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a reusable Component Set:

`Accordion`

Purpose:
generic expandable/collapsible content pattern.

Variants:

State:
- Collapsed
- Expanded
- Hover
- Focus
- Disabled

Expose:

Title
→ Text property

Content
→ Text property

Show Icon
→ Boolean property if practical

Chevron / Expand icon
→ reusable icon treatment

Recommended anatomy:

Accordion
- Header
  - Title
  - Chevron
- Content

Use vertical Auto Layout.

Collapsed:
content hidden

Expanded:
content visible

Use Hug Contents vertically.

Do NOT use fixed heights that clip long content.

Focus must be visible.

Examples should use neutral informational content.

Do not establish financial or legal terms through Accordion examples.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
15 / FAQITEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`FAQItem`

Purpose:
specialized FAQ content pattern built from the Accordion language.

IMPORTANT:

Do NOT duplicate Accordion architecture unnecessarily.

Prefer to reuse / compose the approved Accordion component where practical.

Expose:

Question
→ Text property

Answer
→ Text property

State:
- Collapsed
- Expanded

Examples:

Question:
“¿Cómo funciona el proceso?”

Answer:
“Revisa la información disponible y continúa cuando estés listo.”

Question:
“¿Puedo revisar la información antes de continuar?”

Answer:
“Sí. Podrás revisar los datos mostrados antes de avanzar.”

Keep all examples generic.

Do NOT include:

- rates
- TCEA
- guaranteed approval
- approval time
- disbursement time
- unsupported eligibility rules

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
16 / TRUSTITEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`TrustItem`

Purpose:
compact reassurance/value item used in product or marketing sections.

Recommended anatomy:

TrustItem
- Icon
- Title
- Description

Expose:

Icon
→ Instance Swap property

Title
→ Text property

Description
→ Text property

Variants if useful:

Layout:
- Horizontal
- Vertical

Do NOT create unnecessary variants if Auto Layout can handle composition.

Use examples such as:

“Información clara”
“Revisa cada paso antes de continuar.”

“Proceso simple”
“Avanza de forma ordenada y comprensible.”

“Enfoque regional”
“Una experiencia pensada para San Martín.”

IMPORTANT:

Do NOT use trust claims such as:

“100% seguro”
“Garantizado”
“Protegido por SBS”
“Entidad certificada”
“Tus datos están totalmente seguros”

unless they are formally validated later.

TrustItem should communicate product value without unsupported claims.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
17 / PROCESSSTEP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a reusable Component Set:

`ProcessStep`

Purpose:
represent one step inside a user journey or explanatory process.

Expose:

Step Number / Indicator
→ Text property or visual property

Title
→ Text property

Description
→ Text property

Optional Icon
→ Boolean + Instance Swap where practical

Variants:

State:
- Default
- Active
- Completed
- Disabled

Do NOT define business process stages yet.

Use neutral examples:

Step 1
“Completa tu información”

Step 2
“Revisa los datos”

Step 3
“Continúa con el proceso”

These are documentation examples only.

Do NOT turn these examples into approved final product flow rules.

Selected/completed state must not rely only on color.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
18 / SECTIONHEADING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a reusable pattern:

`SectionHeading`

Purpose:
standardized heading block for Home and product sections.

Expose:

Eyebrow
→ Text property

Title
→ Text property

Description
→ Text property

Show Eyebrow
→ Boolean

Show Description
→ Boolean

Alignment:
- Left
- Center

Size:
- L
- M

Use typography from Foundations.

Display/editorial usage:
Cormorant Garamond where appropriate.

Supporting UI/body copy:
Source Sans 3.

Examples:

Eyebrow:
“Cómo funciona”

Title:
“Un proceso claro de principio a fin”

Description:
“Conoce cada etapa antes de continuar.”

Another example:

Title:
“Pensada desde San Martín”

Description:
“Una experiencia cercana al contexto regional.”

Do not create unsupported financial claims.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
19 / STEPPER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Stepper`

Purpose:
show progress across a multi-step product flow.

IMPORTANT:

Do not define the real registration/KYC flow yet.

Build a generic reusable system.

Recommended architecture:

`Stepper`
composed from reusable:

`StepperItem`

If cleaner, create a subcomponent:

`StepperItem`

StepperItem variants:

State:
- Upcoming
- Active
- Completed
- Error
- Disabled

Expose:

Label
→ Text property

Step Number
→ Text property where applicable

Optional icon/check indicator.

Stepper parent examples:

3 steps
4 steps

Do NOT encode a fixed number of product steps as a business rule.

Do NOT name real KYC stages yet.

Use generic example labels:

“Datos”
“Revisión”
“Confirmación”

or:

“Paso 1”
“Paso 2”
“Paso 3”

The final product flow will determine real labels later.

Completed/Error states must use icon/shape/text distinction, not only color.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FOUNDATION CONSUMPTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use existing Foundations for:

text/primary
text/secondary
text/brand
text/inverse where needed

surface/default
surface/subtle
surface/raised

border/default
border/strong
border/focus

state/success
state/error
state/warning
state/info

approved spacing
approved radius
approved typography
approved focus treatment

Do not hardcode duplicated approved values.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPOSITION / REUSE RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Prefer composition over duplication.

Examples:

FAQItem
→ reuse Accordion where technically appropriate

Stepper
→ compose StepperItem instances

Product patterns may reuse:

IconButton
TextLink
Badge

only when doing so genuinely improves architecture.

Do NOT detach or duplicate existing canonical components.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DOCUMENTATION STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create these sections:

14 / Accordion
15 / FAQItem
16 / TrustItem
17 / ProcessStep
18 / SectionHeading
19 / Stepper

For each section show:

1. Documentation
2. Canonical Component Set / Master
3. Examples using instances

Use the same 1280px documentation alignment established on the repaired Components page.

Use x=0 for Sections.

No arbitrary negative X offsets.

Ensure documentation containers fully contain their content.

No clipping.
No overlapping.
No 1px-height component errors.
No example overflow.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSIVE BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These patterns will later be used on Desktop and Mobile.

Ensure:

- long Spanish titles wrap correctly
- descriptions reflow
- components use Hug Contents where appropriate
- no fixed-width text creates unnecessary clipping
- vertical layouts remain usable on narrow screens

Do NOT create separate Desktop/Mobile components unless genuinely required.

Prefer one responsive reusable component architecture.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACCESSIBILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Accordion / FAQItem:
- visible focus
- state not communicated only by chevron direction/color
- expanded content remains readable

ProcessStep / Stepper:
- progress distinction not based only on color
- completed/error state visually distinct

SectionHeading:
- maintain semantic hierarchy visually

All interactive elements:
- readable focus
- sufficient contrast
- practical interaction targets where applicable

Do not claim accessibility certification.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DO NOT CREATE YET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Do NOT create:

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

Do not create:

Home sections
Login
Register
OTP screens
Recover screens
Simulator screens

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL VALIDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before finishing verify:

ACCORDION
- real reusable component
- collapsed/expanded work
- long content does not clip

FAQITEM
- reuses Accordion architecture where appropriate
- question/answer editable

TRUSTITEM
- icon/title/description configurable
- no unsupported trust/security claims

PROCESSSTEP
- reusable states
- title/description editable
- status does not depend only on color

SECTIONHEADING
- reusable
- Alignment and Size properties work
- eyebrow/description optional

STEPPER
- reusable parent structure
- StepperItem reusable if created
- active/completed/upcoming/error visually distinct
- no fixed business process encoded

GENERAL
- examples are instances
- Auto Layout is correct
- Foundations are reused
- no duplicated tokens
- no Product Screens created
- no Navigation/Layout components created
- no Sprint 2 components created
- no other Figma page modified

Finish ONLY Level 3 — Product Patterns inside `03 — Components`.