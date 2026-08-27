# Design System Rules

## Foundation

Create Figma variables for the approved brand, neutral, and accent palette:

- Forest 900 `#0E3F2B`, Forest 700 `#145C3A`, Forest 500 `#2F7D57`, Forest 100 `#EAF4EE`.
- White `#FFFFFF`, Canvas `#F7F9F7`, Ink `#24312B`, Muted `#66736D`, Border `#DCE5DF`.
- Earth `#C79A52` as a minority accent only.

Success, Warning, Error, and Info are separate semantic concepts. Their exact values must pass contrast validation and must not be inferred from the brand palette.

## Typography

- Headings and UI emphasis: Manrope.
- Body, form, and future financial information: Source Sans 3.
- Desktop: Display 56–64, H1 44–48, H2 34–38, H3 24, body large 18, body 16, small 14, caption 12.
- Mobile: preserve hierarchy and legibility; no functional text below 14px.

## Layout, spacing, shape, and elevation

- Desktop: 1440px, 12 columns, 24px gutters, roughly 1200px maximum content width.
- Mobile: 390px, 4 columns, 16–20px margins.
- Spacing scale: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120 only.
- Radius: Button 8px; Input 8px; Card 12px; large blocks 16–20px.
- Use minimal soft elevation. Build hierarchy with space, thin borders, type, and surface contrast.

## Brand motif and imagery

`La Ruta` is a thin organic line reflecting rivers, regional geography, journey, progress, and financial flow. It should appear once per meaningful major block at most, at low emphasis. It is never a repeated background, a map, or decorative clutter.

If photography is approved later, use restrained documentary-commercial photography: Peruvian people, workers, merchants, entrepreneurs, small businesses, real context, natural light, natural expressions, and moderated colors. Avoid generic corporate stock poses, money in hand, fictional credit cards, tourism, luxury, dramatized poverty, and regional stereotypes.

## Component system

Every component uses Auto Layout, spacing variables, semantic properties, and reusable variants. Components must be implemented as instances, not duplicated local frames.

| Component | Required variants/states |
|---|---|
| Button | primary/secondary/tertiary/danger; sm/md/lg; default/loading/disabled |
| IconButton | ghost/outline/solid; accessible label required |
| TextLink | brand/neutral; optional icon; visible focus treatment |
| Input | default/focus/error/disabled; label, hint, message |
| PasswordInput | default/focus/error/disabled; shown/hidden password |
| OTPInput | default/focus/error/disabled; six visual cells; full paste concept |
| Checkbox | unchecked/checked/indeterminate/error/disabled |
| Badge | neutral/success/warning/error; never a standalone alert |
| Alert | info/success/warning/error; icon, title, body, optional action |
| FormMessage | hint/error/success; programmatically associated concept |
| Navbar | default/scrolled; desktop navigation and actions |
| MobileNavigation | open/closed; focus-safe panel |
| Container | content/wide/narrow |
| Section | canvas/white/forest-soft; default/compact spacing |
| SectionHeading | left/center; eyebrow/action slots |
| Accordion | open/closed/disabled; keyboard-ready pattern |
| TrustItem | icon/title/body; no unapproved claim |
| ProcessStep | number/title/body; informative, not outcome-oriented |
| LoanSimulatorShell | placeholder/unavailable only; no financial calculation |
| AuthPanel | login/register/otp/recovery/reset modes |
| AuthForm | default/loading/success/error/disabled states |
| Footer | group links; approved/pending legal state |

## Responsive behavior

Components must define mobile behavior rather than merely scale. Nav becomes an accessible compact menu; hero columns stack; multi-column content collapses to one column; buttons may become full width when useful; all essential information remains reachable without horizontal overflow.
