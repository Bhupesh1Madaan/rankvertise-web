import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Navbar, Footer } from './components';
import ScrollToTop from './components/ScrollToTop';

// Core Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import PortfolioPage from './pages/PortfolioPage';
import LocationPage from './pages/LocationPage';
import AdminPortal from './pages/AdminPortal';

import { DataProvider } from './context/DataContext';
import { initMobileOptimizer } from './utils/mobileOptimizer';
import './ResponsiveMaster.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* 1. Core Platform Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portal-admin" element={<AdminPortal />} />

        {/* 2. Programmatic SEO Routes */}
        {/* URL Pattern 1: /services/mumbai */}
        <Route path="/services/:locationSlug" element={<LocationPage />} />

        {/* URL Pattern 2: /mumbai or /new-delhi */}
        <Route path="/:locationSlug" element={<LocationPage />} />

        {/* 3. Universal Fallback */}
        <Route path="*" element={<LocationPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    initMobileOptimizer();
  }, []);

  return (
    <DataProvider>
      <Router>
        <ScrollToTop />
        <div className="app-container">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;