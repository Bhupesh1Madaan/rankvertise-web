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
  const section4Ref = useRef(null);
  const { scrollYProgress: s4Progress } = useScroll({
    target: section4Ref,
    offset: ["start end", "end start"]
  });

  const section5Ref = useRef(null);
  const { scrollYProgress: s5Progress } = useScroll({
    target: section5Ref,
    offset: ["start end", "end start"]
  });

  const timelineLineHeight = useTransform(s5Progress, [0.1, 0.7], ["0%", "100%"]);
  const timelineBgY = useTransform(s5Progress, [0, 1], ["-8%", "8%"]);

  const bgMatrixX = useTransform(s4Progress, [0, 1], ["-10%", "10%"]);
  const bgMatrixRotate = useTransform(s4Progress, [0, 1], [0, 15]);
  const dataLineScaleX = useTransform(s4Progress, [0, 0.6], [0, 1]);

    const section6Ref = useRef(null);
  const { scrollYProgress: s6Progress } = useScroll({
    target: section6Ref,
    offset: ["start end", "end start"]
  });

  const matrixY = useTransform(s6Progress, [0, 1], ["20px", "-20px"]);
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
    SECTION 3: FIXED - ELITE HUMAN NODES (DEDICATED MANAGEMENT MATRIX)
    ========================================================= */}
<section className="about-team-matrix-section">
  <div className="about-internal-block-container">
    
    {/* Header Section with Smooth Fade-up */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className="gold-about-subtag">Human-in-the-loop Matrix // 03</span>
      <h2>The Cross-Functional Growth Core</h2>
      <p className="about-section-desc-brief">
        We don't assign isolated freelancers or leave your scaling assets unsupervised. Rankvertise deploys a dedicated structural unit mapping directly to your brand ecosystems—ensuring end-to-end integration across every protocol.
      </p>
    </motion.div>
    
    {/* Elite Operational Pillars with Interactive Staggered Hover */}
    <motion.div 
      className="team-syndicate-grid"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } }
      }}
    >
      {/* Pillar 1 */}
      <motion.div 
        className="syndicate-node-card"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
        }}
        whileHover={{ 
          y: -10, 
          scale: 1.02,
          borderColor: "rgba(128, 26, 36, 0.3)",
          boxShadow: "0 25px 50px rgba(26, 5, 8, 0.12)"
        }}
      >
        <div className="node-icon-wrapper">// SYSTEM ENGINEERS</div>
        <h3>Infrastructure Specialists</h3>
        <p>Handling micro-frontend architectural speeds, Core Web Vitals structural loops, and absolute zero latent processing pipeline optimization.</p>
      </motion.div>

      {/* Pillar 2 */}
      <motion.div 
        className="syndicate-node-card"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
        }}
        whileHover={{ 
          y: -10, 
          scale: 1.02,
          borderColor: "rgba(128, 26, 36, 0.3)",
          boxShadow: "0 25px 50px rgba(26, 5, 8, 0.12)"
        }}
      >
        <div className="node-icon-wrapper">// DATA ARCHITECTS</div>
        <h3>Algorithmic Engineers</h3>
        <p>Deconstructed tracking matrices manipulating intent keywords, semantic graph matching, and indexing overrides for permanent organic gravity.</p>
      </motion.div>

      {/* Pillar 3 */}
      <motion.div 
        className="syndicate-node-card"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
        }}
        whileHover={{ 
          y: -10, 
          scale: 1.02,
          borderColor: "rgba(128, 26, 36, 0.3)",
          boxShadow: "0 25px 50px rgba(26, 5, 8, 0.12)"
        }}
      >
        <div className="node-icon-wrapper">// OPERATIONS CORES</div>
        <h3>Dedicated Account Custodians</h3>
        <p>Your centralized interface node. Synchronizing telemetry updates, asset delivery layers, and absolute high-fidelity priority project management.</p>
      </motion.div>
    </motion.div>

    {/* Premium Priority Client Vision Banner with Magnetic In-View Reveal */}
    <motion.div 
      className="client-priority-anchor-banner"
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.01 }}
    >
      <h3 className="priority-tagline-hero">
        "Your scaling vectors aren't passed down a generic assembly line. You are the absolute engineering priority."
      </h3>
      <p className="priority-sub-statement">
        From continuous optimization loops to enterprise-wide infrastructure deployment, your assets are managed by a cohesive, dedicated operational core built to protect and compound your growth.
      </p>
    </motion.div>

  </div>
</section>

      {/* =========================================================
          SECTION 4: GRAPHS & TELEMETRY DATA MATRIX (Placeholder)
          ========================================================= */}
      {/* =========================================================
    SECTION 4: PERFORMANCE ANALYTICS (DYNAMIC SCROLL TELEMETRY)
    ========================================================= */}
<section ref={section4Ref} className="about-graphs-telemetry-section">
  
  {/* SCROLL-DRIVEN BACKGROUND VECTOR MATRIX */}
  {/* Yeh element sirf scroll hone par move hota hai aur background mein rehta hai */}
  <motion.div 
    className="telemetry-scroll-vector-mesh"
    style={{ 
      x: bgMatrixX, 
      rotate: bgMatrixRotate,
      style: { willChange: "transform" }
    }}
  />
  <div className="telemetry-vignette-overlay"></div>

  <div className="about-internal-block-container" style={{ position: "relative", zIndex: 3 }}>
    
    {/* Header Fade-In */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <span className="maroon-about-tag-light">Performance Analytics // 04</span>
      <h2>Visualizing Disruption Trajectories</h2>
      <p className="about-section-desc-brief">
        Raw mathematical projections and operational scaling curves outperforming legacy marketing indices. We optimize vectors in real-time.
      </p>
    </motion.div>

    {/* Interactive Dashboard / Metrics View */}
    <div className="telemetry-data-display-matrix">
      
      {/* Left side: Animated Data Plot Lines */}
      <div className="telemetry-chart-simulation-box">
        <div className="chart-hud-header">
          <span className="hud-pulse-dot"></span>
          <span>LIVE TRACKING MATRIX // OPTIMIZATION_LOOP_ACTIVE</span>
        </div>
        
        <div className="mock-vector-axis-container">
          <div className="vector-axis-y"></div>
          <div className="vector-axis-x"></div>
          
          {/* Animated Growth Slopes driven by scroll */}
          <div className="simulation-wave-wrapper">
            <motion.div 
              className="interactive-data-slope-line primary-slope"
              style={{ scaleX: dataLineScaleX, originX: 0 }}
            />
            <motion.div 
              className="interactive-data-slope-line secondary-slope"
              style={{ scaleX: dataLineScaleX, originX: 0 }}
              transition={{ delay: 0.2 }}
            />
          </div>
        </div>
      </div>

      {/* Right side: Dynamic Stat Cards */}
      <motion.div 
        className="telemetry-stats-sidebar"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <motion.div 
          className="telemetry-micro-card"
          variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
          whileHover={{ x: 5, backgroundColor: "rgba(245, 235, 224, 0.03)" }}
        >
          <div className="telemetry-node-metric">94.2%</div>
          <h4>Algorithmic Retain Efficiency</h4>
          <p>Continuous indexing structures anchoring nodes against core update fluctuations.</p>
        </motion.div>

        <motion.div 
          className="telemetry-micro-card"
          variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
          whileHover={{ x: 5, backgroundColor: "rgba(245, 235, 224, 0.03)" }}
        >
          <div className="telemetry-node-metric">0.18s</div>
          <h4>Edge Content Delivery Max Latency</h4>
          <p>Global edge caching overrides bypassing traditional proxy rendering bottlenecks.</p>
        </motion.div>
      </motion.div>

    </div>

  </div>
</section>

      {/* =========================================================
          SECTION 5: THE HISTORIC ROADMAP - HOW WE STARTED (Placeholder)
          ========================================================= */}
      {/* =========================================================
    TRANSITION SECTION INTERCEPT: ASYMMETRIC TECH WAVE DIVIDER (S4 -> S5)
    ========================================================= */}
<div className="section-asymmetric-transition-slope s4-to-s5-slope">
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M1200 120L0 16.48V0h1200v120z" className="shape-fill-maroon"></path>
  </svg>
</div>

{/* =========================================================
    SECTION 5: THE HISTORIC ROADMAP - CHRONICLE LOGS (DYNAMIC ROADMAP)
    ========================================================= */}
<section ref={section5Ref} className="about-timeline-roadmap-section">
  
  {/* BACKGROUND PARALLAX SWIRL MESH */}
  <motion.div 
    className="roadmap-abstract-swirl-bg"
    style={{ y: timelineBgY, willChange: "transform" }}
  />

  <div className="about-internal-block-container" style={{ position: "relative", zIndex: 3 }}>
    
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <span className="gold-about-subtag">Chronicle Logs // 05</span>
      <h2>Genesis to Market Dominance</h2>
      <p className="about-section-desc-brief">
        How we evolved from an automated micro-script experiment into a multi-vertical strategic enterprise engine.
      </p>
    </motion.div>

    {/* DYNAMIC SCROLL VERTICAL TIMELINE CORE */}
    <div className="chronicle-timeline-spine-wrapper">
      
      {/* Central Laser Tracking Beam Line */}
      <div className="timeline-static-backbone">
        <motion.div 
          className="timeline-active-laser-fill"
          style={{ height: timelineLineHeight }}
        />
      </div>

      {/* Node Event 1 */}
      <div className="chronicle-timeline-node-row left-node-row">
        <div className="timeline-node-pointer-dot"></div>
        <motion.div 
          className="chronicle-event-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(26, 5, 8, 0.08)" }}
        >
          <span className="chronicle-date-tag">Phase Alpha // 2023</span>
          <h3>The Core Script Sandbox</h3>
          <p>Deconstructed conventional scraper pipelines to engineer an automated micro-script infrastructure that autonomously indexed and matched complex user search patterns.</p>
        </motion.div>
      </div>

      {/* Node Event 2 */}
      <div className="chronicle-timeline-node-row right-node-row">
        <div className="timeline-node-pointer-dot"></div>
        <motion.div 
          className="chronicle-event-card dark-variant"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
        >
          <span className="chronicle-date-tag gold-text">Scale Engine // 2024</span>
          <h3>Algorithmic Projections Expansion</h3>
          <p>Transitioned from isolated testing sandboxes into active enterprise deployments. Launched real-time telemetry processing overlays to track user retention footprints dynamically.</p>
        </motion.div>
      </div>

      {/* Node Event 3 */}
      <div className="chronicle-timeline-node-row left-node-row">
        <div className="timeline-node-pointer-dot"></div>
        <motion.div 
          className="chronicle-event-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(26, 5, 8, 0.08)" }}
        >
          <span className="chronicle-date-tag">Dominance Matrix // 2026</span>
          <h3>Multi-Vertical Enterprise Core</h3>
          <p>Today, Rankvertise transforms raw search architecture. Overriding modern programmatic restrictions to build permanent authority structures for globally scaling clients.</p>
        </motion.div>
      </div>

    </div>

  </div>
</section>

      {/* =========================================================
    SECTION 6: ANTI-AGENCY STRATEGIC DIVERGENCE (INTERACTIVE MATRIX)
    ========================================================= */}
<section ref={section6Ref} className="about-anti-agency-section">
  <div className="about-internal-block-container" style={{ position: "relative", zIndex: 3 }}>
    
    {/* Header Section */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <span className="maroon-about-tag-light">Strategic Divergence // 06</span>
      <h2>Why We are Fundamentally Different</h2>
      <p className="about-section-desc-brief">
        Conventional agencies lock you into restrictive contracts to optimize for vanity metrics. Rankvertise builds composable technology layers to acquire permanent market gravity.
      </p>
    </motion.div>

    {/* ASYMMETRIC COMPARISON ENGINE COLUMN MATRIX */}
    <motion.div 
      className="asymmetric-comparison-engine-grid"
      style={{ y: matrixY, style: { willChange: "transform" } }}
    >
      
      {/* Column 1: Legacy Frameworks (The Conventional Agency) */}
      <motion.div 
        className="divergence-column-card legacy-frameworks-box"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        whileHover={{ scale: 0.99, filter: "grayscale(0%)", opacity: 1 }}
      >
        <div className="column-system-indicator">// LEGACY FRAMEWORKS</div>
        <h3>The Traditional Agency Retainer</h3>
        
        <ul className="divergence-matrix-points-list">
          <li>
            <strong>Vanity Metric Tuning:</strong> Optimizing for surface-level impressions, likes, and soft-clicks while capital efficiency and real pipelines evaporate.
          </li>
          <li>
            <strong>Human Delay Triggers:</strong> Asset execution relies entirely on siloed manual processing, introducing immense latency and communication barriers.
          </li>
          <li>
            <strong>Leased Traction Models:</strong> The moment you stop paying their monthly retainer fee, your visibility footprint instantly zeroes out.
          </li>
        </ul>
      </motion.div>

      {/* Column 2: The Rankvertise Protocol (The Superior Engine) */}
      <motion.div 
        className="divergence-column-card rankvertise-protocol-box"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ 
          y: -8,
          borderColor: "rgba(212, 163, 115, 0.4)",
          boxShadow: "0 30px 60px rgba(128, 26, 36, 0.25)"
        }}
      >
        {/* Glow vector effect flare inside the card */}
        <div className="protocol-card-glow-flare"></div>
        
        <div className="column-system-indicator active-gold">// RANKVERTISE OPERATIONAL LAYER</div>
        <h3>The Algorithmic Ingestion Core</h3>
        
        <ul className="divergence-matrix-points-list protocol-active-list">
          <li>
            <strong>Intent Capture Frameworks:</strong> We isolate and capture high-converting search coordinates directly before your competitors can bid on them.
          </li>
          <li>
            <strong>Automated Ingestion Loops:</strong> Deploying direct machine micro-scripts that continuously inject, map, and track web vitals around the clock.
          </li>
          <li>
            <strong>Permanent Asset Assets:</strong> We construct self-sustaining micro-frontend architectures that compound authority, making your traffic permanent.
          </li>
        </ul>
      </motion.div>

    </motion.div>

  </div>
</section>

    </div>
  );
}

export default About;