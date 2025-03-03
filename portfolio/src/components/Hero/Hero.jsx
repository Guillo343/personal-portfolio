import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import '../../Styles/hero.css';

// 3D Model component
const ThreeModel = () => {
  return (
    <mesh rotation={[0, 0, 0]}>
      <dodecahedronGeometry args={[1.5, 0]} />
      <meshStandardMaterial color="#4facfe" wireframe />
    </mesh>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
          <h2>Frontend Developer & UI Designer</h2>
          <p>Building elegant, responsive and interactive web experiences</p>
          
          <div className="cta-buttons">
            <motion.a 
              href="#projects" 
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a 
              href="#contact" 
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-3d"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <ThreeModel />
              <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span></span>
      </motion.div>
    </section>
  );
};

export default Hero;