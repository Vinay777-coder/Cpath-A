# Clerk OAuth Setup Guide

## Current Status
Your application is currently in **Demo Mode** with test Clerk keys. Google OAuth and other social providers require a real Clerk account setup.

## What's Working
- ✅ Email/password authentication
- ✅ Email verification
- ✅ User registration and login
- ✅ Protected routes
- ✅ User sessions

## What Needs Setup
- ❌ Google OAuth sign-in
- ❌ Other social providers (GitHub, Microsoft, etc.)
- ❌ Production-ready authentication

## Step-by-Step Setup

### 1. Create Real Clerk Account
1. Go to [clerk.com](https://clerk.com) and sign up
2. Create a new application
3. Choose your preferred authentication methods

### 2. Get Your Real Keys
1. In your Clerk dashboard, go to **API Keys**
2. Copy your **Publishable Key** (starts with `pk_live_` or `pk_test_`)
3. Copy your **Secret Key** (starts with `sk_live_` or `sk_test_`)

### 3. Update Environment Variables
Replace the current test keys in your `.env.local` file:

```env
# Replace these test keys with your real Clerk keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_your_real_publishable_key_here
CLERK_SECRET_KEY=sk_live_your_real_secret_key_here

# Keep these as they are
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/login
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

### 4. Configure Google OAuth
1. In your Clerk dashboard, go to **User & Authentication** → **Social Providers**
2. Click **Add Provider** → **Google**
3. Follow Clerk's instructions to:
   - Create a Google Cloud Console project
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URIs

### 5. Test Your Setup
1. Restart your development server: `npm run dev`
2. Try signing in with Google
3. The blue demo notice should disappear once real keys are detected

## Troubleshooting

### Google OAuth Not Working?
- Verify your Google Cloud Console setup
- Check that redirect URIs match exactly
- Ensure Google+ API is enabled
- Confirm your Clerk app is using the correct Google credentials

### Still See Demo Mode Notice?
- Double-check your `.env.local` file has the correct keys
- Restart your development server
- Clear browser cache and cookies

### Need Help?
- Check [Clerk's Documentation](https://clerk.com/docs)
- Visit [Clerk's Discord Community](https://clerk.com/discord)
- Review [Google OAuth Setup Guide](https://clerk.com/docs/authentication/social-providers/google)

## Current Test Configuration
Your current `.env.local` contains these test keys:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Y2hhbXBpb24tYmFzcy04Ni5jbGVyay5hY2NvdW50cy5kZXYk`
- `CLERK_SECRET_KEY=sk_test_20Gko1Gh2RKyd16uNuZgqmp9gVtsHFMkhkYXuAgrKU`

These work for basic authentication but don't support OAuth providers.