import React from 'react';
import './Projects.scss';
import { projects } from '../../data/projectsData';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Mes projets</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>Voir le projet</a>
            <a href={project.github}>Code source</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;