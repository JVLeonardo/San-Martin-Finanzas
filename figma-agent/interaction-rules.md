# Interaction, responsive, and accessibility rules

## Scope boundary

These are UI behaviors for the Sprint 1 Home and identity flows. They do not define backend policy, eligibility, KYC, financial evaluation, OTP limits, password policy, identity-provider configuration, or security-audit logic.

## Interactive behavior

- **Hover:** provide a restrained visual response; do not use motion as the sole signal.
- **Focus:** always visible, with validated contrast and logical keyboard order.
- **Active:** acknowledge a press without changing the action meaning.
- **Disabled:** explain that the action is unavailable; do not disclose security or business causes.
- **Loading:** prevent duplicate submission, retain context, and announce progress with text/state.
- **Success:** confirm completion and offer one clear next action.
- **Validation error:** show a form-level summary when appropriate and a specific message by the field.
- **Server error:** use neutral retry copy and retain safe entered values. Never expose account existence, provider details, secrets, or audit data.

Labels are always visible. Placeholders are supporting examples only. Required service consent and optional marketing consent are separate; marketing starts unchecked.

## Authentication patterns

| State | UI behavior |
|---|---|
| Default | Clear form and enabled primary action when valid. |
| Invalid sign-in | Use the approved generic message; never distinguish the cause. |
| OTP invalid | Explain that the code is invalid without exposing limits or provider details. |
| OTP expired | Explain that a new code is needed. |
| Too many attempts | Explain a temporary pause without a duration or exact policy. |
| Session expired | Explain that sign-in is required again. |
| Recovery request | Always use a neutral response regardless of account existence. |

OTP is a single accessible input concept shown as six visual cells. It supports conceptual full-code paste. Design resend and cooldown states as policy slots, not as declared timings.

## Navigation and responsive behavior

Desktop navigation becomes an accessible compact menu on mobile. Escape closes menus or intentional modal containment. Do not create a focus trap outside a modal. Keep primary actions easy to reach, preserve content order, avoid horizontal overflow, and make buttons full width on mobile when it improves clarity.

Use deliberate breakpoints: mobile 320–767, tablet 768–1023, desktop 1024+. Verify 320, 390, 768, 1024, and 1440 frames. A two-column hero stacks copy, actions, then the informational simulator; authentication becomes a compact one-column form before brand decoration.

## Accessibility requirements

- Target WCAG 2.2 AA: 4.5:1 normal text and 3:1 large text, controls, and visible focus.
- Use text, icon/shape, and color together for states; never color alone.
- Preserve labels, helper text, field-level errors, and error summaries in reading order.
- Prefer 44 × 44 px targets for primary actions; never design below 24 × 24 px.
- Support keyboard navigation, 200% zoom/reflow, reduced motion, meaningful screen-reader labels, and live feedback for asynchronous form results.
- No essential information may exist only inside a bitmap or animation.
