import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { stats } from '../data/portfolioData';
import './Stats.css';

const Stats = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

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
    <section className="stats-section">
      <motion.div
        ref={ref}
        className="container stats-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            className="stat-card card"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
