import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../../Data/projects';
import '../../../Styles/projects.css';

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
    <section id="projects" className="projects">
      <div className="projects__container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>My Projects</h2>
          <div className="underline"></div>
        </motion.div>
        
        <motion.div
          className="projects__filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filterCategories.map((category, index) => (
            <motion.button
              key={index}
              className={`projects__filter ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="projects__grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          ) : (
            <p className="no-projects">No projects found in this category.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;