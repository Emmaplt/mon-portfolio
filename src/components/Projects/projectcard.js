import React from "react";
import { useNavigate } from "react-router-dom";
import "./projectcard.scss";
import projects from "../../data/projectsData";

const Projects = () => {
  const navigate = useNavigate();

  const handleCardClick = (idName) => {
    navigate(`/projects/${idName}`);
  };

  return (
    <section id="projects" className="projects">
      <h2>Mes projets</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleCardClick(project.idName)}
          >
            <img
              src={project.cover}
              alt={project.titleproject}
              className="project-card__image"
            />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
