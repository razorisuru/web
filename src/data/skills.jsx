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
  SiTypescript,
  SiPostgresql,
  SiDotnet,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500" size={32} />,
    level: 90,
  },
  {
    name: "Typescript",
    icon: <SiTypescript className="text-yellow-500" size={32} />,
    level: 90,
  },
  {
    name: "React",
    icon: <FaReact className="text-blue-500" size={32} />,
    level: 95,
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
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600" size={32} />,
    level: 80,
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
    name: "Laravel",
    icon: <FaLaravel className="text-red-600" size={32} />,
    level: 95,
  },
  {
    name: "Python",
    icon: <FaPython className="text-blue-400" size={32} />,
    level: 70,
  },
  {
    name: "C#",
    icon: <TbBrandCSharp className="text-purple-600" size={32} />,
    level: 80,
  },
  {
    name: "DotNet",
    icon: <SiDotnet className="text-blue-600" size={32} />,
    level: 80,
  },
  {
    name: "Spring Boot",
    icon: <FaJava className="text-orange-600" size={32} />,
    level: 75,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-500" size={32} />,
    level: 92,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-700" size={32} />,
    level: 78,
  },
  {
    name: "Postgresql",
    icon: <SiPostgresql className="text-blue-400" size={32} />,
    level: 70,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" size={32} />,
    level: 75,
  },
  {
    name: "UI/UX Design",
    icon: <FaFigma className="text-purple-500" size={32} />,
    level: 88,
  },
];
