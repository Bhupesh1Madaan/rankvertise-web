import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './PortfolioPage.css';

gsap.registerPlugin(ScrollTrigger);

// 🛠️ DATA DESK ADD-ONS ZONE: Yahan tum jitne marzi chahe items thonk sakte ho! Pura UI automatic add ho jayega.
const parallaxItemsData = [
    {
        tag: "Performance Scaling",
        title: "Zomato Ad Engine Strategy",
        desc: "Optimized multi-channel demographic hooks to maximize organic visibility. Achieved an absolute spike loop from baseline metrics.",
        mediaType: "video",
        src: "https://assets.mixkit.co/videos/preview/mixkit-vertical-shot-of-a-neon-sign-at-night-42296-large.mp4"
    },
    {
        tag: "Programmatic Content Ops",
        title: "Swiggy Brand Architecture",
        desc: "Structured localized creative grids to automate cross-platform delivery systems without frame drops.",
        mediaType: "image",
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"
    },
    {
        tag: "B2B Acquisition Engine",
        title: "Cred Funnel Optimizations",
        desc: "Engineered ultra high-converting user onboarding matrices to minimize drop-off factors permanently.",
        mediaType: "video",
        src: "https://assets.mixkit.co/videos/preview/mixkit-vertical-of-a-futuristic-cyberpunk-city-at-night-43034-large.mp4"
    },
    {
        tag: "Organic Search Loops",
        title: "Zepto Hyper-Local Footprint",
        desc: "Deployed complex location-wise data schemas to capture high-intent keyword intent across 40+ dynamic zones.",
        mediaType: "image",
        src: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?w=600&auto=format&fit=crop&q=80"
    }
    // ➕ NEXT ADDITIONS CAN BE PASTE HERE: Bas object banao aur dalo!
];

const brandLogosMarquee = ["ZOMATO", "SWIGGY", "CRED", "ZEPTO", "APEX GLOBAL", "SYNTHETIX", "BLINKIT"];

export default function PortfolioPage() {
    const mainViewportRef = useRef(null);
    const splitTrackRef = useRef(null);
    const leftNarrativeRef = useRef(null);
    const rightStreamRef = useRef(null);
    const mediaCardsRef = useRef([]);
    const textCardsRef = useRef([]);

    // Bento Vector Path Reference desk
    const bentoPathRef = useRef(null);

    // Dynamic states trackers hooks for the active context text switching
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        let ctx = gsap.context(() => {

            // Mobile devices checker boundaries logic bypass
            const isMobile = window.innerWidth <= 768;
            if (isMobile) return;

            /* ==========================================================================
               INTERACTION 1: SPLIT PINNING & ALTERNATING ACTIVE TEXT FADES
               ========================================================================== */
            const splitTl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTrackRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    pin: true,
                    scrub: true,
                }
            });

            // Absolute calculations coordinates loops maps for Right Parallax Slides
            parallaxItemsData.forEach((item, index) => {
                const mediaCard = mediaCardsRef.current[index];

                if (mediaCard) {
                    // Coordinates trajectory: starts completely down, scrolls straight up past top view limits
                    splitTl.fromTo(mediaCard,
                        { y: "110vh", opacity: 0.2 },
                        {
                            y: "-120vh",
                            opacity: 1,
                            ease: "none",
                            duration: 2.0,
                            onUpdate: function () {
                                const progress = this.progress();
                                // Fires active index updates once current image crosses middle screen focus bounds
                                if (progress > 0.35 && progress < 0.75) {
                                    setActiveIndex(index);
                                }
                            }
                        },
                        index * 1.1 // Perfect staggered runway distance intervals
                    );
                }
            });

            // Individual text opacity fade animation toggling rules
            textCardsRef.current.forEach((textBlock, idx) => {
                if (textBlock) {
                    gsap.set(textBlock, { opacity: idx === 0 ? 1 : 0, y: idx === 0 ? 0 : 20 });
                }
            });


            /* ==========================================================================
               INTERACTION 2: BENTO GRID DASHARRAY LINE DRAWING
               ========================================================================== */
            if (bentoPathRef.current) {
                const bentoPathLength = bentoPathRef.current.getTotalLength();
                gsap.set(bentoPathRef.current, { strokeDasharray: bentoPathLength, strokeDashoffset: bentoPathLength });

                gsap.to(bentoPathRef.current, {
                    strokeDashoffset: 0,
                    scrollTrigger: {
                        trigger: ".sec-bento-proof",
                        start: "top 60%",
                        end: "bottom 80%",
                        scrub: 1,
                    }
                });
            }


            /* ==========================================================================
               INTERACTION 3: SEAMLESS HORIZONTAL MARQUEE ROLLING INFINITE LINES
               ========================================================================== */
            gsap.to(".row-track-forward", {
                xPercent: -50,
                ease: "none",
                scrollTrigger: { trigger: ".sec-marquee-ring", start: "top bottom", end: "bottom top", scrub: 1 }
            });

            gsap.to(".row-track-backward", {
                xPercent: 0,
                from: { xPercent: -50 },
                ease: "none",
                scrollTrigger: { trigger: ".sec-marquee-ring", start: "top bottom", end: "bottom top", scrub: 1 }
            });

        }, mainViewportRef);

        return () => ctx.revert();
    }, []);

    // Syncs active states changes with crisp fade text toggles smoothly
    useEffect(() => {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) return;

        textCardsRef.current.forEach((block, idx) => {
            if (block) {
                if (idx === activeIndex) {
                    gsap.to(block, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
                } else {
                    gsap.to(block, { opacity: 0, y: -15, duration: 0.3, ease: "power2.in" });
                }
            }
        });
    }, [activeIndex]);

    const addToMediaRefs = (el) => { if (el && !mediaCardsRef.current.includes(el)) mediaCardsRef.current.push(el); };
    const addToTextRefs = (el) => { if (el && !textCardsRef.current.includes(el)) textCardsRef.current.push(el); };

    const handleConsultationRedirect = () => {
        window.location.href = 'https://rankvertise.in/consultation';
    };

    return (
        <div ref={mainViewportRef} className="portfolio-page-viewport">

            {/* ── SECTION 1: THE LEFT FIXED NARRATIVE & RIGHT PARALLAX STREAM ── */}
            <div ref={splitTrackRef} className="sec-parallax-split">
                <div className="split-viewport-window">

                    {/* Fixed Left context text workspace */}
                    <div ref={leftNarrativeRef} className="split-left-narrative-zone">
                        {parallaxItemsData.map((item, index) => (
                            <div
                                key={index}
                                ref={addToTextRefs}
                                className="parallax-story-card"
                                style={{ display: window.innerWidth <= 768 ? 'block' : undefined }}
                            >
                                <span className="p-tag">{item.tag}</span>
                                <h2 className="p-title">{item.title}</h2>
                                <p className="p-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Scrolling Right Parallax Media Stream Container */}
                    <div ref={rightStreamRef} className="split-right-media-stream">
                        {parallaxItemsData.map((item, index) => (
                            <div
                                key={index}
                                ref={addToMediaRefs}
                                className="stream-media-hull"
                                style={{ top: window.innerWidth > 768 ? "0vh" : `${index * 55}vh` }}
                            >
                                {item.mediaType === 'video' ? (
                                    <video autoPlay loop muted playsInline src={item.src} />
                                ) : (
                                    <img src={item.src} alt={item.title} />
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* ── SECTION 2: BENTO MATRIX ARRAY (THE PROOF DATA) ── */}
            <section className="sec-bento-proof">
                <div className="bento-header-wrapper">
                    <span className="p-tag">The Verification Metrics</span>
                    <h2 className="section-title" style={{ color: 'var(--maroon-deep)' }}>RESULTS WE HAVE ACHIEVED</h2>
                </div>

                <div className="bento-grid-desk">

                    {/* Bento Box 1: 10X Scale Data Graphic Matrix */}
                    <div className="bento-node-box bento-span-2">
                        <div>
                            <span className="bento-node-label">Growth Track</span>
                            <h3 className="bento-node-title" style={{ color: 'var(--maroon-deep)' }}>Compound Traction Escalation</h3>
                            <p className="bento-node-desc">Our active programmatic tracking systems scaled acquisition metrics zero latency from 2023 levels.</p>
                        </div>

                        {/* Live inline vector line trace inside bento card */}
                        <svg className="bento-svg-graph-layer" viewBox="0 0 600 150">
                            <path ref={bentoPathRef} d="M 30 130 Q 150 120, 280 70 T 570 20" className="bento-graph-line" />
                            <circle cx="30" cy="130" r="6" fill="var(--maroon-deep)" />
                            <circle cx="570" cy="20" r="7" fill="var(--maroon-accent)" />
                        </svg>
                    </div>

                    {/* Bento Box 2: Ticker Card Block 1 */}
                    <div className="bento-node-box bento-span-1">
                        <span className="bento-node-label">Average ROAS</span>
                        <h2 style={{ fontSize: '4rem', fontWeight: '900', margin: '15px 0 0 0', color: 'var(--maroon-accent)' }}>4.8x</h2>
                        <p className="bento-node-desc" style={{ marginTop: '0' }}>Restructured baseline conversion economics globally.</p>
                    </div>

                    {/* Bento Box 3: Ticker Card Block 2 */}
                    <div className="bento-node-box bento-span-1">
                        <span className="bento-node-label">Organic Cross Reach</span>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '15px 0 0 0', color: 'var(--maroon-deep)' }}>5M+</h2>
                        <p className="bento-node-desc" style={{ marginTop: '0' }}>Impressions overflowed organically without heavy paid distribution cycles.</p>
                    </div>

                    {/* Bento Box 4: Full Row Milestone Banner */}
                    <div className="bento-node-box bento-full-row">
                        <span className="bento-node-label">Chronology Loop</span>
                        <h3 className="bento-node-title" style={{ margin: '5px 0', fontSize: '1.8rem', color: 'var(--maroon-deep)' }}>2026 Ultimate Alpha State Horizon</h3>
                        <p className="bento-node-desc" style={{ marginTop: '0' }}>Rankvertise operations completely locked down performance optimization matrices. Data loops closed completely.</p>
                    </div>

                </div>
            </section>

            {/* ── SECTION 3: INFINITE HORIZONTAL MARQUEE BRAND RINGS ── */}
            <div className="sec-marquee-ring">
                {/* Row 1 Moving Forward */}
                <div className="marquee-track-line row-track-forward">
                    <div className="marquee-cluster-nodes">
                        {brandLogosMarquee.concat(brandLogosMarquee).map((logo, i) => (
                            <span key={i} className="marquee-pill-text">{logo}</span>
                        ))}
                    </div>
                </div>
                {/* Row 2 Moving Backward */}
                <div className="marquee-track-line row-track-backward">
                    <div className="marquee-cluster-nodes">
                        {brandLogosMarquee.concat(brandLogosMarquee).map((logo, i) => (
                            <span key={i} className="marquee-pill-text outline-mode">{logo}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── SECTION 4: EDITORIAL MAGAZINE TESTIMONIAL MATRIX ── */}
            <section className="sec-testimonials-magazine">
                <div className="magazine-container-grid">
                    <div className="magazine-left-panel">
                        <span className="p-tag">Human Trust Desk</span>
                        <h2 style={{ color: 'var(--maroon-deep)' }}>How Our Clients Felt Served</h2>
                        <p>Real verified statements from active global enterprise nodes scaled parallelly by our optimization pipelines.</p>
                    </div>

                    <div className="magazine-column-stack">
                        <div className="magazine-quote-row">
                            <p className="magazine-quote-body">“Rankvertise fundamentally engineered our complete conversion economics loop. Our scaling models hit peak 5.2x baselines under 90 days.”</p>
                            <div className="magazine-author-block">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Sarah" className="magazine-user-avatar" />
                                <div>
                                    <h4 className="author-name-meta">Sarah Jenkins</h4>
                                    <p className="author-company-tag">Apex Global Growth</p>
                                </div>
                            </div>
                        </div>
                        <div className="magazine-quote-row">
                            <p className="magazine-quote-body">“The location-wise dynamic programmatic SEO structures they structured automated traffic inflows across dozens of targeted locations seamlessly.”</p>
                            <div className="magazine-author-block">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Marcus" className="magazine-user-avatar" />
                                <div>
                                    <h4 className="author-name-meta">Marcus Thorne</h4>
                                    <p className="author-company-tag">Synthetix Operations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 5: CURATED EDITORIAL AGENCY BLOGS ── */}
            <section className="sec-editorial-blogs">
                <span className="p-tag">Strategic Insights</span>
                <h2 className="section-title" style={{ color: 'var(--maroon-deep)' }}>FROM THE INSIDE ARCHIVE</h2>

                <div className="blogs-masonry-grid">
                    <div className="blog-editorial-card" onClick={handleConsultationRedirect}>
                        <div className="blog-img-box"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=80" alt="Blog 1" /></div>
                        <div className="blog-content-box">
                            <span className="blog-meta-date">May 2026 • Performance</span>
                            <h4 className="blog-heading-title" style={{ color: 'var(--maroon-deep)' }}>Breaking the Conversion Matrix: Programmatic Schemas Explained</h4>
                        </div>
                    </div>
                    <div className="blog-editorial-card" onClick={handleConsultationRedirect}>
                        <div className="blog-img-box"><img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=80" alt="Blog 2" /></div>
                        <div className="blog-content-box">
                            <span className="blog-meta-date">April 2026 • Design Ops</span>
                            <h4 className="blog-heading-title" style={{ color: 'var(--maroon-deep)' }}>Why Light Luxury Minimal Design Drives Massive Compounding ROAS</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 6: CONTEXT NEWSLETTER FORM MODULE + REDIRECT CTA BUTTON ── */}
            <section className="sec-newsletter-box">
                <div className="news-card-wrapper">
                    <span className="p-tag">Stay in the Loop</span>
                    <h2 className="section-title" style={{ color: 'var(--maroon-deep)', fontSize: '3rem' }}>JOIN THE ACQUISITION ARCHIVE</h2>
                    <p className="p-desc" style={{ textAlign: 'center', margin: '16px auto 0 auto', maxWidth: '500px' }}>
                        No spam loops. Just raw programmatic analytics blueprints, data design structures, and scaling methods dropped weekly.
                    </p>

                    <div className="news-input-dock">
                        <input type="email" placeholder="Enter your business email identity..." className="news-field" />
                        <button className="news-submit-btn" onClick={handleConsultationRedirect}>Subscribe Thread</button>
                    </div>

                    <p style={{ marginTop: '40px', fontSize: '0.9rem', color: 'rgba(26, 5, 8, 0.4)' }}>
                        Ready to accelerate right now?{' '}
                        <span style={{ color: 'var(--maroon-accent)', fontWeight: '700', cursor: 'pointer', textDecoration: 'underline' }} onClick={handleConsultationRedirect}>
                            Secure your strategy loop desk consultation call here.
                        </span>
                    </p>
                </div>
            </section>

        </div>
    );
}