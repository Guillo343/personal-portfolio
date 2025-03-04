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
    { name: 'Front-End Development: HTML, CSS, JavaScript (ES6+), React, Three.js'},
    { name: 'Styling & UI Frameworks: Tailwind CSS, Framer Motion'},
    { name: 'Performance & Optimization: Code splitting, lazy loading, accessibility best practices'},
    { name: 'Version Control & Collaboration: Git, GitHub, Agile methodologies'},
    { name: 'Other Technologies: Node.js, REST APIs, Web Animations'},
    {name: "With a keen eye for detail and a problem-solving mindset, I am always seeking challenging opportunities where I can contribute my skills while growing as a developer. Let's build something amazing together!"}
  ];

  const interests = [
    { icon: <FaCode />, title: 'Front-end Development', description: 'Creating beautiful user interfaces with modern frameworks' },
    { icon: <FaPalette />, title: 'UI/UX Design', description: 'Designing intuitive and engaging user experiences' },
    { icon: <FaServer />, title: 'Back-end Development', description: 'Building robust server-side applications' },
    { icon: <FaMobileAlt />, title: 'Mobile Development', description: 'Developing cross-platform mobile applications' },
  ];

  // const stats = [
  //   { number: '5+', label: 'Years Experience' },
  //   { number: '50+', label: 'Projects Completed' },
  //   { number: '20+', label: 'Happy Clients' },
  //   { number: '3+', label: 'Awards' },
  // ];

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
            <p>I'm a passionate Front-End Developer dedicated to crafting engaging and intuitive digital experiences. With a strong foundation in JavaScript, React, and modern web technologies, I bridge the gap between design and functionality, ensuring clean, efficient, and high-performing code.</p>
            <p>My expertise extends beyond just writing code—I focus on user experience (UX), accessibility, and performance optimization, ensuring that every project I work on is both visually appealing and highly functional. I thrive in dynamic environments, continuously learning and adapting to new technologies to deliver innovative solutions.</p>
          </motion.div>
          
          <div className="skills-progress">
            <h3>My Skills</h3>
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* <motion.div 
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
          </motion.div> */}
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
                <h3>Guillermo Muñoz</h3>
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