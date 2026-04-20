# GitHub Pages Deployment Guide

Your portfolio is configured to deploy to GitHub Pages at: `https://MANASIJESTE.github.io/portfolio`

## Step 1: Initialize Git Repository

In PowerShell, run these commands in your portfolio folder:

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio`
3. Description: "Professional portfolio - Automation Engineer & Data Analyst"
4. Choose "Public"
5. Click "Create repository"

## Step 3: Push to GitHub

After creating the repo, GitHub will show you commands. Run:

```bash
git branch -M main
git remote add origin https://github.com/MANASIJESTE/portfolio.git
git push -u origin main
```

(Replace the URL with your actual repo URL from GitHub)

## Step 4: Enable GitHub Pages

1. Go to your repo on GitHub: https://github.com/MANASIJESTE/portfolio
2. Click **Settings** → **Pages**
3. Under "Source", select **"GitHub Actions"**
4. Wait 1-2 minutes for the deploy workflow to complete

## Step 5: View Your Portfolio

Your portfolio will be live at: **https://MANASIJESTE.github.io/portfolio**

## Automatic Deployment

Every time you push code to the `main` branch:
- GitHub Actions will automatically build your portfolio
- It will deploy to GitHub Pages
- No manual steps needed!

## Update Your Portfolio

To make changes later:

```bash
# Make your changes in the files

# Commit and push
git add .
git commit -m "Update: description of changes"
git push
```

The portfolio will automatically rebuild and deploy!

## Troubleshooting

If deployment fails:
1. Check the "Actions" tab in your GitHub repo
2. Click on the failed workflow
3. Look at the error logs
4. Common issues: TypeScript errors, missing dependencies

## Need Help?

- GitHub Pages docs: https://docs.github.com/en/pages
- Next.js deployment: https://nextjs.org/docs/pages/building-your-application/deploying
