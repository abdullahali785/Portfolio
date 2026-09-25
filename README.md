# 🌐 Personal Portfolio

A modern, responsive **developer portfolio website** built with **React** and deployed using **GitHub Pages**.  
This website showcases my projects, skills, experience, and contact links in a clean and visually appealing layout.

---

## 🚀 Tech Stack

- **React.js (Create React App)**
- **JavaScript (ES6+)**
- **Bootstrap 5**
- **Custom CSS**
- **GitHub Pages** (deployment)

---

## ✨ Features

- Fully responsive UI for desktop and mobile
- Smooth navigation between sections
- Clean component-based architecture
- Professional layout using Bootstrap + custom styling
- Hosted live via GitHub Pages
- Fast optimized production build

---

## CI/CD Pipeline

This project uses **GitHub Actions** to automatically test and deploy the site on every push to `main`.

**Pipeline flow:**

1. **Push to `main`** triggers the workflow (`.github/workflows/ci.yml`)
2. **Test job** runs in the cloud:
   - Installs dependencies (`npm ci`)
   - Runs the test suite (`npm test`)
   - Verifies the production build succeeds (`npm run build`)
3. **Deploy job** runs only if tests pass, and only on `main` (not on pull requests):
   - Rebuilds the app
   - Publishes the `build/` output to the `gh-pages` branch via [`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages)
4. **GitHub Pages** automatically serves the updated `gh-pages` branch — the live site updates with no manual deploy step.

Pull requests targeting `main` run the test job only, so changes are checked before merging without triggering a deployment.

### Local workflow

```bash
npm run ship
```

Stages, commits, and pushes changes to `main`. That single push is what kicks off the entire pipeline above — testing, building, and deploying all happen automatically in CI.

---