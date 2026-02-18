import "../styles/footerFile.css";
import { Link } from 'react-router-dom';
import { FaLinkedin, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaGithub } from 'react-icons/fa';
import logo from '../assets/VLED_footer.png';

export const FooterWrapper = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Main Footer Grid */}
        <div className="footer-grid">
          
          {/* About Section */}
          <div className="footer-section footer-about">
            <img 
              className="footer-logo" 
              src={logo}
              alt="VLED Logo"
            />
            <p className="footer-description">
              The Vicharanashala Lab for Education of Design (VLED) at IIT Ropar is pioneering 
              transformative approaches to learning in the digital age.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/research">Research</Link></li>
              <li style={{ display: 'none' }}><Link to="/team">Our Team</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/collaborations">Collaborations</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section footer-contact">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <p>VLED, Super Academic Block</p>
                  <p>Indian Institute of Technology, Ropar</p>
                  <p>Rupnagar, Punjab 140001</p>
                </div>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <p>vled@iitrpr.ac.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Handles */}
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/company/educationdesignlab/posts/?feedView=all"
                className="social-link"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://youtube.com/@vledlabs?si=zFC1fmeqjkFCRY8Y"
                className="social-link"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube /> YouTube
              </a>
              <a
                href="https://github.com/vicharanashala"
                className="social-link"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            {/* Resources */}
            <div className="footer-bottom-links">
              <a
              href="https://vicharanashala.github.io/vled/"
              rel="noopener noreferrer"
            >
              Blog
            </a>
              <span className="separator">•</span>
              <Link to="/careers">Careers</Link>
              <span className="separator">•</span>
              <Link to="/privacy">Privacy Policy</Link>
              <span className="separator">•</span>
              <Link to="/terms">Terms & Conditions</Link>
            </div>
            <p>&copy; 2024 VLED, IIT Ropar. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};