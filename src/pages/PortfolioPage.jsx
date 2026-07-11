

// import React from 'react';
// import Cube3D from '../components/portfolio/Cube3D';
// import VideoZoomReveal from '../components/portfolio/VideoZoomReveal';
// import './PortfolioPage.css';
// import OurWorkSection from '../components/portfolio/OurWorkSection';
// import PortfolioFooterCTA from '../components/portfolio/PortfolioFooterCTA';
// import ClientsShowcase from '../components/portfolio/ClientShowcase';

// export default function PortfolioPage() {
//   return (
//     <div className="portfolio-container">
//       {/* 1. Tera Cube3D Section */}
//       <Cube3D />
//       <VideoZoomReveal />
//       <OurWorkSection />
//       <ClientsShowcase />
//       <PortfolioFooterCTA />
//       {/* 2. Agla koi component aayega toh iske neeche direct call ho jayega */}
//       {/* <NextComponent /> */}
//     </div>
//   );
// }

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './PortfolioPage.css';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  { id: 1, title: 'Summer Campaign 2026', reach: '2.4M', engagement: '210K', conv: '9.2%', roi: '+410%', tag1: '#Growth', tag2: '#Meta', tag3: '#Creative' },
  { id: 2, title: 'Automotive Brand Launch', reach: '1.8M', engagement: '165K', conv: '7.4%', roi: '+280%', tag1: '#Leads', tag2: '#Video', tag3: '#Scale' },
  { id: 3, title: 'D2C Fashion Reel Surge', reach: '4.2M', engagement: '530K', conv: '12.1%', roi: '+620%', tag1: '#Reels', tag2: '#Viral', tag3: '#D2C' },
  { id: 4, title: 'Fintech App Acquisition', reach: '950K', engagement: '88K', conv: '6.2%', roi: '+190%', tag1: '#Performance', tag2: '#ROI', tag3: '#Ads' },
  { id: 5, title: 'EdTech Organic Blueprint', reach: '3.1M', engagement: '290K', conv: '8.8%', roi: '+340%', tag1: '#SEO', tag2: '#Inbound', tag3: '#Content' },
  { id: 6, title: 'Real Estate Lead Gen', reach: '1.2M', engagement: '115K', conv: '10.5%', roi: '+450%', tag1: '#Targeting', tag2: '#Funnel', tag3: '#Sales' },
  { id: 7, title: 'Crypto Web3 Global Drop', reach: '5.6M', engagement: '710K', conv: '4.9%', roi: '+510%', tag1: '#Community', tag2: '#Web3', tag3: '#Twitter' },
];

const PortfolioPage = () => {
  const cardsContainerRef = useRef(null);
  const bitballsRef = useRef(null);

  useEffect(() => {
    // ── 1. CARDS OVERLAP SCALING ANIMATION ──
    const cards = cardsContainerRef.current.querySelectorAll('.big-fat-project-card');
    
    cards.forEach((card, index) => {
      if (index === cards.length - 1) return; // Last card scale down nahi hoga

      gsap.to(card, {
        scale: 0.9,
        opacity: 0.4,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top 120px', // Header clear karne ke liye fixed gap
          end: 'bottom 120px',
          scrub: true,
          pinSpacing: false,
        }
      });
    });

    // ── 2. BITBALLS SEPARATOR ENGINE (CANVAS) ──
    const canvas = bitballsRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = 180; // Separator zone ka clear vertical size

    let balls = [];
    const colors = ['#d4a373', '#801a24', '#f5ebe0', '#1a0508'];

    class Ball {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 8 + 4; // Bitball diameter range
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Reset boundaries
        if (this.x < -20) this.x = canvas.width + 20;
        if (this.x > canvas.width + 20) this.x = -20;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        // Subtle cyber glow matrix
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    for (let i = 0; i < 40; i++) {
      balls.push(new Ball());
    }

    const animateBalls = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      balls.forEach(ball => {
        ball.update();
        ball.draw();
      });
      requestAnimationFrame(animateBalls);
    };
    animateBalls();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="services-master-parallax-wrapper">
      
      {/* SECTION 1: HERO FIXED CANVAS */}
      <div className="services-parallax-trigger-box">
        <div className="hero-frozen-canvas">
          <div className="hero-static-grid-bg"></div>
          <div className="reveal-content-box-custom">
            <span className="services-mini-tagline">Rankvertise Creative Studio</span>
            <h1 className="services-cinematic-headline">
              <span className="inline-word-span">Crafting</span>
              <span className="inline-word-span">Digital</span>
              <span className="inline-word-span">Ecosystems</span>
            </h1>
          </div>
        </div>
      </div>

      {/* SECTION 2: SLIDING CURTAIN PANEL (STACKING CARDS) */}
      <div className="overlay-curtain-panel stacking-panel-adjust">
        <div className="arrow-grid-master-viewport">
          
          <div className="grid-instructions-header-custom project-heading-center">
            <span className="gold-accent-tag">Featured Work</span>
            <h2>Our Top Projects</h2>
            <p>Scroll down to see cards stack elegantly over one another.</p>
          </div>

          {/* Overlapping Container */}
          <div className="projects-cards-vertical-stack" ref={cardsContainerRef}>
            {projectsData.map((project, idx) => (
              <div 
                className="big-fat-project-card" 
                key={project.id}
                style={{ top: `${120 + idx * 25}px` }} // Dynamic safe distance allocation
              >
                <div className="collage-container">
                  
                  {/* LEFT SIDE: 2 Images */}
                  <div className="collage-left-column">
                    <div className="collage-img-box img-one">
                      <img src={`https://picsum.photos/400/300?random=${project.id}-a`} alt="Asset" />
                      <span className="img-overlay-tag">Creative Post</span>
                    </div>
                    <div className="collage-img-box img-two">
                      <img src={`https://picsum.photos/400/300?random=${project.id}-b`} alt="Asset" />
                      <span className="img-overlay-tag">Trending Reel</span>
                    </div>
                  </div>

                  {/* RIGHT SIDE: Stats Dashboard */}
                  <div className="collage-right-column">
                    <div className="stats-main-image-wrapper">
                      <img src={`https://picsum.photos/600/400?random=${project.id}-c`} alt="Hero" className="stats-hero-img" />
                      <div className="stats-dark-gradient-overlay"></div>
                    </div>
                    
                    <div className="project-stats-content">
                      <div className="stats-header">
                        <h3>⚡ {project.title}</h3>
                        <p>Live engagement stats for the showcased assets.</p>
                      </div>
                      
                      <div className="stats-metrics-grid">
                        <div className="metric-item">
                          <span className="metric-number">{project.reach}</span>
                          <span className="metric-label">Total Reach</span>
                        </div>
                        <div className="metric-item">
                          <span className="metric-number">{project.engagement}</span>
                          <span className="metric-label">Engagements</span>
                        </div>
                        <div className="metric-item">
                          <span className="metric-number">{project.conv}</span>
                          <span className="metric-label">Conversion Rate</span>
                        </div>
                        <div className="metric-item">
                          <span className="metric-number">{project.roi}</span>
                          <span className="metric-label">ROI Growth</span>
                        </div>
                      </div>

                      <div className="project-tags-footer">
                        <span>{project.tag1}</span>
                        <span>{project.tag2}</span>
                        <span>{project.tag3}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── BITBALLS SEPARATOR ZONE ── */}
      <div className="bitballs-separator-container">
        <canvas ref={bitballsRef} className="bitballs-canvas" />
        <div className="bitballs-overlay-text">CONTINUE TO SUB-SYSTEM</div>
      </div>

      {/* NEXT SECTION (Fallback Structure) */}
      <div className="services-deep-flow" style={{ minHeight: '50vh', background: '#f5ebe0' }}></div>

    </div>
  );
};

export default PortfolioPage;