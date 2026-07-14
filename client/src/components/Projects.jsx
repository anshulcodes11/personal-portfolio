function Projects() {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "Responsive Portfolio Website using React",
      live: "https://YOUR-VERCEL-LINK.vercel.app",
      github: "https://github.com/anshulcodes11/personal-portfolio",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      {projects.map((project) => (
        <div className="project-card" key={project.id}>
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