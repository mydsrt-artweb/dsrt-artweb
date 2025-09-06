# DSRT App — API Documentation

---

## Base URL

/api

---

## Endpoints

### 1. Health Check
`GET /api/health`

Response:
```json
{ "status": "ok", "uptime": 12345 }


---

2. Background Removal (Planned)

POST /api/remove-bg

Request:

{ "imageUrl": "https://example.com/photo.jpg" }

Response:

{ "success": true, "resultUrl": "https://cdn.dsrt.io/output/photo-nobg.png" }


---

3. Photo Optimization (Planned)

POST /api/photo/optimize

Request:

{ "imageUrl": "https://example.com/photo.jpg" }

Response:

{ "success": true, "optimizedUrl": "https://cdn.dsrt.io/output/photo-optimized.jpg" }


---

4. Video Editing (Planned)

POST /api/video/process

Request:

{
  "videoUrl": "https://example.com/video.mp4",
  "operation": "stabilize"
}

Response:

{ "success": true, "jobId": "abc123" }


---

5. Logo Export (Planned)

POST /api/logo/export

Request:

{
  "logoId": "xyz789",
  "format": "svg"
}

Response:

{ "success": true, "downloadUrl": "https://cdn.dsrt.io/logo.svg" }

---

## 📄 `docs/STYLEGUIDE.md`
```md
# DSRT App — Style Guide

---

## Code Standards
- **Language**: TypeScript
- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Formatting**: Prettier (2 spaces)
- **Linting**: ESLint

---

## Naming Conventions
- Components → `PascalCase` (`HeroSection.tsx`)
- Hooks → `useCamelCase` (`useBackgroundRemover.ts`)
- Variables → `camelCase`
- Constants → `UPPER_SNAKE_CASE`
- Files → `kebab-case
