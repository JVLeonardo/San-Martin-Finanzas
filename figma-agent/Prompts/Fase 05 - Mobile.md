/smf-design-system

Continue Phase 5 — Vertical Slice.

The approved Desktop Hero direction is already established inside:

`04 — Sprint 01 · Public & Auth`

The approved Desktop version uses the LIGHT / WHITE Navbar.

Do NOT modify the approved Desktop Hero.

Build ONLY:

`Home / Mobile / Hero`

Target viewport:

390px width

Do NOT create the full Mobile Home yet.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SOURCE OF TRUTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use the existing approved pages:

`00 — Direction & Audit`
→ product / visual direction

`01 — Brand & Assets`
→ canonical logo, photography and graphics

`02 — Foundations`
→ colors, typography, spacing, radius, effects

`03 — Components`
→ approved reusable components

`04 — Sprint 01 · Public & Auth`
→ approved Desktop Hero as compositional reference

Do NOT recreate any existing component or brand asset.

Use INSTANCES.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMPORTANT — MOBILE IS NOT A CROP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Do NOT simply scale or crop the Desktop screen.

Create a dedicated responsive Mobile composition.

Use the existing approved Mobile Hero Photography from:

`01 — Brand & Assets`

Canonical asset:

`Photography/Hero/Mobile/Approved-01`

Do NOT use the Desktop photography as the Mobile source.

Do NOT generate new photography.

Do NOT replace the approved Mobile asset.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MOBILE STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recommended structure:

Home / Mobile / Hero
- MobileNav
- HeroVisual
- HeroContent
- Simulator

The composition must be task-first and compact.

Do NOT make Mobile feel like a compressed Desktop layout.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MOBILE NAVIGATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use an INSTANCE of the approved:

`MobileNav`

from:

`03 — Components`

Use:

Theme = Light
State = Closed

as the default screen state.

The approved visual direction is the light navigation treatment.

Do NOT rebuild the mobile navigation manually.

Do NOT use the Desktop Navbar scaled down.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MOBILE HERO PHOTOGRAPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use:

`Photography/Hero/Mobile/Approved-01`

as the canonical Mobile Hero photography.

Preserve:

- person
- smartphone
- regional atmosphere
- natural photographic quality

Use only non-destructive crop/positioning.

Do NOT distort the photograph.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHONE SCREEN SAFETY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The approved photography may include visible phone UI implying:

“Crédito aprobado”

This is NOT approved product messaging.

Do NOT emphasize it.

If readable in the Mobile composition:

use a subtle non-destructive crop / overlay / visual treatment so it does not become a prominent product claim.

Do NOT destructively edit the canonical asset.

Do NOT present the person as a real customer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MOBILE CONTENT PRIORITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mobile reading order should be clear:

1. Navigation
2. Core value proposition
3. Human / regional visual
4. Simulator

or another compact ordering that improves usability.

IMPORTANT:

The Simulator must remain highly discoverable.

Do NOT force the user through a very large decorative photography area before reaching the functional simulator.

Avoid excessive vertical marketing space.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HERO COPY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For now preserve the same working copy from Desktop.

Do NOT perform any marketing-copy refinement in this task.

Use:

Eyebrow:
`San Martín Finanzas`

Headline:
`Un préstamo más cerca de ti`

Supporting:
`Simula de forma referencial y continúa tu proceso paso a paso.`

Do NOT invent additional copy.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TYPOGRAPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use the existing approved Foundations.

Cormorant Garamond SemiBold
→ Hero headline

Source Sans 3
→ Eyebrow / supporting copy / UI

Scale typography appropriately for 390px.

Do NOT introduce new fonts.

Do NOT create arbitrary Desktop-sized typography that wraps excessively.

Target approximately:

headline:
2–3 controlled lines maximum

supporting copy:
2–3 lines maximum

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SIMULATOR MOBILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use an INSTANCE of the approved:

`Simulator`

from:

`03 — Components`

Do NOT recreate:

- AmountInput
- AmountSlider
- TermSelector
- SimulationSummary
- Button

Resize / configure the Simulator responsively where the component supports it.

Recommended available width:

approximately 358px

with:

16px side margins

for a 390px viewport.

Do NOT visually scale the component.

Resize using responsive constraints / Auto Layout.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SIMULATOR PLACEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Simulator should become a natural continuation of the Hero.

Do NOT place a tiny Simulator over the photograph.

Do NOT use a floating Desktop card composition if it creates readability problems.

Prefer:

visual / messaging area
↓
Simulator

or a controlled overlap only if it remains robust and readable.

Functional clarity > decoration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MOBILE SPACING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use approved spacing tokens.

Recommended outer horizontal margin:

16px

or 20px where the existing Mobile grid requires it.

Maintain clear rhythm between:

headline
supporting copy
visual
Simulator

Avoid huge empty spaces.

Avoid cramped content.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GRAPHIC SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Do NOT add extra Route / Topography / Horizon graphics unless strictly necessary.

The Mobile Hero already contains:

photography
branding
typography
Simulator

That is sufficient visual density.

Keep graphic density controlled.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MOBILE HEIGHT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The Mobile Hero does NOT need to fit entirely inside one viewport.

It may scroll naturally.

However:

- value proposition should appear early
- Simulator should not be excessively far below the fold
- avoid oversized image-first composition

Do not set an arbitrary fixed full-screen height.

Use Hug Contents where appropriate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AUTO LAYOUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use Auto Layout for primary Mobile structure.

Prefer:

vertical flow

Use:

Fill Container
Hug Contents

where appropriate.

Do NOT use absolute positioning for core UI sections.

Absolute positioning may be used only for:

- photography background treatment
- decorative overlay

No primary content should depend on fragile manual coordinates.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSIVE PREPARATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Build the 390px version so it can later adapt to:

320px

without requiring a separate redesign.

Do NOT create the 320px screen yet.

Avoid:

- fixed text widths that exceed viewport
- fixed Simulator widths that cannot shrink
- horizontal overflow
- Desktop-only spacing assumptions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DO NOT CREATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Do NOT create:

- full Home Mobile
- Benefits
- Process
- FAQ
- Footer integration
- Login
- Register
- OTP
- Recover
- Reset
- standalone Simulator screen

Do NOT modify:

- approved Desktop Hero
- Brand Assets
- Foundations
- Components

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL VALIDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Verify:

- frame width = 390px
- uses MobileNav Light instance
- uses dedicated approved Mobile Hero Photography
- uses Simulator instance
- does not recreate components
- content remains safe and referential
- phone approval message is not visually emphasized
- no horizontal overflow
- no clipping
- no excessive decorative density
- reasonable path from headline to Simulator
- architecture can later adapt to 320px
- approved Desktop Hero remains unchanged

Finish ONLY:

`Home / Mobile / Hero`