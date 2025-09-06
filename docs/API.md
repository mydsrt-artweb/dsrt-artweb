# API Documentation — DSRT App

Base URL:

/api

## Endpoints

### 1. Health Check

GET /api/health

Response:
```json
{ "status": "ok", "uptime": 12345 }

2. Background Removal (planned)

POST /api/remove-bg

Request:

{ "imageUrl": "https://example.com/photo.jpg" }

Response:

{ "success": true, "resultUrl": "https://cdn.dsrt.io/output/photo-nobg.png" }

3. Photo Optimization (planned)

POST /api/photo/optimize

4. Video Editing (planned)

POST /api/video/edit

5. Logo Export (planned)

POST /api/logo/export

---

## 📄 `docs/STYLEGUIDE.md`
```md
# Style Guide — DSRT App

## Languages
- **Code**: TypeScript
- **Docs**: English (Bahasa Indonesia optional)

## Formatting
- Prettier (2 spaces indentation)
- ESLint for linting

## Naming Conventions
- Components → `PascalCase`
- Hooks → `useCamelCase`
- Functions & vars → `camelCase`
- Constants → `UPPER_SNAKE_CASE`
- Files → `kebab-case`

## Git Commit
Follow **Conventional Commits**:
- `feat:` new feature (e.g., `feat: add remove-bg API`)
- `fix:` bug fix
- `docs:` documentation update
- `style:` formatting/style only
- `refactor:` code change without new features
- `test:` add or update tests
- `chore:` tooling/config updates

## Pull Requests
- Keep small and focused
- Update docs/tests when needed
- Reference issues (e.g., `Closes #7`)
