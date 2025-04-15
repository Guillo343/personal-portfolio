import React, { Suspense, useEffect } from "react";
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

  useEffect(() => {
    console.log("Hero component detected theme change:", darkMode);
  }, [darkMode]);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#home").nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id='home' className={styles.hero}>
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
              key={darkMode ? "dark" : "light"}
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={0.5}
              color={darkMode ? "white" : "black"}
              fade
            />
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
      </div>

      <motion.div
        className="scrollIndicator"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={scrollToNextSection}
        role="button"
        aria-label="Scroll to next section"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
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
