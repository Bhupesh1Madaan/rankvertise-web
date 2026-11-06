import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Navbar, Footer } from './components';
import ScrollToTop from './components/ScrollToTop';
import CanonicalSEO from './components/CanonicalSEO';
import { DataProvider } from './context/DataContext';
import { initMobileOptimizer } from './utils/mobileOptimizer';
import './ResponsiveMaster.css';

// Lazy Loaded Pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const LocationPage = lazy(() => import('./pages/LocationPage'));
const AdminPortal = lazy(() => import('./pages/AdminPortal'));

function NotFound() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '40px 20px',
      color: '#f5ebe0',
      background: '#0b0203'
    }}>
      <span style={{ color: '#d4a373', fontSize: '0.85rem', letterSpacing: '2px', fontWeight: 800 }}>
        ERROR 404 // ROUTE NOT FOUND
      </span>
      <h1 style={{ fontSize: '3rem', margin: '15px 0', fontFamily: 'serif' }}>Page Does Not Exist</h1>
      <p style={{ maxWidth: '480px', color: 'rgba(245, 235, 224, 0.7)', marginBottom: '30px', lineHeight: 1.6 }}>
        The destination you attempted to access is unavailable or has been relocated within the network.
      </p>
      <Link to="/" style={{
        background: '#801a24',
        color: '#f5ebe0',
        padding: '12px 28px',
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: 600,
        border: '1px solid rgba(212, 163, 115, 0.4)'
      }}>
        Return to Home ➔
      </Link>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#0b0203' }} />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portal-admin" element={<AdminPortal />} />
          <Route path="/services/:locationSlug" element={<LocationPage />} />
          <Route path="/:locationSlug" element={<LocationPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
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
        <CanonicalSEO />
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