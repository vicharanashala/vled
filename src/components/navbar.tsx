import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import "../styles/header.css";
import logo from '../assets/vled-iit-clear.png';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavLinkClick = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="bg-top"></div>
      <div className="bg-bottom"></div>
      <div className="header-top">
        <Link to="/">
          <img src={logo} alt="VLED and IIT Logos" className="header-logo" />
        </Link>
        <nav className="nav-bar">
          <div className="nav-links">
            <Link to="/research" className="nav-text">Research</Link>
            <Link to="/fdp" className="nav-text">FDP</Link>
            <Link to="/events" className="nav-text">Events</Link>
            <Link to="/team" className="nav-text">Team</Link>
            <Link to="/comingsoon" className="nav-text">Blog</Link>
          </div>
          <Link to="/contact">
            <button className="nav-button">
              <span className="nav-button-text">Contact Us</span>
            </button>
          </Link>
        </nav>
      </div>
      <button
        className="menu-icon"
        aria-label="Menu"
        aria-expanded={menuOpen ? 'true' : 'false'}
        onClick={() => setMenuOpen(!menuOpen)}
      ></button>
      {menuOpen && (
        <nav className="mobile-nav-dropdown">
          <Link to="/research" className="nav-text" onClick={handleNavLinkClick}>Research</Link>
          <Link to="/fdp" className="nav-text" onClick={handleNavLinkClick}>FDP</Link>
          <Link to="/events" className="nav-text" onClick={handleNavLinkClick}>Events</Link>
          <Link to="/team" className="nav-text" onClick={handleNavLinkClick}>Team</Link>
          <Link to="/comingsoon" className="nav-text" onClick={handleNavLinkClick}>Blog</Link>
          <Link to="/contact">
            <button className="nav-button">
              <span className="nav-button-text">Contact Us</span>
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
};