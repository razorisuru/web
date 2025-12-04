import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaPython,
  FaLaravel,
  FaJava,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiMysql,
  SiExpress,
} from "react-icons/si";

export const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500" size={32} />,
    level: 90,
  },
  {
    name: "React",
    icon: <FaReact className="text-blue-500" size={32} />,
    level: 95,
  },
  {
    name: "Laravel",
    icon: <FaLaravel className="text-red-600" size={32} />,
    level: 95,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600" size={32} />,
    level: 80,
  },
  {
    name: "Next.js",
    icon: (theme) => (
      <SiNextdotjs
        className={`${theme === "dark" ? "text-white" : "text-gray-800"}`}
        size={32}
      />
    ),
    level: 90,
    needsTheme: true,
  },
  {
    name: "Spring Boot",
    icon: <FaJava className="text-orange-600" size={32} />,
    level: 75,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-700" size={32} />,
    level: 78,
  },
  {
    name: "Express.js",
    icon: (theme) => (
      <SiExpress
        className={`${theme === "dark" ? "text-white" : "text-gray-700"}`}
        size={32}
      />
    ),
    level: 82,
    needsTheme: true,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-500" size={32} />,
    level: 92,
  },
  {
    name: "UI/UX Design",
    icon: <FaFigma className="text-purple-500" size={32} />,
    level: 88,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" size={32} />,
    level: 75,
  },
  {
    name: "Python",
    icon: <FaPython className="text-blue-400" size={32} />,
    level: 70,
  },
];
