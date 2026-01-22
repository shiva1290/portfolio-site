import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { achievements } from '../data/portfolioData';
import './Achievements.css';

const Achievements = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const getIcon = (icon) => {
    const icons = {
      trophy: 'fas fa-trophy',
      code: 'fas fa-code',
      cloud: 'fas fa-cloud'
    };
    return icons[icon] || 'fas fa-award';
  };

  return (
    <section className="achievements-section">
      <motion.div
        ref={ref}
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Achievements
        </motion.h2>

        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <motion.div 
              key={achievement.id} 
              className="achievement-card card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className={`achievement-icon ${achievement.icon}`}>
                <i className={getIcon(achievement.icon)}></i>
              </div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
