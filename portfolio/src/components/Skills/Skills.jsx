import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiThreedotjs,
  SiFramer,
  SiFigma,
  SiNextdotjs,
  SiRedux,
} from "react-icons/si";

import styles from "../../../Styles/skills.module.css";

const skillsData = [
  { name: "React", icon: <FaReact />, category: "frontend", featured: true },
  { name: "Next.js", icon: <SiNextdotjs />, category: "frontend" },
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
  { name: "Three.js", icon: <SiThreedotjs />, category: "frontend" },
  { name: "Framer Motion", icon: <SiFramer />, category: "design" },
  { name: "Figma", icon: <SiFigma />, category: "design" },
  { name: "Git", icon: <FaGitAlt />, category: "tools", featured: true },
  { name: "Docker", icon: <FaDocker />, category: "tools" },
];

const categories = ["all", "frontend", "design", "tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.skillsContainer}>
        {/* Section Title */}
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

        {/* Category Filter */}
        <motion.div
          className={styles.skillsCategories}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
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
          transition={{ duration: 0.6 }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              className={styles.skillCard}
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
        {/* Skills Descriptions */}
        <motion.div
          className={styles.expertiseSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.div
            className={styles.expertiseCategory}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3>Frontend Development</h3>
            <p>
              I specialize in modern frontend architectures using React,
              TypeScript, Tailwind CSS and Next.js. I'm passionate about
              building accessible, scalable and high-performance web
              applications.
            </p>
          </motion.div>

          <motion.div
            className={styles.expertiseCategory}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3>UI/UX & Design Integration</h3>
            <p>
              I bridge the gap between design and development, ensuring
              pixel-perfect implementation with tools like Figma, Framer Motion
              and Three.js, delivering smooth and engaging user experiences.
            </p>
          </motion.div>

          <motion.div
            className={styles.expertiseCategory}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3>Tools & Workflow</h3>
            <p>
              I maintain clean codebases with Git, optimize deployments with
              Docker, and continuously integrate using best practices in modern
              workflows.
            </p>
          </motion.div>

          <motion.div
            className={styles.expertiseFinalNote}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p>
              My current goal is to evolve into a full-stack and software
              architecture role, expanding my backend knowledge and building
              solid, scalable systems.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
