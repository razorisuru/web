import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiBook, FiCheckCircle, FiMapPin, FiCalendar, FiAward } from "react-icons/fi";

const ResumeSection = ({ theme, id, ScrollLink }) => {
  const workExperience = [
    {
      title: "Associate Software Engineer",
      organization: "Cybernetic Technologies (Pvt) Ltd",
      url: "https://cybernetic.lk",
      period: "Dec 2025 – Present",
      description:
        "Develop and enhance full-stack web and mobile applications using modern frameworks. Contribute to system enhancements, API development, and database integration while collaborating with cross-functional teams to deliver scalable, production-ready solutions.",
      status: "current",
    },
    {
      title: "Intern Software Engineer",
      organization: "Cybernetic Technologies (Pvt) Ltd",
      url: "https://cybernetic.lk",
      period: "Jun 2025 – Dec 2025",
      description:
        "Built and maintained client-based web applications using PHP, JavaScript, HTML, CSS, and MySQL. Assisted in debugging, testing, and performance optimization while participating in code reviews, technical discussions, and system demonstrations, leading to promotion upon completion.",
      status: "completed",
    },
    {
      title: "Peer Tutor",
      organization: "SIBA Campus (Sri Lanka International Buddhist Academy)",
      url: "https://siba.edu.lk",
      period: "Oct 2024 - 2025",
      description:
        "Started my internship as a peer tutor at my campus, where I assist lecturers with teaching and guide students to achieve a deeper understanding of their subjects.",
      status: "completed",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "SIBA CAMPUS (Sri Lanka International Buddhist Academy)",
      period: "2022 – 2025",
      description:
        "Graduated with a First Class Honors degree, achieving a GPA of 3.76, and developed strong skills across modern information technology disciplines.",
      achievement: "First Class Honors | GPA: 3.76",
    },
    {
      degree: "Ordinary Level & Advanced Level",
      institution: "Kurunduwaththa Royal College",
      period: "2015 – 2019",
      description:
        "A multicultural institution that promotes the free exchange of ideas and diversity. Known for its rich traditions and innovative approach to excellence in education.",
      achievement: "Completed Successfully",
    },
  ];

  return (
    <section id={id} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            className="inline-block text-indigo-500 font-medium mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
          >
            My Credentials
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.25 }}
          >
            Resume
          </motion.h2>
        </div>

        {/* Work Experience Section - Full Width Stepper */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {/* Section Header */}
          <div className="flex items-center justify-center mb-12">
            <motion.div
              className={`p-4 rounded-2xl backdrop-blur-sm border transition-all duration-200 ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 text-indigo-400"
                  : "bg-white/20 border-white/20 text-indigo-600"
              } mr-4 shadow-lg`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.15 }}
            >
              <FiBriefcase size={28} />
            </motion.div>
            <h3
              className={`text-2xl md:text-3xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Work Experience
            </h3>
          </div>

          {/* Stepper Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>

            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                {/* Step Number Circle */}
                <motion.div
                  className={`absolute left-8 md:left-1/2 -translate-x-1/2 z-20 w-16 h-16 rounded-full flex items-center justify-center shadow-xl ${
                    job.status === "current"
                      ? "bg-gradient-to-br from-indigo-500 to-purple-600"
                      : theme === "dark"
                      ? "bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-indigo-500/50"
                      : "bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-indigo-500/50"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {job.status === "current" ? (
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  ) : (
                    <FiCheckCircle
                      className={`${
                        theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                      }`}
                      size={28}
                    />
                  )}
                  {job.status === "current" && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></span>
                  )}
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className={`group ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`relative rounded-2xl p-6 backdrop-blur-lg border transition-all duration-300 overflow-hidden ${
                      theme === "dark"
                        ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-indigo-500/50"
                        : "bg-white/40 border-white/50 hover:bg-white/60 hover:border-indigo-500/50"
                    } shadow-xl hover:shadow-2xl`}
                  >
                    {/* Current Badge */}
                    {job.status === "current" && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                          Current
                        </span>
                      </div>
                    )}

                    {/* Job Title */}
                    <h4
                      className={`text-xl font-bold mb-2 pr-16 ${
                        theme === "dark" ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {job.title}
                    </h4>

                    {/* Organization */}
                    <a
                      href={job.url}
                      className="inline-flex items-center text-indigo-500 font-semibold hover:text-indigo-400 transition-colors mb-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiMapPin className="mr-1" size={14} />
                      {job.organization}
                    </a>

                    {/* Period */}
                    <div
                      className={`inline-flex items-center text-sm px-3 py-1.5 rounded-full mb-4 ml-3 ${
                        theme === "dark"
                          ? "bg-indigo-500/20 text-indigo-300"
                          : "bg-indigo-100 text-indigo-700"
                      }`}
                    >
                      <FiCalendar className="mr-1.5" size={12} />
                      {job.period}
                    </div>

                    {/* Description */}
                    <p
                      className={`text-sm leading-relaxed ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {job.description}
                    </p>

                    {/* Decorative gradient */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
                        job.status === "current"
                          ? "from-indigo-500 via-purple-500 to-pink-500"
                          : "from-gray-400 to-gray-500 opacity-30"
                      }`}
                    ></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section - Card List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {/* Section Header */}
          <div className="flex items-center justify-center mb-10">
            <motion.div
              className={`p-4 rounded-2xl backdrop-blur-sm border transition-all duration-200 ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 text-purple-400"
                  : "bg-white/20 border-white/20 text-purple-600"
              } mr-4 shadow-lg`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.15 }}
            >
              <FiBook size={28} />
            </motion.div>
            <h3
              className={`text-2xl md:text-3xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Education
            </h3>
          </div>

          {/* Education Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className={`group relative rounded-2xl p-6 backdrop-blur-lg border transition-all duration-300 overflow-hidden ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/50"
                    : "bg-white/40 border-white/50 hover:bg-white/60 hover:border-purple-500/50"
                } shadow-xl hover:shadow-2xl`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ y: -5 }}
              >
                {/* Top Gradient Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"></div>

                {/* Icon & Achievement Badge */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className={`p-3 rounded-xl ${
                      theme === "dark"
                        ? "bg-purple-500/20 text-purple-400"
                        : "bg-purple-100 text-purple-600"
                    }`}
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiBook size={24} />
                  </motion.div>
                  <div
                    className={`flex items-center px-3 py-1.5 rounded-full text-xs font-medium ${
                      theme === "dark"
                        ? "bg-amber-500/20 text-amber-300"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    <FiAward className="mr-1" size={12} />
                    {edu.achievement}
                  </div>
                </div>

                {/* Degree */}
                <h4
                  className={`text-lg font-bold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  {edu.degree}
                </h4>

                {/* Institution */}
                <p className="text-purple-500 font-semibold text-sm mb-2">
                  {edu.institution}
                </p>

                {/* Period */}
                <div
                  className={`inline-flex items-center text-xs px-2.5 py-1 rounded-full mb-3 ${
                    theme === "dark"
                      ? "bg-white/10 text-gray-300"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <FiCalendar className="mr-1" size={10} />
                  {edu.period}
                </div>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {edu.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
              target="_blank"
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
