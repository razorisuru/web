import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiMail,
  FiArrowUp,
  FiBook,
  FiBriefcase,
  FiServer,
  FiCode,
  FiScissors,
} from "react-icons/fi";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaPython,
  FaLaravel,
  FaJava,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiMysql,
  SiExpress,
} from "react-icons/si";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [visibleProjects, setVisibleProjects] = useState(4); // Show 4 projects initially

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Create a reusable ScrollLink component
  const ScrollLink = ({
    to,
    children,
    className,
    onClick,
    theme,
    ...props
  }) => {
    const handleClick = (e) => {
      e.preventDefault();

      // Execute any passed onClick handler first (like closing mobile menu)
      if (onClick) onClick(e);

      // Wait a brief moment for any UI changes (like menu closing) to complete
      setTimeout(() => {
        const targetElement = document.querySelector(to);
        if (targetElement) {
          const navbar = document.querySelector("nav");
          const navbarHeight = navbar ? navbar.offsetHeight : 80;
          const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.pageYOffset -
            navbarHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }, 100); // Small delay to allow menu to close
    };

    return (
      <a href={to} onClick={handleClick} className={className} {...props}>
        {children}
      </a>
    );
  };

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
      className={`min-h-screen transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-indigo-50 to-cyan-50 text-gray-900"
      }`}
    >
      <Navbar toggleTheme={toggleTheme} theme={theme} ScrollLink={ScrollLink} />
      <HeroSection theme={theme} id="hero" ScrollLink={ScrollLink} />
      <AboutSection theme={theme} id="about" />
      <SkillsSection theme={theme} id="skills" />
      <ResumeSection theme={theme} id="resume" ScrollLink={ScrollLink} />
      <ProjectsSection
        theme={theme}
        id="projects"
        visibleProjects={visibleProjects}
        loadMoreProjects={loadMoreProjects}
      />
      <ServicesSection theme={theme} id="services" ScrollLink={ScrollLink} />

      <ContactSection theme={theme} id="contact" />
      <Footer ScrollLink={ScrollLink} />

      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
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

// Navbar Component
const Navbar = ({ toggleTheme, theme, ScrollLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

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
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

// Hero Section Component
const HeroSection = ({ theme, id, ScrollLink }) => {
  return (
    <section id={id} className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-sm font-medium text-indigo-500 mb-2">
              Hello, I'm
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Isuru <span className="text-indigo-500">Bandara</span>
            </h1>
            <div className="text-xl md:text-2xl mb-6">
              <span className="inline-block mr-2">FullStack</span>
              <motion.span
                className="text-indigo-500 font-semibold inline-block"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Developer
              </motion.span>
            </div>
            <p
              className={`text-lg mb-8 max-w-lg ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I'm a Full Stack Developer specializing in Laravel and Node.js,
              building robust, scalable web applications from front to back. I
              focus on clean architecture, API development, and seamless
              integration of modern frontend frameworks. Passionate about
              problem-solving, performance optimization, and delivering
              user-focused solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ScrollLink
                  to="#contact"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow-lg"
                >
                  Get in Touch
                </ScrollLink>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ScrollLink
                  to="#projects"
                  className={`px-6 py-3 rounded-lg font-medium border ${
                    theme === "dark"
                      ? "border-gray-700 text-white"
                      : "border-gray-300 text-gray-900"
                  }`}
                >
                  View Projects
                </ScrollLink>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              {/* Enhanced glowing background */}
              <div
                className={`absolute inset-0 rounded-3xl blur-2xl transition-all duration-500 ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/30"
                    : "bg-gradient-to-br from-indigo-300/40 via-purple-300/30 to-pink-300/40"
                } group-hover:blur-3xl group-hover:scale-105`}
              ></div>

              {/* Secondary glow layer */}
              <div
                className={`absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
                    : "bg-gradient-to-r from-cyan-300/30 to-blue-300/30"
                }`}
              ></div>

              <div
                className={`relative rounded-3xl overflow-hidden backdrop-blur-lg border transition-all duration-500 ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 hover:border-white/20"
                    : "bg-white/20 border-white/30 hover:border-white/40"
                } shadow-2xl hover:shadow-3xl group-hover:scale-[1.02]`}
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[1px]">
                  <div
                    className={`w-full h-full rounded-3xl ${
                      theme === "dark" ? "bg-gray-900/95" : "bg-white/95"
                    } backdrop-blur-lg`}
                  ></div>
                </div>

                {/* Floating orbs inside container */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-pink-400/30 to-cyan-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10 rounded-3xl w-full h-80 md:h-96 overflow-hidden">
                  <img
                    src="/hero-bg.jpg"
                    alt="Hero background"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Image overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Glass reflection on image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Glass shine effect on container */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>

            <motion.div
              className={`absolute -bottom-4 -right-4 rounded-lg p-4 backdrop-blur-md ${
                theme === "dark"
                  ? "bg-gray-800/80 border-gray-700"
                  : "bg-white/80 border-gray-200"
              } border shadow-lg`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="flex items-center">
                <div className="bg-green-500 rounded-full h-5 w-5 mr-2"></div>
                <span className="text-sm font-medium">Available</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = ({ theme, id }) => {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            className="inline-block text-indigo-500 font-medium mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            My Journey
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-bold mb-4">Who I Am</h3>
            <p
              className={`mb-4 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              A highly motivated undergraduate student at the Sri Lanka
              International Buddhist Academy(SIBA Campus), with a strong
              foundation in software development. Equipped with robust problem
              solving skills and a passion for creative solutions, gained
              through extensive self-study and hands-on experience in various
              technologies. Currently seeking a Software Engineer position to
              leverage technical expertise and contribute to innovative
              projects.
            </p>
            <p
              className={`mb-6 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              My journey began in university where I discovered my love for
              coding and design. Since then, I've worked with startups and
              established companies to build digital products that users love.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                  <span className="font-medium">Full Name:</span>
                </div>
                <p>Isuru Bandara Weerakoon</p>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                  <span className="font-medium">Email:</span>
                </div>
                <p>isurubandara318@gmail.com</p>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                  <span className="font-medium">Birth Date:</span>
                </div>
                <p>January 08, 2001</p>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                  <span className="font-medium">Work:</span>
                </div>
                <p>SE Cybernetic Pvt Ltd</p>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                  <span className="font-medium">Location:</span>
                </div>
                <p>Kandy, Sri Lanka</p>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                  <span className="font-medium">Availability:</span>
                </div>
                <p>Full-time / Freelance</p>
              </div>
            </div>

            <motion.a
              href="/isuru-bandara-cv.pdf"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              whileHover={{ x: 10 }}
            >
              Download CV
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              className={`group relative p-6 rounded-3xl backdrop-blur-lg border transition-all duration-500 overflow-hidden cursor-pointer ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  : "bg-white/20 border-white/30 hover:bg-white/30 hover:border-white/40"
              } shadow-2xl hover:shadow-3xl`}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 p-[1px]">
                <div
                  className={`w-full h-full rounded-3xl ${
                    theme === "dark" ? "bg-gray-900/95" : "bg-white/95"
                  } backdrop-blur-lg`}
                ></div>
              </div>

              {/* Floating background orb */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <motion.div
                  className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  50+
                </motion.div>
                <h4
                  className={`text-lg font-semibold mb-1 transition-all duration-300 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  } group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:bg-clip-text`}
                >
                  Projects Completed
                </h4>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  } group-hover:text-opacity-90 transition-all duration-300`}
                >
                  Websites, apps, and designs
                </p>
              </div>

              {/* Glass shine effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>

            <motion.div
              className={`group relative p-6 rounded-3xl backdrop-blur-lg border transition-all duration-500 overflow-hidden cursor-pointer ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  : "bg-white/20 border-white/30 hover:bg-white/30 hover:border-white/40"
              } shadow-2xl hover:shadow-3xl`}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 p-[1px]">
                <div
                  className={`w-full h-full rounded-3xl ${
                    theme === "dark" ? "bg-gray-900/95" : "bg-white/95"
                  } backdrop-blur-lg`}
                ></div>
              </div>

              {/* Floating background orb */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <motion.div
                  className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  15+
                </motion.div>
                <h4
                  className={`text-lg font-semibold mb-1 transition-all duration-300 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  } group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text`}
                >
                  Happy Clients
                </h4>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  } group-hover:text-opacity-90 transition-all duration-300`}
                >
                  Worldwide satisfaction
                </p>
              </div>

              {/* Glass shine effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>

            <motion.div
              className={`group relative p-6 rounded-3xl backdrop-blur-lg border transition-all duration-500 overflow-hidden cursor-pointer ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  : "bg-white/20 border-white/30 hover:bg-white/30 hover:border-white/40"
              } shadow-2xl hover:shadow-3xl`}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 p-[1px]">
                <div
                  className={`w-full h-full rounded-3xl ${
                    theme === "dark" ? "bg-gray-900/95" : "bg-white/95"
                  } backdrop-blur-lg`}
                ></div>
              </div>

              {/* Floating background orb */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <motion.div
                  className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  5+
                </motion.div>
                <h4
                  className={`text-lg font-semibold mb-1 transition-all duration-300 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  } group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:bg-clip-text`}
                >
                  Years Experience
                </h4>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  } group-hover:text-opacity-90 transition-all duration-300`}
                >
                  Building digital products
                </p>
              </div>

              {/* Glass shine effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = ({ theme, id, ScrollLink }) => {
  const services = [
    {
      title: "Web Hosting",
      icon: <FiServer className="text-indigo-500" size={36} />,
      description:
        "Reliable, secure, and scalable web hosting solutions to keep your website online 24/7. I provide hosting services optimized for performance, with features like SSL support, regular backups, and fast load times. Whether you're launching a blog, business site, or web app, I ensure your content is delivered quickly and securely to users across the globe.",
    },
    {
      title: "Web Development",
      icon: <FiCode className="text-indigo-500" size={36} />,
      description:
        "As a skilled developer, I specialize in building robust, full-stack applications using technologies like Laravel, React, Node.js, and more. Whether it's a simple CRUD application, an AI-powered system, or a dynamic e-commerce platform, I ensure that every site I build is fast, secure, and scalable.",
    },
    {
      title: "Video Editing",
      icon: <FiScissors className="text-indigo-500" size={36} />,
      description:
        "With a creative mindset and attention to detail, I specialize in editing engaging and professional-quality videos that tell compelling stories. From promotional content and social media clips to tutorials and cinematic edits, I ensure each frame supports your message while enhancing visual appeal and brand consistency.",
    },
  ];

  const stats = [
    { value: 50, label: "PROJECTS COMPLETED", suffix: "+" },
    { value: 15, label: "HAPPY CLIENTS", suffix: "+" },
    { value: 5, label: "AWARDS RECEIVED", suffix: "+" },
    { value: 2500, label: "COFFEE CUPS", suffix: "" },
    { value: 7200, label: "HOURS WORKED", suffix: "+" },
    { value: 99, label: "CRAZY IDEAS", suffix: "%" },
  ];

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${
        theme === "dark" ? "bg-gray-800/30" : "bg-indigo-50/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            className="inline-block text-indigo-500 font-medium mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My Offerings
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            What Can I Do For You?
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`group relative p-8 rounded-3xl backdrop-blur-lg border transition-all duration-500 flex flex-col overflow-hidden ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  : "bg-white/20 border-white/30 hover:bg-white/30 hover:border-white/40"
              } shadow-2xl hover:shadow-3xl`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -15,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px]">
                <div
                  className={`w-full h-full rounded-3xl ${
                    theme === "dark" ? "bg-gray-900/90" : "bg-white/90"
                  } backdrop-blur-lg`}
                ></div>
              </div>

              {/* Floating orb background effect */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                <motion.div
                  className={`mb-6 p-6 rounded-2xl w-fit bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border ${
                    theme === "dark" ? "border-white/10" : "border-white/20"
                  }`}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-indigo-400 transform transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                </motion.div>

                <h3
                  className={`text-2xl font-bold mb-4 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  } group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300`}
                >
                  {service.title}
                </h3>

                <p
                  className={`mb-8 flex-grow leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  } group-hover:text-opacity-90 transition-all duration-300`}
                >
                  {service.description}
                </p>

                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <ScrollLink
                    to="#contact"
                    className={`inline-flex items-center font-semibold mt-auto px-4 py-2 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                      theme === "dark"
                        ? "text-indigo-400 border-indigo-400/30 hover:bg-indigo-400/10 hover:border-indigo-400/50"
                        : "text-indigo-600 border-indigo-600/30 hover:bg-indigo-600/10 hover:border-indigo-600/50"
                    }`}
                  >
                    Learn More
                    <motion.svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </motion.svg>
                  </ScrollLink>
                </motion.div>
              </div>

              {/* Glass shine effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Subtle grid pattern overlay */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, ${
                    theme === "dark" ? "white" : "black"
                  } 1px, transparent 0)`,
                  backgroundSize: "20px 20px",
                }}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-2xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My Journey in Numbers
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={`group relative p-6 rounded-3xl backdrop-blur-lg border transition-all duration-500 overflow-hidden ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                    : "bg-white/20 border-white/30 hover:bg-white/30 hover:border-white/40"
                } shadow-2xl hover:shadow-3xl cursor-pointer`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -12,
                  scale: 1.05,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 p-[1px]">
                  <div
                    className={`w-full h-full rounded-3xl ${
                      theme === "dark" ? "bg-gray-900/90" : "bg-white/90"
                    } backdrop-blur-lg`}
                  ></div>
                </div>

                {/* Floating background orbs */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10 text-center">
                  <motion.div
                    className="text-4xl font-bold mb-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300"
                    whileHover={{
                      textShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                    >
                      {stat.value}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                    >
                      {stat.suffix}
                    </motion.span>
                  </motion.div>

                  <motion.div
                    className={`text-sm font-semibold uppercase tracking-wider ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    } group-hover:text-opacity-90 transition-all duration-300`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {stat.label}
                  </motion.div>
                </div>

                {/* Glass shine effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Pulse effect on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse pointer-events-none"></div>

                {/* Subtle dot pattern */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, ${
                      theme === "dark" ? "white" : "black"
                    } 1px, transparent 0)`,
                    backgroundSize: "15px 15px",
                  }}
                ></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Skills Section Component
const SkillsSection = ({ theme, id }) => {
  const skills = [
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-500" size={32} />,
      level: 90,
    },
    {
      name: "React",
      icon: <FaReact className="text-blue-500" size={32} />,
      level: 95,
    },
    {
      name: "Laravel",
      icon: <FaLaravel className="text-red-600" size={32} />,
      level: 95,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-600" size={32} />,
      level: 80,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-gray-800" size={32} />,
      level: 90,
    },
    {
      name: "Spring Boot",
      icon: <FaJava className="text-orange-600" size={32} />,
      level: 75,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-blue-700" size={32} />,
      level: 78,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-700" size={32} />,
      level: 82,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-500" size={32} />,
      level: 92,
    },
    {
      name: "UI/UX Design",
      icon: <FaFigma className="text-purple-500" size={32} />,
      level: 88,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500" size={32} />,
      level: 75,
    },
    {
      name: "Python",
      icon: <FaPython className="text-blue-400" size={32} />,
      level: 70,
    },
  ];
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${
        theme === "dark" ? "bg-gray-800/30" : "bg-indigo-50/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            className="inline-block text-indigo-500 font-medium mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My Skills
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Technical Expertise
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`group relative p-6 rounded-3xl backdrop-blur-lg border transition-all duration-300 cursor-pointer ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  : "bg-white/20 border-white/30 hover:bg-white/30 hover:border-white/40"
              } shadow-2xl hover:shadow-3xl hover:scale-105`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              {/* Glowing border effect */}
              <div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${
                  skill.color || "from-indigo-500 to-purple-500"
                } p-[1px]`}
              >
                <div
                  className={`w-full h-full rounded-3xl ${
                    theme === "dark" ? "bg-gray-900/90" : "bg-white/90"
                  } backdrop-blur-lg`}
                ></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <motion.div
                    className={`mr-3 p-2 rounded-xl  text-gray shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3
                    className={`text-xl font-bold ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {skill.name}
                  </h3>
                </div>

                <div
                  className={`relative w-full rounded-full h-2.5 overflow-hidden ${
                    theme === "dark" ? "bg-gray-700/50" : "bg-gray-300/50"
                  } backdrop-blur-sm`}
                >
                  <motion.div
                    className={`h-2.5 rounded-full bg-gradient-to-r ${
                      skill.color || "from-indigo-500 to-purple-500"
                    } relative overflow-hidden`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{
                        duration: 2,
                        delay: 1,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </div>

                <div
                  className={`mt-2 text-right text-sm font-bold bg-gradient-to-r ${
                    skill.color || "from-indigo-500 to-purple-500"
                  } bg-clip-text text-transparent`}
                >
                  {skill.level}%
                </div>
              </div>

              {/* Glass reflection effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ResumeSection = ({ theme, id, ScrollLink }) => {
  const workExperience = [
    {
      title: "Software Engineer Intern",
      organization: "Cybernetics Pvt Ltd",
      period: "June 2025 - Present",
      description:
        "Started my internship as a Software Engineer at Cybernetic Pvt Ltd.",
      icon: <FiBriefcase className="text-indigo-500" size={20} />,
    },
    {
      title: "Peer Tutor",
      organization: "SIBA Campus (5st Lanka International Buddhist Academy)",
      period: "Oct 2024 - 2025",
      description:
        "Started my internship as a peer tutor at my campus, where I assist lecturers with teaching and guide students to achieve a deeper understanding of their subjects.",
      icon: <FiBriefcase className="text-indigo-500" size={20} />,
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "SIBA CAMPUS (Sri Lanka International Buddhist Academy)",
      period: "July 2022 – Present",
      description:
        "SIBA Campus is a unique liberal arts higher education institution set in a monastic and eco-friendly environment. Rooted in Buddhist principles, it aims to cultivate local and global leaders with strong academic and ethical foundations.",
      icon: <FiBook className="text-indigo-500" size={20} />,
    },
    {
      degree: "Ordinary Level & Advanced Level",
      institution: "Kurunduwaththa Royal College",
      period: "2016 – 2019",
      description:
        "A multicultural institution that promotes the free exchange of ideas and diversity. Known for its rich traditions and innovative approach to excellence in education.",
      icon: <FiBook className="text-indigo-500" size={20} />,
    },
  ];

  return (
    <section id={id} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            className="inline-block text-indigo-500 font-medium mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My Credentials
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Resume
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center mb-8">
              <motion.div
                className={`p-4 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 text-indigo-400"
                    : "bg-white/20 border-white/20 text-indigo-600"
                } mr-4 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <FiBriefcase size={24} />
              </motion.div>
              <h3
                className={`text-2xl font-bold ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                Work Experience
              </h3>
            </div>

            <div className="relative pl-8 ml-4">
              {/* Enhanced timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>

              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  className={`group relative mb-10 rounded-3xl p-6 backdrop-blur-lg border transition-all duration-500 overflow-hidden ${
                    theme === "dark"
                      ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                      : "bg-white/20 border-white/30 hover:bg-white/30 hover:border-white/40"
                  } shadow-2xl hover:shadow-3xl`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    x: 10,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[1px]">
                    <div
                      className={`w-full h-full rounded-3xl ${
                        theme === "dark" ? "bg-gray-900/95" : "bg-white/95"
                      } backdrop-blur-lg`}
                    ></div>
                  </div>

                  {/* Floating background orbs */}
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Enhanced timeline dot */}
                  <motion.div
                    className="absolute -left-[2.75rem] top-6 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </motion.div>

                  <div className="relative z-10">
                    <div className="flex items-start mb-4">
                      <motion.div
                        className={`p-3 rounded-xl backdrop-blur-sm border ${
                          theme === "dark"
                            ? "bg-white/5 border-white/10"
                            : "bg-white/20 border-white/20"
                        }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {job.icon}
                      </motion.div>
                      <div className="ml-4">
                        <h4
                          className={`text-xl font-bold transition-all duration-300 ${
                            theme === "dark" ? "text-white" : "text-gray-800"
                          } group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:bg-clip-text`}
                        >
                          {job.title}
                        </h4>
                        <p className="text-indigo-500 font-semibold">
                          {job.organization}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`text-sm px-4 py-2 rounded-full inline-block mb-4 backdrop-blur-sm border ${
                        theme === "dark"
                          ? "bg-white/5 border-white/10 text-indigo-400"
                          : "bg-white/20 border-white/20 text-indigo-600"
                      }`}
                    >
                      {job.period}
                    </div>

                    <p
                      className={`leading-relaxed ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      } group-hover:text-opacity-90 transition-all duration-300`}
                    >
                      {job.description}
                    </p>
                  </div>

                  {/* Glass shine effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center mb-8">
              <motion.div
                className={`p-4 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 text-indigo-400"
                    : "bg-white/20 border-white/20 text-indigo-600"
                } mr-4 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <FiBook size={24} />
              </motion.div>
              <h3
                className={`text-2xl font-bold ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                Education
              </h3>
            </div>

            <div className="relative pl-8 ml-4">
              {/* Enhanced timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className={`group relative mb-10 rounded-3xl p-6 backdrop-blur-lg border transition-all duration-500 overflow-hidden ${
                    theme === "dark"
                      ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                      : "bg-white/20 border-white/30 hover:bg-white/30 hover:border-white/40"
                  } shadow-2xl hover:shadow-3xl`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    x: -10,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[1px]">
                    <div
                      className={`w-full h-full rounded-3xl ${
                        theme === "dark" ? "bg-gray-900/95" : "bg-white/95"
                      } backdrop-blur-lg`}
                    ></div>
                  </div>

                  {/* Floating background orbs */}
                  <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Enhanced timeline dot */}
                  <motion.div
                    className="absolute -left-[2.75rem] top-6 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </motion.div>

                  <div className="relative z-10">
                    <div className="flex items-start mb-4">
                      <motion.div
                        className={`p-3 rounded-xl backdrop-blur-sm border ${
                          theme === "dark"
                            ? "bg-white/5 border-white/10"
                            : "bg-white/20 border-white/20"
                        }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {edu.icon}
                      </motion.div>
                      <div className="ml-4">
                        <h4
                          className={`text-xl font-bold transition-all duration-300 ${
                            theme === "dark" ? "text-white" : "text-gray-800"
                          } group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text`}
                        >
                          {edu.degree}
                        </h4>
                        <p className="text-indigo-500 font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`text-sm px-4 py-2 rounded-full inline-block mb-4 backdrop-blur-sm border ${
                        theme === "dark"
                          ? "bg-white/5 border-white/10 text-indigo-400"
                          : "bg-white/20 border-white/20 text-indigo-600"
                      }`}
                    >
                      {edu.period}
                    </div>

                    <p
                      className={`leading-relaxed ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      } group-hover:text-opacity-90 transition-all duration-300`}
                    >
                      {edu.description}
                    </p>
                  </div>

                  {/* Glass shine effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="/isuru-bandara-cv.pdf"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Download Full Resume
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Projects Section Component
const ProjectsSection = ({ theme, id, visibleProjects, loadMoreProjects }) => {
  const allProjects = [
    {
      title: "Learning Materials Management System",
      description:
        "A Laravel-based project that facilitates efficient organization, management, and retrieval of educational resources for students and lecturers. It includes features like user management, file categorization, and secure access control.",
      tags: ["PHP", "Laravel", "MYSQL"],
      link: "https://github.com/razorisuru/Campus-Material-Library-Management-System",
      image: "/placeholder-image.png",
    },
    {
      title: "To-Do List App (MERN Stack)",
      description:
        "A feature-rich to-do list application developed using the MERN stack (MongoDB, Express.js, React, Node.js). The app offers functionalities such as task creation, updating, and deletion, ensuring seamless task management.",
      tags: ["NodeJS", "ReactJS", "ExpressJS", "MongoDB"],
      link: "https://github.com/razorisuru/To-Do-List-App-MERN-STACK",
      image: "/placeholder-image.png",
    },
    {
      title: "Spring Boot API Application",
      description:
        "A robust API developed using Spring Boot, featuring full CRUD functionality. This project demonstrates proficiency in RESTful API design, database integration, and efficient backend development.",
      tags: ["JAVA", "Springboot", "MYSQL"],
      link: "https://github.com/razorisuru/Springboot-CRUD-App-API",
      image: "/placeholder-image.png",
    },
    {
      title: "Angular CRUD with Laravel API",
      description:
        "A full-stack project combining Angular for the frontend and Laravel for the backend. It implements CRUD operations, showcasing seamless integration and efficient communication between the client and server.",
      tags: ["AngularJS", "Laravel", "API"],
      link: "https://github.com/razorisuru/Angular-crud-laravel-API",
      image: "/placeholder-image.png",
    },
    {
      title: "Airplane Tickets Project",
      description:
        "A project designed to manage and streamline airplane ticket bookings. It incorporates user-friendly features for searching flights, booking tickets, and managing reservations.",
      tags: ["JAVA", "JSP/SERVLET", "MYSQL"],
      link: "https://github.com/razorisuru/Airplane-Tickets-Project",
      image: "/placeholder-image.png",
    },
    {
      title: "Shopping Cart",
      description:
        "The ShoppingCart package provides a simple and flexible solution for managing a shopping cart in Laravel applications.",
      tags: ["PHP", "Laravel", "Library"],
      link: "https://github.com/razorisuru/shopping-cart",
      image: "/placeholder-image.png",
    },
    {
      title: "RaZoR Music",
      description: "Platform for online muisc with video streaming.",
      tags: ["HTML", "JAVASCRIPT", "Music"],
      link: "https://music.razorisuru.com/",
      image: "/placeholder-image.png",
    },
    {
      title: "ASP.NET-MVC-CRUD",
      description: "Platform for online muisc with video streaming.",
      tags: ["C#", "MVC", "MYSQL"],
      link: "https://github.com/razorisuru/ASP.NET-MVC-CRUD",
      image: "/placeholder-image.png",
    },
  ];

  const projectsToShow = allProjects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < allProjects.length;

  return (
    <section id={id} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            className="inline-block text-indigo-500 font-medium mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My Work
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Featured Projects
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsToShow.map((project, index) => (
            <motion.div
              key={index}
              className={`group relative rounded-3xl overflow-hidden backdrop-blur-lg border transition-all duration-500 ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20"
                  : "bg-white/20 border-white/30 hover:bg-white/30 hover:border-white/40"
              } shadow-2xl hover:shadow-3xl`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -15,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[1px]">
                <div
                  className={`w-full h-full rounded-3xl ${
                    theme === "dark" ? "bg-gray-900/95" : "bg-white/95"
                  } backdrop-blur-lg`}
                ></div>
              </div>

              {/* Floating background orbs */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-12 -left-12 w-20 h-20 bg-gradient-to-br from-pink-400/20 to-cyan-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                {/* Image container with enhanced glass effect */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Image overlay with glass effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Glass reflection on image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-3 transition-all duration-300 ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    } group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:bg-clip-text`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`mb-6 leading-relaxed transition-all duration-300 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    } group-hover:text-opacity-90`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className={`px-3 py-1 text-sm rounded-full backdrop-blur-sm border transition-all duration-300 ${
                          theme === "dark"
                            ? "bg-white/5 border-white/10 text-indigo-400 hover:bg-white/10 hover:border-indigo-400/30"
                            : "bg-white/20 border-white/20 text-indigo-600 hover:bg-white/30 hover:border-indigo-600/30"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.link}
                      className={`group/link flex items-center px-4 py-2 rounded-full backdrop-blur-sm border font-medium transition-all duration-300 ${
                        theme === "dark"
                          ? "text-indigo-400 border-indigo-400/30 hover:bg-indigo-400/10 hover:border-indigo-400/50"
                          : "text-indigo-600 border-indigo-600/30 hover:bg-indigo-600/10 hover:border-indigo-600/50"
                      }`}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      View Project
                      <motion.svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </motion.svg>
                    </motion.a>

                    <motion.a
                      href={project.link}
                      className={`group/link flex items-center px-4 py-2 rounded-full backdrop-blur-sm border font-medium transition-all duration-300 ${
                        theme === "dark"
                          ? "text-gray-400 border-gray-400/30 hover:bg-gray-400/10 hover:border-gray-400/50 hover:text-gray-300"
                          : "text-gray-600 border-gray-600/30 hover:bg-gray-600/10 hover:border-gray-600/50 hover:text-gray-500"
                      }`}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Source Code
                      <motion.svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        ></path>
                      </motion.svg>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Glass shine effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, ${
                    theme === "dark" ? "white" : "black"
                  } 1px, transparent 0)`,
                  backgroundSize: "20px 20px",
                }}
              ></div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          {hasMoreProjects && (
            <motion.button
              onClick={loadMoreProjects}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Projects
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = ({ theme, id }) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${
        theme === "dark" ? "bg-gray-800/30" : "bg-indigo-50/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            className="inline-block text-indigo-500 font-medium mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Contact Me
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              Let's Talk About Your Project
            </h3>
            <p
              className={`mb-8 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out using the contact form or through my social
              media profiles.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div
                    className={`p-3 rounded-lg ${
                      theme === "dark" ? "bg-gray-800" : "bg-indigo-100"
                    } text-indigo-500`}
                  >
                    <FiMail size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium mb-1">Mobile</h4>
                  <a
                    className={`${
                      theme === "dark"
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    0766008527
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div
                    className={`p-3 rounded-lg ${
                      theme === "dark" ? "bg-gray-800" : "bg-indigo-100"
                    } text-indigo-500`}
                  >
                    <FiMail size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <a
                    href="mailto:isurubandara318@gmail.com"
                    className={`${
                      theme === "dark"
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    isurubandara318@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div
                    className={`p-3 rounded-lg ${
                      theme === "dark" ? "bg-gray-800" : "bg-indigo-100"
                    } text-indigo-500`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <p
                    className={`${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Kandy, Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/razorisuru"
                  className={`p-3 rounded-full ${
                    theme === "dark"
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-indigo-100 hover:bg-indigo-200"
                  } text-indigo-500`}
                  whileHover={{ y: -5 }}
                >
                  <FiGithub size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/razor-isuru/"
                  className={`p-3 rounded-full ${
                    theme === "dark"
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-indigo-100 hover:bg-indigo-200"
                  } text-indigo-500`}
                  whileHover={{ y: -5 }}
                >
                  <FiLinkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://twitter.com/razorisuru"
                  className={`p-3 rounded-full ${
                    theme === "dark"
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-indigo-100 hover:bg-indigo-200"
                  } text-indigo-500`}
                  whileHover={{ y: -5 }}
                >
                  <FiTwitter size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className={`group relative rounded-3xl p-8 backdrop-blur-lg border transition-all duration-500 overflow-hidden ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20"
                  : "bg-white/20 border-white/30 hover:bg-white/30 hover:border-white/40"
              } shadow-2xl hover:shadow-3xl`}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px]">
                <div
                  className={`w-full h-full rounded-3xl ${
                    theme === "dark" ? "bg-gray-900/95" : "bg-white/95"
                  } backdrop-blur-lg`}
                ></div>
              </div>

              {/* Floating background orbs */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-br from-pink-400/20 to-cyan-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                <form>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className={`block text-sm font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className={`w-full px-4 py-3 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
                          theme === "dark"
                            ? "bg-white/5 border-white/10 text-white placeholder-gray-400 focus:bg-white/10 focus:border-indigo-400/50"
                            : "bg-white/30 border-white/20 text-gray-800 placeholder-gray-500 focus:bg-white/50 focus:border-indigo-500/50"
                        } focus:ring-2 focus:ring-indigo-500/30 focus:border-transparent shadow-lg`}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className={`block text-sm font-semibold mb-2 ${
                          theme === "dark" ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className={`w-full px-4 py-3 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
                          theme === "dark"
                            ? "bg-white/5 border-white/10 text-white placeholder-gray-400 focus:bg-white/10 focus:border-indigo-400/50"
                            : "bg-white/30 border-white/20 text-gray-800 placeholder-gray-500 focus:bg-white/50 focus:border-indigo-500/50"
                        } focus:ring-2 focus:ring-indigo-500/30 focus:border-transparent shadow-lg`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className={`block text-sm font-semibold mb-2 ${
                        theme === "dark" ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className={`w-full px-4 py-3 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
                        theme === "dark"
                          ? "bg-white/5 border-white/10 text-white placeholder-gray-400 focus:bg-white/10 focus:border-indigo-400/50"
                          : "bg-white/30 border-white/20 text-gray-800 placeholder-gray-500 focus:bg-white/50 focus:border-indigo-500/50"
                      } focus:ring-2 focus:ring-indigo-500/30 focus:border-transparent shadow-lg`}
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className={`block text-sm font-semibold mb-2 ${
                        theme === "dark" ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className={`w-full px-4 py-3 rounded-xl backdrop-blur-sm border transition-all duration-300 resize-none ${
                        theme === "dark"
                          ? "bg-white/5 border-white/10 text-white placeholder-gray-400 focus:bg-white/10 focus:border-indigo-400/50"
                          : "bg-white/30 border-white/20 text-gray-800 placeholder-gray-500 focus:bg-white/50 focus:border-indigo-500/50"
                      } focus:ring-2 focus:ring-indigo-500/30 focus:border-transparent shadow-lg`}
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="relative w-full px-6 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white font-semibold rounded-xl backdrop-blur-sm border border-indigo-500/20 shadow-2xl overflow-hidden group"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                    <span className="relative z-10">Send Message</span>

                    {/* Button glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                  </motion.button>
                </form>
              </div>

              {/* Glass shine effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, ${
                    theme === "dark" ? "white" : "black"
                  } 1px, transparent 0)`,
                  backgroundSize: "20px 20px",
                }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = ({ ScrollLink }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-xl font-bold mb-2">
              <ScrollLink to="#hero" className="cursor-pointer">
                <img
                  src="/RAZOR2.png"
                  alt="Hero background"
                  className="w-10 h-10 object-cover"
                />
              </ScrollLink>
            </div>
            <p className="text-sm text-gray-500">
              © {currentYear} Isuru Bandara. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/razorisuru"
              target="_blank"
              className="text-gray-500 hover:text-indigo-500"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/razor-isuru/"
              target="_blank"
              className="text-gray-500 hover:text-indigo-500"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/razorisuru"
              target="_blank"
              className="text-gray-500 hover:text-indigo-500"
            >
              <FiTwitter size={20} />
            </a>
            <a
              href="https://www.youtube.com/@razor_dev"
              target="_blank"
              className="text-gray-500 hover:text-indigo-500"
            >
              <FiYoutube size={20} />
            </a>
            <a
              href="https://www.facebook.com/razor.isuru"
              target="_blank"
              className="text-gray-500 hover:text-indigo-500"
            >
              <FiFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/razor_isuru"
              target="_blank"
              className="text-gray-500 hover:text-indigo-500"
            >
              <FiInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;
