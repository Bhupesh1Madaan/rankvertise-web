/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect, useState, useMemo, forwardRef, useImperativeHandle, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import './About.css';

// ── ROTATING TEXT SYSTEM ENGINE ──
const cn = (...classes) => classes.filter(Boolean).join(' ');

const RotatingText = forwardRef((props, ref) => {
  const {
    texts,
    transition = { type: 'spring', damping: 22, stiffness: 260 },
    initial = { y: '100%', opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: '-120%', opacity: 0 },
    rotationInterval = 2200,
    staggerDuration = 0.03,
    splitBy = 'characters',
    mainClassName
  } = props;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const splitIntoCharacters = text => {
    if (typeof Intl !== 'undefined' && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
      return Array.from(segmenter.segment(text), segment => segment.segment);
    }
    return Array.from(text);
  };

  const elements = useMemo(() => {
    const currentText = texts[currentTextIndex];
    const words = currentText.split(' ');
    return words.map((word, i) => ({
      characters: splitBy === 'characters' ? splitIntoCharacters(word) : [word],
      needsSpace: i !== words.length - 1
    }));
  }, [texts, currentTextIndex, splitBy]);

  const next = useCallback(() => {
    setCurrentTextIndex(prev => (prev === texts.length - 1 ? 0 : prev + 1));
  }, [texts.length]);

  useImperativeHandle(ref, () => ({ next }), [next]);

  useEffect(() => {
    const intervalId = setInterval(next, rotationInterval);
    return () => clearInterval(intervalId);
  }, [next, rotationInterval]);

  return (
    <span className={cn('about-text-rotate', mainClassName)}>
      <AnimatePresence mode="wait">
        <motion.span key={currentTextIndex} className="about-text-rotate-line-box" layout>
          {elements.map((wordObj, wordIndex, array) => {
            const previousCharsCount = array.slice(0, wordIndex).reduce((sum, w) => sum + w.characters.length, 0);
            return (
              <span key={wordIndex} className="about-text-rotate-word">
                {wordObj.characters.map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{
                      ...transition,
                      delay: (previousCharsCount + charIndex) * staggerDuration
                    }}
                    className="about-text-rotate-element"
                  >
                    {char}
                  </motion.span>
                ))}
                {wordObj.needsSpace && <span className="about-text-rotate-space">&nbsp;</span>}
              </span>
            );
          })}
        </motion.span>
      </AnimatePresence>
    </span>
  );
});
RotatingText.displayName = 'RotatingText';

// ── MAIN ABOUT US RENDER MATRIX ──
function About() {
  const containerRef = useRef(null);
  const section2Ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: s2Progress } = useScroll({
    target: section2Ref,
    offset: ["start end", "end start"]
  });

  // Parallax framing calculations tracking image mask positions
  const imgParallaxY = useTransform(s2Progress, [0, 1], [-90, 90]);
  const imgFrameScale = useTransform(s2Progress, [0, 0.5, 1], [0.96, 1, 0.96]);

  return (
    <div ref={containerRef} className="about-master-parallax-wrapper">
      
      {/* =========================================================
          SECTION 1: THE MANIFESTO ENTRANCE (CINEMATIC FREEZE STICKY)
          ========================================================= */}
      <div className="about-sticky-section-wrapper">
        <section className="about-frozen-viewport-canvas">
          <div className="about-hero-static-grid-bg"></div>
          
          <div className="about-manifesto-center-box">
            <span className="maroon-about-tag">Rankvertise Operations</span>
            
            <h1 className="manifesto-rotating-headline-box">
              <span>We are engineered to&nbsp;</span>
              <RotatingText 
                texts={["Disrupt Markets.", "Scale Platforms.", "Override Algorithms.", "Capture Intent."]} 
                mainClassName="highlight-rotating-span"
              />
            </h1>

            <p className="manifesto-static-desc">
              Traditional advertising frameworks are fundamentally lazy. They optimize for vanity metrics while capital evaporates. Rankvertise builds composable technology layers to acquire permanent attention models. Scroll to inspect our internal architecture benchmarks.
            </p>
          </div>
        </section>
      </div>

      {/* =========================================================
          SECTION 2: VELOCITY OPERATIONS GRID (SMOOTH OVERLAP CURTAIN)
          ========================================================= */}
      <section ref={section2Ref} className="about-overlap-curtain-panel">
        <div className="editorial-split-grid-viewport">
          
          {/* Left Data Analytics Blocks */}
          <div className="editorial-text-column">
            <span className="gold-about-subtag">System Telemetry // 02</span>
            <h2>Velocity Operations Architecture</h2>
            <p className="editorial-lead-para">We replace human processing delay fields with high-performance automated ingestion components.</p>
            
            <div className="editorial-embedded-counters">
              <div className="mini-counter-node">
                <h3>+310%</h3>
                <p>Average organic domain footprint authority growth acceleration across clients.</p>
              </div>
              <div className="mini-counter-node">
                <h3>-42%</h3>
                <p>Latent bounce velocity drops tracking micro-frontend structural refactors.</p>
              </div>
            </div>
          </div>

          {/* Right Image Mask Frame Parallax */}
          <div className="editorial-image-column">
            <motion.div className="luxury-parallax-frame-mask" style={{ scale: imgFrameScale }}>
              <motion.div 
                className="parallax-still-image-asset"
                style={{ 
                  y: imgParallaxY,
                  backgroundImage: `url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop")`
                }}
              />
              <div className="frame-data-hud-overlay">
                <span>NODE INTERCEPT ACTIVE // SECURITY VERIFIED</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 3: ELITE HUMAN NODES - TEAM MATRIX (Placeholder)
          ========================================================= */}
      <section className="about-team-matrix-section">
        <div className="about-internal-block-container">
          <span className="gold-about-subtag">Human Capital Matrix</span>
          <h2>The Think Tank Engineering Growth</h2>
          <p className="about-section-desc-brief">Meet the data scientists, engineers, and brand growth architects manipulating commercial visibility vectors.</p>
          
          <div className="about-section-3-placeholder-grid">
            {/* Team layout profile block cards logic will inject here loop wise */}
            <div className="about-placeholder-card">[ Section 3 Team Profile Cards Stack View ]</div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: GRAPHS & TELEMETRY DATA MATRIX (Placeholder)
          ========================================================= */}
      <section className="about-graphs-telemetry-section">
        <div className="about-internal-block-container">
          <span className="maroon-about-tag-light">Performance Analytics</span>
          <h2>Visualizing Disruption Trajectories</h2>
          <p className="about-section-desc-brief">Raw mathematical projections and operational scaling curves outperforming legacy marketing indices.</p>
          
          <div className="about-section-4-placeholder-box">
            <div className="about-placeholder-card">[ Section 4 Interactive Chart Rendering Pipelines & Growth Slopes Grid ]</div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: THE HISTORIC ROADMAP - HOW WE STARTED (Placeholder)
          ========================================================= */}
      <section className="about-timeline-roadmap-section">
        <div className="about-internal-block-container">
          <span className="gold-about-subtag">Chronicle Logs</span>
          <h2>Genesis to Market Dominance</h2>
          <p className="about-section-desc-brief">How we evolved from an automated micro-script experiment into a multi-vertical strategic enterprise engine.</p>
          
          <div className="about-section-5-placeholder-timeline">
            <div className="about-placeholder-card">[ Section 5 Composed Vertical Node Timeline: Foundations to Alpha Release ]</div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: ANTI-AGENCY DIFFERENTIATION MATRIX (Placeholder)
          ========================================================= */}
      <section className="about-anti-agency-section">
        <div className="about-internal-block-container">
          <span className="maroon-about-tag-light">Strategic Divergence</span>
          <h2>Why We are Fundamentally Different</h2>
          <p className="about-section-desc-brief">A breakdown of our asymmetric execution patterns vs conventional ad agency retaining contracts.</p>
          
          <div className="about-section-6-placeholder-matrix">
            <div className="about-placeholder-card">[ Section 6 Asymmetric Comparison Columns: Rankvertise Engine vs Standard Agencies Retainers ]</div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;