import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

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

  // Update meta theme-color and data-theme attribute to match
  useEffect(() => {
    // Set data-theme for CSS selectors (scrollbar, etc.)
    document.documentElement.setAttribute("data-theme", theme);

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        "content",
        theme === "dark" ? "#111827" : "#eef2ff"
      );
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
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-indigo-50 to-cyan-50 text-gray-900"
      }`}
    >
      <ParticleBackground theme={theme} />
      <Navbar toggleTheme={toggleTheme} theme={theme} themeMode={themeMode} />
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
      <Footer ScrollLink={ScrollLink} theme={theme} />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-8 right-8 p-3 rounded-full bg-indigo-600 text-white shadow-lg z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
