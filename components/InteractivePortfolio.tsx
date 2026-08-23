"use client";

import { motion } from "framer-motion";
import { useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import { ProjectCard, type ProjectCardData } from "@/components/ProjectCard";
import { TechIcon } from "@/components/TechBadge";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } },
};

const skillGrid = {
  hidden: { opacity: 1 },
  visible: { transition: { staggerChildren: 0.05 } },
};

const skillCard = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: easeOutExpo } },
};

type SkillGroup = {
  index: string;
  title: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    index: "01",
    title: "Languages",
    skills: ["TypeScript", "Python 3.11+"],
  },
  {
    index: "02",
    title: "Frameworks",
    skills: ["Next.js", "React", "React Native", "NestJS", "FastAPI", "Spring Boot", "Vite"],
  },
  {
    index: "03",
    title: "Tools & Data",
    skills: ["Tailwind CSS", "PostgreSQL", "PostgreSQL / Supabase", "MongoDB", "Prisma", "Redis", "Docker", "SQLite", "OpenRouter", "Socket.IO"],
  },
];

function SkillCard({ skill, active, onSelect }: { skill: string; active: boolean; onSelect: (skill: string) => void }) {
  const [spot, setSpot] = useState({ x: 50, y: 50 });

  const handlePointerMove = (event: ReactPointerEvent<HTMLButtonElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setSpot({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    });
  };

  const style = {
    "--skill-spot-x": `${spot.x}%`,
    "--skill-spot-y": `${spot.y}%`,
  } as CSSProperties;

  return (
    <motion.button
      className={`skill-card ${active ? "active" : ""}`}
      type="button"
      variants={skillCard}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: easeOutExpo } }}
      whileTap={{ scale: 0.98 }}
      aria-pressed={active}
      style={style}
      onClick={() => onSelect(skill)}
      onPointerMove={handlePointerMove}
    >
      <span className="skill-card-icon"><TechIcon tag={skill} size={32} /></span>
      <span className="skill-card-name">{skill}</span>
      <span className="skill-card-signal">{active ? "ACTIVE / TRACE" : "TRACE PROJECTS"}</span>
    </motion.button>
  );
}

export function InteractivePortfolio({ projects }: { projects: ProjectCardData[] }) {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleSkillSelect = (skill: string) => {
    setSelectedSkill((current) => current === skill ? null : skill);
  };

  return (
    <>
      <section className="section shell" id="projects" aria-labelledby="projects-title">
        <motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <div>
            <div className="section-kicker">/ 01 — selected work</div>
            <h2 id="projects-title">Featured systems, explained without the fluff.</h2>
          </div>
          <p className="section-intro">A case-study-first view of the decisions behind the interface.</p>
        </motion.div>

        <motion.div
          className={`projects-grid ${selectedSkill ? "has-skill-filter" : ""}`}
          variants={skillGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div className="project-card-motion" key={project.number} variants={skillCard}>
              <ProjectCard project={project} activeSkill={selectedSkill} onSkillSelect={handleSkillSelect} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section shell skills-section" id="systems" aria-labelledby="systems-title">
        <motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <div>
            <div className="section-kicker">// 02. Skills &amp; Arsenal</div>
            <h2 id="systems-title">Tools I use to move a system forward.</h2>
          </div>
          <p className="section-intro">Click a skill to trace where it appears in the featured work. Click it again to clear the signal.</p>
        </motion.div>

        <motion.div className="skills-arsenal" variants={skillGrid} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <div className="skills-binary" aria-hidden="true">0 1 0 1 1 0 1 0 0 1 1 0</div>
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.index}>
              <div className="skill-group-heading">
                <span>{group.index}.</span>
                <h3>{group.title}</h3>
              </div>
              <div className="skills-grid" role="list" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => (
                  <SkillCard key={skill} skill={skill} active={selectedSkill === skill} onSelect={handleSkillSelect} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div className={`skills-trace ${selectedSkill ? "active" : ""}`} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} aria-live="polite">
          <span className="skills-trace-label">IN THIS PROJECT</span>
          <strong>{selectedSkill ? selectedSkill : "Select a skill to trace its project usage"}</strong>
          <span>{selectedSkill ? `${projects.filter((project) => project.tags.includes(selectedSkill)).length} featured project match${projects.filter((project) => project.tags.includes(selectedSkill)).length === 1 ? "" : "es"}` : "Bidirectional highlight / project cards stay in context"}</span>
        </motion.div>
      </section>
    </>
  );
}
