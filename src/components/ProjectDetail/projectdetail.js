import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import projects from "../../data/projectsData";
import logo from "../../assets/images/logo-ymeria.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./projectdetail.scss";

const ProjectDetail = () => {
  const { idName } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.idName === idName);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <p>Projet non trouvé.</p>;
  }

  const currentIndex = projects.findIndex((p) => p === project);
  const previousProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <section className="project-detail"
      style={{ backgroundColor: project.backgroundGlobal }}
    >
      <div className="project-header">
        <Link to="/">
          <img src={logo} className="App-logo-header" alt="logo" />
        </Link>
        <div className="header-content">
          <div className="header-navigation">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="nav-icon"
              onClick={() => navigate(`/projects/${previousProject.idName}`)}
              title="Projet précédent"
            />
            <h1>{project.title}</h1>
            <h2>{project.titleproject}</h2>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="nav-icon"
              onClick={() => navigate(`/projects/${nextProject.idName}`)}
              title="Projet suivant"
            />
          </div>
        </div>
      </div>

      <div className="project-content">
        <img src={project.picture} alt={`Vitrine du projet ${project.title}`} />
        <div
          className="project-description"
          style={{ backgroundColor: project.backgroundContent }}
        >
          <h2>Description du projet</h2>
          <p>{project.description}</p>
          <a
            href={project.lien}
            className="button-github"
            target="_blank"
            rel="noopener noreferrer"
            title={`Voir ${project.title} sur Github`}
            style={{ backgroundColor: project.backgroundGlobal }}
          >
            Voir {project.title} sur Github
          </a>
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
            <h3>Technologies utilisées :</h3>
            <p>{project.technologie}</p>
            {project.illustration1 && (
              <img
                src={project.illustration1}
                alt={`Illustration principale du projet ${project.title}`}
              />
            )}
          </div>
        </div>
      </div>

      <div
        className="project-footer"
        style={{ backgroundColor: project.backgroundContent }}
      >
        <h3>Mon retour d’expérience</h3>
        <p>{project.retour}</p>
      </div>
    </section>
  );
};

export default ProjectDetail;
