/smf-design-system

Continue building the EXISTING page `03 — Components`.

Levels 1, 2 and 3 are approved.

In this execution build ONLY Level 4 — Navigation / Layout:

20 / Navbar
21 / MobileNav
22 / Footer
23 / AuthShell
24 / AuthBrandPanel

Do NOT create Sprint 2 simulator components.
Do NOT create Product Screens.
Do NOT create Home, Login, Register or OTP screens.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MANDATORY EXISTING SOURCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use these pages in the same Figma file as authoritative sources:

`00 — Direction & Audit`
→ visual direction

`01 — Brand & Assets`
→ approved logo hierarchy and brand assets

`02 — Foundations`
→ color, spacing, typography, radius, effects, accessibility

`03 — Components`
→ approved reusable component architecture

Reuse existing components where appropriate:

Button
IconButton
TextLink
Badge
SectionHeading
and other approved primitives/patterns

Do NOT redraw or duplicate them.

Do NOT recreate brand assets.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GENERAL PRINCIPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These are reusable structural components.

They are NOT final product screens.

Do not hardcode final business navigation or authentication rules.

Build flexible component architecture that future screens can configure through properties and instances.

Use:

- real Figma Components
- Component Sets when meaningful
- Component Properties
- Auto Layout
- responsive resizing
- Fill Container / Hug Contents appropriately
- approved Foundations
- approved Brand components

Visible UI copy must be Spanish (Peru).

Technical property names may remain English.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
20 / NAVBAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a real reusable component:

`Navbar`

Purpose:
primary desktop navigation for the public site.

Use the approved brand identity from:

`01 — Brand & Assets`

Use the appropriate official horizontal logo component.

Do NOT reconstruct the wordmark.

Recommended anatomy:

Navbar
- Logo
- Navigation
  - NavItem(s)
- Actions
  - secondary action
  - primary action

Use Auto Layout.

Recommended properties:

Theme:
- Light
- Dark

State:
- Default
- Scrolled

Show Secondary Action
→ Boolean

Show Primary Action
→ Boolean

Primary Action Label
→ Text property

Secondary Action Label
→ Text property

Navigation labels should be configurable.

Do NOT establish final public navigation IA as a product rule.

Documentation examples may use neutral links such as:

“Inicio”
“Cómo funciona”
“Preguntas frecuentes”

but treat them as examples only.

Do NOT add:

- WhatsApp number
- phone
- SBS links
- unvalidated legal claims
- invented support information

Use existing Button/TextLink components for actions where appropriate.

Avoid creating custom button-like layers inside Navbar.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NAVBAR RESPONSIVE BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Desktop Navbar should support:

1440
1024

Use flexible spacing.

Do not design it as a fixed 1440px screenshot.

Navigation should collapse/reflow when space becomes insufficient.

Do NOT force desktop navigation into mobile widths.

Mobile behavior belongs to MobileNav.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
21 / MOBILENAV
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`MobileNav`

Purpose:
mobile navigation structure for public screens.

Recommended anatomy:

MobileNav
- Logo / compact brand identity
- Menu IconButton
- Optional Action

Use approved brand components.

Do NOT use App Icon as the navbar logo.

Use compact logo/isotype only where appropriate according to Brand Assets hierarchy.

Create states if useful:

State:
- Closed
- Open

Theme:
- Light
- Dark

If Open is represented, include a simple navigation panel/list.

Do NOT build a full Product Screen.

Recommended example labels:

“Inicio”
“Cómo funciona”
“Preguntas frecuentes”

Use existing TextLink / Button / IconButton components.

Ensure:

- touch targets are practical
- logo remains readable
- menu control has accessible interaction size
- open panel does not depend on fixed screen height

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
22 / FOOTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a reusable:

`Footer`

Purpose:
public-site footer structure.

IMPORTANT:
Do NOT invent legal/company/contact information.

Use configurable placeholder-neutral structure.

Recommended anatomy:

Footer
- Brand area
  - approved Logo
  - short neutral description
- Navigation groups
- Legal links
- Bottom row

Recommended properties:

Theme:
- Light
- Dark

Show Description
Show NavigationGroup
Show LegalRow

Use TextLink components where practical.

Example navigation labels may include:

“Inicio”
“Cómo funciona”
“Preguntas frecuentes”

Example legal labels may include:

“Privacidad”
“Términos”

These are structural examples only.

Do NOT invent:

- registered address
- RUC
- phone number
- email
- SBS authorization
- partner names
- certifications
- copyright company details that are not validated

Use a neutral copyright placeholder if needed:

“San Martín Finanzas”

without adding an unsupported legal entity name/year policy.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FOOTER RESPONSIVE BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Footer must support:

Desktop
Tablet
Mobile

Use Auto Layout and responsive reflow.

On smaller widths:

- groups stack vertically
- text wraps naturally
- no horizontal overflow
- touch links remain usable

Do NOT create separate unrelated Footer components for each breakpoint unless technically necessary.

Prefer one reusable responsive architecture.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
23 / AUTHSHELL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a reusable structural component:

`AuthShell`

Purpose:
base layout container for authentication screens.

This component is NOT Login/Register itself.

It defines page structure only.

Recommended composition:

Desktop:
- Brand Panel
- Form Area

Mobile:
- compact brand area
- Form Area

Recommended properties:

Layout:
- Desktop
- Mobile

BrandPanel:
- Show
- Hide

Form Width:
use a practical internal max width, but keep the architecture responsive.

Use Auto Layout.

AuthShell must be capable of hosting future screen content such as:

Login
Register
OTP
Recover
Reset

without encoding those flows.

Do NOT place final forms inside the canonical AuthShell master.

Use placeholder content / documentation instances only.

Do not create login-specific business rules.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
24 / AUTHBRANDPANEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`AuthBrandPanel`

Purpose:
controlled branded supporting panel used inside AuthShell Desktop.

Use approved Brand assets and graphic system.

Allowed brand resources:

- approved logo
- Horizon OR Topography OR Route according to graphic density rules

Do NOT combine all graphic assets at once.

Recommended density:
Level 1–2

Avoid marketing-heavy composition.

The form remains the primary task.

Recommended anatomy:

AuthBrandPanel
- Brand identity
- Supporting headline
- Supporting description
- Optional subtle graphic asset

Expose:

Title
→ Text property

Description
→ Text property

Graphic:
- None
- Topography
- Horizon
- Route

Only expose options if technically practical.

Do NOT use photography by default in Auth flows.

Do NOT use decorative graphics behind dense text or form fields.

Use generic example content such as:

“Tu información, en un proceso claro”

“Continúa paso a paso con una experiencia simple y ordenada.”

Do NOT use:

“Crédito aprobado”
“Dinero inmediato”
“100% seguro”
“Protegido por SBS”
or any unsupported financial/security claim.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BRAND HIERARCHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Respect Brand Assets rules.

Navbar:
→ Primary Horizontal Logo where space allows

MobileNav:
→ Compact Logo / Isotype where appropriate

Footer:
→ approved Logo variant based on background

AuthBrandPanel:
→ approved institutional Logo

Do NOT use:
App Icon
as a replacement for the primary logo in site navigation.

Do not redraw logos.

Use existing Brand components/instances.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPOSITION / REUSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reuse approved components wherever possible.

Navbar actions:
→ Button / TextLink

MobileNav menu trigger:
→ IconButton

Footer links:
→ TextLink

Auth layouts:
→ compose existing primitives later through screen instances

Do NOT duplicate Button, TextLink or IconButton styling inside these components.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DOCUMENTATION STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create Sections:

20 / Navbar
21 / MobileNav
22 / Footer
23 / AuthShell
24 / AuthBrandPanel

For each:

1. Documentation
2. Canonical Component Set / Master
3. Examples using instances

Use:

section x = 0
section width = 1280px
documentation width = 1200px

No arbitrary negative X positions.

No clipping.
No parent height smaller than its children.
No visual overflow.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSIVE TEST EXAMPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For documentation instances, test:

Navbar
- 1440 context
- 1024 context

MobileNav
- 390
- 320

Footer
- Desktop
- Mobile

AuthShell
- Desktop
- Mobile

Do not create full Product Screens.

These should remain structural component demonstrations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACCESSIBILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Navbar / MobileNav:
- visible focus
- sufficient link contrast
- practical touch targets
- mobile menu button has accessible size

Footer:
- readable text
- links visually distinguishable

AuthShell:
- form content remains primary
- reading order remains logical

AuthBrandPanel:
- decorative graphics do not interfere with readability

Do not claim accessibility certification.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DO NOT CREATE YET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Do NOT create:

AmountInput
AmountSlider
TermSelector
BreakdownRow
Simulator
SimulationSummary

Do NOT create:

Home Desktop
Home Mobile
Login
Register
OTP
Recover
Reset

Do NOT define final navigation IA.

Do NOT invent product/legal/company content.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL VALIDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before finishing verify:

NAVBAR
- reusable component
- approved Logo instance used
- Light/Dark work
- actions reuse approved components
- responsive at desktop widths

MOBILENAV
- reusable
- compact approved brand identity
- menu trigger uses IconButton
- Closed/Open states work if created
- usable at 390 and 320

FOOTER
- reusable
- no invented legal/contact/company claims
- links use reusable components where appropriate
- responsive stacking works

AUTHSHELL
- reusable structural component
- Desktop/Mobile work
- no login/register rules embedded
- can host future authentication screens

AUTHBRANDPANEL
- reusable
- uses approved Brand assets
- graphics remain restrained
- no unsupported claims

GENERAL
- no duplicated design-system components
- existing Foundations consumed
- documentation examples use instances
- no Product Screens created
- no Sprint 2 components created
- no other Figma page modified

Finish ONLY Level 4 — Navigation / Layout inside `03 — Components`.