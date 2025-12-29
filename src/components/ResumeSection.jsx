import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiBook } from "react-icons/fi";

const ResumeSection = ({ theme, id, ScrollLink }) => {
  const workExperience = [
    {
      title: "Associate Software Engineer",
      organization: "Cybernetic Technologies (Pvt) Ltd",
      url: "https://cybernetic.lk",
      period: "Dec 2025 – Present",
      description:
        "Develop and enhance full-stack web and mobile applications using modern frameworks. Contribute to system enhancements, API development, and database integration while collaborating with cross-functional teams to deliver scalable, production-ready solutions.",
      icon: <FiBriefcase className="text-indigo-500" size={20} />,
    },
    {
      title: "Intern Software Engineer",
      organization: "Cybernetic Technologies (Pvt) Ltd",
      url: "https://cybernetic.lk",
      period: "Jun 2025 – Dec 2025",
      description:
        "Built and maintained client-based web applications using PHP, JavaScript, HTML, CSS, and MySQL. Assisted in debugging, testing, and performance optimization while participating in code reviews, technical discussions, and system demonstrations, leading to promotion upon completion.",
      icon: <FiBriefcase className="text-indigo-500" size={20} />,
    },
    {
      title: "Peer Tutor",
      organization: "SIBA Campus (Sri Lanka International Buddhist Academy)",
      url: "https://siba.edu.lk",
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
      period: "2022 – 2025",
      description:
        "Graduated with a First Class Honors degree, achieving a GPA of 3.76, and developed strong skills across modern information technology disciplines.",
      icon: <FiBook className="text-indigo-500" size={20} />,
    },
    {
      degree: "Ordinary Level & Advanced Level",
      institution: "Kurunduwaththa Royal College",
      period: "2015 – 2019",
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
                        <a href={job.url} className="text-indigo-500 font-semibold" target="_blank" rel="noopener noreferrer">
                          {job.organization}
                        </a>
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

export default ResumeSection;
