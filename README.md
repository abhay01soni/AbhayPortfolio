# Abhay Soni — Developer Portfolio

A modern, responsive, and high-performance developer portfolio built with **Next.js (App Router)**, **Tailwind CSS**, and **TypeScript**. Inspired by top-tier engineering portfolios like [darshanbhuva.vercel.app](https://darshanbhuva.vercel.app/).

## 🚀 Key Features

- **Dark Theme by Default**: Sleek dark mode by default with seamless Light Mode toggle persisted in `localStorage`.
- **Curated Violet Color System**: Single violet accent palette without secondary distraction or harsh pure black/white contrast.
- **Data-Driven Architecture**: All portfolio information (personal info, projects, experiences, blog posts, socials) is centralized in [`src/data/portfolioData.ts`](src/data/portfolioData.ts) for effortless customization.
- **Interactive Sections**:
  1. **Sticky Top Navbar**: Circle initials logo, numbered section navigation, accent "Resume" CTA, theme switcher, scroll blur, and mobile drawer.
  2. **Fixed Desktop Sidebars**: Vertical social links (GitHub, LinkedIn, X/Twitter, Instagram, Stack Overflow) and vertical email line.
  3. **Hero Section**: Pulsing "Open to new opportunities" status pill, JetBrains Mono greeting, bold headline, and dual CTA buttons with accent glow.
  4. **About Section**: Professional narrative, technology tags in mono font, and custom developer portrait with hover-reactive offset accent border.
  5. **Experience Section**: Accessible tabbed company selector with role, date, location, and bullet points.
  6. **Projects Section**: Card grid with styled UI previews, category filtering (Full Stack, Frontend, Backend), live demo links, and GitHub repositories.
  7. **Blog Section**: 3 post cards with full in-modal reader experience.
  8. **Contact Section**: One-click email copy button and interactive direct message contact form.
  9. **Footer**: Socials and copyright credits.
- **Accessibility & SEO**: WCAG AA contrast, visible focus rings, skip-to-content link, semantic HTML5, and rich Open Graph metadata.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router & Turbopack)
- **Styling**: Tailwind CSS & CSS Variables
- **Icons**: Lucide React & Custom SVG Social Icons
- **Typography**: Inter (Body & Headings) + JetBrains Mono (Code, Badges & Labels)
- **Language**: TypeScript

## 📦 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
```

## 📝 Customizing Your Data

Simply open [`src/data/portfolioData.ts`](src/data/portfolioData.ts) and update:
- Your name, headline, bio, and resume link.
- Social profiles and email address.
- Experience history and skills.
- Project showcases, live URLs, and GitHub links.
- Articles and thoughts.
