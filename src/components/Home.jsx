import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Hobbies from './Hobbies';

const Home = () => {
  return (
    <main className="animate-fade-in">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Hobbies />
    </main>
  );
};

export default Home;
