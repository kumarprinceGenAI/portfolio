import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AllProjects from './components/AllProjects';
import ContactPage from './components/ContactPage';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <div className="ambient-bg"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
