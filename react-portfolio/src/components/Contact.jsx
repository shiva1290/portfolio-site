import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const contactInfo = [
    { icon: 'fas fa-envelope', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: 'fas fa-phone', label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: personalInfo.location, href: null }
  ];

  const socialLinks = [
    { icon: 'fab fa-linkedin', href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: 'fab fa-github', href: personalInfo.github, label: 'GitHub' },
    { icon: 'fas fa-code', href: personalInfo.codingProfiles, label: 'Coding Profiles' }
  ];

  return (
    <section id="contact" className="contact-section">
      <motion.div
        ref={ref}
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Get In Touch
        </motion.h2>

        <div className="contact-content">
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your visions. Feel free to reach out!
            </p>

            <div className="contact-details">
              {contactInfo.map((info) => (
                <div key={info.label} className="contact-item">
                  <div className="contact-icon">
                    <i className={info.icon}></i>
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">{info.label}</span>
                    {info.href ? (
                      <a href={info.href}>{info.value}</a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-social">
              <h4>Find me on</h4>
              <div className="social-buttons">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label={link.label}
                  >
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form card" 
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.p 
                className="form-success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
