import React from 'react';
import Navbar from './components/Navbar';
import ScrollRevealHero from './components/ScrollRevealHero';
import {LogoLoop} from './components/LogoLoop';
import ScrollStack from './components/ScrollStack';
import LogoMarquee from './components/LogoMarquee';
import OriginStory from './components/OriginStory';
import MagicBento from './components/MagicBento';         // SECTION 5
import CircularGallery from './components/CircularGallery'; // SECTION 6
import Footer from './components/Footer';

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
      <LogoMarquee />
      <OriginStory />

      {/* ADDED: Bento Grid & 3D Infinite Cylinder viewports */}
      <MagicBento />
      <CircularGallery />
      <Footer />
    </div>
  );
}

export default App;