import {
  ArrowUpRight,
  ChevronRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Terminal,
} from "lucide-react";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { ProjectCard, type ProjectCardData } from "@/components/ProjectCard";
import { ScrollAwareHeader } from "@/components/ScrollAwareHeader";

const projects: ProjectCardData[] = [
  {
    number: "01",
    title: "MediCare",
    kicker: "IN DEVELOPMENT / FAMILY HEALTH PRODUCT",
    description:
      "A family health product combining multi-family access, medication, vaccination, appointments, real-time chat and controlled AI/OCR workflows in one mobile experience.",
    role: "Full-stack developer",
    period: "Mar 2026 — ongoing",
    outcome: "Product is actively being completed and remains in development.",
    tags: ["React Native", "Spring Boot", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    nodes: ["MOBILE", "CORE API", "REALTIME", "AI/OCR"],
    flow: [
      { label: "01 / mobile access", detail: "React Native provides the family-facing mobile experience." },
      { label: "02 / health services", detail: "Core workflows cover medication, vaccination and appointments." },
      { label: "03 / realtime care", detail: "Family access and chat connect people to active care workflows." },
      { label: "04 / ai-assisted input", detail: "Controlled AI/OCR workflows support structured health information." },
    ],
    link: undefined,
  },
  {
    number: "02",
    title: "Dfriend",
    kicker: "LIVE / PRODUCTION PRODUCT",
    description:
      "A production EdTech platform with dedicated student and teacher experiences, class management, metrics, exercise uploads, AI analysis and streamed progress updates.",
    role: "Full-stack developer",
    period: "Feb 2026 — ongoing",
    outcome: "Live with real users while the product and its AI-assisted learning workflow continue to evolve.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "NestJS", "Prisma", "PostgreSQL", "MongoDB", "Redis", "BullMQ", "FastAPI", "Socket.IO", "SSE", "OpenAI / Groq", "Docker"],
    nodes: ["STUDENT", "TEACHER", "AI PIPELINE", "EVENTS"],
    flow: [
      { label: "01 / role entry", detail: "Student and teacher journeys enter through separate role-aware surfaces in the Next.js product." },
      { label: "02 / secure session", detail: "JWT authentication is carried through HttpOnly cookies and role-based redirects." },
      { label: "03 / classroom domain", detail: "Classes, joining, student metrics, classmates and teacher management form the core workflows." },
      { label: "04 / exercise intake", detail: "Teachers upload exercises and receive a job identifier for the processing workflow." },
      { label: "05 / ai processing", detail: "A Python FastAPI service coordinates document parsing and AI analysis with OpenAI/Groq adapters." },
      { label: "06 / live progress", detail: "SSE and Socket.IO return upload, analysis and completion progress to the frontend." },
    ],
    link: "https://www.dfriend.online/vi",
    linkLabel: "Visit live product",
  },
  {
    number: "03",
    title: "SmartSaving",
    kicker: "DEPLOYED DEMO / FINANCIAL MANAGEMENT",
    description:
      "A deployed web platform for managing savings books, deposits, withdrawals, interest rules, reports and role-based account access.",
    role: "Full-stack developer",
    period: "Mar — Jun 2026",
    outcome: "Completed as a project demo and deployed on Vercel.",
    tags: ["React", "Vite", "Tailwind CSS", "Axios", "React Router", "Spring Boot", "Spring Security", "JPA / Hibernate", "PostgreSQL / Supabase", "JWT", "Docker", "Maven"],
    nodes: ["REACT / VITE", "SPRING API", "SECURITY", "POSTGRES"],
    flow: [
      { label: "01 / client app", detail: "React and Vite render the responsive savings-book, transaction and account workflows." },
      { label: "02 / api services", detail: "Spring Boot exposes REST endpoints for savings books, deposits, withdrawals and reports." },
      { label: "03 / secure access", detail: "Spring Security, JWT and BCrypt protect the Admin, Teller and Customer roles." },
      { label: "04 / persistence", detail: "JPA/Hibernate stores users, savings books, transactions and rate settings in PostgreSQL/Supabase." },
    ],
    link: "https://se-104-q21-grour-6-smartsaving.vercel.app/login",
    linkLabel: "Open deployed demo",
  },
  {
    number: "04",
    title: "Agentic Coding Agent",
    kicker: "PRIVATE / AGENTIC CODING",
    description:
      "A dependency-light AI coding agent that turns a repository task into a bounded, evidence-grounded workflow with structured decisions, controlled tools and verified final reporting.",
    role: "Agentic AI engineer",
    period: "Jul 2026 — ongoing",
    outcome: "Private repository under active development with skill routing, repository RAG, controlled MCP tools, approval gates and a resumable coding workflow.",
    tags: ["Python 3.11+", "OpenAI Responses", "OpenRouter", "Repository RAG", "MCP / JSON-RPC", "SQLite"],
    nodes: ["STATE", "EVIDENCE", "TOOLS", "REPORT"],
    flow: [
      { label: "01 / intake", detail: "Issue enters a persisted task state inside a workspace policy boundary." },
      { label: "02 / analyze", detail: "The agent selects the applicable skills and records the task context." },
      { label: "03 / retrieve", detail: "Repository RAG searches bounded source chunks and attaches line citations." },
      { label: "04 / verify", detail: "Evidence is checked for grounding, freshness and file-digest consistency." },
      { label: "05 / plan", detail: "The model returns a typed, structured plan before any mutation is allowed." },
      { label: "06 / execute", detail: "Allowlisted MCP-shaped tools handle patches, tests and repository reads." },
      { label: "07 / recover", detail: "Failed tests route through bounded debugging, re-retrieval or repair decisions." },
      { label: "08 / finalize", detail: "Review, modified-file evidence, tests and citations reconcile into a verified report." },
    ],
    link: undefined,
  },
];

const stackGroups = [
  {
    index: "01 // CORE STACK",
    title: "Application foundation",
    items: ["Next.js App Router", "React", "TypeScript"],
    primary: ["Next.js App Router", "TypeScript"],
  },
  {
    index: "02 // UI & STYLING",
    title: "Interface foundation",
    items: ["Geist Sans", "Geist Mono", "Lucide React", "Custom CSS", "CSS Grid", "Responsive CSS"],
    primary: ["Geist Sans", "Custom CSS"],
  },
  {
    index: "03 // INTERACTION",
    title: "Small useful details",
    items: ["Clipboard API", "CSS Transitions", "CSS Keyframes", "Anchor Navigation"],
    primary: ["Clipboard API", "CSS Keyframes"],
  },
  {
    index: "04 // QUALITY",
    title: "Verified delivery",
    items: ["TypeScript Strict", "React Strict Mode", "Static Prerendering", "npm Build", "Browser QA"],
    primary: ["TypeScript Strict", "Static Prerendering"],
  },
];

const principles = [
  {
    title: "Clarity over noise",
    description: "Every surface has a job: explain the work, show the thinking or move the next action forward.",
  },
  {
    title: "Systems that scale",
    description: "Types, tokens and composable primitives keep the build fast without turning the codebase fragile.",
  },
  {
    title: "Proof, not promises",
    description: "The portfolio treats performance, architecture and shipped details as evidence—not decoration.",
  },
];

export default function Home() {
  return (
    <>
      <ScrollAwareHeader />

      <main id="top">
        <section className="shell hero" aria-labelledby="hero-title">
          <div>
            <div className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              SYSTEM STATUS: ONLINE
            </div>
            <h1 id="hero-title">
              Building scalable web systems <span>&amp;</span> high-performance interfaces.
            </h1>
            <p className="hero-copy">
              Full-stack engineer working across web, mobile and AI-assisted workflows—turning dense requirements into secure, clear and dependable products.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore selected work <ArrowUpRight size={14} />
              </a>
              <a className="button button-ghost" href="#systems">
                Read the stack <ChevronRight size={14} />
              </a>
            </div>
            <div className="hero-metrics" aria-label="Profile highlights">
              <div>
                <span className="metric-label">Focus</span>
                <span className="metric-value">Web + mobile systems</span>
              </div>
              <div>
                <span className="metric-label">Mode</span>
                <span className="metric-value">Product-minded</span>
              </div>
              <div>
                <span className="metric-label">Signal</span>
                <span className="metric-value">Security + clarity</span>
              </div>
            </div>
          </div>

          <div className="hero-console">
            <div className="profile-card">
              <div className="profile-card-heading">
                <span className="terminal-label">identity.card</span>
                <span className="profile-live"><span className="status-dot" aria-hidden="true" /> LIVE</span>
              </div>
              <div className="profile-card-main">
                <div className="profile-avatar" aria-hidden="true">TK</div>
                <div>
                  <strong>Tuan Kiet</strong>
                  <span>Full-stack engineer</span>
                </div>
              </div>
              <div className="profile-card-grid">
                <div><span>focus</span><strong>Web + mobile</strong></div>
                <div><span>mode</span><strong>Product-minded</strong></div>
                <div><span>signal</span><strong>Secure systems</strong></div>
              </div>
            </div>

            <div className="terminal" aria-label="Terminal profile card">
              <div className="terminal-bar">
                <span className="terminal-label">terminal_session_01</span>
                <span className="terminal-dots" aria-hidden="true"><i /><i /><i /></span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line"><strong>whoami</strong></div>
                <div className="terminal-line">&gt; tuan.kiet / full-stack engineer</div>
                <div className="terminal-separator">────────────────────</div>
                <div className="terminal-line"><strong>stack --primary</strong></div>
                <div className="terminal-line">&gt; next.js / react / typescript</div>
                <div className="terminal-line">&gt; geist / custom css / lucide</div>
                <div className="terminal-line">&gt; build / typecheck / static prerender</div>
                <div className="terminal-separator">────────────────────</div>
                <div className="terminal-line"><strong>mission</strong></div>
                <div className="terminal-line">&gt; make complex systems feel simple.</div>
                <div className="terminal-separator">────────────────────</div>
                <div className="terminal-line"><strong>availability</strong></div>
                <div className="terminal-line"><em>&gt; open to meaningful product work</em><span className="terminal-cursor" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section shell" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <div className="section-kicker">/ 01 — selected work</div>
              <h2 id="projects-title">Featured systems, explained without the fluff.</h2>
            </div>
            <p className="section-intro">A case-study-first view of the decisions behind the interface.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
        </section>

        <section className="section shell" id="systems" aria-labelledby="systems-title">
          <div className="section-heading">
            <div>
              <div className="section-kicker">/ 02 — engineering stack</div>
              <h2 id="systems-title">The tools behind this portfolio.</h2>
            </div>
            <p className="section-intro">Only the technologies and browser capabilities currently used by this portfolio.</p>
          </div>

          <div className="stack-grid">
            {stackGroups.map((group) => (
              <article className="stack-card" key={group.index}>
                <div className="stack-index">{group.index}</div>
                <h3>{group.title}</h3>
                <div className="stack-items">
                  {group.items.map((item) => <span className={`stack-item ${group.primary.includes(item) ? "primary" : ""}`} key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell" id="bio" aria-labelledby="bio-title">
          <div className="section-heading">
            <div>
              <div className="section-kicker">/ 03 — operating principles</div>
              <h2 id="bio-title">Good engineering should feel calm.</h2>
            </div>
            <p className="section-intro">Less ceremony. More signal. Better decisions in the code and in the product.</p>
          </div>
          <div className="principles">
            {principles.map((principle, index) => (
              <article className="principle" key={principle.title}>
                <div className="project-kicker">0{index + 1} / principle</div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell" id="contact" aria-labelledby="contact-title">
          <div className="contact">
            <div className="contact-main">
              <div className="section-kicker">/ 04 — open channel</div>
              <h2 id="contact-title">Let&apos;s build something scalable together.</h2>
              <p className="contact-copy">Have a product surface that needs clarity, a codebase that needs structure, or a system worth making faster? Send the brief. I&apos;ll bring the first useful question.</p>
              <div className="email-row">
                <span>doletuankiet06@gmail.com</span>
                <CopyEmailButton />
              </div>
            </div>
            <div className="contact-side">
              <a className="contact-link" href="https://github.com/ken1301" target="_blank" rel="noreferrer">
                <span><Github size={14} /> GitHub / selected code</span><ExternalLink size={13} />
              </a>
              <a className="contact-link" href="https://www.linkedin.com/in/tu%E1%BA%A5n-ki%E1%BB%87t-%C4%91%E1%BB%97-l%C3%AA-6a3674418/" target="_blank" rel="noreferrer">
                <span><Linkedin size={14} /> LinkedIn / professional profile</span><ExternalLink size={13} />
              </a>
              <a className="contact-link" href="mailto:doletuankiet06@gmail.com">
                <span><Mail size={14} /> Email / start a conversation</span><ArrowUpRight size={13} />
              </a>
              <div className="terminal-label" style={{ marginTop: 35 }}><Terminal size={13} /> core_values.exe</div>
              <div className="tag-list">
                <span className="tag">clarity</span>
                <span className="tag">scalability</span>
                <span className="tag">performance</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="shell site-footer">
        <span>© 2026 TUAN.KIET / portfolio_v0.1</span>
        <div className="footer-links">
          <a href="#top">BACK_TO_TOP</a>
          <a href="#systems">STACK</a>
          <a href="#contact">CONTACT</a>
        </div>
      </footer>
    </>
  );
}
