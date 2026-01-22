import { motion } from 'framer-motion';
import { personalInfo, navLinks } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'fab fa-linkedin', href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: 'fab fa-github', href: personalInfo.github, label: 'GitHub' },
    { icon: 'fas fa-code', href: personalInfo.codingProfiles, label: 'Coding Profiles' },
    { icon: 'fas fa-envelope', href: `mailto:${personalInfo.email}`, label: 'Email' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 100;
      const top = element.offsetTop - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>{personalInfo.name}</h3>
            <p>Full-Stack Developer & Software Engineer</p>
            <div className="footer-social">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="social-btn"
                  aria-label={link.label}
                  whileHover={{ y: -3 }}
                >
                  <i className={link.icon}></i>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>More</h4>
            <ul>
              {navLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>
              <i className="fas fa-envelope"></i>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </p>
            <p>
              <i className="fas fa-phone"></i>
              <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              <span>{personalInfo.location}</span>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p>Built with React & ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
