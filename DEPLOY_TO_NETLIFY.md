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
- **Functions directory:** `netlify/functions` (for serverless functions)
- **Redirects:** All routes go to index.html (for client-side routing)

## Required Environment Variables

**You must add these environment variables for the voice feature to work:**

1. Go to **Site Settings → Environment Variables** in Netlify
2. Add the following required variable:
   - `ELEVENLABS_API_KEY` - Your ElevenLabs API key (get it from [elevenlabs.io](https://elevenlabs.io))

### Optional Environment Variables (For Future Features)

When you add Supabase and Stripe:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_STRIPE_PUBLISHABLE_KEY`

**Note:** Frontend env vars must start with `VITE_`, but backend function env vars (like `ELEVENLABS_API_KEY`) do not.

## Netlify Functions (Serverless Backend)

This application uses **Netlify Functions** for the voice showcase feature. These are serverless functions that run on-demand when users click the voice samples.

The voice-sample function:
- Lives in `netlify/functions/voice-sample.ts`
- Uses your ElevenLabs API key from environment variables
- Generates AI voice samples on-demand
- Returns audio files to the frontend

**Benefits:**
- ✅ Fast loading with serverless architecture
- ✅ Free tier includes 125k function requests/month
- ✅ No server management needed
- ✅ Automatic scaling

## Need Help?

If you get any errors during deployment, check:
1. Did the build complete successfully locally?
2. Is the `dist/public` folder created?
3. Are there any console errors?
