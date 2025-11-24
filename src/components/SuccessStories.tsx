import React from "react";
import "../styles/successStories.css";

export const SuccessStories: React.FC = () => {
  const stories = [
    {
      id: 1,
      title: "Student Feedback",
      videoUrl: "https://www.youtube.com/embed/e-MBxPDtwCg",
      description: "Hear from our students about their learning experience"
    },
    {
      id: 2,
      title: "Learning Journey",
      videoUrl: "https://www.youtube.com/embed/Ov__oWpcw30",
      description: "Discover how our approach transforms education"
    }
  ];

  return (
    <div id="success-stories" className="success-stories-container">
      <div className="success-stories-header">
        <p className="success-section-label">
          {"Success Stories".split("").map((char, i) => (
            <span key={i} className="success-label-letter">{char === ' ' ? '\u00A0' : char}</span>
          ))}
        </p>
        <h2 className="success-main-title">
          {"Real Stories, Real Impact".split("").map((char, i) => (
            <span key={i} className="success-title-letter">{char === ' ' ? '\u00A0' : char}</span>
          ))}
        </h2>
        <p className="success-intro-text">
          Hear directly from learners and educators who have experienced the transformative power of thoughtfully designed learning.
        </p>
      </div>

      <div className="stories-grid">
        {stories.map((story) => (
          <div key={story.id} className="story-card">
            <div className="video-wrapper">
              <iframe
                src={story.videoUrl}
                title={story.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="story-video"
              />
            </div>
            <div className="story-content">
              <h3 className="story-title">{story.title}</h3>
              <p className="story-description">{story.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
