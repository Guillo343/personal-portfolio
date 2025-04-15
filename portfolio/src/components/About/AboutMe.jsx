import React from 'react';
import { motion } from 'framer-motion';
import Guillermo from '../../assets/images/Guillermo.jpg';
import styles from '../../../Styles/about.module.css';

const AboutMe = () => {
  const skills = [
    { name: 'Front-End Development: HTML, CSS, JavaScript (ES6+), React, Three.js' },
    { name: 'Styling & UI Frameworks: Tailwind CSS, Framer Motion' },
    { name: 'Performance & Optimization: Code splitting, lazy loading, accessibility best practices' },
    { name: 'Version Control & Collaboration: Git, GitHub, Agile methodologies' },
    { name: 'Other Technologies: Node.js, REST APIs, Web Animations' }
  ];

  return (
    <section id="about" className={styles.about}>
    <div className={styles.container}>
      <div className={styles.content}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className={styles.text}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>I'm a passionate Front-End Developer dedicated to crafting engaging and intuitive digital experiences. With a strong foundation in JavaScript, React, and modern web technologies, I bridge the gap between design and functionality, ensuring clean, efficient, and high-performing code.</p>
          <p>My expertise extends beyond just writing code—I focus on user experience (UX), accessibility, and performance optimization, ensuring that every project I work on is both visually appealing and highly functional. I thrive in dynamic environments, continuously learning and adapting to new technologies to deliver innovative solutions.</p>
        </motion.div>
        
        <div className={styles.skillsSection}>
          <h3>My Skills</h3>
          <ul className={styles.skillsList}>
            {skills.map((skill, index) => (
              <li className={styles.skillItem} key={index}>
                <span className={styles.skillName}>{skill.name}</span>
              </li>
            ))}
          </ul>
          <p className={styles.skillsSummary}>
            With a keen eye for detail and a problem-solving mindset, I am always seeking challenging opportunities where I can contribute my skills while growing as a developer. Let's build something amazing together!
          </p>
        </div>
      </div>
      
      <motion.div 
        className={styles.imageContainer}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <figure className={styles.profileCard}>
          <img className={styles.profileImage} src={Guillermo} alt="Guillermo Muñoz - Frontend Developer" />
          <figcaption className={styles.figcaption}>
            <h3>Guillermo Muñoz</h3>
            <p>Frontend Developer & UI Designer</p>
          </figcaption>
        </figure>
      </motion.div>
    </div>
  </section>
  );
};

export default AboutMe;