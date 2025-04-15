import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from '../../../Styles/projects.module.css';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article 
      className={styles.projectCard}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -5 }}
    >
      <figure className={styles.projectCardImageContainer}>
        <img 
          src={project.image} 
          alt={`Preview of ${project.title}`} 
          className={styles.projectCardImage}
        />
        <div className={styles.projectCardLinks}>
          {project.sourceCode && (
            <motion.a 
              href={project.sourceCode} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`View source code for ${project.title} on GitHub`}
            >
              <FaGithub />
            </motion.a>
          )}
          {project.liveDemo && (
            <motion.a 
              href={project.liveDemo} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`View live demo of ${project.title}`}
            >
              <FaExternalLinkAlt />
            </motion.a>
          )}
        </div>
      </figure>
      
      <div className={styles.projectCardContent}>
        <h3 className={styles.projectCardTitle}>{project.title}</h3>
        <p className={styles.projectCardDescription}>{project.description}</p>
        
        <ul className={styles.projectCardTags}>
          {project.tags?.map((tag, i) => (
            <li key={i}>
              <span className={styles.projectCardTag}>{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

export default ProjectCard;