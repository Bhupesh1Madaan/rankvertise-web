import React from 'react';
// 1. useLocation ko yahan import kijiye
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Navbar, Footer, PortfolioPage } from './components';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import './ResponsiveMaster.css';

// Routes ko handle karne ke liye ek internal wrapper banaya taaki useLocation trigger ho sake
function AnimatedRoutes() {
  const location = useLocation(); // <-- Yeh har single node track karega

  return (
    <AnimatePresence mode="wait">
      {/* Location aur key lagane se unique route identities system load ho jata hai */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />

        {/* Animated routes injector layout component wrapper hook layer */}
        <AnimatedRoutes />

        <Footer />
      </div>
    </Router>
  );
}

export default App;