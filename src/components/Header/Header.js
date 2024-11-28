import React from 'react';
import { Link } from 'react-scroll';
import './_header.scss';
import logo from "../../assets/images/logo-ymeria.png";

const Header = () => {
  return (
    <header className="header">
        <img src={logo} className="App-logo-header" alt="logo"/>
      <nav>
        <ul className="nav-list">
          <li><Link to="hero" smooth={true}>PRESENTATION</Link></li>
          <li><Link to="projects" smooth={true}>PROJET</Link></li>
          <li><Link to="skills" smooth={true}>COMPETENCES</Link></li>
          <li><Link to="services" smooth={true}>SERVICES</Link></li>
          <li><Link to="contact" smooth={true}>CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;