"use client";

import { MotionConfig, motion } from "framer-motion";
import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TechBadge, TechIcon } from "@/components/TechBadge";
import { fadeRiseReveal, projectGridViewport, revealEase, scrollViewport } from "@/lib/motion";
import type { ProjectCardData } from "@/lib/projects";

const skillGrid = {
  hidden: { opacity: 1 },
  visible: { transition: { staggerChildren: 0.02 } },
};

const technologyBlockReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.34, delayChildren: 0.02, staggerChildren: 0.02, ease: revealEase },
  },
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
    skills: ["TypeScript", "Java", "Python 3.11+", "JavaScript", "C++"],
  },
  {
    index: "02",
    title: "Product UI",
    skills: ["Next.js", "React", "React Native", "Tailwind CSS"],
  },
  {
    index: "03",
    title: "API & Services",
    skills: ["NestJS", "FastAPI", "Spring Boot"],
  },
  {
    index: "04",
    title: "Data & Delivery",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Redis", "Docker", "SQLite"],
  },
];

const portfolioTechnologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Framer Motion",
  "Custom CSS",
  "Lucide React",
  "Simple Icons",
];

function SkillCard({ skill, active, onSelect }: { skill: string; active: boolean; onSelect: (skill: string) => void }) {
  return (
    <motion.button
      className={`skill-card ${active ? "active" : ""}`}
      type="button"
      variants={fadeRiseReveal}
      whileHover={{ y: -2, transition: { duration: 0.2, ease: revealEase } }}
      whileTap={{ scale: 0.98 }}
      aria-pressed={active}
      onClick={() => onSelect(skill)}
    >
      <span className="skill-card-icon"><TechIcon tag={skill} size={22} /></span>
      <span className="skill-card-name">{skill}</span>
      <span className="skill-card-signal">{active ? "ACTIVE / TRACE" : "TRACE PROJECTS"}</span>
    </motion.button>
  );
}

export function InteractivePortfolio({ projects }: { projects: ProjectCardData[] }) {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const selectedProjectCount = selectedSkill ? projects.filter((project) => project.tags.includes(selectedSkill)).length : 0;

  const handleSkillSelect = (skill: string) => {
    setSelectedSkill((current) => current === skill ? null : skill);
  };

  return (
    <MotionConfig reducedMotion="user">
      <section className="section shell" id="projects" aria-labelledby="projects-title">
        <SectionHeading
          index="01"
          label="SELECTED WORK"
          title="Featured systems, explained without the fluff."
          titleId="projects-title"
          intro="A case-study-first view of the decisions behind the interface."
        />

        <motion.div
          className={`projects-grid ${selectedSkill ? "has-skill-filter" : ""}`}
          variants={skillGrid}
          initial="hidden"
          whileInView="visible"
          viewport={projectGridViewport}
        >
          {projects.map((project) => (
            <motion.div className="project-card-motion" key={project.number} variants={fadeRiseReveal}>
              <ProjectCard project={project} activeSkill={selectedSkill} onSkillSelect={handleSkillSelect} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section shell skills-section" id="systems" aria-labelledby="systems-title">
        <SectionHeading
          index="02"
          label="SKILLS & ARSENAL"
          title="Tools I use to move a system forward."
          titleId="systems-title"
          intro="Click a skill to trace where it appears in the featured work. Click it again to clear the signal."
        />

        <div className="skills-arsenal">
          {skillGroups.map((group) => (
            <motion.div
              className="skill-group"
              key={group.index}
              variants={skillGrid}
              initial="hidden"
              whileInView="visible"
              viewport={scrollViewport}
            >
              <motion.div className="skill-group-heading" variants={fadeRiseReveal}>
                <span>{group.index}.</span>
                <h3>{group.title}</h3>
              </motion.div>
              <div className="skills-grid" role="list" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => (
                  <SkillCard key={skill} skill={skill} active={selectedSkill === skill} onSelect={handleSkillSelect} />
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            className="portfolio-technologies"
            variants={technologyBlockReveal}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            <div className="portfolio-technologies-heading">
              <span aria-hidden="true">+</span>
              <h3>Technologies used in this portfolio</h3>
            </div>
            <div className="portfolio-technology-list">
              {portfolioTechnologies.map((technology) => (
                <motion.span key={technology} variants={fadeRiseReveal}>
                  <TechBadge tag={technology} />
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {selectedSkill ? (
          <motion.div className="skills-trace active" variants={fadeRiseReveal} initial="hidden" animate="visible" aria-live="polite">
            <span className="skills-trace-label">IN THIS PROJECT</span>
            <strong>{selectedSkill}</strong>
            <span>{`${selectedProjectCount} featured project match${selectedProjectCount === 1 ? "" : "es"}`}</span>
          </motion.div>
        ) : null}
      </section>
    </MotionConfig>
  );
}
