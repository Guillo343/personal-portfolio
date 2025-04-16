import React, { useState, Suspense, useMemo } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiThreedotjs,
  SiFramer,
  SiFigma,
} from "react-icons/si";
import styles from "../../../Styles/skills.module.css";

// Define skills data with icons
const skillsData = [
  { name: "React", icon: <FaReact />, category: "frontend", featured: true },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    category: "frontend",
    featured: true,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    category: "frontend",
    featured: true,
  },
  { name: "HTML5", icon: <SiHtml5 />, category: "frontend" },
  { name: "CSS3", icon: <SiCss3 />, category: "frontend" },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    category: "frontend",
    featured: true,
  },
  { name: "Redux", icon: <SiRedux />, category: "frontend" },
  // { name: 'Node.js', icon: <FaNodeJs />, category: 'backend', featured: true },
  // { name: 'Express.js', icon: <SiExpress />, category: 'backend' },
  // { name: 'MongoDB', icon: <SiMongodb />, category: 'backend' },
  // { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'backend' },
  // { name: 'Firebase', icon: <SiFirebase />, category: 'backend' },
  { name: "Git", icon: <FaGitAlt />, category: "tools", featured: true },
  { name: "Docker", icon: <FaDocker />, category: "tools" },
  { name: "Three.js", icon: <SiThreedotjs />, category: "frontend" },
  // { name: 'GSAP', icon: <SiGsap />, category: 'frontend' },
  { name: "Framer Motion", icon: <SiFramer />, category: "design" },
  { name: "Figma", icon: <SiFigma />, category: "design" },
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
          <meshStandardMaterial
            color={`hsl(${(index * 20) % 360}, 70%, 60%)`}
          />
        </mesh>
      ))}
    </>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = ["all", "frontend", "design", "tools"]; //No Backend

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.skillsContainer}>
        {/* Title */}
        <motion.div
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>My Skills</h2>
          <div className={styles.underline}></div>
        </motion.div>

        {/* Categories */}
        <motion.div
          className={styles.skillsCategories}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`${styles.skillsCategory} ${
                activeCategory === category ? styles.active : ""
              }`}
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
          className={styles.skillsGrid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, staggerChildren: 0.1 }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              className={styles.skillCard}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.skillCardIcon}>{skill.icon}</div>
              <h4 className={styles.skillCardName}>{skill.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
