// src/App.jsx
import React from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Projects from './components/Projects';



function App() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;