import React from "react";
import "./buttoncv.scss";

const ButtonCV = () => {
  return (
    <div className="button-container">
      <div className="top-section"></div>
      <div className="bottom-section"></div>
      <div className="button-wrapper">
        <a
          href={`${process.env.PUBLIC_URL}/cv-emma-plaut.pdf`}
          download="CV_Emma_Plaut.pdf"
          className="cv-button"
        >
          Mon CV
        </a>
      </div>
    </div>
  );
};

export default ButtonCV;
