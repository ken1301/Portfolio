import {
  ArrowUpRight,
  ChevronRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { InteractivePortfolio } from "@/components/InteractivePortfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollAwareHeader } from "@/components/ScrollAwareHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/lib/projects";

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
      <a className="skip-link" href="#projects">Skip to selected work</a>
      <ScrollAwareHeader />

      <main id="top">
        <section className="shell hero" aria-labelledby="hero-title">
          <div>
            <div className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              SYSTEM STATUS: ONLINE
            </div>
            <p className="hero-role">Full-stack Developer Intern | Web, Mobile &amp; AI Systems</p>
            <h1 id="hero-title">
              Building scalable web systems <span>&amp;</span> high-performance interfaces.
            </h1>
            <p className="hero-copy">
              Full-stack developer intern working across web, mobile and AI-assisted workflows—turning dense requirements into secure, clear and dependable products.
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
              <div className="profile-card-photo">
                <Image src="/images/profile/tuan-kiet.jpg" alt="Tuấn Kiệt Đỗ Lê" fill sizes="(max-width: 900px) 100vw, 440px" loading="eager" />
                <span>portrait / tuan kiet</span>
              </div>
              <div className="profile-card-main">
                <div>
                  <strong>Tuấn Kiệt Đỗ Lê</strong>
                  <span>Full-stack Developer Intern | Web, Mobile &amp; AI Systems</span>
                  <span className="profile-location">Based in Vietnam · Open to internship opportunities</span>
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
                <div className="terminal-line">&gt; tuan.kiet / full-stack developer intern</div>
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
              <div className="terminal-line"><em>&gt; based in Vietnam / open to internship opportunities</em><span className="terminal-cursor" /></div>
              </div>
            </div>
            <div className="live-status-strip" aria-label="Live build status">
              <span><span className="status-dot" aria-hidden="true" /> LIVE BUILD SIGNAL</span>
              <strong>static / verified / ready</strong>
            </div>
          </div>
        </section>

        <InteractivePortfolio projects={projects} />

        <section className="section shell" id="bio" aria-labelledby="bio-title">
          <SectionHeading
            index="03"
            label="OPERATING PRINCIPLES"
            title="Good engineering should feel calm."
            titleId="bio-title"
            intro="Less ceremony. More signal. Better decisions in the code and in the product."
          />
          <div className="principles">
            {principles.map((principle, index) => (
              <ScrollReveal as="article" className="principle" delay={index * 0.05} key={principle.title}>
                <div className="project-kicker">0{index + 1} / principle</div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="section shell" id="contact" aria-labelledby="contact-title">
          <SectionHeading
            index="04"
            label="CONTACT"
            title="Let's build something scalable together."
            titleId="contact-title"
            intro="A direct channel for product work that benefits from clearer systems and dependable execution."
          />
          <ScrollReveal className="contact">
            <div className="contact-main">
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
          </ScrollReveal>
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
