import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => {
        console.log("Data:", res.data);
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("Projects State:", projects);

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      

      

      {projects.map((project) => (
        <div className="project-card" key={project._id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <div className="project-btns">
            <a href={project.live} target="_blank" rel="noreferrer">
              <button>Live Demo</button>
            </a>

            <a href={project.github} target="_blank" rel="noreferrer">
              <button>GitHub</button>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;