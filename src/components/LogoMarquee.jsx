import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './LogoMarquee.css';

const LogoMarquee = () => {
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);

    useEffect(() => {
        const row1 = row1Ref.current;
        const row2 = row2Ref.current;

        // Row 1 (Left) Infinite Loop
        const t1 = gsap.to(row1, {
            xPercent: -50,
            repeat: -1,
            duration: 15,
            ease: "none"
        });

        // Row 2 (Right) Infinite Loop
        gsap.set(row2, { xPercent: -50 });
        const t2 = gsap.to(row2, {
            xPercent: 0,
            repeat: -1,
            duration: 15,
            ease: "none"
        });

        // Native smooth scroll direction detection (No crash hook)
        let lastScrollTop = window.scrollY;
        const handleScrollDirection = () => {
            const st = window.scrollY;
            if (st > lastScrollTop) {
                // Scrolling Down
                gsap.to([t1, t2], { timeScale: 1, overwrite: "auto", duration: 0.3 });
            } else if (st < lastScrollTop) {
                // Scrolling Up (Reverse fast effect)
                gsap.to([t1, t2], { timeScale: -1.5, overwrite: "auto", duration: 0.3 });
            }
            lastScrollTop = st <= 0 ? 0 : st;
        };

        window.addEventListener('scroll', handleScrollDirection, { passive: true });

        // Hover pauses controls
        const pauseMarquee = () => gsap.to([t1, t2], { timeScale: 0, duration: 0.2 });
        const resumeMarquee = () => gsap.to([t1, t2], { timeScale: 1, duration: 0.3 });

        const containers = document.querySelectorAll('.marquee-row-wrapper');
        containers.forEach(el => {
            el.addEventListener('mouseenter', pauseMarquee);
            el.addEventListener('mouseleave', resumeMarquee);
        });

        return () => {
            t1.kill(); t2.kill();
            window.removeEventListener('scroll', handleScrollDirection);
        };
    }, []);

    const textArray = ["DISRUPTION", "UNFILTERED", "IMPACT", "GEN-Z CREATIVITY", "ROI DRIVEN", "STRATEGY"];

    return (
        <div className="dual-marquee-section">
            <div className="marquee-row-wrapper line-left">
                <div ref={row1Ref} className="marquee-inner-track">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="marquee-text-block">
                            {textArray.map((txt, idx) => <span key={idx} className="marquee-pill">{txt}</span>)}
                        </div>
                    ))}
                </div>
            </div>

            <div className="marquee-row-wrapper line-right">
                <div ref={row2Ref} className="marquee-inner-track">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="marquee-text-block">
                            {textArray.map((txt, idx) => <span key={idx} className="marquee-pill colored">{txt}</span>)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoMarquee;