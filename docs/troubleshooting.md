# 🛠️ DSRT Troubleshooting Guide

This guide lists common issues and their solutions when working with **DSRT (Digital Smart Revise Technology)**.

---

## ⚙️ Installation & Setup

### ❌ `npm install` fails
- Ensure **Node.js v20+** is installed.
- Delete `node_modules/` and reinstall:
  ```bash
  rm -rf node_modules package-lock.json
  npm install

If using pnpm, run:

pnpm install --force



---

❌ Environment variables not loading

Ensure .env.local exists in the root directory.

Verify .env.local keys match .env.example.

Restart the dev server after updating .env.local.



---

💻 Development Server

❌ npm run dev shows Module not found

Check if you used absolute imports (@/).

Ensure tsconfig.json has:

"compilerOptions": {
  "baseUrl": "src"
}



---

❌ Supabase authentication not working

Verify NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.

Check Supabase project settings → API → keys.

Ensure Row Level Security (RLS) policies are configured.



---

🎨 Editor Issues

❌ Background removal not working

Ensure REPLICATE_API_TOKEN is set.

Check Replicate status.

Logs may show: 401 Unauthorized → token invalid.



---

❌ Image upload fails

Max file size: 10MB (free) / 100MB (premium).

Supported formats: .jpg, .png, .webp.

Check Supabase storage permissions.



---

🚀 Deployment

❌ Build fails on Vercel

Ensure all required environment variables are set in Vercel Dashboard → Project Settings → Environment Variables.

Clear build cache:

vercel build --force

If using private npm packages, add NPM_TOKEN in Vercel.



---

❌ Premium features not working in production

Verify Stripe API keys are set in Vercel.

Ensure webhook URL is configured correctly:

https://your-domain.com/api/stripe/webhook



---

🔑 General Debugging Tips

Run with logs:

npm run dev -- --verbose

Check browser DevTools → Console & Network tab.

Check server logs in Vercel Dashboard → Functions.

If all else fails, open an Info Issue or Question Issue.



---

✅ This guide will be updated as new common issues arise.
