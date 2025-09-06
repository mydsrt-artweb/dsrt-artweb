# 📜 Changelog

All notable changes to **DSRT (Digital Smart Revise Technology)** will be documented in this file.  
This project follows [Semantic Versioning](https://semver.org/).

---

## [1.0.0] - 2024-09-06
### 🚀 Initial Release
- 🎨 **Photo Editor**: crop, resize, filters, enhance, remove background  
- 🎬 **Video Editor**: trim, merge, transitions  
- 🎨 **Logo Generator**: AI-powered logo creator  
- ✂️ **Background Removal**: AI-powered remove-bg  
- 🔗 **Realtime Collaboration**: multi-user editing sessions  
- 💎 **Premium Features**: HD exports, batch editing, pro filters  

### 🏗️ Project Setup
- Migrated project structure to **Next.js 13 App Router**  
- Added **TailwindCSS**, **Framer Motion**, **Lucide Icons**, **Recharts**  
- Integrated **Supabase** (Auth, DB, Storage)  
- Integrated **Replicate API** (AI image/video processing)  
- Added **Stripe** integration for Premium  

### ⚙️ CI/CD & Workflows
- ✅ `ci.yml`: Build & test pipeline  
- ✅ `test.yml`: Jest (unit) + Playwright (e2e) tests  
- ✅ `lint.yml`: ESLint & Prettier check  
- ✅ `deploy.yml`: Auto-deploy to Vercel  
- ✅ `security.yml`: CodeQL vulnerability scan  
- ✅ `release.yml`: Auto GitHub Release with changelog  

### 📖 Documentation
- Added `README.md` (badges, setup, docs, legal, sponsors)  
- Added `docs/` (install, styleguide, contributing, roadmap, troubleshooting, etc.)  
- Added `legal/` (MIT License, Terms, Privacy, Disclaimer)  

---

## [Unreleased]
- 🧪 Add visual regression tests  
- 🔐 Expand security policies (CSP, rate limiting)  
- 📦 Docker support for self-hosted deployments
