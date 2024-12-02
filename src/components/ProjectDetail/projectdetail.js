import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../data/projectsData";

const ProjectDetail = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p>Projet non trouvé.</p>;
  }

  return (
    <section className="project-detail">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
      <a href={project.github} target="_blank" rel="noopener noreferrer">Code source</a>
    </section>
  );
};

export default ProjectDetail;
