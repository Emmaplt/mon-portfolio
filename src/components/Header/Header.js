import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './header.scss';
import logo from "../../assets/images/logo-ymeria.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <img src={logo} className="App-logo-header" alt="logo" />
      <button className="menu-icon" onClick={toggleMenu}><FontAwesomeIcon icon={faBars} /></button>
      <nav>
        <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
          <li><Link to="hero" smooth={true} onClick={() => setMenuOpen(false)} href="#hero">PRESENTATION</Link></li>
          <li><Link to="projects" smooth={true} onClick={() => setMenuOpen(false)} href="#projects">PROJET</Link></li>
          <li><Link to="skills" smooth={true} onClick={() => setMenuOpen(false)} href="#skills">COMPETENCES</Link></li>
          <li><Link to="services" smooth={true} onClick={() => setMenuOpen(false)} href="#services">SERVICES</Link></li>
          <li><Link to="contact" smooth={true} onClick={() => setMenuOpen(false)} href="#contact">CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
