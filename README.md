# 🎨 DSRT — Digital Smart Revise Technology

[![CI](https://github.com/mydsrt-artweb/dsrt-artweb/actions/workflows/ci.yml/badge.svg)](https://github.com/mydsrt-artweb/dsrt-artweb/actions/workflows/ci.yml)
[![Deploy](https://github.com/mydsrt-artweb/dsrt-artweb/actions/workflows/deploy.yml/badge.svg)](https://github.com/mydsrt-artweb/dsrt-artweb/actions/workflows/deploy.yml)
[![Lint](https://github.com/mydsrt-artweb/dsrt-artweb/actions/workflows/lint.yml/badge.svg)](https://github.com/mydsrt-artweb/dsrt-artweb/actions/workflows/lint.yml)
[![Tests](https://github.com/mydsrt-artweb/dsrt-artweb/actions/workflows/test.yml/badge.svg)](https://github.com/mydsrt-artweb/dsrt-artweb/actions/workflows/test.yml)
[![Format](https://github.com/mydsrt-artweb/dsrt-artweb/actions/workflows/format.yml/badge.svg)](https://github.com/mydsrt-artweb/dsrt-artweb/actions/workflows/format.yml)
[![Coverage](https://codecov.io/gh/mydsrt-artweb/dsrt-artweb/branch/main/graph/badge.svg)](https://codecov.io/gh/mydsrt-artweb/dsrt-artweb)
[![Dependencies](https://github.com/mydsrt-artweb/dsrt-artweb/actions/workflows/deps.yml/badge.svg)](https://github.com/mydsrt-artweb/dsrt-artweb/actions/workflows/deps.yml)
[![Release](https://img.shields.io/github/v/release/mydsrt-artweb/dsrt-artweb?logo=github)](https://github.com/mydsrt-artweb/dsrt-artweb/releases)
[![License](https://img.shields.io/github/license/mydsrt-artweb/dsrt-artweb)](./LICENSE)
[![Code Style](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)
[![CodeQL](https://github.com/mydsrt-artweb/dsrt-artweb/actions/workflows/codeql.yml/badge.svg)](https://github.com/mydsrt-artweb/dsrt-artweb/actions/workflows/codeql.yml)
[![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=dsrt-artweb)](https://dsrt-artweb.vercel.app)

---

## 📌 Overview

**DSRT (Digital Smart Revise Technology)** is a modern AI-powered creative editor built with **Next.js 15, React 18, TailwindCSS, Supabase, and Replicate AI**.  
It provides tools for **photo, video, logo, and background editing**, with real-time collaboration and premium features.

---

## 🚀 Features

- ✨ AI-powered photo & video editor  
- 🖼️ Background remover and enhancer  
- 🎨 Logo design and vector tools  
- 🔒 Secure authentication with Supabase  
- ⚡ Real-time collaboration (Socket.io)  
- 🌐 Deployed on Vercel  

---

## 📂 Project Structure

```bash
dsrt-artweb/
│
├── public/                  # static assets
│   ├── logo.png
│   ├── icons/
│   └── backgrounds/
│
├── src/
│   ├── pages/               # Next.js pages
│   ├── components/          # UI components
│   ├── styles/              # CSS/Tailwind styles
│   ├── hooks/               # Custom React hooks
│   ├── context/             # React context providers
│   ├── services/            # Supabase, Replicate, API clients
│   ├── utils/               # Helpers & validators
│   └── types/               # TypeScript types
│
├── docs/                    # Documentation
├── .github/                 # Workflows & issue templates
├── package.json
├── tsconfig.json
├── vercel.json
└── README.md


---

🛠️ Installation

# clone repo
git clone https://github.com/mydsrt-artweb/dsrt-artweb.git
cd dsrt-artweb

# install deps
npm install

# run dev server
npm run dev


---

⚙️ Environment Variables

Create .env.local:

NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
REPLICATE_API_TOKEN=your-replicate-token


---

✅ Contributing

We use Conventional Commits and Pull Request templates.
Run lint and tests before pushing:

npm run lint
npm run test


---

📜 License

This project is licensed under the MIT License.
See LICENSE for details.

---

⚡ Jadi sekarang README kamu udah super profesional:  
- Semua badge aktif → CI, Deploy, Lint, Test, Format, Coverage, Dependencies, Release, License, Code Style, CodeQL, Vercel.  
- Dokumentasi lengkap → Features, Project Structure, Setup, Env, Contributing, License.  
