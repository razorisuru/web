import React from "react";
import { motion } from "framer-motion";
import { allProjects } from "../data/projects";

const ProjectsSection = ({ theme, id, visibleProjects, loadMoreProjects }) => {
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

                  <div className="flex gap-2">
                    <motion.a
                      href={project.link}
                      className={`group/link flex items-center px-3 py-1.5 text-sm rounded-full backdrop-blur-sm border font-medium transition-all duration-300 ${
                        theme === "dark"
                          ? "text-indigo-400 border-indigo-400/30 hover:bg-indigo-400/10 hover:border-indigo-400/50"
                          : "text-indigo-600 border-indigo-600/30 hover:bg-indigo-600/10 hover:border-indigo-600/50"
                      }`}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      View Project
                      <motion.svg
                        className="ml-1.5 w-3 h-3"
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
                      href={project.source}
                      className={`group/link flex items-center px-3 py-1.5 text-sm rounded-full backdrop-blur-sm border font-medium transition-all duration-300 ${
                        theme === "dark"
                          ? "text-gray-400 border-gray-400/30 hover:bg-gray-400/10 hover:border-gray-400/50 hover:text-gray-300"
                          : "text-gray-600 border-gray-600/30 hover:bg-gray-600/10 hover:border-gray-600/50 hover:text-gray-500"
                      }`}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Source Code
                      <motion.svg
                        className="ml-1.5 w-3 h-3"
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

export default ProjectsSection;
