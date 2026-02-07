import React from 'react';
import { projects, skills, experiences } from './data/config';
import { skillIconMap } from './utils/skillIcons';
import p1h from './images/projects/p1h.png';
import p1i from './images/projects/p1i.jpg';

const projectImages = {
  p1h,
  p1i
};

function Portfolio() {
  return (
    <main id="portfolio">
      <section id="projects" className="blue" aria-labelledby="projects-heading">
        <h1 id="projects-heading">Projects</h1>
        {projects.map((project) => (
          <div key={project.id} className="content">
            <img 
              src={projectImages[project.images.header]} 
              alt={`${project.title} project header`}
            />
            <div className="detail">
              <p className="protext">
                {project.description}{' '}
                <a 
                  target='_blank' 
                  rel="noreferrer" 
                  href={project.repoUrl}
                  className="butto"
                  aria-label={`View ${project.title} repository`}
                >
                  Repo
                </a>
              </p>
              <img 
                src={projectImages[project.images.detail]} 
                alt={`${project.title} project detail`}
              />
            </div>
          </div>
        ))}
      </section>
      <section id="skills" className="skillwhite" aria-labelledby="skills-heading">
        <h1 id="skills-heading">Skills</h1>
        <div className="language" role="list" aria-label="Programming languages">
          {skills.languages.map((skill, index) => (
            <img 
              key={index}
              src={skillIconMap[skill.icon]} 
              alt={skill.name}
              title={skill.name}
            />
          ))}
        </div>
        <div className="database" role="list" aria-label="Database technologies">
          {skills.databases.map((skill, index) => (
            <img 
              key={index}
              src={skillIconMap[skill.icon]} 
              alt={skill.name}
              title={skill.name}
            />
          ))}
        </div>
        <div className="web" role="list" aria-label="Web technologies">
          {skills.web.map((skill, index) => (
            <img 
              key={index}
              src={skillIconMap[skill.icon]} 
              alt={skill.name}
              title={skill.name}
            />
          ))}
        </div>
        <div className="soft" role="list" aria-label="Software tools">
          {skills.tools.map((skill, index) => (
            <img 
              key={index}
              src={skillIconMap[skill.icon]} 
              alt={skill.name}
              title={skill.name}
            />
          ))}
        </div>
      </section>
      <section id="experiences" className="blue" aria-labelledby="experiences-heading">
        <h1 id="experiences-heading">Experiences</h1>
        {experiences.map((exp) => (
          <article key={exp.id} className="expcontent">
            <p className="company">
              <span className="point" aria-hidden="true">&#10063;</span>
              {exp.company}
            </p>
            <p className="post">
              Position: <strong>{exp.position}</strong>
            </p>
            <p className="post">Duration: {exp.duration}</p>
            <p className="tech">
              {exp.description}<br/>
              Technology(s) Used: {exp.technologies.join(', ')}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Portfolio;