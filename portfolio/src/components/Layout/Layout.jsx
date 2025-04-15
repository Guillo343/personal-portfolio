import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../../../Styles/layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.mainContent}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;