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
