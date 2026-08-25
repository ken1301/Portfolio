export type ProjectCaseStudy = {
  challenge: string;
  decisions: string[];
  tradeoffs: string[];
};

export type ProjectCardData = {
  number: string;
  title: string;
  kicker: string;
  description: string;
  role: string;
  period: string;
  outcome: string;
  tags: string[];
  nodes: string[];
  flow: Array<{ label: string; detail: string }>;
  caseStudy: ProjectCaseStudy;
  visualPriority?: "featured" | "compact";
  image?: { src: string; alt: string; objectPosition?: string };
  link?: string;
  linkLabel?: string;
};

const projectList = [
  {
    number: "02",
    title: "MediCare",
    kicker: "IN DEVELOPMENT / FAMILY HEALTH PRODUCT",
    description:
      "A family health product combining multi-family access, medication, vaccination, appointments, real-time chat and controlled AI/OCR workflows in one mobile experience.",
    role: "Full-stack developer",
    period: "Mar 2026 — ongoing",
    outcome: "Product is actively being completed and remains in development.",
    tags: ["React Native", "Spring Boot", "Java", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    nodes: ["MOBILE", "CORE API", "REALTIME", "AI/OCR"],
    flow: [
      { label: "01 / mobile access", detail: "React Native provides the family-facing mobile experience." },
      { label: "02 / health services", detail: "Core workflows cover medication, vaccination and appointments." },
      { label: "03 / realtime care", detail: "Family access and chat connect people to active care workflows." },
      { label: "04 / ai-assisted input", detail: "Controlled AI/OCR workflows support structured health information." },
    ],
    caseStudy: {
      challenge: "Bring family health workflows into one mobile product while the product is still being completed.",
      decisions: [
        "Keep the family-facing experience in React Native.",
        "Separate core health services from controlled AI/OCR workflows.",
        "Treat realtime care workflows as a first-class system path.",
      ],
      tradeoffs: [
        "Keep AI-assisted input bounded so it supports, rather than replaces, the health workflow.",
        "Continue evolving the product while preserving clear service boundaries.",
      ],
    },
    visualPriority: "featured",
    image: { src: "/images/projects/medicare-login-v2.png", alt: "MediCare mobile health product preview", objectPosition: "center 28%" },
    link: undefined,
  },
  {
    number: "01",
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
    caseStudy: {
      challenge: "Support distinct student and teacher workflows while asynchronous AI processing runs inside a live product with real users.",
      decisions: [
        "Model student and teacher experiences as separate role-aware product surfaces.",
        "Give exercise uploads a job identity so processing can be tracked independently.",
        "Keep AI analysis in a dedicated FastAPI service and return progress events to the frontend.",
      ],
      tradeoffs: [
        "Use both SSE and Socket.IO where the product needs different realtime delivery patterns.",
        "Keep the product live while the AI-assisted learning workflow continues to evolve.",
      ],
    },
    visualPriority: "featured",
    image: { src: "/images/projects/dfriend-learning-v2.png", alt: "Dfriend AI-assisted learning product preview", objectPosition: "center" },
    link: "https://www.dfriend.online/vi",
    linkLabel: "Visit live product",
  },
  {
    number: "04",
    title: "SmartSaving",
    kicker: "DEPLOYED DEMO / FINANCIAL MANAGEMENT",
    description:
      "A deployed web platform for managing savings books, deposits, withdrawals, interest rules, reports and role-based account access.",
    role: "Full-stack developer",
    period: "Mar — Jun 2026",
    outcome: "Completed as a project demo and deployed on Vercel.",
    tags: ["React", "Vite", "Tailwind CSS", "Axios", "React Router", "Spring Boot", "Java", "Spring Security", "JPA / Hibernate", "PostgreSQL / Supabase", "JWT", "Docker", "Maven"],
    nodes: ["REACT / VITE", "SPRING API", "SECURITY", "POSTGRES"],
    flow: [
      { label: "01 / client app", detail: "React and Vite render the responsive savings-book, transaction and account workflows." },
      { label: "02 / api services", detail: "Spring Boot exposes REST endpoints for savings books, deposits, withdrawals and reports." },
      { label: "03 / secure access", detail: "Spring Security, JWT and BCrypt protect the Admin, Teller and Customer roles." },
      { label: "04 / persistence", detail: "JPA/Hibernate stores users, savings books, transactions and rate settings in PostgreSQL/Supabase." },
    ],
    caseStudy: {
      challenge: "Turn savings-book and transaction workflows into a complete financial-management demo with distinct account roles.",
      decisions: [
        "Keep the React/Vite client focused on responsive workflow presentation.",
        "Expose domain operations through Spring Boot REST services.",
        "Use Spring Security and JWT to make role boundaries visible in the product flow.",
      ],
      tradeoffs: [
        "Prioritize a complete deployed demo across the core financial workflows.",
        "Keep persistence and security concerns in the backend rather than duplicating them in the client.",
      ],
    },
    visualPriority: "compact",
    image: { src: "/images/projects/smartsaving-dashboard.png", alt: "SmartSaving financial dashboard preview", objectPosition: "center" },
    link: "https://se-104-q21-grour-6-smartsaving.vercel.app/login",
    linkLabel: "Open deployed demo",
  },
  {
    number: "03",
    title: "Agentic Coding Agent",
    kicker: "PRIVATE / AGENTIC CODING",
    description:
      "A dependency-light AI coding agent that turns a repository task into a bounded, evidence-grounded workflow with structured decisions, controlled tools and final reporting.",
    role: "Agentic AI Developer",
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
      { label: "08 / finalize", detail: "Review, modified-file evidence, tests and citations reconcile into a final report." },
    ],
    caseStudy: {
      challenge: "Make repository-level coding work bounded, inspectable and recoverable instead of treating an agent as an unconstrained chat loop.",
      decisions: [
        "Persist task state and evidence so the workflow can resume and be reviewed.",
        "Require retrieval and verification before planning or mutation.",
        "Keep tools allowlisted and finish with a reconciled report.",
      ],
      tradeoffs: [
        "Prefer controlled, evidence-grounded execution over unconstrained autonomy.",
        "Accept more workflow checkpoints in exchange for safer repository changes.",
      ],
    },
    visualPriority: "compact",
    image: { src: "/images/projects/agentic-workflow.png", alt: "Agentic Coding Agent workflow architecture preview", objectPosition: "center" },
    link: undefined,
  },
] satisfies ProjectCardData[];

export const projects: ProjectCardData[] = [...projectList].sort((a, b) => Number(a.number) - Number(b.number));
