"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const sections = [
  { id: "projects", label: "PROJECTS" },
  { id: "systems", label: "SYSTEMS" },
  { id: "bio", label: "BIO" },
  { id: "contact", label: "CONTACT" },
];

export function MobileMenu({ activeSection }: { activeSection: string }) {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="mobile-menu-wrap">
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={17} /> : <Menu size={17} />}
      </button>

      {isOpen ? (
        <nav className="mobile-menu" id="mobile-navigation" aria-label="Mobile navigation">
          <div className="mobile-menu-label">navigation / quick access</div>
          {sections.map((section) => (
            <a
              className={activeSection === section.id ? "active" : ""}
              href={`#${section.id}`}
              aria-current={activeSection === section.id ? "location" : undefined}
              key={section.id}
              onClick={() => setIsOpen(false)}
            >
              <span>{section.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
