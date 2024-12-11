import React from "react";
import "./buttoncv.scss";

const ButtonCV = () => {
  return (
    <div className="button-container">
      <div className="top-section"></div>
      <div className="bottom-section"></div>
      <div className="button-wrapper">
        <a
          href="/path-to-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cv-button"
        >
          Mon CV
        </a>
      </div>
    </div>
  );
};

export default ButtonCV;
