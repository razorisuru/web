import React, { useState, useEffect, useCallback } from "react";
import { FiArrowUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

// Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ResumeSection from "./components/ResumeSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollLink from "./components/ScrollLink";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(6); // Show 6 projects initially

  // --- Auto Dark/Light Mode Detection ---
  // themeMode: "dark" | "light" | "system"
  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("themeMode") || "system";
    }
    return "system";
  });

  // Resolve the actual theme based on mode
  const getSystemTheme = useCallback(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "dark";
  }, []);

  const [theme, setTheme] = useState(() => {
    if (themeMode === "system") return getSystemTheme();
    return themeMode;
  });

  // Persist themeMode to localStorage
  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
    if (themeMode === "system") {
      setTheme(getSystemTheme());
    } else {
      setTheme(themeMode);
    }
  }, [themeMode, getSystemTheme]);

  // Listen for real-time OS theme changes
  useEffect(() => {
    if (themeMode !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [themeMode]);

  // Update meta theme-color and data-theme attribute to match.
  // data-theme is what the whole token layer keys off — see src/index.css.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    // Browser chrome has to be an sRGB hex, but the value is *derived* from
    // --hm-paper rather than hard-coded, so it can never drift from the token.
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      const paper = getComputedStyle(document.documentElement)
        .getPropertyValue("--hm-paper")
        .trim();
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = 1;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = paper;
      ctx.fillRect(0, 0, 1, 1);
      const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
      const hex = `#${[r, g, b]
        .map((c) => c.toString(16).padStart(2, "0"))
        .join("")}`;
      metaThemeColor.setAttribute("content", hex);
    }
  }, [theme]);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Cycle: dark → light → system
  const toggleTheme = () => {
    setThemeMode((prev) => {
      if (prev === "dark") return "light";
      if (prev === "light") return "system";
      return "dark";
    });
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6); // Load 6 more projects
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#hero"
        className="hm-btn sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[400]"
      >
        Skip to content
      </a>

      <ParticleBackground theme={theme} />
      <Navbar toggleTheme={toggleTheme} theme={theme} themeMode={themeMode} />

      <main>
        <HeroSection theme={theme} id="hero" />
        <AboutSection theme={theme} id="about" />
        <SkillsSection theme={theme} id="skills" />
        <ResumeSection theme={theme} id="resume" />
        <ProjectsSection
          theme={theme}
          id="projects"
          visibleProjects={visibleProjects}
          loadMoreProjects={loadMoreProjects}
        />
        <ServicesSection theme={theme} id="services" />
        <ContactSection theme={theme} id="contact" />
      </main>

      <Footer ScrollLink={ScrollLink} theme={theme} />

      <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-end gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="hm-btn !px-3"
            title="Scroll to top"
          >
            <FiArrowUp size={18} aria-hidden="true" />
          </button>
        )}

        <a
          href="https://wa.me/94766008527"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact on WhatsApp (0766008527)"
          title="Chat on WhatsApp: 0766008527"
          className="hm-btn !px-3 !bg-[#25D366] !text-white !border-[#25D366] hover:!bg-[#20ba59] hover:!border-[#20ba59] transition-transform hover:scale-105"
        >
          <FaWhatsapp size={20} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export default App;
