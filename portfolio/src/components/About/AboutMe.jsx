import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaServer, FaMobileAlt } from 'react-icons/fa';
import Guillermo from '../../assets/images/Guillermo.jpg'
import '../../../Styles/about.css'

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

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '20+', label: 'Happy Clients' },
    { number: '3+', label: 'Awards' },
  ];

  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__content">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          
          <motion.div 
            className="about__text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>I'm a passionate web developer with a strong focus on creating interactive and engaging user experiences. With expertise in modern JavaScript frameworks and a keen eye for design, I bridge the gap between functionality and aesthetics.</p>
            <p>I specialize in building responsive websites and applications using React and complementing technologies. My approach combines clean code, performance optimization, and thoughtful UI/UX principles.</p>
          </motion.div>
          
          <div className="skills-progress">
            <h3>My Skills</h3>
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  {/* <span className="skill-percentage">{skill.percentage}%</span> */}
                </div>
                {/* <div className="skill-bar">
                  <motion.div 
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                  ></motion.div>
                </div> */}
              </div>
            ))}
          </div>
          
          <motion.div 
            className="about__stats"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <div className="about__stat" key={index}>
                <div className="about__stat-number">{stat.number}</div>
                <div className="about__stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="about__image-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="about__image" src={Guillermo} alt="Profile" />
                <div className="about__image-overlay"></div>
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
          <div className="about__image-border"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;