import React from "react";
import "./_services.scss";
import Applications from "../../assets/images/card-applications.png";
import Utilisateur from "../../assets/images/card-utilisateur-design.png";
import Accessibilite from "../../assets/images/card-accessibilite.png";

function Services() {
  return (
    <div className="services">
      <h2 className="services-title">Services</h2>
      <div className="services-container">

        <div className="service-item">
          <img
            src={Applications}
            alt="Illustration des Applications"
            className="service-image"
          />
          <h3>Applications</h3>
        </div>

        <div className="service-item">
          <img
            src={Utilisateur}
            alt="Illustration de l'expérience utilisateur et design"
            className="service-image"
          />
          <h3>Expérience utilisateur & Design</h3>
        </div>

        <div className="service-item">
          <img
            src={Accessibilite}
            alt="Illustration de l'accessibilité"
            className="service-image"
          />
          <h3>Accessibilité</h3>
        </div>
      </div>
    </div>
  );
}

export default Services;