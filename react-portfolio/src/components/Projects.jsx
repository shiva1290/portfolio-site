import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <motion.div
        ref={ref}
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} variants={itemVariants} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const ProjectCard = ({ project, variants }) => {
  const handleMouseMove = (e) => {
    if (window.innerWidth <= 768) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <motion.div
      className="project-card card"
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-header">
        <div className="project-icon">
          <i className="fas fa-folder-open"></i>
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
              <i className="fas fa-external-link-alt"></i>
            </a>
          )}
        </div>
      </div>
      
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      
      <div className="project-tech">
        {project.tech.map(tech => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
