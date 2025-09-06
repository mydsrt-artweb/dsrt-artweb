# 🎨 DSRT — Digital Smart Revise Technology

[![CI](https://github.com/your-org/dsrt-app/actions/workflows/ci.yml/badge.svg)](./.github/workflows/ci.yml)
[![Deploy](https://github.com/your-org/dsrt-app/actions/workflows/deploy.yml/badge.svg)](./.github/workflows/deploy.yml)
[![Security](https://github.com/your-org/dsrt-app/actions/workflows/security.yml/badge.svg)](./.github/SECURITY.md)
[![License](https://img.shields.io/github/license/your-org/dsrt-app)](./legal/LICENSE.md)
[![Sponsors](https://img.shields.io/badge/sponsor-❤-ff69b4)](./.github/FUNDING.yml)

---

## 📌 Overview
**DSRT (Digital Smart Revise Technology)** is an **AI-powered creative editing platform**.  
It enables individuals and businesses to **edit, transform, and optimize media** — including **photos, videos, logos, and backgrounds** — directly in the browser.

🚀 Built with **Next.js 13+, Supabase, Replicate API, Tailwind, and Vercel**.

---

## ✨ Features
- 🖼️ **Photo Editor** — crop, resize, filters, AI enhancement  
- 🎬 **Video Editor** — lightweight trim, merge, transitions  
- 🎨 **Logo Creator** — generate and export professional logos  
- ✂️ **Background Removal** — one-click AI-powered remove-bg  
- 🔗 **Realtime Collaboration** — edit together in the same session  
- 💎 **Premium Plan** — HD exports, batch editing, pro filters  

---

## 🏛 Architecture
- **Frontend** → Next.js + Tailwind  
- **Backend** → Next.js API routes + Supabase (Postgres, Auth, Storage)  
- **AI Services** → Replicate API (image/video processing)  
- **Hosting** → Vercel (CI/CD integrated)  

📖 See [Architecture Guide](./docs/architecture.md)  

---

## 📖 Documentation
- [Installation Guide](./docs/install.md)  
- [Deployment Guide](./docs/deployment.md)  
- [API Reference](./docs/api.md)  
- [Style Guide](./docs/styleguide.md)  
- [Product Overview](./docs/product.md)  
- [Roadmap](./docs/roadmap.md)  
- [Changelog](./docs/changelog.md)  
- [FAQ](./docs/faq.md)  
- [Troubleshooting](./docs/troubleshooting.md)  

---

## 🚀 Quick Start
### 1. Clone & Install
```bash
git clone https://github.com/your-org/dsrt-app.git
cd dsrt-app
npm install

2. Environment Setup

Copy .env.example → .env.local and configure:

NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
REPLICATE_API_TOKEN=...

3. Run Development Server

npm run dev

Visit 👉 http://localhost:3000


---

🧪 Testing

Unit & integration tests → npm run test

Coverage report → npm run test -- --coverage

E2E tests (Playwright/Cypress) → npm run test:e2e


📖 See Testing Guide


---

💎 Premium Features

Upgrade to DSRT Premium to unlock:

HD exports

AI-powered auto-enhancement

Batch editing

Enterprise team support


📖 Details in Product Guide


---

🤝 Contributing

We welcome contributions! 🎉

Start with the Contributing Guide

Follow the Code of Conduct

Maintainers → see Maintainers List



---

🛡️ Security

Found a vulnerability? Please follow our Security Policy.

General security overview → Security Docs.



---

⚖️ Legal

Terms of Service

Privacy Policy

Disclaimer

License



---

💰 Sponsors

Support DSRT development:

GitHub Sponsors

Patreon

OpenCollective



---

📣 Community

Discussions → Q&A, ideas, proposals

Issues → bug reports & feature requests

Roadmap → upcoming milestones



---

🏆 Credits

Maintained by the DSRT Core Team.
See Governance for details.


---

📜 License

Distributed under the MIT License.
