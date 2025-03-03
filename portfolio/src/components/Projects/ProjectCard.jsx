// ProjectCard.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../../../Styles/projects.css';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -5 }}
    >
      <div className="project-card__image-container">
        <img 
          src={project.image} 
          alt={project.title} 
          className="project-card__image"
        />
        <div className="project-card__links">
          {project.github && (
            <motion.a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub Repository"
            >
              <FaGithub />
            </motion.a>
          )}
          {project.demo && (
            <motion.a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Live Demo"
            >
              <FaExternalLinkAlt />
            </motion.a>
          )}
        </div>
      </div>
      
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        
        <div className="project-card__tags">
          {project.technologies?.map((tech, i) => (
            <span key={i} className="project-card__tag">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;