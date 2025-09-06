# Architecture — DSRT App

## Overview
DSRT is a **Next.js 14 (App Router)** project focused on **digital editing tools**:
- Photo editing
- Video editing
- Logo design
- Automatic background removal (AI)

## Frontend
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Components**: Modular (Header, Hero, Features, Footer, RainBackground)
- **Accessibility**: Semantic HTML + aria-labels

## Backend
- **Next.js API Routes** (`app/api/`)
- Planned AI endpoints (remove-bg, video processing)
- Future DB integration for user uploads & projects

## File Structure (highlight)

dsrt-app/ ├── app/               # Next.js App Router │   ├── page.tsx       # Landing page (Foto, Video, Logo, Remove BG) │   └── api/           # Planned API routes ├── src/components/    # UI (Hero, Features, Rain, Footer) ├── docs/              # Documentation ├── legal/             # Terms, Privacy, Disclaimer └── .github/           # CI/CD workflows
