import React from 'react';
import './BallpitFooter.css'; // Relies on standard flex rules now

const Footer = () => {
    return (
        <footer className="footer-interactive-stage">
            <div className="footer-real-content-wrap">

                <div className="footer-top-row">
                    <div className="footer-brand-title">
                        Rank<span>vertise.in</span>
                    </div>

                    <div className="footer-links-grid">
                        <div className="footer-links-column">
                            <span className="footer-column-head">STALK US</span>
                            <a href="https://www.instagram.com/rankvertise/" target="_blank" rel="noreferrer">Instagram</a>
                            <a href="https://www.linkedin.com/company/rankvertise/" target="_blank" rel="noreferrer">LinkedIn</a>
                            <a href="https://www.youtube.com/@Rankvertise" target="_blank" rel="noreferrer">YouTube</a>
                        </div>
                        <div className="footer-links-column">
                            <span className="footer-column-head">HEADQUARTERS</span>
                            <span style={{ color: '#1a0508', fontWeight: 600, fontSize: '0.95rem' }}>Punjabi Bagh,</span>
                            <span style={{ color: '#1a0508', fontWeight: 600, fontSize: '0.95rem', marginTop: '-8px' }}>New Delhi — 110026</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-bar">
                    <p>© 2026 Rankvertise. All rights reserved into internet culture.</p>
                    <div style={{ display: 'flex', gap: '20px', pointerEvents: 'auto' }}>
                        <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
                        <span style={{ cursor: 'pointer' }}>Terms & Conditions</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;