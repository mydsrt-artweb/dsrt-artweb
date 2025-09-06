# 🧪 DSRT Testing Guide

This document describes how testing is structured for **DSRT (Digital Smart Revise Technology)** to ensure code quality and stability.

---

## 📌 Testing Tools
- **Jest** → Unit & integration testing
- **React Testing Library** → Component rendering & user interaction
- **Playwright / Cypress (planned)** → End-to-End (E2E) testing
- **Testing Library DOM** → Accessibility & DOM queries
- **Vitest** (optional) → For faster test runs in development

---

## 🗂 Test Organization
- `__tests__/` → Unit tests colocated with code
- `*.test.ts` / `*.test.tsx` → Unit and integration tests
- `e2e/` → End-to-end test specs

Example:

src/ ├── components/ │   ├── Header.tsx │   └── tests/Header.test.tsx ├── hooks/ │   └── useAuth.test.ts tests/ └── e2e/ └── login.spec.ts

---

## ✅ Testing Standards
1. **AAA Pattern (Arrange, Act, Assert)**  
   - Arrange → setup initial state  
   - Act → execute action  
   - Assert → verify expected outcome  

2. **Accessibility Checks**  
   - Ensure ARIA attributes are tested (`getByRole`, `getByLabelText`)  
   - Components should remain keyboard accessible  

3. **Snapshot Testing** (light use only)  
   - Use sparingly for UI consistency  
   - Prefer **explicit assertions**  

4. **Mocking APIs**  
   - Use `msw` (Mock Service Worker) for API responses  
   - Avoid direct network calls in tests  

---

## 🎯 Coverage Goals
- **Unit Tests** → 80% coverage minimum  
- **Integration Tests** → Critical workflows (auth, editor, dashboard)  
- **E2E Tests** → Core user journeys (login, edit, save, export)  

Run coverage report:
```bash
npm run test -- --coverage


---

🚀 Running Tests

Unit & Integration

npm run test

Watch Mode

npm run test:watch

E2E (Playwright / Cypress)

npm run test:e2e


---

🔄 CI Integration

All PRs must pass ✅ tests in CI Workflow.

Releases blocked if coverage < 80%.



---

✅ Following this guide ensures DSRT remains stable, maintainable, and production-ready.

---

⚡ Dengan `testing.md`:  
- Semua dev ngerti **struktur & target coverage** 📊  
- QA pipeline jelas (unit → integration → e2e) 🔄  
- Cocok buat investor/enterprise yang peduli **reliability** 🏆  
