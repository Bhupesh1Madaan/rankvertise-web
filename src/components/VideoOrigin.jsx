import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './VideoOrigin.css';

gsap.registerPlugin(ScrollTrigger);

export default function VideoOrigin() {
    const triggerRef = useRef(null);
    const videoCardRef = useRef(null);
    const textContentRef = useRef(null);

    useEffect(() => {
        const triggerNode = triggerRef.current;
        const videoCard = videoCardRef.current;
        const textContent = textContentRef.current;

        if (!triggerNode || !videoCard || !textContent) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerNode,
                start: "top top",
                end: "+=200% top",
                scrub: 0.5,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true
            }
        });

        // 1. Smoothly Card Lift Aur Full Screen Expand
        tl.fromTo(videoCard,
            {
                width: "80vw",
                height: "70vh",
                borderRadius: "24px",
                y: "20vh"
            },
            {
                width: "100vw",
                height: "100vh",
                borderRadius: "0px",
                y: "0vh",
                duration: 1.5,
                ease: "power1.inOut"
            }
        );

        // 2. Fullscreen expand hote hi clear Text Content Fade-In
        tl.fromTo(textContent,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
            "-=0.3"
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.vars.trigger === triggerNode) trigger.kill();
            });
        };
    }, []);

    return (
        <div ref={triggerRef} className="video-origin-master">

            {/* EXPANDING CONTAINER CARD */}
            <div ref={videoCardRef} className="video-viewport-card">

                {/* 100% RELIABLE PUBLIC PRODUCTION ACCELERATED LOOP VIDEO */}
                <video
                    className="origin-bg-video"
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" // Stable bypass link
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false} // User ko controls na dikhein, backend loop chale
                />

                {/* HIGH-CONTRAST DARK TINT GLASS OVERLAY */}
                <div className="video-dark-tint" />

                {/* LEGIBLE JOURNEY CONTENT OVERLAY */}
                <div ref={textContentRef} className="origin-text-overlay-content">
                    <span className="origin-section-label">OUR JOURNEY — THE ORIGIN STORY</span>

                    <h2 className="origin-main-paragraph">
                        We didn't start this agency to do things the "normal" way. We started it
                        because we saw a gap between stiff corporate strategy and actual internet
                        culture.
                    </h2>

                    <p className="origin-sub-paragraph">
                        What began as a refusal to settle for boring marketing has turned into a
                        full-scale creative takeover. We combined the speed of the internet with the
                        discipline of business strategy to build a space where brands don't just
                        survive — they thrive.
                    </p>
                </div>

            </div>

        </div>
    );
}