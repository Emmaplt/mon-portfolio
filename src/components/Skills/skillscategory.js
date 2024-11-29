import React from "react";
import "./_skillscategory.scss";

const SkillCategory = ({ title, icons }) => {
  const totalIcons = icons.length; // Nombre d'icônes pour ce cercle

  return (
    <div className="skill-category">
      <div className="skill-title">{title}</div>
      <div className={`skill-circle total-${totalIcons}`}>
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