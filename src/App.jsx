import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });
  const [visibleProjects, setVisibleProjects] = useState(6); // Show 6 projects initially

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

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

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 4); // Load 4 more projects
  };

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-indigo-50 to-cyan-50 text-gray-900"
      }`}
    >
      <Navbar toggleTheme={toggleTheme} theme={theme} />
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
      <Footer ScrollLink={ScrollLink} />

      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 p-3 rounded-full bg-indigo-600 text-white shadow-lg z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiArrowUp size={24} />
        </motion.button>
      )}
    </div>
  );
}

export default App;
