import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import './PortfolioPage.css';

const DEFAULT_PORTFOLIO_DATA = {
  heroTag: "CASE STUDIES & DELIVERABLES",
  heroTitle: "Our Digital Marketing Work & Results",
  heroDesc: "Discover our data-backed SEO campaigns, high-retention content marketing, and headless web platforms built to scale client revenue.",
  projects: [
    {
      id: "fintech-seo",
      client: "FinTech Matrix",
      category: "Search Engine Optimization (SEO)",
      metrics: "+310% Organic Traffic",
      summary: "Deconstructed legacy search patterns and deployed technical entity optimization to rank #1 for high-intent financial keywords within 90 days.",
      tags: ["Technical SEO", "Content Strategy", "Speed Optimization"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "d2c-growth",
      client: "Aura Lifestyle D2C",
      category: "Social Media & Performance Ads",
      metrics: "4.8x Return on Ad Spend (ROAS)",
      summary: "Engineered high-retention short-form video hooks across Meta and TikTok ad algorithms, generating 45,000 orders in 48 hours.",
      tags: ["Paid Ads", "Reels Production", "Creative Strategy"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "headless-commerce",
      client: "Urban Global Goods",
      category: "Web & Headless Tech Architecture",
      metrics: "-42% Bounce Rate",
      summary: "Replaced an outdated, slow WordPress store with an ultra-fast headless React interface, reducing checkout latency by 1.8 seconds.",
      tags: ["Headless Next.js", "Core Web Vitals", "UI/UX Design"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop"
    }
  ]
};

export default function PortfolioPage() {
  const { getVal } = useData();
  const portfolio = getVal('portfolio_page_data', DEFAULT_PORTFOLIO_DATA);

  return (
    <div className="portfolio-master-stage">
      {/* Background Grid */}
      <div className="portfolio-grid-overlay" />

      {/* Hero Header */}
      <section className="portfolio-hero-section">
        <motion.div 
          className="portfolio-hero-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="portfolio-hero-tag">{portfolio.heroTag}</span>
          <h1 className="portfolio-hero-title">{portfolio.heroTitle}</h1>
          <p className="portfolio-hero-desc">{portfolio.heroDesc}</p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="portfolio-showcase-section">
        <div className="portfolio-container">
          <div className="portfolio-cards-grid">
            {(portfolio.projects || []).map((item, idx) => (
              <motion.div 
                key={item.id || idx}
                className="portfolio-project-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-thumbnail-wrapper">
                  <img src={item.image} alt={item.client} className="project-thumbnail" />
                  <span className="project-metric-badge">{item.metrics}</span>
                </div>

                <div className="project-card-body">
                  <span className="project-category-label">{item.category}</span>
                  <h3 className="project-client-name">{item.client}</h3>
                  <p className="project-summary-text">{item.summary}</p>

                  <div className="project-tags-wrap">
                    {(item.tags || []).map((tag, tIdx) => (
                      <span key={tIdx} className="project-pill-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <section className="portfolio-cta-section">
        <div className="portfolio-cta-box">
          <h2>Ready to Scale Your Brand to These Numbers?</h2>
          <p>Book a strategic consultation call with our core digital performance team today.</p>
          <a href="/contact" className="portfolio-primary-btn">Schedule Strategy Call ➔</a>
        </div>
      </section>
    </div>
  );
}