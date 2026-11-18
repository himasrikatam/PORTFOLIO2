# Himasri Reddy Katamareddy — Portfolio

A minimal, warm, and editorial personal portfolio website for **Himasri Reddy Katamareddy**, Software Engineer specializing in **Agentic AI**, multi-agent workflows, and enterprise hybrid RAG pipelines based in Hyderabad, India.

## Tech Stack & Architecture

- **Core**: React 18, Vite, TypeScript
- **Styling**: Tailwind CSS with custom editorial design tokens (warm light beige `#F6F0E8`, alternate section `#EFE6DA`, blush pink accent `#E8B7B7` / `#F5DCDA`, and warm charcoal `#2E2826`)
- **Animation**: GSAP 3 with ScrollTrigger and `@gsap/react` `useGSAP` for clean declarative lifecycle and cleanup
- **Smooth Scroll**: Lenis smooth scrolling synchronized with ScrollTrigger via `gsap.ticker`
- **Typography**: Fraunces (warm editorial serif for display headings) and DM Sans (clean high-legibility body)
- **Accessibility**: Automatic detection and support for `prefers-reduced-motion`, visible focus rings, ARIA roles, and high color contrast
- **Single Source of Truth**: All portfolio content is centralized and typed in `src/data/content.ts`

---

## Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd PORTFOLIO

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

The optimized static production assets will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## Deployment Instructions

### Deploy to Vercel
1. Push your repository to GitHub or GitLab.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Framework Preset: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

Alternatively, via Vercel CLI:
```bash
npx vercel
```

### Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and click **"Add new site"** &rarr; **"Import an existing project"**.
2. Link your Git repository.
3. Build Settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy site**.

Alternatively, via Netlify CLI:
```bash
npx netlify deploy --prod
```

---

## Customizing Your Content

All data shown on the site is managed in:
`src/data/content.ts`

- **Personal Info & Headline**: Edit `content.personal`
- **Work Experience**: Edit `content.experiences`
- **Projects**: Edit `content.projects` (add/remove metrics, highlights, architecture items, tags)
- **Skills**: Edit `content.skillGroups`
- **Certifications & Awards**: Edit `content.certifications` (includes `title`, `issuer`, `year`, `description`, and clickable verification `url`)
- **Resume File**: Replace the placeholder at `public/resume.pdf` with your real resume PDF.

---

## License

MIT © Himasri Reddy Katamareddy

