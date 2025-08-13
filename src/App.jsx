import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/aboutus';
import Services from './pages/services';
import CaseStudies from './pages/case-studies';
import Blog from './pages/blogs';
import Contact from './pages/contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;