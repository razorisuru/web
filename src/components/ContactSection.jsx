import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import ContactForm from "./ContactForm";

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
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
          >
            Get In Touch
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.25 }}
          >
            Contact Me
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div
              className={`group relative rounded-3xl p-8 backdrop-blur-lg border transition-all duration-200 overflow-hidden ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20"
                  : "bg-white/20 border-white/30 hover:bg-white/30 hover:border-white/40"
              } shadow-2xl hover:shadow-3xl`}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px]">
                <div
                  className={`w-full h-full rounded-3xl ${
                    theme === "dark" ? "bg-gray-900/95" : "bg-white/95"
                  } backdrop-blur-lg`}
                ></div>
              </div>

              {/* Floating background orbs */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-br from-pink-400/20 to-cyan-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <ContactForm theme={theme} />
              </div>

              {/* Glass shine effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></div>

              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-200 pointer-events-none"
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

export default ContactSection;
