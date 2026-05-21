import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FlickeringGrid } from './FlickeringGrid';
import ScrollReveal from './ScrollReveal';
import './ScrollRevealHero.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollRevealHero = () => {
    const masterContainerRef = useRef(null);
    const leftGlassRef = useRef(null);
    const rightGlassRef = useRef(null);
    const section1ContentRef = useRef(null);
    const section2ParallaxRef = useRef(null);

    useEffect(() => {
        const master = masterContainerRef.current;
        const leftGlass = leftGlassRef.current;
        const rightGlass = rightGlassRef.current;
        const s1Content = section1ContentRef.current;
        const s2Parallax = section2ParallaxRef.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: master,
                start: "top top",
                end: "+=220% top",
                scrub: 1,
                pin: true,
                anticipatePin: 1
            }
        });

        tl.to(leftGlass, { x: '-100%', opacity: 0, duration: 2 }, 0)
            .to(rightGlass, { x: '100%', opacity: 0, duration: 2 }, 0)
            .fromTo(s1Content,
                { opacity: 0, scale: 0.9, y: 40 },
                { opacity: 1, scale: 1, y: 0, duration: 1.5 },
                0.5
            );

        tl.to(s2Parallax, {
            y: '-100vh',
            duration: 3,
            ease: "none"
        }, "+=0.3");

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={masterContainerRef} className="master-scroll-wrapper">
            <div className="section-viewport panel-one">
                <div className="hero-bg-grid">
                    <FlickeringGrid squareSize={4} gridGap={6} flickerChance={0.5} color="rgb(128, 26, 36)" maxOpacity={0.15} />
                </div>

                <div ref={section1ContentRef} className="reveal-content-box">
                    <h2 className="hero-subheadline">REACH NEW HEIGHTS WITH RANKVERTISE</h2>
                    <p className="hero-tagline">We Don't Build Brands, We Build You An Audience</p>
                    <p className="hero-desc">
                        Welcome to the place where ideas transform into results. We're the Gen Z-powered, business-savvy creative agency helping brands of all sizes break the scroll, break the rules, and break into culture.
                    </p>
                    <div className="hero-cta-wrapper">
                        <a href="https://www.rankvertise.in/consultation" target="_blank" rel="noreferrer" className="hero-primary-btn">Free Audit →</a>
                    </div>
                </div>

                <div className="glass-split-overlay">
                    <div ref={leftGlassRef} className="glass-plate left-plate"><div className="half-text left-text">RANK</div></div>
                    <div ref={rightGlassRef} className="glass-plate right-plate"><div className="half-text right-text">VERTISE</div></div>
                </div>
            </div>

            <div ref={section2ParallaxRef} className="section-viewport panel-two">
                <div className="parallax-inner-content">
                    <p className="s2-tagline">Not Your Regular Digital Marketing Agency</p>
                    <ScrollReveal
                        baseOpacity={0.1}
                        blurStrength={4}
                        textClassName="premium-reveal-paragraph"
                        rotationEnd="bottom top"
                        wordAnimationEnd="bottom center"
                    >
                        We build brands that look good, talk smart, and show up where it matters. We combined the speed of the internet with the discipline of business strategy to build a space where brands don't just survive — they thrive.
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

export default ScrollRevealHero;