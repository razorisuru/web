import React from "react";
import { motion } from "framer-motion";

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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

export default AboutSection;
