# Dormic Deployment

Dormic is a static web app connected to Firebase project `hostel-lost-found`.

## Daily update flow

1. Make code changes.
2. Commit and push to GitHub `main`.
3. Vercel deploys the website from GitHub.
4. GitHub Actions deploys Firebase Hosting and Firestore rules.

## One-time Vercel setup

1. Open Vercel.
2. Import GitHub repository `amitjangra9080-glitch/Dormic`.
3. Use these settings:
   - Framework preset: Other
   - Build command: empty
   - Output directory: `.`
4. Deploy.

After this, every push to `main` deploys automatically.

## One-time Firebase GitHub secret

Create a Firebase service account JSON key for project `hostel-lost-found`, then add it to GitHub:

1. GitHub repo > Settings > Secrets and variables > Actions.
2. Add a repository secret named `FIREBASE_SERVICE_ACCOUNT_HOSTEL_LOST_FOUND`.
3. Paste the full service account JSON as the value.

After this, pushes to `main` deploy Firebase Hosting and `firestore.rules`.

## Manual deploy commands

```bash
npm run deploy:vercel
npm run deploy:firebase
npm run deploy:firebase:rules
```
