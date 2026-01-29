import React from "react";
import { motion } from "framer-motion";
import { services } from "../data/services";

const ServicesSection = ({ theme, id, ScrollLink }) => {
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
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
          >
            What I Do
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.25 }}
          >
            My Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`group relative p-8 rounded-3xl backdrop-blur-lg border transition-all duration-200 ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  : "bg-white/20 border-white/30 hover:bg-white/30 hover:border-white/40"
              } shadow-2xl hover:shadow-3xl`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.15 },
              }}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[1px]">
                <div
                  className={`w-full h-full rounded-3xl ${
                    theme === "dark" ? "bg-gray-900/95" : "bg-white/95"
                  } backdrop-blur-lg`}
                ></div>
              </div>

              {/* Floating background orb */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

              <div className="relative z-10">
                <motion.div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border ${
                    theme === "dark"
                      ? "bg-white/5 border-white/10"
                      : "bg-white/20 border-white/20"
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.15 }}
                >
                  {service.icon}
                </motion.div>

                <h3
                  className={`text-2xl font-bold mb-4 transition-all duration-200 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  } group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:bg-clip-text`}
                >
                  {service.title}
                </h3>

                <p
                  className={`leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  } group-hover:text-opacity-90 transition-all duration-200`}
                >
                  {service.description}
                </p>
              </div>

              {/* Glass shine effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Fun Stats Section */}
        <div
          className={`rounded-3xl p-8 md:p-12 backdrop-blur-lg border ${
            theme === "dark"
              ? "bg-white/5 border-white/10"
              : "bg-white/20 border-white/30"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-indigo-500 mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div
                  className={`text-xs font-bold tracking-wider ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
