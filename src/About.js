import React from 'react';
import { personalInfo } from './data/config';

function About() {
  const { 
    name, 
    tagline, 
    aboutBio, 
    skills, 
    icebreakers, 
    experience, 
    highlights 
  } = personalInfo;

  return (
    <main className="about-page">
      <div className="about-container">
        <div className="about-header">
          {personalInfo.profileImage && (
            <img 
              src={personalInfo.profileImage} 
              alt={name}
              className="about-profile-image"
            />
          )}
          <div className="about-header-content">
            <h1 className="about-name">{name}</h1>
            {tagline && <p className="about-tagline">{tagline}</p>}
          </div>
        </div>
        
        {aboutBio && (
          <div className="about-bio">
            <p>{aboutBio}</p>
          </div>
        )}

        {skills && Object.keys(skills).length > 0 && (
          <section className="about-section">
            <h2 className="about-section-title">Skills</h2>
            <div className="about-skills">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-category">
                  <h3 className="skill-category-name">{category}</h3>
                  <div className="skill-items">
                    {items.map((skill, index) => (
                      <span key={index} className="skill-item">
                        {typeof skill === 'string' ? skill : skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {icebreakers && icebreakers.length > 0 && (
          <section className="about-section">
            <h2 className="about-section-title">Icebreakers</h2>
            <div className="about-icebreakers">
              {icebreakers.map((item, index) => (
                <span key={index} className="icebreaker-item">
                  {item}
                </span>
              ))}
            </div>
          </section>
        )}

        {experience && experience.length > 0 && (
          <section className="about-section">
            <h2 className="about-section-title">Experience</h2>
            <div className="about-experience">
              {experience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <div className="experience-title-row">
                      <h3 className="experience-title">{exp.title}</h3>
                      {exp.status && (
                        <span className="experience-status">{exp.status}</span>
                      )}
                    </div>
                    <p className="experience-company">{exp.company}</p>
                    {exp.description && (
                      <p className="experience-description">{exp.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {highlights && highlights.length > 0 && (
          <section className="about-section">
            <h2 className="about-section-title">Highlights</h2>
            <ul className="about-highlights">
              {highlights.map((highlight, index) => (
                <li key={index} className="highlight-item">
                  {highlight}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}

export default About;
