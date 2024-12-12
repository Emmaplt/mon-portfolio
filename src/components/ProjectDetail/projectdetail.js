import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../../data/projectsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import "./projectdetail.scss";

const ProjectDetail = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const navigate = useNavigate();

  const projectId = parseInt(id);
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <p>Projet non trouvé.</p>;
  }

  // Calculer les IDs des projets précédent et suivant
  const previousProjectId = projectId > 1 ? projectId - 1 : projects.length;
  const nextProjectId = projectId < projects.length ? projectId + 1 : 1;

  return (
    <section className="project-detail"
    style={{ backgroundColor: project.backgroundGlobal }}
    >
      <div className="project-header"
      style={{ backgroundColor: project.backgroundContent }}
      >
        <div className="header-content">
          <a
            href={project.lien}
            target="_blank"
            rel="noopener noreferrer"
            className="github-icon"
            title="Voir le projet sur GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <div className="header-navigation">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="nav-icon"
              onClick={() => navigate(`/projects/${previousProjectId}`)}
              title="Projet précédent"
            />
            <h1>{project.title}</h1>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="nav-icon"
              onClick={() => navigate(`/projects/${nextProjectId}`)}
              title="Projet suivant"
            />
          </div>
          <FontAwesomeIcon
            icon={faHome}
            className="home-icon"
            onClick={() => navigate("/")}
            title="Accueil"
          />
        </div>
        <h2>{project.titleproject}</h2>
      </div>

      <div className="project-content">
        <img src={project.picture} alt={`Vitrine du projet ${project.title}`} />
        <div className="project-description"
          style={{ backgroundColor: project.backgroundContent }}
        >
          <h2>Description du projet</h2>
          <p>{project.description}</p>
        </div>

        <div className="project-details">
          <div className="details-column">
            <h3>Compétences acquises :</h3>
            <ul>
              {project.fonctionnalite.map((func, index) => (
                <li key={index}>{func}</li>
              ))}
            </ul>
            {project.illustration2 && (
      <img
        src={project.illustration2}
        alt={`Illustration supplémentaire du projet ${project.title}`}
      />
    )}
          </div>
          <div className="details-column">
            <h3>Technologie utilisée :</h3>
            <p>{project.technologie}</p>
            <img src={project.illustration1} alt={`Illustration du projet ${project.title}`} />
          </div>
        </div>
      </div>

      <div className="project-footer"
            style={{ backgroundColor: project.backgroundContent }}
      >
        <h3>Qu'en tirer ?</h3>
        <p>{project.retour}</p>
      </div>
    </section>
  );
};

export default ProjectDetail;
