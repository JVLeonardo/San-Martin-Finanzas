# Brand asset technical audit

**Date:** 2026-08-29  
**Scope:** closure and human approval of functional primary-identity variants, reproducible raster derivatives, manifest refresh, and visual/technical QA. No master, graphic-system asset, Figma file, frontend code, or approved geometry was modified.

## Detected masters

Seven approved PNG RGBA masters were detected. Every file already uses its canonical name, so no master was renamed or moved. All files open correctly and have no embedded ICC profile; the sources were preserved byte for byte and are interpreted as standard web sRGB.

The effective bounding box uses `alpha >= 8` to ignore nearly transparent residual pixels.

| File | Validated role | Dimensions | Size | Alpha | Effective bounding box | Effective L/T/R/B padding | Result |
|---|---|---:|---:|---|---|---|---|
| `smf-logo-master.png` | Primary logo with tagline | 1122×1402 | 834,744 B | Yes | 59,106–1073,1247 | 59/106/49/155 | Valid. |
| `smf-logo-vertical.png` | Vertical logo without tagline and approved compact/mobile source | 1122×1402 | 867,293 B | Yes | 53,123–1070,1219 | 53/123/52/183 | Valid; its composition exactly matches the approved compact/mobile reference. |
| `smf-logo-horizontal.png` | Horizontal logo lockup | 2172×724 | 616,761 B | Yes | 53,36–2130,634 | 53/36/42/90 | Valid. |
| `smf-isotype-master.png` | Eagle and territory isotype | 1491×1055 | 971,947 B | Yes | 149,17–1343,1039 | 149/17/148/16 | Valid. |
| `smf-symbol-master.png` | Reduced eagle-head symbol | 1254×1254 | 651,124 B | Yes | 108,193–1173,1016 | 108/193/81/238 | Valid square source. |
| `smf-app-icon-master.png` | App/PWA icon | 1536×1536 | 82,478 B | Yes | 0,0–1536,1536 | 0/0/0/0 | Valid approved square source; transparent rounded corners are preserved. |
| `smf-favicon-master.png` | Dedicated browser favicon | 1536×1536 | 77,645 B | Yes | 0,0–1536,1536 | 0/0/0/0 | Valid approved square source optimized for the reduced mark. |

## Generated derivatives

- Logos: 7 PNG files.
- Compact/mobile logo: 2 PNG files at 145 and 120 px wide, sourced directly from the approved vertical-without-tagline master.
- Horizontal negative: one official canonical PNG plus 1600, 1200, 800, and 600 px derivatives.
- Compact negative: one official canonical PNG plus 145 and 120 px derivatives.
- Monochrome dark: one official canonical PNG plus 1024, 512, and 256 px derivatives.
- Monochrome light/white: one official canonical PNG plus 1024, 512, and 256 px derivatives.
- Isotype: 6 PNG files.
- Reduced symbol: 7 PNG files.
- App/PWA icon: 5 PNG files at 512, 192, 128, 64, and 48 px.
- Favicon: 3 PNG files at 48, 32, and 16 px, plus one ICO containing those three PNG frames.

Total: **47 official assets** — 46 PNG files and one ICO. Each resized PNG keeps the source aspect ratio and uses high-quality bicubic downsampling. The four new canonical variants preserve their source canvas and alpha exactly and apply only the human-approved flat color. The 31 previous official outputs were retained without byte or timestamp changes.

## Omitted derivatives

- Primary logo at 2400, 1600, and 1200 px: omitted because the master is 1122 px wide.
- Vertical logo at 1600 and 1200 px: omitted because the master is 1122 px wide.
- Monochrome dark at 128 and 64 px: omitted because the source lockup includes the tagline and falls below its approved 240 px minimum.
- Monochrome light/white at 128 and 64 px: omitted for the same tagline-legibility limit.

Total: **9 intentional omissions**. Five prevent artificial upscale; four enforce the approved tagline minimum.

## Official variant status

| Variant | Status | Official source and result |
|---|---|---|
| Compact/mobile | `GENERATED` | `smf-logo-vertical.png`; exact approved lockup, resized proportionally to 145 and 120 px wide. |
| Horizontal negative | `GENERATED` | Human-approved White recolor of `smf-logo-horizontal.png`; official canonical file and four proportional derivatives. |
| Compact negative | `GENERATED` | Human-approved White recolor of `smf-logo-vertical.png`; official canonical file and two proportional derivatives. |
| Monochrome dark | `GENERATED` | Human-approved Forest 900 recolor of `smf-logo-master.png`; official canonical file and three proportional derivatives. |
| Monochrome light/white | `GENERATED` | Human-approved White recolor of `smf-logo-master.png`; official canonical file and three proportional derivatives. |
| Other primary-identity gap | `NOT_APPLICABLE` | No other functional gap was found. Oversized exports omitted in Phase 1 are not identity debt. |

The four flat-color results were explicitly approved by human decision on 2026-08-29. Their earlier provisional evaluation is retained as historical lineage only; their current state is official for this project.

## Visual and technical QA

- All seven master hashes remain unchanged after generation.
- All 46 PNG assets open correctly, retain alpha, match manifest dimensions, and preserve source proportions.
- The four official flat-color canonical assets are byte-identical to the visually reviewed results and contain exactly the approved White or Forest 900 RGB value for every non-transparent pixel.
- Their 12 resized derivatives retain alpha, aspect ratio, naming consistency, and legibility at the accepted sizes.
- Visual QA rejected the four 128/64 px monochrome requests because the tagline was not legible; those outputs were removed and recorded as intentional omissions.
- The compact/mobile derivatives retain the approved geometry, spacing, alpha, and complete composition at both normative widths; no crop or element removal was required.
- The App/PWA composition remains complete and undistorted at all requested sizes; the 48 px result remains recognizable.
- The dedicated favicon remains recognizable at 48, 32, and 16 px without cropping, recoloring, padding changes, or visual reinterpretation.
- `favicon.ico` is a valid ICO container with three PNG frames at 48, 32, and 16 px.
- Re-running the generator produces identical derivative and JSON hashes, and does not rewrite unchanged Phase 1 assets.
- The existing 64 px isotype and 32 px reduced symbol remain documented minimums because their fine internal detail is naturally reduced.
- No SVG, tracing, AI generation, recomposition, regional graphics, photography, Figma component, or frontend integration was created.

The complete machine-readable inventory, lineage, transformations, dimensions, hashes, omissions, and blockers is available in `generated-assets.json` and `../asset-manifest.json`.

## Phase 2 — regional graphic system

**Scope:** approved route, topography, and horizon raster masters only. No logo, isotype, reduced symbol, app icon, favicon, photo, Figma file, frontend code, vector asset, or AI-generated asset was changed.

| Family | Approved master | Dimensions | SHA-256 | Result |
|---|---|---:|---|---|
| Route | `graphics/route/smf-route-master.png` | 2172×724 | `2365686E0CF4F42AB88FA186D8DD2D2BA4B0504D7280E1EAC7FE5C9D787D0F9A` | Valid transparent primary route. |
| Topography | `graphics/topography/smf-topography-master..png` | 1536×1024 | `9D6781DEDE879043D603546B4C0FC354F3B8FFBEEE74F14C55477F2D63186BAD` | Valid transparent contour pattern; the approved double-dot filename is preserved. |
| Horizon | `graphics/horizon/smf-horizon-master.png` | 1896×829 | `766FC71B4EDB76B5C30289FE5BC6DD512E156BBC0021F93218E29ED9FCD667DA` | Valid transparent multicolor layered horizon. |

The dedicated `generate-brand-graphics.ps1` generator creates 21 PNG derivatives and matching 21 lossless WebP derivatives. Its fixed crops, 90-degree route rotation, and flat recolors preserve approved geometry and alpha. It rejects every target that would upscale its crop, validates Pillow WebP support before execution, records hashes and dimensions in the shared manifest/report, and fails if a graphics master changes during generation. Re-running it preserves byte-identical files.

| Family | Generated coverage | Limitation |
|---|---|---|
| Route | Forest 900, Forest 700, and White primary sizes; Forest 900 vertical; Forest 900 fragment; Earth Gold microaccent | A longer route is `BLOCKED`: continuation geometry cannot be invented. A full gold route is `NOT_APPLICABLE`; gold remains a microaccent. |
| Topography | Forest 700 and Forest 900 light-surface variants; White dark-surface variant; desktop, mobile, and fragment crops | A seamless/extended pattern is `BLOCKED`: it would invent contour geometry. Presentation opacity stays a Figma/CSS concern. |
| Horizon | Full light desktop, hero, CTA, auth, footer, and mobile crops retaining the approved multicolor palette | A dark variant is `BLOCKED`: flat recolor would collapse the approved terrain layers and road. |

### Phase 2 verification

- All three graphics masters retained their SHA-256 hashes through generation.
- All 42 outputs are valid PNG or lossless WebP files with recorded dimensions, alpha preservation, and no artificial upscale.
- Flat-color route/topography derivatives contain only their documented non-transparent RGB color; horizon derivatives retain the original approved multicolor palette.
- The identity asset inventory remains 47 official assets; this Phase 2 output is held in separate graphics directories and manifest sections.
- No SVG/vector files, manual redraws, or generative-AI transformations were created.
