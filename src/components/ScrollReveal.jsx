import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({
    children,
    textClassName = '',
    baseOpacity = 0.15, // Unrevealed words opacity scale
    activeColor = '#f5ebe0' // Revealed high-contrast solid cream
}) {
    const textRef = useRef(null);

    useEffect(() => {
        const element = textRef.current;
        if (!element) return;

        // Word Split Engine: Text ko safe individual words stack elements mein breakdown karenge
        const textContent = element.innerText;
        const words = textContent.split(/\s+/);
        element.innerHTML = ''; // Clear native bulk text string

        // Har word ko class container span structure allot karenge
        const spanElements = words.map((word) => {
            const span = document.createElement('span');
            span.innerText = word + ' ';
            span.style.opacity = baseOpacity;
            span.style.color = 'rgba(245, 235, 224, 0.4)'; // Subdued state color maroon-gray canvas
            span.style.display = 'inline-block';
            span.style.transform = 'translate3d(0, 10px, 0)'; // Subtle subtle lift element
            span.style.willChange = 'opacity, transform';
            element.appendChild(span);
            return span;
        });

        // HIGH VISIBILITY SCROLL REVEAL STAGGER TIMELINE
        gsap.to(spanElements, {
            opacity: 1,
            color: activeColor,
            y: 0,
            stagger: 0.1, // Incremental smooth tracking interval logic
            ease: 'power1.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 75%',  // Jab section window ke 75% height par touch hoga tab chalega
                end: 'top 30%',    // Scroll khatam hote hi text fully revealed aur locked rahega
                scrub: 0.8,        // Highly responsive buttery follow speed
                invalidateOnRefresh: true
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.vars.trigger === element) trigger.kill();
            });
        };
    }, [children, baseOpacity, activeColor]);

    return (
        <h2
            ref={textRef}
            className={textClassName}
            style={{ display: 'block', wordWrap: 'break-word' }}
        >
            {children}
        </h2>
    );
}