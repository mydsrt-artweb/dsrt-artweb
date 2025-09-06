# 🛠️ Installation Guide

This guide explains how to set up **DSRT (Digital Smart Revise Technology)** locally for development.

---

## 1. 📦 Requirements
- Node.js **20+**
- pnpm (**recommended**) or npm
- Git
- Vercel CLI (optional, for deployments)

---

## 2. 🔄 Clone the Repository
```bash
git clone https://github.com/your-org/dsrt-app.git
cd dsrt-app


---

3. 📥 Install Dependencies

Using pnpm:

pnpm install

Or using npm:

npm install


---

4. ⚙️ Environment Variables

Copy .env.example into .env.local and configure:

cp config/env.example .env.local

Fill in the following:

NEXT_PUBLIC_SUPABASE_URL

NEXT_PUBLIC_SUPABASE_ANON_KEY

REPLICATE_API_TOKEN

NEXT_PUBLIC_API_URL



---

5. 🚀 Run Development Server

npm run dev

Now visit 👉 http://localhost:3000


---

6. 🧪 Run Tests

npm run test


---

7. 📦 Build for Production

npm run build
npm run start


---

✅ You’re all set! For deployment instructions, see Deployment Guide.

---

⚡ With `install.md`, your repo now has a **clean installation guide**, while `deployment.md` focuses only on **production setup**.  
