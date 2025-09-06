# DSRT App — Installation Guide

This guide explains how to set up the DSRT application locally and prepare it for deployment.

---

## 1. Prerequisites
Ensure you have installed:
- **Node.js** v20 or later
- **npm** (comes with Node.js) or alternative: Yarn / pnpm
- **Git**

---

## 2. Getting Started

### Clone Repository
```bash
git clone https://github.com/mydsrt-artweb/dsrt-app.git
cd dsrt-app

Install Dependencies

npm install

Development Server

npm run dev

Access at: http://localhost:3000

Production Build

npm run build
npm start


---

3. Environment Variables

Create .env.local in the root directory:

NEXT_PUBLIC_API_URL=https://api.dsrt.io

(Adjust once backend API endpoints are live.)


---

4. Deployment

Vercel (Recommended)

Push to GitHub

Connect repository to Vercel

Deploy automatically from main branch


GitHub Pages

npm run export

Generated static files are located in /out/.
