/smf-design-system

Work ONLY inside:

`05 — Sprint 02 · Simulator`

Refine the existing Sprint 2 simulator experience by adding the necessary interaction states and state documentation.

IMPORTANT:

Do NOT redesign the simulator.
Do NOT rebuild existing components.
Do NOT modify:
- Home
- Auth
- Brand & Assets
- Foundations
- existing component masters

Reuse the current Simulator system and existing approved components.

The goal is to make the simulator flow clearer and implementation-ready for MVP.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OBJECTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Represent the main functional states of the public referential simulator.

Create a compact state set showing:

1. Default
2. Editing / Active interaction
3. Updated simulation result
4. Validation / Error
5. Ready to continue
6. Continue → Authentication Gate relationship

Do not create unnecessary full-page duplicates.

Prefer a controlled documentation/state area inside:

`05 — Sprint 02 · Simulator`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STATE 1 — DEFAULT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Simulator / State / Default`

Use the existing canonical Simulator instance.

This state represents the simulator before meaningful user interaction.

Preserve the existing approved sample/reference values already present.

Do NOT introduce new:
- amounts
- terms
- rates
- fees
- installments

Do not change the calculation model.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STATE 2 — ACTIVE / EDITING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Simulator / State / Editing`

Represent the simulator while the user is interacting with a control.

Show ONE realistic active interaction state only.

Preferred:
- AmountSlider / Focus
or
- AmountInput / Focus
or
- TermSelector selected/active

Reuse existing component variants.

Do NOT fake new component states.

The visual goal is to show clear focus and interaction feedback.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STATE 3 — UPDATED RESULT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Simulator / State / Updated`

Represent that the simulation summary has updated after the user changes amount or term.

IMPORTANT:

Use only the values already available in the existing approved simulator examples.

Do NOT invent new financial numbers.

The key thing to communicate is:

INPUT CHANGES
→
SUMMARY UPDATES

Do not create approval language.

Do not add:
- “Resultado aprobado”
- “Oferta disponible”
- “Monto aprobado”
- “Crédito disponible”

Keep the concept:

`Resultado de simulación referencial`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STATE 4 — VALIDATION / ERROR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Simulator / State / Error`

Show a safe validation example using existing error variants.

Preferred examples:

- invalid amount input
- required value missing
- unsupported/invalid input format

Use existing:
- AmountInput error state if available
- Input Error
- FormMessage / Error
- Alert / Error

Safe error copy examples:

`Revisa el monto ingresado.`

or

`Ingresa un valor válido para continuar.`

Do NOT invent:
- minimum amount
- maximum amount
- eligibility thresholds
- financial policy limits

Do NOT use copy such as:
`El monto mínimo es S/ ...`
unless already formally validated elsewhere.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STATE 5 — READY TO CONTINUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Simulator / State / Ready`

Represent the simulator in a valid, completed state with the continuation CTA clearly available.

The CTA must communicate continuation only.

Safe label:

`Continuar`

or preserve the existing approved CTA label.

Do NOT change it to:

- `Solicitar ahora`
- `Obtener préstamo`
- `Enviar solicitud`
- `Aprobar crédito`

This state only means:

the user has a valid referential simulation and may continue to account access.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTINUE FLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Document clearly the conceptual relationship:

`Simulator / State / Ready`
→
`Simulator / Continue Gate`

For unauthenticated users:

`Continuar`
→
Authentication Gate

Then:

Primary:
`Comenzar`

Secondary:
`Ingresar`

Optional:
`Volver al simulador`

Do NOT create additional loan-processing steps.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STATE DOCUMENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a compact documentation strip or section outside the main production screens.

Recommended title:

`Simulator States`

For each state include:

- state name
- preview
- short purpose note

Keep it concise.

Suggested state labels:

- Default
- Editing
- Updated
- Error
- Ready

Visible product UI must remain in Spanish.

Documentation labels may remain consistent with the current internal naming system.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPONENT REUSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reuse:

- Simulator
- AmountInput
- AmountSlider
- TermSelector
- SimulationSummary
- BreakdownRow
- Button
- FormMessage
- Alert

Do NOT detach instances unless absolutely necessary.

Do NOT create duplicate masters.

If a needed state already exists in a component:
use that variant.

If a needed state does NOT exist:
do not invent a new visual state casually.

Only create a new component state if it is genuinely necessary and consistent with the Design System.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MOBILE CONSIDERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Do NOT duplicate every state as full Mobile screens unless needed.

Instead:

- ensure the existing mobile Simulator can represent the same states
- add one or two compact mobile state examples only if useful

Priority:
- Error
- Ready

Validate that the simulator remains usable at:

390px

and conceptually at:

320px

No horizontal overflow.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTENT SAFETY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Do NOT introduce or define:

- interest rate
- TCEA
- fees
- insurance
- commissions
- minimum / maximum amounts
- exact loan terms
- penalties
- scoring thresholds
- eligibility rules
- approval probability
- approval times
- disbursement times

The simulator remains:

REFERENTIAL ONLY.

Simulation does NOT represent:

- approval
- offer
- application submission
- eligibility
- disbursement

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VISUAL PRIORITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is primarily a functional-state exercise.

Decoration density:
LOW.

Do not add:
- new Horizon graphics
- strong Route graphics
- heavy Topography

Keep focus on:
- controls
- state feedback
- readability
- CTA behavior

Hierarchy:

TASK > STATE > DATA > CONTENT > BRAND > DECORATION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL VALIDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before finishing verify:

- Default state represented
- Editing state represented
- Updated result state represented
- Error state represented
- Ready state represented
- Ready state clearly leads to Continue Gate
- existing simulator component is reused
- no unsupported financial values introduced
- no approval language introduced
- no duplicate component masters created
- mobile usability remains preserved
- Home and Auth remain unchanged

Finish ONLY this simulator-state refinement.