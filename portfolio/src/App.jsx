import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './styles/App.css';
import './styles/Navbar.css';
import './styles/Hero.css';
import './styles/About.css';
import './styles/Projects.css';
import './styles/Skills.css';
import './styles/Experience.css';
import './styles/Contact.css';
import './styles/Footer.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading amazing things...</p>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;