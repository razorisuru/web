import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

const SkillsSection = ({ theme, id }) => {
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
            My Skills
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.25 }}
          >
            Technical Expertise
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`group relative p-6 rounded-3xl backdrop-blur-lg border transition-all duration-200 cursor-pointer ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  : "bg-white/20 border-white/30 hover:bg-white/30 hover:border-white/40"
              } shadow-2xl hover:shadow-3xl hover:scale-105`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.15 },
              }}
            >
              {/* Glowing border effect */}
              <div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-r ${
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
                    transition={{ duration: 0.15 }}
                  >
                    {skill.needsTheme ? skill.icon(theme) : skill.icon}
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
                    transition={{ duration: 0.6, delay: 0.2 }}
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
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
