# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server on port 3000
- `npm run build` — Build for production (static export via Next.js)
- `npm run lint` — Run ESLint

## Architecture

This is a single-page portfolio site built with **Next.js 13 (App Router)** using static export. There is only one route (`app/page.tsx`).

### Layout

The page uses a two-column layout: a fixed **Sidebar** on the left and scrollable **main content** on the right. The layout is defined via CSS classes in `app/globals.css` (`.main-container`, `.sidebar`, `.main-content`), not Tailwind utilities. On mobile (≤768px), the sidebar becomes relative and stacks vertically.

The main content sections render in order: About → Experience → Projects → Testimonials → Contact.

### Component Organization

- `components/home/` — Page section components (About, Sidebar, NewExperience, NewProjects, Testimonials, NewContact)
- `components/ui/` — shadcn/ui primitives (button, card, badge, carousel, tabs, etc.)
- Some older/unused components exist alongside newer ones (e.g., `Projects.tsx` vs `NewProjects.tsx`, `Contact.tsx` vs `NewContact.tsx`)

### Styling

- **Dark theme only** — CSS custom properties defined in `app/globals.css` `:root` (no light mode toggle)
- Accent color: `--accent-primary: #00d4ff` (cyan), secondary: `--accent-secondary: #7c3aed` (purple)
- Uses glassmorphism effects (`--glass-bg`, `--glass-border`, `--glass-backdrop`)
- Tailwind CSS with shadcn/ui (`new-york` style, CSS variables enabled)
- Primary font: Roboto Mono (`--font-roboto` variable), loaded via `next/font/google`
- Reusable CSS classes for common patterns: `.section`, `.section-title`, `.skill-tag`, `.project-card`, `.btn-primary`, `.nav-link`

### Key Dependencies

- `framer-motion` — Scroll animations and transitions
- `embla-carousel-react` + `embla-carousel-autoplay` — Carousels (used via shadcn carousel component)
- `lucide-react` — Icons
- `react-intersection-observer` — Scroll-triggered visibility

### Path Aliases

`@/` maps to the project root (configured in `tsconfig.json`). Use `@/components`, `@/lib`, etc.
