import React from 'react';
import '../styles/legal.css';

const Privacy: React.FC = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-intro">
          VLED Lab ("we," "our," or "us") is committed to protecting your personal information and ensuring a safe browsing and learning experience. This Privacy Policy explains what information we collect, how we use it, and how we safeguard it.
        </p>

        <section className="legal-section">
          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          
          <h3>a. Information You Provide</h3>
          <ul>
            <li>Name, email address, phone number</li>
            <li>Institutional or organizational details</li>
            <li>Messages or inquiries submitted through contact forms</li>
            <li>Information submitted during event registrations, FDP sign-ups, or research participation</li>
          </ul>

          <h3>b. Automatically Collected Information</h3>
          <ul>
            <li>IP address, browser type, device information</li>
            <li>Pages visited and time spent on our site</li>
            <li>Cookies and similar tracking technologies (Used only to improve website performance and user experience)</li>
          </ul>

          <h3>c. Research or Educational Data (If Applicable)</h3>
          <p>If you participate in our studies or educational initiatives, we may collect anonymized learning data strictly for research purposes.</p>
        </section>

        <section className="legal-section">
          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide, operate, and improve our website and services</li>
            <li>Respond to inquiries and communication requests</li>
            <li>Register participants for events, workshops, FDPs, or research activities</li>
            <li>Analyze user interactions to enhance learning tools and content</li>
            <li>Share important updates or announcements related to our work</li>
            <li>Maintain security, detect fraud, and ensure website integrity</li>
          </ul>
          <p><strong>We do not sell your personal information.</strong></p>
        </section>

        <section className="legal-section">
          <h2>3. Cookies & Analytics</h2>
          <p>We may use cookies or analytics tools to understand website performance. You can disable cookies at any time through your browser settings.</p>
        </section>

        <section className="legal-section">
          <h2>4. Sharing of Information</h2>
          <p>We do not share your personal information with third parties except:</p>
          <ul>
            <li>Service providers who support website hosting, analytics, or email communication</li>
            <li>When required by law or to comply with legal obligations</li>
            <li>With your explicit consent for research collaborations</li>
          </ul>
          <p>All third-party partners follow strict confidentiality obligations.</p>
        </section>

        <section className="legal-section">
          <h2>5. Data Protection & Security</h2>
          <p>We implement technical and organizational measures to protect your information from unauthorized access, loss, or misuse. However, no online system is 100% secure. We encourage users to avoid sharing sensitive personal details through open forms.</p>
        </section>

        <section className="legal-section">
          <h2>6. Your Rights</h2>
          <p>Depending on your region, you may have the right to:</p>
          <ul>
            <li>Access the information we hold</li>
            <li>Request corrections or updates</li>
            <li>Ask for data deletion</li>
            <li>Withdraw consent for certain uses</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>7. External Links</h2>
          <p>Our website may contain links to third-party sites. We are not responsible for their privacy practices or content.</p>
        </section>

        <section className="legal-section">
          <h2>8. Changes to This Privacy Policy</h2>
          <p>We may update this policy occasionally. Updates will be posted on this page with a revised "Last Updated" date.</p>
        </section>

        <section className="legal-section">
          <h2>9. Contact Us</h2>
          <p>For questions about this Privacy Policy, write to us at:</p>
          <p className="contact-email">
            <a href="mailto:vled@iitrpr.ac.in">vled@iitrpr.ac.in</a>
          </p>
        </section>

        <p className="legal-updated">Last Updated: November 21, 2025</p>
      </div>
    </div>
  );
};

export default Privacy;
