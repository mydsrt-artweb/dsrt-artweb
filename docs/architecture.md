# 🏛️ Architecture Overview

The **DSRT Platform (Digital Smart Revise Technology)** is built using modern web technologies:

## 🔧 Core Stack
- **Next.js 13+ (App Router)** → Frontend + Server-side Rendering
- **Supabase** → Authentication, Database, Realtime
- **Replicate API** → AI-powered image/video processing
- **TailwindCSS** → Styling system
- **Vercel** → Hosting & CI/CD

## 🗂️ Project Structure
- `src/app/` → App Router pages & API routes
- `src/components/` → Reusable UI components
- `src/lib/` → API clients, utilities
- `src/context/` → React contexts (Auth, Editor, Socket)
- `src/types/` → Shared TypeScript types

## 🔌 Integrations
- **Auth** → Supabase Auth
- **Realtime Collaboration** → WebSocket via Supabase/Socket.io
- **Media Editing** → AI features (crop, resize, filter, remove background)

---
📖 See also: [API Reference](./api.md)
