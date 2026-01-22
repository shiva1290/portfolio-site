import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import CodeAnimation from './CodeAnimation';
import './Hero.css';

const Hero = () => {
  const socialLinks = [
    { icon: 'fab fa-linkedin', href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: 'fab fa-github', href: personalInfo.github, label: 'GitHub' },
    { icon: 'fas fa-code', href: personalInfo.codingProfiles, label: 'Coding Profiles' },
    { icon: 'fas fa-envelope', href: `mailto:${personalInfo.email}`, label: 'Email' }
  ];

  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>
          Hi, I'm <span className="bold-name">{personalInfo.name}</span>
        </h1>
        <h2 className="glitch-text" data-text={personalInfo.title}>
          {personalInfo.title}
        </h2>
        <p>
          I build full-stack applications with modern web technologies like React, Node.js, and MongoDB. 
          Passionate about solving complex problems and turning ideas into scalable solutions.
        </p>
        <div className="cta-buttons">
          <a 
            href={personalInfo.resumePath}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
          <a href="#contact" className="btn btn-secondary">
            Let's Connect
          </a>
        </div>
        <div className="social-links">
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="social-btn"
              aria-label={link.label}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="code-animation-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <CodeAnimation />
      </motion.div>
    </section>
  );
};

export default Hero;
