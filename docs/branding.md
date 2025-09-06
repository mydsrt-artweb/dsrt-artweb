# 🎨 DSRT Branding Guidelines

This document defines the **visual identity** of DSRT (Digital Smart Revise Technology).  
Consistent branding ensures a professional and trustworthy experience across all platforms.

---

## 🖼️ Logo Usage
- Use the official `logo.png` from `/public/logo.png`.
- Do **not** alter proportions, distort, or recolor the logo.
- Maintain **minimum clear space** around the logo equal to the height of the "D".
- Avoid placing the logo on backgrounds with poor contrast.

### ✅ Correct Usage
- Colored logo on light or dark backgrounds.
- Monochrome logo (white/black) for special cases.

### ❌ Incorrect Usage
- No stretching, rotating, or skewing.
- No adding shadows, outlines, or filters.

---

## 🎨 Color Palette

| Color       | Usage               | HEX     | Tailwind Token |
|-------------|---------------------|---------|----------------|
| Accent      | Highlights, buttons | `#00FFD5` | `accent` |
| Background  | App background      | `#0F2027` → `#2C5364` | `bg-gradient` |
| Card        | Containers, panels  | `#0D2A30` | `card` |
| Muted Text  | Secondary text      | `#CDE9E9` | `muted` |

> Colors are defined in `src/styles/globals.css` as CSS variables.

---

## 🔤 Typography
- **Primary Font:** [Inter](https://rsms.me/inter/) (default system UI fallback)  
- **Font Weights:**
  - `400` → Body text
  - `600` → Subheadings
  - `700` → Headings

---

## 📐 Iconography
- Use **Lucide Icons** (`lucide-react`) for a clean, modern style.
- Keep icon size consistent (`20px–24px`) for UI.
- Use emojis only in **documentation, GitHub templates, and marketing copy**.

---

## 📣 Voice & Tone
- **Professional but approachable**.
- Avoid jargon when possible.
- Use **action-driven CTAs** (e.g., "Start Editing", "Go to Dashboard").

---

## 📱 Social Media Guidelines
- Avatar: Use **logomark only** (no text) for square formats.
- Banners: Use gradient background with centered logo & tagline.

---

✅ Following these branding guidelines ensures **DSRT looks consistent** across code, UI, docs, and marketing materials.
