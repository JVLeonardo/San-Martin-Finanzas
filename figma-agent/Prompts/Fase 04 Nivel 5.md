/smf-design-system



Continue building the EXISTING page `03 — Components`.



Follow the approved San Martín Finanzas roadmap.



Levels 1–4 are approved.



In this execution build ONLY Level 5 — Sprint 2 / Simulator Components:



25 / AmountInput

26 / AmountSlider

27 / TermSelector

28 / BreakdownRow

29 / Simulator

30 / SimulationSummary



Do NOT create Product Screens yet.



Do NOT create the final Home Hero.

Do NOT create the final Simulator Screen.

Do NOT define final financial/business rules.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRODUCT CONTEXT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



Sprint 2 includes a FUNCTIONAL REFERENTIAL loan simulator.



The simulator may conceptually support:



\- amount

\- term

\- referential simple-interest calculation

\- visible breakdown

\- CTA to continue



However:



simulation ≠ approval



simulation ≠ eligibility



simulation ≠ disbursement



Do NOT encode unsupported financial rules into the Design System.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MANDATORY EXISTING SOURCES

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



Use the existing pages in this Figma file:



`00 — Direction \& Audit`

→ visual/product direction



`01 — Brand \& Assets`

→ approved identity



`02 — Foundations`

→ colors, typography, spacing, radius, effects



`03 — Components`

→ approved architecture from Levels 1–4



Reuse existing components wherever appropriate:



Input

Button

TextLink

Badge

FormMessage

SegmentedControl

SectionHeading



Do NOT duplicate them.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GENERAL RULE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



These are REAL reusable product components.



They will later be used directly inside the actual simulator interface.



Build them flexible enough to receive final business values later.



Do NOT hardcode:



\- minimum loan amount

\- maximum loan amount

\- final interest rate

\- TCEA

\- fixed terms

\- installments

\- insurance

\- fees

\- mora

\- approval time

\- disbursement time

\- eligibility

\- scoring



Visible UI copy must be Spanish (Peru).



Technical property names may remain English.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

25 / AMOUNTINPUT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



Create:



`AmountInput`



Purpose:

specialized monetary amount input for the referential simulator.



IMPORTANT:



Prefer composition/reuse of the approved `Input` component architecture.



Do NOT create a completely unrelated field system.



Recommended anatomy:



AmountInput

\- Label

\- Input Container

&#x20; - Currency Prefix

&#x20; - Value

\- Optional HelperText



Expose:



Label

→ Text property



Value

→ Text property



Currency Prefix

→ Text property



Helper Text

→ Text property



Show Helper Text

→ Boolean



State:

\- Default

\- Hover

\- Focus

\- Filled

\- Error

\- Disabled



Currency example:



“S/”



Do NOT encode numeric min/max restrictions.



Documentation example:



Label:

“Monto”



Value:

“S/ —”



Helper:

“Ingresa el monto que deseas simular.”



Do NOT use a concrete amount as approved product data.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

26 / AMOUNTSLIDER

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



Create:



`AmountSlider`



Purpose:

visual control paired with AmountInput.



Recommended anatomy:



AmountSlider

\- Track

\- ActiveTrack

\- Thumb

\- Optional Value Labels



States:



\- Default

\- Hover

\- Focus

\- Disabled



Expose if practical:



Progress

→ visual/property representation



Show Limits

→ Boolean



IMPORTANT:



Do NOT define real:



Min

Max

Step



as product/business rules.



Documentation may show generic labels:



“Mín.”

“Máx.”



or omit numeric values entirely.



The slider must not establish actual loan limits.



Use approved focus treatment.



Thumb must have a practical interaction target.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

27 / TERMSELECTOR

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



Create:



`TermSelector`



Purpose:

select the simulation term.



Prefer reusing:



SegmentedControl



or another approved selection primitive where appropriate.



Do NOT create a new selection language unnecessarily.



Recommended architecture:



TermSelector

→ composed from SegmentedControl / reusable items



Expose:



Label

→ Text property



Option labels

→ configurable



Selection

→ configurable



Do NOT encode final term values.



Documentation examples may use:



“Opción A”

“Opción B”

“Opción C”



or clearly labeled visual placeholders.



Do NOT establish:



7 days

15 days

30 days

12 months



etc. as actual product rules.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

28 / BREAKDOWNROW

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



Create:



`BreakdownRow`



Purpose:

display one line inside a simulation financial breakdown.



Recommended anatomy:



BreakdownRow

\- Label

\- Value



Expose:



Label

→ Text property



Value

→ Text property



Emphasis:

\- Default

\- Strong



Optional:



Info icon

→ Boolean / Instance Swap if useful



Examples:



“Monto solicitado”

“S/ —”



“Interés referencial”

“S/ —”



“Total referencial”

“S/ —”



IMPORTANT:



These labels are conceptual simulator examples only.



Do NOT include a real interest rate.



Do NOT include TCEA.



Do NOT include fees unless later validated.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

29 / SIMULATIONSUMMARY

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



Create:



`SimulationSummary`



Purpose:

reusable summary block containing the result breakdown of a referential simulation.



Recommended composition:



SimulationSummary

\- Header

&#x20; - Title

&#x20; - Optional Badge

\- Breakdown

&#x20; - BreakdownRow

&#x20; - BreakdownRow

&#x20; - BreakdownRow

\- Optional Disclaimer



Reuse:



BreakdownRow

Badge

FormMessage



where appropriate.



Do NOT manually duplicate these systems.



Expose:



Title

→ Text property



Show Badge

→ Boolean



Show Disclaimer

→ Boolean



Disclaimer

→ Text property



Recommended title:



“Resumen de la simulación”



Optional generic Badge:



“Referencial”



Recommended disclaimer:



“Esta simulación es informativa y no representa una aprobación.”



This distinction is important.



Do NOT show:



“Aprobado”

“Preaprobado”

“Elegible”



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

30 / SIMULATOR

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



Create the reusable product composition:



`Simulator`



Purpose:

main referential simulator component that will later be placed inside Product Screens / Hero.



Recommended anatomy:



Simulator

\- Header

&#x20; - Title

&#x20; - Supporting text

\- Amount Section

&#x20; - AmountInput

&#x20; - AmountSlider

\- Term Section

&#x20; - TermSelector

\- SimulationSummary

\- Primary CTA

\- Optional secondary information



Reuse existing components:



AmountInput

AmountSlider

TermSelector

SimulationSummary

Button

FormMessage / TextLink if necessary



Do NOT duplicate these components internally.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SIMULATOR COPY

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



Use neutral safe documentation copy.



Title:



“Simula tu préstamo”



Supporting copy:



“Explora una simulación referencial antes de continuar.”



CTA example:



“Continuar”



Optional secondary copy:



“Información referencial.”



Do NOT use:



“Solicita ahora y recibe tu dinero”

“Crédito aprobado”

“Obtén tu préstamo hoy”

“Te prestamos hasta S/ X”

“Aprobación en X minutos”



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SIMULATOR STATES

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



Do NOT create excessive variants.



Prefer properties and child-component states.



If a Simulator-level state is useful, keep it minimal:



State:

\- Default

\- Ready

\- Loading



Do NOT create:



Approved

Rejected

Eligible

Ineligible



Those are not simulator states.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SIMULATION CALCULATION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



The component architecture may support a future simple-interest referential model.



However this Figma component phase must NOT define:



\- the interest percentage

\- term-specific rates

\- TCEA formula

\- fees

\- insurance

\- final repayment rules



The visual system only needs places for calculated outputs.



Use placeholder values:



“S/ —”



or other clearly neutral empty-value presentation.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CTA BEHAVIOR

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



The Simulator CTA is structural only at this phase.



Use an INSTANCE of the existing approved Button.



Do NOT recreate CTA styling.



Future screen/prototype logic will determine routing.



For Sprint 2 product behavior:



an unauthenticated user who chooses to continue will later be routed to authentication/Register/Login.



Do NOT build that screen flow in this component phase.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RESPONSIVE ARCHITECTURE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



Simulator will be important in the Home Hero.



Build it so it can adapt later to:



Desktop

Tablet

Mobile



Use:



Auto Layout

Fill Container

Hug Contents

controlled max widths



Do NOT use absolute fixed positioning for the primary component structure.



Long labels must wrap safely.



Do NOT create separate completely independent Desktop/Mobile systems unless technically necessary.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

VISUAL DIRECTION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



The Simulator should feel:



\- clear

\- trustworthy

\- product-focused

\- premium

\- simple

\- visually dominant enough for Hero use



But not:



\- oversized marketing card

\- crypto dashboard

\- banking enterprise dashboard

\- excessive shadow/card UI



Functional clarity comes first.



Use restrained brand styling.



Earth Gold must NOT become the main CTA or dominant surface.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DOCUMENTATION STRUCTURE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



Create sections:



25 / AmountInput

26 / AmountSlider

27 / TermSelector

28 / BreakdownRow

29 / Simulator

30 / SimulationSummary



IMPORTANT:



Keep the roadmap naming/order exactly as defined.



For each section show:



1\. Documentation

2\. Canonical Component / Component Set

3\. Examples using instances



Use:



Section x = 0

Section width = 1280px

Inner documentation width = 1200px



No overflow.

No clipping.

No giant horizontal Component Sets.



For variants, reflow into multiple rows instead of expanding the Section beyond 1280px.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COMPONENT COMPOSITION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



Expected reuse hierarchy:



Input

&#x20;  ↓

AmountInput



SegmentedControl

&#x20;  ↓

TermSelector



BreakdownRow

&#x20;  ↓

SimulationSummary



AmountInput

AmountSlider

TermSelector

SimulationSummary

Button

&#x20;  ↓

Simulator



Prefer composition over duplication.



Do NOT detach instances.



Do NOT flatten.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ACCESSIBILITY

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



Ensure:



AmountInput

\- clear label

\- readable focus/error



AmountSlider

\- visible focus

\- practical thumb target

\- state not communicated only through color



TermSelector

\- selected state clearly identifiable



Breakdown

\- label/value relationship visually clear



Simulator CTA

\- practical target

\- sufficient contrast



Do not claim accessibility certification.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DO NOT CREATE YET

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



Do NOT create:



Home Desktop

Home Mobile

Hero final composition



Login

Register

OTP

Recover

Reset



Simulator Page



Do NOT modify Level 1–4 components.



Do NOT modify Brand or Foundations.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FINAL VALIDATION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



AMOUNTINPUT

\- reuses Input language

\- currency configurable

\- no hardcoded loan limits



AMOUNTSLIDER

\- reusable

\- proper states

\- no fixed business min/max/step



TERMSELECTOR

\- reuses approved selection architecture

\- options remain configurable

\- no fixed product terms encoded



BREAKDOWNROW

\- reusable

\- label/value configurable

\- Default/Strong emphasis works



SIMULATIONSUMMARY

\- composed from BreakdownRow

\- clearly identifies output as referential

\- no approval implication



SIMULATOR

\- composed from approved child components

\- CTA uses Button instance

\- responsive architecture

\- no hardcoded financial/business rules

\- no invented amounts/rates/TCEA



GENERAL

\- documentation examples use instances

\- no clipping

\- no section exceeds intended width

\- no duplicate primitives

\- Levels 1–4 remain unchanged

\- no Product Screens are created

\- no other page is modified



Finish ONLY Level 5 — Sprint 2 / Simulator Components inside `03 — Components`.

