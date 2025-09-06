# 🛠️ Troubleshooting

### ❌ Build fails with "Module not found"
- Run `npm install`
- Check `tsconfig.json` paths

### ❌ Supabase auth not working
- Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### ❌ Vercel deploy fails
- Ensure `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` are set
