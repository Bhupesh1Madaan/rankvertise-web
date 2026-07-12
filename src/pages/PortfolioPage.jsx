import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './PortfolioPage.css';

gsap.registerPlugin(ScrollTrigger);

const trailImages = [
  'https://picsum.photos/400/300?random=1',
  'https://picsum.photos/400/300?random=2',
  'https://picsum.photos/400/300?random=3',
  'https://picsum.photos/400/300?random=4',
  'https://picsum.photos/400/300?random=5',
  'https://picsum.photos/400/300?random=6',
  'https://picsum.photos/400/300?random=7',
  'https://picsum.photos/400/300?random=8',
];

const brandsData = [
  { id: 1, name: 'CREW DIGITAL', desc: 'Performance marketing infrastructure.', imgs: ['https://picsum.photos/400/800?random=11', 'https://picsum.photos/600/400?random=12', 'https://picsum.photos/600/400?random=13'] },
  { id: 2, name: 'ZARA INDIA', desc: 'Organic growth and Gen-Z styling.', imgs: ['https://picsum.photos/400/800?random=14', 'https://picsum.photos/600/400?random=15', 'https://picsum.photos/600/400?random=16'] },
  { id: 3, name: 'APEX AGENCY', desc: 'Paid scaling matrix and funnels.', imgs: ['https://picsum.photos/400/800?random=17', 'https://picsum.photos/600/400?random=18', 'https://picsum.photos/600/400?random=19'] }
];

const stackProjects = [
  { id: 1, brand: 'ZARA India', demand: 'Scale organic conversion via Gen-Z aesthetic patterns.', reach: '1.2M', engagement: '95K' },
  { id: 2, brand: 'KicksCrew', demand: 'Maximize performance conversions for dynamic limited drops.', reach: '3.4M', engagement: '410K' },
  { id: 3, brand: 'Aura Fintech', demand: 'Establish trust and high acquisition loops via micro-infographics.', reach: '890K', engagement: '62K' }
];

const PortfolioPage = () => {
  const compRef = useRef(null);
  const stackContainerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // ── SECTION 1: TRAIL LOOP ──
      gsap.to('.trail-track', {
        x: '-50%',
        ease: 'none',
        duration: 22,
        repeat: -1
      });

      const singleImages = document.querySelectorAll('.trail-card');
      singleImages.forEach((img, index) => {
        gsap.to(img, {
          y: '+=20',
          duration: 2.5 + (index % 3) * 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.15
        });
      });

      // ── SECTION 2: HEADING DRIFT BOUNDED WITHIN SECTION 2 ──
      // Dynamic shift: enters left-top, pins down to absolute center, hides on Section 2 leave.
      gsap.timeline({
        scrollTrigger: {
          trigger: '.sec-two-viewport',
          start: 'top top',      // Pinned when section top hits screen top
          end: 'bottom bottom',  // Unpins when section ends
          scrub: true,
        }
      })
      .fromTo('.shifting-title-head',
        { 
          left: '4%', 
          top: '40px', 
          xPercent: 0, 
          yPercent: 0, 
          scale: 1, 
          opacity: 1 
        },
        { 
          left: '50%', 
          top: '50%', 
          xPercent: -50, 
          yPercent: -50, 
          scale: 1.4, 
          opacity: 0.05, // Subtle light background shade in center
          ease: 'power1.out'
        }
      );

      // ── SECTION 3: INCREMENTAL 2PX CARD STACK ──
      const cards = stackContainerRef.current.querySelectorAll('.stack-center-card');
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;
        
        gsap.to(card, {
          scale: 0.96 - (index * 0.01),
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top +=120px',
            end: 'bottom +=120px',
            scrub: true,
            invalidateOnRefresh: true
          }
        });
      });

    }, compRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="revamp-master-box" ref={compRef}>
      
      {/* SECTION 1: HERO VIEWPORT */}
      <section className="sec-one-hero">
        <div className="wavy-trail-viewport">
          <div className="trail-track">
            {[...trailImages, ...trailImages].map((src, i) => (
              <div className="trail-card" key={i}>
                <img src={src} alt="Stream Grid" />
              </div>
            ))}
          </div>
        </div>
        <div className="hero-content-front">
          <span className="gold-accent-pill">RANKVERTISE MATRIX</span>
          <h1 className="hero-main-title">WE PROVE THE VALUE</h1>
          <p className="hero-sub-para">Custom dynamic strategy tracking built for high-scale marketing deployment.</p>
        </div>
      </section>

      {/* SECTION 2: BRAND ENGINE (HEADING LOCKED TO THIS CONTAINER ONLY) */}
      <section className="sec-two-viewport">
        {/* Fixed within container using CSS sticky trick so it hides instantly on Section 3 start */}
        <div className="sticky-heading-bridge">
          <h2 className="shifting-title-head">FEATURED WORK</h2>
        </div>

        <div className="brands-stack-fluid">
          {brandsData.map((brand, index) => (
            <div className={`brand-item-row ${index % 2 !== 0 ? 'row-flipped' : ''}`} key={brand.id}>
              
              <div className="brand-info-left">
                <h3>{brand.name}</h3>
                <p>{brand.desc}</p>
              </div>

              <div className="brand-collage-square-composite">
                <div className="tall-image-column">
                  <img src={brand.imgs[0]} alt="Featured Portrait" />
                </div>
                <div className="wide-images-column-stack">
                  <div className="wide-box"><img src={brand.imgs[1]} alt="Featured Landscape 1" /></div>
                  <div className="wide-box"><img src={brand.imgs[2]} alt="Featured Landscape 2" /></div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: STICKY CARD OVERLAY WITH 2PX INCREMENT GAP */}
      <section className="section-three-stack-wrapper">
        <div className="stack-header-intro">
          <span>METRICS ENGINE</span>
          <h2>Live Conversion Funnels</h2>
        </div>

        <div className="stack-cards-pinned-container" ref={stackContainerRef}>
          {stackProjects.map((proj, idx) => (
            <div 
              className="stack-center-card" 
              key={proj.id}
              style={{ 
                top: `${120 + (idx * 2)}px`, // Dynamic 2px calculation step
                zIndex: idx + 1 
              }}
            >
              <div className="stack-card-inner-split">
                
                <div className="stack-left-demand">
                  <span className="brand-pill">{proj.brand}</span>
                  <h4>THE DEMAND</h4>
                  <p className="demand-text">"{proj.demand}"</p>
                </div>

                <div className="stack-right-instagram-mock">
                  <div className="instagram-post-container">
                    <div className="insta-header-mock">
                      <div className="avatar-mock"></div>
                      <span>{proj.brand.toLowerCase()}</span>
                    </div>
                    <div className="insta-media-mock">
                      <img src={`https://picsum.photos/500/500?random=${proj.id + 88}`} alt="Insta Data Render" />
                    </div>
                    <div className="insta-metrics-overlay-row">
                      <div className="metric-badge">
                        <span className="lbl">REACH</span>
                        <span className="val">⚡ {proj.reach}</span>
                      </div>
                      <div className="metric-badge">
                        <span className="lbl">ENGAGEMENT</span>
                        <span className="val">❤️ {proj.engagement}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default PortfolioPage;