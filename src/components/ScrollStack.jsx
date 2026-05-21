import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollStack.css';

gsap.registerPlugin(ScrollTrigger);

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
    <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = () => {
    const masterSectionRef = useRef(null);
    const cardsWrapperRef = useRef(null);

    useEffect(() => {
        const master = masterSectionRef.current;
        const cardsWrapper = cardsWrapperRef.current;
        const cards = cardsWrapper.querySelectorAll('.scroll-stack-card');

        if (!cards.length) return;

        // Master GSAP Timeline for pure cards overlap syncing
        const mainTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: master,
                start: "top top",
                end: "+=300% top", // Smooth scrolling area budget
                scrub: 1.2,        // Silky smooth inertia tracking
                pin: true,         // Lock frame on screen during stacking
                invalidateOnRefresh: true,
            }
        });

        // CARDS STACKING ENGINE (Overlap + Pull Up Logic)
        cards.forEach((card, index) => {
            if (index === 0) return; // First card stays as background base

            const prevCards = Array.from(cards).slice(0, index);

            // Current card falls into place from bottom view
            mainTimeline.fromTo(card,
                { y: "120vh" },
                {
                    y: `${index * 25}px`, // Stack offset height gap
                    duration: 3,
                    ease: "power2.out"
                },
                `card-${index}` // Simultaneous key trigger group
            );

            // Jab agla card chadh raha ho, toh pichle saare cards halke se upar khiskenge (-6px vector pull)
            prevCards.forEach((prevCard, pIdx) => {
                const pullFactor = (index - pIdx) * -6;
                mainTimeline.to(prevCard, {
                    y: `${pIdx * 25 + pullFactor}px`,
                    scale: 1 - (index - pIdx) * 0.02, // Depth layer effect
                    duration: 3,
                    ease: "power2.out"
                }, `card-${index}`);
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={masterSectionRef} className="scroll-stack-master">
            <div ref={cardsWrapperRef} className="cards-relative-zone">

                {/* CARD 1 */}
                <ScrollStackItem>
                    <h3 className="stack-service-title">01 / BRAND IDENTITY</h3>
                    <p className="stack-service-desc">Logo. Voice. Vibe. All dialed in. Whether you're starting out or starting over, we'll design a brand that actually speaks.</p>
                </ScrollStackItem>

                {/* CARD 2 */}
                <ScrollStackItem>
                    <h3 className="stack-service-title">02 / SOCIAL MEDIA & CONTENT</h3>
                    <p className="stack-service-desc">We don't just manage. We create. Our content strategies are scroll-stopping, algorithm-busting, and extremely double-tap worthy.</p>
                </ScrollStackItem>

                {/* CARD 3 */}
                <ScrollStackItem>
                    <h3 className="stack-service-title">03 / DIGITAL MARKETING THAT CLICKS</h3>
                    <p className="stack-service-desc">Your goals + our data-backed brains = ROI that actually means something. From SEO to paid ads, we speak digital fluently.</p>
                </ScrollStackItem>

                {/* CARD 4 */}
                <ScrollStackItem>
                    <h3 className="stack-service-title">04 / WEB EXPERIENCES</h3>
                    <p className="stack-service-desc">Websites that look hot and load fast. From portfolios to e-commerce, we turn code into conversion.</p>
                </ScrollStackItem>

                {/* CARD 5 */}
                <ScrollStackItem>
                    <h3 className="stack-service-title">05 / CREATIVE PRODUCTION</h3>
                    <p className="stack-service-desc">Ideas are cute. Execution is everything. From aesthetic to impact, we concept, shoot, and produce brand content that doesn't just sit pretty, it performs.</p>
                </ScrollStackItem>

            </div>
        </div>
    );
};

export default ScrollStack;