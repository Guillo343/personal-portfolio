import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../../Data/projects';
import styles from '../../../Styles/projects.module.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filterCategories = [
    'All',
    'Full-Stack Web Apps',
    'Front-End Projects',
    'UI/UX Design'
  ];
  
  // Advanced filtering logic
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projectsData;
    
    return projectsData.filter(project => {
      switch(activeFilter) {
        case 'Full-Stack Web Apps':
          return project.tags.some(tag => 
            ['React', 'Node.js', 'MongoDB', 'Express'].includes(tag)
          ) && project.category === 'Web App';
        
        case 'Front-End Projects':
          return project.tags.some(tag => 
            ['React', 'TypeScript', 'Tailwind', 'Tailwind CSS'].includes(tag)
          );
        
        case 'UI/UX Design':
          return project.tags.some(tag => 
            ['Three.js', 'GLSL', '3D', 'UI', 'UX'].includes(tag)
          );
        
        default:
          return true;
      }
    });
  }, [activeFilter]);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsContainer}>
        <header className={styles.sectionTitle}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>
          <motion.div 
            className={styles.underline}
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </header>
        
        <nav>
          <motion.ul
            className={styles.projectsFilters}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {filterCategories.map((category, index) => (
              <li key={index}>
                <motion.button
                  className={`${styles.projectsFilter} ${activeFilter === category ? styles.active : ''}`}
                  onClick={() => setActiveFilter(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-pressed={activeFilter === category}
                >
                  {category}
                </motion.button>
              </li>
            ))}
          </motion.ul>
        </nav>
        
        <motion.div 
          className={styles.projectsGrid}
          role="list"
          aria-label="Projects list"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div role="listitem" key={project.id}>
                <ProjectCard project={project} index={index} />
              </div>
            ))
          ) : (
            <p className={styles.noProjects}>No projects found in this category.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;