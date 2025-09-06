# 🎨 DSRT Code & Design Style Guide

This guide defines the coding and UI/UX conventions for the **DSRT (Digital Smart Revise Technology)** project.

---

## 🖋️ Code Style

### Language & Syntax
- Use **TypeScript** for all new code.
- Prefer `const` over `let` unless reassignment is required.
- Use `async/await` instead of `.then()`.
- Follow ES2023+ features where possible.

### Naming Conventions
- **Components**: `PascalCase` (e.g., `Header.tsx`, `UserCard.tsx`)
- **Hooks**: `camelCase` prefixed with `use` (e.g., `useAuth.ts`)
- **Context**: `PascalCase` + `Context` suffix (e.g., `AuthContext.tsx`)
- **Types/Interfaces**: `PascalCase` (e.g., `User`, `EditorConfig`)
- **Files/Modules**: `kebab-case` (e.g., `sanitize-input.ts`)

### Imports
- Group imports:
  1. External libraries
  2. Internal modules (lib, context, hooks)
  3. Styles
- Use **absolute imports** with `@/` alias instead of relative (`../../`).

---

## 🎨 UI / Styling

### TailwindCSS
- Use **utility-first** classes for layout and spacing.
- Abstract into **components** if styles repeat more than twice.
- Use `@apply` in `*.css` files for consistent patterns (e.g., buttons).

### Colors
- Use **CSS variables** defined in `globals.css`.
- Never hardcode hex values inside components.

### Responsive Design
- Follow **mobile-first** approach.
- Always test breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`.

---

## 📐 Layout Conventions
- Use **Flexbox** for 1D layouts.
- Use **CSS Grid** for dashboards or complex layouts.
- Maintain **max-width containers** (`max-w-7xl`) for readability.

---

## 🧪 Testing
- Use **Jest + React Testing Library**.
- Test file naming: `Component.test.tsx`.
- Follow AAA pattern: **Arrange, Act, Assert**.
- Always test:
  - Rendering without errors
  - Key props/variants
  - Accessibility (`aria-*` attributes)

---

## ♿ Accessibility
- Use semantic HTML (`<header>`, `<main>`, `<footer>`).
- Add `aria-label`, `aria-labelledby`, or `aria-hidden` where needed.
- Ensure **color contrast ratio** WCAG 2.1 AA compliant.
- All interactive elements must be keyboard accessible.

---

## 📝 Git & Commit Messages
Follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` → New feature
- `fix:` → Bug fix
- `docs:` → Documentation changes
- `style:` → Code style (no logic changes)
- `refactor:` → Code refactoring
- `test:` → Adding/updating tests
- `chore:` → Maintenance, tooling, dependencies

Examples:
- `feat(editor): add crop & resize tools`
- `fix(auth): handle token refresh correctly`

---

✅ By following this guide, DSRT codebase remains **clean, scalable, and consistent** across the team.
