import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './BallpitFooter.css';

const Footer = () => {
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [activeModal, setActiveModal] = useState(null); // 'privacy' | 'terms' | null

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (!newsletterEmail) return;
        setSubscribed(true);
        setTimeout(() => {
            setSubscribed(false);
            setNewsletterEmail('');
        }, 3500);
    };

    // Close modal on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setActiveModal(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Prevent body background scroll when modal is open
    useEffect(() => {
        if (activeModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [activeModal]);

    return (
        <footer className="footer-interactive-stage">
            <div className="footer-real-content-wrap">

                {/* ── TOP SECTION: BRAND DIRECTIVE & NEWSLETTER ── */}
                <div className="footer-hero-cta-grid">
                    <div className="footer-brand-side">
                        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })} className="footer-logo-anchor">
                            <span className="footer-brand-main">Rank<span>vertise.in</span></span>
                        </Link>
                        <p className="footer-tagline-desc">
                            We don't build generic marketing retainers. We engineer conversion-driven digital architectures that accelerate growth velocity and capture permanent attention.
                        </p>
                    </div>

                    <div className="footer-newsletter-card">
                        <span className="newsletter-tagline">// INTELLIGENCE LOOP</span>
                        <h3>Join the Growth Matrix</h3>
                        <p>Get exclusive conversion blueprints and algorithmic disruption tactics.</p>
                        
                        <form onSubmit={handleNewsletterSubmit} className="footer-subscribe-form">
                            <input 
                                type="email" 
                                placeholder="Enter corporate email..." 
                                value={newsletterEmail}
                                onChange={(e) => setNewsletterEmail(e.target.value)}
                                required 
                            />
                            <button type="submit" className="footer-newsletter-btn">
                                {subscribed ? 'INTERCEPTED ✓' : 'Subscribe ➔'}
                            </button>
                        </form>
                        {subscribed && <span className="newsletter-confirm-msg">Transmission received. Welcome aboard.</span>}
                    </div>
                </div>

                {/* ── MIDDLE GRID: TELEMETRY & CHANNELS ── */}
                <div className="footer-channels-grid">
                    
                    {/* Column 1: Quick Navigation */}
                    <div className="footer-col-block">
                        <span className="footer-col-head">NAVIGATION</span>
                        <div className="footer-links-list">
                            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>Home</Link>
                            <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>About Architecture</Link>
                            <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>Capabilities</Link>
                            <Link to="/portfolio" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>Portfolio Matrix</Link>
                            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>Direct Ingestion (Contact)</Link>
                        </div>
                    </div>

                    {/* Column 2: Direct Contact */}
                    <div className="footer-col-block">
                        <span className="footer-col-head">CONNECT DESK</span>
                        <div className="footer-contact-nodes">
                            <div className="contact-node-item">
                                <span className="contact-node-label">EMAIL DESK</span>
                                <a href="mailto:hello@rankvertise.in" className="contact-node-value">hello@rankvertise.in</a>
                            </div>
                            <div className="contact-node-item">
                                <span className="contact-node-label">DIRECT / WHATSAPP</span>
                                <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="contact-node-value">+91 99999 99999</a>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Headquarters Location */}
                    <div className="footer-col-block">
                        <span className="footer-col-head">HEADQUARTERS</span>
                        <div className="footer-location-box">
                            <p className="location-line">Rankvertise Studios</p>
                            <p className="location-sub">Punjabi Bagh, New Delhi</p>
                            <p className="location-sub">Delhi — 110026, India</p>
                        </div>
                    </div>

                    {/* Column 4: Social Footprint */}
                    <div className="footer-col-block">
                        <span className="footer-col-head">STALK PROTOCOLS</span>
                        <div className="footer-social-stack">
                            <a href="https://www.instagram.com/rankvertise/" target="_blank" rel="noreferrer">Instagram ↗</a>
                            <a href="https://www.linkedin.com/company/rankvertise/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                            <a href="https://www.youtube.com/@Rankvertise" target="_blank" rel="noreferrer">YouTube ↗</a>
                        </div>
                    </div>

                </div>

                {/* ── BOTTOM BAR: COPYRIGHT & MODAL TRIGGERS ── */}
                <div className="footer-bottom-bar">
                    <p>© 2026 Rankvertise. All rights reserved into internet culture.</p>
                    
                    <div className="footer-legal-triggers">
                        <button type="button" onClick={() => setActiveModal('privacy')} className="legal-link-btn">
                            Privacy Policy
                        </button>
                        <span className="legal-dot-divider">•</span>
                        <button type="button" onClick={() => setActiveModal('terms')} className="legal-link-btn">
                            Terms & Conditions
                        </button>
                    </div>
                </div>

            </div>

            {/* ── GLASSMORPHISM LEGAL MODAL POPUP ── */}
            <AnimatePresence>
                {activeModal && (
                    <motion.div 
                        className="glass-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveModal(null)}
                    >
                        <motion.div 
                            className="glass-modal-container"
                            initial={{ scale: 0.92, y: 30, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.92, y: 30, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside card
                        >
                            <div className="glass-modal-header">
                                <div className="modal-title-wrap">
                                    <span className="modal-tag">// LEGAL COMPLIANCE</span>
                                    <h2>{activeModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}</h2>
                                </div>
                                <button className="glass-modal-close-btn" onClick={() => setActiveModal(null)}>
                                    ✕
                                </button>
                            </div>

                            <div className="glass-modal-scroll-body">
                                {activeModal === 'privacy' ? (
                                    <div className="modal-inner-text-flow">
                                        <p className="modal-meta-date">Last Updated: August 2026</p>
                                        
                                        <section>
                                            <h3>1. Ingestion & Data Collection</h3>
                                            <p>Rankvertise collects information provided directly through inquiry forms, consultation workflows, and client onboarding communications. This includes your name, corporate email address, contact numbers, and website parameters.</p>
                                        </section>

                                        <section>
                                            <h3>2. Strategic Use of Information</h3>
                                            <p>Your data is strictly utilized to architect bespoke digital marketing frameworks, report live campaign telemetry, and maintain high-fidelity communication loops without unwarranted overhead.</p>
                                        </section>

                                        <section>
                                            <h3>3. Cookies & Behavioral Telemetry</h3>
                                            <p>We deploy minimal non-intrusive session cookies and telemetry trackers to evaluate interface performance, user scroll depths, and bounce rates.</p>
                                        </section>

                                        <section>
                                            <h3>4. Third-Party Governance</h3>
                                            <p>We do not monetize, rent, or lease identifiable customer data. Data is processed solely by secured enterprise infrastructure providers (such as Cloudinary for media assets) under strict NDAs.</p>
                                        </section>

                                        <section>
                                            <h3>5. Inquiries Desk</h3>
                                            <p>For any privacy requests or data revocation, contact: <a href="mailto:hello@rankvertise.in">hello@rankvertise.in</a></p>
                                        </section>
                                    </div>
                                ) : (
                                    <div className="modal-inner-text-flow">
                                        <p className="modal-meta-date">Last Updated: August 2026</p>
                                        
                                        <section>
                                            <h3>1. Engagement Protocol</h3>
                                            <p>By browsing Rankvertise.in or commissioning marketing and tech architectures, you agree to comply with our delivery timelines, milestone schedules, and scopes defined in service proposals.</p>
                                        </section>

                                        <section>
                                            <h3>2. Intellectual Property Governance</h3>
                                            <p>All bespoke code architectures, spatial design visuals, and custom creative campaigns engineered by Rankvertise remain protected under IP laws until project sign-off and final financial settlements.</p>
                                        </section>

                                        <section>
                                            <h3>3. Collaborative Velocity</h3>
                                            <p>Fast execution requires cohesive synchronization. Delays in providing necessary brand assets, API access keys, or sign-offs will shift sprint milestones accordingly.</p>
                                        </section>

                                        <section>
                                            <h3>4. Limitation of Liability</h3>
                                            <p>Rankvertise engineers maximum-efficiency growth models; however, we shall not be held liable for third-party platform algorithm updates, ad network policy revisions, or broader market volatility.</p>
                                        </section>

                                        <section>
                                            <h3>5. Formal Notices</h3>
                                            <p>Direct all contractual and legal inquiries to: <a href="mailto:hello@rankvertise.in">hello@rankvertise.in</a></p>
                                        </section>
                                    </div>
                                )}
                            </div>

                            <div className="glass-modal-footer">
                                <button className="glass-modal-action-btn" onClick={() => setActiveModal(null)}>
                                    Understood & Acknowledge
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </footer>
    );
};

export default Footer;