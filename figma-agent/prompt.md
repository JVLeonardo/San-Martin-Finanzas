# San Martin Finanzas — Figma Agent Master Prompt

## Mission

Create a production-ready, responsive Figma design system and the complete Sprint 1 experience for **San Martin Finanzas**, a regional digital microloan platform initially oriented to people with verifiable residence or connection to San Martín, Peru. The work must be editable, reusable, accessible, and directly translatable to React, Next.js, TypeScript, and Tailwind CSS.

The design must communicate formality, financial trust, transparency, security, regional identity, responsible flexibility, digital simplicity, and human proximity. It must clearly differ from informal lending apps, “gota a gota”, crypto startups, generic SaaS landing pages, bureaucratic banks, tourist websites, and AI-generated templates.

## Scope and hard boundaries

Design only:

- Public Home for desktop and mobile.
- Login, Register, Verify OTP, Forgot Password, and Reset Password.
- UI states: default, loading, success, validation error, server error, invalid OTP, expired OTP, too many attempts, disabled, and session expired.

Do not design KYC, final regional verification, a real loan application, evaluation, approval, scoring, disbursement, payments, a customer dashboard, back office, MFA, or future-sprint features. Authentication does not establish civil identity, regional residence, eligibility, or loan approval.

Important scope decision: **“Loans” is an informational Home anchor only.** The Home primary action is **“Create my account”**, not “Apply for a loan”. Do not create an application route, a disabled application action, or approval-oriented copy.

Never invent rates, amounts, terms, total cost, repayment rules, approval criteria, customer metrics, testimonials, ratings, regulatory claims, legal details, KYC rules, or business statistics. Use clearly labelled placeholders where an approved rule is required.

## Figma Free constraint

Use exactly three pages and no others:

1. `01 — Foundations & Components`
2. `02 — Sprint 01 Screens`
3. `03 — Prototype & Archive`

Build real Figma Components, component variants, Auto Layout, clean naming, variables/tokens where available, desktop/mobile grids, and reusable hierarchy. Avoid unnecessary absolute positioning. Never use names such as `Frame 123`, `Rectangle 28`, or `Group 9`.

## Visual concept

**Contemporary Amazonian Fintech**: a serious, modern, commercial financial interface with a subtle San Martín identity expressed through color, restrained documentary photography, context, geography, and graphic language. It is not a jungle-tourism aesthetic.

Use a brand motif named **La Ruta**: a thin, organic line inspired abstractly by rivers, regional geography, journey, progress, and financial flow. Use it sparingly as a quiet signature, never as a repeated background, literal map, or decorative noise.

Never use blue/purple fintech gradients, glassmorphism, crypto aesthetics, floating coins or cards, money rain, rockets, fake dashboards, giant blobs, excessive cards or pills, heavy shadows, decorative icons without function, fake testimonials, fake metrics/ratings, guaranteed approval, artificial urgency, unapproved regulatory claims, tourist jungle imagery, or generic AI marketing copy.

## Visual foundation

Create variables for these values:

| Group | Token | Value |
|---|---|---|
| Brand | Forest 900 | `#0E3F2B` |
| Brand | Forest 700 | `#145C3A` |
| Brand | Forest 500 | `#2F7D57` |
| Brand | Forest 100 | `#EAF4EE` |
| Neutral | White | `#FFFFFF` |
| Neutral | Canvas | `#F7F9F7` |
| Neutral | Ink | `#24312B` |
| Neutral | Muted | `#66736D` |
| Neutral | Border | `#DCE5DF` |
| Accent | Earth | `#C79A52` |

Earth is a minor accent and must not compete with forest green. Define independent semantic Success, Warning, Error, and Info concepts; do not treat brand green as success. Verify final color combinations for WCAG 2.2 AA.

Use Manrope for headings and UI emphasis; Source Sans 3 for body, forms, and future financial information. Suggested desktop scale: Display 56–64, H1 44–48, H2 34–38, H3 24, body large 18, body 16, small 14, caption 12. Scale proportionally for mobile. Use only 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, and 120 for spacing. Radius: Button 8, Input 8, Card 12, feature block 16–20. Prefer whitespace, borders, typography, and surface contrast over shadows.

Desktop grid: 1440 frame, 12 columns, 1200 max content width, 24 gutters. Mobile grid: 390 frame, 4 columns, 16–20 margins. Mobile is a deliberate one-column experience, not a scaled-down desktop.

## Page 01 — Foundations & Components

Create sections in this exact order: `00 Cover & Rules`, `01 Variables`, `02 Typography`, `03 Layout Grids`, `04 Icons & Motif`, `05 Core Components`, `06 Auth Components`.

Build these components using `Component/Variant` naming and Auto Layout:

- `Button`: primary, secondary, tertiary, danger; sm/md/lg; loading and disabled.
- `TextLink`, `IconButton`, `Input`, `PasswordInput`, `OTPInput`, `Checkbox`, `Badge`, `Alert`, `FormMessage`.
- `Navbar`, `MobileNavigation`, `Container`, `Section`, `SectionHeading`, `Accordion`, `TrustItem`, `ProcessStep`, `LoanSimulatorShell`, `AuthPanel`, `AuthForm`, `Footer`.

For form components include visible labels, helper text, error text, default/focus/error/disabled where relevant, and no-color-only state communication. `PasswordInput` has visible/hidden state. `OTPInput` is visually six cells but conceptually permits full-code paste through one accessible input interaction. `MobileNavigation` has open/closed states and supports keyboard dismissal. Preferred interactive targets are 44px minimum.

## Page 02 — Sprint 01 Screens

Create sections: `00 Flow Map`, `01 Home Desktop`, `02 Home Mobile`, `03 Auth Desktop`, `04 Auth Mobile`, `05 States & Edge Cases`.

Create exact frames: `Home / Desktop / 1440`, `Home / Mobile / 390`, `Auth / Login / Desktop`, `Auth / Login / Mobile`, `Auth / Register / Desktop`, `Auth / Register / Mobile`, `Auth / Verify OTP / Desktop`, `Auth / Verify OTP / Mobile`, `Auth / Forgot Password / Desktop`, `Auth / Forgot Password / Mobile`, `Auth / Reset Password / Desktop`, and `Auth / Reset Password / Mobile`.

Home order is mandatory:

1. Header: anchors **How it works**, **Loans**, **Security**, **Help**; actions **Sign in** and **Create my account**.
2. Asymmetric hero: left copy and actions, stable conceptual simulator at right on desktop; stack copy before simulator on mobile.
3. Conceptual simulator: label it “Information simulator” and “Financial conditions pending approval”. It has disclosure structure only; no values, ranges, sliders, calculations, rates, terms, amounts, or results.
4. Trust strip: digital process, clear conditions, regional support; no statistics or badges.
5. How it works: Create your account, Complete your information, Receive an evaluation. Do not promise a loan outcome.
6. Regional differentiation.
7. San Martín identity with La Ruta.
8. Transparency.
9. Security.
10. Eligibility guidance.
11. FAQ.
12. Final CTA: **Create my account** and secondary **I already have an account**.
13. Institutional footer.

The desktop hero is editorial and asymmetric, not a generic SaaS card layout. Use one stable `LoanSimulatorShell`, no floating product cards. On mobile, preserve all content and order; simplify layout rather than remove essential information.

Authentication uses a shared AuthPanel shell: a restrained brand panel plus a 440–480px desktop form; a compact, one-column form on mobile. Registration includes contact identifier, password, password confirmation, a required service consent, and optional unchecked marketing consent. Final field policy remains pending approval. OTP uses six visual cells, resend/cooldown slots, invalid/expired/too-many-attempts states, but no exact operational limits or provider claims. Login failure is generic: “We could not sign you in with these details. Check your information or recover access.” Forgot Password must always say: “If an account is associated with these details, you will receive instructions to continue.” Reset Password uses new password, confirmation, a pending password-policy slot, success, and expired-code/link state. Do not add social login or MFA.

## Page 03 — Prototype & Archive

Create sections: `00 Prototype Start`, `01 Happy Paths`, `02 Error Paths`, `03 Review Notes`, `99 Archive`.

Set desktop and mobile Home as starts. Connect Create my account → Register → Verify OTP → success. Connect Sign in → Login, Login → generic error and session-expired state. Connect Forgot Password → Reset Password → success. Prototype UI transitions only, never a loan decision. Use instant or brief dissolve transitions; avoid decorative motion. Record pending business/legal items in `03 Review Notes`; move discarded explorations to `99 Archive`.

## Accessibility and final self-review

Use WCAG 2.2 AA as the target: contrast, 3:1+ visible focus indicator, logical keyboard order, persistent labels, error summary plus field errors, no color-only feedback, touch targets, reduced motion, semantic hierarchy, and screen-reader labels/live updates. Do not erase safe entered data after a server error.

Before finishing, self-review visual consistency, token usage, Auto Layout, component instances and variants, spacing, typography, accessibility, responsive behavior, excessive cards, generic SaaS/AI appearance, San Martín identity, and realistic Next.js implementation. Correct inconsistencies without redesigning the approved architecture.
