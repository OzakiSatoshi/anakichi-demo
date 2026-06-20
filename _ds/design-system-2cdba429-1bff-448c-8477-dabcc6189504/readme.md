# あなきち手帳 — Design System

A stationery design system for **あなきち手帳**, a Japanese ring-binder planner (手帳). It translates the physical artifacts of a paper planner — cream sheets, hairline rules, sepia ink, and color-coded sticky notes (フセン) — into a reusable digital visual language.

> **Thesis:** 静かな紙に、色で語る付箋。 *(On quiet paper, sticky notes that speak in color.)* The substrate is deliberately near-neutral; saturation belongs only to the フセン, so information floats to the front.

## Source
This system was authored from a single self-contained **living style guide** (a complete HTML specimen page) provided by the user, itself distilled from four photographs of the physical あなきち手帳. There is no external codebase or Figma file — the HTML spec is the source of truth, and its tokens, components, and copy are reproduced faithfully here.

---

## CONTENT FUNDAMENTALS

**Language.** Primary language is **Japanese**. Section eyebrows pair a number with an English word (`01 — Principles`, `02 — Color`); component names are bilingual, Japanese-first with a Latin gloss (`フセン / Sticky note`, `タイムレール / Time rail`). Within a bilingual heading the Japanese term leads and carries the meaning; the English is a quiet subtitle.

**Voice.** Calm, declarative, almost aphoristic — short principle statements, not marketing. Headings read like maxims: 「付箋が主役、紙は脇役」「色は意味、装飾ではない」「手書きの温度を残す」. Body copy explains the *why* behind the look in one or two measured sentences. No exclamation, no hype, no second-person sell. It addresses the *design*, not the reader — there is little "you/あなた"; the system speaks about its own intentions.

**Casing & punctuation.** English fragments are lower- or Title-case, never shouty caps (small uppercase eyebrows excepted, used for tiny labels with wide letter-spacing). Japanese uses full-width punctuation and parenthetical glosses 「（土）」. Quotation for emphasis uses 「" "」 around a single concept (the `"今"`). Middots `・` join paired categories (家族・パートナー, 趣味・娯楽).

**Emphasis.** Bold (`<strong>`) marks the load-bearing noun in a sentence — フセン, 分類, 帯 — not whole phrases. Emphasis is surgical.

**Emoji.** None. The brand never uses emoji. Warmth comes from the hand-written typeface and the paper texture, not pictographs.

**Vibe.** Analog, warm, unhurried, organized. Think a well-kept paper planner on a wooden desk — tidy but human, with notes at a slight tilt.

Representative copy: 「基層（紙・罫線・セピアのインク）は意図的に無彩色に近く抑える。彩度を持つのは付箋(フセン)だけ。」 · 「時間は帯で可視化される。」 · footer mark: 「静かな紙に、色で語る。」

---

## VISUAL FOUNDATIONS

**Color.** A strict two-layer model. The **substrate (基層)** is low-chroma: warm cream paper `#FAF7F1` (daily pages go whiter, `#F8F8F6`), beige zebra bands `#F2EBE0`, a pale-pink hour band `#F9EAEA`, hairline rules `#E5DACE`, and **sepia-brown ink** `#785850` / `#5E443C` / soft `#A28D83`. The **semantic フセン colors** are the *only* saturated values and each one means a category: **rose** `#E7B6CE` = 約束・商談, **sky** `#B7D7EF` = タスク・連絡, **leaf** `#B9D097` = 生活・健康, **peach** `#F8D0C0` = 強調・"今". Each has a `-deep` variant (rose-deep `#C77A9C`, sky-deep `#5E94C4`, leaf-deep `#7FA254`, peach-deep `#D98A6E`) reserved for borders, brackets, icons, and links. All four notes are high-value (V≈0.85–0.97), so sepia ink reads on every one — note text is *always* sepia, never white. The desk surface behind the paper is `#F0E9DE`.

**Type.** Two faces, two jobs. **Klee One** (a pen-written textbook hand, 400/600) is restricted to **headings, フセン, and dates** — anywhere warmth and the human hand belong. **Zen Kaku Gothic New** (400/500/700) is the calm body/UI sans for everything else. Body sits at 15px / line-height **1.7** for a paper-like read. Display tops out ~44px. The hand face is a seasoning, never the body.

**Spacing.** Rhythm derives from the planner's physical **8mm line spacing** → an **8px** base unit. The scale is 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64.

**Backgrounds & texture.** No photography, no gradients, no blur. The "texture" is structural: the **6-hole ring-binder margin** rendered as a repeating radial-gradient down the left of every paper panel, **zebra striping** on lists, and **pink hour bands** on the time rail. Surfaces are flat cream with a 1px hairline border and a 1px white inset highlight (the "sheen" of paper). Decoration is information, not ornament.

**Borders & rules.** Hairline. Rules are 1px, often **dashed**, in the low-chroma `--rule` color so they never compete with content. Heavier 1.5–2px sepia outlines are reserved for emphasis elements (pill headers, hatched event boxes, the header underline).

**Corner radii.** Pills 999px, panels 12px, sticky notes 5px, small chips 4px. Soft but not bubbly.

**Shadows.** Warm and low, tinted with the ink color: notes carry `0 2px 6px rgba(94,68,60,.16)` (raised to `0 6px 14px …,.2` on hover); panels float on `0 10px 30px rgba(94,68,60,.07)` plus a `0 1px 0 #fff inset` highlight. No hard or cool-gray shadows.

**Cards / panels.** A "card" is a sheet of paper: cream fill, 12px radius, 1px `--rule` border, the white inset highlight, the soft panel shadow, and the 6 binder holes down the left margin (which forces extra left padding).

**Animation.** Minimal and physical. The signature motion is a **sticky note straightening and lifting on hover** — `transform: rotate(0) translateY(-2px)` with the shadow growing, over `0.18s ease`. Notes rest at a slight tilt (~−0.6°). No bounces, no long fades, no looping decoration. `prefers-reduced-motion` disables transitions entirely.

**Hover / press.** Hover = lift + straighten + deepen shadow (notes). Links use the `-deep` semantic colors. There is no aggressive press state; the vocabulary is gentle.

**Focus.** `:focus-visible` → 2px `--peach-deep` outline, 2px offset, small radius. Visible and warm.

**Layout rules.** Centered single-column reading width (~1020px) on the desk surface. Time is shown as **bands**, not heavy grid lines. Lists get zebra striping for scannability. Vertical category tabs (writing-mode) sit on the left shoulder of list groups like binder index tabs. Everything is conceived as a **swappable module** — the 6-hole binder metaphor — so pages and UI blocks add and remove independently.

**Transparency / blur.** Essentially unused. The only transparency is in shadow tints, the white inset highlight, and the hatched-box's diagonal `rgba(120,88,80,.18)` stripes.

---

## ICONOGRAPHY

The brand is **near-iconless by design**. There is **no icon font, no SVG icon set, and no emoji**. Meaning is carried by **color** (the フセン categories) and by **structural marks** drawn in CSS, not by pictograms:

- **Sticky notes (フセン)** — colored chips *are* the iconography; the color is the symbol.
- **Sky-blue brackets** `「` on the time rail mark a fixed commitment (来客).
- **Diagonal hatching** inside a sepia outline marks a confirmed, continuous block (映画 →).
- **Arrows** are plain text glyphs (`→`), never drawn icons.
- **Pink hour bands & zebra stripes** stand in for any "highlight/emphasis" icon.

If a future surface genuinely needs UI glyphs (e.g. a settings gear), introduce a **thin-stroke, rounded line set** (Lucide is the closest CDN match in weight and warmth) in sepia ink — and flag it, because it is an *extension* of the system, not part of the original specimen. Prefer to solve with color and structure first.

> No raster logo or wordmark file was provided; the brand mark is simply the name **あなきち手帳** set in Klee One 600. If a logo asset exists, drop it into `assets/` and reference it here.

---

## INDEX

**Root**
- `styles.css` — the single entry consumers link (`@import` lines only).
- `tokens/` — `fonts.css` (Google Fonts: Klee One, Zen Kaku Gothic New), `colors.css`, `typography.css`, `spacing.css`.
- `readme.md` — this guide.
- `SKILL.md` — portable skill front-matter for Claude Code.

**Components** (`window.DesignSystem_2cdba4`)
- `components/notes/` — **Note** (フセン, the core primitive), **HatchEvent** (ハッチ枠).
- `components/paper/` — **RingPanel** (6穴パネル), **TimeRail** (タイムレール), **ZebraList** (ゼブラ行), **Pill** (ヘッダーピル), **CategoryTab** (カテゴリタブ).

**UI kit**
- `ui_kits/techo/` — interactive recreation of the planner: Daily spread + WISH list (`index.html`, `DailyPage.jsx`, `WishPage.jsx`).

**Foundation cards** (Design System tab) — under `guidelines/`: substrate & semantic color, hand/body/scale type, spacing scale, radius & shadow, brand thesis.

**Tokens not yet visualized:** the `-deep` semantic variants exist as tokens; use them for borders/links.
