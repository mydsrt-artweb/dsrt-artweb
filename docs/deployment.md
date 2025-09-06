# 🚀 Deployment Guide

## 1. Prerequisites
- Node.js 20+
- pnpm or npm
- Vercel CLI installed (`npm i -g vercel`)

## 2. Environment Variables
Copy `.env.example` to `.env.local` and configure:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `REPLICATE_API_TOKEN`
- `VERCEL_PROJECT_ID`, `VERCEL_ORG_ID`

## 3. Local Development
```bash
npm install
npm run dev

4. Deployment to Vercel

vercel --prod


---

For advanced setups (Docker, self-hosting), extend this doc.

---

## 🔹 `docs/contributing.md`
```markdown
# 🤝 Contributing Guide

Thank you for considering contributing to **DSRT**!

## 🛠️ Development Setup
1. Fork the repo
2. Clone locally
3. Install dependencies
   ```bash
   npm install
   npm run dev

🧪 Testing

npm run test

📋 Pull Requests

Use a clear branch name (feature/..., fix/...)

Ensure CI (✅ Lint + Tests + Build) passes

Fill the PR Template


💡 Issues

Use 🐞 Bug Report

Use ✨ Feature Request


---

## 🔹 `docs/disclaimer.md`
```markdown
# ⚠️ Developer Disclaimer

This project is under **active development**.  
Features, APIs, and architecture **may change without notice**.

## 🚧 Current Limitations
- AI features may produce inconsistent results
- Premium features are still experimental
- Documentation may lag behind implementation

## 🔄 Roadmap
For upcoming milestones, see [Discussions](https://github.com/your-org/dsrt-app/discussions).

---
For legal disclaimers, see [LEGAL DISCLAIMER](../legal/DISCLAIMER.md).
