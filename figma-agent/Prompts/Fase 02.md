/smf-brand-guardian

Create and organize the EXISTING page `01 — Brand & Assets` in the current San Martín Finanzas Product Design file.

Use the attached roadmap as the source of truth for this phase.

IMPORTANT:
This task is ONLY for the canonical Brand & Assets library of the current MVP.

Do NOT:
- create product screens
- create Home
- create Auth
- create Simulator screens
- create prototype flows
- create Foundations variables
- create UI Design System components such as Buttons or Inputs
- modify `00 — Direction & Audit`
- modify any other page

The source assets have already been manually placed on `01 — Brand & Assets` and labeled with simple names.

Use ONLY those existing source assets.

Do not:
- redraw
- recolor
- regenerate
- vectorize
- distort
- replace
- reinterpret their internal visual design

PNG/WebP raster assets are intentionally approved for the MVP.
Do NOT attempt to convert them to SVG.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PURPOSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Transform the manually placed source assets into a clean, organized and reusable Figma brand library.

The page must make it easy for future Product Screens to use the correct asset without guessing:

- which logo version to use
- which background is appropriate
- which graphic resource is intended
- which assets are production-approved
- which assets are reference-only

This page IS the canonical Brand & Assets repository.

Unlike `00 — Direction & Audit`, this page is not a moodboard.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAGE STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create these Figma Sections in this exact order:

01 / Logo System
02 / Symbol System
03 / Digital Identity
04 / Graphic System
05 / Photography
06 / References
07 / Asset Policy

Use clean editorial documentation.

Use Auto Layout where appropriate.

All visible explanatory content must be in Spanish (Peru).

Canonical technical asset names may remain in English.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
01 / LOGO SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use these existing assets:

- Logo Horizontal Positive
- Logo Horizontal Negative
- Logo Compact Positive
- Logo Compact Negative
- Logo Compact Monochrome Light
- Logo Compact Monochrome Dark

Create reusable Figma components from the existing PNG artwork.

Use these canonical names:

Brand/Logo/Horizontal/Positive
Brand/Logo/Horizontal/Negative
Brand/Logo/Compact/Positive
Brand/Logo/Compact/Negative
Brand/Logo/Compact/Monochrome-Light
Brand/Logo/Compact/Monochrome-Dark

IMPORTANT:

The component must contain the existing raster artwork.
Do not redraw the logo.

Do not create separate components based only on raster resolution.

Show each mark on an appropriate test surface:

- dark/positive artwork → Warm White
- light/negative artwork → Forest 900

The monochrome compact variants are secondary-use alternatives.

Document:

IDENTIDAD PRINCIPAL
Logo Horizontal Positive / Negative

IDENTIDAD COMPACTA
Logo Compact Positive / Negative

APLICACIONES MONOCROMAS SECUNDARIAS
Logo Compact Monochrome Light / Dark

Do not promote monochrome alternatives as the default identity.

Add brief guidance:

Horizontal:
use when sufficient horizontal space is available.

Compact:
use when a more vertically compact identity is required.

Monochrome:
use only when background/context makes the standard compact version unsuitable.

Do NOT create arbitrary minimum-size rules if they are not already validated.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
02 / SYMBOL SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use:

- Isotype
- Eagle Symbol

Create reusable components:

Brand/Symbol/Isotype
Brand/Symbol/Eagle

Document the difference clearly.

ISOTIPO

Role:
Identidad compacta basada en águila + montañas + ruta.

Use:
- compact brand contexts
- spaces where the complete horizontal lockup is not appropriate

EAGLE SYMBOL

Role:
Marca digital/simbólica secundaria.

Use:
- controlled small digital brand applications
- identity accents where appropriate

Do NOT treat Eagle Symbol as a replacement for the primary full logo.

Do NOT modify either raster master.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
03 / DIGITAL IDENTITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use:

- App Icon
- Favicon

Create:

Brand/Digital/AppIcon
Brand/Digital/Favicon

IMPORTANT:
Preserve the complete square artwork.
Do NOT crop the masters into horizontal shapes.

APP ICON

Show:
- master preview
- 128px visual preview
- 64px visual preview

These are visual scaled previews from the same master, not separate source identities.

Document:
Uso → identidad de aplicación/PWA.

FAVICON

Show:
- master preview
- 48px
- 32px
- 16px

The purpose is to evaluate visual recognition at real small sizes.

Do not invent a new simplified favicon in this phase.

If legibility becomes insufficient at small sizes, document it as a future improvement instead of redesigning the asset.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
04 / GRAPHIC SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use:

- Route Forest
- Route White
- Topography Light
- Topography Dark
- Horizon Desktop
- Horizon Mobile

Create reusable Figma components:

Brand/Graphic/Route/Forest
Brand/Graphic/Route/White

Brand/Graphic/Topography/Light
Brand/Graphic/Topography/Dark

Brand/Graphic/Horizon/Desktop
Brand/Graphic/Horizon/Mobile

These components should preserve the existing raster artwork.

Do not create complex variant/property systems yet.
Simple reusable components are enough for MVP.

────────────────────
LA RUTA
────────────────────

Role:
Recorrido / Dirección / Continuidad / Progreso

Document:

Route Forest
→ preferred on light/Warm White surfaces

Route White
→ preferred on dark/Forest surfaces

Never use La Ruta as:
- chart
- arrow
- literal map
- repeated filler texture

────────────────────
TOPOGRAFÍA
────────────────────

Role:
Textura secundaria de baja intensidad.

Document:

Topography Light
→ appropriate for light/subtle compositions

Topography Dark
→ appropriate for contrasting/dark-context applications according to visibility

Use in:
- low-density backgrounds
- selected institutional surfaces
- selected Auth supporting panels

Avoid behind:
- OTP
- dense form controls
- small text
- dense financial information

────────────────────
HORIZONTE
────────────────────

Role:
Territorialidad / atmósfera / profundidad regional.

Use:

Horizon Desktop
Horizon Mobile

Document explicitly:

These are two breakpoint-oriented compositions, not simple raster-resolution duplicates.

Use the Desktop asset for wide compositions.

Use the Mobile asset when a vertically adapted composition is required.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
05 / PHOTOGRAPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use:

`Approved Hero Photography`

Do NOT convert the photography itself into a general brand component.

Create a documented photography entry:

Photography/Hero/Approved-01

Document:

ESTADO
Approved composition for current MVP

USO
Home Hero

MASTER
Preserve original source without destructive crop.

PERMITIDO
- responsive crop
- overlay
- gradient for readability
- subtle light/color treatment

NO PERMITIDO
- distort
- alter facial features
- replace subject without explicit approval

IMPORTANT:

The current phone screen contains content that requires correction before production use.

Document clearly:

“Composición aprobada. El contenido visible en la pantalla del teléfono requiere reemplazo por una interfaz neutral y validada antes del uso final en producción.”

Do NOT edit the photograph in this task.

Also create empty category labels for future growth:

Photography / People
Photography / Business
Photography / Territory

Do not invent or generate photographs for those categories.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
06 / REFERENCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use:

`Hero Reference`

Keep it clearly separate from production assets.

Label:

REFERENCE — NOT FOR PRODUCTION

Canonical reference name:

Reference/Hero/Composition-01

Document:

Purpose:
- composition
- hierarchy
- simulator prominence
- visual balance
- art direction

Not valid as source for:
- copy
- financial data
- claims
- logo behavior
- regulation
- business rules

Do not create a Figma reusable production component from the Hero Reference.

It remains reference documentation only.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
07 / ASSET POLICY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a concise policy section.

Title:

Política de Assets — MVP

Document these decisions:

RASTER MASTERS
APPROVED FOR MVP

Supported current design sources:
PNG / WebP

VECTOR REPLACEMENT
POST-MVP / BRAND SYSTEM V2

Rule:

“Los masters raster están aprobados para el MVP. Los reemplazos vectoriales podrán introducirse posteriormente sin modificar el naming de componentes ni la arquitectura del producto.”

Add:

RESOLUTION POLICY

Do not create separate Figma identities/components for:
400px
800px
1600px
WebP
PNG

when they represent the same visual variant.

Use one highest-quality available master for the Figma design component.

Additional raster resolutions remain implementation/export resources outside the canonical visual identity.

Add:

SCREEN USAGE POLICY

Future Product Screens should use reusable Brand components whenever applicable rather than inserting duplicate loose PNG assets.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SOURCE ASSET HANDLING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Preserve the manually placed source assets during construction.

If useful, keep them temporarily in an area labeled:

SOURCE ASSETS — DO NOT DELETE

Do not destroy the original placed source artwork while building the reusable library.

Once the documented components and previews are verified, leave the source area intact for manual review.

Do not automatically delete it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VISUAL DOCUMENTATION STYLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Follow the visual direction already established in `00 — Direction & Audit`.

Create professional internal brand documentation.

Prefer:
- Warm White documentation surfaces
- Forest typography/highlights
- restrained Earth Gold accents
- generous whitespace
- clear editorial hierarchy
- semantic naming
- Auto Layout

Avoid:
- excessive cards
- oversized badges
- unnecessary shadows
- dashboard aesthetics
- generic AI-template presentation

Do not overdesign the page.

Its primary function is asset clarity and reuse.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL VALIDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before finishing verify:

- all supplied production assets have canonical names
- all reusable brand assets are represented as Figma components
- the underlying artwork remains the supplied PNG/WebP
- no SVG/vector reconstruction was attempted
- no duplicate components exist only because of raster size
- Light/Dark variants are shown on appropriate contrasting surfaces
- App Icon and Favicon preserve complete square artwork
- Hero Photography remains separate from Hero Reference
- Hero Reference is clearly non-production
- monochrome logos remain secondary-use variants
- no product screens were created
- no UI components such as Buttons/Inputs were created
- no Foundations variables were created
- no other Figma page was modified
- original source assets remain preserved

Finish ONLY `01 — Brand & Assets` in this execution.