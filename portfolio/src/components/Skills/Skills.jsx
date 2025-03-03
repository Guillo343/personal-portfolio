import React, { useState, Suspense, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiRedux, SiExpress, SiMongodb, SiPostgresql, SiFirebase, SiThreedotjs, SiFramer, SiFigma } from 'react-icons/si';
import '../../../Styles/skills.css';

// Define skills data with icons
const skillsData = [
  { name: 'React', icon: <FaReact />, category: 'frontend', featured: true },
  { name: 'JavaScript', icon: <SiJavascript />, category: 'frontend', featured: true },
  { name: 'TypeScript', icon: <SiTypescript />, category: 'frontend', featured: true },
  { name: 'HTML5', icon: <SiHtml5 />, category: 'frontend' },
  { name: 'CSS3', icon: <SiCss3 />, category: 'frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'frontend', featured: true },
  { name: 'Redux', icon: <SiRedux />, category: 'frontend' },
  { name: 'Node.js', icon: <FaNodeJs />, category: 'backend', featured: true },
  { name: 'Express.js', icon: <SiExpress />, category: 'backend' },
  { name: 'MongoDB', icon: <SiMongodb />, category: 'backend' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'backend' },
  { name: 'Firebase', icon: <SiFirebase />, category: 'backend' },
  { name: 'Git', icon: <FaGitAlt />, category: 'tools', featured: true },
  { name: 'Docker', icon: <FaDocker />, category: 'tools' },
  { name: 'Three.js', icon: <SiThreedotjs />, category: 'frontend' },
  // { name: 'GSAP', icon: <SiGsap />, category: 'frontend' },
  { name: 'Framer Motion', icon: <SiFramer />, category: 'design' },
  { name: 'Figma', icon: <SiFigma />, category: 'design' },
];

// 3D Skills Sphere component
const SkillsSphere = () => {
  const positions = useMemo(() => {
    const pos = [];
    const count = 20;

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      pos.push([
        2.5 * Math.cos(theta) * Math.sin(phi),
        2.5 * Math.sin(theta) * Math.sin(phi),
        2.5 * Math.cos(phi),
      ]);
    }

    return pos;
  }, []);

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
    <section id="skills" className="skills">
      <div className="skills__container">
        {/* Title */}
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

        {/* Categories */}
        <motion.div
          className="skills__categories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`skills__category ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Filter by ${category}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="skills__grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, staggerChildren: 0.1 }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              whileHover={{ y: -10 }}
            >
              <div className="skill-card__icon">
                {skill.icon}
              </div>
              <h4 className="skill-card__name">{skill.name}</h4>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Overview - Enhanced Version */}
        <motion.div
          className="skills__overview"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="skills__overview-title">Skills Overview</h3>
          
          <div className="skills__overview-container">
            {/* Left side: 3D Skills Sphere */}
            <motion.div 
              className="skills__3d-sphere-container"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="skills__3d-sphere">
                <Canvas>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <Suspense fallback={<div className="loading">Loading...</div>}>
                    <SkillsSphere />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
                  </Suspense>
                </Canvas>
              </div>
              <div className="skills__sphere-label">Interactive Tech Ecosystem</div>
            </motion.div>

            {/* Right side: Featured Skills & Expertise Highlight */}
            <div className="skills__expertise">
              <motion.div 
                className="skills__expertise-heading"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h4>Core Technologies</h4>
                <p>Specialized in modern web development with expertise in:</p>
              </motion.div>

              <div className="skills__featured-grid">
                {skillsData
                  .filter(skill => skill.featured)
                  .map((skill, index) => (
                    <motion.div 
                      className="featured-skill" 
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.03, 
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                        background: 'var(--accent-color-15)'
                      }}
                    >
                      <div className="featured-skill__icon-wrapper">
                        <div className="featured-skill__icon">{skill.icon}</div>
                      </div>
                      <div className="featured-skill__content">
                        <h5 className="featured-skill__name">{skill.name}</h5>
                        <div className="featured-skill__expertise-bar">
                          <div className="featured-skill__expertise-fill"></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>

              <motion.div 
                className="skills__summary-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="skills__summary-icon">
                  <FaReact />
                </div>
                <div className="skills__summary-content">
                  <h4>Frontend Specialist</h4>
                  <p>Building engaging, responsive, and accessible web applications with modern technologies and best practices</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;