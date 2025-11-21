import '../styles/fdp.css';
import { useState } from 'react';
import { FDPNavbar } from '../components/FDPNavbar';

const FDP = () => {
  const [certificateId, setCertificateId] = useState('');
  const [verificationResult, setVerificationResult] = useState<{
    status: 'idle' | 'loading' | 'success' | 'error';
    data?: any;
    message?: string;
  }>({ status: 'idle' });

  const handleCertificateVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!certificateId.trim()) return;

    setVerificationResult({ status: 'loading' });

    try {
      // Replace this URL with your actual PHP API endpoint
      const response = await fetch('/api/verify-certificate.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ certificate_id: certificateId }),
      });

      const data = await response.json();

      if (response.ok) {
        setVerificationResult({
          status: 'success',
          data: data,
          message: 'Certificate verified successfully!'
        });
      } else {
        setVerificationResult({
          status: 'error',
          message: data.message || 'Certificate verification failed.'
        });
      }
    } catch (error) {
      setVerificationResult({
        status: 'error',
        message: 'Error connecting to verification service. Please try again.'
      });
    }
  };
  return (
    <div className="fdp-page">
      <FDPNavbar activePage="home" />

      {/* Hero Section */}
      <section className="fdp-hero">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <h1 className="fdp-hero-title">
                Faculty Development Program
              </h1>
              <p className="fdp-hero-subtitle">
                Empowering Educators. Transforming Learning.
              </p>
              <button className="btn fdp-register-btn">
                REGISTER NOW
              </button>
            </div>
            <div className="col-lg-6">
              {/* Background geometric shapes handled by CSS */}
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="fdp-objectives py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="fdp-section-title">Program Overview</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center mb-4">
              <p className="fdp-description">
                The <strong>Faculty Development Program (FDP)</strong> is a comprehensive initiative designed to support degree college educators in enhancing their teaching practices, strengthening academic design, and adopting innovative and research-backed approaches.
              </p>
              <p className="fdp-description">
                The program focuses on evolving pedagogy, instructional design, assessment methods, and holistic teaching strategies that create meaningful learning experiences.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="row mt-5">
            <div className="col-12 text-center mb-4">
              <h3 className="fdp-subsection-title">Our Mission</h3>
              <p className="fdp-description">
                To elevate the quality of higher education by equipping educators with modern teaching frameworks, reflective practices, and evidence-based methodologies that improve learner engagement, clarity, and outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits Section */}
      <section className="fdp-features py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="fdp-section-title">Program Benefits</h2>
              <p className="fdp-description">Participants will receive:</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="fdp-feature-card text-center">
                <div className="fdp-feature-icon">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h4 className="fdp-feature-title">Hands-on training in contemporary teaching methods and content design</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="fdp-feature-card text-center">
                <div className="fdp-feature-icon brain-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h4 className="fdp-feature-title">Exposure to modern pedagogical frameworks and classroom innovation</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="fdp-feature-card text-center">
                <div className="fdp-feature-icon hand-icon">
                  <i className="fas fa-tools"></i>
                </div>
                <h4 className="fdp-feature-title">Tools for enhancing student engagement and learning outcomes</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="fdp-feature-card text-center">
                <div className="fdp-feature-icon people-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h4 className="fdp-feature-title">Collaborative learning spaces with peer educators across institutions</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="fdp-feature-card text-center">
                <div className="fdp-feature-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <h4 className="fdp-feature-title">Certification upon successful completion</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="fdp-feature-card text-center">
                <div className="fdp-feature-icon">
                  <i className="fas fa-book-open"></i>
                </div>
                <h4 className="fdp-feature-title">Continuous access to curated teaching resources and guidance</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Application Section */}
      <section className="fdp-application py-5">
        <div className="container text-center">
          <h2 className="fdp-section-title mb-4">Take the Next Step</h2>
          <p className="fdp-description mb-4">
            Take a step toward transforming your classroom and your teaching approach.<br/>
            Enhance your skills, deepen your impact, and join a community dedicated to elevating education.
          </p>
          <h3 className="fdp-app-title mb-4">How to Apply: Fill out the registration form linked below.<br/>Seats are limited — apply early!</h3>
          <a href="https://mmc.ugc.ac.in/registration/Index" target="_blank" rel="noopener noreferrer" className="btn fdp-register-btn">Apply Now</a>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="fdp-objectives py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2 className="fdp-section-title">Target Audience</h2>
              <p className="fdp-description">This FDP is ideal for:</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <ul className="fdp-list">
                <li>Degree college faculty</li>
                <li>Academic leaders and administrators</li>
                <li>Educational researchers</li>
                <li>Educators seeking to upgrade their teaching and redesign learning experiences</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="fdp-objectives py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2 className="fdp-section-title">Objectives of the FDP</h2>
              <p className="fdp-description">This program is designed to enable educators to:</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <ul className="fdp-list">
                <li>Strengthen pedagogy and curriculum design skills</li>
                <li>Apply research-backed teaching strategies</li>
                <li>Integrate innovative content presentation and assessment methods</li>
                <li>Use reflective practices to enhance classroom delivery</li>
                <li>Improve learning experiences across disciplines</li>
                <li>Build a supportive community of progressive educators</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Currently Running FDPs Section */}
      <section className="fdp-objectives py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="fdp-section-title">Currently Running FDPs</h2>
              <p className="fdp-description">
                We are pleased to share two active FDPs that support educators in reimagining teaching practices:
              </p>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="fdp-subsection-title">1. CBPAI FDP</h3>
                  <p className="fdp-description">
                    A program focused on interactive, learner-centred, and data-informed teaching practices.
                  </p>
                  <h5 className="mt-3 mb-2"><strong>Key Themes:</strong></h5>
                  <ul className="fdp-list">
                    <li>Pedagogical clarity</li>
                    <li>Content structuring & design</li>
                    <li>Student engagement strategies</li>
                    <li>Evaluating learning effectively</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-lg-5 col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="fdp-subsection-title">2. Gurusetu FDP (Pilot)</h3>
                  <p className="fdp-description">
                    An exploration of thematic pillars that inspire reflective, meaningful, and innovative teaching.
                  </p>
                  <h5 className="mt-3 mb-2"><strong>Key Themes:</strong></h5>
                  <ul className="fdp-list">
                    <li>Holistic teaching approaches</li>
                    <li>Curriculum & content refinement</li>
                    <li>Designing better learning journeys</li>
                    <li>Educator mindsets & classroom culture</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-4">
            <div className="col-12 text-center">
              <p className="fdp-highlight">
                <strong>Participants can join one or both programs.</strong><br/>
                Flexible timelines — start anytime, finish before the deadline!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes Section */}
      <section className="fdp-objectives py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2 className="fdp-section-title">Learning Outcomes</h2>
              <p className="fdp-description">By the end of the program, participants will be able to:</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <ul className="fdp-list">
                <li>Design clearer, more learner-friendly teaching materials</li>
                <li>Apply innovative pedagogical strategies with confidence</li>
                <li>Build structured, engaging, and outcome-focused lessons</li>
                <li>Approach teaching with a research-oriented, reflective mindset</li>
                <li>Collaborate with a growing network of educators committed to improving education</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="fdp-cta-buttons py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-3">
              <button className="btn fdp-cta-btn concept-btn w-100">Concept Note</button>
            </div>
            <div className="col-lg-4 mb-3">
              <button className="btn fdp-cta-btn faq-btn w-100">FAQ</button>
            </div>
            <div className="col-lg-4 mb-3">
              <a href="https://mmc.ugc.ac.in/registration/Index" target="_blank" rel="noopener noreferrer" className="btn fdp-cta-btn apply-btn w-100">Apply Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* MMTTP Sponsor Section */}
      <section className="fdp-sponsor py-5">
        <div className="container text-center">
          <h2 className="fdp-sponsor-title">About MMTTP (Sponsor)</h2>
          <p className="fdp-sponsor-description">
            The <strong>Malaviya Mission Teacher Training Programme (MMTTP)</strong> financially supports innovative teacher training initiatives across India. This FDP is sponsored by MMTTP to empower educators with modern teaching strategies, promote excellence in higher education, and strengthen professional development at scale.
          </p>
        </div>
      </section>

      {/* Certificate Verification Section */}
      <section id="certificate" className="fdp-verification py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="fdp-section-title mb-4">Certificate Verification</h2>
              <p className="fdp-description mb-4">
                Verify the authenticity of FDP completion certificates issued by VLED Lab, IIT Ropar.
              </p>
              
              <form onSubmit={handleCertificateVerification} className="fdp-verification-form">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Certificate ID"
                        value={certificateId}
                        onChange={(e) => setCertificateId(e.target.value)}
                        required
                      />
                      <button 
                        className="btn btn-primary px-4" 
                        type="submit"
                        disabled={verificationResult.status === 'loading'}
                      >
                        {verificationResult.status === 'loading' ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                            Verifying...
                          </>
                        ) : (
                          'Verify Certificate'
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              {/* Verification Results */}
              {verificationResult.status === 'success' && verificationResult.data && (
                <div className="alert alert-success mt-4">
                  <h5 className="alert-heading">✅ Certificate Verified!</h5>
                  <div className="text-start">
                    <p><strong>Participant Name:</strong> {verificationResult.data.participant_name}</p>
                    <p><strong>Program:</strong> {verificationResult.data.program_name}</p>
                    <p><strong>Issue Date:</strong> {verificationResult.data.issue_date}</p>
                    <p><strong>Certificate ID:</strong> {verificationResult.data.certificate_id}</p>
                  </div>
                </div>
              )}

              {verificationResult.status === 'error' && (
                <div className="alert alert-danger mt-4">
                  <h5 className="alert-heading">❌ Verification Failed</h5>
                  <p>{verificationResult.message}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="fdp-footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="fdp-footer-logo">
                <h2 className="mb-3">FDP<span className="highlight">2025</span></h2>
                <p className="fdp-footer-subtitle">Faculty Development Program</p>
              </div>
            </div>
            <div className="col-lg-3">
              <h5 className="fdp-footer-title">About Us</h5>
            </div>
            <div className="col-lg-3">
              <h5 className="fdp-footer-title">Main Focus of the FDP:</h5>
              <p className="fdp-footer-text">
                The main focus of the Faculty Development Program (FDP) is to support degree college educators in enhancing their teaching practices, strengthening academic design, and adopting innovative and research-backed approaches to create meaningful learning experiences.
              </p>
            </div>
            <div className="col-lg-3">
              <h5 className="fdp-footer-title">Key Themes:</h5>
              <ul className="fdp-themes-list">
                <li>- Pedagogical clarity</li>
                <li>- Content structuring & design</li>
                <li>- Student engagement strategies</li>
                <li>- Evaluating learning effectively</li>
                <li>- Holistic teaching approaches</li>
                <li>- Curriculum & content refinement</li>
                <li>- Designing better learning journeys</li>
                <li>- Educator mindsets & classroom culture</li>
              </ul>
              
              <div className="fdp-contact-info mt-4">
                <h5 className="fdp-footer-title">Address</h5>
                <p><i className="fas fa-map-marker-alt me-2"></i>IIT Ropar, Rupnagar, Punjab, India (140001)</p>
                <p><i className="fas fa-phone me-2"></i>76268 - 14400</p>
                <p><i className="fas fa-envelope me-2"></i>mmttp.iitrpr.ac.in</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FDP;