# Tuấn Kiệt Đỗ Lê — Portfolio

An evidence-first portfolio for full-stack product work across web, mobile and AI-assisted workflows.

## Stack

- Next.js 16 App Router and React Server Components
- React 19 and TypeScript
- Geist Sans / Geist Mono
- Framer Motion for scroll reveal and interaction states
- Custom CSS for the obsidian/crimson visual system
- Lucide React and Simple Icons for interface and technology marks
- Vercel Analytics and Speed Insights for production measurement

## Project structure

```text
app/                 Route, metadata, OG image, robots and sitemap
components/          Interactive portfolio UI and browser-level behavior
lib/projects.ts      Typed case-study content and system flows
lib/motion.ts        Shared reveal timing and viewport configuration
public/icons/        Local visual assets
```

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run typecheck
npm run build
```

The portfolio is statically prerendered. Before production release, verify the deployed URL on desktop and mobile, check the case-study modal with keyboard navigation, and confirm the analytics and Speed Insights dashboards are receiving data.

## Content policy

Project technologies and outcomes are kept intentionally grounded in verified project information. Product screenshots and quantitative outcomes should be added only after approved images and real measurements are available.
