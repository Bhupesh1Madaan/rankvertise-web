// Is ek file se saare components export ho jayenge
export { default as Navbar } from './Navbar';
export { default as Footer } from './Footer';
export { default as ScrollRevealHero } from './ScrollRevealHero';
export { default as LogoLoop } from './LogoLoop';
export { default as ScrollStack } from './ScrollStack';
export { default as VideoOrigin } from './VideoOrigin';
export { default as LogoMarquee } from './LogoMarquee';
export { default as MagicBento } from './MagicBento';
export { default as CircularGallery } from './CircularGallery';
export { ClientOrbitSection } from './ClientOrbitSection';
export { default as PortfolioPage } from './PortfolioPage';
export { default as AboutPage } from '../pages/About';

// Note: Har individual component file ke top par uski apni CSS import honi chahiye
// Jaise ScrollRevealHero.jsx ke andar top par `import './ScrollRevealHero.css';` likha ho.