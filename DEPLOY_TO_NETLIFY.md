# How to Deploy to Netlify

This SkyIQ landing page is ready to deploy to Netlify as a static site!

## Quick Deploy Steps

### Option 1: Drag and Drop (Easiest)

1. **Build the project:**
   ```bash
   npm run build
   ```
   This creates a `dist/public` folder with your static site.

2. **Go to Netlify:**
   - Visit [netlify.com](https://netlify.com)
   - Log in or create an account

3. **Deploy:**
   - Scroll down to "Want to deploy a new site without connecting to Git?"
   - Drag the `dist/public` folder onto the upload area
   - Done! Your site is live!

### Option 2: GitHub + Netlify (Automatic Updates)

1. **Push to GitHub:**
   - Create a new repository on GitHub
   - Push your code:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin YOUR_GITHUB_REPO_URL
     git push -u origin main
     ```

2. **Connect to Netlify:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your repository
   - Netlify will auto-detect the settings (they're in `netlify.toml`)
   - Click "Deploy site"

3. **Automatic deploys:**
   - Every time you push to GitHub, Netlify rebuilds automatically!

## Build Configuration

The `netlify.toml` file tells Netlify:
- **Build command:** `npm run build`
- **Publish directory:** `dist/public`
- **Redirects:** All routes go to index.html (for client-side routing)

## Environment Variables (For Later)

When you add Supabase and Stripe:
1. Go to Site Settings → Environment Variables in Netlify
2. Add your keys:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_STRIPE_PUBLISHABLE_KEY`

(All frontend env vars must start with `VITE_` in Vite projects)

## Your Site is Static!

Your SkyIQ landing page is now a 100% static site - no server needed! This means:
- ✅ Fast loading
- ✅ Free hosting on Netlify
- ✅ No "broken link" errors
- ✅ Works perfectly with Supabase + Stripe (frontend-only integrations)

## Need Help?

If you get any errors during deployment, check:
1. Did the build complete successfully locally?
2. Is the `dist/public` folder created?
3. Are there any console errors?
