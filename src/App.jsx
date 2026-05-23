import React from 'react';
import Navbar from './components/Navbar';
import ScrollRevealHero from './components/ScrollRevealHero';
import LogoLoop from './components/LogoLoop';
import ScrollStack from './components/ScrollStack';
import VideoOrigin from './components/VideoOrigin';
// import ClientMapShowcase from './components/ClientMapShowcase'; // VECTOR MAP WITH TOP MARQUEE CONNECTED
import LogoMarquee from './components/LogoMarquee';
import MagicBento from './components/MagicBento';
import CircularGallery from './components/CircularGallery';
import Footer from './components/Footer';
import { ClientOrbitSection } from './components/ClientOrbitSection';
import './ResponsiveMaster.css';

function App() {
  const usps = [
    { text: "Gen Z Creativity" }, { text: "Business Level Strategy" },
    { text: "Speedy Timelines" }, { text: "ROI Rich Growth" },
    { text: "Transparent Process" }, { text: "Custom Scale Solutions" }
  ];

  return (
    <div className="app-container">
      <Navbar />
      <ScrollRevealHero />
      <LogoLoop logos={usps} speed={100} fadeOutColor="#f5ebe0" />
      <ScrollStack />
      <VideoOrigin />

      {/* SECTION COLLAGE: TOP MARQUEE EXTENSION + INTERACTIVE HIGHLIGHTED DOTTED WORLD MAP GRID */}

      <LogoMarquee />
      <MagicBento />
      <CircularGallery />
      <ClientOrbitSection />
      <Footer />
    </div>
  );
}

export default App;