# DSRT App — Installation Guide

This guide explains how to set up the DSRT application locally and prepare it for deployment.

---

## 1. Prerequisites
Ensure you have installed:
- **Node.js** v20 or later
- **npm** (comes with Node.js) or alternative: Yarn / pnpm
- **Git**

---

## 2. Getting Started

### Clone Repository
```bash
git clone https://github.com/mydsrt-artweb/dsrt-app.git
cd dsrt-app

Install Dependencies

npm install

Development Server

npm run dev

Access at: http://localhost:3000

Production Build

npm run build
npm start


---

3. Environment Variables

Create .env.local in the root directory:

NEXT_PUBLIC_API_URL=https://api.dsrt.io

(Adjust once backend API endpoints are live.)


---

4. Deployment

Vercel (Recommended)

Push to GitHub

Connect repository to Vercel

Deploy automatically from main branch


GitHub Pages

npm run export

Generated static files are located in /out/.

---

## 📄 `docs/ROADMAP.md`
```md
# DSRT App — Roadmap

This document outlines completed milestones and upcoming goals.

---

## ✅ Completed
- Landing page with rain animation
- Core features highlighted: Photo, Video, Logo, Remove BG
- CTA link to Dashboard
- Documentation (docs/, legal/, security)

---

## 🚧 In Progress
- Dashboard UI with project management
- Basic API routes for image optimization
- Integration of AI-powered background remover

---

## 🎯 Planned (Q4 2025)
- Video editing pipeline (trim, merge, stabilize)
- Logo design & vector export tools
- Real-time background removal with queue system
- Mobile-first PWA
- Subscription model (Freemium + Premium tiers)

---

## 🌍 Long-Term Vision
DSRT will evolve into an **AI-driven digital transformation platform**, empowering users to:
- Seamlessly edit visual content
- Automate background removal
- Generate professional logos
- Manage projects from web and mobile
