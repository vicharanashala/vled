import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { FooterWrapper } from "../components/FooterFile";
import "../styles/comingsoon.css";

const ComingSoon = () => {
  return (
    <>
      <Navbar />
      <div className="comingsoon-container">
        {/* Hero Section */}
        <section className="comingsoon-hero">
          <div className="comingsoon-hero-content">
            <div className="construction-icon-wrapper">
              <i className="fas fa-hard-hat construction-icon"></i>
              <i className="fas fa-hammer construction-tool"></i>
            </div>
            <h1 className="comingsoon-hero-title">
              <span className="title-main">Coming</span>
              <span className="title-accent">Soon!</span>
            </h1>
            <p className="comingsoon-hero-subtitle">
              We're crafting something extraordinary! Our team is hard at work building 
              amazing content and features for you.
            </p>
            <div className="coming-soon-badge">
              <i className="fas fa-rocket"></i>
              <span>Under Construction</span>
            </div>
            <Link to="/" className="home-button">
              <i className="fas fa-home"></i>
              <span>Go Home</span>
            </Link>
          </div>
        </section>

        {/* Stay Connected Section */}
        <section className="stay-connected-section">
          <div className="container">
            <div className="connected-content">
              <div className="connected-icon">
                <i className="fas fa-bell"></i>
              </div>
              <h2 className="connected-title">Stay Connected!</h2>
              <p className="connected-text">
                Follow us on social media to stay updated on our latest developments and be the first 
                to know when new features go live!
              </p>
              <div className="connected-actions">
                <a href="https://www.linkedin.com/company/vicharanashala/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                  <i className="fab fa-linkedin"></i>
                  <span>Follow on LinkedIn</span>
                </a>
                <a href="https://www.youtube.com/@vledlabs" target="_blank" rel="noopener noreferrer" className="social-btn youtube">
                  <i className="fab fa-youtube"></i>
                  <span>Subscribe on YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterWrapper />
    </>
  );
};

export default ComingSoon;