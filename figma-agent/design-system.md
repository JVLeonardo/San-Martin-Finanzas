# Design system rules

## Visual direction

Create a serious, clear, approachable regional financial product. It must not resemble generic SaaS, crypto, a cold corporate bank, an NGO, a tourist site, or an AI-template landing page. Build hierarchy with typography, whitespace, thin borders, and surface contrast; use soft elevation only when interaction requires it.

## Foundations

Create Figma variables for these approved values:

| Group | Token | Value |
|---|---|---|
| Brand | Forest 900 | `#0E3F2B` |
| Brand | Forest 700 | `#145C3A` |
| Brand | Forest 500 | `#2F7D57` |
| Accent | Earth Gold | `#C79A52` |
| Neutral | Warm White | `#F7F4EE` |
| Neutral | White | `#FFFFFF` |
| Neutral | Ink | `#24312B` |
| Neutral | Muted | `#66736D` |
| Neutral | Border | `#DCE5DF` |

Forest green identifies; Earth Gold accents. Gold should occupy approximately 3–8% of a composition: never a primary CTA, dominant background, or long text color. Success, warning, error, info, and focus colors are not approved brand tokens; represent them as semantic placeholders and validate their final contrast before implementation.

## Typography

- **Cormorant Garamond SemiBold**: brand/editorial display, H1, H2, and institutional emphasis.
- **Source Sans 3**: navigation, UI, body, forms, buttons, disclosure rows, and data.
- Desktop reference: Display 48–64 px; H1 40–48 px; H2 32–36 px; H3 Source Sans 3 22–24 px; body 16/24; body large 18/~28; small 14/20; caption 12–13; button 14–16.
- Mobile reference: H1 34–40 px; H2 28–32 px; H3 20–22 px. Functional text never falls below 14 px.

Never reconstruct the wordmark with typography. Do not use Cormorant for dense forms, tables, or long reading.

## Layout and components

- Desktop: 1440 px frame, 12 columns, 24 px gutters, 1200 px maximum content width.
- Mobile: 390 px frame, 4 columns, 16–20 px margins. Check 320, 390, 768, 1024, and 1440 contexts.
- Spacing: only 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120 px.
- Radius: button 8 px, input 8 px, card 12 px, large blocks 16–20 px.
- Use Auto Layout, variables, component properties, and instances. Avoid arbitrary local frames and absolute positioning.

Build reusable Button, IconButton, TextLink, Input, PasswordInput, OTPInput, Checkbox, Alert, FormMessage, Navbar, MobileNavigation, Container, Section, SectionHeading, Accordion, TrustItem, ProcessStep, LoanSimulatorShell, AuthPanel, AuthForm, and Footer. Define states where relevant: default, hover, focus, active, loading, error, success, disabled.

## Responsive and accessible UI

Desktop layouts must recompose, not merely shrink. Navigation becomes a compact accessible menu; heroes stack copy before the simulator; grids collapse deliberately; form actions can become full width. Keep labels persistent, focus visible, errors textual and adjacent to fields, and primary targets preferably 44 × 44 px. Target WCAG 2.2 AA; verify contrast in final combinations.

## Brand graphics and density

Use only the reference assets and the rules in `brand-usage.md`.

- **Level 0:** no regional graphic — forms, tables, dense areas.
- **Level 1:** one subtle resource — usually Topography.
- **Level 2:** one primary resource — Horizonte or La Ruta.
- **Level 3:** brand composition — hero, final CTA, or institutional section only.

Do not repeat Level 3 across the page. Do not automatically combine Horizonte, Topografía, La Ruta, and photography. Never use blobs, glassmorphism, decorative financial charts, coins, bills, fake dashboards, unapproved badges, or heavy shadows.
