---
description: Deploy the PocketScore website to GitHub Pages
---

# Deploying to GitHub Pages (mwarrc.github.io/pscore)

This workflow guides you through deploying the PocketScore website to GitHub Pages.

## Prerequisites

1. Ensure you have a GitHub repository named `pscore` (or your preferred name)
2. The repository should be under your GitHub account (mwarrc)
3. You have git configured locally

## Deployment Steps

### First-Time Setup

1. **Initialize Git Repository (if not already done)**
```bash
git init
git remote add origin https://github.com/mwarrc/pscore.git
```

2. **Create .gitignore (if needed)**
Ensure the following are in your `.gitignore`:
```
node_modules/
.next/
out/
.DS_Store
*.log
.env*.local
```

3. **Commit Your Code**
```bash
git add .
git commit -m "Initial commit: PocketScore website"
git branch -M main
git push -u origin main
```

### Deploy to GitHub Pages

// turbo-all

4. **Run the Deploy Script**
```bash
npm run deploy
```

This will:
- Build the Next.js site (`next build`)
- Create `.nojekyll` file in the output directory
- Deploy to the `gh-pages` branch automatically

5. **Configure GitHub Pages (One-time setup)**
- Go to your repository on GitHub: `https://github.com/mwarrc/pscore`
- Navigate to **Settings** → **Pages**
- Under "Source", select the `gh-pages` branch
- Click **Save**
- Your site will be live at `https://mwarrc.github.io/pscore` in a few minutes

### Subsequent Deployments

For future updates, simply run:

```bash
npm run deploy
```

The `gh-pages` package will automatically:
- Build the latest changes
- Push to the `gh-pages` branch
- Trigger GitHub Pages to update

## Troubleshooting

### Issue: Site shows 404
- Verify the `gh-pages` branch exists in your repository
- Check GitHub Pages settings are pointing to the `gh-pages` branch
- Wait a few minutes for GitHub to process the deployment

### Issue: Assets not loading (404 errors)
- Verify `basePath` in `next.config.ts` matches your repository name (`/pscore`)
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Issue: Deploy fails with git errors
- Ensure you have committed all changes to main branch first
- Check that you have write permissions to the repository

## Manual Deployment (Alternative)

If the automated script fails, you can deploy manually:

1. Build the site:
```bash
npm run build
```

2. Create `.nojekyll` file:
```bash
touch out/.nojekyll
```

3. Deploy using gh-pages:
```bash
npx gh-pages -d out -t true
```

## Verification

After deployment, verify your site at:
- **Production URL**: https://mwarrc.github.io/pscore
- **Local Development**: http://localhost:3000

## Notes

- The `main` branch contains your source code
- The `gh-pages` branch contains the built static files (auto-generated)
- Never manually edit the `gh-pages` branch
- GitHub Pages may take 1-5 minutes to reflect changes after deployment
