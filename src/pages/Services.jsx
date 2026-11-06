import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useData } from '../context/DataContext';
import './Services.css';

const DEFAULT_SERVICES_DATA = {
  heroTag: "Digital Growth Architecture",
  heroHeadline: "Our Digital Marketing & Growth Services",
  heroDesc: "We build bespoke, conversion-focused digital marketing frameworks, programmatic SEO architectures, and high-performance digital campaigns that accelerate revenue growth and maximize online visibility.",
  servicesList: [
    {
      id: "seo",
      title: "Search Engine Optimization (SEO) & Traffic Growth",
      brief: "Own permanent digital visibility. We deploy modern entity-based SEO, technical foundations, and high-intent keyword strategies to place your business in front of customers actively searching to buy.",
      subServices: [
        { name: "Search Engine Optimization (SEO)", desc: "Entity-first optimization, semantic keyword modeling, and programmatic page architectures that drive sustained organic growth." },
        { name: "Local SEO & Google Maps Optimization", desc: "Geo-targeted citations, Google Business Profile ranking strategies, and regional keyword footprints to dominate local searches." },
        { name: "Technical SEO & Speed Audits", desc: "Resolving Core Web Vitals, server crawlability bottlenecks, schema markup, and JavaScript rendering performance." },
        { name: "High-ROI Pay-Per-Click (PPC) Advertising", desc: "Precision Google Ads and search marketing funnels engineered to capture immediate, high-intent commercial traffic." }
      ],
      example: "Measurable Outcome: Scaled a specialized fintech platform from zero to 4.2 million organic visits within 12 months without recurring ad spend, outranking legacy enterprise competitors for core commercial queries."
    },
    {
      id: "smm",
      title: "Social Media Marketing & Paid Performance",
      brief: "Transform audience attention into measurable customer acquisition. We turn engagement metrics into predictable, scalable revenue engines.",
      subServices: [
        { name: "Social Media Management (SMM)", desc: "Brand narrative curation, strategic release scheduling, and community retention across multi-platform feeds." },
        { name: "Performance Social Advertising", desc: "Targeted acquisition funnels across Meta, LinkedIn, and TikTok algorithms designed for measurable return on ad spend." },
        { name: "Strategic Creator & Influencer Partnerships", desc: "Vetting and managing high-trust content creators to generate authentic endorsement pipelines for your brand." },
        { name: "Audience Sentiment & Social Listening", desc: "Analyzing real-time buyer conversations to optimize creative messaging and ad copy continuously." }
      ],
      example: "Measurable Outcome: Deployed focused short-form creative angles and retargeting ads for an emerging lifestyle brand, generating over 45,000 paid checkouts within the initial campaign launch window."
    },
    {
      id: "content",
      title: "Content Marketing & Creative Studio",
      brief: "Strategic, authority-building storytelling backed by buyer psychology. We produce compounding content assets that educate, build trust, and close sales.",
      subServices: [
        { name: "Conversion Copywriting & Authority Assets", desc: "Persuasive sales copy, comprehensive technical guides, industry whitepapers, and strategic blog architectures." },
        { name: "Short-Form Video Production & Reels", desc: "Retention-engineered vertical video assets designed to hold viewer attention across social media feeds." },
        { name: "Brand Identity & Graphic Infrastructure", desc: "Crafting distinct visual systems, guidelines, conversion-oriented UI assets, and corporate marketing collateral." }
      ],
      example: "Measurable Outcome: Structured an in-depth, data-backed technical case study sequence that helped a B2B enterprise client validate their solution and close an enterprise deal worth $1.2M."
    },
    {
      id: "webTech",
      title: "Modern Web & Tech Architecture",
      brief: "Built for speed, seamless mobile conversion, and zero-latency checkouts. We develop fast web platforms and modern headless digital storefronts.",
      subServices: [
        { name: "Custom Web & Headless Development", desc: "Fast, accessible web applications built on React, Next.js, WordPress, or Shopify with clean, scalable codebases." },
        { name: "E-Commerce Funnel Optimization", desc: "Streamlined multi-step checkout processes, cart recovery engines, and sub-second catalog navigation." },
        { name: "Conversion-Focused UI/UX Design", desc: "Intuitive user interfaces and interactive customer journeys tailored around modern desktop and mobile scrolling behavior." }
      ],
      example: "Measurable Outcome: Re-architected an international e-commerce website to load 1.8 seconds faster, dropping checkout bounce rates by 42% and lifting average order completion rates immediately."
    },
    {
      id: "automation",
      title: "Direct Marketing & Workflow Automation",
      brief: "Automated customer journeys that nurture prospects 24/7. Eliminate manual response delays and streamline client acquisition cycles.",
      subServices: [
        { name: "Automated Email Lifecycle Sequences", desc: "Custom subscriber onboarding, browse-abandonment automations, and personalized re-engagement campaigns." },
        { name: "Omnichannel WhatsApp & SMS Messaging", desc: "High-open-rate transactional updates and customer interaction flows tailored for immediate responses." },
        { name: "CRM Integration & Pipeline Tracking", desc: "Connecting your digital marketing funnels directly to HubSpot, Salesforce, or custom customer relationship databases." }
      ],
      example: "Measurable Outcome: Automated custom cart-abandonment and re-engagement workflows for a subscription brand, recovering 28% of dropped checkouts completely hands-free."
    },
    {
      id: "branding",
      title: "Brand Strategy & Market Positioning",
      brief: "Separate your business from commoditized price competition. We build distinct brand perception frameworks that justify premium pricing.",
      subServices: [
        { name: "Competitive Market Gap Analysis", desc: "Comprehensive benchmarking across search, social, and messaging channels to identify overlooked opportunities." },
        { name: "Corporate PR & Digital Authority Outreach", desc: "Securing authoritative industry publications and press coverage to strengthen domain authority and market trust." },
        { name: "Online Reputation Management (ORM)", desc: "Proactive review tracking, brand sentiment governance, and search result control for corporate reputations." }
      ],
      example: "Measurable Outcome: Repositioned a regional industrial manufacturer into a national market specialist, allowing them to double average contract values without sacrificing lead volume."
    }
  ]
};

function Services() {
  const containerRef = useRef(null);
  const { getVal } = useData();
  const servicesConfig = getVal('services_page_data', DEFAULT_SERVICES_DATA);

  const seoRef = useRef(null);
  const smmRef = useRef(null);
  const contentRef = useRef(null);
  const webTechRef = useRef(null);
  const automationRef = useRef(null);
  const brandingRef = useRef(null);

  const sectionRefs = {
    seo: seoRef,
    smm: smmRef,
    content: contentRef,
    webTech: webTechRef,
    automation: automationRef,
    branding: brandingRef
  };

  const scrollToSection = (targetRef) => {
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.12], [0, -50]);

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
      
      {/* SECTION 1: HERO ENTRANCE */}
      <div className="services-parallax-trigger-box">
        <section className="parallax-viewport-block hero-frozen-canvas">
          <div className="hero-static-grid-bg"></div>
          
          <motion.div 
            className="reveal-content-box-custom"
            style={{ opacity: heroTextOpacity, y: heroTextY }}
          >
            <span className="services-mini-tagline">{servicesConfig.heroTag}</span>
            
            <h1 className="services-cinematic-headline">
              {(servicesConfig.heroHeadline || "Our Digital Marketing & Growth Services").split(' ').map((segment, index) => {
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

            <p className="services-cinematic-desc">
              {(servicesConfig.heroDesc || "").split(' ').map((segment, index) => {
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

      {/* SECTION 2: RADIAL GRID PANEL */}
      <section className="overlay-curtain-panel">
        <div className="arrow-grid-master-viewport">
          <div className="grid-instructions-header-custom">
            <span className="gold-accent-tag">Service Architecture</span>
            <h2>Our Digital Marketing & Growth Services</h2>
            <p>Select any core service vertical below to explore its specific deliverables, methodologies, and outcomes.</p>
          </div>

          <motion.div 
            className="spatial-cross-grid-layout"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              className="arrow-matrix-card position-top"
              onClick={() => scrollToSection(sectionRefs.seo)}
              variants={{ hidden: { y: -100, opacity: 0, scale: 0.6 }, visible: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 15, delay: 0.05 } } }}
              whileHover={{ scale: 1.03, borderColor: "#d4a373" }}
            >
              <span className="card-direction-tag">Organic Growth</span>
              <h3>Search Engine & Traffic Services</h3>
              <div className="arrow-action-trigger">Explore Services →</div>
            </motion.div>

            <motion.div 
              className="arrow-matrix-card position-left"
              onClick={() => scrollToSection(sectionRefs.smm)}
              variants={{ hidden: { x: -100, opacity: 0, scale: 0.6 }, visible: { x: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 15, delay: 0.12 } } }}
              whileHover={{ scale: 1.03, borderColor: "#d4a373" }}
            >
              <span className="card-direction-tag">Performance Ads</span>
              <h3>Social Media Marketing</h3>
              <div className="arrow-action-trigger">Explore Services →</div>
            </motion.div>

            <motion.div 
              className="arrow-matrix-card position-center-left"
              onClick={() => scrollToSection(sectionRefs.content)}
              variants={{ hidden: { scale: 0.5, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 140, damping: 14, delay: 0.18 } } }}
              whileHover={{ scale: 1.03, borderColor: "#801a24" }}
            >
              <span className="card-direction-tag">Brand Engagement</span>
              <h3>Content & Creative Studio</h3>
              <div className="arrow-action-trigger">Explore Services →</div>
            </motion.div>

            <motion.div 
              className="arrow-matrix-card position-center-right"
              onClick={() => scrollToSection(sectionRefs.webTech)}
              variants={{ hidden: { scale: 0.5, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 140, damping: 14, delay: 0.24 } } }}
              whileHover={{ scale: 1.03, borderColor: "#801a24" }}
            >
              <span className="card-direction-tag">Fast Conversion</span>
              <h3>Web & Tech Architecture</h3>
              <div className="arrow-action-trigger">Explore Services →</div>
            </motion.div>

            <motion.div 
              className="arrow-matrix-card position-right"
              onClick={() => scrollToSection(sectionRefs.automation)}
              variants={{ hidden: { x: 100, opacity: 0, scale: 0.6 }, visible: { x: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 15, delay: 0.3 } } }}
              whileHover={{ scale: 1.03, borderColor: "#d4a373" }}
            >
              <span className="card-direction-tag">Lead Nurturing</span>
              <h3>Direct Marketing & Automation</h3>
              <div className="arrow-action-trigger">Explore Services →</div>
            </motion.div>

            <motion.div 
              className="arrow-matrix-card position-bottom"
              onClick={() => scrollToSection(sectionRefs.branding)}
              variants={{ hidden: { y: 100, opacity: 0, scale: 0.6 }, visible: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 15, delay: 0.36 } } }}
              whileHover={{ scale: 1.03, borderColor: "#d4a373" }}
            >
              <span className="card-direction-tag">Market Authority</span>
              <h3>Branding & Strategy Models</h3>
              <div className="arrow-action-trigger">Explore Services →</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: DEEP IMMERSIVE ROW CONTENT FLOW */}
      <section className="services-deep-flow">
        {(servicesConfig.servicesList || DEFAULT_SERVICES_DATA.servicesList).map((block, idx) => (
          <div 
            key={`immersive-node-${block.id}`} 
            ref={sectionRefs[block.id]} 
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
                <div className="card-identity-tag">Service Vertical 0{idx + 1}</div>
                <h2 className="card-immersive-title">{block.title}</h2>
                <p className="card-immersive-brief">{block.brief}</p>
              </div>

              <hr className="card-layout-divider" />

              <div className="card-technical-pointers-grid">
                <h3>Key Deliverables & Methodologies</h3>
                <div className="pointers-inner-sub-grid">
                  {block.subServices?.map((sub, sIdx) => (
                    <div key={`sub-point-${idx}-${sIdx}`} className="sub-framework-item">
                      <h4>✦ {sub.name}</h4>
                      <p>{sub.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-superiority-showcase">
                <div className="superiority-badge">Documented Case Result</div>
                <p>{block.example}</p>
              </div>

              <div className="card-action-cta-wrapper">
                <Link 
                  to="/contact"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                  className="premium-service-cta-btn"
                >
                  Consult With Our Specialists on This Service <span>→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        ))}
      </section>

      {/* SECTION 4: TESTIMONIALS */}
      <section className="services-testimonials-section">
        <div className="testimonials-container">
          <span className="gold-accent-tag">Client Feedback</span>
          <h2 className="section-head-light">What Leaders Say About Us</h2>
          
          <div className="testimonials-grid-system">
            <div className="testimonial-premium-card">
              <p className="testimonial-quote">"Rankvertise completely transformed our search acquisition pipeline. Our organic traffic grew by 310% within months, drastically reducing our reliance on expensive paid channels."</p>
              <div className="testimonial-user-meta">
                <strong>Arjun Mehta</strong>
                <span>Founder, FinTech Solutions</span>
              </div>
            </div>
            <div className="testimonial-premium-card">
              <p className="testimonial-quote">"Their technical execution and delivery velocity were outstanding. The custom modern web interface they built eliminated friction throughout our sales funnel and elevated our conversion rates."</p>
              <div className="testimonial-user-meta">
                <strong>Sarah Jenkins</strong>
                <span>Operations Director, Core D2C</span>
              </div>
            </div>
          </div>

          <div className="services-internal-marquee-wrapper">
            <p className="marquee-intro-label">TRUSTED BY FAST-GROWING ENTERPRISES & SCALE-UPS</p>
            <div className="services-internal-marquee">
              <div className="marquee-track-nodes">
                <span>META MATRIX</span><span>//</span><span>NEXT CORE</span><span>//</span><span>ALPHA VENTURES</span><span>//</span><span>FINTECH LABS</span><span>//</span><span>QUANTUM DIGIT</span><span>//</span><span>META MATRIX</span><span>//</span><span>NEXT CORE</span><span>//</span><span>ALPHA VENTURES</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: NEWSLETTER */}
      <section className="services-newsletter-cta-section">
        <div className="newsletter-central-box">
          <span className="maroon-accent-tag">Weekly Strategic Analysis</span>
          <h2>Subscribe to the Rankvertise Growth Briefing</h2>
          <p>Get actionable insights on modern search strategies, conversion optimization, and digital marketing execution delivered to your inbox. Zero fluff, just high-impact tactics.</p>
          
          <form className="premium-newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your business email address..." required />
            <button type="submit" className="newsletter-submit-btn">Subscribe for Insights →</button>
          </form>
        </div>
      </section>

      {/* SECTION 6: KNOWLEDGE & INSIGHTS (Redirects cleanly to blogs.rankvertise.com) */}
      <section className="services-blogs-showcase-section">
        <div className="blogs-showcase-container">
          <div className="blog-section-header">
            <div>
              <span className="gold-accent-tag">Actionable Knowledge</span>
              <h2 className="section-head-light">Latest SEO Insights & Marketing Strategies</h2>
            </div>
            <a 
              href="https://blogs.rankvertise.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="view-all-blogs-btn"
            >
              Explore Full Blog Archive ↗
            </a>
          </div>

          <div className="blogs-cards-matrix-grid">
            <div className="blog-matrix-node-card">
              <div className="blog-node-image-placeholder img-seo-bg"></div>
              <div className="blog-node-body-content">
                <span className="blog-node-category">Search Engine Optimization</span>
                <h3>The Evolution of Search: Why Entity-Based Optimization Outranks Traditional Keywords</h3>
                <p>An in-depth breakdown of how search algorithms evaluate context, brand relevance, and topical authority to surface answers over raw keyword density.</p>
                <a 
                  href="https://blogs.rankvertise.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="blog-read-more-link"
                >
                  Read Article ↗
                </a>
              </div>
            </div>

            <div className="blog-matrix-node-card">
              <div className="blog-node-image-placeholder img-tech-bg"></div>
              <div className="blog-node-body-content">
                <span className="blog-node-category">Technical Conversion</span>
                <h3>How Website Speed and Modern Architecture Directly Drive Higher E-Commerce Revenue</h3>
                <p>Analyzing Core Web Vitals, page rendering latency, and the measurable connection between sub-second loading speeds and checkout completion rates.</p>
                <a 
                  href="https://blogs.rankvertise.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="blog-read-more-link"
                >
                  Read Article ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Services;