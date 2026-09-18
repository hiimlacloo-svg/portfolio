"use client";

import { useEffect, useState } from "react";

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      const aboutSection = document.getElementById("about");
      const hasReachedSecondSection = aboutSection
        ? aboutSection.getBoundingClientRect().top <= 96
        : window.scrollY >= window.innerHeight;

      setIsScrolled(hasReachedSecondSection);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);

    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, []);

  return (
    <div className="site-header-slot">
      <header className={`site-header shell${isScrolled ? " is-scrolled" : ""}`}>
        <a className="wordmark" href="#top" aria-label="Lac Loo, back to top">
          <span className="wordmark-icon">L</span>
          <strong>Lac Loo</strong>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-meta">
          <span>SG / GMT+8</span>
          <a className="contact-pill" href="#contact" aria-label="Go to contact section">
            ↗
          </a>
        </div>
      </header>
    </div>
  );
}
