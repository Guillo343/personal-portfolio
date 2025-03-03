import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../../../Styles/layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;