# GitHub Pages Migration Complete ✅

## What Changed

### 1. **Routing Configuration**
- ✅ Base path: `/pocketscore` → `/pscore`
- ✅ Asset prefix: `/pocketscore/` → `/pscore/`
- ✅ OpenGraph URL: Updated to `mwarrc.github.io/pscore`

### 2. **Package Configuration**
- ✅ Added `gh-pages` dev dependency
- ✅ Added `deploy` script to package.json
- ✅ Fixed `lint` script to use `next lint`

### 3. **Documentation**
- ✅ Updated README.md for GitHub Pages
- ✅ Created deployment workflow (`.agent/workflows/deploy.md`)

## Your New Deployment URL

🌐 **https://mwarrc.github.io/pscore**

## Quick Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Building
npm run build        # Build static site to /out folder

# Deployment
npm run deploy       # Build + Deploy to GitHub Pages

# Linting
npm run lint         # Run Next.js linter
```

## Next Steps

### 1. Create GitHub Repository
```bash
# Create a new repository on GitHub named 'pscore'
# Then initialize and push:
git init
git add .
git commit -m "Initial commit: PocketScore website"
git branch -M main
git remote add origin https://github.com/mwarrc/pscore.git
git push -u origin main
```

### 2. Deploy to GitHub Pages
```bash
npm run deploy
```

### 3. Configure GitHub Pages
1. Go to: https://github.com/mwarrc/pscore/settings/pages
2. Under "Source", select: `gh-pages` branch
3. Click "Save"
4. Wait 1-5 minutes for deployment

### 4. Verify Deployment
Visit: https://mwarrc.github.io/pscore

## Important Notes

- **Main branch**: Contains source code
- **gh-pages branch**: Auto-generated, contains built files (don't edit manually)
- **Deployment time**: 1-5 minutes after running `npm run deploy`
- **Local testing**: Always test with `npm run dev` before deploying

## Troubleshooting

### Assets not loading (404s)
- Clear browser cache (Ctrl+Shift+R)
- Verify `basePath` in `next.config.ts` is `/pscore`

### Site shows 404
- Check GitHub Pages settings point to `gh-pages` branch
- Wait a few minutes for GitHub to process

### Deploy fails
- Ensure all changes are committed to main first
- Check you have write permissions to the repository

## File Structure

```
pocketscore_web/
├── .agent/workflows/deploy.md    # Detailed deployment guide
├── app/                          # Next.js pages
├── components/                   # React components
├── lib/github.ts                 # GitHub API integration
├── next.config.ts                # ✅ Updated for /pscore
├── package.json                  # ✅ Added deploy script
└── README.md                     # ✅ Updated documentation
```

## Support

For detailed deployment instructions, see: `.agent/workflows/deploy.md`

---
**Ready to deploy!** 🚀
