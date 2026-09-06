import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import './Contact.css';

// Yahan apna Wix Form Embed URL replace karein
const DEFAULT_WIX_FORM_URL = "https://rankvertise.wixforms.com/f/7494683394308047943"; 

export default function Contact() {
    const { getVal } = useData();
    const [iframeLoading, setIframeLoading] = useState(true);

    // Google Sheet se dynamic link uthane ka support
    const wixFormUrl = getVal('contact_wix_form_url', DEFAULT_WIX_FORM_URL);

    return (
        <motion.div 
            className="contact-master-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
            <div className="contact-grid-background" />

            <div className="contact-container">
                {/* ── LEFT COLUMN: BRAND DIRECTIVE & TELEMETRY ── */}
                <motion.div 
                    className="contact-info-column"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="contact-status-pill">
                        <span className="pulse-indicator" /> INGESTION PIPELINE ACTIVE
                    </span>

                    <h1 className="contact-main-headline">
                        Let’s Build Something That <span className="highlight-text">Breaks The Feed.</span>
                    </h1>

                    <p className="contact-sub-description">
                        No stale corporate pitches. No bloated turnaround times. Tell us what you're trying to scale, and we’ll architect the growth engine to get you there.
                    </p>

                    {/* Quick Metric Channels */}
                    <div className="contact-channels-matrix">
                        <div className="channel-box">
                            <span className="channel-label">// DIRECT DESK</span>
                            <a href="mailto:info@rankvertise.in" className="channel-value">info@rankvertise.in</a>
                        </div>
                        <div className="channel-box">
                            <span className="channel-label">// PHONE / WHATSAPP</span>
                            <a href="https://wa.me/919870502656" target="_blank" rel="noreferrer" className="channel-value">+91 98705 02656</a>
                        </div>
                        <div className="channel-box">
                            <span className="channel-label">// HEADQUARTERS</span>
                            <span className="channel-value-static">Punjabi Bagh, New Delhi — 110026</span>
                        </div>
                    </div>

                    {/* Social Footprint */}
                    <div className="contact-social-row">
                        <span className="social-row-label">STALK OUR PROTOCOLS:</span>
                        <div className="social-links-wrap">
                            <a href="https://www.instagram.com/rankvertise/" target="_blank" rel="noreferrer">Instagram ↗</a>
                            <a href="https://www.linkedin.com/company/rankvertise/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                            {/* <a href="https://www.youtube.com/@Rankvertise" target="_blank" rel="noreferrer">YouTube ↗</a> */}
                        </div>
                    </div>
                </motion.div>

                {/* ── RIGHT COLUMN: EMBEDDED WIX CONTACT ENGINE ── */}
                <motion.div 
                    className="contact-form-column"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="wix-form-glass-card">
                        <div className="wix-form-hud-header">
                            <div className="hud-dots">
                                <span />
                                <span />
                                <span />
                            </div>
                            <span className="hud-title">ENCRYPTED TRANSMISSION PORTAL</span>
                        </div>

                        {/* Loader while Wix form initializes */}
                        {iframeLoading && (
                            <div className="wix-form-loading-state">
                                <div className="spinner-orbit" />
                                <p>INITIALIZING SECURE FORM MATRIX...</p>
                            </div>
                        )}

                        <iframe 
                            src={wixFormUrl}
                            title="Rankvertise Ingestion Form"
                            className="wix-embedded-iframe"
                            onLoad={() => setIframeLoading(false)}
                            frameBorder="0"
                            scrolling="auto"
                            allowFullScreen
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}