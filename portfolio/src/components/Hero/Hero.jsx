import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import '../../../Styles/hero.css';

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
  // Function to handle scroll to the next section
  const scrollToNextSection = () => {
    // Get the element after the hero section
    const nextSection = document.querySelector('#home').nextElementSibling;
    
    if (nextSection) {
      // Scroll to the next section with smooth behavior
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If no next section exists, just scroll down a bit
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <motion.p 
          className="hero__greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hello, I'm
        </motion.p>
        
        <motion.h1 
          className="hero__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="highlight">Guillermo Muñoz</span>
        </motion.h1>
        
        <motion.h2 
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Frontend Developer & UI Designer
        </motion.h2>
        
        <motion.p 
          className="hero__description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Building elegant, responsive and interactive web experiences
        </motion.p>
        
        <div className="hero__cta">
          <motion.a 
            href="#projects" 
            className="hero__cta-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a 
            href="#contact" 
            className="hero__cta-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </div>
      </div>
      
      <div className="hero__background">
        <Canvas className="hero__canvas">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <ThreeModel />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={scrollToNextSection}
        role="button"
        aria-label="Scroll to next section"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            scrollToNextSection();
          }
        }}
      >
        <span></span>
      </motion.div>
    </section>
  );
};

export default Hero;