/smf-design-system

Build the EXISTING page `02 — Foundations` in the current San Martín Finanzas Product Design file.

IMPORTANT:
This task is ONLY for Foundations.

Do NOT:
- create Product Screens
- create Home
- create Auth
- create Simulator screens
- create prototype flows
- create final product components such as Button, Input, Navbar, OTP, Footer or Simulator
- modify `00 — Direction & Audit`
- modify `01 — Brand & Assets`
- modify any other page

The purpose of this phase is to create the operational design foundations that future components will consume.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GOAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Build a clean, production-oriented Foundations system with:

1. Color Primitives
2. Semantic Color Tokens
3. Typography
4. Spacing
5. Radius
6. Grid & Layout
7. Effects
8. Accessibility Base

Create actual Figma Variables / Styles where supported.

Avoid duplicate collections.

Use semantic naming suitable for later frontend mapping.

All visible documentation text must be in Spanish (Peru).

Technical variable/style names may remain in English.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAGE STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create these Figma Sections in this exact order:

01 / Color Primitives
02 / Semantic Colors
03 / Typography
04 / Spacing
05 / Radius
06 / Grid & Layout
07 / Effects
08 / Accessibility

Use clean documentation consistent with the visual language established in:
`00 — Direction & Audit`

Do not overdesign the page.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
01 / COLOR PRIMITIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create one canonical primitive color collection.

Do not create duplicate color collections.

Create these variables:

Forest/900
Forest/700
Forest/500
Earth/Gold
Warm/White
Neutral/White
Ink
Muted
Border

Values:

Forest/900
#0E3F2B

Forest/700
#145C3A

Forest/500
#2F7D57

Earth/Gold
#C79A52

Warm/White
#F7F4EE

Neutral/White
#FFFFFF

Ink
#24312B

Muted
#66736D

Border
#DCE5DF

Document the principle:

“VERDE IDENTIFICA. DORADO ACENTÚA.”

Earth Gold is an accent token, not a dominant brand surface.

Do not invent extra brand colors unless necessary for semantic states.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
02 / SEMANTIC COLORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a separate semantic color collection that aliases the primitive variables where supported.

Create these semantic tokens:

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

Use aliases to primitives where appropriate rather than hardcoding duplicate values.

Recommended mapping:

surface/default
→ Warm/White

surface/subtle
→ a suitable approved light neutral derived from the existing palette without inventing a new brand color if avoidable

surface/raised
→ Neutral/White

surface/brand
→ Forest/900

surface/inverse
→ Forest/900

text/primary
→ Ink

text/secondary
→ Muted

text/inverse
→ Neutral/White

text/brand
→ Forest/900

action/primary
→ Forest/900

action/primary-hover
→ Forest/700

action/secondary
→ transparent/light surface with Forest/900 content where appropriate

border/default
→ Border

border/strong
→ a stronger approved neutral or Forest-based border only if needed

border/focus
→ Forest/500

IMPORTANT:
Do not invent unsupported product-state colors casually.

For success/error/warning/info:
create practical accessible semantic colors only if required for a functional Design System.

Keep them visually restrained and clearly separated from the core brand palette.

Document that semantic state colors are functional UI colors, not brand colors.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
03 / TYPOGRAPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use only:

Cormorant Garamond SemiBold
→ editorial / display

Source Sans 3
→ UI / body / forms / navigation / data

Do not introduce Manrope or other typefaces.

Create reusable Figma Text Styles:

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

Define a coherent type scale suitable for a professional responsive fintech product.

Requirements:

- Display styles should use Cormorant Garamond SemiBold.
- Product/UI styles should use Source Sans 3.
- Use practical line heights.
- Avoid excessively tight tracking.
- Body text must remain highly readable.
- Button and Label styles must be suitable for forms and controls.

Create a visual typography specimen showing:
- style name
- font family
- weight
- size
- line height
- example text

Use Spanish sample copy.

Do not create unnecessary text styles beyond this approved set.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
04 / SPACING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create one canonical spacing variable collection.

Create:

space/4
space/8
space/12
space/16
space/24
space/32
space/40
space/48
space/64
space/80
space/96
space/120

Values correspond directly to their pixel names.

Document intended usage visually.

Example guidance:

4–12
→ micro spacing

16–32
→ component/internal layout

40–64
→ content groups / sections

80–120
→ major layout / marketing sections

Do not create arbitrary spacing values unless a future component proves they are required.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
05 / RADIUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create one canonical radius collection:

radius/8
radius/12
radius/16
radius/20

Document suggested intent:

8
→ inputs, buttons, small controls

12
→ cards / compact containers

16
→ larger UI surfaces

20
→ selected marketing or large content surfaces

Do not create excessive radius variants.

Do not introduce pill/full radius as a default design language.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
06 / GRID & LAYOUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create and document layout grids for:

DESKTOP
1440px frame
12 columns
approximately 1200px max content width

TABLET
768px reference breakpoint
use an appropriate reduced column system

MOBILE
390px reference frame
4 columns
16–20px horizontal margins

Also document validation widths:

1440
1024
768
390
320

Create visual grid examples.

Do not create Product Screens.

These are layout-foundation demonstrations only.

Document:

Desktop
→ wide product/marketing layouts

Tablet
→ adaptive intermediate layout

Mobile
→ compact responsive composition

The future UI must reflow intentionally rather than simply scale down.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
07 / EFFECTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create only the minimum approved effects.

Create reusable effect styles:

shadow/subtle
shadow/card
focus/ring

Keep shadows restrained and professional.

Avoid:
- dramatic elevation
- glassmorphism
- glow
- large blurred shadows
- decorative shadows

`focus/ring` must prioritize accessibility and clear keyboard focus.

If Figma effect styles cannot represent focus behavior perfectly, document its visual specification.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
08 / ACCESSIBILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a concise Accessibility Base section.

Document these requirements:

WCAG 2.2 AA direction

CONTRAST
Text and interactive elements must maintain sufficient contrast.

FOCUS
Interactive controls require a visible focus state.

TOUCH TARGETS
Aim for approximately 44px minimum interactive target where applicable.

ERROR STATES
Errors must be understandable through text and not color alone.

COLOR
Information must never depend only on color.

TEXT
Body text must remain readable and must not be reduced excessively on mobile.

REFLOW
Layouts must support responsive reflow at smaller widths.

Do not invent certification claims.
This is a design target, not a statement of formal accessibility certification.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VARIABLE / STYLE ARCHITECTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Keep the system simple.

Preferred structure:

COLLECTION: Primitives
- color primitives
- spacing
- radius if practical

COLLECTION: Semantic
- semantic color aliases

Use clear naming.

Avoid multiple collections that represent the same concept.

All future components should be able to consume these variables.

Where Figma supports aliasing:
use semantic aliases to primitives.

Do not hardcode values in documentation examples when a variable can be applied.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DOCUMENTATION STYLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Follow the editorial documentation direction already established.

Use:
- Warm White surfaces
- Forest typography
- restrained Earth Gold accents
- generous whitespace
- clear hierarchy
- Auto Layout
- semantic naming

Do not overuse:
- cards
- badges
- pills
- shadows
- decorative containers

This is technical design-system documentation, not a marketing page.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL VALIDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before finishing verify:

- no duplicate variable collections exist
- color primitives match the approved values exactly
- semantic tokens are clearly separated from primitives
- aliases are used where supported
- Cormorant Garamond and Source Sans 3 are the only product typefaces
- all approved Text Styles exist
- spacing scale is complete
- radius scale is complete
- Desktop / Tablet / Mobile grids are documented
- only the approved minimal effects exist
- accessibility rules are documented
- no Product Screens were created
- no final UI components were created
- no other Figma page was modified
- foundations are ready to be consumed by future components

Finish ONLY `02 — Foundations` in this execution.