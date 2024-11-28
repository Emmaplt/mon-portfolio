import React from 'react';
import './_footer.scss';
import logo from "../../assets/images/logo-ymeria.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <img src={logo} className="App-logo-footer" alt="logo"/>
        <p>© 2024 Emma Plaut</p>
        <div className="footer-socials">
          <a href="https://github.com/Emmaplt" target="_blank" rel="noopener noreferrer">
            <img src="/assets/icons/github.svg" alt="GitHub" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/icons/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;