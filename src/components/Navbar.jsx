import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollLink from "./ScrollLink";
import { navLinks } from "../data/navLinks";

const Navbar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className={`fixed w-full z-50 backdrop-blur-md ${
        theme === "dark" ? "bg-gray-900/80" : "bg-white/80"
      } border-b ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
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
            {navLinks.map((link) => (
              <motion.div key={link.name} whileHover={{ y: -2 }}>
                <ScrollLink
                  to={link.href}
                  className={`text-sm font-medium ${
                    theme === "dark"
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                </ScrollLink>
              </motion.div>
            ))}

            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                theme === "dark"
                  ? "bg-gray-800 text-yellow-400"
                  : "bg-gray-200 text-gray-700"
              }`}
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center">
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
      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div
            className={`px-2 pt-2 pb-3 space-y-1 ${
              theme === "dark" ? "bg-gray-900" : "bg-white"
            }`}
          >
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  theme === "dark"
                    ? "text-gray-300 hover:bg-gray-800"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </ScrollLink>
            ))}

            <div className="px-3 py-2">
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-md flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-gray-800 text-yellow-400"
                    : "bg-gray-200 text-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {theme === "dark" ? "☀️" : "🌙 "}
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
