import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from '../../../Styles/layout.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Guillo343', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/guillermo-mu%C3%B1oz-438068234/', label: 'LinkedIn' },
    { icon: <FaEnvelope />, url: 'mailto:Guillemunozi2003@gmail.com', label: 'Email' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <h2>Guillermo Muñoz</h2>
            <p>Engineering high-performance digital experiences</p>
          </div>
          
          <div className={styles.footerLinks}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSocial}>
            <h3>Connect</h3>
            <div className={styles.socialIcons}>
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Guillermo Muñoz. All rights reserved.</p>
          <p>Handcrafted with <span className={styles.heart}>❤</span> using React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;