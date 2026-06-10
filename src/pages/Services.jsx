import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Services.css';

function Services() {
  const containerRef = useRef(null);

  // References for Local Teleportation (Section 2 to Section 3)
  const seoRef = useRef(null);
  const smmRef = useRef(null);
  const contentRef = useRef(null);
  const webTechRef = useRef(null);
  const automationRef = useRef(null);
  const brandingRef = useRef(null);
  const analyticsRef = useRef(null);

  const sectionRefs = {
    seo: seoRef, 
    smm: smmRef, 
    content: contentRef,
    webTech: webTechRef, 
    automation: automationRef,
    branding: brandingRef, 
    analytics: analyticsRef
  };

  const scrollToSection = (targetRef) => {
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll Progress Hook for Clean Structural Parallax Overlaps
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Balanced Interpolation Maps to smoothly fade out text as section 2 slides up
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.12], [0, -50]);

  // ── HELPER MATHEMATICAL KEYFRAME GENERATOR FOR TEXT BLUR REVEAL ──
  const buildKeyframes = (from, steps) => {
    const keys = new Set([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);
    const keyframes = {};
    keys.forEach(k => {
      keyframes[k] = [from[k], ...steps.map(s => s[k])];
    });
    return keyframes;
  };

  return (
    <div ref={containerRef} className="services-master-parallax-wrapper">
      
      {/* =========================================================
          SECTION 1: HERO ENTRANCE FREEZE CANVAS
          ========================================================= */}
      <div className="services-parallax-trigger-box">
        <section className="parallax-viewport-block hero-frozen-canvas">
          <div className="hero-static-grid-bg"></div>
          
          {/* Framed motion controller handling dynamic scroll fade outs */}
          <motion.div 
            className="reveal-content-box-custom"
            style={{ opacity: heroTextOpacity, y: heroTextY }}
          >
            <span className="services-mini-tagline">Rankvertise Matrix</span>
            
            {/* ── CINEMATIC REVEAL HEADLINE (Word-By-Word Blur Trigger) ── */}
            <h1 className="services-cinematic-headline">
              {"How We Disrupt Markets.".split(' ').map((segment, index) => {
                const fromSnapshot = { filter: 'blur(12px)', opacity: 0, y: 40 };
                const toSnapshots = [{ filter: 'blur(6px)', opacity: 0.5, y: -4 }, { filter: 'blur(0px)', opacity: 1, y: 0 }];
                const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
                
                return (
                  <motion.span
                    key={`head-word-${index}`}
                    className="inline-word-span"
                    initial={fromSnapshot}
                    animate={animateKeyframes}
                    transition={{ duration: 0.7, times: [0, 0.5, 1], delay: index * 0.12, ease: [0.25, 1, 0.5, 1] }}
                  >
                    {segment}
                  </motion.span>
                );
              })}
            </h1>

            {/* ── CINEMATIC DESC (Delayed Layer Blur Trigger) ── */}
            <p className="services-cinematic-desc">
              {"We don't deploy standard, lazy marketing strategies. Rankvertise engineers bespoke, conversion-driven digital architectures that accelerate growth velocity and capture permanent attention.".split(' ').map((segment, index) => {
                const fromSnapshot = { filter: 'blur(8px)', opacity: 0, y: 20 };
                const toSnapshots = [{ filter: 'blur(4px)', opacity: 0.4, y: -2 }, { filter: 'blur(0px)', opacity: 0.85, y: 0 }];
                const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

                return (
                  <motion.span
                    key={`desc-word-${index}`}
                    className="inline-word-span"
                    initial={fromSnapshot}
                    animate={animateKeyframes}
                    transition={{ duration: 0.6, times: [0, 0.5, 1], delay: 0.35 + (index * 0.03), ease: [0.25, 1, 0.5, 1] }}
                  >
                    {segment}
                  </motion.span>
                );
              })}
            </p>

          </motion.div>
        </section>
      </div>

      {/* =========================================================
          SECTION 2: THE RADIAL POP RIPPLE GRID PANEL
          ========================================================= */}
      <section className="overlay-curtain-panel">
        <div className="arrow-grid-master-viewport">
          
          <div className="grid-instructions-header-custom">
            <span className="gold-accent-tag">Service Architecture</span>
            <h2>Core Capabilities Matrix</h2>
            <p>Click any technical deployment vector to teleport directly into its operational deep-flow breakdown.</p>
          </div>

          {/* Trigger box ensuring animations fire exactly when panel snaps to screen focus state */}
          <motion.div 
            className="spatial-cross-grid-layout"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* CARD 1: TOP DIRECTION FLY IN */}
            <motion.div 
              className="arrow-matrix-card position-top"
              onClick={() => scrollToSection(sectionRefs.seo)}
              variants={{
                hidden: { y: -100, opacity: 0, scale: 0.6 },
                visible: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 15, delay: 0.05 } }
              }}
              whileHover={{ scale: 1.03, borderColor: "#d4a373" }}
            >
              <span className="card-direction-tag">▲ North Node</span>
              <h3>Search Engine & Traffic Services</h3>
              <div className="arrow-action-trigger">Teleport Matrix ↗</div>
            </motion.div>

            {/* CARD 2: LEFT DIRECTION FLY IN */}
            <motion.div 
              className="arrow-matrix-card position-left"
              onClick={() => scrollToSection(sectionRefs.smm)}
              variants={{
                hidden: { x: -100, opacity: 0, scale: 0.6 },
                visible: { x: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 15, delay: 0.12 } }
              }}
              whileHover={{ scale: 1.03, borderColor: "#d4a373" }}
            >
              <span className="card-direction-tag">◀ West Node</span>
              <h3>Social Media Marketing</h3>
              <div className="arrow-action-trigger">Teleport Matrix ↗</div>
            </motion.div>

            {/* CARD 3: CENTER-FIRST DEPLOYMENT NODE */}
            <motion.div 
              className="arrow-matrix-card position-center-left"
              onClick={() => scrollToSection(sectionRefs.content)}
              variants={{
                hidden: { scale: 0.5, opacity: 0 },
                visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 140, damping: 14, delay: 0.18 } }
              }}
              whileHover={{ scale: 1.03, borderColor: "#801a24" }}
            >
              <span className="card-direction-tag">✦ Center Alpha</span>
              <h3>Content & Creative Studio</h3>
              <div className="arrow-action-trigger">Teleport Matrix ↗</div>
            </motion.div>

            {/* CARD 4: CENTER-SECOND DEPLOYMENT NODE */}
            <motion.div 
              className="arrow-matrix-card position-center-right"
              onClick={() => scrollToSection(sectionRefs.webTech)}
              variants={{
                hidden: { scale: 0.5, opacity: 0 },
                visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 140, damping: 14, delay: 0.24 } }
              }}
              whileHover={{ scale: 1.03, borderColor: "#801a24" }}
            >
              <span className="card-direction-tag">✦ Center Beta</span>
              <h3>Web & Tech Architecture</h3>
              <div className="arrow-action-trigger">Teleport Matrix ↗</div>
            </motion.div>

            {/* CARD 5: RIGHT DIRECTION FLY IN */}
            <motion.div 
              className="arrow-matrix-card position-right"
              onClick={() => scrollToSection(sectionRefs.automation)}
              variants={{
                hidden: { x: 100, opacity: 0, scale: 0.6 },
                visible: { x: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 15, delay: 0.3 } }
              }}
              whileHover={{ scale: 1.03, borderColor: "#d4a373" }}
            >
              <span className="card-direction-tag">▶ East Node</span>
              <h3>Direct Marketing & Automation</h3>
              <div className="arrow-action-trigger">Teleport Matrix ↗</div>
            </motion.div>

            {/* CARD 6: BOTTOM DIRECTION FLY IN */}
            <motion.div 
              className="arrow-matrix-card position-bottom"
              onClick={() => scrollToSection(sectionRefs.branding)}
              variants={{
                hidden: { y: 100, opacity: 0, scale: 0.6 },
                visible: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 15, delay: 0.36 } }
              }}
              whileHover={{ scale: 1.03, borderColor: "#d4a373" }}
            >
              <span className="card-direction-tag">▼ South Node</span>
              <h3>Branding & Strategy Models</h3>
              <div className="arrow-action-trigger">Teleport Matrix ↗</div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: DEEP IMMERSIVE ROW CONTENT FLOW
          ========================================================= */}
      <section className="services-deep-flow">
        {[
          {
            id: "seo",
            refKey: seoRef,
            title: "Search Engine & Traffic Services",
            brief: "Command permanent digital territory. We build semantic structures that place your brand at the absolute hot-spot of human intent.",
            subServices: [
              { name: "Search Engine Optimization (SEO)", desc: "Advanced entity-based architecture to override raw organic search loops." },
              { name: "Local SEO (Google Maps Mastery)", desc: "Hyper-localized citation frameworks capturing regional conversion footprints." },
              { name: "Technical SEO Audits", desc: "Deconstructing core web vitals, rendering pipelines, and automated crawling graphs." },
              { name: "Pay-Per-Click (PPC) Frameworks", desc: "High-yield instant monetization frameworks capturing real-time traffic." }
            ],
            example: "Real-Time Dominance: Imagine an elite fintech platform scaling from zero to 4.2 Million monthly hits without spending a single dollar on ad networks—pure algorithmic authority captures the highest intent users before competitors awake.",
            ctaLink: "https://www.rankvertise.in/consultation"
          },
          {
            id: "smm",
            refKey: smmRef,
            title: "Social Media Marketing Funnel",
            brief: "Intercept cultural trends and monetize attention spans. We translate raw engagement numbers into scalable customer acquisition flywheels.",
            subServices: [
              { name: "Social Media Management (SMM)", desc: "Bespoke asset pacing, content curation, and premium aesthetic governance." },
              { name: "Performance Social Advertising", desc: "Laser-targeted paid funnel systems across Meta, LinkedIn, and TikTok ad algorithms." },
              { name: "Influencer Pragmatic Alliances", desc: "Programmatic node tracking to align your product with high-authority cultural creators." },
              { name: "Social Listening Frameworks", desc: "Real-time parsing of market sentiment waves to optimize copy assets instantly." }
            ],
            example: "Real-Time Dominance: A modern D2C brand triggers a structured viral loop across Gen Z demographics—garnering 45,000 orders within 48 hours by executing predictive hook matrices instead of standard corporate posts.",
            ctaLink: "https://www.rankvertise.in/consultation"
          },
          {
            id: "content",
            refKey: contentRef,
            title: "Content & Creative Studio",
            brief: "Bespoke storytelling mixed with behavioral metrics. We construct asset structures that possess compounding interest velocities.",
            subServices: [
              { name: "High-Level Copywriting Assets", desc: "Psychology-backed sales letters, whitepapers, and high-authority blog structures." },
              { name: "Cinematic Video Marketing", desc: "High-retention Reels, Shorts, and explainer models mapped to user attention drops." },
              { name: "Bespoke Design Infrastructure", desc: "Architecting elite brand style guides, vectors, and complex spatial UI visuals." }
            ],
            example: "Real-Time Dominance: An enterprise software firm prints data-backed case studies that single-handedly close a $1.2M B2B contract by removing friction loops through pure analytical storytelling.",
            ctaLink: "https://www.rankvertise.in/consultation"
          },
          {
            id: "webTech",
            refKey: webTechRef,
            title: "Web & Tech Architecture",
            brief: "Engineered for pure speed, clean headless components, and fluid conversion mechanics. We construct fast digital canvases.",
            subServices: [
              { name: "Headless Web Development", desc: "Highly robust React, Next.js, WordPress, or Shopify custom infrastructure setups." },
              { name: "E-Commerce Pipeline Scaling", desc: "Zero-latency transaction channels configured for instantaneous checkout loops." },
              { name: "UI/UX Cognitive Strategy", desc: "Bespoke digital interface layouts designed around modern human scrolling behaviors." }
            ],
            example: "Real-Time Dominance: An international marketplace cuts bounce rates by 42% just by shaving 1.8 seconds off their interface delivery speeds, instantly boosting daily transaction values.",
            ctaLink: "https://www.rankvertise.in/consultation"
          },
          {
            id: "automation",
            refKey: automationRef,
            title: "Direct Marketing & Automation",
            brief: "Programmatic nurturing funnels that run round-the-clock. Remove human delay matrices from your sales processing cycles.",
            subServices: [
              { name: "Lifecycle Automation Scripts", desc: "Advanced database trigger flows handling personalized newsletter journeys." },
              { name: "Omnichannel WhatsApp & SMS Engine", desc: "Instantaneous click-to-open interaction channels with immediate processing hooks." },
              { name: "Enterprise CRM Interlock", desc: "Securely bridging external data pipelines with internal conversion systems." }
            ],
            example: "Real-Time Dominance: A modern subscription brand automates its cart-abandonment loops, capturing 28% of dropped leads while its operational team is completely offline.",
            ctaLink: "https://www.rankvertise.in/consultation"
          },
          {
            id: "branding",
            refKey: brandingRef,
            title: "Branding & Strategy Models",
            brief: "Isolate your business from raw price wars. We program unshakeable brand perception algorithms that command pricing premiums.",
            subServices: [
              { name: "Competitive Gaps Mapping", desc: "Data-driven parsing of competitive sectors to isolate market blindspots." },
              { name: "Corporate PR & Digital Authority", desc: "Securing primary press vectors to maximize domain power matrices." },
              { name: "Online Reputation Management (ORM)", desc: "Continuous monitoring and proactive governance of public brand perceptions." }
            ],
            example: "Real-Time Dominance: A manufacturing group re-positions its brand identity away from utility vendor status into global strategic leadership, doubling its pricing quotes without losing clients.",
            ctaLink: "https://www.rankvertise.in/consultation"
          }
        ].map((block, idx) => (
          <div 
            key={`immersive-node-${block.id}`} 
            ref={block.refKey} 
            className="deep-flow-row-viewport"
          >
            <motion.div 
              className="immersive-scale-card"
              initial={{ scale: 0.88, opacity: 0, y: 50 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="card-deep-intro-header">
                <div className="card-identity-tag">System Node // 0{idx + 1}</div>
                <h2 className="card-immersive-title">{block.title}</h2>
                <p className="card-immersive-brief">{block.brief}</p>
              </div>

              <hr className="card-layout-divider" />

              <div className="card-technical-pointers-grid">
                <h3>Technical Deployment Framework</h3>
                <div className="pointers-inner-sub-grid">
                  {block.subServices.map((sub, sIdx) => (
                    <div key={`sub-point-${idx}-${sIdx}`} className="sub-framework-item">
                      <h4>✦ {sub.name}</h4>
                      <p>{sub.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-superiority-showcase">
                <div className="superiority-badge">Market Superiority Vector</div>
                <p>{block.example}</p>
              </div>

              <div className="card-action-cta-wrapper">
                <a 
                  href={block.ctaLink}
                  target="_blank" 
                  rel="noreferrer" 
                  className="premium-service-cta-btn"
                >
                  To know more about the services click here <span>↗</span>
                </a>
              </div>

            </motion.div>
          </div>
        ))}
      </section>

      {/* =========================================================
          SECTION 4: TRUST MATRIX (TESTIMONIALS & LOGO MARQUEE)
          ========================================================= */}
      <section className="services-testimonials-section">
        <div className="testimonials-container">
          <span className="gold-accent-tag">Client Feedback</span>
          <h2 className="section-head-light">What Leaders Say About Us</h2>
          
          <div className="testimonials-grid-system">
            <div className="testimonial-premium-card">
              <p className="testimonial-quote">"Rankvertise completely re-engineered our customer acquisition loop. Our organic traffic grew by 310% within months, bypassing high ad network dependency entirely."</p>
              <div className="testimonial-user-meta">
                <strong>Arjun Mehta</strong>
                <span>Founder, FinTech Matrix</span>
              </div>
            </div>
            <div className="testimonial-premium-card">
              <p className="testimonial-quote">"Their tech stack deployment velocity is incredible. The headless interface they custom built reduced our checkout friction to absolute zero. Exceptional conversion design."</p>
              <div className="testimonial-user-meta">
                <strong>Sarah Jenkins</strong>
                <span>Operations Director, Core D2C</span>
              </div>
            </div>
          </div>

          <div className="services-internal-marquee-wrapper">
            <p className="marquee-intro-label">TRUSTED BY SECTOR AGNOSTIC INDUSTRY GIANTS</p>
            <div className="services-internal-marquee">
              <div className="marquee-track-nodes">
                <span>META MATRIX</span><span>//</span><span>NEXT CORE</span><span>//</span><span>ALPHA VENTURES</span><span>//</span><span>FINTECH LABS</span><span>//</span><span>QUANTUM DIGIT</span><span>//</span><span>META MATRIX</span><span>//</span><span>NEXT CORE</span><span>//</span><span>ALPHA VENTURES</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: LEAD CAPTURING ARCHITECTURE (NEWSLETTER CTA)
          ========================================================= */}
      <section className="services-newsletter-cta-section">
        <div className="newsletter-central-box">
          <span className="maroon-accent-tag">Algorithmic Growth Insights</span>
          <h2>Subscribe to the Rankvertise Intelligence Loop</h2>
          <p>Get exclusive breakdowns of conversion-driven technology frameworks and market disruption tactics directly in your inbox. Zero spam. Pure scaling blueprints.</p>
          
          <form className="premium-newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your corporate email address..." required />
            <button type="submit" className="newsletter-submit-btn">Intercept Matrix ↗</button>
          </form>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: CONTENT LOGS AUTHORITY (RANDOM BLOGS SELECTION)
          ========================================================= */}
      <section className="services-blogs-showcase-section">
        <div className="blogs-showcase-container">
          <div className="blog-section-header">
            <div>
              <span className="gold-accent-tag">Knowledge Infrastructure</span>
              <h2 className="section-head-light">Latest Disruption Intelligence</h2>
            </div>
            <a href="/blogs" className="view-all-blogs-btn">Explore Full Archives ↗</a>
          </div>

          <div className="blogs-cards-matrix-grid">
            <div className="blog-matrix-node-card">
              <div className="blog-node-image-placeholder img-seo-bg"></div>
              <div className="blog-node-body-content">
                <span className="blog-node-category">Search Engineering</span>
                <h3>The Silent Death of Traditional Keywords: Entity Optimization Frameworks</h3>
                <p>Deconstructing how modern search engine models parse behavioral context nodes rather than exact phrase matches to map user search patterns.</p>
                <a href="/blogs" className="blog-read-more-link">Deconstruct Script ↗</a>
              </div>
            </div>

            <div className="blog-matrix-node-card">
              <div className="blog-node-image-placeholder img-tech-bg"></div>
              <div className="blog-node-body-content">
                <span className="blog-node-category">Tech Architecture</span>
                <h3>How Headless Rendering Codebases Instantly Capture Dropped Funnel Leads</h3>
                <p>Analyzing latency analytics metrics and the mathematical reality behind how a 200ms processing delay can break active checkout sequences.</p>
                <a href="/blogs" className="blog-read-more-link">Deconstruct Script ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Services;