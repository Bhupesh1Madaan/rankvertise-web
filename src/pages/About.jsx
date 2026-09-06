/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect, useState, useMemo, forwardRef, useImperativeHandle, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useData } from '../context/DataContext';
import './About.css';

const DEFAULT_ABOUT_DATA = {
  tag: "Rankvertise Operations",
  rotatingTexts: ["Disrupt Markets.", "Scale Platforms.", "Override Algorithms.", "Capture Intent."],
  manifestoDesc: "Traditional advertising frameworks are fundamentally lazy. They optimize for vanity metrics while capital evaporates. Rankvertise builds composable technology layers to acquire permanent attention models. Scroll to inspect our internal architecture benchmarks.",
  s2Subtag: "System Telemetry // 02",
  s2Heading: "Velocity Operations Architecture",
  s2Lead: "We replace human processing delay fields with high-performance automated ingestion components.",
  s2Counter1Val: "+310%",
  s2Counter1Text: "Average organic domain footprint authority growth acceleration across clients.",
  s2Counter2Val: "-42%",
  s2Counter2Text: "Latent bounce velocity drops tracking micro-frontend structural refactors.",
  s2Image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
  pillars: [
    { code: "// SYSTEM ENGINEERS", title: "Infrastructure Specialists", desc: "Handling micro-frontend architectural speeds, Core Web Vitals structural loops, and absolute zero latent processing pipeline optimization." },
    { code: "// DATA ARCHITECTS", title: "Algorithmic Engineers", desc: "Deconstructed tracking matrices manipulating intent keywords, semantic graph matching, and indexing overrides for permanent organic gravity." },
    { code: "// OPERATIONS CORES", title: "Dedicated Account Custodians", desc: "Your centralized interface node. Synchronizing telemetry updates, asset delivery layers, and absolute high-fidelity priority project management." }
  ],
  priorityBannerHero: "\"Your scaling vectors aren't passed down a generic assembly line. You are the absolute engineering priority.\"",
  priorityBannerSub: "From continuous optimization loops to enterprise-wide infrastructure deployment, your assets are managed by a cohesive, dedicated operational core built to protect and compound your growth.",
  metric1Val: "94.2%",
  metric1Title: "Algorithmic Retain Efficiency",
  metric1Desc: "Continuous indexing structures anchoring nodes against core update fluctuations.",
  metric2Val: "0.18s",
  metric2Title: "Edge Content Delivery Max Latency",
  metric2Desc: "Global edge caching overrides bypassing traditional proxy rendering bottlenecks.",
  timeline: [
    { dateTag: "Phase Alpha // 2023", title: "The Core Script Sandbox", desc: "Deconstructed conventional scraper pipelines to engineer an automated micro-script infrastructure that autonomously indexed and matched complex user search patterns." },
    { dateTag: "Scale Engine // 2024", title: "Algorithmic Projections Expansion", desc: "Transitioned from isolated testing sandboxes into active enterprise deployments. Launched real-time telemetry processing overlays to track user retention footprints dynamically." },
    { dateTag: "Dominance Matrix // 2026", title: "Multi-Vertical Enterprise Core", desc: "Today, Rankvertise transforms raw search architecture. Overriding modern programmatic restrictions to build permanent authority structures for globally scaling clients." }
  ]
};

const cn = (...classes) => classes.filter(Boolean).join(' ');

const RotatingText = forwardRef((props, ref) => {
  const {
    texts = DEFAULT_ABOUT_DATA.rotatingTexts,
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
    const currentText = texts[currentTextIndex] || texts[0] || '';
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

function About() {
  const containerRef = useRef(null);
  const section2Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  const { getVal } = useData();
  const pageData = getVal('about_page_data', DEFAULT_ABOUT_DATA);

  const { scrollYProgress: s2Progress } = useScroll({
    target: section2Ref,
    offset: ["start end", "end start"]
  });

  const imgParallaxY = useTransform(s2Progress, [0, 1], [-90, 90]);
  const imgFrameScale = useTransform(s2Progress, [0, 0.5, 1], [0.96, 1, 0.96]);

  const { scrollYProgress: s4Progress } = useScroll({
    target: section4Ref,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: s5Progress } = useScroll({
    target: section5Ref,
    offset: ["start end", "end start"]
  });

  const timelineLineHeight = useTransform(s5Progress, [0.1, 0.7], ["0%", "100%"]);
  const timelineBgY = useTransform(s5Progress, [0, 1], ["-8%", "8%"]);

  const bgMatrixX = useTransform(s4Progress, [0, 1], ["-10%", "10%"]);
  const bgMatrixRotate = useTransform(s4Progress, [0, 1], [0, 15]);
  const dataLineScaleX = useTransform(s4Progress, [0, 0.6], [0, 1]);

  const { scrollYProgress: s6Progress } = useScroll({
    target: section6Ref,
    offset: ["start end", "end start"]
  });

  const matrixY = useTransform(s6Progress, [0, 1], ["20px", "-20px"]);

  return (
    <div ref={containerRef} className="about-master-parallax-wrapper">
      
      {/* SECTION 1: MANIFESTO */}
      <div className="about-sticky-section-wrapper">
        <section className="about-frozen-viewport-canvas">
          <div className="about-hero-static-grid-bg"></div>
          
          <div className="about-manifesto-center-box">
            <span className="maroon-about-tag">{pageData.tag}</span>
            
            <h1 className="manifesto-rotating-headline-box">
              <span>We are engineered to&nbsp;</span>
              <RotatingText 
                texts={pageData.rotatingTexts} 
                mainClassName="highlight-rotating-span"
              />
            </h1>

            <p className="manifesto-static-desc">
              {pageData.manifestoDesc}
            </p>
          </div>
        </section>
      </div>

      {/* SECTION 2: VELOCITY OPERATIONS */}
      <section ref={section2Ref} className="about-overlap-curtain-panel">
        <div className="editorial-split-grid-viewport">
          <div className="editorial-text-column">
            <span className="gold-about-subtag">{pageData.s2Subtag}</span>
            <h2>{pageData.s2Heading}</h2>
            <p className="editorial-lead-para">{pageData.s2Lead}</p>
            
            <div className="editorial-embedded-counters">
              <div className="mini-counter-node">
                <h3>{pageData.s2Counter1Val}</h3>
                <p>{pageData.s2Counter1Text}</p>
              </div>
              <div className="mini-counter-node">
                <h3>{pageData.s2Counter2Val}</h3>
                <p>{pageData.s2Counter2Text}</p>
              </div>
            </div>
          </div>

          <div className="editorial-image-column">
            <motion.div className="luxury-parallax-frame-mask" style={{ scale: imgFrameScale }}>
              <motion.div 
                className="parallax-still-image-asset"
                style={{ 
                  y: imgParallaxY,
                  backgroundImage: `url("${pageData.s2Image}")`
                }}
              />
              <div className="frame-data-hud-overlay">
                <span>NODE INTERCEPT ACTIVE // SECURITY VERIFIED</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SYNDICATE PILLARS */}
      <section className="about-team-matrix-section">
        <div className="about-internal-block-container">
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
            {(pageData.pillars || DEFAULT_ABOUT_DATA.pillars).map((pillar, idx) => (
              <motion.div 
                key={idx}
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
                <div className="node-icon-wrapper">{pillar.code}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="client-priority-anchor-banner"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="priority-tagline-hero">{pageData.priorityBannerHero}</h3>
            <p className="priority-sub-statement">{pageData.priorityBannerSub}</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: TELEMETRY DATA MATRIX */}
      <section ref={section4Ref} className="about-graphs-telemetry-section">
        <motion.div 
          className="telemetry-scroll-vector-mesh"
          style={{ x: bgMatrixX, rotate: bgMatrixRotate, willChange: "transform" }}
        />
        <div className="telemetry-vignette-overlay"></div>

        <div className="about-internal-block-container" style={{ position: "relative", zIndex: 3 }}>
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

          <div className="telemetry-data-display-matrix">
            <div className="telemetry-chart-simulation-box">
              <div className="chart-hud-header">
                <span className="hud-pulse-dot"></span>
                <span>LIVE TRACKING MATRIX // OPTIMIZATION_LOOP_ACTIVE</span>
              </div>
              
              <div className="mock-vector-axis-container">
                <div className="vector-axis-y"></div>
                <div className="vector-axis-x"></div>
                
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
                <div className="telemetry-node-metric">{pageData.metric1Val}</div>
                <h4>{pageData.metric1Title}</h4>
                <p>{pageData.metric1Desc}</p>
              </motion.div>

              <motion.div 
                className="telemetry-micro-card"
                variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                whileHover={{ x: 5, backgroundColor: "rgba(245, 235, 224, 0.03)" }}
              >
                <div className="telemetry-node-metric">{pageData.metric2Val}</div>
                <h4>{pageData.metric2Title}</h4>
                <p>{pageData.metric2Desc}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* S4 -> S5 SLOPE */}
      <div className="section-asymmetric-transition-slope s4-to-s5-slope">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48V0h1200v120z" className="shape-fill-maroon"></path>
        </svg>
      </div>

      {/* SECTION 5: HISTORIC TIMELINE */}
      <section ref={section5Ref} className="about-timeline-roadmap-section">
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

          <div className="chronicle-timeline-spine-wrapper">
            <div className="timeline-static-backbone">
              <motion.div 
                className="timeline-active-laser-fill"
                style={{ height: timelineLineHeight }}
              />
            </div>

            {(pageData.timeline || DEFAULT_ABOUT_DATA.timeline).map((evt, idx) => (
              <div key={idx} className={`chronicle-timeline-node-row ${idx % 2 === 0 ? 'left-node-row' : 'right-node-row'}`}>
                <div className="timeline-node-pointer-dot"></div>
                <motion.div 
                  className={`chronicle-event-card ${idx % 2 !== 0 ? 'dark-variant' : ''}`}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className={`chronicle-date-tag ${idx % 2 !== 0 ? 'gold-text' : ''}`}>{evt.dateTag}</span>
                  <h3>{evt.title}</h3>
                  <p>{evt.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: ANTI-AGENCY DIFFERENTIATION */}
      <section ref={section6Ref} className="about-anti-agency-section">
        <div className="about-internal-block-container" style={{ position: "relative", zIndex: 3 }}>
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

          <motion.div 
            className="asymmetric-comparison-engine-grid"
            style={{ y: matrixY, willChange: "transform" }}
          >
            <motion.div 
              className="divergence-column-card legacy-frameworks-box"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="column-system-indicator">// LEGACY FRAMEWORKS</div>
              <h3>The Traditional Agency Retainer</h3>
              <ul className="divergence-matrix-points-list">
                <li><strong>Vanity Metric Tuning:</strong> Optimizing for surface-level impressions, likes, and soft-clicks while capital efficiency and real pipelines evaporate.</li>
                <li><strong>Human Delay Triggers:</strong> Asset execution relies entirely on siloed manual processing, introducing immense latency and communication barriers.</li>
                <li><strong>Leased Traction Models:</strong> The moment you stop paying their monthly retainer fee, your visibility footprint instantly zeroes out.</li>
              </ul>
            </motion.div>

            <motion.div 
              className="divergence-column-card rankvertise-protocol-box"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="protocol-card-glow-flare"></div>
              <div className="column-system-indicator active-gold">// RANKVERTISE OPERATIONAL LAYER</div>
              <h3>The Algorithmic Ingestion Core</h3>
              <ul className="divergence-matrix-points-list protocol-active-list">
                <li><strong>Intent Capture Frameworks:</strong> We isolate and capture high-converting search coordinates directly before your competitors can bid on them.</li>
                <li><strong>Automated Ingestion Loops:</strong> Deploying direct machine micro-scripts that continuously inject, map, and track web vitals around the clock.</li>
                <li><strong>Permanent Asset Assets:</strong> We construct self-sustaining micro-frontend architectures that compound authority, making your traffic permanent.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

export default About;