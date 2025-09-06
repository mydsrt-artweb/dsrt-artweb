# 🏗️ Architecture

DSRT is built with:
- **Next.js 13 (App Router)** for frontend
- **Supabase** for auth, database, and storage
- **Replicate API** for AI models (image/video editing)
- **Stripe** for premium features
- **Vercel** for hosting & CI/CD
- **Zustand + Context** for state management
- **Jest + Playwright** for testing

### Flow
1. User logs in via Supabase Auth
2. Editor loads (photo, video, logo)
3. Features executed either client-side (crop, resize) or via API (Replicate, Supabase functions)
4. Saved back to Supabase storage
5. Optional premium via Stripe checkout
