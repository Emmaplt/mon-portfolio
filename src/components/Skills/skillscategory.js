import React from "react"; // Import React
import "./_skillscategory.scss"; // Import des styles spécifiques à SkillCategory

const SkillCategory = ({ title, icons }) => {
  return (
    <div className="skill-category">
      {/* Titre de la catégorie */}
      <div className="skill-title">{title}</div>

      {/* Cercle contenant les icônes */}
      <div className="skill-circle">
        {icons.map((icon, index) => (
          <img
            key={index} // Clé unique pour chaque icône
            src={icon.src} // Chemin de l'image
            alt={icon.alt} // Texte alternatif
            className={`skill-icon skill-icon-${index + 1}`} // Classes dynamiques
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;