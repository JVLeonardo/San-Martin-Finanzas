/smf-design-system



Apply ONLY a structural, responsive and component-reuse repair pass to the existing Level 4 — Navigation / Layout inside `03 — Components`.



Do NOT redesign the visual identity.



Do NOT modify Levels 1–3.



Repair ONLY:



20 / Navbar

21 / MobileNav

22 / Footer

23 / AuthShell

24 / AuthBrandPanel



The current Level 4 contains clipping, oversized Component Sets, documentation overflow and duplicated primitive styling.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CRITICAL GLOBAL RULE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



The documentation system uses:



Section width = 1280px

Inner documentation width = 1200px



Do NOT place 1440px examples inside a 1200px documentation frame.



Do NOT solve this by visually scaling components down.



Instead make structural components genuinely responsive and show documentation examples at widths that fit the documentation system.



The same component must later be able to resize to 1440px in Product Screens.



Use Fill Container / horizontal resizing behavior appropriately.



No parent frame may be smaller than its visible children.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

20 / NAVBAR — STRUCTURAL REPAIR

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



The current Navbar Component Set is approximately 1488px wide and contains 1440px variants, causing overflow inside the 1280px section.



Repair the Navbar architecture.



Preserve properties:



Theme:

\- Light

\- Dark



State:

\- Default

\- Scrolled



The Navbar must be horizontally resizable.



Do NOT encode 1440px as the only valid component width.



Use a canonical documentation width that fits inside 1200px.



Recommended canonical demonstration:



1200px



Also demonstrate a resized instance at:



1024px



The future Product Screen can resize the same Navbar instance to 1440px.



Do NOT create a separate 1440 component variant.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NAVBAR — REUSE EXISTING COMPONENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



The current Actions area appears to use custom text/frame layers.



Refactor it.



Primary Action

→ MUST use an INSTANCE of the approved Button component.



Secondary Action

→ MUST use an INSTANCE of TextLink or Button Secondary, whichever fits the approved architecture.



Do NOT recreate button styling manually.



Navigation links should preferably reuse TextLink where technically appropriate.



Keep the approved Logo as an instance from `01 — Brand \& Assets`.



Do not reconstruct the logo.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

21 / MOBILENAV — LAYOUT REPAIR

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



The current MobileNav Component Set is approximately 1680px wide because all four 390px variants are arranged horizontally.



Preserve:



Theme:

\- Light

\- Dark



State:

\- Closed

\- Open



Rearrange canonical variants into a 2×2 documentation grid so the Component Set fits inside the 1200px documentation area.



Each MobileNav variant may remain 390px wide.



Do not shrink the actual mobile component.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MOBILENAV — ICONBUTTON REUSE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



The MenuButton currently appears to be manually constructed.



Replace the custom MenuButton with an INSTANCE of the approved IconButton component.



Configure the icon as the menu/hamburger icon.



Preserve a practical touch target.



Do NOT duplicate IconButton styling.



Keep the approved compact logo/isotype instance.



Do NOT use App Icon as the navbar identity.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

22 / FOOTER — CRITICAL HEIGHT REPAIR

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



The Footer is structurally broken.



Current Footer variants declare approximately:



height = 96px



but visible children extend to roughly:



y = 293px



This is invalid.



Repair Footer using proper vertical Auto Layout.



Required structure:



Footer

\- MainContent

&#x20; - BrandArea

&#x20; - NavigationGroups

\- Divider

\- BottomRow



The Footer root must fully contain ALL visible children.



Use Hug Contents vertically where appropriate.



Do NOT use a fixed 96px height.



Expected desktop footer height should naturally grow based on content.



No clipping.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FOOTER — RESPONSIVE WIDTH

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



Do NOT keep Footer locked to 1440px inside documentation.



Use a canonical documentation example at 1200px.



Also demonstrate responsive behavior at a narrow/mobile width.



Future Product Screens must be able to resize the same Footer to 1440px.



Do NOT create separate unrelated Footer systems.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FOOTER — COMPONENT REUSE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



The current Footer navigation/legal items appear to be raw text layers.



Where appropriate, replace them with INSTANCES of TextLink.



Keep the approved Logo as an instance.



Do not duplicate link styling.



Do not invent:



\- phone

\- email

\- RUC

\- address

\- certifications

\- regulatory claims



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

23 / AUTHSHELL — CRITICAL STRUCTURAL REPAIR

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



The current AuthShell Component Set is approximately 1902px wide because Desktop and Mobile are placed side by side.



Rearrange documentation so the Component Set fits within 1200px.



Preserve:



Layout:

\- Desktop

\- Mobile



Do NOT shrink the actual viewport representations through scaling.



For canonical documentation:



Desktop example may use a practical width such as 1200px.



Mobile:

390px



The same Desktop AuthShell must remain resizable to 1440px in future Product Screens.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AUTHSHELL — FORM CONTENT HEIGHT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



The current Desktop FormContent has approximately:



height = 10px



while its children extend beyond 100px.



Repair this immediately.



Use:



Auto Layout vertical

Hug Contents



Structure:



AuthShell

\- BrandPanel

\- FormArea

&#x20; - FormContent



FormContent must fully contain placeholder title/content.



Do not create actual Login/Register forms yet.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AUTHSHELL — DESKTOP COMPOSITION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



The Desktop shell should visually behave as a two-column authentication layout.



Recommended:



BrandPanel

→ fixed/proportional left column



FormArea

→ flexible right column



Both columns should span the usable AuthShell height.



The BrandPanel must not appear as a small 560×259 floating block in the upper-left corner of a 900px-tall screen.



The panel must behave as a real supporting column.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

24 / AUTHBRANDPANEL — REFINEMENT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



Preserve the existing approved Logo instance.



Refine AuthBrandPanel so it functions correctly as the Desktop left panel of AuthShell.



Recommended desktop behavior:



approximately 560px wide

fills the AuthShell height



Use a controlled internal content area.



Recommended structure:



AuthBrandPanel

\- Logo

\- TextContent

&#x20; - Title

&#x20; - Description

\- Optional approved graphic treatment



Use ONE restrained approved graphic asset where useful:



prefer:

Topography



or:

Horizon / Route



Do NOT combine all graphics.



Use the asset as an INSTANCE from `01 — Brand \& Assets`.



Do NOT recreate the graphic manually.



Do NOT use photography by default.



Keep graphics secondary to authentication content.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ASSET RULE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



All brand assets must come from existing canonical Brand components.



Navbar

→ approved Horizontal Logo instance



MobileNav

→ approved Compact Logo / Isotype instance



Footer

→ approved Logo instance



AuthBrandPanel

→ approved Logo + optional approved Graphic instance



Do NOT redraw brand assets.



Do NOT use raster placeholders when an approved component already exists in `01 — Brand \& Assets`.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DOCUMENTATION REPAIR

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



For every Level 4 section use:



Documentation

↓

Canonical Component Set / Master

↓

Examples using instances



Section:

x = 0

width = 1280



Internal documentation:

x = 40

width = 1200



No example may unintentionally extend outside the 1200px area.



For large responsive components, resize the instance to the documentation width.



Do NOT scale.



Do NOT clip.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RESPONSIVE VALIDATION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



Validate:



Navbar

\- 1200

\- 1024



MobileNav

\- 390

\- 320 if practical



Footer

\- 1200

\- mobile/narrow



AuthShell

\- 1200 desktop

\- 390 mobile



The components must also remain capable of later resizing to:



Navbar / Footer / AuthShell Desktop

→ 1440px Product Screen context



Do not create those Product Screens now.



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FINAL VALIDATION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



NAVBAR

\- section does not overflow

\- examples do not clip

\- horizontally resizable

\- Logo is approved instance

\- Primary Action uses Button instance

\- Secondary Action uses approved reusable component

\- no manual duplicate button styling



MOBILENAV

\- canonical variants fit documentation area

\- 390px components remain true size

\- Menu trigger uses IconButton instance

\- Logo is approved instance



FOOTER

\- root height contains MainContent + Divider + BottomRow

\- no 96px clipping bug

\- responsive width

\- Logo is approved instance

\- links reuse TextLink where appropriate



AUTHSHELL

\- no 1902px documentation overflow

\- FormContent does not have invalid 10px height

\- Desktop columns are structurally correct

\- BrandPanel behaves as full supporting column

\- Mobile remains separate responsive layout



AUTHBRANDPANEL

\- approved Logo remains instance

\- panel integrates properly into AuthShell

\- optional graphic uses approved Brand asset instance

\- no unsupported claims



GENERAL

\- no clipping

\- no overflowing examples

\- no parent smaller than children

\- no arbitrary scaling

\- no duplicated primitives

\- Levels 1–3 unchanged

\- no Product Screens created

\- no Sprint 2 components created

\- no other page modified



Finish ONLY this Level 4 structural repair.

