import React from 'react';
import { personalInfo, socialLinks } from './data/config';

function Links() {
  return (
    <main className="links-page">
      <div className="links-container">
        <h1>Links</h1>
        <div className="links-content">
          <p>All my links and profiles in one place.</p>
          
          <div className="links-section">
            <h2>Social Media</h2>
            <div className="links-grid">
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-item"
              >
                LinkedIn
              </a>
              <a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-item"
              >
                GitHub
              </a>
              <a 
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="link-item"
              >
                Instagram
              </a>
              <a 
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="link-item"
              >
                YouTube
              </a>
            </div>
          </div>

          <div className="links-section">
            <h2>Coding Platforms</h2>
            <div className="links-grid">
              <a 
                href={socialLinks.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="link-item"
              >
                CodeChef
              </a>
              <a 
                href={socialLinks.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                className="link-item"
              >
                HackerRank
              </a>
              <a 
                href={socialLinks.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="link-item"
              >
                Codeforces
              </a>
            </div>
          </div>

          <div className="links-section">
            <h2>Contact</h2>
            <div className="links-grid">
              <a 
                href={`mailto:antopv833@gmail.com`}
                className="link-item"
              >
                Email
              </a>
              <a 
                href="https://cal.eu/anto-pv/coffee"
                target="_blank"
                rel="noopener noreferrer"
                className="link-item"
              >
                Book a Meeting
              </a>
              <a 
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-item"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Links;

