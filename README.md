# Blue VPN

This repository contains the Blue VPN website exported from Figma and built as a Vite + React application.

Original Figma project: https://www.figma.com/design/wCpClrOjgcyRw985y5Zjj2/Blue-VPN

## Prerequisites

- Node.js 18 or newer
- npm, which is included with Node.js

Check your installed versions:

```bash
node --version
npm --version
```

## Installation

Install the project dependencies from the repository root:

```bash
npm install
```

## Local Development

Start the Vite development server:

```bash
npm run dev
```

Vite will print a local URL, usually:

```text
http://localhost:5173
```

Open that URL in your browser to view the site.

## Production Build

Create an optimized production build:

```bash
npm run build
```

The compiled site will be generated in the `dist` folder.

To preview the production build locally:

```bash
npx vite preview
```

## Deployment

This is a static Vite site. Deploy the contents generated in `dist` to any static hosting provider.

### Vercel

1. Import this repository into Vercel.
2. Use the following project settings:
   - Framework preset: `Vite`
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy the project.

### Netlify

1. Import this repository into Netlify.
2. Use the following build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy the site.

### Manual Static Hosting

1. Run:

   ```bash
   npm run build
   ```

2. Upload the contents of the `dist` folder to your hosting provider.

For single-page app routing, configure your host to serve `index.html` for unknown routes. This keeps direct links such as `/blog` or `/terms-and-privacy` working after deployment.
