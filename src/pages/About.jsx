/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect, useState, useMemo, forwardRef, useImperativeHandle, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useData } from '../context/DataContext';
import './About.css';

const DEFAULT_ABOUT_DATA = {
  tag: "About Rankvertise",
  rotatingTexts: ["Scale Visibility.", "Drive Conversions.", "Dominate Search.", "Build Authority."],
  manifestoDesc: "Traditional agency models focus on vanity metrics like impressions and clicks while actual acquisition costs spiral. Rankvertise engineers bespoke, conversion-driven digital marketing frameworks, programmatic SEO architectures, and modern web platforms that capture real commercial intent.",
  s2Subtag: "Our Methodology // 02",
  s2Heading: "Data-Driven Growth Execution",
  s2Lead: "We replace manual guesswork with rigorous technical audits, intent mapping, and continuous conversion rate optimization.",
  s2Counter1Val: "+310%",
  s2Counter1Text: "Average organic traffic growth achieved across client search campaigns within 6 months.",
  s2Counter2Val: "-42%",
  s2Counter2Text: "Average reduction in bounce rate following technical SEO and page speed optimizations.",
  s2Image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
  pillars: [
    { code: "// TECHNICAL SEO", title: "Technical SEO Strategists", desc: "Specializing in website rendering pipelines, Core Web Vitals optimization, schema architectures, and crawl budget governance to dominate search rankings." },
    { code: "// PERFORMANCE MEDIA", title: "Performance Media Buyers", desc: "Engineering high-ROI paid acquisition funnels across Meta, Google Ads, and LinkedIn with laser-focused audience targeting and creative testing." },
    { code: "// GROWTH LEADS", title: "Dedicated Growth Leads", desc: "Your direct point of contact. Ensuring transparent reporting, weekly sprint alignment, and dedicated accountability for all campaign deliverables." }
  ],
  priorityBannerHero: "\"We don't hand your project off to junior freelancers. You work directly with proven digital growth specialists.\"",
  priorityBannerSub: "From day-one audits to continuous optimization, your marketing infrastructure is actively managed by a dedicated team focused solely on driving measurable business revenue.",
  metric1Val: "+310%",
  metric1Title: "Organic Search Growth",
  metric1Desc: "Compound organic visibility increases across client domains through semantic entity targeting.",
  metric2Val: "Top 3",
  metric2Title: "Search Ranking Target",
  metric2Desc: "Capturing high-converting, commercial intent keywords on Google's top positions.",
  timeline: [
    { 
      dateTag: "2023", 
      title: "Our Beginning", 
      desc: "Rankvertise started with a simple observation: most agencies sold outdated keyword checklists that failed to convert. We developed custom Python data scrapers and semantic entity models to rank client pages faster through technical search relevance." 
    },
    { 
      dateTag: "2024", 
      title: "Expanding Our Digital Capabilities", 
      desc: "Transitioned from technical search consultancy to a full-service digital growth partner. We expanded our capabilities to include performance social advertising, custom headless web development, and automated CRM retention systems." 
    },
    { 
      dateTag: "2026", 
      title: "Our Current Focus", 
      desc: "Today, Rankvertise partners with scaling D2C brands, B2B enterprises, and modern technology companies globally, delivering measurable organic growth, sub-second web experiences, and predictable customer acquisition funnels." 
    }
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
    rotationInterval = 2400,
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
                {wordObj.needsSpace && <span className="about-text-rotate-space"> </span>}
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
              <span>We help modern brands </span>
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
                <span>DATA-BACKED CAMPAIGN BENCHMARK // VERIFIED</span>
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
            <span className="gold-about-subtag">Cross-Functional Team // 03</span>
            <h2>Our Dedicated Growth Team</h2>
            <p className="about-section-desc-brief">
              We don't outsource your campaigns to inexperienced interns or unvetted contractors. Rankvertise deploys a dedicated, cross-functional squad tailored to your industry, ensuring full technical alignment across SEO, creative assets, and development.
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
            <span className="maroon-about-tag-light">Performance Tracking // 04</span>
            <h2>Our SEO & Digital Marketing Performance</h2>
            <p className="about-section-desc-brief">
              We use data-driven SEO strategies, performance tracking, and conversion analytics to help businesses improve online visibility and achieve measurable commercial growth.
            </p>
          </motion.div>

          <div className="telemetry-data-display-matrix">
            <div className="telemetry-chart-simulation-box">
              <div className="chart-hud-header">
                <span className="hud-pulse-dot"></span>
                <span>AGGREGATE CLIENT PERFORMANCE METRICS</span>
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
            <span className="gold-about-subtag">Our Journey // 05</span>
            <h2>Our Story & Milestone Timeline</h2>
            <p className="about-section-desc-brief">
              How we evolved from custom search data automation experiments into a comprehensive growth marketing and technology partner.
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
            <h2>Why Businesses Partner With Us</h2>
            <p className="about-section-desc-brief">
              Most conventional marketing agencies lock brands into long retainers while delivering vanity metrics. We construct permanent organic search assets, high-converting creative engines, and custom web infrastructure.
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
              <div className="column-system-indicator">// TRADITIONAL AGENCIES</div>
              <h3>The Conventional Agency Model</h3>
              <ul className="divergence-matrix-points-list">
                <li><strong>Vanity Metric Focus:</strong> Prioritizing surface-level impressions and clicks over actual customer acquisition and qualified pipeline value.</li>
                <li><strong>Manual Execution Delays:</strong> Slow revision cycles, fragmented communication, and work quietly handed off to junior freelancers.</li>
                <li><strong>Temporary Visibility:</strong> The moment you reduce or stop your monthly retainer fee, your digital traction and leads evaporate.</li>
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
              <div className="column-system-indicator active-gold">// THE RANKVERTISE ADVANTAGE</div>
              <h3>Data-Backed Growth Partnership</h3>
              <ul className="divergence-matrix-points-list protocol-active-list">
                <li><strong>Commercial Intent First:</strong> Targeting high-converting commercial keywords and qualified buyer segments that directly generate revenue.</li>
                <li><strong>Agile Tech Integration:</strong> Fast turnaround on technical audits, schema implementation, landing page deployments, and speed optimization.</li>
                <li><strong>Compounding Domain Assets:</strong> Building sustainable organic search rankings and custom web platforms that continue to produce leads over time.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

export default About;