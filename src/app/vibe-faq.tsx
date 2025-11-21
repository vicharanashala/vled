import { useState } from 'react';
import { FDPNavbar } from '../components/FDPNavbar';
import { FooterWrapper } from '../components/FooterFile';
import '../styles/fdp.css';

export default function VibeFAQ() {
  const [openAccordion, setOpenAccordion] = useState<string>('faq1');

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? '' : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <FDPNavbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ViBe Platform - Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions about using the ViBe learning platform
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">

            {/* FAQ 1 - How to Login */}
            <div className="mb-5">
              <div className="accordion" id="vibeFAQ">
                
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button ${openAccordion !== 'faq1' ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => toggleAccordion('faq1')}
                    >
                      How do I log in to the ViBe platform?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${openAccordion === 'faq1' ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <div className="mb-3">
                        <p><strong>Step 1:</strong> Use the invite link sent to your registered email. You will receive an email from vicharanshala.</p>
                      </div>
                      <div className="mb-3">
                        <p><strong>Step 2:</strong> Open the mail and click on the Accept Invite button in the mail itself.</p>
                      </div>
                      <div className="mb-3">
                        <p><strong>Step 3:</strong> You will be redirected to the following page.</p>
                        <div className="my-3">
                          <img src="/images/vibe-faq/Login1.png" alt="Login Step 1" className="img-fluid rounded border" />
                        </div>
                        <div className="my-3">
                          <img src="/images/vibe-faq/Login2.png" alt="Login Step 2" className="img-fluid rounded border" />
                        </div>
                        <div className="my-3">
                          <img src="/images/vibe-faq/Login3.png" alt="Login Step 3" className="img-fluid rounded border" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <p><strong>Step 4:</strong> Click on Continue as Student, always login as a Student.</p>
                      </div>
                      <div className="mb-3">
                        <p><strong>Step 5:</strong> As soon as you click on Continue as Student you will be redirected to the following page.</p>
                        <div className="my-3">
                          <img src="/images/vibe-faq/Login4.png" alt="Login Step 4" className="img-fluid rounded border" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <p><strong>Step 6:</strong> Now click on Continue with Google so continue with your registered email ID (The one from which you got the link)</p>
                      </div>
                      <div className="mb-3">
                        <p><strong>Step 7:</strong> As soon as you continue with Google you will be redirected to the Dashboard.</p>
                        <div className="my-3">
                          <img src="/images/vibe-faq/Login5.png" alt="Dashboard" className="img-fluid rounded border" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ 2 - No Course Enrolled */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button ${openAccordion !== 'faq2' ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => toggleAccordion('faq2')}
                    >
                      I accepted the invite, but it shows "No course enrolled." What should I do?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${openAccordion === 'faq2' ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <div className="mb-3">
                        <p><strong>Step 1:</strong> Go to the profile section of your dashboard.</p>
                        <div className="my-3">
                          <img src="/images/vibe-faq/No_course_enrolled.png" alt="No Course Enrolled" className="img-fluid rounded border" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <p><strong>Step 2:</strong> Please make sure you're signed in with the same email ID you used during registration. You can verify this by logging into your Google account (the one where you originally received the registration link).</p>
                      </div>
                      <div className="mb-3">
                        <p><strong>Step 3:</strong> If your institute uses an alias email, try logging in with the registered ID directly.</p>
                      </div>
                      <div className="mb-3">
                        <p><strong>Step 4:</strong> If the issue persists, inform support so we can manually add you.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ 3 - Videos Not Playing */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button ${openAccordion !== 'faq3' ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => toggleAccordion('faq3')}
                    >
                      Videos are not playing / stuck on repeat.
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${openAccordion === 'faq3' ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <p><strong>Step 1:</strong> Make sure you are watching the videos in sequential order without skipping.</p>
                      <p><strong>Step 2:</strong> Allow camera and microphone access (mandatory for progress tracking).</p>
                      <p><strong>Step 3:</strong> Clear your browser cache and cookies, then refresh with Ctrl + Shift + R.</p>
                    </div>
                  </div>
                </div>

                {/* FAQ 4 - Access Restricted */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button ${openAccordion !== 'faq4' ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => toggleAccordion('faq4')}
                    >
                      I am getting an "Access Restricted" error.
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${openAccordion === 'faq4' ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <p className="mb-3">This usually happens if a step is skipped.</p>
                      <div className="mb-3">
                        <p><strong>Step 1:</strong> Please watch each video in order.</p>
                      </div>
                      <div className="mb-3">
                        <p><strong>Step 2:</strong> If it still persists, try refreshing the page by pressing Ctrl + R. You may be redirected to the dashboard, but don't worry—you can easily return to your course and continue from where you left off.</p>
                        <div className="my-3">
                          <img src="/images/vibe-faq/Access_Restricted.png" alt="Access Restricted Error" className="img-fluid rounded border" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ 5 - Quiz Answers */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button ${openAccordion !== 'faq5' ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => toggleAccordion('faq5')}
                    >
                      My quiz answers are correct, but the system is marking them wrong.
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${openAccordion === 'faq5' ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <p><strong>Step 1:</strong> Please note the video number and case study name.</p>
                      <p><strong>Step 2:</strong> Report it to the support desk.</p>
                      <p><strong>Step 3:</strong> In some cases, the issue is resolved from the backend within a few hours.</p>
                    </div>
                  </div>
                </div>

                {/* FAQ 6 - Dashboard Progress */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button ${openAccordion !== 'faq6' ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => toggleAccordion('faq6')}
                    >
                      My dashboard shows less than 100% even after completing all videos/quizzes.
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${openAccordion === 'faq6' ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <p>Sometimes, progress may take time to update.</p>
                      <ul className="fdp-list">
                        <li>Refresh your browser and check again.</li>
                        <li>In case of discrepancies, the Google Sheet records maintained by organizers are considered final.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* FAQ 7 - Cannot Find Course */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button ${openAccordion !== 'faq7' ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => toggleAccordion('faq7')}
                    >
                      I cannot find my course on the dashboard.
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${openAccordion === 'faq7' ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <div className="mb-3">
                        <p><strong>Step 1:</strong> Accept the invite link from your registered email.</p>
                      </div>
                      <div className="mb-3">
                        <p><strong>Step 2:</strong> If you already accepted, check under Invites (top-right of dashboard).</p>
                        <div className="my-3">
                          <img src="/images/vibe-faq/Course_Dash1.png" alt="Course Dashboard 1" className="img-fluid rounded border" />
                        </div>
                        <div className="my-3">
                          <img src="/images/vibe-faq/Course_Dash2.png" alt="Course Dashboard 2" className="img-fluid rounded border" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <p><strong>Step 3:</strong> Accept the course invite by clicking on the "Invites" button located at the top-right corner of the page.</p>
                      </div>
                      <div className="mb-3">
                        <p><strong>Step 4:</strong> If you're still unable to view your courses on the dashboard, please reach out to the Support Desk for assistance.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ 8 - Certificate */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button ${openAccordion !== 'faq8' ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => toggleAccordion('faq8')}
                    >
                      How do I get my certificate?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${openAccordion === 'faq8' ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <div className="mb-3">
                        <p><strong>Step 1:</strong> Certificates are issued only if all requirements are completed (100% videos, quizzes, assignments, polls, and project components if applicable).</p>
                        <div className="my-3">
                          <img src="/images/vibe-faq/Certificate.png" alt="Certificate" className="img-fluid rounded border" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <p><strong>Step 2:</strong> Certificates are compiled after verification.</p>
                      </div>
                      <div className="mb-3">
                        <p><strong>Step 3:</strong> Then sent to your registered email.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ 9 - Missed Deadline */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button ${openAccordion !== 'faq9' ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => toggleAccordion('faq9')}
                    >
                      I missed completing the course within the deadline. What should I do?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${openAccordion === 'faq9' ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <p>If you could not finish before the deadline, you will need to register again for the next cohort.</p>
                    </div>
                  </div>
                </div>

                {/* FAQ 10 - Technical Issues */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button ${openAccordion !== 'faq10' ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => toggleAccordion('faq10')}
                    >
                      Whom should I contact for technical issues?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${openAccordion === 'faq10' ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <p className="mb-3">Please share a screenshot or screen recording of the issue along with your registered email ID. You can send this either to the support desk email or in the WhatsApp group.</p>
                      <p className="mb-2"><strong>While reporting, kindly include the following details:</strong></p>
                      <ul className="fdp-list">
                        <li>Your full name</li>
                        <li>Your registered email ID</li>
                        <li>The FDP name with cohort</li>
                      </ul>
                      <p className="mt-3">Providing these details will help our support team resolve your issue more quickly and efficiently.</p>
                    </div>
                  </div>
                </div>

                {/* FAQ 11 - Mobile/Tablet Access */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button ${openAccordion !== 'faq11' ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => toggleAccordion('faq11')}
                    >
                      Can we use Mobile or tablet to access the program?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${openAccordion === 'faq11' ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <p>The software cannot be accessed using a mobile phone or tablet. Please ensure you are using a desktop, PC, or laptop with an active camera and microphone.</p>
                    </div>
                  </div>
                </div>

                {/* FAQ 12 - Completion Deadline */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button ${openAccordion !== 'faq12' ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => toggleAccordion('faq12')}
                    >
                      What is the last date for completion of all ViBe activity?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${openAccordion === 'faq12' ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <p>All ViBe-related activities and assignments to be completed by a deadline which will be mentioned in your welcome mail.</p>
                    </div>
                  </div>
                </div>

                {/* FAQ 13 - Face Detection */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button ${openAccordion !== 'faq13' ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => toggleAccordion('faq13')}
                    >
                      ViBe is not detecting my face, what should I do?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${openAccordion === 'faq13' ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <p className="mb-3">To ensure your face is properly detected by the software, please follow these guidelines:</p>
                      <ul className="fdp-list">
                        <li>Sit in a well-lit room.</li>
                        <li>Keep your face uncovered at all times.</li>
                        <li>Ensure the background is clear and not blurred.</li>
                        <li>Position the camera to capture your entire face.</li>
                        <li>Avoid lighting that causes glare or shadow on your face.</li>
                        <li>Confirm that your camera is switched on and has the necessary permissions.</li>
                        <li>Sit in a quiet place to avoid disturbances.</li>
                        <li>Ensure no one else is visible in the camera frame.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* FAQ 14 - Cannot Login */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button ${openAccordion !== 'faq14' ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => toggleAccordion('faq14')}
                    >
                      Why can't I log in or access the ViBe?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${openAccordion === 'faq14' ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <p><strong>Step 1:</strong> Ensure that you have accepted the link sent to your registered email ID.</p>
                      <p><strong>Step 2:</strong> If it still doesn't work then refresh the page by pressing Ctrl + R or clear the cache by pressing Ctrl + Shift + R.</p>
                      <p><strong>Step 3:</strong> If the issue persists, please contact our support desk via email or message, providing your name, registered email ID, and either a screenshot or a screen recording of the problem.</p>
                    </div>
                  </div>
                </div>

                {/* FAQ 15 - Quiz Failed */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button ${openAccordion !== 'faq15' ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => toggleAccordion('faq15')}
                    >
                      Why do I see the "Quiz Failed" option every time I submit my answers?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${openAccordion === 'faq15' ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <p className="mb-3">This issue can be faced due to several reasons. You can do the following steps to overcome it:</p>
                      <ul className="fdp-list">
                        <li>Refresh the page using Ctrl+R.</li>
                        <li>You can logout and login again.</li>
                        <li>If even after then you are facing the same issue then please contact our support desk via email or message, providing your name, registered email ID, and either a screenshot or a screen recording of the problem.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* FAQ 16 - Videos Auto-Restart */}
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button ${openAccordion !== 'faq16' ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => toggleAccordion('faq16')}
                    >
                      Why do my videos auto-restart?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${openAccordion === 'faq16' ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <p className="mb-3">The videos can auto restart due to the following reasons:</p>
                      <ul className="fdp-list">
                        <li>Face not being detected.</li>
                        <li>Blur background</li>
                        <li>Background noise being detected.</li>
                        <li>Face is not visible.</li>
                        <li>More than one person in the camera is being detected.</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Support Contact Section */}
          <div className="mt-8 bg-blue-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-4">
              Our support team is here to help you with any issues or questions about the ViBe platform.
            </p>
            <a 
              href="mailto:vibe-support@vicharanashala.zohodesk.in" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </a>
          </div>

        </div>
      </div>

      <FooterWrapper />
    </div>
  );
}
