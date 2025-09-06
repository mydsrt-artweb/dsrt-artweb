### **docs/STYLEGUIDE.md**
```markdown
# Style Guide

## Code Style
- Use **TypeScript strict mode**
- Follow ESLint + Prettier rules
- Maximum line length: 100 characters

## Naming Conventions
- Components: `PascalCase`
- Variables & functions: `camelCase`
- Constants: `UPPER_CASE`
- Files: `kebab-case.tsx`

## Git
- Branch naming: `feature/*`, `fix/*`, `chore/*`
- Use Conventional Commits

## Example
```tsx
// ✅ Good
const UserProfileCard = () => {
  return <div className="rounded-xl shadow-lg">Profile</div>;
};
