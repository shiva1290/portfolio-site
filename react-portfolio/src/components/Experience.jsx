import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { experience, extracurricular } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="experience-section">
      <motion.div
        ref={ref}
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Experience
        </motion.h2>

        <div className="timeline">
          {experience.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
            >
              <div className="timeline-content card">
                <div className="timeline-date">{exp.period}</div>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h3 className="subsection-title" variants={itemVariants}>
          Extracurricular Activities
        </motion.h3>

        <div className="extracurricular-grid">
          {extracurricular.map(item => (
            <motion.div 
              key={item.id} 
              className="extracurricular-card card"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h4>{item.title}</h4>
              <span className="extracurricular-org">{item.organization}</span>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
