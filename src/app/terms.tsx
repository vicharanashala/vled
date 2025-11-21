import React from 'react';
import '../styles/legal.css';

const Terms: React.FC = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1 className="legal-title">Terms & Conditions</h1>
        <p className="legal-intro">
          By accessing or using the VLED Lab website, you agree to comply with these Terms & Conditions. Please read them carefully.
        </p>

        <section className="legal-section">
          <h2>1. Use of Our Website</h2>
          <p>You may use our website for:</p>
          <ul>
            <li>Learning about VLED Lab initiatives</li>
            <li>Accessing research, events, and resources</li>
            <li>Registering for workshops, FDPs, and programs</li>
            <li>Contacting us for collaboration or inquiries</li>
          </ul>
          
          <p>You must not use the site for:</p>
          <ul>
            <li>Unauthorized commercial activity</li>
            <li>Uploading harmful or malicious content</li>
            <li>Violating any applicable laws</li>
            <li>Attempting to access restricted areas or databases</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>2. Intellectual Property</h2>
          <p>All content—text, graphics, designs, research materials, logos, videos, and resources—belongs to VLED Lab unless otherwise stated.</p>
          
          <p>You may not:</p>
          <ul>
            <li>Copy or redistribute materials without permission</li>
            <li>Modify or republish content as your own</li>
            <li>Use our name or branding without written consent</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Event & Program Registration</h2>
          <p>If you register for an event (workshop, FDP, research study):</p>
          <ul>
            <li>You agree to provide accurate information</li>
            <li>You agree to follow event guidelines</li>
            <li>We may modify, reschedule, or cancel events when necessary</li>
            <li>Payments (if applicable) will follow the stated refund or cancellation policy</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Research Participation</h2>
          <p>If you participate in research conducted by VLED Lab, additional consent forms or ethics guidelines will apply. All research data is treated confidentially and primarily used in aggregated, anonymized formats.</p>
        </section>

        <section className="legal-section">
          <h2>5. Accuracy of Information</h2>
          <p>We strive to provide accurate and updated information, but:</p>
          <ul>
            <li>Some content may change over time</li>
            <li>We do not guarantee error-free or uninterrupted access</li>
            <li>We reserve the right to update website content without prior notice</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>6. Third-Party Links</h2>
          <p>We may include links to external websites or tools. We are not responsible for their content or policies.</p>
        </section>

        <section className="legal-section">
          <h2>7. Limitation of Liability</h2>
          <p>VLED Lab is not liable for:</p>
          <ul>
            <li>Any direct or indirect damages arising from website use</li>
            <li>Website downtime, errors, or data loss</li>
            <li>User actions or improper use of resources</li>
          </ul>
          <p>Your use of the website is at your own discretion.</p>
        </section>

        <section className="legal-section">
          <h2>8. Termination of Access</h2>
          <p>We reserve the right to block or restrict website access if:</p>
          <ul>
            <li>Terms are violated</li>
            <li>Abuse, fraud, or harmful activity is detected</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>9. Changes to Terms</h2>
          <p>We may update these Terms & Conditions anytime. Continued use of the website means you accept the updated Terms.</p>
        </section>

        <section className="legal-section">
          <h2>10. Contact Us</h2>
          <p>For questions about these Terms, reach us at:</p>
          <p className="contact-email">
            <a href="mailto:vled@iitrpr.ac.in">vled@iitrpr.ac.in</a>
          </p>
        </section>

        <p className="legal-updated">Last Updated: November 21, 2025</p>
      </div>
    </div>
  );
};

export default Terms;
