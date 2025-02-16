import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  return (
    <Router> {/* Wrap everything inside Router */}
      <>
        <Navbar />
        <Home />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </>
    </Router>
  );
}

export default App;
