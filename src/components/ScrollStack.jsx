import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useData } from '../context/DataContext';
import './ScrollStack.css';

gsap.registerPlugin(ScrollTrigger);

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
    <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const DEFAULT_STACK_CARDS = [
    { title: "01 / BRAND IDENTITY", desc: "Logo. Voice. Vibe. All dialed in. Whether you're starting out or starting over, we'll design a brand that actually speaks." },
    { title: "02 / SOCIAL MEDIA & CONTENT", desc: "We don't just manage. We create. Our content strategies are scroll-stopping, algorithm-busting, and extremely double-tap worthy." },
    { title: "03 / DIGITAL MARKETING THAT CLICKS", desc: "Your goals + our data-backed brains = ROI that actually means something. From SEO to paid ads, we speak digital fluently." },
    { title: "04 / WEB EXPERIENCES", desc: "Websites that look hot and load fast. From portfolios to e-commerce, we turn code into conversion." },
    { title: "05 / CREATIVE PRODUCTION", desc: "Ideas are cute. Execution is everything. From aesthetic to impact, we concept, shoot, and produce brand content that doesn't just sit pretty, it performs." }
];

const ScrollStack = () => {
    const masterSectionRef = useRef(null);
    const cardsWrapperRef = useRef(null);
    const { getVal } = useData();

    const rawData = getVal('scroll_stack_data', DEFAULT_STACK_CARDS);
    const cardsData = Array.isArray(rawData) && rawData.length >= 5 ? rawData : DEFAULT_STACK_CARDS;

    useEffect(() => {
        const master = masterSectionRef.current;
        const cardsWrapper = cardsWrapperRef.current;
        if (!master || !cardsWrapper) return;

        const cards = cardsWrapper.querySelectorAll('.scroll-stack-card');
        if (!cards.length) return;

        // Clean initial GSAP setup matching your original architecture
        const ctx = gsap.context(() => {
            const mainTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: master,
                    start: "top top",
                    end: "+=300% top",
                    scrub: 1.2,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            });

            cards.forEach((card, index) => {
                if (index === 0) return;

                const prevCards = Array.from(cards).slice(0, index);

                mainTimeline.fromTo(card,
                    { y: "120vh" },
                    {
                        y: `${index * 25}px`,
                        duration: 3,
                        ease: "power2.out"
                    },
                    `card-${index}`
                );

                prevCards.forEach((prevCard, pIdx) => {
                    const pullFactor = (index - pIdx) * -6;
                    mainTimeline.to(prevCard, {
                        y: `${pIdx * 25 + pullFactor}px`,
                        scale: 1 - (index - pIdx) * 0.02,
                        duration: 3,
                        ease: "power2.out"
                    }, `card-${index}`);
                });
            });
        }, masterSectionRef);

        return () => ctx.revert();
    }, []); // Empty dependency array ensures timeline is pinned ONLY once on page load

    return (
        <div ref={masterSectionRef} className="scroll-stack-master">
            <div ref={cardsWrapperRef} className="cards-relative-zone">
                {cardsData.slice(0, 5).map((card, idx) => (
                    <ScrollStackItem key={idx}>
                        <h3 className="stack-service-title">{card.title}</h3>
                        <p className="stack-service-desc">{card.desc}</p>
                    </ScrollStackItem>
                ))}
            </div>
        </div>
    );
};

export default ScrollStack;