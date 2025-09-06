# ❓ DSRT Frequently Asked Questions (FAQ)

This FAQ covers the most common questions about **DSRT (Digital Smart Revise Technology)**.

---

## 🚀 Getting Started

### Q: How do I install DSRT locally?
A: Follow the [Installation Guide](./install.md).  
You’ll need **Node.js 20+**, clone the repo, and run:
```bash
npm install
npm run dev


---

Q: What do I need for environment variables?

A: Copy .env.example → .env.local and configure:

NEXT_PUBLIC_SUPABASE_URL

NEXT_PUBLIC_SUPABASE_ANON_KEY

REPLICATE_API_TOKEN



---

🔑 Accounts & Auth

Q: How does authentication work?

A: We use Supabase Auth with JWT tokens. OAuth providers (Google, GitHub) are planned.


---

Q: Can I reset my password?

A: Yes — handled via Supabase’s password reset flow. See docs.


---

🎨 Editing Tools

Q: Which file types are supported?

A: Currently:

Images → .jpg, .png, .webp

Video → .mp4, .webm

Logos → .svg, .png



---

Q: Is background removal free?

A: Basic background removal is free.
HD background removal requires Premium.


---

💎 Premium & Billing

Q: How do I upgrade to Premium?

A: Go to Premium Page or use /premium in the app.
Payments are handled securely via Stripe.


---

Q: What extra features are in Premium?

A:

HD exports

AI-powered image enhancement

Batch editing

Advanced filters



---

🛡️ Security & Privacy

Q: How is my data stored?

A: Files are stored in Supabase Storage with strict access policies.
Passwords are hashed with bcrypt. See Security.


---

Q: Do you comply with GDPR?

A: Yes — users can request data deletion anytime. See Privacy Policy.


---

🛠 Contributing

Q: How can I contribute?

A: Start with the Contributing Guide.
Check open issues or propose ideas in Discussions.


---

Q: Who maintains DSRT?

A: See Maintainers.


---

📩 Still have questions? Open an Info Issue or join Discussions.

---

⚡ Dengan `faq.md`:  
- User baru langsung dapet jawaban cepat 🔎  
- Ngurangi spam **Issues** & **Discussions** ✅  
- Nyambung ke semua dokumen lain (install, security, premium, dll) 📚  
