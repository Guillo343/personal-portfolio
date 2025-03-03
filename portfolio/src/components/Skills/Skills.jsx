import React, { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {skillsData} from '../../../Data/skills';
import '../../../Styles/skills.css';

// 3D Skills Sphere component
const SkillsSphere = () => {
  const positions = [];
  const count = 20;
  
  // Generate random positions on a sphere
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;
    
    positions.push([
      2.5 * Math.cos(theta) * Math.sin(phi),
      2.5 * Math.sin(theta) * Math.sin(phi),
      2.5 * Math.cos(phi)
    ]);
  }

  return (
    <>
      {positions.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color={`hsl(${(index * 20) % 360}, 70%, 60%)`} />
        </mesh>
      ))}
    </>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = ['all', 'frontend', 'backend', 'design', 'tools'];
  
  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>My Skills</h2>
        <div className="underline"></div>
      </motion.div>
      
      <div className="skills-content">
        <motion.div
          className="skills-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Technical Expertise</h3>
          <p>
            With a strong foundation in modern web technologies and a passion for learning, 
            I've developed expertise across various areas of web development and design.
          </p>
          
          <div className="category-filters">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          className="skills-display"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="skills-grid">
            {filteredSkills.map((skill, index) => (
              <motion.div
                className="skill-item"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h4>{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="skills-3d"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3>Skills Overview</h3>
        <div className="sphere-container">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <SkillsSphere />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;