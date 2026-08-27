# Interaction, Responsive, and Accessibility Rules

## Principles

- Clarity before persuasion.
- Transparency before conversion.
- Mobile first and progressive disclosure.
- No dark patterns, false urgency, or implied approval.
- Recoverable errors and visible feedback.
- Clearly distinguish sensitive actions.
- Preserve user-entered safe data after server errors.

## Forms

- Labels are always visible; placeholders are supporting examples only.
- Place validation errors near the affected field and provide a form-level error summary when needed.
- Focus is always visibly indicated.
- Loading and disabled states remain understandable with text/icon/state, never color alone.
- Required service consent and optional marketing consent are separate; marketing is unchecked by default.

## OTP

- Show six visual positions or an equivalent accessible presentation.
- Allow conceptual full-code paste.
- Include focus, loading, success, invalid, expired, resend, cooldown, too-many-attempts, and disabled states.
- Do not expose OTP content, exact retry limits, exact cooldown duration, provider details, account existence, or security-audit data.
- Use generic, non-revealing error language.

## Authentication state matrix

| State | UI behavior |
|---|---|
| Default | Clear form, visible labels, primary action enabled when valid. |
| Loading | Prevent duplicate submission; retain context and announce progress. |
| Success | Confirm completion and provide one clear next action. |
| Validation error | Explain correction near the field and in a summary. |
| Server error | Use a neutral retry message; retain safe entered values. |
| Invalid OTP | Identify the code as invalid without exposing controls. |
| Expired OTP | Explain that a new code is needed. |
| Too many attempts | Explain temporary pause without an exact policy value. |
| Session expired | Explain that sign-in is required again. |
| Disabled | Explain that the action is currently unavailable without revealing cause. |

## Responsive rules

Desktop must not simply shrink into mobile. Mobile uses one column, compact navigation, an obvious primary action, comfortable touch targets, usable simulator structure, no horizontal overflow, and readable disclosure content. Test 320px, 390px, 768px, 1024px, and 1440px contexts.

## Accessibility

Use WCAG 2.2 AA as the target:

- Contrast: 4.5:1 for normal text; 3:1 for large text, controls, and visible focus treatment.
- Keyboard: logical order; Escape closes menus/dialogs; no focus traps except intentional modal containment.
- Semantic hierarchy: one primary page heading and ordered sections/headings.
- Error feedback: text, icon/shape, and color; never color only.
- Touch targets: 24×24 CSS px minimum, 44×44 preferred for primary actions.
- Reduced motion: respect `prefers-reduced-motion`; no essential information relies on animation.
- Screen readers: meaningful labels, descriptions, error associations, live region for async form feedback, and labelled icon-only controls.
- Reflow: support browser zoom at 200% without lost content or controls.
