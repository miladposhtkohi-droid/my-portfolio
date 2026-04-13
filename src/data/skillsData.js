import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";

export const skills = [
  // --- Frontend ---
  { name: "HTML5", category: "Frontend", icon: SiHtml5, color: "#e34c26" },
  { name: "CSS3", category: "Frontend", icon: SiCss, color: "#264de4" },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: SiJavascript,
    color: "#f7df1e",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: SiTypescript,
    color: "#3178c6",
  },
  { name: "React", category: "Frontend", icon: SiReact, color: "#61dafb" },

  // --- Backend ---
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#3c873a" },
  { name: "Express", category: "Backend", icon: SiExpress, color: "#ffffff" },
  { name: "Python", category: "Backend", icon: SiPython, color: "#ffd43b" },

  // --- Database ---
  { name: "MySQL", category: "Database", icon: SiMysql, color: "#005a9c" },
  { name: "MongoDB", category: "Database", icon: SiMongodb, color: "#4db33d" },
  {
    name: "pgAdmin",
    category: "Database",
    icon: SiPostgresql,
    color: "#336791",
  },

  // --- Tools ---
  { name: "Git", category: "Tools", icon: SiGit, color: "#f34f29" },
  { name: "GitHub", category: "Tools", icon: SiGithub, color: "#ffffff" },
  { name: "Figma", category: "Tools", icon: SiFigma, color: "#a259ff" },
];
