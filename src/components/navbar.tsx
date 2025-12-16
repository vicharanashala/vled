import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../styles/header.css";
import logo from "../assets/vled-iit-clear.png";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavLinkClick = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="bg-top"></div>
      <div className="bg-bottom"></div>
      <div className="header-top">
        <Link to="/" className="logo-link">
          <div className="logo-container">
            <img src={logo} alt="VLED and IIT Logos" className="header-logo" />
          </div>
        </Link>
        <nav className="nav-bar">
          <div className="nav-links">
            <Link to="/" className="nav-text">
              Home
            </Link>
            <Link to="/research" className="nav-text">
              Research
            </Link>
            <Link to="/fdp" className="nav-text">
              FDP
            </Link>
            {/* <Link to="/full-stack-bootcamp" className="nav-text">Bootcamp</Link> */}
<Link
  to="/full-stack-bootcamp"
  className="nav-text sparkle-link shine-text badge-link"
  style={{
    position: "relative",
    padding: "0.4rem 0.9rem 0.4rem 0.6rem",
    fontWeight: 600,
    color: "#000",
    overflow: "hidden",
  }}
>
  Bootcamp
  <span className="new-badge">NEW</span>
</Link>

<style>{`
  /* ---- BLACK TEXT SHINE ---- */
  .shine-text {
    color: #000;
    animation: textShine 2.8s infinite linear;
  }

  .shine-text:hover {
    color: #000;
  }

  @keyframes textShine {
    0% { text-shadow: none; }
    50% {
      text-shadow:
        1px 0 6px rgba(255,255,255,0.6),
       -1px 0 6px rgba(255,255,255,0.6);
    }
    100% { text-shadow: none; }
  }

  /* ---- NEW BADGE ---- */
  .new-badge {
    position: absolute;
    top: 1px;
    right: 12px;
    font-size: 0.55rem;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 999px;
    background: #ff3b30;
    color: #fff;
    line-height: 1;
    animation: badgePulse 1.8s infinite ease-in-out;
    pointer-events: none;
  }

  @keyframes badgePulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  /* ---- YELLOW SPARKLES ---- */
  .sparkle-link {
    display: inline-block;
  }

  .sparkle-link::before,
  .sparkle-link::after {
    content: "";
    position: absolute;
    top: -14px;
    width: 8px;
    height: 8px;
    background: radial-gradient(
      circle,
      rgba(255,215,0,0.95) 35%,
      rgba(255,215,0,0.5) 55%,
      transparent 70%
    );
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    animation: sparkleFall 6.5s infinite ease-in-out;
  }

  .sparkle-link::before {
    left: 30%;
    animation-delay: 0s;
  }

  .sparkle-link::after {
    left: 65%;
    animation-delay: 3.2s;
  }

  @keyframes sparkleFall {
    0% {
      transform: translateY(-12px) scale(0.5);
      opacity: 0;
    }
    20% { opacity: 1; }
    80% { opacity: 0.8; }
    100% {
      transform: translateY(48px) scale(1);
      opacity: 0;
    }
  }
`}</style>


            <Link to="/events" className="nav-text">
              Events
            </Link>
            <Link to="/team" className="nav-text" style={{ display: "none" }}>
              Team
            </Link>
            <Link to="/comingsoon" className="nav-text">
              Blog
            </Link>
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
        aria-expanded={menuOpen ? "true" : "false"}
        onClick={() => setMenuOpen(!menuOpen)}
      ></button>
      {menuOpen && (
        <nav className="mobile-nav-dropdown">
          <Link to="/" className="nav-text" onClick={handleNavLinkClick}>
            Home
          </Link>
          <Link
            to="/research"
            className="nav-text"
            onClick={handleNavLinkClick}
          >
            Research
          </Link>
          <Link to="/fdp" className="nav-text" onClick={handleNavLinkClick}>
            FDP
          </Link>
          <Link
            to="/full stack bootcamp"
            className="nav-text"
            onClick={handleNavLinkClick}
          >
            Bootcamp
          </Link>
          <Link to="/events" className="nav-text" onClick={handleNavLinkClick}>
            Events
          </Link>
          <Link
            to="/team"
            className="nav-text"
            onClick={handleNavLinkClick}
            style={{ display: "none" }}
          >
            Team
          </Link>
          <Link
            to="/comingsoon"
            className="nav-text"
            onClick={handleNavLinkClick}
          >
            Blog
          </Link>
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
