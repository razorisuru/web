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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
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
                {/* Image container - takes up half the card */}
                <div className="relative overflow-hidden">
                    <div className="w-full h-48 md:h-56 lg:h-48 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Fade gradient at bottom of image */}
                    <div
                      className={`absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t ${
                        theme === "dark"
                          ? "from-gray-900/95 via-gray-900/60 to-transparent"
                          : "from-white/95 via-white/60 to-transparent"
                      }`}
                    ></div>
                    {/* Glass reflection on image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                <div className="p-4 pt-2">
                  <h3
                    className={`text-base font-semibold mb-1.5 transition-all duration-300 ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    } group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:bg-clip-text`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`text-sm mb-3 line-clamp-2 leading-snug transition-all duration-300 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-2 py-0.5 text-xs rounded-md font-medium transition-all duration-300 ${
                          theme === "dark"
                            ? "bg-indigo-500/10 text-indigo-400"
                            : "bg-indigo-500/10 text-indigo-600"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span
                        className={`px-2 py-0.5 text-xs rounded-md font-medium ${
                          theme === "dark"
                            ? "bg-gray-500/10 text-gray-400"
                            : "bg-gray-500/10 text-gray-500"
                        }`}
                      >
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <motion.a
                      href={project.link}
                      className={`flex items-center px-3 py-1.5 text-xs rounded-lg font-medium transition-all duration-300 ${
                        theme === "dark"
                          ? "bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30"
                          : "bg-indigo-500/20 text-indigo-600 hover:bg-indigo-500/30"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg
                        className="mr-1.5 w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                      Preview
                    </motion.a>

                    <motion.a
                      href={project.source}
                      className={`flex items-center px-3 py-1.5 text-xs rounded-lg font-medium transition-all duration-300 ${
                        theme === "dark"
                          ? "bg-gray-500/20 text-gray-400 hover:bg-gray-500/30"
                          : "bg-gray-500/20 text-gray-600 hover:bg-gray-500/30"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg
                        className="mr-1.5 w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Source
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
