import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { personalInfo } from '../data/config';

const Navigation = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    // { path: '/posts', label: 'Posts' },
    // { path: '/portfolio', label: 'Projects' },
    { path: '/about', label: 'About' }
  ];

  return (
    <nav className="main-navigation" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo" aria-label="Home">
          {personalInfo.name}
        </Link>
        <ul className="nav-links">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  <div className="nav-link-bg"></div>
                  <span className="nav-link-text">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

