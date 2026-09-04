# Screen guidance

## Scope map

Only these Sprint 1 areas are in scope: public Home, Login, Register, Verify contact (OTP), Recover access, and Reset password. Simulator, loan application, customer dashboard, and backoffice are not screens to design in this handoff. The Home simulator is a non-calculating informational structure only.

| Area | UX priority | Brand asset | Desktop/mobile guidance | Redesign focus |
|---|---|---|---|---|
| Home | Explain the platform before conversion; make account creation clear without financial promises. | Horizontal light/negative logo by surface; Level 2 route **or** horizon in hero/institutional sections; optional Level 1 Topography. | Asymmetric hero with copy left and simulator right; stack copy, actions, simulator on mobile. Use `smf-horizon-mobile.png` only where the desktop horizon no longer fits. | Strengthen narrative hierarchy, whitespace, editorial rhythm, CTA clarity, and restrained regional identity. |
| Login | Fast, calm, non-revealing access. | Compact logo; optional Level 1 Topography or secondary route outside the form. | Desktop brand support must not compete with a 440–480 px form; mobile is one-column and form-first. | Clear labels, recovery route, generic error, visible focus, and session-expired state. |
| Register | Explain digital-account creation and consent without overclaiming. | Compact logo; no regional graphic inside the form. | Desktop can use quiet side support; mobile strips decoration before task content. | Separate required service and optional marketing consent; validation and loading clarity. |
| Verify OTP | Finish contact verification without exposing controls. | Compact logo only; Level 0 graphic density. | Keep OTP cells, resend policy slots, and messages visible at every width. | Error, expiry, temporary pause, loading, success, keyboard/paste concept, and readable focus. |
| Recover access | Offer an account-existence-neutral request. | Compact logo only; Level 0 graphic density. | One short form; mobile action can be full width. | Neutral completion state and simple route back to sign in. |
| Reset password | Restore access securely and understandably. | Compact logo only; Level 0 graphic density. | One-column form with persistent requirements-pending slot. | Confirmation, expired-code/link state, success, and accessible error hierarchy. |

## Global prohibitions

Never use multiple regional graphics as protagonists in one composition. Forms, tables, OTP, and dense areas are Level 0. Do not use app icon or favicon in normal screen layouts. Do not introduce unapproved photography, rates, approval language, future-sprint routes, fictional financial charts, or decorative crypto/fintech clichés.

## Approved authentication copy

| Screen | Required copy |
|---|---|
| Login | `Sign in to your account`; `Use your registered details to continue.`; `Email or phone number`; `Password`; `Sign in`; `Forgot your password?`; generic error: `We could not sign you in with these details. Check your information or recover access.`; session expiry: `Your session has ended. Sign in again to continue.` |
| Register | `Create your account`; `Start by creating your digital identity.`; `Email or phone number`; `Password`; `Confirm password`; required consent: `I agree to the terms required to create and use my account.`; optional consent: `I would like to receive updates when I choose to do so.`; `Continue`; `Already have an account? Sign in` |
| Verify contact | `Verify your contact detail`; `Enter the code sent through the approved verification channel.`; `Verify code`; `Send a new code`; invalid: `This code is not valid. Check it and try again.`; expired: `This code has expired. Request a new one to continue.`; temporary pause: `For your security, this action is temporarily paused.` |
| Recover access | `Recover access`; `Enter your registered details and we will guide you through the next step.`; `Continue`; neutral result: `If an account is associated with these details, you will receive instructions to continue.` |
| Reset password | `Set a new password`; `Choose a new password to regain access.`; `New password`; `Confirm new password`; policy slot: `Password requirements pending approved provider policy.`; `Update password`; success: `Your password has been updated. You can now sign in.` |

Do not add social login, MFA, password rules, provider names, retry limits, account-existence signals, or policy timings.

## Open issues to preserve visibly

- Legal entity, official support channels, legal/privacy copy, and complaints-book publication.
- Final registration fields, password policy, OTP provider/channel, resend/expiry/attempt rules.
- Regional verification, eligibility, and every financial product condition.
- A dedicated approved dark horizon and licensed final photography.
