"use client";

import { useEffect, useState } from "react";
import { MobileMenu } from "@/components/MobileMenu";

const sections = ["projects", "systems", "bio", "contact"];

export function ScrollAwareHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled((current) => {
      const next = window.scrollY > 24;
      return current === next ? current : next;
    });

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.1] },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) sectionObserver.observe(element);
    });

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <header className={`topbar ${isScrolled ? "topbar-scrolled" : ""}`}>
      <div className="shell topbar-inner">
        <a className="wordmark" href="#top" aria-label="Tuấn Kiệt Đỗ Lê home">
          TUAN.KIET<span className="wordmark-dot">•</span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          {sections.map((section) => (
            <a
              className={activeSection === section ? "active" : ""}
              href={`#${section}`}
              aria-current={activeSection === section ? "location" : undefined}
              key={section}
            >
              {section === "projects" ? "PROJECTS" : section === "systems" ? "SYSTEMS" : section === "bio" ? "BIO" : "CONTACT"}
            </a>
          ))}
        </nav>
        <a className="topbar-action" href="/resume">
          RESUME ↗
        </a>
        <MobileMenu activeSection={activeSection} />
      </div>
    </header>
  );
}
