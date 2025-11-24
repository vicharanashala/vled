import drSudarshan from '/images/dr-sudarshan2.png';
import meenakshi from '/images/meenakshi4.png';
import aditya from '/images/aditya.jpeg';
import shivani from '/images/shivani-aggarwal4.png';
import { Navbar } from "../components/navbar";
import '../styles/aboutDled.css';

const About = () => {
  return (
    <div className="about-page">
      <Navbar /> 
      {/* Hero Section */}
      <section className="hero-section position-relative overflow-hidden">
        <div className="container py-6 mt-5">
          <div className="row align-items-center min-vh-60">
            <div className="col-lg-7">
              <h1 className="display-3 fw-bold text-dark mb-4">
                Redefining Education Through Innovation
              </h1>
              <p className="lead text-secondary mb-4">
                The Vicharanashala Lab for Education of Design (VLED) at IIT Ropar is pioneering 
                transformative approaches to learning in the digital age.
              </p>
              <div style={{ display: 'none' }}>
                <a href="#team" className="btn btn-lg px-4 text-light dark-button" style= {{ backgroundColor: 'rgb(233, 103, 52)', borderColor: 'rgb(233, 103, 52)' }}>
                  Meet the Team
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-graphic position-relative p-5">
                <div className="floating-shape shape-1 bg-warning rounded-circle"></div>
                <div className="floating-shape shape-2 bg-info rounded-circle"></div>
                <div className="floating-shape shape-3 bg-danger rounded-circle"></div>
                <img 
                  src="https://media.istockphoto.com/id/2163913043/photo/group-of-four-indian-asian-young-college-friends-with-backpack-books-laptop-standing-isolated.jpg?s=612x612&w=0&k=20&c=w0YePGmUZqeh6oaYi1hTBr4cJmsBsm1kHaB3PvRqwvs=" 
                  alt="VLED Team" 
                  className="img-fluid rounded-4 shadow-lg position-relative"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-6 bg-white" style={{ marginBottom: '5rem' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center mb-5">
                <h2 className="display-4 fw-bold mb-4" style={{ color: 'rgb(233, 103, 52)' }}>
                  <i className="fas fa-eye me-3"></i>Our Vision
                </h2>
              </div>
              <div className="vision-section p-5 rounded-4 shadow-sm bg-light">
                <p className="lead text-center fw-semibold mb-4" style={{ fontSize: '1.3rem', lineHeight: '1.8' }}>
                  We envision a future where learning is thoughtfully designed and deeply human at its core.
                </p>
                <p className="text-secondary mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  A world where education does not follow a one-size-fits-all model, but adapts beautifully to the pace, style, and curiosity of each learner.
                </p>
                <p className="text-secondary mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  In this future, technology acts as an enabler—not a distraction—supporting educators and empowering students through intuitive tools, immersive content, and smart systems. We aim to reshape the way knowledge is created, presented, and experienced so that learning becomes more meaningful, more relevant, and more inspiring.
                </p>
                <p className="text-secondary mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  Our vision is to build an ecosystem where every learning moment feels purposeful, where concepts come alive through great design, and where every learner—regardless of background—can access a transformative educational journey that helps them grow with confidence and joy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-6 bg-light" style={{ marginBottom: '5rem' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center mb-5">
                <h2 className="display-4 fw-bold mb-4" style={{ color: 'rgb(233, 103, 52)' }}>
                  <i className="fas fa-bullseye me-3"></i>Our Mission
                </h2>
              </div>
              <div className="mission-section p-5 rounded-4 shadow-sm bg-white">
                <p className="lead text-center fw-semibold mb-5" style={{ fontSize: '1.3rem', lineHeight: '1.8' }}>
                  Our mission is to redesign the DNA of education by crafting experiences that bring clarity, engagement, and depth to every learning interaction.
                </p>
                <h4 className="fw-bold mb-4">We strive to:</h4>
                <ul className="list-unstyled">
                  <li className="mb-4 d-flex">
                    <i className="fas fa-check-circle me-3 mt-1" style={{ color: 'rgb(233, 103, 52)', fontSize: '1.3rem' }}></i>
                    <div>
                      <strong>Design pedagogically strong learning experiences</strong> using research-backed methods, instructional design principles, and creative storytelling to make education both effective and enjoyable.
                    </div>
                  </li>
                  <li className="mb-4 d-flex">
                    <i className="fas fa-check-circle me-3 mt-1" style={{ color: 'rgb(233, 103, 52)', fontSize: '1.3rem' }}></i>
                    <div>
                      <strong>Build digital-first solutions</strong> that make complex academic concepts accessible through structured content, visuals, interactivity, and adaptive learning pathways.
                    </div>
                  </li>
                  <li className="mb-4 d-flex">
                    <i className="fas fa-check-circle me-3 mt-1" style={{ color: 'rgb(233, 103, 52)', fontSize: '1.3rem' }}></i>
                    <div>
                      <strong>Collaborate closely</strong> with educators, institutions, and learners to understand real classroom challenges and build solutions that genuinely solve them.
                    </div>
                  </li>
                  <li className="mb-4 d-flex">
                    <i className="fas fa-check-circle me-3 mt-1" style={{ color: 'rgb(233, 103, 52)', fontSize: '1.3rem' }}></i>
                    <div>
                      <strong>Use technology mindfully,</strong> ensuring tools support learning outcomes rather than complicate the experience.
                    </div>
                  </li>
                  <li className="mb-4 d-flex">
                    <i className="fas fa-check-circle me-3 mt-1" style={{ color: 'rgb(233, 103, 52)', fontSize: '1.3rem' }}></i>
                    <div>
                      <strong>Create value-driven educational systems</strong> that bridge gaps in understanding, strengthen foundational learning, and encourage lifelong curiosity.
                    </div>
                  </li>
                  <li className="mb-4 d-flex">
                    <i className="fas fa-check-circle me-3 mt-1" style={{ color: 'rgb(233, 103, 52)', fontSize: '1.3rem' }}></i>
                    <div>
                      <strong>Continuously innovate,</strong> reinventing methodologies and experiences so education remains dynamic, relevant, and impactful for future generations.
                    </div>
                  </li>
                </ul>
                <p className="text-center fw-semibold mt-5 mb-0" style={{ fontSize: '1.2rem', color: 'rgb(233, 103, 52)' }}>
                  Everything we do is centered around bringing more meaning, structure, and quality into education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-6 bg-white" style={{ marginBottom: '5rem' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center mb-5">
                <h2 className="display-4 fw-bold mb-4" style={{ color: 'rgb(233, 103, 52)' }}>
                  <i className="fas fa-heart me-3"></i>Core Values
                </h2>
              </div>
              
              <div className="row g-4">
                {/* Value 1 */}
                <div className="col-md-6">
                  <div className="value-card p-4 rounded-4 shadow-sm h-100 bg-light">
                    <div className="d-flex align-items-start mb-3">
                      <i className="fas fa-pencil-ruler fs-1 me-3" style={{ color: 'rgb(233, 103, 52)' }}></i>
                      <h4 className="fw-bold mb-0">Purpose-Driven Design</h4>
                    </div>
                    <p className="text-secondary mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                      We believe that how learning is designed shapes how it is understood.
                    </p>
                    <p className="text-secondary mb-0" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                      Every piece of content, every interaction, and every visual is crafted with intention—to simplify, strengthen, and elevate the learning experience. We design with the learner in mind, always prioritizing clarity and meaningful engagement.
                    </p>
                  </div>
                </div>

                {/* Value 2 */}
                <div className="col-md-6">
                  <div className="value-card p-4 rounded-4 shadow-sm h-100 bg-light">
                    <div className="d-flex align-items-start mb-3">
                      <i className="fas fa-lightbulb fs-1 me-3" style={{ color: 'rgb(233, 103, 52)' }}></i>
                      <h4 className="fw-bold mb-0">Innovation with Heart</h4>
                    </div>
                    <p className="text-secondary mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                      Innovation should serve a purpose.
                    </p>
                    <p className="text-secondary mb-0" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                      We embrace new ideas, technologies, and creative methods that genuinely enhance learning outcomes. Our focus is on building solutions that feel intuitive, human, and thoughtful—never overwhelming or superficial.
                    </p>
                  </div>
                </div>

                {/* Value 3 */}
                <div className="col-md-6">
                  <div className="value-card p-4 rounded-4 shadow-sm h-100 bg-light">
                    <div className="d-flex align-items-start mb-3">
                      <i className="fas fa-universal-access fs-1 me-3" style={{ color: 'rgb(233, 103, 52)' }}></i>
                      <h4 className="fw-bold mb-0">Accessibility for All</h4>
                    </div>
                    <p className="text-secondary mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                      Education should be an equalizer, not a privilege.
                    </p>
                    <p className="text-secondary mb-0" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                      We are committed to making learning accessible across socio-economic, linguistic, and technological boundaries. Our designs strive to ensure every learner, everywhere, can grow without limits.
                    </p>
                  </div>
                </div>

                {/* Value 4 */}
                <div className="col-md-6">
                  <div className="value-card p-4 rounded-4 shadow-sm h-100 bg-light">
                    <div className="d-flex align-items-start mb-3">
                      <i className="fas fa-shield-alt fs-1 me-3" style={{ color: 'rgb(233, 103, 52)' }}></i>
                      <h4 className="fw-bold mb-0">Integrity in Learning</h4>
                    </div>
                    <p className="text-secondary mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                      Trust is built through quality and honesty.
                    </p>
                    <p className="text-secondary mb-0" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                      We hold ourselves to high standards of accuracy, fairness, and responsibility. Every resource we create is fact-checked, thoughtfully curated, and focused on real learning impact—not trends or shortcuts.
                    </p>
                  </div>
                </div>

                {/* Value 5 */}
                <div className="col-md-6">
                  <div className="value-card p-4 rounded-4 shadow-sm h-100 bg-light">
                    <div className="d-flex align-items-start mb-3">
                      <i className="fas fa-users fs-1 me-3" style={{ color: 'rgb(233, 103, 52)' }}></i>
                      <h4 className="fw-bold mb-0">Collaboration & Empathy</h4>
                    </div>
                    <p className="text-secondary mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                      Great education is created together.
                    </p>
                    <p className="text-secondary mb-0" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                      We listen, observe, and co-design with educators, students, and partners. Understanding real needs and lived experiences helps us build solutions that are relatable, inclusive, and effective.
                    </p>
                  </div>
                </div>

                {/* Value 6 */}
                <div className="col-md-6">
                  <div className="value-card p-4 rounded-4 shadow-sm h-100 bg-light">
                    <div className="d-flex align-items-start mb-3">
                      <i className="fas fa-sync-alt fs-1 me-3" style={{ color: 'rgb(233, 103, 52)' }}></i>
                      <h4 className="fw-bold mb-0">Continuous Evolution</h4>
                    </div>
                    <p className="text-secondary mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                      Education must evolve, and so must we.
                    </p>
                    <p className="text-secondary mb-0" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                      We thrive on curiosity, reflection, and growth. We refine our approaches based on research, feedback, and emerging trends, ensuring our learning designs always stay fresh, relevant, and impactful.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-6 bg-light p-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Our Story</h2>
              <p className="lead text-muted">
                From humble beginnings to becoming a hub of educational innovation
              </p>
            </div>
          </div>
          
          {/* Horizontal Timeline */}
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-start position-relative" style={{ padding: '2rem 0' }}>
                {/* Timeline Line */}
                <div className="position-absolute w-100" style={{ height: '4px', backgroundColor: 'rgb(233, 103, 52)', top: '80px', left: '0', zIndex: '0' }}></div>
                
                {/* Timeline Item 2023 */}
                <div className="text-center position-relative" style={{ flex: '1', zIndex: '1' }}>
                  <div className="mb-3">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle shadow-sm" 
                         style={{ width: '80px', height: '80px', backgroundColor: 'rgb(233, 103, 52)', color: 'white' }}>
                      <i className="fas fa-flag fs-3"></i>
                    </div>
                  </div>
                  <h3 className="fw-bold mb-2" style={{ color: 'rgb(233, 103, 52)' }}>2023</h3>
                  <p className="text-secondary mx-auto" style={{ maxWidth: '250px' }}>
                    A small research initiative started to revolutionise Education Design
                  </p>
                </div>

                {/* Timeline Item 2024 */}
                <div className="text-center position-relative" style={{ flex: '1', zIndex: '1' }}>
                  <div className="mb-3">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle shadow-sm" 
                         style={{ width: '80px', height: '80px', backgroundColor: 'rgb(233, 103, 52)', color: 'white' }}>
                      <i className="fas fa-rocket fs-3"></i>
                    </div>
                  </div>
                  <h3 className="fw-bold mb-2" style={{ color: 'rgb(233, 103, 52)' }}>2024</h3>
                  <p className="text-secondary mx-auto" style={{ maxWidth: '250px' }}>
                    First major funding to spearhead with the project and setup of the lab
                  </p>
                </div>

                {/* Timeline Item 2025 */}
                <div className="text-center position-relative" style={{ flex: '1', zIndex: '1' }}>
                  <div className="mb-3">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle shadow-sm" 
                         style={{ width: '80px', height: '80px', backgroundColor: 'rgb(233, 103, 52)', color: 'white' }}>
                      <i className="fas fa-laptop-code fs-3"></i>
                    </div>
                  </div>
                  <h3 className="fw-bold mb-2" style={{ color: 'rgb(233, 103, 52)' }}>2025</h3>
                  <p className="text-secondary mx-auto" style={{ maxWidth: '250px' }}>
                    Launched our first online learning platform prototype
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
          <section id="team" className="py-6 bg-light" style={{ display: 'none' }}>
            <div className="container">
              <div className="row justify-content-center mb-5" style={{ display: 'none' }}>
                <div className="col-lg-8 text-center">
                  <h2 className="display-5 fw-bold mb-3 p-3">Meet Our Team</h2>
                  <p className="lead text-muted">
                    A diverse group of educators, researchers, and technologists <br></br> united by a passion for learning innovation
                  </p>
                </div>
              </div>
              
              <div className="row g-4">
      {[
        { 
          name: 'Dr. Sudarshan Iyengar', 
          role: 'Principal Investigator', 
          bio: 'Education technology specialist with 15+ years experience',
          img: drSudarshan,
          linkedin:'https://www.linkedin.com/in/sudarshan-iyengar-3560b8145/',
          email: 'sudarshan@iitrpr.ac.in'
        },
        { 
          name: 'Meenakshi V', 
          role: 'PhD Researcher', 
          bio: 'Cognitive science and learning design expert',
          img: meenakshi,
          linkedin:'https://www.linkedin.com/in/meenakshi-v-25aa7691/',
          email: 'meenakshi.v@vicharanashala.ai'
        },
        { 
          name: 'Shivani Aggarwal ', 
          role: 'PhD Researcher',
          bio: 'Expert in data analytics and educational assessment', 
          img: shivani,
          linkedin:'https://www.linkedin.com/in/shivani-aggarwal-5865b639/',
          email: 'shivani.aggarwal@vicharanashala.ai'
        },
        {
          name:'Aditya BMV',
          role: 'Software Developer',
          bio: 'Full-stack developer with a focus on educational applications',
          img: aditya,
          linkedin:'https://www.linkedin.com/in/bvmukunda/',
          email: 'aditya.bmv@vicharanashala.ai'
        }
      ].map((member, index) => (
        <div key={index} className="col-lg-3 col-md-6">
          <div className="team-card shadow-sm rounded-4 overflow-hidden h-100">
            <div className="team-img position-relative">
              <img src={member.img} alt={member.name} className="img-fluid w-100" />
              <div className="team-social">
                {/* LinkedIn */}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                )}
                {/* Email */}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-white"
                    aria-label={`Email to ${member.name}`}
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                )}
              </div>
            </div>
            <div className="p-5">
              <h4 className="fw-bold mb-1">{member.name}</h4>
              <p className="text-primary mb-2">{member.role}</p>
              <p className="text-muted mb-0">{member.bio}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

          
          <div className="text-center mt-5 p-3" style={{ display: 'none' }}>
            <a href="/team" className="btn btn-outline-warning fw-bold btn-lg px-4">
              View Full Team <i className="fas fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;