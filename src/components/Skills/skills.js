import React from "react";
import SkillCategory from "./Skillscategory";
import "./skills.scss";

import mongodbIcon from "../../assets/icons/mongodb.png";
import nodejsIcon from "../../assets/icons/nodejs.png";
import javascriptIcon from "../../assets/icons/javascript.png";
import cssIcon from "../../assets/icons/css.png";
import reactIcon from "../../assets/icons/react.png";
import githubIcon from "../../assets/icons/github.png";
import figmaIcon from "../../assets/icons/figma.png";
import vscodeIcon from "../../assets/icons/vscode.png";
import htmlIcon from "../../assets/icons/html.png";
import sassIcon from "../../assets/icons/sass.png";
import notionIcon from "../../assets/icons/notion.png";

const Skills = () => {
  const backendIcons = [
    { src: mongodbIcon, alt: "MongoDB" },
    { src: nodejsIcon, alt: "Node.js" },
  ];

  const frontendIcons = [
    { src: javascriptIcon, alt: "JavaScript" },
    { src: cssIcon, alt: "CSS3" },
    { src: reactIcon, alt: "React" },
    { src: htmlIcon, alt: "HTML" },
    { src: sassIcon, alt: "SASS" },
  ];

  const softwareIcons = [
    { src: githubIcon, alt: "GitHub" },
    { src: figmaIcon, alt: "Figma" },
    { src: vscodeIcon, alt: "VS Code" },
    { src: notionIcon, alt: "Notion" },
  ];

  return (
    <div className="skills">
      <h2>Compétences</h2>
      <div className="skills-categories">
        <SkillCategory title="Back-end" icons={backendIcons} />
        <SkillCategory title="Front-end" icons={frontendIcons} />
        <SkillCategory title="Logiciels" icons={softwareIcons} />
      </div>
    </div>
  );
};

export default Skills;