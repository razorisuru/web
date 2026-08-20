import { useState, useEffect, useRef } from "react";
import ScrollLink from "./ScrollLink";
import { navLinks } from "../data/navLinks";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

/**
 * N6 · Newspaper masthead.
 *
 * The flag (mark + name, centred, closed by a double rule) scrolls away like
 * a broadsheet's; only the link rail sticks. The rail is the page's index —
 * mono caps, hairline, active section underlined in the signal ink. On narrow
 * viewports it scrolls horizontally instead of collapsing behind a hamburger,
 * so every destination stays one tap away and no label ever wraps.
 */
// `theme` is still passed by App.jsx; the masthead reads its colours from the
// `[data-theme]` token layer, so only `themeMode` (the tri-state) is consumed.
const Navbar = ({ toggleTheme, themeMode }) => {
  const [activeSection, setActiveSection] = useState("hero");
  const railRef = useRef(null);

  // Track active section with IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const observers = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Keep the active rail item in view when the rail is scrollable (narrow
  // viewports). preventScroll-equivalent: we only move the rail, never the page.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const current = rail.querySelector('[aria-current="true"]');
    if (!current) return;

    const target =
      current.offsetLeft - rail.clientWidth / 2 + current.clientWidth / 2;
    rail.scrollTo({
      left: Math.max(0, target),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }, [activeSection]);

  const themeIcon =
    themeMode === "dark" ? (
      <FiMoon size={14} aria-hidden="true" />
    ) : themeMode === "light" ? (
      <FiSun size={14} aria-hidden="true" />
    ) : (
      <FiMonitor size={14} aria-hidden="true" />
    );

  const themeLabel =
    themeMode === "dark" ? "Dark" : themeMode === "light" ? "Light" : "Auto";

  return (
    <header className="hm-header">
      <div className="hm-mast">
        <div className="hm-shell hm-mast__row">
          <ScrollLink
            to="#hero"
            className="hm-mast__name"
            aria-label="Isuru Bandara — back to top"
          >
            <img
              src="/RAZOR2.png"
              alt=""
              width="40"
              height="40"
              className="hm-mast__mark"
            />
            Isuru Bandara
          </ScrollLink>

          <div className="hm-mast__aside">
            <button
              type="button"
              onClick={toggleTheme}
              className="hm-toggle"
              aria-label={`Theme: ${themeLabel}. Change theme.`}
              title={`Theme: ${themeLabel}`}
            >
              {themeIcon}
              <span className="hm-toggle__label">{themeLabel}</span>
            </button>
          </div>
        </div>
        <div className="hm-shell">
          <hr className="hm-rule-double" aria-hidden="true" />
        </div>
      </div>

      <nav className="hm-rail" aria-label="Sections">
        <div className="hm-shell hm-rail__inner" ref={railRef}>
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <ScrollLink
                key={link.name}
                to={link.href}
                className="hm-rail__link"
                aria-current={isActive ? "true" : undefined}
              >
                {link.name}
              </ScrollLink>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
