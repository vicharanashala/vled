import { FDPNavbar } from '../components/FDPNavbar';
import '../styles/fdp.css';

const FDPConceptNote = () => {
  return (
    <div className="fdp-page">
      <FDPNavbar activePage="concept" />
      
      {/* Hero Section */}
      <section className="fdp-hero" style={{ minHeight: '40vh' }}>
        <div className="container">
          <div className="row align-items-center" style={{ minHeight: '40vh' }}>
            <div className="col-lg-12 text-center">
              <h1 className="fdp-hero-title">Program Concept & Framework</h1>
              <p className="fdp-hero-subtitle">
                Capacity Building Program on Artificial Intelligence (CBPAI)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="fdp-objectives py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <h2 className="fdp-section-title">Introduction</h2>
              <p className="fdp-description">
                The <strong>Capacity Building Program on Artificial Intelligence (CBPAI)</strong> is an institutional initiative aimed at empowering educators, researchers, and professionals with hands-on experience in applying Artificial Intelligence to real-world academic and professional contexts. Conducted under the <strong>VIBE asynchronous learning model</strong>, the program emphasizes <strong>learning by doing</strong>— enabling participants to explore, experiment, and implement AI tools within their teaching, research, and institutional practices.
              </p>
              <p className="fdp-description">
                Through an accessible and practice-oriented design, the program bridges the gap between AI concepts and their real-world applications. Participants learn to integrate AI tools for productivity, pedagogy, and digital innovation, thereby cultivating technological fluency and confidence in using emerging tools for educational transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rationale Section */}
      <section className="fdp-objectives py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <h2 className="fdp-section-title">Rationale</h2>
              <p className="fdp-description">
                Artificial Intelligence has become a defining force in shaping the future of education. While institutions increasingly acknowledge its potential, the challenge lies in meaningful adoption and contextual implementation. The CBPAI addresses this challenge by equipping educators with relevant AI-driven skills and strategies that enhance learning outcomes, research efficiency, and administrative effectiveness.
              </p>
              <p className="fdp-description">
                In alignment with this vision, the <strong>GuruSetu FDP (Pilot Edition)</strong> explores the convergence of AI, creativity, and pedagogy — guiding educators to reimagine their classrooms as spaces of reflection, collaboration, and innovation. Together, these programs foster a culture of <strong>capacity building, creativity, and innovation</strong> in technology-enabled education — aligning with the objectives of the <strong>National Education Policy (NEP 2020)</strong> and India's vision for a future-ready academic ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Objectives Section */}
      <section className="fdp-objectives py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <h2 className="fdp-section-title">Program Objectives</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ul className="fdp-list">
                <li>To build capacity among educators and researchers in understanding and applying Artificial Intelligence in education and institutional management.</li>
                <li>To promote creative and inclusive pedagogical practices through AI-enabled tools and approaches.</li>
                <li>To enhance research, productivity, and innovation skills through hands-on AI applications.</li>
                <li>To strengthen institutional readiness for integrating AI in line with NEP 2020 and digital transformation goals.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Participants Section */}
      <section className="fdp-objectives py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <h2 className="fdp-section-title">Target Participants</h2>
              <p className="fdp-description">
                The program is designed for <strong>faculty members, researchers, academic administrators, and professionals</strong> in higher education institutions who seek to integrate Artificial Intelligence and digital tools into teaching, research, and institutional practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes Section */}
      <section className="fdp-objectives py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <h2 className="fdp-section-title">Learning Outcomes</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="fdp-subsection-title">Technical Proficiency</h3>
                  <ul className="fdp-list">
                    <li>Develop practical understanding of AI tools and platforms for education, research, and digital innovation.</li>
                    <li>Apply AI for productivity enhancement through platforms such as Google Sheets, App Scripts, and GitHub Pages.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="fdp-subsection-title">Pedagogical Integration</h3>
                  <ul className="fdp-list">
                    <li>Design and deliver AI-supported, creativity-based learning experiences using storytelling, gamification, and reflective strategies.</li>
                    <li>Incorporate AR, VR, and Metaverse applications into classroom practices for greater engagement and inclusivity.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="fdp-subsection-title">Research Enhancement</h3>
                  <ul className="fdp-list">
                    <li>Utilize AI for data analysis, academic research, and scholarly publication through AI-assisted tools and workflows.</li>
                    <li>Engage in case-based learning that demonstrates how AI transforms educational research and classroom practices.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="fdp-subsection-title">Professional & Institutional Growth</h3>
                  <ul className="fdp-list">
                    <li>Enhance academic and administrative efficiency with AI-enabled assessment and feedback mechanisms.</li>
                    <li>Develop agile, innovation-driven mindsets to promote project-based and technology-integrated educational approaches.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Modules Section */}
      <section className="fdp-objectives py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <h2 className="fdp-section-title">Key Modules & Case Studies</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="fdp-subsection-title mb-3">
                    <i className="fas fa-laptop-code me-2" style={{ color: 'rgb(233, 103, 52)' }}></i>
                    AI in Productivity & Learning
                  </h4>
                  <ul className="fdp-list">
                    <li>Enhancing Google Sheets using App Scripts (Education Case Study)</li>
                    <li>Exit Ticket for assessment and feedback</li>
                    <li>Lesson Planning with Large Language Models (LLMs)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="fdp-subsection-title mb-3">
                    <i className="fas fa-globe me-2" style={{ color: 'rgb(233, 103, 52)' }}></i>
                    AI for Digital Empowerment
                  </h4>
                  <ul className="fdp-list">
                    <li>Building AI-enhanced websites with GitHub Pages & Markdown</li>
                    <li>Resume creation using ChatGPT and GitHub integration</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="fdp-subsection-title mb-3">
                    <i className="fas fa-search me-2" style={{ color: 'rgb(233, 103, 52)' }}></i>
                    AI in Research & Knowledge Building
                  </h4>
                  <ul className="fdp-list">
                    <li>AI in Action: Research for transforming classrooms</li>
                    <li>AI in Research Tools (Part 1 & 2)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="fdp-subsection-title mb-3">
                    <i className="fas fa-tools me-2" style={{ color: 'rgb(233, 103, 52)' }}></i>
                    AI Applications & Tools
                  </h4>
                  <ul className="fdp-list">
                    <li>Agile Technology in Education</li>
                    <li>Exploring Napkin.ai and Reflect App (under GuruSetu pilot)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GuruSetu FDP Section */}
      <section className="fdp-objectives py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <h2 className="fdp-section-title">GuruSetu FDP (Pilot Edition)</h2>
              <p className="fdp-description">
                The GuruSetu Faculty Development Program complements CBPAI by focusing on next-generation teaching strategies, creative pedagogies, and innovative assessment practices. It brings together educators, technologists, and creative practitioners to co-develop reflective and inclusive learning frameworks.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mb-4">
              <h3 className="fdp-subsection-title">Thematic Pillars & Sessions</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-start border-4 border-primary">
                <div className="card-body">
                  <h5 className="mb-3"><strong>1. Innovating Education with AI & Beyond</strong></h5>
                  <ul className="fdp-list">
                    <li>From Tasks to Thinking: The New Education Mindset</li>
                    <li>The New Classroom Blueprint</li>
                    <li>AI Tools, Collaborative Teaching, and Practical Examples</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-start border-4 border-success">
                <div className="card-body">
                  <h5 className="mb-3"><strong>2. Engagement Through Arts, Stories & Reflection</strong></h5>
                  <ul className="fdp-list">
                    <li>Bringing Arts and Stories into Teaching for Engagement</li>
                    <li>Art, Stories & AI in Teaching: Engaging Classrooms Through Creativity</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-start border-4 border-warning">
                <div className="card-body">
                  <h5 className="mb-3"><strong>3. Active Learning & STEM Education</strong></h5>
                  <ul className="fdp-list">
                    <li>Active Learning in Higher Education: Practical Strategies</li>
                    <li>Active Learning Strategies in STEM</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-start border-4 border-info">
                <div className="card-body">
                  <h5 className="mb-3"><strong>4. The Future of Education & PBL</strong></h5>
                  <ul className="fdp-list">
                    <li>Agile Technology in Education</li>
                    <li>Exploring Napkin.ai and Reflect App</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes Section */}
      <section className="fdp-objectives py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <h2 className="fdp-section-title">Expected Outcomes</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ul className="fdp-list">
                <li>Faculty members demonstrate enhanced confidence and competence in using AI tools for teaching, learning, and research.</li>
                <li>Participants develop prototypes, lesson plans, or digital solutions using AI-based applications.</li>
                <li>A sustained community of practice is established for educators to collaborate and innovate using AI in education.</li>
                <li>Institutional capacity is strengthened to integrate AI in line with NEP 2020 goals for technology-enabled and inclusive learning.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Mode Section */}
      <section className="fdp-objectives py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <h2 className="fdp-section-title">Delivery Mode</h2>
              <p className="fdp-description">
                The program is delivered in a <strong>fully asynchronous mode</strong> under the <strong>VIBE learning framework</strong>, offering flexible engagement formats ranging from <strong>5-day intensives to month-long learning cycles</strong>, depending on the design and focus of each Faculty Development Program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="fdp-objectives py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <h2 className="fdp-section-title">Conclusion</h2>
              <p className="fdp-description">
                The <strong>CBPAI</strong> and <strong>GuruSetu FDP</strong> together represent a forward-looking approach to faculty development — one that is <strong>asynchronous, experiential, creative, and deeply aligned</strong> with the evolving landscape of education. These programs nurture AI literacy alongside pedagogical innovation, preparing educators to lead <strong>agile, inclusive, and technology-driven learning environments</strong> of the future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FDPConceptNote;