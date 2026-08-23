"use client";

import { useEffect, useState } from "react";
import { MobileMenu } from "@/components/MobileMenu";

const sections = ["projects", "systems", "bio", "contact"];

export function ScrollAwareHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(window.scrollY > 24);

      const currentSection = sections.reduce((current, section) => {
        const element = document.getElementById(section);
        return element && element.getBoundingClientRect().top <= window.innerHeight * 0.35
          ? section
          : current;
      }, "");

      setActiveSection(currentSection);
    };

    updateHeader();

    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  return (
    <header className={`topbar ${isScrolled ? "topbar-scrolled" : ""}`}>
      <div className="shell topbar-inner">
        <a className="wordmark" href="#top" aria-label="Tuan Kiet home">
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
              {section === "projects" ? "PROJECTS" : section === "systems" ? "SYSTEMS" : section === "bio" ? "BIO" : "LOGS"}
            </a>
          ))}
        </nav>
        <a className="topbar-action" href="#contact">
          GET_IN_TOUCH
        </a>
        <MobileMenu activeSection={activeSection} />
      </div>
    </header>
  );
}
