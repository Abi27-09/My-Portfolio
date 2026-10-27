# Creative Developer Portfolio

A responsive React portfolio built with Vite. It features a creative dark theme, animated typing effect, project cards, skills, certification placeholders, resume link, and a contact form that opens the visitor's default email app.

## Requirements

- Node.js (current LTS recommended)
- Visual Studio Code
- A web browser

## Run locally on macOS

1. Install Node.js from https://nodejs.org/ if it is not installed.
2. Open this folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Personalize before publishing

Search the project for these placeholders and replace them:

- `YOUR_USERNAME` — your GitHub username
- `YOUR_PROFILE` — your LinkedIn profile path
- `YOUR_EMAIL@example.com` — your real contact email

Update the projects in `src/components/Projects.jsx`. Replace certification placeholders in `src/components/Certifications.jsx` with credentials you have actually earned. Add your real resume PDF as `public/resume.pdf`.

## Production build

```bash
npm run build
npm run preview
```

Vite generates the deployable website in `dist/`.

## Deploy with GitHub Pages

The easiest approach for a Vite app is to deploy using a GitHub Actions workflow or a hosting service that supports Vite builds. Set the build command to `npm run build` and the output directory to `dist`. You can use Netlify or Vercel by importing your repository.

For GitHub Pages, configure the repository's Pages source to GitHub Actions and add a Vite deployment workflow appropriate for your repository name. If publishing at `https://USERNAME.github.io/REPOSITORY/` instead of a custom domain, set `base: "/REPOSITORY/"` in `vite.config.js` before building.

## Contact form note

The included form validates fields in the browser and prepares an email using `mailto:`. It does not send data to a server or store submissions. For a production contact form, connect a form provider or implement a backend endpoint and add server-side validation and spam protection.

## Accessibility

The site includes labeled form fields, accessible menu controls, keyboard focus styles, and reduced-motion support. Review contrast and content with your own devices before publishing.
