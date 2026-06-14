

import React from 'react';
import Cube3D from '../components/portfolio/Cube3D';
import VideoZoomReveal from '../components/portfolio/VideoZoomReveal';
import './PortfolioPage.css';
import OurWorkSection from '../components/portfolio/OurWorkSection';
import PortfolioFooterCTA from '../components/portfolio/PortfolioFooterCTA';
import ClientsShowcase from '../components/portfolio/ClientShowcase';

export default function PortfolioPage() {
  return (
    <div className="portfolio-container">
      {/* 1. Tera Cube3D Section */}
      <Cube3D />
      <VideoZoomReveal />
      <OurWorkSection />
      <ClientsShowcase />
      <PortfolioFooterCTA />
      {/* 2. Agla koi component aayega toh iske neeche direct call ho jayega */}
      {/* <NextComponent /> */}
    </div>
  );
}