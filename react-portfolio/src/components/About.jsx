import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { personalInfo } from '../data/portfolioData';
import profileImage from '../assets/images/profile-image.png';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  const skillTags = ['React', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'REST APIs'];

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
    <section id="about" className="about-section">
      <motion.div
        ref={ref}
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div className="about-image" variants={itemVariants}>
            <div className="image-wrapper">
              <img src={profileImage} alt={personalInfo.name} />
              <div className="image-overlay"></div>
            </div>
          </motion.div>

          <motion.div className="about-text" variants={itemVariants}>
            <h3>Full-Stack Developer | Computer Science Student</h3>
            <p>{personalInfo.summary}</p>
            <p>{personalInfo.approach}</p>

            <div className="skill-tags">
              {skillTags.map(tag => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
