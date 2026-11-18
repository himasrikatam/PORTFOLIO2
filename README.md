# Himasri Reddy Katamareddy | Portfolio

A minimal personal portfolio built with React, Vite, TypeScript, Tailwind CSS and GSAP. The design uses a light beige and blush pink palette with editorial typography and classic scroll animations.

## Features

- Single-page layout: Hero, About, Experience, Projects, Skills, Certifications, Contact
- Classic GSAP animations: staggered hero reveal, ScrollTrigger section reveals, animated heading underlines, card parallax and hover lift
- Smooth scrolling with Lenis (optional) and active-section nav highlighting
- Custom blush cursor on desktop
- Fully responsive with a mobile menu
- Respects `prefers-reduced-motion` by disabling animations
- All content lives in one typed file for easy editing

## Tech Stack

| Area | Tools |
| :--- | :--- |
| Framework | React, Vite, TypeScript |
| Styling | Tailwind CSS |
| Animation | GSAP, ScrollTrigger, @gsap/react |
| Smooth scroll | Lenis (optional) |
| Deployment | Vercel or Netlify |

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm (or pnpm / yarn)

### Install and run

```bash
git clone https://github.com/himasrikatam/<your-portfolio-repo>.git
cd <your-portfolio-repo>
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/     Reusable UI pieces (nav, cursor, cards, tags)
  sections/       Page sections (Hero, About, Experience, Projects, ...)
  data/
    content.ts    All text, links and project data
  hooks/          Custom hooks (smooth scroll, reduced motion)
  styles/         Global styles and design tokens
public/
  resume.pdf      Add your resume here
```

## Customizing

### Content

Edit `src/data/content.ts` to change your bio, experience, projects, skills and links. No component changes are needed for text updates.

### Colors

Design tokens are defined as CSS variables in `src/styles`:

| Token | Value | Use |
| :--- | :--- | :--- |
| Background | `#F6F0E8` | Main page background |
| Alt background | `#EFE6DA` | Alternate sections |
| Blush accent | `#E8B7B7` | Accents, underlines, cursor |
| Blush tint | `#F5DCDA` | Cards, tags, hover states |
| Heading text | `#2E2826` | Headings |
| Body text | `#6B605B` | Paragraphs |

### Fonts

Display headings use a serif (Fraunces or Cormorant Garamond) and body text uses Inter or DM Sans. Swap them in the global stylesheet and Tailwind config.

### Resume

Place your resume at `public/resume.pdf`. The "Download resume" button links to `/resume.pdf`.

## Deployment

### Vercel

1. Push the repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Use the Vite preset (build command `npm run build`, output directory `dist`).

### Netlify

1. Push the repo to GitHub.
2. Create a new site from Git in Netlify.
3. Set build command `npm run build` and publish directory `dist`.

## Accessibility and Performance

- Semantic HTML, alt text and visible focus states
- AA color contrast for text
- Animations disabled for users who prefer reduced motion
- Page title, meta description and Open Graph tags included
- GSAP imports are tree-shaken and heavy assets are lazy-loaded

## Notes

- Client project details are described at a high level. Do not add confidential data, internal URLs or credentials to `content.ts`.
- The phone number is intentionally left off the public site.

## Contact

- Email: himasrikatam@gmail.com
- LinkedIn: [himasri-r-9aa507243](https://www.linkedin.com/in/himasri-r-9aa507243/)
- GitHub: [himasrikatam](https://github.com/himasrikatam)