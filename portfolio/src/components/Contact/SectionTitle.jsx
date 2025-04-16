import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../../Styles/section.module.css';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className={styles.sectionTitle}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.title}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={styles.subtitle}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '60px' }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={styles.titleUnderline}
      />
    </div>
  );
};

export default SectionTitle;