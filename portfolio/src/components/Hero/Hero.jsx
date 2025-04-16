import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useTheme } from "../../../Context/ThemeContext";
import styles from "../../../Styles/hero.module.css";

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
  const { darkMode } = useTheme();

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <motion.p
          className={styles.heroGreeting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className={styles.highlight}>Guillermo Muñoz</span>
        </motion.h1>

        <motion.h2
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Frontend Developer & UI Designer
        </motion.h2>

        <motion.p
          className={styles.heroDescription}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Building elegant, responsive and interactive web experiences
        </motion.p>

        <div className={styles.heroCta}>
          <motion.a
            href="#projects"
            className={styles.heroCtaPrimary}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className={styles.heroCtaSecondary}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </div>
      </div>

      <div className={styles.heroBackground}>
        <Canvas className={styles.heroCanvas}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <ThreeModel />
            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={darkMode ? 0.5 : 0}
              color={darkMode ? "white" : "#000"}
              opacity={darkMode ? 1 : 0.3}
              fade
            />
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
