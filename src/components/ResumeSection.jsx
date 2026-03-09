import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiBook, FiCheckCircle, FiMapPin, FiCalendar, FiAward } from "react-icons/fi";

const ResumeSection = ({ theme, id, ScrollLink }) => {
  const workExperience = [
    {
      title: "Software Engineer",
      organization: "360 Productions Group (pvt) Ltd.",
      url: "https://360productionsgroup.co.uk/",
      period: "Feb 2026 – Present",
      description:
        "Develop and enhance full-stack web and mobile applications using modern frameworks. Contribute to system enhancements, API development, and database integration while collaborating with cross-functional teams to deliver scalable, production-ready solutions.",
      status: "current",
    },
    {
      title: "Associate Software Engineer",
      organization: "Cybernetic Technologies (Pvt) Ltd",
      url: "https://cybernetic.lk",
      period: "Dec 2025 – Feb 2026",
      description:
        "Develop and enhance full-stack web and mobile applications using modern frameworks. Contribute to system enhancements, API development, and database integration while collaborating with cross-functional teams to deliver scalable, production-ready solutions.",
      status: "completed",
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
    <section id={id} className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-block text-indigo-500 font-medium mb-1 text-sm"
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

        {/* Two-Column Layout: Work Experience + Education */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Work Experience - Left Column (3/5) */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {/* Section Header */}
            <div className="flex items-center mb-7">
              <motion.div
                className={`p-3 rounded-xl backdrop-blur-sm border transition-all duration-200 ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 text-indigo-400"
                    : "bg-white/20 border-white/20 text-indigo-600"
                } mr-3 shadow-md`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.15 }}
              >
                <FiBriefcase size={22} />
              </motion.div>
              <h3
                className={`text-2xl font-bold ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                Work Experience
              </h3>
            </div>

            {/* Compact Timeline */}
            <div className="relative pl-10">
              {/* Connecting Line */}
              <div className="absolute left-[13px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>

              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  className={`relative mb-5 last:mb-0`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute -left-10 top-4 z-10 w-7 h-7 rounded-full flex items-center justify-center shadow-md ${
                      job.status === "current"
                        ? "bg-gradient-to-br from-indigo-500 to-purple-600"
                        : theme === "dark"
                        ? "bg-gray-700 border-2 border-indigo-500/50"
                        : "bg-gray-200 border-2 border-indigo-500/50"
                    }`}
                  >
                    {job.status === "current" ? (
                      <span className="text-white font-bold text-[11px]">
                        {index + 1}
                      </span>
                    ) : (
                      <FiCheckCircle
                        className={
                          theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                        }
                        size={16}
                      />
                    )}
                    {job.status === "current" && (
                      <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    )}
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className="group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={`relative rounded-xl p-5 backdrop-blur-lg border transition-all duration-300 overflow-hidden ${
                        theme === "dark"
                          ? "bg-white/5 border-white/10 hover:bg-white/8 hover:border-indigo-500/40"
                          : "bg-white/40 border-white/50 hover:bg-white/60 hover:border-indigo-500/40"
                      } shadow-lg hover:shadow-xl`}
                    >
                      {/* Header Row: Title + Current Badge */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4
                          className={`text-lg font-bold leading-tight ${
                            theme === "dark" ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {job.title}
                        </h4>
                        {job.status === "current" && (
                          <span className="shrink-0 px-2.5 py-0.5 text-[11px] font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Organization + Period Row */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2.5">
                        <a
                          href={job.url}
                          className="inline-flex items-center text-indigo-500 font-semibold text-[13px] hover:text-indigo-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiMapPin className="mr-1 shrink-0" size={13} />
                          {job.organization}
                        </a>
                        <div
                          className={`inline-flex items-center text-xs px-2.5 py-1 rounded-full ${
                            theme === "dark"
                              ? "bg-indigo-500/20 text-indigo-300"
                              : "bg-indigo-100 text-indigo-700"
                          }`}
                        >
                          <FiCalendar className="mr-1" size={11} />
                          {job.period}
                        </div>
                      </div>

                      {/* Description */}
                      <p
                        className={`text-sm leading-relaxed ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {job.description}
                      </p>

                      {/* Bottom accent */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${
                          job.status === "current"
                            ? "from-indigo-500 via-purple-500 to-pink-500"
                            : "from-gray-400 to-gray-500 opacity-20"
                        }`}
                      ></div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education - Right Column (2/5) */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            {/* Section Header */}
            <div className="flex items-center mb-7">
              <motion.div
                className={`p-3 rounded-xl backdrop-blur-sm border transition-all duration-200 ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 text-purple-400"
                    : "bg-white/20 border-white/20 text-purple-600"
                } mr-3 shadow-md`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.15 }}
              >
                <FiBook size={22} />
              </motion.div>
              <h3
                className={`text-2xl font-bold ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                Education
              </h3>
            </div>

            {/* Education Cards */}
            <div className="space-y-5">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className={`group relative rounded-xl p-5 backdrop-blur-lg border transition-all duration-300 overflow-hidden ${
                    theme === "dark"
                      ? "bg-white/5 border-white/10 hover:bg-white/8 hover:border-purple-500/40"
                      : "bg-white/40 border-white/50 hover:bg-white/60 hover:border-purple-500/40"
                  } shadow-lg hover:shadow-xl`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ y: -3 }}
                >
                  {/* Top Gradient Bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"></div>

                  {/* Achievement Badge */}
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      theme === "dark"
                        ? "bg-amber-500/20 text-amber-300"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    <FiAward className="mr-1" size={11} />
                    {edu.achievement}
                  </div>

                  {/* Degree */}
                  <h4
                    className={`text-lg font-bold mb-2 leading-tight ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {edu.degree}
                  </h4>

                  {/* Institution + Period */}
                  <p className="text-purple-500 font-semibold text-sm mb-2">
                    {edu.institution}
                  </p>
                  <div
                    className={`inline-flex items-center text-xs px-2.5 py-0.5 rounded-full mb-3 ${
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

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5"></div>
                </motion.div>
              ))}
            </div>

            {/* Download Button - sits under education */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <a
                  href="/isuru-bandara-cv.pdf"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-lg"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
