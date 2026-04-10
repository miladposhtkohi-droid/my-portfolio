import { 
  FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaFigma 
} from "react-icons/fa"

import { 
  SiJavascript, SiExpress, SiMongodb, SiPostman, SiPostgresql 
} from "react-icons/si"

export const skills = [
  // ===== FRONTEND =====
  { name: "React", icon: FaReact, color: "#61dafb", category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", category: "Frontend" },
  { name: "CSS / Responsive Design", icon: FaFigma, color: "#a259ff", category: "Frontend" },

  // ===== BACKEND =====
  { name: "Node.js", icon: FaNodeJs, color: "#3c873a", category: "Backend" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff", category: "Backend" },
  { name: "REST API Design", icon: SiPostman, color: "#f97316", category: "Backend" },

  // ===== DATABASE =====
  { name: "MongoDB", icon: SiMongodb, color: "#4db33d", category: "Database" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", category: "Database" },
  { name: "pgAdmin", icon: FaDatabase, color: "#9333ea", category: "Database" },

  // ===== TOOLS =====
  { name: "Git & GitHub", icon: FaGitAlt, color: "#f1502f", category: "Tools" },
  { name: "Postman", icon: SiPostman, color: "#ff6c37", category: "Tools" },
  { name: "VS Code", icon: FaFigma, color: "#0078d7", category: "Tools" },
]