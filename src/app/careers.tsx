import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar";
import "../styles/careers.css";

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    experienceSummary: "",
    skills: "",
    whyJoin: "",
    resume: null,
    portfolio: "",
    linkedin: "",
    joiningDate: "",
    workSetup: "",
    hearAbout: "",
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: target.checked }));
    } else if (type === 'file') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: target.files?.[0] || null })); 
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your application! We'll be in touch soon.");
  };

  return (
    <div className="careers-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="container">
          <h1 className="careers-hero-title">🌟 Careers at VLED Lab</h1>
          <p className="careers-hero-subtitle">Join us in designing the future of learning.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="careers-content">
        <div className="container">
          <div className="careers-intro">
            <p>
              At VLED Lab, we believe education should be clear, meaningful, and beautifully designed. 
              Our work blends research, pedagogy, creativity, and technology to create learning experiences 
              that truly make a difference. If you're passionate about improving education, curious about how 
              people learn, and excited to work with a mission-driven team—this is where you belong.
            </p>
            <p>
              We're always looking for innovators, educators, designers, researchers, and creators who care 
              about making learning better for everyone.
            </p>
          </div>

          {/* Why Work With Us Section */}
          <div className="why-work-section">
            <h2 className="section-title">💡 Why Work With Us?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>✨ Purpose-Driven Work</h3>
                <p>Every project contributes directly to strengthening education and transforming learner experiences.</p>
              </div>
              <div className="benefit-card">
                <h3>🤝 Collaborative Culture</h3>
                <p>Work with a multidisciplinary team—educators, designers, technologists, researchers, creators—who learn from each other every day.</p>
              </div>
              <div className="benefit-card">
                <h3>📚 Growth & Learning</h3>
                <p>We believe in continuous learning. You'll have opportunities to experiment, research, build, and grow.</p>
              </div>
              <div className="benefit-card">
                <h3>🚀 Impact at Scale</h3>
                <p>Your work will influence students, teachers, and institutions across diverse learning environments.</p>
              </div>
              <div className="benefit-card">
                <h3>🎨 Creativity Meets Research</h3>
                <p>We combine thoughtful design with evidence-based methods—your ideas will always be backed by purpose.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="careers-form-section">
        <div className="container">
          <div className="form-header">
            <h2>Apply to Join Our Team</h2>
            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>

          <form className="careers-form" onSubmit={handleSubmit}>
            {/* Basic Details */}
            <div className="form-section">
              <h3 className="form-section-title">Basic Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name <span className="required">*</span></label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="location">City / Location <span className="required">*</span></label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Experience & Skills */}
            <div className="form-section">
              <h3 className="form-section-title">Experience & Skills</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="experience">Years of Experience <span className="required">*</span></label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select...</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="skills">Key Skills <span className="required">*</span></label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="e.g., React, UI/UX, Research, Python"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="experienceSummary">Relevant Experience Summary <span className="required">*</span></label>
                <textarea
                  id="experienceSummary"
                  name="experienceSummary"
                  value={formData.experienceSummary}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Briefly describe your relevant experience..."
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="whyJoin">Why do you want to join VLED Lab? <span className="required">*</span></label>
                <textarea
                  id="whyJoin"
                  name="whyJoin"
                  value={formData.whyJoin}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us what motivates you..."
                  required
                />
              </div>
            </div>

            {/* Resume Upload */}
            <div className="form-section">
              <h3 className="form-section-title">Resume Upload</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="resume">Upload Resume (PDF/DOCX) <span className="required">*</span></label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleChange}
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="portfolio">Upload Portfolio or Link (Optional)</label>
                  <input
                    type="text"
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    placeholder="Portfolio URL or upload file"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="linkedin">LinkedIn Profile</label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/your-profile"
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="form-section">
              <h3 className="form-section-title">Additional Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="joiningDate">Earliest Joining Date <span className="required">*</span></label>
                  <input
                    type="date"
                    id="joiningDate"
                    name="joiningDate"
                    value={formData.joiningDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="workSetup">Preferred Work Setup <span className="required">*</span></label>
                  <select
                    id="workSetup"
                    name="workSetup"
                    value={formData.workSetup}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select...</option>
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="onsite">On-Site</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="hearAbout">How did you hear about us? <span className="required">*</span></label>
                <select
                  id="hearAbout"
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="website">VLED Website</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="referral">Referral</option>
                  <option value="job-portal">Job Portal</option>
                  <option value="social-media">Social Media</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Consent & Submit */}
            <div className="form-section">
              <div className="form-group consent-group">
                <label className="consent-label">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                  />
                  <span>
                    I confirm that the information provided is accurate and I agree to the{" "}
                    <Link to="/privacy" target="_blank">Privacy Policy</Link>.
                    <span className="required"> *</span>
                  </span>
                </label>
              </div>
              <button type="submit" className="submit-button">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Careers;