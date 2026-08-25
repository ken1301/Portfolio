import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Resume — Tuấn Kiệt Đỗ Lê",
  description: "Resume of Tuấn Kiệt Đỗ Lê, Full-stack Developer Intern focused on web, mobile and AI systems.",
  alternates: { canonical: "/resume" },
};

const skillGroups = [
  { label: "Languages", skills: "TypeScript · Java · Python · JavaScript · C++" },
  { label: "Product UI", skills: "Next.js · React · React Native · Tailwind CSS" },
  { label: "API & Services", skills: "NestJS · FastAPI · Spring Boot" },
  { label: "Data & Delivery", skills: "PostgreSQL · MongoDB · Prisma · Redis · Docker · SQLite" },
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-shell">
        <div className="resume-topline">
          <Link href="/">← BACK TO PORTFOLIO</Link>
          <span>RESUME / 2026</span>
        </div>

        <header className="resume-header">
          <p className="resume-kicker">FULL-STACK DEVELOPER INTERN</p>
          <h1>Tuấn Kiệt Đỗ Lê</h1>
          <p className="resume-role">Web, Mobile &amp; AI Systems</p>
          <p className="resume-summary">
            Full-stack developer intern building maintainable product interfaces, mobile workflows and bounded AI-assisted systems. Based in Vietnam and open to internship opportunities.
          </p>
          <div className="resume-links" aria-label="Professional links">
            <a href="mailto:doletuankiet06@gmail.com">doletuankiet06@gmail.com</a>
            <a href="https://github.com/ken1301" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/tu%E1%BA%A5n-ki%E1%BB%87t-%C4%91%E1%BB%97-l%C3%AA-6a3674418/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </header>

        <section className="resume-section" aria-labelledby="resume-projects-title">
          <div className="resume-section-heading">
            <span>01 / SELECTED EXPERIENCE</span>
            <h2 id="resume-projects-title">Product systems I have worked on</h2>
          </div>
          <div className="resume-projects">
            {projects.map((project) => (
              <article className="resume-project" key={project.number}>
                <div className="resume-project-index">{project.number}</div>
                <div>
                  <div className="resume-project-meta">{project.period} / {project.role}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="resume-outcome">{project.outcome}</p>
                  <div className="resume-tag-list">
                    {project.tags.slice(0, 8).map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section" aria-labelledby="resume-skills-title">
          <div className="resume-section-heading">
            <span>02 / TECHNICAL PROFILE</span>
            <h2 id="resume-skills-title">A practical, typed stack</h2>
          </div>
          <div className="resume-skills">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <span>{group.label}</span>
                <strong>{group.skills}</strong>
              </div>
            ))}
          </div>
        </section>

        <footer className="resume-footer">
          <span>OPEN TO INTERNSHIP OPPORTUNITIES</span>
          <Link href="/#contact">START A CONVERSATION ↗</Link>
        </footer>
      </div>
    </main>
  );
}
