import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { navLinks, personalInfo } from '../data/portfolioData';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 100;
      const top = element.offsetTop - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <nav className="container">
        <div className="logo">{personalInfo.name}</div>
        
        <ul className="nav-links desktop-nav">
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          <div className="theme-toggle">
            <ThemeToggle />
          </div>
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`mobile-nav-container ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-header">
          <div className="mobile-logo">{personalInfo.name}</div>
          <button 
            className="mobile-nav-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <div className="mobile-nav-content">
          <ul className="mobile-nav-links">
            {navLinks.map((link, index) => (
              <li key={link.name} style={{ animationDelay: `${index * 0.1}s` }}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-social-links">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href={personalInfo.codingProfiles} target="_blank" rel="noopener noreferrer" aria-label="Coding Profiles">
              <i className="fas fa-code"></i>
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <div 
        className={`mobile-nav-backdrop ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
