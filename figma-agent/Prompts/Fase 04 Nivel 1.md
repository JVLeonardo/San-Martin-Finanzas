/smf-design-system

Continue building the EXISTING page `03 — Components`.

The Button + Input pilot has been technically validated and approved.

Use their architecture as the implementation standard for the next primitive components.

In this execution create ONLY:

03 / IconButton
04 / TextLink
05 / PasswordInput
06 / Select
07 / Checkbox
08 / Radio & Segmented Control
09 / OTPInput

Do NOT create Feedback components yet.
Do NOT create Product Patterns.
Do NOT create Navigation/Layout components.
Do NOT create Product Screens.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MANDATORY SOURCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use the existing pages in the same Figma file as authoritative sources:

`00 — Direction & Audit`
→ visual direction

`01 — Brand & Assets`
→ approved brand system

`02 — Foundations`
→ colors, semantic tokens, typography, spacing, radius, effects and accessibility

`03 — Components`
→ approved Button and Input architecture

Do NOT recreate foundations.

Do NOT invent parallel color, spacing, radius or typography systems.

Use the new approved Button and Input component architecture as the technical reference:

- real Component Sets
- Variants
- Component Properties
- Auto Layout
- semantic layer naming
- documentation examples built from instances

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GENERAL COMPONENT RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

All components must be:

- real reusable Figma components
- grouped into Component Sets where variants are required
- built with Auto Layout
- bound to existing Foundations where supported
- documented using instances
- suitable for long Spanish (Peru) content
- accessibility-aware

Use Component Properties instead of multiplying variants when possible.

Prefer:

Variant properties
→ for meaningful visual/state differences

Boolean properties
→ for optional visibility

Text properties
→ for editable copy

Instance Swap properties
→ for icons where practical

Do not create unnecessary combinatorial variant explosions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
03 / ICONBUTTON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a real Component Set:

`IconButton`

Purpose:
single-icon interactive control.

Variants:

Variant:
- Primary
- Secondary
- Tertiary

State:
- Default
- Hover
- Pressed
- Focus
- Disabled

Size:
- M
- L

Expose:

Icon
→ Instance Swap property where practical

Use the same size logic and interaction philosophy as the approved Button.

Keep target sizes accessibility-friendly.

Do not create tiny controls below the established interaction guidance.

Use semantic tokens from Foundations.

Do not use Earth Gold as a default interaction color.

Document example uses such as:

- cerrar
- volver
- mostrar menú
- navegación compacta

Do not rely on icon meaning alone in documentation; note that production usage requires an accessible label.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
04 / TEXTLINK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a real Component Set:

`TextLink`

Variants:

Emphasis:
- Primary
- Secondary

State:
- Default
- Hover
- Focus
- Disabled

Size:
- M
- S

Optional properties:

Leading Icon
Trailing Icon

Prefer Boolean + Instance Swap properties.

Expose:

Label
→ Text property

Examples:

“Crear una cuenta”
“¿Olvidaste tu contraseña?”
“Volver”
“Ver más información”

Text links must remain visually distinct from normal body copy.

Focus state must be clearly visible.

Do not communicate interaction through color alone where avoidable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
05 / PASSWORDINPUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`PasswordInput`

IMPORTANT:
Reuse the approved `Input` architecture.

Do NOT redesign the Input system from scratch.

PasswordInput should visually and structurally inherit the Input pattern.

Required behavior:

State:
- Default
- Hover
- Focus
- Filled
- Error
- Disabled

Visibility:
- Hidden
- Visible

Expose:

Label
Value
Helper Text
Required
Show Helper Text

Add a trailing visibility toggle icon.

The eye icon must behave as a controlled visual property.

Use neutral examples:

Label:
“Contraseña”

Placeholder:
“Ingresa tu contraseña”

Helper example:
“Usa una contraseña segura.”

Error example:
“Revisa la información ingresada.”

IMPORTANT CONTENT SAFETY:

Do NOT invent:
- minimum password length
- required symbols
- required uppercase/lowercase
- password expiry
- security policy

unless these rules already exist in approved product requirements.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
06 / SELECT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a reusable Component Set:

`Select`

Structure should align visually with Input.

States:

- Default
- Hover
- Focus
- Filled
- Error
- Disabled

Expose:

Label
Placeholder / Selected Value
Helper Text
Required
Show Helper Text
Leading Icon if needed

Include a trailing chevron/dropdown indicator.

Examples:

“Tipo de documento”
“Selecciona una opción”

Do NOT create an actual full dropdown menu system in this execution unless technically required for documentation.

The current component represents the select field/control.

Keep the visual system consistent with Input.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
07 / CHECKBOX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a real Component Set:

`Checkbox`

States:

State:
- Default
- Hover
- Focus
- Disabled

Selection:
- Unchecked
- Checked
- Indeterminate

Expose:

Label
→ Text property

Optional supporting text:
→ Boolean + Text property where practical

Use a clear checkmark.

Selected state must not be communicated only through color.

Focus must be visible.

Ensure a practical interactive target even if the visual checkbox itself is smaller.

Use neutral examples such as:

“He leído la información.”
“Deseo continuar.”

Do NOT insert final legal consent wording or fabricated policy text.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
08 / RADIO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Radio`

Properties:

State:
- Default
- Hover
- Focus
- Disabled

Selection:
- Unselected
- Selected

Expose:

Label
→ Text property

Ensure selected state uses both shape/state and color.

Maintain accessible interaction targets.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
08 / SEGMENTED CONTROL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create separately:

`SegmentedControl`

This is a reusable compact choice pattern.

Do NOT combine Radio and SegmentedControl into the same Component Set.

Create a small but scalable architecture.

Recommended properties:

Size:
- M
- L

State:
- Default
- Disabled

Items:
document 2-item and 3-item examples.

Use child reusable segment items if this produces cleaner architecture.

Selected segment must be visually clear.

Examples should remain neutral.

Do not use it for binary consent or legal acceptance.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
09 / OTPINPUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create a reusable OTP input system:

`OTPInput`

This will later support authentication flows.

IMPORTANT:
Do NOT invent OTP product rules.

Do NOT define:
- OTP length as a business rule
- resend limits
- expiration time
- maximum attempts
- SMS/email provider behavior

The component may document a VISUAL example using a reasonable number of cells, but clearly treat this as component layout, not a product policy.

Create states:

- Empty
- Focus
- Filled
- Error
- Disabled

Architecture:

Use reusable OTP cells/items if practical.

Each cell should support:

State:
- Empty
- Focus
- Filled
- Error
- Disabled

Create parent `OTPInput` composition from reusable instances if this produces cleaner architecture.

Expose helper/error messaging.

Example visible copy:

“Ingresa el código”

Helper:
“Escribe el código que recibiste.”

Error:
“El código ingresado no es válido.”

Do not specify how many attempts are allowed.

Do not specify expiration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FOUNDATION CONSUMPTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

All new components must consume the existing Foundations where applicable.

Use semantic tokens such as:

text/primary
text/secondary
text/inverse

action/primary
action/primary-hover
action/secondary

border/default
border/strong
border/focus

state/error
state/success

approved spacing variables
approved radius variables
approved typography styles
approved focus treatment

Do not hardcode duplicated approved values.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONSISTENCY WITH BUTTON + INPUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Treat the approved Button and Input as architecture references.

New components must match them in:

- naming quality
- variant structure
- component properties
- Auto Layout behavior
- control heights
- spacing
- radius
- typography
- focus treatment
- documentation style

Do not modify the approved Button or Input unless strictly necessary to maintain system compatibility.

If a change to Button/Input would be required, document the issue rather than silently redesigning them.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DOCUMENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create one Section for each requested component.

For every component show:

- anatomy
- properties
- variants
- states
- usage examples
- key usage rules

All documentation examples should use INSTANCES of the canonical component.

Do not duplicate master components as disconnected documentation artwork.

Visible explanatory copy must be Spanish (Peru).

Technical property names may remain English.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACCESSIBILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Apply the approved accessibility Foundations.

Ensure:

- visible focus states
- readable disabled states
- practical interactive target sizes
- errors include text when applicable
- selected/error states do not depend only on color
- labels remain visible where appropriate
- long Spanish copy does not break layouts

Do not claim formal accessibility certification.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DO NOT CREATE YET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Do NOT create:

Alert
FormMessage
Badge
Toast

Accordion
FAQItem
TrustItem
ProcessStep
SectionHeading
Stepper

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

Do not create Product Screens.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL VALIDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before finishing verify:

- IconButton is a real Component Set
- TextLink is a real Component Set
- PasswordInput correctly inherits the Input language
- Select aligns with Input architecture
- Checkbox is reusable and exposes selection/state
- Radio is reusable
- SegmentedControl is reusable and separate from Radio
- OTPInput uses reusable architecture
- component properties are exposed where appropriate
- documentation examples are instances
- existing Foundations are consumed
- no new parallel Design System was created
- no unsupported financial/security/business rules were invented
- Button and Input remain intact
- no Feedback/Product Pattern/Navigation/Sprint 2 components were created
- no Product Screens were created
- no other page was modified

Finish ONLY this Primitive component expansion inside `03 — Components`.