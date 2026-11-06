import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './VideoOrigin.css';

gsap.registerPlugin(ScrollTrigger);

// Custom brand visual image (Aap apni direct link se replace kar sakte hain)
const ORIGIN_BG_IMAGE = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop";

export default function VideoOrigin({ bgImage = ORIGIN_BG_IMAGE }) {
    const triggerRef = useRef(null);
    const cardRef = useRef(null);
    const textContentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "+=180% top",
                    scrub: 0.6,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true
                }
            });

            // 1. Smooth Card Expand: chhota card se full viewport
            tl.fromTo(cardRef.current,
                {
                    width: "82vw",
                    height: "72vh",
                    borderRadius: "28px",
                    y: "14vh",
                    scale: 0.96
                },
                {
                    width: "100vw",
                    height: "100vh",
                    borderRadius: "0px",
                    y: "0vh",
                    scale: 1,
                    duration: 1.5,
                    ease: "power2.inOut"
                }
            );

            // 2. Text Reveal Fade & Slide-in
            tl.fromTo(textContentRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
                "-=0.4"
            );

            // 3. User ke upar scroll out karte hi smooth fade away
            tl.to([cardRef.current, textContentRef.current], {
                opacity: 0.85,
                duration: 0.5
            });

        }, triggerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={triggerRef} className="video-origin-master">
            <div ref={cardRef} className="video-viewport-card">
                
                {/* HIGH PERFORMANCE BACKGROUND IMAGE */}
                <div 
                    className="origin-bg-image"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url("${bgImage}")`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        transform: 'scale(1.05)'
                    }}
                />

                {/* HIGH CONTRAST DARK TINT OVERLAY */}
                <div className="video-dark-tint" />

                {/* EDITORIAL JOURNEY CONTENT */}
                <div ref={textContentRef} className="origin-text-overlay-content">
                    <span className="origin-section-label">OUR JOURNEY , THE ORIGIN STORY</span>

                    <h2 className="origin-main-paragraph">
                        We didn't start this agency to do things the "normal" way. We started it
                        because we saw a gap between stiff corporate strategy and actual internet
                        culture.
                    </h2>

                    <p className="origin-sub-paragraph">
                        What began as a refusal to settle for boring marketing has turned into a
                        full-scale creative takeover. We combined the speed of the internet with the
                        discipline of business strategy to build a space where brands don't just
                        survive , they thrive.
                    </p>
                </div>
            </div>
        </div>
    );
}