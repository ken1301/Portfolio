"use client";

import { ChevronRight, ExternalLink, X } from "lucide-react";
import { useEffect, useState, type KeyboardEvent as ReactKeyboardEvent, type MouseEvent as ReactMouseEvent } from "react";
import { TechBadge } from "@/components/TechBadge";

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
  link?: string;
  linkLabel?: string;
};

function ProjectImageSlot({ title, modal = false }: { title: string; modal?: boolean }) {
  return (
    <div className={`project-image-slot ${modal ? "modal-project-image" : ""}`} role="img" aria-label={`${title} visual placeholder`}>
      <span className="project-image-grid" aria-hidden="true" />
      <span className="project-image-label">IMAGE_SLOT / {title.toUpperCase()}</span>
      <span className="project-image-note">Drop approved product visual here</span>
    </div>
  );
}

export function ProjectCard({ project }: { project: ProjectCardData }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = (event: ReactMouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest("a, button")) return;
    setIsOpen(true);
  };

  const handleCardKeyDown = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <article
        className="project-card"
        role="button"
        tabIndex={0}
        aria-label={`Open ${project.title} case study`}
        onClick={handleCardClick}
        onKeyDown={handleCardKeyDown}
      >
        <div className="project-image-trigger">
          <ProjectImageSlot title={project.title} />
          <span className="project-image-status">VISUAL_PREVIEW <ChevronRight size={12} /></span>
        </div>
        <div className="project-copy">
          <div className="project-kicker">{project.number} / {project.kicker}</div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="tag-list">
            {project.tags.slice(0, 6).map((tag) => <TechBadge tag={tag} key={tag} />)}
            {project.tags.length > 6 ? <span className="tag tag-more">+{project.tags.length - 6} more</span> : null}
          </div>
          <div className="project-actions">
            <span className="project-card-hint">Click card to inspect <ChevronRight size={13} /></span>
            {project.link ? (
              <a className="project-open" href={project.link} target="_blank" rel="noreferrer">
                {project.linkLabel ?? "Open public repository"} <ExternalLink size={13} />
              </a>
            ) : (
              <span className="project-private">Private / details on request</span>
            )}
          </div>
        </div>
      </article>

      {isOpen ? (
        <div
          className="project-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`project-modal-title-${project.number}`}
          >
            <div className="modal-bar">
              <span className="modal-bar-label">case_study_{project.number.toLowerCase()}</span>
              <button className="modal-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close case study">
                <X size={17} />
              </button>
            </div>
            <div className="modal-content">
              <ProjectImageSlot title={project.title} modal />
              <div className="modal-kicker">{project.number} / {project.kicker}</div>
              <h2 id={`project-modal-title-${project.number}`}>{project.title}</h2>
              <p className="modal-description">{project.description}</p>
              <div className="project-meta modal-meta" aria-label={`${project.title} verified details`}>
                <div><span>role</span><strong>{project.role}</strong></div>
                <div><span>period</span><strong>{project.period}</strong></div>
                <div><span>outcome</span><strong>{project.outcome}</strong></div>
              </div>

              <div className="modal-grid modal-grid-with-flow">
                <div className="modal-panel">
                  <span className="modal-label">flow / system diagram</span>
                  <div className="modal-architecture">
                    {project.nodes.map((node, index) => (
                      <span key={node} className={`architecture-node ${index === 1 ? "active" : ""}`}>{node}</span>
                    )).flatMap((node, index, all) => index < all.length - 1 ? [node, <span className="architecture-arrow" aria-hidden="true" key={`modal-${project.number}-arrow-${index}`} />] : [node])}
                  </div>
                  <div className="detailed-flow" aria-label={`${project.title} workflow steps`}>
                    {project.flow.map((step) => (
                      <div className="detailed-flow-step" key={step.label}>
                        <span className="detailed-flow-index">{step.label.split(" / ")[0]}</span>
                        <strong>{step.label.split(" / ")[1]}</strong>
                        <span>{step.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="modal-panel">
                  <span className="modal-label">verified technologies</span>
                  <div className="tag-list modal-tags">
                    {project.tags.map((tag) => <TechBadge tag={tag} key={tag} />)}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <span className="modal-proof">Scope shown is intentionally concise.</span>
                {project.link ? (
                  <a className="project-open" href={project.link} target="_blank" rel="noreferrer">
                    {project.linkLabel ?? "Open project"} <ExternalLink size={13} />
                  </a>
                ) : (
                  <span className="project-private">Private case study / details available on request</span>
                )}
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
