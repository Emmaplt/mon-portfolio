import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from "../../assets/images/logo-ymeria.png";
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} className="App-logo-footer" alt="logo" />
        <p>© 2024 Emma Plaut</p>
        <div className="footer-socials">
          <a
            href="https://linkedin.com/in/emma-plaut-bb0040167"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-linkedin"
          >
            <div className="icon-circle icon-linkedin-circle">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </a>
          <a
            href="https://github.com/Emmaplt"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-github"
          >
            <div className="icon-circle icon-github-circle">
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;