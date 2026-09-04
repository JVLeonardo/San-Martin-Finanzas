/smf-design-system

Start Phase 6 — Sprint 01 · Home + Auth.

For this execution build ONLY:

PHASE 6A — COMPLETE PUBLIC HOME

inside:

`04 — Sprint 01 · Public & Auth`

Do NOT create authentication screens yet.

The approved Phase 5 Hero is the source of truth.

Preserve the approved:

`Home / Desktop / Hero`
`Home / Mobile / Hero`

and extend them into complete public Home screens.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OBJECTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create two production-oriented MVP screens:

`Home / Desktop`
`Home / Mobile`

using the already approved Hero compositions as their starting point.

The goal is NOT to redesign the Hero.

The goal is to complete the public landing experience below it.

Use:

Brand Assets
+
Foundations
+
existing Components
+
approved Hero

Do not invent a second visual system.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SOURCE OF TRUTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use:

`00 — Direction & Audit`
→ product direction

`01 — Brand & Assets`
→ approved identity and graphic assets

`02 — Foundations`
→ colors, type, spacing, radius, effects

`03 — Components`
→ reusable UI system

`04 — Sprint 01 · Public & Auth`
→ approved Desktop and Mobile Hero compositions

Do NOT recreate existing components.

Use INSTANCES wherever a reusable component already exists.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN TARGETS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

1.
`Home / Desktop`
Width = 1440px

2.
`Home / Mobile`
Width = 390px

The screen height should Hug / grow naturally according to content.

Do NOT create arbitrary fixed full-page heights.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPROVED HERO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Preserve the approved Hero compositions.

For Desktop:

use the approved LIGHT / WHITE Navbar direction.

For Mobile:

use the approved Light MobileNav direction.

Do NOT redesign:

- photography
- crop
- simulator
- hero layout
- headline
- current colors
- current text placement

The Hero may be incorporated into the new full Home frame without visual modification.

Do NOT create a new Hero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HOME INFORMATION ARCHITECTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use this MVP structure:

1. Navbar / MobileNav
2. Hero + Simulator
3. Value / Trust section
4. Cómo funciona
5. Preguntas frecuentes
6. Final CTA
7. Footer

Keep the page concise.

This is an MVP, not a long marketing website.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1 — VALUE / TRUST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a concise section immediately after the Hero.

Purpose:

communicate product qualities without unsupported claims.

Use existing:

`SectionHeading`
`TrustItem`

from `03 — Components`.

Suggested heading:

`Una experiencia simple y clara`

Suggested supporting text:

`Encuentra la información principal y avanza paso a paso desde un solo lugar.`

Use approximately 3 TrustItems.

Safe documentation concepts may include:

- `Proceso claro`
  `Conoce cada paso antes de continuar.`

- `Simulación referencial`
  `Explora una estimación antes de iniciar tu proceso.`

- `Experiencia simple`
  `Una interfaz pensada para avanzar sin complicaciones.`

These are working MVP copy.

Do NOT claim:

- guaranteed approval
- instant approval
- guaranteed security
- regulatory compliance
- fastest service
- lowest rates
- customer satisfaction metrics

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2 — CÓMO FUNCIONA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a clear process section.

Use existing:

`SectionHeading`
`ProcessStep`

Prefer 3 steps maximum.

Safe conceptual flow:

1.
`Simula`
`Explora una simulación referencial.`

2.
`Continúa`
`Inicia tu proceso desde tu cuenta.`

3.
`Sigue los pasos`
`Completa la información que corresponda durante el proceso.`

IMPORTANT:

Do NOT imply:

- approval
- evaluation outcome
- eligibility
- disbursement
- exact verification procedures

Do NOT invent KYC steps or provider behavior.

This is only a high-level public explanation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3 — FAQ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Preguntas frecuentes`

Use:

`SectionHeading`
`FAQItem`

Reuse FAQItem instances.

Create approximately 4 concise questions.

Use safe product-level questions such as:

`¿La simulación representa una aprobación?`

Answer:
`No. La simulación es referencial y no representa una aprobación.`

`¿Necesito una cuenta para continuar?`

Answer:
`Sí. Para continuar con el proceso deberás ingresar o crear una cuenta.`

`¿Puedo revisar la simulación antes de continuar?`

Answer:
`Sí. El simulador permite revisar información referencial antes de continuar.`

For the fourth FAQ use a neutral product question that does NOT require undefined business, financial, legal or operational rules.

Do NOT invent:

- interest rates
- amounts
- terms
- disbursement times
- approval requirements
- penalties
- support channels
- regulatory statements

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4 — FINAL CTA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create one concise CTA section before the Footer.

Purpose:

bring the user back to the main action.

Suggested heading:

`Empieza con una simulación`

Suggested copy:

`Explora una simulación referencial y continúa cuando estés listo.`

Use an approved Button INSTANCE.

CTA:

`Simular ahora`

Do NOT use:

- “Obtén tu préstamo”
- “Crédito aprobado”
- “Recibe dinero hoy”
- “Solicita hasta S/ X”
- approval/disbursement promises

The CTA may conceptually point back to the Hero Simulator.

Prototype behavior will be defined later.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FOOTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use an INSTANCE of the approved:

`Footer`

from `03 — Components`.

Do NOT recreate it.

Use the Light or Dark theme that produces the best transition from the final CTA while remaining consistent with the approved Home direction.

Do NOT invent:

- legal registration numbers
- phone numbers
- physical addresses
- email addresses
- SBS claims
- final legal links

If the Footer component contains placeholder navigation, keep it neutral and clearly non-final.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESKTOP LAYOUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Desktop target:

1440px

Use the approved Desktop grid.

Main content:

approximately 1200px max content width.

Maintain generous but controlled vertical rhythm.

Avoid:

- enormous empty sections
- overly wide paragraphs
- excessive card grids
- dashboard styling

The Home should feel:

- commercial
- clear
- regional
- premium
- approachable

but still lightweight enough for an MVP.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MOBILE LAYOUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mobile target:

390px

Use approximately:

16–20px horizontal margins.

Convert multi-column sections into a clear vertical flow.

Recommended:

TrustItems
→ stacked

ProcessSteps
→ stacked / vertical

FAQ
→ full-width accordion flow

Final CTA
→ compact

Footer
→ existing Mobile-responsive behavior

Do NOT simply scale Desktop.

Do NOT duplicate completely separate visual systems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSIVE PREPARATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Build the structure so it can later adapt to:

Desktop:
1440
1024

Tablet:
768

Mobile:
390
320

Do NOT create all widths now.

Create only:

1440
390

But avoid architecture that will break at intermediate widths.

Use Auto Layout.

Prefer:

Fill Container
Hug Contents

Avoid fragile absolute positioning for primary sections.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GRAPHIC SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use graphic assets sparingly.

Do NOT decorate every section.

Recommended density:

Value / Trust
→ Density 0–1

Cómo funciona
→ Density 1

FAQ
→ Density 0

Final CTA
→ Density 1–2 maximum

If using a brand graphic:

Route OR Topography OR Horizon

never all together in one section.

Do NOT turn decorative assets into charts, arrows or information graphics.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COLOR / TYPOGRAPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Follow Foundations.

Use:

Cormorant Garamond
→ editorial display/headings where appropriate

Source Sans 3
→ body, UI, FAQ, functional content

Follow:

VERDE IDENTIFICA.
DORADO ACENTÚA.

Earth Gold must remain secondary.

Do not redesign the approved Hero typography in this execution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTENT SAFETY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Do NOT invent or establish:

- loan minimum
- loan maximum
- interest percentage
- TCEA
- installments
- fees
- insurance
- mora
- eligibility rules
- scoring
- approval probability
- approval times
- disbursement times
- testimonials
- customer counts
- regulator endorsements
- SBS registration claims
- certifications
- final legal wording
- final contact information

Account creation must NOT imply:

approval
eligibility
identity validation

Keep all Simulator language referential.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REUSE REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Expected reuse:

Navbar / MobileNav
→ existing instances

Simulator
→ existing instance

SectionHeading
→ existing instances

TrustItem
→ existing instances

ProcessStep
→ existing instances

FAQItem
→ existing instances

Button
→ existing instance

Footer
→ existing instance

Do NOT detach instances.

Do NOT flatten reusable components.

Do NOT rebuild existing patterns manually.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DO NOT CREATE YET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Do NOT create:

Login
Register
OTP
Recover Password
Reset Password

Do NOT create final auth flows.

Do NOT create Simulator standalone screen.

Do NOT create Sprint 2 approval/evaluation screens.

Do NOT modify:

Brand Assets
Foundations
Components

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CANONICAL SCREEN NAMES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After completion the active public screens should be:

`Home / Desktop`
`Home / Mobile`

The existing Hero frames may remain as Phase 5 reference slices if useful.

Do NOT delete approved work unless necessary.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL VALIDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DESKTOP

- width = 1440px
- approved Hero preserved
- Light Navbar direction preserved
- full public Home completed
- content max width follows grid
- Footer uses component instance

MOBILE

- width = 390px
- approved Mobile Hero preserved
- MobileNav instance preserved
- vertical flow is clear
- no horizontal overflow
- Footer adapts correctly

COMPONENT REUSE

- SectionHeading instances
- TrustItem instances
- ProcessStep instances
- FAQItem instances
- Button instance
- Footer instance
- Simulator instance

CONTENT

- no unsupported claims
- no invented financial values
- no approval implication
- no testimonials
- no final contact/legal data

GENERAL

- no clipping
- no unrelated redesign
- no new design system
- no unnecessary new components
- architecture remains adaptable to 1024 / 768 / 320

Finish ONLY:

`Home / Desktop`
`Home / Mobile`