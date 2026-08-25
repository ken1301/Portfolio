"use client";

import { ChevronRight, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { TechBadge } from "@/components/TechBadge";
import type { ProjectCardData } from "@/lib/projects";

function ProjectImageSlot({ title, image, modal = false }: { title: string; image?: ProjectCardData["image"]; modal?: boolean }) {
  return (
    <div className={`project-image-slot ${modal ? "modal-project-image" : ""}`} role="img" aria-label={`${title} project visual`}>
      <span className="project-image-grid" aria-hidden="true" />
      {image ? (
        <Image className="project-image-media" src={image.src} alt={image.alt} fill sizes={modal ? "(max-width: 680px) 100vw, 900px" : "(max-width: 680px) 100vw, 50vw"} style={{ objectPosition: image.objectPosition ?? "center" }} />
      ) : (
        <>
          <span className="project-image-label">IMAGE_SLOT / {title.toUpperCase()}</span>
          <span className="project-image-note">Drop approved product visual here</span>
        </>
      )}
    </div>
  );
}

function ProjectSystemPreview({ title, nodes }: { title: string; nodes: string[] }) {
  return (
    <div className="project-system-preview" role="img" aria-label={`${title} system architecture preview`}>
      <div className="project-system-track">
        {nodes.map((node, index) => (
          <span key={node} className="architecture-node">{node}</span>
        )).flatMap((node, index, all) => index < all.length - 1 ? [node, <span className="architecture-arrow" aria-hidden="true" key={`${title}-preview-arrow-${index}`} />] : [node])}
      </div>
      <span className="project-system-readout">SYSTEM / ARCHITECTURE · {nodes.join(" → ")}</span>
    </div>
  );
}

export function ProjectCard({ project, activeSkill, onSkillSelect }: { project: ProjectCardData; activeSkill?: string | null; onSkillSelect?: (skill: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [previewMode, setPreviewMode] = useState<"ui" | "system">("ui");
  const [previewTabFocus, setPreviewTabFocus] = useState<"ui" | "system">("ui");
  const cardTriggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const uiTabRef = useRef<HTMLButtonElement>(null);
  const systemTabRef = useRef<HTMLButtonElement>(null);
  const isSkillMatch = !activeSkill || project.tags.includes(activeSkill);

  const openModal = () => {
    returnFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : cardTriggerRef.current;
    setIsOpen(true);
  };

  const handlePreviewKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>, current: "ui" | "system") => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const next = current === "ui" ? "system" : "ui";
    setPreviewMode(next);
    setPreviewTabFocus(next);
    requestAnimationFrame(() => (next === "ui" ? uiTabRef.current : systemTabRef.current)?.focus());
  };

  useEffect(() => {
    if (!isOpen) {
      returnFocusRef.current?.focus();
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        return;
      }
      if (event.key !== "Tab" || !modalRef.current) return;
      const focusable = Array.from(modalRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <article
        className={`project-card project-card-${project.visualPriority ?? "compact"} ${activeSkill ? (isSkillMatch ? "skill-match" : "skill-dimmed") : ""}`}
        data-skill-match={isSkillMatch}
      >
        <button className="project-card-hit-area" ref={cardTriggerRef} type="button" aria-label={`Open ${project.title} case study`} onClick={openModal} />
        <div className="project-preview">
          <div className="preview-tabs" role="tablist" aria-label={`${project.title} preview modes`}>
            <button
              id={`project-${project.number}-ui-tab`}
              ref={uiTabRef}
              className={`preview-tab ${previewMode === "ui" ? "active" : ""}`}
              type="button"
              role="tab"
              aria-selected={previewMode === "ui"}
              aria-controls={`project-${project.number}-ui-panel`}
              tabIndex={previewTabFocus === "ui" ? 0 : -1}
              onFocus={() => setPreviewTabFocus("ui")}
              onKeyDown={(event) => handlePreviewKeyDown(event, "ui")}
              onClick={() => setPreviewMode("ui")}
            >
              UI PREVIEW
            </button>
            <button
              id={`project-${project.number}-system-tab`}
              ref={systemTabRef}
              className={`preview-tab ${previewMode === "system" ? "active" : ""}`}
              type="button"
              role="tab"
              aria-selected={previewMode === "system"}
              aria-controls={`project-${project.number}-system-panel`}
              tabIndex={previewTabFocus === "system" ? 0 : -1}
              onFocus={() => setPreviewTabFocus("system")}
              onKeyDown={(event) => handlePreviewKeyDown(event, "system")}
              onClick={() => setPreviewMode("system")}
            >
              SYSTEM / ARCHITECTURE
            </button>
          </div>
          {previewMode === "ui" ? (
            <div id={`project-${project.number}-ui-panel`} role="tabpanel" aria-labelledby={`project-${project.number}-ui-tab`} tabIndex={0}>
              <ProjectImageSlot title={project.title} image={project.image} />
            </div>
          ) : (
            <div id={`project-${project.number}-system-panel`} role="tabpanel" aria-labelledby={`project-${project.number}-system-tab`} tabIndex={0}>
              <ProjectSystemPreview title={project.title} nodes={project.nodes} />
            </div>
          )}
        </div>
        <div className="project-copy">
          <div className="project-kicker">{project.number} / {project.kicker}</div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="tag-list">
            {project.tags.slice(0, 6).map((tag) => <TechBadge tag={tag} key={tag} active={activeSkill === tag} onClick={onSkillSelect ? () => onSkillSelect(tag) : undefined} />)}
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
            ref={modalRef}
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`project-modal-title-${project.number}`}
            aria-describedby={`project-modal-description-${project.number}`}
          >
            <div className="modal-bar">
              <span className="modal-bar-label">case_study_{project.number.toLowerCase()}</span>
              <button className="modal-close" ref={closeButtonRef} type="button" onClick={() => setIsOpen(false)} aria-label="Close case study">
                <X size={17} />
              </button>
            </div>
            <div className="modal-content">
              <ProjectImageSlot title={project.title} image={project.image} modal />
              <div className="modal-kicker">{project.number} / {project.kicker}</div>
              <h2 id={`project-modal-title-${project.number}`}>{project.title}</h2>
              <p className="modal-description" id={`project-modal-description-${project.number}`}>{project.description}</p>
              <div className="project-meta modal-meta" aria-label={`${project.title} project details`}>
                <div><span>role</span><strong>{project.role}</strong></div>
                <div><span>period</span><strong>{project.period}</strong></div>
                <div><span>outcome</span><strong>{project.outcome}</strong></div>
              </div>

              <div className="modal-grid modal-grid-with-flow modal-grid-insight">
                <div className="modal-panel">
                  <span className="modal-label">problem / constraint</span>
                  <p>{project.caseStudy.challenge}</p>
                </div>
                <div className="modal-panel">
                  <span className="modal-label">engineering decisions</span>
                  <ul className="modal-bullet-list">
                    {project.caseStudy.decisions.map((decision) => <li key={decision}>{decision}</li>)}
                  </ul>
                </div>
                <div className="modal-panel">
                  <span className="modal-label">trade-offs</span>
                  <ul className="modal-bullet-list">
                    {project.caseStudy.tradeoffs.map((tradeoff) => <li key={tradeoff}>{tradeoff}</li>)}
                  </ul>
                </div>
              </div>

              <div className="modal-grid modal-grid-with-flow">
                <div className="modal-panel">
                  <span className="modal-label">flow / system diagram</span>
                  <div className="modal-architecture">
                    {project.nodes.map((node, index) => (
                      <span key={node} className="architecture-node">{node}</span>
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
                  <span className="modal-label">technologies used</span>
                  <div className="tag-list modal-tags">
                    {project.tags.map((tag) => <TechBadge tag={tag} key={tag} active={activeSkill === tag} onClick={onSkillSelect ? () => onSkillSelect(tag) : undefined} />)}
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
