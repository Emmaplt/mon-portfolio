import React from "react"; // Import React
import SkillCategory from "./skillscategory"; // Import du composant SkillCategory
import "./_skills.scss"; // Import des styles spécifiques à Skills

const Skills = () => {
  // Données pour chaque catégorie
  const backendIcons = [
    { src: "/path/to/mongodb.svg", alt: "MongoDB" },
    { src: "/path/to/nodejs.svg", alt: "Node.js" },
  ];

  const frontendIcons = [
    { src: "/path/to/javascript.svg", alt: "JavaScript" },
    { src: "/path/to/css3.svg", alt: "CSS3" },
    { src: "/path/to/react.svg", alt: "React" },
  ];

  const softwareIcons = [
    { src: "/path/to/github.svg", alt: "GitHub" },
    { src: "/path/to/figma.svg", alt: "Figma" },
    { src: "/path/to/vscode.svg", alt: "VS Code" },
  ];

  return (
    <div className="skills">
      <h2>Compétences</h2>
      <div className="skills-categories">
        {/* Passe les données à SkillCategory */}
        <SkillCategory title="Back-end" icons={backendIcons} />
        <SkillCategory title="Front-end" icons={frontendIcons} />
        <SkillCategory title="Logiciels" icons={softwareIcons} />
      </div>
    </div>
  );
};

export default Skills;