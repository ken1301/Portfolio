# Tuấn Kiệt Đỗ Lê — Personal Portfolio

Personal engineering portfolio showcasing selected work across web, mobile and AI-enabled systems.

**Live website:** [portfolio-ken1301s-projects.vercel.app](https://portfolio-ken1301s-projects.vercel.app)

## Built with

- Next.js 16 App Router and React Server Components
- React 19 and TypeScript
- Geist Sans / Geist Mono
- Framer Motion for scroll reveal and interaction states
- Custom CSS for the obsidian/crimson visual system
- Lucide React and Simple Icons for interface and technology marks
- Vercel Analytics and Speed Insights

## Highlights

- Responsive Obsidian Black & Crimson interface
- Interactive project case studies with UI preview and system flow modes
- Skill-to-project tracing through the Systems section
- Detailed architecture flows, decisions and trade-offs
- Dedicated resume route for internship applications
- Accessible navigation, modal focus trapping and keyboard controls
- `prefers-reduced-motion` support
- SEO, canonical URL, OpenGraph metadata, robots and sitemap configuration

## Selected work

The portfolio presents four projects without exposing private product source:

- **Dfriend** — production EdTech platform with real users, role-aware workflows, asynchronous exercise processing and realtime delivery.
- **MediCare** — mobile family-health product with medication, vaccination, appointments, realtime care and controlled AI/OCR workflows.
- **Agentic Coding Agent** — private coding-agent project using repository RAG, typed planning, controlled tools and evidence-grounded reporting.
- **SmartSaving** — deployed full-stack financial-management demo with role-based workflows and Spring Boot services.

Project source code remains private where it contains product IP or business logic. The case studies document architecture, decisions, trade-offs and verified technologies instead.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run typecheck
npm run build
```

The site is statically prerendered. Before a production release, verify the deployed URL on desktop and mobile, test the case-study modal with keyboard navigation, and confirm Analytics and Speed Insights are receiving data.

## Project structure

```text
app/                 Routes, metadata, OG image, robots, sitemap and resume
components/          Interactive portfolio UI and browser-level behavior
lib/projects.ts      Typed case-study content and system flows
lib/motion.ts        Shared reveal timing and viewport configuration
public/icons/        Local visual assets
public/images/       Profile and approved project visuals
```

## Content policy

Project technologies and outcomes are kept grounded in verified project information. Product screenshots and quantitative outcomes should be added only after approval and real measurements are available.

## License

Portfolio source is published for review. Product assets, screenshots and private-project content remain subject to their respective ownership and usage rights.
