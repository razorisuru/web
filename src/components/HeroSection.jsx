import React from "react";
import { motion } from "framer-motion";
import ScrollLink from "./ScrollLink";

const HeroSection = ({ theme, id }) => {
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

export default HeroSection;
