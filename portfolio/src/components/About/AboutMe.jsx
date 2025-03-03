import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaServer, FaMobileAlt } from 'react-icons/fa';
import '../../Styles/about.css';

const AboutMe = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const skills = [
    { name: 'HTML/CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'React', percentage: 80 },
    { name: 'Node.js', percentage: 70 },
    { name: '3D/Three.js', percentage: 65 },
  ];

  const interests = [
    { icon: <FaCode />, title: 'Front-end Development', description: 'Creating beautiful user interfaces with modern frameworks' },
    { icon: <FaPalette />, title: 'UI/UX Design', description: 'Designing intuitive and engaging user experiences' },
    { icon: <FaServer />, title: 'Back-end Development', description: 'Building robust server-side applications' },
    { icon: <FaMobileAlt />, title: 'Mobile Development', description: 'Developing cross-platform mobile applications' },
  ];

  return (
    <section id="about" className="about-section">
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>About Me</h2>
        <div className="underline"></div>
      </motion.div>

      <div className="about-content">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Who I Am
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I'm a passionate web developer with a strong focus on creating interactive and engaging user experiences. With expertise in modern JavaScript frameworks and a keen eye for design, I bridge the gap between functionality and aesthetics.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            I specialize in building responsive websites and applications using React and complementing technologies. My approach combines clean code, performance optimization, and thoughtful UI/UX principles.
          </motion.p>
          
          <div className="skills-progress">
            <h3>My Skills</h3>
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="about-card-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="/images/profile/profile.jpg" alt="Profile" />
                <h3>Your Name</h3>
                <p>Frontend Developer & UI Designer</p>
                <div className="card-footer">
                  <p>Click to reveal more</p>
                </div>
              </div>
              <div className="flip-card-back">
                <h3>My Interests</h3>
                <div className="interests-grid">
                  {interests.map((interest, index) => (
                    <div className="interest-item" key={index}>
                      <div className="interest-icon">{interest.icon}</div>
                      <h4>{interest.title}</h4>
                      <p>{interest.description}</p>
                    </div>
                  ))}
                </div>
                <div className="card-footer">
                  <p>Click to flip back</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;