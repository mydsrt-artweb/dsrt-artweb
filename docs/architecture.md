# DSRT App — System Architecture

---

## Overview
DSRT (Digital Smart Revise Technology) is built to deliver **AI-powered editing tools**:
- **Photo Optimization**
- **Video Editing**
- **Logo Design**
- **Background Removal**

---

## Frontend
- **Framework**: Next.js 14 (App Router)
- **UI Layer**: Tailwind CSS + custom animations
- **State Management**: React Context / Hooks
- **Components**:
  - Header
  - Hero
  - Features
  - Footer
  - RainBackground

---

## Backend
- **API Routes**: Served via Next.js API (`app/api/`)
- **Planned AI Services**:
  - `remove-bg`: background remover
  - `photo/optimize`: image compression & color enhance
  - `video/process`: trimming, stabilization
  - `logo/export`: vector conversion
- **Authentication**: To be added (JWT / OAuth2)

---

## Infrastructure
- **CI/CD**: GitHub Actions
  - `ci.yml` → build, lint, test
  - `deploy.yml` → Vercel auto-deploy
- **Hosting**: Vercel (primary), GitHub Pages (static export option)
- **Database**: Planned (Supabase / PostgreSQL for user data & projects)

---

## File Structure (Key)

dsrt-app/ ├── app/ │   ├── page.tsx         # Landing page │   ├── layout.tsx       # Root layout │   └── api/             # API routes (planned) ├── src/components/      # UI components ├── public/              # Static assets ├── docs/                # Documentation ├── legal/               # Terms, Privacy, Disclaimer └── .github/             # CI/CD workflows
