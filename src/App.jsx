import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Navbar, Footer } from './components';
import PortfolioPage from './pages/PortfolioPage';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import AdminPortal from './pages/AdminPortal';
import { DataProvider } from './context/DataContext';
import './ResponsiveMaster.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/portal-admin" element={<AdminPortal />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
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