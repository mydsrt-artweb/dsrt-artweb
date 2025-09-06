# 🔐 DSRT Security & Privacy Overview

Security is a top priority for **DSRT (Digital Smart Revise Technology)**.  
This document explains how we protect user data and ensure system integrity.

---

## 🛡️ Data Protection
- All communication uses **HTTPS (TLS 1.2/1.3)**.
- Passwords are **hashed using bcrypt** before storage.
- Sensitive tokens (API keys, credentials) are stored securely in **Vercel Encrypted Environment Variables**.

---

## 📦 Data Storage
- User accounts, projects, and metadata are stored in **Supabase (PostgreSQL)**.
- Uploaded media is stored in **Supabase Storage** with strict **row-level security (RLS)**.
- Backups are performed regularly to prevent data loss.

---

## 🔑 Authentication & Access
- **JWT-based authentication** with Supabase Auth.
- Role-based access control for Premium & Enterprise users.
- Support for **OAuth providers** (Google, GitHub) planned in roadmap.

---

## 📊 Monitoring & Logging
- Centralized logging of errors and system events.
- Basic intrusion detection and suspicious activity monitoring.
- Alerts for failed login attempts and abnormal API usage.

---

## ⚖️ Compliance
- Following **GDPR principles**:
  - Data minimization
  - Right to access & delete
  - Explicit consent for processing
- Privacy Policy is documented in [PRIVACY.md](../legal/PRIVACY.md).

---

## 🤝 Responsible Disclosure
If you find a vulnerability:
1. Please report it privately via [GitHub Security Advisory](https://github.com/your-org/dsrt-app/security/policy)  
2. Or email us at **security@dsrt-app.com**  
3. We aim to respond within **72 hours**  

---

✅ With these measures, DSRT ensures your projects and media are handled securely.
