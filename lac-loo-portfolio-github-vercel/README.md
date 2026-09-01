# Lac Loo Portfolio

Complete Vite + React source prepared for GitHub and automatic Vercel deployments.

## Upload to GitHub

1. Extract the ZIP file. Do not upload the ZIP itself.
2. Create an empty GitHub repository named `portfolio`.
3. In the repository, choose **Add file → Upload files**.
4. Upload all files and folders from this project folder, including `app`,
   `public`, `package.json`, and `vite.config.ts`.
5. Commit the files to the `main` branch.

## Connect GitHub to Vercel

Import the GitHub repository into Vercel. Vercel should detect Vite automatically.
If it asks for settings, use:

- Framework Preset: `Vite`
- Root Directory: `./`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

After the repository is connected, every commit pushed to the production branch
will trigger a new Vercel deployment automatically. GitHub Pages is not required.

## Local development

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```
