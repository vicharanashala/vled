import { FDPNavbar } from '../components/FDPNavbar';
import '../styles/fdp.css';
import { useState } from 'react';

const FDPFAQ = () => {
  const [openAccordion, setOpenAccordion] = useState<string>('faq1');

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? '' : id);
  };

  return (
    <div className="fdp-page">
      <FDPNavbar activePage="faq" />
      
      {/* Hero Section */}
      <section className="fdp-hero" style={{ minHeight: '40vh' }}>
        <div className="container">
          <div className="row align-items-center" style={{ minHeight: '40vh' }}>
            <div className="col-lg-12 text-center">
              <h1 className="fdp-hero-title">FDP FAQ</h1>
              <p className="fdp-hero-subtitle">
                Frequently Asked Questions about the Faculty Development Program
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              
              {/* General Section */}
              <div className="mb-5">
                <h2 className="fdp-section-title mb-4">General</h2>
                <div className="accordion" id="fdpFAQGeneral">
                
                  {/* FAQ 1 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'faq1' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('faq1')}
                      >
                        What is the structure of this Faculty Development Program (FDP)?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'faq1' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        The FDP is designed as a blended learning Program, combining live support sessions with self-paced modules on ViBe - an AI Powered Learning Platform.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'faq2' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('faq2')}
                      >
                        What are the Key Highlights of this FDP?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'faq2' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        <ul className="fdp-list">
                          <li>No Attendance</li>
                          <li>Flexible and Self-Paced</li>
                          <li>Engaging Quizzes</li>
                          <li>Interactive Support Sessions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 3 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'faq3' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('faq3')}
                      >
                        Will there be any live sessions for FDPs?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'faq3' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        No. It is self-paced learning. There will be occasional live support sessions to assist the queries of participants.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 4 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'faq4' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('faq4')}
                      >
                        How much time should I dedicate per week?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'faq4' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        Since the program is self-paced, you can manage your own schedule. You can complete the FDP smoothly before the deadline.
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Registration Section */}
              <div className="mb-5">
                <h2 className="fdp-section-title mb-4">Registration</h2>
                <div className="accordion" id="fdpFAQRegistration">

                  {/* FAQ 1 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'reg1' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('reg1')}
                      >
                        How do I register for the FDP?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'reg1' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        <p>Visit the official website: <a href="https://fdp.vicharanashala.ai/" target="_blank" rel="noopener noreferrer">https://fdp.vicharanashala.ai/</a></p>
                        <ul className="fdp-list">
                          <li>You will see the registration links for two FDPs: GuruSetu and CBPAI.</li>
                          <li>Click on the desired FDP link to open the Google Form and complete your registration.</li>
                          <li>After registration, you will receive a welcome mail from "mmttp@iitrpr.ac.in" and an invitation link on your registered email ID from "vicharanashala@gmail.com".</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'reg2' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('reg2')}
                      >
                        Will there be any fees to join FDP?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'reg2' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        No. You can register for FDPs completely free of cost and enjoy the learning.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 3 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'reg3' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('reg3')}
                      >
                        What if I miss registration immediately on ViBe?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'reg3' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        Invitation links sent to your registered email ID usually remain active, but it's recommended to register as soon as possible.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 4 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'reg4' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('reg4')}
                      >
                        Can I register for more than one FDP?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'reg4' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        Yes. Participants can register for multiple FDPs if they wish and enjoy the learning.
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Support/Help & Attendance Section */}
              <div className="mb-5">
                <h2 className="fdp-section-title mb-4">Support/Help & Attendance</h2>
                <div className="accordion" id="fdpFAQSupport">

                  {/* FAQ 1 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'support1' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('support1')}
                      >
                        Is there any attendance criteria?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'support1' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        Participants are not required to follow any attendance criteria or formalities. The program is fully self-paced, allowing participants to join at any time, learn at their own pace, and complete the assignments before the deadline mentioned in the welcome mail.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'support2' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('support2')}
                      >
                        Will there be post-FDP support?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'support2' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        Yes. Participants will get helpdesk support for a limited period after the FDP.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 3 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'support3' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('support3')}
                      >
                        Do I need to attend live sessions?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'support3' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        No. The FDPs are fully self-paced. You can access all the content on ViBe anytime, according to your convenience. Support sessions are optional and help you clarify your doubts.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 4 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'support4' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('support4')}
                      >
                        To whom can I contact if I have any query regarding content or modules?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'support4' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        You can share your issue with the support desk team with complete details like screenshots or screen recordings.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 5 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'support5' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('support5')}
                      >
                        I didn't receive the invitation link. What should I do?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'support5' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        First, check your spam or junk folder if you have received an email from Vicharanashala. If you still don't see it, raise a support request through the form or email the support team at <a href="mailto:vibe-support@vicharanashala.zohodesk.in">vibe-support@vicharanashala.zohodesk.in</a>.
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Certificate Section */}
              <div className="mb-5">
                <h2 className="fdp-section-title mb-4">Certificate</h2>
                <div className="accordion" id="fdpFAQCertificate">

                  {/* FAQ 1 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'cert1' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('cert1')}
                      >
                        Is this FDP certified?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'cert1' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        Yes. Participants who complete all required sessions, submit assignments, and meet the engagement criteria will receive a UGC-approved FDP certificate.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'cert2' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('cert2')}
                      >
                        How will I get my certificate?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'cert2' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        Certificates are issued only when the course is complete and there is 100% progress in videos, quizzes, assignments, polls, and project work.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 3 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'cert3' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('cert3')}
                      >
                        Can we submit assignments and get certificates without watching videos?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'cert3' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        No. Video completion is monitored and required for assignment submission and certification.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 4 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'cert4' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('cert4')}
                      >
                        What if some details are misspelled on the certificate?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'cert4' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        Contact the support team at <a href="mailto:support-cbpai@vicharanashala.zohodesk.in">support-cbpai@vicharanashala.zohodesk.in</a> immediately to correct any errors. Corrections may take a few days depending on the verification process.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 5 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'cert5' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('cert5')}
                      >
                        How long does it take to receive the certificate?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'cert5' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        Certificates are generally issued within one or two weeks of the program deadline.
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* FDP Content Section */}
              <div className="mb-5">
                <h2 className="fdp-section-title mb-4">FDP Content</h2>
                <div className="accordion" id="fdpFAQContent">

                  {/* FAQ 1 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'content1' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('content1')}
                      >
                        Till when can I complete the course videos?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'content1' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        You need to complete all video modules by the deadline along with quizzes and projects.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'content2' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('content2')}
                      >
                        Will there be any project at the end of the FDP?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'content2' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        Yes. The final project is an implementation of your learning from the FDP, whether it's a pedagogy, tool, or any key takeaway that you've applied directly in your classroom. Submission of this project is required to receive the certificate.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 3 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'content3' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('content3')}
                      >
                        Does the order in which you finish the Modules matter?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'content3' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        Yes. You are required to finish the modules in proper order within the programme duration.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 4 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'content4' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('content4')}
                      >
                        Can I download the content for offline use?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'content4' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        No. Downloading is generally not allowed. You can only access the content through ViBe to ensure your progress is tracked for completion and certification.
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* MEME Section */}
              <div className="mb-5">
                <h2 className="fdp-section-title mb-4">MEME (Multiple Entry Multiple Exit)</h2>
                <div className="accordion" id="fdpFAQMEME">

                  {/* FAQ 1 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'meme1' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('meme1')}
                      >
                        What is the MEME (Multiple Entry Multiple Exit) policy?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'meme1' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        It is a policy that has been made to ensure that people can attend the programme without worries of busy schedules. Within the entire programme, you can attend and complete the respective and distinct modules anytime before the deadline.
                      </div>
                    </div>
                  </div>

                  {/* FAQ 2 */}
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openAccordion !== 'meme2' ? 'collapsed' : ''}`}
                        type="button" 
                        onClick={() => toggleAccordion('meme2')}
                      >
                        How does it work?
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openAccordion === 'meme2' ? 'show' : ''}`}>
                      <div className="accordion-body">
                        MEME (Multiple Entry, Multiple Exit) allows participants to join and leave a program at any time without affecting their progress. However, in ViBe, you must follow the modules in order. You cannot skip sections, and progress must be completed sequentially.
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FDPFAQ;