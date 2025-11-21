import React, { useState } from "react";
import { Navbar } from "../components/navbar";
import { FooterWrapper } from "../components/FooterFile";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import "../styles/contact.css";

const Contact: React.FC = () => {
  const today = new Date();
  const formattedDate = `${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getDate()).padStart(2, '0')}/${today.getFullYear()}`;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: formattedDate,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwVfwqhrArROPDB_Cx0DqQZCMGeIuSI4nGp3qECjk2JHWbph-YB7P8OGOWI8RKWp6KaFA/exec", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "text/plain" },
      });
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", date: formattedDate, message: "" });
      } else {
        alert("Submission failed: " + response.statusText);
      }
    } catch (err) {
      alert("Submission error: " + err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <Navbar />
      
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-description">
            We'd love to hear from you. Get in touch with VLED Lab for collaborations, inquiries, or just to say hello.
          </p>
        </div>
      </div>

      <div className="contact-main-content">
        <div className="contact-info-section">
          <h2 className="section-title">Get in Touch with Us</h2>
          <p className="section-description">
            Discover the vision, values, and innovations driving VLED Lab as we explore how design, research, and technology come together to transform education.
          </p>

          <div className="contact-details-grid">
            <div className="contact-detail-card">
              <div className="detail-icon-wrapper">
                <FaMapMarkerAlt className="detail-icon" />
              </div>
              <h3 className="detail-title">Address</h3>
              <p className="detail-text">
                VLED, Super Academic Block<br />
                Indian Institute of Technology, Ropar<br />
                Rupnagar, Punjab 140001
              </p>
            </div>

            <div className="contact-detail-card">
              <div className="detail-icon-wrapper">
                <FaEnvelope className="detail-icon" />
              </div>
              <h3 className="detail-title">Email</h3>
              <p className="detail-text">
                vled@iitrpr.ac.in
              </p>
            </div>

            <div className="contact-detail-card">
              <div className="detail-icon-wrapper">
                <FaPhone className="detail-icon" />
              </div>
              <h3 className="detail-title">Phone</h3>
              <p className="detail-text">
                +91-1881-242175
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h3 className="form-section-title">Contact Form</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  id="date"
                  className="form-input"
                  placeholder="mm/dd/yyyy"
                  value={formData.date}
                  readOnly
                />
              </div>
            </div>
            <div className="form-group full-width">
              <textarea
                id="message"
                rows={5}
                className="form-textarea"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            {submitSuccess && <div className="success-message">Thank you! Your message has been sent.</div>}
          </form>
        </div>
      </div>

      <FooterWrapper />
    </div>
  );
};

export default Contact;
