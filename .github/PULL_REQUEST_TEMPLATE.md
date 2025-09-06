# 🚀 Upgrade Next.js to v15.0.2

## Summary
This PR upgrades **Next.js** from `^14.x` → `^15.0.2` to resolve security vulnerabilities:
- Next.js `<14.2.31` has multiple **high severity issues** (SSRF, cache poisoning, auth bypass, etc.).
- Fix available in `next@15.0.2`.

## Changes
- `package.json` updated:
  ```json
  "dependencies": {
    "next": "^15.0.2",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }

Regenerated package-lock.json

Updated CI to run npm audit --audit-level=high


Breaking Changes to Check

⚠️ next/image → stricter props validation.

⚠️ next/link requires <a> child or legacyBehavior.

⚠️ Middleware enforces Web Standard Request API only.

⚠️ Turbopack experimental enabled by default in dev.

⚠️ Verify custom Webpack loaders/plugins compatibility.


Testing Steps

1. Run local dev: npm run dev


2. Run lint: npm run lint


3. Run tests: npm test


4. Deploy preview with Vercel



References

Next.js 15 Release Notes

Migration Guide


---

📌 Cara pakai:  
- Simpan file ini di repo kamu di path:

.github/pull_request_template.md

- Commit & push.  
- Setelah itu, setiap kali kamu bikin **Pull Request** → template ini auto muncul di PR description.  
