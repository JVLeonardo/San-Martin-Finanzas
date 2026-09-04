/smf-design-system

Work ONLY inside:

`05 — Sprint 02 · Simulator`

Create the first production-oriented Sprint 2 simulator screen set for San Martín Finanzas.

IMPORTANT:

The reusable Simulator component already exists in:

`03 — Components`

Reuse it.

Do NOT rebuild the simulator from scratch.
Do NOT detach existing components unnecessarily.
Do NOT modify:

- approved Home
- Auth screens
- Brand & Assets
- Foundations
- existing component masters

This phase is about composing the PUBLIC SIMULATOR EXPERIENCE.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SPRINT 2 SCOPE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The simulator is REFERENTIAL.

It allows the user to:

1. choose / adjust an amount
2. choose / adjust a term
3. review a referential breakdown
4. continue to the next step

It does NOT perform:

- loan approval
- eligibility decision
- credit scoring
- identity approval
- disbursement
- final KYC
- final evaluation
- collections
- contractual acceptance

Simulation ≠ application ≠ approval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CREATE THESE MAIN SCREENS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

1. `Simulator / Desktop`
2. `Simulator / Mobile`
3. `Simulator / Continue Gate / Desktop`
4. `Simulator / Continue Gate / Mobile`

Do not create unnecessary additional screens yet.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
01 — SIMULATOR / DESKTOP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Simulator / Desktop`

Width:
1440px

This is a PUBLIC standalone simulator page.

Use the approved Desktop Navbar.

Recommended page structure:

Navbar

↓ 

Simulator Intro / Context

↓

Main Simulator Area

↓

Small referential information / clarification

↓

Footer

Keep the page much shorter than Home.

Do NOT reproduce the complete Home page.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTRO SECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a clear introductory block.

Suggested eyebrow:

`SIMULADOR`

Suggested heading:

`Explora una simulación referencial`

Suggested supporting copy:

`Ajusta los datos de la simulación y revisa una estimación antes de continuar.`

Keep the wording neutral.

Do NOT say:

- “Descubre cuánto te prestamos”
- “Tu préstamo está listo”
- “Conoce cuánto te aprobaremos”
- “Obtén tu crédito”
- “Aprobación inmediata”

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MAIN SIMULATOR AREA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reuse the canonical:

`Simulator`

component already created in the Design System.

Do NOT manually recreate:

- AmountInput
- AmountSlider
- TermSelector
- SimulationSummary
- BreakdownRow
- CTA buttons

Use the existing Simulator instance.

The simulator should be visually prominent but integrated into the page.

Desktop recommendation:

Use a centered or balanced two-column composition.

Possible structure:

LEFT:
context / supporting information

RIGHT:
Simulator component

OR

Centered:
Simulator with supporting information around it

Choose the composition that best fits the existing San Martín Finanzas visual system.

Do not create an oversized marketing Hero.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REFERENTIAL NOTICE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Add a clear but secondary clarification near the simulator.

Safe copy:

`La simulación es referencial y no representa una aprobación.`

Optional supporting line:

`Los resultados mostrados sirven como una estimación para continuar el proceso.`

Keep this visible but not alarmist.

Use existing:

- FormMessage
- Alert
- supporting text pattern

if appropriate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NUMERICAL CONTENT SAFETY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CRITICAL:

Do NOT invent:

- interest rates
- TCEA
- fees
- insurance
- commissions
- installment amounts
- minimum amounts
- maximum amounts
- specific loan periods
- penalties
- approval times
- disbursement times

If the existing approved Simulator component already contains sample/reference values:

PRESERVE those existing values.

Do NOT introduce new financial values in this execution.

Do not change the conceptual calculation model.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTINUE ACTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The simulator already contains its continuation CTA.

For this Sprint 2 public flow:

When an UNAUTHENTICATED user chooses to continue, the conceptual next step must be the authentication gate.

Do NOT imply that clicking continue submits a loan application.

The action means:

continue from simulation into account access.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
02 — SIMULATOR / MOBILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Simulator / Mobile`

Width:
390px

Use the approved MobileNav structure already used in Home.

Remember the approved mobile navbar order:

LEFT:
- hamburger menu
- San Martín Finanzas logo

RIGHT:
- `Comenzar`

Then use a simple vertical flow:

MobileNav
↓
Simulator Intro
↓
Simulator
↓
Referential Notice
↓
Footer or compact public closing area

Do not reproduce the full Home.

Keep the simulator easy to reach.

Avoid excessive decorative content before the interactive area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSIVE SIMULATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reuse the existing Simulator instance.

Do NOT rebuild its internal controls.

Ensure:

- no horizontal overflow
- amount controls fit
- term selector fits
- breakdown remains readable
- CTA remains visible
- informational copy wraps correctly

Validate at:

390px

and ensure conceptual adaptability to:

320px

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
03 — CONTINUE GATE / DESKTOP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Simulator / Continue Gate / Desktop`

This screen/state represents what happens when an unauthenticated user attempts to continue after the simulation.

Do NOT create a financial approval screen.

The objective is simply to explain that the user needs an account to continue.

Suggested heading:

`Continúa con tu cuenta`

Suggested copy:

`Ingresa o crea una cuenta para continuar con el proceso.`

Primary CTA:

`Comenzar`

Secondary action:

`Ingresar`

Optional tertiary action:

`Volver al simulador`

Reuse approved:

- Button
- TextLink
- Auth-related components where appropriate

Do NOT request additional personal data here.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GATE PRESENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Choose the cleanest existing pattern.

It may be:

- a centered panel
- a dedicated state
- a modal-like composition

But it must be clearly represented in Figma as part of the simulator flow.

Avoid creating a new complex component system.

The gate should feel:

- simple
- clear
- trustworthy
- low-friction

Do NOT say:

- “Crea tu cuenta para recibir tu préstamo”
- “Regístrate para ser aprobado”
- “Tu crédito te espera”

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
04 — CONTINUE GATE / MOBILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Simulator / Continue Gate / Mobile`

Width:
390px

Use the same content:

Heading:
`Continúa con tu cuenta`

Copy:
`Ingresa o crea una cuenta para continuar con el proceso.`

Primary:
`Comenzar`

Secondary:
`Ingresar`

Optional:
`Volver al simulador`

Keep the interaction area compact and touch-friendly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VISUAL DIRECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sprint 2 should feel consistent with the approved Home.

Allowed brand resources:

- Route
- Topography
- approved logo assets

Use them sparingly.

The simulator itself is a FUNCTIONAL zone.

Do NOT place strong graphics behind controls.

Do NOT use Horizon behind simulator inputs.

Recommended density:

Intro:
low-medium

Simulator:
functional / low decoration

Continue Gate:
low

Footer:
existing approved pattern

Hierarchy:

TASK > DATA > CONTENT > BRAND > DECORATION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPONENT REUSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reuse existing components wherever applicable:

- Navbar
- MobileNav
- Simulator
- AmountInput
- AmountSlider
- TermSelector
- SimulationSummary
- BreakdownRow
- Button
- TextLink
- Alert
- FormMessage
- Footer

Do NOT create duplicate versions of existing masters.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTENT SAFETY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

All visible product content must be in Spanish.

Do NOT introduce unsupported:

- financial terms
- legal conditions
- rates
- fees
- policies
- regulatory claims
- approval language
- scoring claims
- partner claims
- processing times

The page must clearly communicate:

SIMULATION = REFERENTIAL ESTIMATE.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL VALIDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before finishing verify:

- `Simulator / Desktop` created
- `Simulator / Mobile` created
- `Simulator / Continue Gate / Desktop` created
- `Simulator / Continue Gate / Mobile` created
- canonical Simulator component reused
- existing Navbar/MobileNav reused
- existing Footer reused where appropriate
- no unsupported financial values introduced
- no approval language introduced
- simulation remains clearly referential
- unauthenticated continuation leads conceptually to Register/Login
- Desktop and Mobile remain structurally consistent
- Home and Auth remain unchanged

Finish ONLY this first Sprint 2 simulator screen set.