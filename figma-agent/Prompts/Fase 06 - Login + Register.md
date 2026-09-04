/smf-design-system

Work ONLY inside:

`04 — Sprint 01 · Public & Auth`

Create the first Auth screen set for San Martín Finanzas using the existing approved Design System and existing Auth components.

Do NOT redesign the Design System.
Do NOT modify the approved Home screens.
Do NOT create new brand assets unless strictly necessary.
Do NOT invent financial, legal, regulatory, verification or security rules.

OBJECTIVE

Create production-oriented MVP screens for:

1. Login
2. Register

for:

- Desktop
- Mobile

Use the existing approved components and patterns already available in:

`03 — Components`

especially:

- AuthShell
- AuthBrandPanel
- Input
- PasswordInput
- Checkbox
- Button
- TextLink
- Alert / FormMessage
- Logo assets

Reuse component instances wherever possible.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 1 — LOGIN / DESKTOP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Auth / Login / Desktop`

Recommended width:
1440px

Use the existing Desktop AuthShell structure.

Preferred composition:

LEFT:
`AuthBrandPanel`

RIGHT:
Authentication form area

The left panel should preserve the approved San Martín Finanzas brand direction.

Use:
- Forest 900 background
- approved light logo
- subtle approved Topography Dark treatment if already part of the canonical AuthBrandPanel
- editorial headline
- short supporting copy

Do NOT overload the brand panel.

Suggested safe brand copy:

Heading:
`Tu cuenta, siempre a tu alcance`

Supporting:
`Ingresa para continuar tu proceso en San Martín Finanzas.`

Do not imply approval, eligibility or credit availability.

LOGIN FORM

Heading:
`Ingresa a tu cuenta`

Supporting:
`Continúa con tus datos de acceso.`

Fields:

1. Email
Label:
`Correo electrónico`

Placeholder:
`nombre@correo.com`

2. Password
Label:
`Contraseña`

Use approved PasswordInput.

Add:

TextLink:
`¿Olvidaste tu contraseña?`

Primary CTA:
`Ingresar`

Below form:

`¿Aún no tienes una cuenta?`

TextLink or secondary action:
`Comenzar`

Do NOT include social login providers unless already approved.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 2 — LOGIN / MOBILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Auth / Login / Mobile`

Width:
390px

Use the approved Mobile AuthShell direction.

Do NOT force the Desktop split-screen layout into Mobile.

Preferred structure:

- compact approved logo
- heading
- supporting copy
- form
- primary CTA
- recovery link
- registration link

Keep generous spacing and simple vertical flow.

Do not use the large AuthBrandPanel if it makes the Mobile screen unnecessarily long.

A small branded header area is acceptable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 3 — REGISTER / DESKTOP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Auth / Register / Desktop`

Use the same AuthShell architecture as Login.

Maintain visual consistency.

Suggested brand panel copy:

Heading:
`Empieza paso a paso`

Supporting:
`Crea tu cuenta para continuar cuando estés listo.`

Registration form heading:

`Crea tu cuenta`

Supporting:
`Completa tus datos para comenzar.`

Use only safe, minimal fields.

Include:

1. Nombres
Label:
`Nombres`

2. Apellidos
Label:
`Apellidos`

3. Correo electrónico
Label:
`Correo electrónico`

4. Contraseña
Label:
`Contraseña`

5. Confirmación de contraseña
Label:
`Confirma tu contraseña`

Use approved Input and PasswordInput components.

IMPORTANT:
Do NOT invent password requirements such as:
- exact character count
- mandatory symbols
- uppercase requirements
- lockout rules

unless already documented elsewhere in the product.

If helper text is required, use neutral wording such as:

`Usa una contraseña segura que puedas recordar.`

Do not define unsupported technical rules.

Primary CTA:

`Crear cuenta`

Below:

`¿Ya tienes una cuenta?`

TextLink:
`Ingresar`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 4 — REGISTER / MOBILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Auth / Register / Mobile`

Width:
390px

Use a clean single-column layout.

Preserve the same field order as Desktop.

Keep:

- compact logo
- clear heading hierarchy
- readable fields
- visible CTA
- access to Login

Avoid excessive decoration around form fields.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTENT SAFETY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Do NOT add claims such as:

- “Aprobación inmediata”
- “Crédito garantizado”
- “Obtén tu préstamo al instante”
- “Verificamos tu identidad automáticamente”
- “Cuenta validada”
- “SBS autorizado”
- specific processing times
- exact OTP limits
- specific password rules
- exact security certifications

Account creation is NOT:

- loan approval
- identity approval
- eligibility confirmation
- disbursement authorization

Keep all copy neutral and accurate.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FORM STATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For the screen examples, show clean default states.

You may also create a small documentation/example area outside the main screen frames demonstrating:

- Input / Error
- PasswordInput / Error
- Button / Disabled
- FormMessage / Error

ONLY if helpful.

Do not clutter the main screens with all states at once.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Validate:

Desktop:
1440px

Mobile:
390px

Ensure the structure can adapt conceptually to:

1024px
768px
320px

No horizontal overflow.

Preserve accessible tap targets and readable typography.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VISUAL DIRECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Auth should feel:

- calm
- trustworthy
- simple
- premium
- institutional
- not over-marketed

Forms are functional zones.

Decoration density:
LOW.

Do not place Horizon behind authentication fields.

Do not place strong Route graphics across form controls.

Topography may only appear subtly inside the approved brand panel area.

Hierarchy:

TASK > CONTENT > BRAND > DECORATION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NAMING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use clear semantic frame names:

- Auth / Login / Desktop
- Auth / Login / Mobile
- Auth / Register / Desktop
- Auth / Register / Mobile

Internal layers should follow semantic naming.

Reuse instances instead of detached duplicates wherever possible.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL VALIDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before finishing verify:

- Login Desktop created
- Login Mobile created
- Register Desktop created
- Register Mobile created
- AuthShell reused
- AuthBrandPanel reused where appropriate
- Input components reused
- PasswordInput reused
- Buttons reused
- all visible product copy is Spanish
- no unsupported financial/security/legal claims
- no Home screens modified
- no unnecessary new components created
- Desktop and Mobile remain structurally consistent

Finish ONLY Login + Register in this execution.