import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../../Context/ThemeContext';
import styles from '../../../Styles/layout.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.header 
      ref={navRef}
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      role="banner"
    >
      <div className={styles.navContainer}>
        <motion.div 
          className={styles.logo}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="#home" onClick={closeMenu}>Guillermo Muñoz</a>
        </motion.div>

        <button 
          className={styles.hamburger} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav role="navigation" aria-label="Main navigation">
          <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
            {navLinks.map((link, index) => (
              <motion.li 
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href={link.href} onClick={closeMenu}>{link.name}</a>
              </motion.li>
            ))}
            <motion.li>
              <button 
                className={styles.themeToggle}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  toggleTheme();
                  closeMenu();
                }}
              >
                {isDarkMode ? 
                  <FaSun className={styles.themeIcon} /> : 
                  <FaMoon className={styles.themeIcon} />
                }
              </button>
            </motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;