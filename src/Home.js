import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, socialLinks } from './data/config';

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
        {/* Profile Image */}
        <div className="home-profile-image-container">
          {personalInfo.profileImage && (
            <img 
              src={personalInfo.profileImage} 
              alt={personalInfo.name}
              className="home-profile-image"
            />
          )}
          {/* Main Heading */}
          <h1 className="home-heading">Hey, I'm Anto</h1>
        </div>
        
        
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
            href={`mailto:antopunnelivarghese@gmail.com`}
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.91" strokeLinecap="round" strokeLinejoin="round">
              <rect x="0.5" y="1.48" width="22" height="21.04" fill="none"/>
              <path d="M10.07,18.7V12.48a3.34,3.34,0,0,1,3.34-3.35h0a3.35,3.35,0,0,1,3.35,3.35V18.7" fill="none"/>
              <line x1="6.24" y1="8.17" x2="6.24" y2="18.7" fill="none"/>
              <circle cx="6.24" cy="6.26" r="0.96" fill="currentColor"/>
              <line x1="10.07" y1="8.17" x2="10.07" y2="12.96" fill="none"/>
            </svg>
          </a>
          <a 
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-icon"
          >
            <svg width="20" height="20" viewBox="0 0 192 192" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
              <path d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"/>
            </svg>
          </a>
          <a 
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-icon"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
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
          <div className="scribble-line"></div>
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

