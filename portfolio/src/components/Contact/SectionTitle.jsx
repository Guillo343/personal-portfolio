import React from 'react';
import { motion } from 'framer-motion';
import '../../../Styles/Section.css';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-title">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="title"
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="subtitle"
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '60px' }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="title-underline"
      />
    </div>
  );
};

export default SectionTitle;