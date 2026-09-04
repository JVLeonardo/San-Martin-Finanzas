/smf-design-system

Apply ONLY a structural and composition-reuse repair pass to Level 5 — Sprint 2 / Simulator Components inside `03 — Components`.

Do NOT redesign the visual direction.

Do NOT modify Levels 1–4.

Repair only:

25 / AmountInput
26 / AmountSlider
27 / TermSelector
28 / BreakdownRow
29 / SimulationSummary
30 / Simulator

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. AMOUNTINPUT — REFACTOR TO REUSE INPUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The current AmountInput duplicates Input architecture manually.

Refactor it so it reuses the approved Input system as closely as technically possible.

Preferred hierarchy:

AmountInput
→ composed from approved Input instance
→ configured for monetary input behavior

Preserve:

- Label
- Value
- Currency prefix
- Helper text
- States:
  Default
  Hover
  Focus
  Filled
  Error
  Disabled

Do NOT maintain a parallel independent field visual system.

If direct composition with the existing Input instance is technically possible:
USE IT.

If currency prefix requires a wrapper:
use a minimal wrapper around the Input instance.

Do NOT recreate borders, label styling, helper text styling or focus states manually.

AmountInput must visually inherit the existing Input component.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. FIX ALL EXAMPLES FRAME HEIGHTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Several Level 5 `Examples` frames are too short and do not contain their children.

Repair ALL of them.

Affected sections:

25 / AmountInput
26 / AmountSlider
27 / TermSelector
28 / BreakdownRow
29 / SimulationSummary
30 / Simulator

Rule:

No Examples frame may have a fixed height smaller than its visible instances.

Use:

- Auto Layout where appropriate
- Hug Contents vertically
- proper wrapping / multiple rows

Do NOT leave frames such as height=48 when children extend beyond y=100.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. AMOUNTINPUT EXAMPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reflow AmountInput examples into a clean 3-column × 2-row grid.

Each example must remain fully visible.

States:

Default
Hover
Focus
Filled
Error
Disabled

Use instances only.

No clipping.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. AMOUNTSLIDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Preserve current component architecture.

Fix only:

- examples frame height
- spacing
- wrapping
- visible focus state
- no clipping

Use 3 items first row + remaining item second row if needed.

Do not change financial semantics.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. TERMSELECTOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Preserve current composition:

TermSelector
→ Label
→ SegmentedControl instance

This reuse is correct.

Fix documentation/examples layout only.

Ensure examples frame fully contains the TermSelector instance.

Do NOT duplicate SegmentedControl.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. BREAKDOWNROW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Preserve:

Emphasis:
- Default
- Strong

Ensure:

- examples frame contains both instances
- label/value remain aligned
- no clipping
- row width remains flexible

No redesign.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. SIMULATIONSUMMARY — FIX HEADER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The current SimulationSummary Header has approximately:

height = 1px

while it contains visible children:

Title
Badge

Repair Header structure.

Use horizontal Auto Layout.

Recommended:

Header
- Title
- Spacer / Fill
- Badge

Use:

Hug Contents vertically

Header height must fully contain Title + Badge.

Do NOT use 1px fixed height.

Preserve:

BreakdownRow instances
Badge instance
Disclaimer

Do not duplicate these child components.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
8. SIMULATIONSUMMARY EXAMPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Repair the Examples frame.

The example instance is approximately 210px tall.

The Examples frame must fully contain it.

Use Hug Contents.

No clipping.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
9. SIMULATOR — PRESERVE COMPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The current Simulator composition is conceptually correct.

Preserve this hierarchy:

Simulator
- Header
- AmountInput instance
- AmountSlider instance
- TermSelector instance
- SimulationSummary instance
- Button instance
- Secondary info

Do NOT rebuild these child components manually.

Do NOT detach instances.

Do NOT duplicate visual styles.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
10. SIMULATOR EXAMPLES FRAME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Simulator example is approximately:

440 × 713

Ensure the Examples frame fully contains it.

Use:

Hug Contents
proper padding

No clipping.

Do not place the example outside the visible section.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
11. DOCUMENTATION HEIGHTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Review Documentation frames in all Level 5 sections.

Some documentation containers are currently only about 64px tall while text starts below their declared height.

Fix this.

Documentation structure should fully contain:

Title
Description

Use:

Auto Layout vertical
Hug Contents

No text may overflow its documentation container.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
12. SECTION HEIGHTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Each Section must fully contain:

Documentation
Canonical Component / Component Set
Examples

Use:

Section width = 1280
Section x = 0

Do not leave content outside section bounds.

Do not use arbitrary fixed section heights that cut off examples.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
13. RESPONSIVE / WIDTH HYGIENE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Keep canonical component widths practical:

AmountInput ~360
AmountSlider ~360
TermSelector ~360
BreakdownRow ~360
SimulationSummary ~360–400
Simulator ~440

These are documentation widths only.

Components must remain horizontally resizable where appropriate.

Do not create giant component sets wider than the 1200px documentation area.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
14. PRODUCT SAFETY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Do NOT introduce:

- real minimum or maximum loan amounts
- rates
- TCEA
- final terms
- installments
- fees
- approval status
- eligibility
- disbursement promises

Keep values referential / placeholder.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL VALIDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AMOUNTINPUT
- reuses approved Input architecture
- no parallel duplicate field system
- all states visible

AMOUNTSLIDER
- examples fully visible

TERMSELECTOR
- still uses SegmentedControl instance

BREAKDOWNROW
- examples fully visible

SIMULATIONSUMMARY
- Header no longer has 1px height
- Badge + Title fit correctly
- BreakdownRow instances preserved
- no clipping

SIMULATOR
- preserves composition using child instances
- CTA remains approved Button instance
- example fully visible
- no duplicated internals

GENERAL
- no Documentation frame clips text
- no Examples frame clips instances
- no Section clips content
- no child overflows its parent unintentionally
- no other level is modified

Finish ONLY this Level 5 repair pass.