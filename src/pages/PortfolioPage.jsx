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

const PortfolioPage = () => {
  const compRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // ── SECTION 1: TRAIL LOOP ──
      gsap.to('.trail-track', {
        x: '-50%',
        ease: 'none',
        duration: 22,
        repeat: -1,
      });

      const singleImages = document.querySelectorAll('.trail-card');
      singleImages.forEach((img, index) => {
        gsap.to(img, {
          y: '+=20',
          duration: 2.5 + (index % 3) * 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.15,
        });
      });

      // ── SECTION 2: SMOOTH FADE & SLIDE REVEAL ON SCROLL ──
      gsap.fromTo(
        '.under-construction-card',
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-under-construction',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, compRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="revamp-master-box" ref={compRef}>
      {/* SECTION 1: HERO VIEWPORT (AS IS) */}
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
          <p className="hero-sub-para">
            Custom dynamic strategy tracking built for high-scale marketing deployment.
          </p>
        </div>
      </section>

      {/* SECTION 2: COMING SOON / INSTAGRAM REDIRECT */}
      <section className="sec-under-construction">
        <div className="under-construction-glow"></div>
        <div className="under-construction-card">
          <span className="gold-accent-tag">✦ UNDER REFINEMENT</span>
          <h2 className="construction-headline">
            Good things take time, but time is valuable.
          </h2>
          <p className="construction-desc">
            Till we complete our full portfolio experience, explore our live campaigns, creatives, and performance updates directly on our Instagram.
          </p>
          <a
            href="https://www.instagram.com/rankvertise/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-cta-btn"
          >
            Visit Our Instagram ➔
          </a>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;