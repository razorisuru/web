import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollLink from "./ScrollLink";
import { navLinks } from "../data/navLinks";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

const Navbar = ({ toggleTheme, theme, themeMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

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

  const themeIcon =
    themeMode === "dark" ? (
      <FiMoon size={16} />
    ) : themeMode === "light" ? (
      <FiSun size={16} />
    ) : (
      <FiMonitor size={16} />
    );

  const themeLabel =
    themeMode === "dark" ? "Dark" : themeMode === "light" ? "Light" : "Auto";

  return (
    <motion.nav
      className={`fixed w-full z-50 backdrop-blur-md ${
        theme === "dark" ? "bg-gray-900/80" : "bg-white/80"
      } border-b ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.div
              className="text-2xl font-bold"
              whileHover={{ scale: 1.15 }}
            >
              <ScrollLink to="#hero" className="cursor-pointer">
                {/* <span className="text-indigo-500">R</span>I */}
                <img
                  src="/RAZOR2.png"
                  alt="Hero background"
                  className="w-13 h-13 object-cover"
                />
              </ScrollLink>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <motion.div
                  key={link.name}
                  whileHover={{ y: -2 }}
                  className="relative"
                >
                  <ScrollLink
                    to={link.href}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-indigo-500"
                        : theme === "dark"
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </ScrollLink>
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-500 rounded-full"
                      layoutId="activeNavIndicator"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.div>
              );
            })}

            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full flex items-center gap-1.5 text-xs font-medium transition-colors duration-200 ${
                theme === "dark"
                  ? "bg-gray-800 text-gray-300 hover:text-white"
                  : "bg-gray-200 text-gray-600 hover:text-gray-900"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              title={`Theme: ${themeLabel}`}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={themeMode}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {themeIcon}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                theme === "dark"
                  ? "bg-gray-800 text-gray-300"
                  : "bg-gray-200 text-gray-600"
              }`}
              whileTap={{ scale: 0.9 }}
            >
              {themeIcon}
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                theme === "dark"
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div
              className={`px-2 pt-2 pb-3 space-y-1 ${
                theme === "dark" ? "bg-gray-900" : "bg-white"
              }`}
            >
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <ScrollLink
                    key={link.name}
                    to={link.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-indigo-500 bg-indigo-500/10"
                        : theme === "dark"
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </ScrollLink>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
