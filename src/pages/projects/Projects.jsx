import "./Projects.css";
import Pokemon from "../../assets/projektBild/pokemon.png";
import SimpleBlog from "../../assets/projektBild/BlogBild.png";
import LoginHabits from "../../assets/projektBild/grupp9.png";
import CarCenter from "../../assets/projektBild/milocarBild.png";
import PlotTwist from "../../assets/projektBild/plot-twist.png";
 
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
    title: "Simple Blog",
    description:
      "A clean blog platform with article management and modern design.",
    image: SimpleBlog,
    demoLink: "https://invidoel-4.vercel.app/",
    codeLink: "https://github.com/miladposhtkohi-droid/invidoel_4",
  },
  {
    title: "Login Habits Todo&Activities Event Planner",
    description:
      "A comprehensive event planning application with login functionality and habit tracking.",
    image: LoginHabits,
    demoLink: "https://grupp-9-frontend-2.vercel.app/",
    codeLink: "https://github.com/miladposhtkohi-droid/Grupp-9-Frontend_2",
  },
  {
    title: "Car center App",
    description:
      "A user-friendly application for managing car services and appointments.",
    image: CarCenter,
    demoLink: "https://milo-car.vercel.app/",
    codeLink: "https://github.com/miladposhtkohi-droid/MiloCar",
  },
  {
    title: "Plot Twist",
    description:
      "A dynamic storytelling platform that allows users to create and share interactive narratives with a modern UI.",
    image: PlotTwist,
    demoLink: "https://plot-twist-backend-frontend.vercel.app/pages/index.html",
    codeLink: "https://github.com/miladposhtkohi-droid/plot-twist-backend-frontend",
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
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-intro">
          <p className="section-label">Selected Projects</p>
          <h2>Recent work I'm proud of</h2>
          <p>
            A curated collection of portfolio pieces showing modern UI,
            responsive layouts, and polished frontend solutions.
          </p>
        </div>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <article className="project-card" key={index}>
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
              <div className="project-actions">
                <a
                  className="project-button demo"
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  className="project-button code"
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
