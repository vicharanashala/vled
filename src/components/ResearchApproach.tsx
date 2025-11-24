import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/researchApproach.css";

export const ResearchApproach: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div id="research-approach" className="research-approach-container">
      {/* Header Section */}
      <div className="research-header">
        <p className="research-section-label">
          {"Our Research Approach".split("").map((char, i) => (
            <span key={i} className="label-letter">{char === ' ' ? '\u00A0' : char}</span>
          ))}
        </p>
        <h2 className="research-main-title">
          {"Where Academic Rigor Meets Real-World Learning".split("").map((char, i) => (
            <span key={i} className="title-letter">{char === ' ' ? '\u00A0' : char}</span>
          ))}
        </h2>
        <p className="research-intro-text">
          At VLED Lab, research is not confined to papers and presentations—it is woven into every solution we design. 
          We combine the depth of academic inquiry with the practicality of classroom realities to create learning models 
          that genuinely work. Our approach ensures that every insight, every framework, and every recommendation is 
          grounded in evidence and shaped by experience.
        </p>
      </div>

      {/* Three Pillars Section */}
      <div className="pillars-container">
        <div className="pillar-card">
          <div className="pillar-icon-wrapper">
            <div className="pillar-icon">
              <img src="https://c.animaapp.com/SP71lV0J/img/teamwork@2x.png" alt="Teamwork" />
            </div>
          </div>
          <h3 className="pillar-title">Interdisciplinary Teams</h3>
          <p className="pillar-description">
            Bringing multiple worlds together to redesign learning. Our research teams are built on a diversity 
            of expertise—education specialists, instructional designers, computer scientists, behavior researchers, 
            and cognitive psychologists work side by side.
          </p>
        </div>

        <div className="pillar-card pillar-featured">
          <div className="pillar-icon-wrapper">
            <div className="pillar-icon">
              <img src="https://c.animaapp.com/SP71lV0J/img/microscope@2x.png" alt="Microscope" />
            </div>
          </div>
          <h3 className="pillar-title">Evidence-Based Methods</h3>
          <p className="pillar-description">
            We trust data, but we also listen to learners. Our goal is not just to collect data—but to interpret it 
            meaningfully, translate it into design decisions, and build frameworks that improve clarity, engagement, 
            and outcomes.
          </p>
        </div>

        <div className="pillar-card">
          <div className="pillar-icon-wrapper">
            <div className="pillar-icon">
              <img src="https://c.animaapp.com/SP71lV0J/img/earth--1-@2x.png" alt="Earth" />
            </div>
          </div>
          <h3 className="pillar-title">Real-World Impact, Not Just Theory</h3>
          <p className="pillar-description">
            Research that lives inside classrooms. We test our ideas where it matters—inside real learning environments. 
            Our work is continuously shaped by classroom dynamics, educator feedback, and learner outcomes—creating 
            research that truly transforms education.
          </p>
        </div>
      </div>
    </div>
  );
};