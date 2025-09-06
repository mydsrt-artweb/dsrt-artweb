## 📌 Release Types
We follow **Semantic Versioning (SemVer)**:
- **MAJOR (X.0.0)** → Breaking changes
- **MINOR (0.X.0)** → Backward-compatible features
- **PATCH (0.0.X)** → Bug fixes and small improvements

---

## 🛠 Release Workflow
1. **Prepare Branch**
   - Ensure `main` branch is stable and up to date.
   - Merge all relevant feature branches.

2. **Update Changelog**
   - Edit [`CHANGELOG.md`](./changelog.md) with new features, fixes, and updates.

3. **Version Bump**
   - Update version in `package.json`.
   ```bash
   npm version patch   # for bug fixes
   npm version minor   # for new features
   npm version major   # for breaking changes

4. Run CI/CD

Ensure ✅ Lint, ✅ Tests, ✅ Build pass via CI Workflow.



5. Tag Release

git tag vX.Y.Z
git push origin vX.Y.Z


6. Deployment

GitHub Actions auto-deploys to Vercel via Deploy Workflow.





---

✅ Release Checklist

[ ] All CI/CD checks are green.

[ ] CHANGELOG.md updated with highlights.

[ ] Docs updated (api.md, install.md, etc. if needed).

[ ] Version bump committed and tagged.

[ ] Release notes drafted on GitHub.



---

📢 Communication

GitHub Releases → Full release notes with changelog.

Discussions (Announcements) → Summary + roadmap updates.

Social Media (optional) → Tweet/LinkedIn post with highlights.



---

🔄 Hotfix Process

For urgent issues:

1. Create a branch hotfix/x.y.z.


2. Apply the fix + update changelog.


3. Bump patch version (npm version patch).


4. Merge → tag → deploy immediately.




---

✅ With this release process, DSRT ensures predictable, transparent, and stable updates for all users.

---

⚡ Dengan `releases.md`:  
- Tim punya **checklist rilis standar** 📝  
- Investor & user bisa lihat **proses release jelas** 🔄  
- Konsisten dengan **`changelog.md` + CI/CD pipeline**
