import "./Projects.css";
import Pokemon from "../../assets/projektBild/pokemon.png";
import { motion as Motion } from "framer-motion";
const projectData = [
  {
    title: "Pokemons API Explorer",
    description:
      " A sleek interface to browse and search Pokémon data, featuring responsive design and smooth interactions.",
    image: Pokemon,
    demoLink: "https://pokemon-app-one.vercel.app/",
    codeLink: "https://github.com/miladposhtkohi-droid/pokemon-app",
  },
  {
    title: "E-commerce Landing",
    description:
      "A clean product landing page with product highlights, pricing cards, and a modern call-to-action section.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    demoLink: "https://example.com/demo/ecommerce",
    codeLink: "https://github.com/miladposhtkohi-droid/ecommerce-landing",
  },
  {
    title: "Portfolio Showcase",
    description:
      "A personal portfolio layout with bold typography, project previews, and a smooth responsive experience.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    demoLink: "https://example.com/demo/portfolio",
    codeLink: "https://github.com/miladposhtkohi-droid/portfolio-showcase",
  },
  {
    title: "Task Management App",
    description:
      "A task tracker with intuitive controls, status filters, and a lightweight interface for daily planning.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    demoLink: "https://example.com/demo/taskapp",
    codeLink: "https://github.com/miladposhtkohi-droid/task-management",
  },
  {
    title: "Blog Platform",
    description:
      "A modern content platform with article previews, clean typography, and a calm reading experience.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80",
    demoLink: "https://example.com/demo/blog",
    codeLink: "https://github.com/miladposhtkohi-droid/blog-platform",
  },
  {
    title: "Finance Tracker",
    description:
      "A sleek finance dashboard that highlights transactions, spending categories, and a user-friendly overview.",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=900&q=80",
    demoLink: "https://example.com/demo/finance",
    codeLink: "https://github.com/miladposhtkohi-droid/finance-tracker",
  },
];

const Projects = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const introVariants = {
    hidden: {
      opacity: 0,
      y: -40,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <Motion.div
          className="projects-intro"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <Motion.p variants={introVariants} className="section-label">
            Selected Projects
          </Motion.p>
          <Motion.h2 variants={introVariants}>
            Recent work I'm proud of
          </Motion.h2>
          <Motion.p variants={introVariants}>
            A curated collection of portfolio pieces showing modern UI,
            responsive layouts, and polished frontend solutions.
          </Motion.p>
        </Motion.div>

        <Motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {projectData.map((project, index) => (
            <Motion.article
              className="project-card"
              key={index}
              variants={cardVariants}
            >
              <div className="project-image-wrapper">
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <Motion.div className="project-actions" variants={buttonVariants}>
                <Motion.a
                  className="project-button demo"
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover="hover"
                >
                  Demo
                </Motion.a>
                <Motion.a
                  className="project-button code"
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover="hover"
                >
                  GitHub
                </Motion.a>
              </Motion.div>
            </Motion.article>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Projects;
