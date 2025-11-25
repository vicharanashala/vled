import '../styles/fdp.css';

interface FDPNavbarProps {
  activePage?: string;
}

export const FDPNavbar = ({ activePage = 'home' }: FDPNavbarProps) => {
  return (
    <>
      {/* Header with contact info */}
      <div className="fdp-header-info">
        <div className="container d-flex justify-content-between align-items-center py-2">
          <div className="contact-info d-flex align-items-center">
            <span className="me-4">
              <i className="fas fa-envelope me-2"></i>
              mmttp@iitrpr.ac.in
            </span>
            <a href="/" className="text-white text-decoration-none">
              <i className="fas fa-arrow-left me-2"></i>
              Back to VLED Website
            </a>
          </div>
          <div className="social-icons">
            <a href="#" className="me-3" title="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="me-3" title="Website"><i className="fas fa-link"></i></a>
            <a href="#" className="me-3" title="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fdp-navbar">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <div className="fdp-logo">
            <h2 className="mb-0">FDP<span className="highlight">2025</span></h2>
          </div>
          <div className="fdp-nav-menu d-flex align-items-center">
            <a href="/fdp" className={`nav-link me-4 ${activePage === 'home' ? 'active' : ''}`}>HOME</a>
            <a href="/fdp-about" className={`nav-link me-4 ${activePage === 'about' ? 'active' : ''}`}>ABOUT US</a>
            <a href="/fdp-concept" className={`nav-link me-4 ${activePage === 'concept' ? 'active' : ''}`}>CONCEPT NOTE</a>
            
            {/* FAQ Dropdown */}
            <div className="nav-item dropdown me-4">
              <a 
                href="#" 
                className={`nav-link dropdown-toggle ${activePage === 'faq' || activePage === 'vibe-faq' ? 'active' : ''}`}
                id="faqDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                FAQ
              </a>
              <ul className="dropdown-menu" aria-labelledby="faqDropdown">
                <li><a className="dropdown-item" href="/vibe-faq">ViBe FAQ</a></li>
                <li><a className="dropdown-item" href="/fdp-faq">FDP FAQ</a></li>
              </ul>
            </div>

            <a href="/fdp-contact" className={`nav-link me-4 ${activePage === 'contact' ? 'active' : ''}`}>CONTACT US</a>
            <a href="/fdp#certificate" className={`nav-link me-4 ${activePage === 'certificate' ? 'active' : ''}`}>CERTIFICATE VERIFICATION</a>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};