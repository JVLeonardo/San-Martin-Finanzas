/smf-design-system

Work ONLY inside:

`04 — Sprint 01 · Public & Auth`

Create the second Auth screen set for San Martín Finanzas using the existing approved Design System and existing Auth components.

Do NOT modify:
- approved Home screens
- Login screens
- Register screens
- Brand & Assets
- Foundations
- Components

Do NOT redesign the Auth system.

The goal is to complete the MVP password-recovery flow.

Create:

1. Forgot Password
2. OTP Verification
3. New Password
4. Password Updated Success

for:

- Desktop
- Mobile

Use existing approved components wherever possible:

- AuthShell
- AuthBrandPanel
- Input
- PasswordInput
- OTPInput
- Button
- TextLink
- Alert
- FormMessage
- Logo assets

Reuse component instances.
Do not detach components unless absolutely necessary.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The intended recovery flow is:

Login
→ Forgot Password
→ OTP Verification
→ New Password
→ Password Updated Success
→ Login

This is an account-access recovery flow.

It is NOT:
- identity approval
- loan approval
- eligibility validation
- financial verification

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 1 — FORGOT PASSWORD / DESKTOP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Auth / Forgot Password / Desktop`

Width:
1440px

Reuse the same Desktop AuthShell architecture already approved for Login and Register.

LEFT:
AuthBrandPanel

RIGHT:
Recovery form

Suggested heading:

`Recupera tu acceso`

Supporting copy:

`Ingresa el correo asociado a tu cuenta para continuar.`

Field:

Label:
`Correo electrónico`

Placeholder:
`nombre@correo.com`

Primary CTA:

`Continuar`

Secondary navigation:

`Volver a ingresar`

Use TextLink for returning to Login.

Do NOT say:
- “Te enviaremos el código en 30 segundos”
- “Código válido por 5 minutos”
- “Solo tienes 3 intentos”

unless such rules already exist in validated product requirements.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 2 — FORGOT PASSWORD / MOBILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Auth / Forgot Password / Mobile`

Width:
390px

Reuse the approved mobile Auth direction.

Structure:

- compact logo
- heading
- supporting copy
- email field
- primary CTA
- back-to-login link

Keep it simple and single-column.

Do NOT add unnecessary illustration or strong decoration.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 3 — OTP VERIFICATION / DESKTOP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Auth / Verification / Desktop`

Reuse Desktop AuthShell.

Use the approved OTPInput component.

Suggested heading:

`Verifica tu correo`

Supporting copy:

`Ingresa el código de verificación para continuar.`

Add OTPInput.

Primary CTA:

`Verificar`

Secondary action:

`Reenviar código`

IMPORTANT:

Do NOT add a countdown timer unless a real rule already exists.

Do NOT invent:
- expiration time
- resend cooldown
- attempt limits
- delivery guarantees

If a supporting note is useful, use neutral wording such as:

`Si no encuentras el mensaje, revisa también tu carpeta de correo no deseado.`

Do NOT display a full real email address.

If contextual masking is needed, use a neutral placeholder example only if clearly treated as example, or omit it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 4 — OTP VERIFICATION / MOBILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Auth / Verification / Mobile`

Width:
390px

Use:

- compact logo
- heading
- supporting copy
- OTPInput
- Verify button
- resend action

OTP cells must fit comfortably inside 390px.

No horizontal overflow.

Preserve touch-friendly spacing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 5 — NEW PASSWORD / DESKTOP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Auth / New Password / Desktop`

Heading:

`Crea una nueva contraseña`

Supporting:

`Elige una nueva contraseña para recuperar el acceso a tu cuenta.`

Fields:

1.
Label:
`Nueva contraseña`

Use PasswordInput.

2.
Label:
`Confirma tu contraseña`

Use PasswordInput.

Primary CTA:

`Guardar contraseña`

IMPORTANT:

Do NOT invent exact password requirements.

Do NOT add:
- minimum character count
- mandatory uppercase
- mandatory symbols
- exact complexity rules

unless already validated elsewhere.

If helper text is needed:

`Usa una contraseña segura que puedas recordar.`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 6 — NEW PASSWORD / MOBILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Auth / New Password / Mobile`

Width:
390px

Use a simple vertical layout.

Preserve:
- clear heading
- two PasswordInputs
- full-width primary CTA
- comfortable spacing

Do not compress fields excessively.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 7 — SUCCESS / DESKTOP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Auth / Password Updated / Desktop`

This is the final success state of password recovery.

Use a clean, reassuring layout.

Suggested heading:

`Contraseña actualizada`

Supporting:

`Ya puedes ingresar nuevamente con tu nueva contraseña.`

Primary CTA:

`Ingresar`

The CTA should route conceptually back to Login.

You may use an existing success icon or simple approved system symbol if already available.

Do NOT create a new decorative illustration.

Do NOT say:
- “Tu cuenta está verificada”
- “Tu identidad ha sido validada”
- “Tu crédito está listo”

This success state confirms ONLY the password update.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREEN 8 — SUCCESS / MOBILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

`Auth / Password Updated / Mobile`

Width:
390px

Use the same success content:

`Contraseña actualizada`

`Ya puedes ingresar nuevamente con tu nueva contraseña.`

CTA:

`Ingresar`

Keep the screen compact and calm.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ERROR STATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Do not create full separate error screens.

Instead, outside the main screen frames, create a small supporting state area ONLY if useful.

Demonstrate these examples using existing components:

- correo inválido
- código incorrecto
- código no válido / no reconocido
- contraseñas no coinciden
- generic request error

Use existing:
- Input Error
- OTPInput Error
- PasswordInput Error
- FormMessage / Error
- Alert / Error

Do NOT invent technical error codes.

Use user-facing Spanish messages only.

Example safe messages:

`Revisa el correo ingresado.`

`El código ingresado no es válido.`

`Las contraseñas no coinciden.`

`No pudimos completar la solicitud. Inténtalo nuevamente.`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTENT SAFETY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Do NOT define or invent:

- OTP duration
- OTP resend interval
- retry limits
- account lockout rules
- exact password policy
- security certifications
- provider names
- encryption methods
- compliance claims
- verification guarantees

Do not expose backend implementation details in UI.

All visible copy must remain in Spanish.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VISUAL DIRECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Auth remains:

- calm
- trustworthy
- functional
- premium
- low decoration

Desktop:
reuse AuthBrandPanel.

Mobile:
prefer compact branded header.

Do NOT place:
- Horizon behind forms
- large Route elements
- strong Topography behind input fields

Brand graphics may remain limited to the approved AuthBrandPanel.

Hierarchy:

TASK > CONTENT > BRAND > DECORATION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Validate:

Desktop:
1440px

Mobile:
390px

Ensure conceptual adaptability to:

1024px
768px
320px

No horizontal overflow.

OTP layout must remain usable at 320px.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NAMING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use these exact frame names:

- Auth / Forgot Password / Desktop
- Auth / Forgot Password / Mobile
- Auth / Verification / Desktop
- Auth / Verification / Mobile
- Auth / New Password / Desktop
- Auth / New Password / Mobile
- Auth / Password Updated / Desktop
- Auth / Password Updated / Mobile

Use semantic internal layer names.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL VALIDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before finishing verify:

- all 8 screens are created
- existing Auth components are reused
- Desktop uses AuthShell/AuthBrandPanel consistently
- Mobile uses the approved compact Auth direction
- OTPInput is reused
- PasswordInput is reused
- all visible content is Spanish
- no unsupported OTP rules are invented
- no unsupported password rules are invented
- no financial or identity claims are introduced
- Login/Register/Home remain unchanged
- screens are structurally consistent

Finish ONLY this password-recovery Auth flow in this execution.