import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { skills } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section id="skills" className="skills-section">
      <motion.div
        ref={ref}
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Skills & Technologies
        </motion.h2>

        <div className="skills-grid">
          <SkillCategory 
            title="Programming Languages" 
            skills={skills.programming} 
            variants={itemVariants}
            inView={inView}
          />
          <SkillCategory 
            title="Web & Backend" 
            skills={skills.webBackend} 
            variants={itemVariants}
            inView={inView}
          />
          <SkillCategory 
            title="Databases & Core CS" 
            skills={skills.databases} 
            variants={itemVariants}
            inView={inView}
          />
        </div>

        <motion.div className="skills-tags-section" variants={itemVariants}>
          <h3>Technical Expertise</h3>
          <div className="skills-tags-grid">
            {skills.technical.map(skill => (
              <motion.span 
                key={skill} 
                className="skill-tag-item"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div className="skills-tags-section" variants={itemVariants}>
          <h3>Soft Skills</h3>
          <div className="skills-tags-grid">
            {skills.soft.map(skill => (
              <motion.span 
                key={skill} 
                className="skill-tag-item soft"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const SkillCategory = ({ title, skills, variants, inView }) => (
  <motion.div className="skill-category card" variants={variants}>
    <h3>{title}</h3>
    <div className="skill-bars">
      {skills.map((skill, index) => (
        <div key={skill.name} className="skill-item">
          <div className="skill-info">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-percent">{skill.level}%</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-level"
              initial={{ width: 0 }}
              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default Skills;
