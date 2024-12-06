import React from "react";
import "./skillscategory.scss";

const SkillCategory = ({ title, icons }) => {
  const totalIcons = icons.length;

  return (
    <div className="skill-category">
      <div className="skill-title">{title}</div>

      {/* Cercle pour Desktop */}
      <div className={`skill-circle total-${totalIcons}`}>
        {icons.map((icon, index) => (
          <div key={index} className="skill-icon">
            <img src={icon.src} alt={icon.alt} />
          </div>
        ))}
      </div>

      {/* Grille pour Téléphone */}
      <div className="skills-grid">
        {icons.map((icon, index) => (
          <div key={index} className="skill-icon">
            <img src={icon.src} alt={icon.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
