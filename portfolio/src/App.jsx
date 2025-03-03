import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '../Context/ThemeContext';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import About from './components/About/AboutMe';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
// import Contact from './components/Contact/Contact';
import './App.css';
import '../Styles/hero.css';
import '../Styles/about.css';
import '../Styles/projects.css';
import '../Styles/skills.css';
import '../Styles/experience.css';
import '../Styles/contacts.css';

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
        {/* <Contact /> */}
      </Layout>
    </ThemeProvider>
  );
}

export default App;