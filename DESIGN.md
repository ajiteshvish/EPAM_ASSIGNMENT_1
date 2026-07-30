# Design System: Ledger/01 - AI Data-Table Generator
**Project ID:** ledger-01-brutalist-table

## 1. Visual Theme & Atmosphere
Neo-brutalist Swiss-grid aesthetic on warm off-white "paper" (`#f4f1ea`) with near-black "ink" (`#0a0a0a`) and single electric "acid" yellow accent (`#e8ff00`). Loud, structural, and unyielding. The grid IS the design. Every container is squared-off (`border-radius: 0`) with heavy black rules (3px / 4px) and zero-blur hard offset shadows (4px / 6px / 10px / layered 6px+12px).

## 2. Color Palette & Roles
- **Warm Paper (#f4f1ea):** Primary canvas background, giving a tactile engineering print feel.
- **Deep Ink (#0a0a0a):** Primary text color, heavy structural borders, inverted table headers, dark schema band background, and hard drop shadows.
- **Electric Acid (#e8ff00):** Single highlight accent reserved for headline callouts ("spine."), featured pricing plan, prompt chrome, active "Paid" status badges, marquee slashes, table summary total sum, and full-bleed CTA background.

## 3. Typography Rules
- **Display Face (Archivo):** Heavy grotesk (weights 400-900) for massive uppercase display headlines with ultra-tight tracking (-0.02em to -0.03em) and compressed leading (0.86-0.92).
- **Label & Data Face (JetBrains Mono):** Monospace font (400-800) for every label, button, badge, table cell, eyebrow, code snippet, and body line. Always uppercase with tracked-out spacing (0.1em - 0.2em).
- **Numeric Formatting:** All numbers, currency, and dates enforce `font-variant-numeric: tabular-nums` (`.tnum`) for decimal alignment down to the pixel.

## 4. Component Stylings
- **Buttons:** Hard-edged rectangular buttons (`border-[3px] border-ink bg-ink text-paper shadow-hard`), translating `-translate-y-0.5` or `-translate-y-1` on hover with color swap to `bg-acid text-ink`.
- **Status Badges:** Compact uppercase mono pills (`border-[2px] border-ink px-2 py-0.5 text-[11px] font-bold`) with state indicators:
  - `PAID`: Electric acid fill (`#e8ff00`) with solid ink dot (`#0a0a0a`).
  - `PENDING`: Off-white paper fill (`#f4f1ea`) with hollow ink ring dot.
  - `UNPAID`: Dark ink fill (`#0a0a0a`) with electric acid dot.
- **Table Container:** Audit-grade invoice ledger table (`border-[4px] border-ink bg-paper shadow-hard-lg`) featuring an inverted `bg-ink text-paper` header row, 3px ink cell dividers, tabular currency formatting, row-level acid hover state (`.cell-hover`), and a bold ink footer with acid total sum.
- **Prompt Block:** Dark schema snippet container (`border-[3px] border-acid bg-ink shadow-hard-acid`) with an electric acid chrome title bar ("prompt.txt") and leading acid `>` prompt marker.

## 5. Layout Principles
- **Grid Structure:** Hairline graph paper grid texture (`.grid-bg`, 28px x 28px tiled 1px 6% ink lines) on hero and pricing sections.
- **Rhythmic Contrast:** High-contrast alternating bands (off-white paper hero -> black marquee -> off-white table -> dark schema -> off-white pricing -> full-bleed acid CTA -> paper footer).
- **Border Hierarchy:** 4px black borders for section bottoms and major table boundaries; 3px black borders for cards, buttons, and stat cells; 2px black borders for badges.
