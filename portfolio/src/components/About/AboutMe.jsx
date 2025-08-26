import React from "react";
import { motion } from "framer-motion";
import Guillermo from "../../assets/images/Guillermo.jpg";
import styles from "../../../Styles/about.module.css";

const AboutMe = () => {
  const skills = [
    // {
    //    name: "Front-End Engineering: HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Three.js, Tailwind CSS, Framer Motion",
    // },
    {
      name: "Software Architecture & Engineering Practices: RESTful APIs, client-server communication, authentication, state management",
    },
    {
      name: "Performance Optimization: Code splitting, lazy loading, server-side rendering (SSR), accessibility and Web Vitals improvements",
    },
    {
      name: "Backend Fundamentals & Cloud: Node.js, Express.js, API key management, serverless functions, cloud deployment (Vercel, Netlify)",
    },
    // {
    //   name: "Collaboration & Tools: Git, GitHub, Agile methodologies, CI/CD basics, cross-functional teamwork",
    // },
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
            <p>
              I'm a Front-End Engineer passionate about delivering scalable,
              production-ready applications that align design, engineering, and
              business goals. I specialize in architecting intuitive user
              interfaces backed by resilient client-server interactions,
              leveraging technologies like JavaScript, TypeScript, React, and
              Next.js.
            </p>
            <p>
              I thrive at the intersection of software architecture, API
              integration, and real-time data applications—bringing value by
              building systems that are fast, modular, and maintainable. I'm
              committed to continuous improvement, cross-team collaboration, and
              leading projects with a focus on user experience, performance, and
              long-term scalability.
            </p>
          </motion.div>

          <div className={styles.skillsSection}>
            <ul className={styles.skillsList}>
              {skills.map((skill, index) => (
                <li className={styles.skillItem} key={index}>
                  <span className={styles.skillName}>{skill.name}</span>
                </li>
              ))}
            </ul>
            {/* <p className={styles.skillsSummary}>
              Passionate about engineering scalable web applications and
              crafting high-impact digital experiences, I focus on delivering
              resilient, high-performance solutions that connect design,
              functionality, and system architecture.
            </p> */}
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
            <img
              className={styles.profileImage}
              src={Guillermo}
              alt="Guillermo Muñoz - Frontend Developer"
            />
            <figcaption className={styles.figcaption}>
              <h3>Guillermo Muñoz</h3>
              <p>Front-End Engineer focused on architecture, performance, and seamless user experiences</p>
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
