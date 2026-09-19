import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import './LocationPage.css';

// Default starter locations (Jab tak sheet load na ho)
const DEFAULT_FALLBACK_LOCATIONS = [
  {
    slug: "mumbai",
    cityName: "Mumbai",
    heroTitle: "Top Digital Marketing Agency in Mumbai",
    heroSub: "Scaling ambitious brands in Mumbai with high-authority SEO, bespoke social campaigns, and lightning-fast headless digital experiences.",
    metaTitle: "Best Digital Marketing Agency in Mumbai | Rankvertise",
    metaDesc: "Rankvertise is the leading digital marketing agency in Mumbai. Engineered for high ROI, organic traffic velocity, and zero-latency conversion web architectures.",
    stat1Val: "+340%",
    stat1Desc: "Average Organic Authority Acceleration in Mumbai",
    stat2Val: "< 24h",
    stat2Desc: "Dedicated Local Account Pod Response Time",
    stat3Val: "₹18Cr+",
    stat3Desc: "Pipeline Value Generated for Mumbai Clients"
  },
  {
    slug: "new-delhi",
    cityName: "New Delhi",
    heroTitle: "Leading Digital Marketing Agency in New Delhi",
    heroSub: "From Connaught Place to Cyber City, we deploy precision marketing technology layers that dominate local intent and capture permanent market share.",
    metaTitle: "Top Digital Marketing Agency in New Delhi | Rankvertise",
    metaDesc: "Scale your brand with New Delhi's premier digital marketing & performance architecture firm. SEO, web experiences, and paid funnel mastery.",
    stat1Val: "+410%",
    stat1Desc: "Search Share Capture Across Delhi-NCR",
    stat2Val: "< 12h",
    stat2Desc: "Regional Engineering & Operations SLA",
    stat3Val: "₹24Cr+",
    stat3Desc: "Client Growth Capital Acquired"
  }
];

export default function LocationPage() {
  const { locationSlug } = useParams();
  const { getVal, loading } = useData();

  // Pick live array from Google Sheet CMS
  const locationsArray = getVal('seo_locations_data', DEFAULT_FALLBACK_LOCATIONS);

  // Clean slug
  const activeSlug = (locationSlug || '').toLowerCase().trim();

  // STRICT VALIDATION: Check if slug exists in the database
  const loc = locationsArray.find(item => item.slug === activeSlug);

  // SEO Title & Meta Management
  useEffect(() => {
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = "robots";
      document.head.appendChild(robotsMeta);
    }

    if (loc) {
      // Valid Location found
      document.title = loc.metaTitle || `${loc.heroTitle} | Rankvertise`;
      robotsMeta.content = "index, follow";

      let metaDescTag = document.querySelector('meta[name="description"]');
      if (!metaDescTag) {
        metaDescTag = document.createElement('meta');
        metaDescTag.name = "description";
        document.head.appendChild(metaDescTag);
      }
      metaDescTag.content = loc.metaDesc;
    } else {
      // Invalid Location -> Block indexing immediately (Prevents Google Soft 404 Penalty)
      document.title = "404 - Location Node Not Found | Rankvertise";
      robotsMeta.content = "noindex, nofollow";
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [loc]);

  // ── IF LOCATION DOES NOT EXIST, RENDER LUXURY 404 SCREEN ──
  if (!loc) {
    return (
      <div className="loc-master-stage loc-404-container">
        <div className="loc-grid-background-overlay" />
        <div className="loc-404-content">
          <span className="loc-404-code">404 // COORDINATE INVALID</span>
          <h1 className="loc-404-title">Location Protocol Not Found</h1>
          <p className="loc-404-desc">
            The target sector <code>/{activeSlug}</code> is not an authorized deployment node in our operational matrix.
          </p>
          <div className="loc-hero-action-row" style={{ marginTop: '30px' }}>
            <Link to="/" className="loc-btn-primary">
              Return to Base Core (Home) ➔
            </Link>
            <Link to="/services" className="loc-btn-secondary">
              Inspect Capabilities Matrix ↗
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── IF LOCATION EXISTS, RENDER THE ACTUAL SEO LANDING PAGE ──
  return (
    <div className="loc-master-stage">
      <div className="loc-grid-background-overlay" />

      {/* ── SECTION 1: HERO VIEWPORT ── */}
      <section className="loc-hero-viewport">
        <motion.div 
          className="loc-hero-content-box"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="loc-subtag-pill">
            <span className="loc-pulse-dot" /> LOCAL MATRIX // {loc.cityName.toUpperCase()}
          </span>

          <h1 className="loc-hero-title">{loc.heroTitle}</h1>
          <p className="loc-hero-subtitle">{loc.heroSub}</p>

          <div className="loc-hero-action-row">
            <Link to="/contact" className="loc-btn-primary">
              Book {loc.cityName} Consultation ➔
            </Link>
            <Link to="/services" className="loc-btn-secondary">
              Inspect Core Services ↗
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 2: TELEMETRY NUMBERS ── */}
      <section className="loc-telemetry-strip">
        <div className="loc-telemetry-container">
          <div className="loc-stat-node">
            <h3>{loc.stat1Val || "+310%"}</h3>
            <p>{loc.stat1Desc || `Average Organic Growth in ${loc.cityName}`}</p>
          </div>
          <div className="loc-stat-node">
            <h3>{loc.stat2Val || "< 24h"}</h3>
            <p>{loc.stat2Desc || "Direct Account Custodian Intercept"}</p>
          </div>
          <div className="loc-stat-node">
            <h3>{loc.stat3Val || "₹15Cr+"}</h3>
            <p>{loc.stat3Desc || "Direct Market Capital Acquired"}</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: LOCALIZED DEPLOYMENT PILLARS ── */}
      <section className="loc-pillars-section">
        <div className="loc-pillars-container">
          <span className="loc-section-tag">ENGINEERED ADVANTAGE</span>
          <h2>Dominating The {loc.cityName} Search & Attention Ecosystem</h2>
          <p className="loc-pillars-lead">
            Traditional agencies in {loc.cityName} charge retainers for vanity impressions. We deploy composable marketing architectures engineered to capture high-intent users before competitors can even bid on them.
          </p>

          <div className="loc-cards-grid">
            <motion.div 
              className="loc-feature-card"
              whileHover={{ y: -6, borderColor: "#d4a373" }}
            >
              <span className="loc-feature-code">// 01 / SEARCH DOMINANCE</span>
              <h3>Entity-Based SEO in {loc.cityName}</h3>
              <p>
                We build semantic citation graphs and local Google Maps dominance, locking your website into the top organic search coordinates across {loc.cityName}.
              </p>
            </motion.div>

            <motion.div 
              className="loc-feature-card"
              whileHover={{ y: -6, borderColor: "#d4a373" }}
            >
              <span className="loc-feature-code">// 02 / HIGH RETENTION MEDIA</span>
              <h3>Social Media & Viral Content Strategy</h3>
              <p>
                Capture local cultural intent with predictive hook matrices and high-retention short-form assets that turn {loc.cityName} audiences into qualified pipelines.
              </p>
            </motion.div>

            <motion.div 
              className="loc-feature-card"
              whileHover={{ y: -6, borderColor: "#d4a373" }}
            >
              <span className="loc-feature-code">// 03 / HEADLESS INFRASTRUCTURE</span>
              <h3>High-Velocity Digital Canvases</h3>
              <p>
                Lightning-fast website rendering that eliminates mobile lag. Shave 1.8 seconds off your loading times and capture drop-off transactions instantly.
              </p>
            </motion.div>
          </div>

          {/* ── LOCALIZED CTA ANCHOR BANNER ── */}
          <div className="loc-cta-banner">
            <h3>Ready to outpace competing brands in {loc.cityName}?</h3>
            <p>Deploy a dedicated cross-functional core built to compound your brand's growth trajectory.</p>
            <Link to="/contact" className="loc-btn-primary">
              Initiate Transmission ➔
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}