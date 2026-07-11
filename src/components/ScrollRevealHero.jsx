import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';
import LightRays from './LightRays'; 
import './ScrollRevealHero.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollRevealHero = () => {
    const masterContainerRef = useRef(null);
    const leftGlassRef = useRef(null);
    const rightGlassRef = useRef(null);
    const section1ContentRef = useRef(null);
    const section2ParallaxRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: masterContainerRef.current,
                    start: "top top",
                    end: "+=220% top",
                    scrub: 0.5,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true
                }
            });

            tl.to(leftGlassRef.current, { xPercent: -102, opacity: 0, ease: "none" }, 0)
              .to(rightGlassRef.current, { xPercent: 102, opacity: 0, ease: "none" }, 0)
              .fromTo(section1ContentRef.current,
                  { opacity: 0, y: 30, scale: 0.96 },
                  { opacity: 1, y: 0, scale: 1, ease: "power1.out" },
                  0.3
              );

            tl.to(section2ParallaxRef.current, {
                yPercent: -100,
                ease: "none"
            }, "+=0.2");

        }, masterContainerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={masterContainerRef} className="master-scroll-wrapper">

            {/* SECTION VIEWPORT 1 */}
            <div className="section-viewport panel-one">
                <div className="hero-static-grid-bg" />
                
                <div ref={section1ContentRef} className="reveal-content-box">
                    <h2 className="hero-subheadline">REACH NEW HEIGHTS WITH RANKVERTISE</h2>
                    <h1 className="hero-tagline">We Don't Build Brands, We Build You An Audience</h1>
                    <p className="hero-desc">
                        Welcome to the place where ideas transform into results. We're the Gen Z-powered, business-savvy creative agency helping brands break the scroll, break the rules, and break into culture.
                    </p>
                    <div className="hero-cta-wrapper">
                        <a href="https://www.rankvertise.in/consultation" target="_blank" rel="noreferrer" className="hero-primary-btn">Free Audit →</a>
                    </div>
                </div>

                {/* GLASS SPLIT OVERLAY */}
                <div className="glass-split-overlay">
                    
                    {/* LEFT PLATE (Contains half background + half light setup) */}
                    <div ref={leftGlassRef} className="glass-plate left-plate">
                        <div className="plate-spotlight-container left-spot">
                            <LightRays
                                raysOrigin="top-right" /* Angle adjustment for left side */
                                raysColor="#f5ebe0"
                                raysSpeed={1.5}
                                lightSpread={0.7}
                                rayLength={1.8}
                                pulsating={true}
                                followMouse={false}
                                distortion={0.1}
                            />
                        </div>
                        <div className="half-text left-text">RANKV</div>
                    </div>

                    {/* RIGHT PLATE (Contains half background + half light setup) */}
                    <div ref={rightGlassRef} className="glass-plate right-plate">
                        <div className="plate-spotlight-container right-spot">
                            <LightRays
                                raysOrigin="top-left" /* Angle adjustment for right side */
                                raysColor="#f5ebe0"
                                raysSpeed={1.5}
                                lightSpread={0.7}
                                rayLength={1.8}
                                pulsating={true}
                                followMouse={false}
                                distortion={0.1}
                            />
                        </div>
                        <div className="half-text right-text">ERTISE</div>
                    </div>
                    
                </div>
            </div>

            {/* SECTION VIEWPORT 2 */}
            <div ref={section2ParallaxRef} className="section-viewport panel-two">
                <div className="parallax-inner-content">
                    <p className="s2-tagline">Not Your Regular Digital Marketing Agency</p>
                    <ScrollReveal baseOpacity={0.15} textClassName="premium-reveal-paragraph">
                        We build brands that look good, talk smart, and show up where it matters. We combined the speed of the internet with the discipline of business strategy to build a space where brands don't just survive — they thrive.
                    </ScrollReveal>
                </div>
            </div>

        </div>
    );
};

export default ScrollRevealHero;