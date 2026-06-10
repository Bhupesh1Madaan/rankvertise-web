import React from 'react';
import { motion } from 'framer-motion'; // <-- Framer motion import kiya
import ScrollRevealHero from '../components/ScrollRevealHero';
import { Navbar, Footer, PortfolioPage } from '../components';
import LogoLoop from '../components/LogoLoop';
import ScrollStack from '../components/ScrollStack';
import VideoOrigin from '../components/VideoOrigin';
import LogoMarquee from '../components/LogoMarquee';
import MagicBento from '../components/MagicBento';
import CircularGallery from '../components/CircularGallery';
import { ClientOrbitSection } from '../components/ClientOrbitSection';

function Home() {
    const usps = [
        { text: "Gen Z Creativity" }, { text: "Business Level Strategy" },
        { text: "Speedy Timelines" }, { text: "ROI Rich Growth" },
        { text: "Transparent Process" }, { text: "Custom Scale Solutions" }
    ];

    return (
        // Motion wrapper lagane se iske andr ke sabhi libraries clean up methods safely unmount ho jayenge
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
        >
            <ScrollRevealHero />
            <LogoLoop logos={usps} speed={100} fadeOutColor="#f5ebe0" />
            <ScrollStack />
            <VideoOrigin />
            <LogoMarquee />
            <MagicBento />
            <CircularGallery />
            <ClientOrbitSection />
        </motion.div>
    );
}

export default Home;