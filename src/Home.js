import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, socialLinks } from './data/config';
import linkedinIcon from './images/social/linkedin.svg';
import githubIcon from './images/social/github.svg';
import instagramIcon from './images/social/instagram.svg';

function Home() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Newsletter subscription logic here
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <main className="home-page">
      <div className="home-container">
        {/* Main Heading */}
        <h1 className="home-heading">{personalInfo.name}</h1>
        
        {/* Bio */}
        <p className="home-bio">
          {personalInfo.bio}
        </p>
        
        {/* Call to Action */}
        <p className="home-cta">
          Reach out anytime to chat.
        </p>
        
        {/* Social Icons */}
        <div className="home-social-icons">
          <a 
            href={`mailto:antopv833@gmail.com`}
            aria-label="Email"
            className="social-icon"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
          <a 
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="social-icon"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a 
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-icon"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a 
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-icon"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a 
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-icon"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
        
        {/* Action Buttons */}
        <div className="home-actions">
          <a 
            href="https://cal.eu/anto-pv/coffee"
            target="_blank"
            rel="noopener noreferrer"
            className="home-button primary"
          >
            Quick Chat?
          </a>
          <Link 
            to="/posts"
            className="home-button secondary"
          >
            Read posts
          </Link>
        </div>
        
        {/* Newsletter Section */}
        <div className="newsletter-section">
          <div className="newsletter-separator"></div>
          <h3 className="newsletter-heading">
            <span className="newsletter-icon">✈️</span>
            Subscribe to my newsletter
          </h3>
          <p className="newsletter-description">
            Posts and updates on what I'm building, delivered to your inbox.
          </p>
          <form 
            className="newsletter-form"
            onSubmit={handleNewsletterSubmit}
          >
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
              required
            />
            <button 
              type="submit"
              className="newsletter-button"
            >
              Subscribe
            </button>
          </form>
          {isSubscribed && (
            <p className="newsletter-success">Thanks for subscribing!</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default Home;

