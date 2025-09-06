# 🏛️ DSRT Project Governance

This document defines how the **DSRT (Digital Smart Revise Technology)** project is managed and maintained.

---

## 👥 Roles & Responsibilities

### Core Maintainers
- Responsible for the overall direction of the project.
- Approve major features, architecture changes, and releases.
- Manage security disclosures and coordinate patches.

### Contributors
- Anyone who submits pull requests, bug reports, or feature ideas.
- Must follow the [Contributing Guide](./contributing.md) and [Style Guide](./styleguide.md).
- PRs require review from at least **1 core maintainer** before merging.

### Community
- Users and developers who provide feedback in [Discussions](https://github.com/your-org/dsrt-app/discussions).
- Can vote on roadmap priorities via polls and issue upvotes.

---

## 🔄 Decision-Making Process
- **Minor changes** (typos, small bug fixes) → Maintainers can merge directly.
- **Medium changes** (new features, non-breaking API updates) → Require issue discussion + PR review.
- **Major changes** (architecture shifts, breaking changes) → Require an **RFC (Request for Comments)** document posted in Discussions.

---

## 📦 Release Management
- **Main Branch**: Always stable, production-ready.
- **Develop Branch**: (optional) Integration of features before merging to `main`.
- **Release Tags**: Semantic Versioning (`v1.2.0`).
  - `MAJOR` → Breaking changes
  - `MINOR` → New features (backward compatible)
  - `PATCH` → Bug fixes and small improvements

Release checklist:
1. Ensure all CI checks pass (✅ Lint, Test, Build).
2. Update `CHANGELOG.md`.
3. Tag release (`git tag vX.X.X && git push --tags`).
4. Deploy via GitHub Actions → Vercel.

---

## 🛡️ Security Governance
- Security issues must be reported via [SECURITY.md](../.github/SECURITY.md).
- Core maintainers triage vulnerabilities within **72h**.
- Emergency patches can bypass standard release schedule.

---

## 🤝 Community Governance
- Discussions for features & roadmap happen on GitHub Discussions.
- Code of Conduct (future addition) will guide respectful collaboration.
- Decision-making strives for **consensus**, but maintainers have final say.

---

✅ With this governance model, DSRT ensures **stability, transparency, and trust** across contributors, users, and stakeholders.
