import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { education, certifications } from '../data/portfolioData';
import './Education.css';

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

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

  return (
    <section id="education" className="education-section">
      <motion.div
        ref={ref}
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Education
        </motion.h2>

        <div className="education-grid">
          {education.map((edu) => (
            <motion.div key={edu.id} className="education-card card" variants={itemVariants}>
              <div className="education-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <span className="education-period">{edu.period}</span>
              <span className="education-grade">{edu.grade}</span>
            </motion.div>
          ))}
        </div>

        <motion.h2 className="section-title certifications-title" variants={itemVariants}>
          Certifications
        </motion.h2>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <motion.a 
              key={cert.id} 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="certification-card card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="cert-header">
                <div className={`cert-icon ${cert.icon}`}>
                  <i className={getCertIcon(cert.icon)}></i>
                </div>
                <span className="cert-date">{cert.date}</span>
              </div>
              <h3>{cert.title}</h3>
              <h4>{cert.issuer}</h4>
              <p>{cert.description}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const getCertIcon = (icon) => {
  const icons = {
    medal: 'fas fa-medal',
    js: 'fab fa-js-square',
    google: 'fab fa-google'
  };
  return icons[icon] || 'fas fa-certificate';
};

export default Education;
