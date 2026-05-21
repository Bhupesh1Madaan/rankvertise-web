import { useRef, useEffect, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import './MagicBento.css';

const DEFAULT_PARTICLE_COUNT = 10;
const DEFAULT_SPOTLIGHT_RADIUS = 280;
const DEFAULT_GLOW_COLOR = '128, 26, 36'; // Maroon core theme glow
const MOBILE_BREAKPOINT = 768;

// Extracted real track data from blueprint sheet mapped correctly
const cardData = [
    {
        color: '#2a0b10',
        title: '10+ Years',
        description: 'Relentless dominance in the digital industry space.',
        label: 'EXPERIENCE',
        sizeClass: 'bento-large'
    },
    {
        color: '#1a0508',
        title: '100+ Brands',
        description: 'Satisfied global clients who scaled their presence with us.',
        label: 'TRUSTED BY',
        sizeClass: 'bento-small'
    },
    {
        color: '#1a0508',
        title: '20+ Master Campaigns',
        description: 'High-velocity creative concepts engineered for viral impact.',
        label: 'DELIVERED',
        sizeClass: 'bento-small'
    },
    {
        color: '#3d0f16',
        title: '3 Countries',
        description: 'Cross-border operations syncing internet trends globally.',
        label: 'MARKET REACH',
        sizeClass: 'bento-medium'
    }
];

const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
    const el = document.createElement('div');
    el.className = 'bento-particle';
    el.style.cssText = `
    position: absolute; width: 4px; height: 4px; border-radius: 50%;
    background: rgba(${color}, 1); box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none; z-index: 100; left: ${x}px; top: ${y}px;
  `;
    return el;
};

const ParticleCard = ({ children, className = '', disableAnimations = false, style, particleCount = DEFAULT_PARTICLE_COUNT, glowColor = DEFAULT_GLOW_COLOR, enableTilt = true, clickEffect = true, enableMagnetism = true }) => {
    const cardRef = useRef(null);
    const particlesRef = useRef([]);
    const timeoutsRef = useRef([]);
    const isHoveredRef = useRef(false);
    const memoizedParticles = useRef([]);
    const particlesInitialized = useRef(false);
    const magnetismAnimationRef = useRef(null);

    const initializeParticles = useCallback(() => {
        if (particlesInitialized.current || !cardRef.current) return;
        const { width, height } = cardRef.current.getBoundingClientRect();
        memoizedParticles.current = Array.from({ length: particleCount }, () =>
            createParticleElement(Math.random() * width, Math.random() * height, glowColor)
        );
        particlesInitialized.current = true;
    }, [particleCount, glowColor]);

    const clearAllParticles = useCallback(() => {
        timeoutsRef.current.forEach(clearTimeout); timeoutsRef.current = [];
        magnetismAnimationRef.current?.kill();
        particlesRef.current.forEach(particle => {
            gsap.to(particle, { scale: 0, opacity: 0, duration: 0.3, onComplete: () => particle.parentNode?.removeChild(particle) });
        });
        particlesRef.current = [];
    }, []);

    const animateParticles = useCallback(() => {
        if (!cardRef.current || !isHoveredRef.current) return;
        if (!particlesInitialized.current) initializeParticles();

        memoizedParticles.current.forEach((particle, index) => {
            const timeoutId = setTimeout(() => {
                if (!isHoveredRef.current || !cardRef.current) return;
                const clone = particle.cloneNode(true);
                cardRef.current.appendChild(clone);
                particlesRef.current.push(clone);
                gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3 });
                gsap.to(clone, { x: (Math.random() - 0.5) * 80, y: (Math.random() - 0.5) * 80, duration: 2 + Math.random() * 2, repeat: -1, yoyo: true, ease: 'none' });
            }, index * 120);
            timeoutsRef.current.push(timeoutId);
        });
    }, [initializeParticles]);

    useEffect(() => {
        if (disableAnimations || !cardRef.current) return;
        const element = cardRef.current;

        const handleMouseEnter = () => { isHoveredRef.current = true; animateParticles(); };
        const handleMouseLeave = () => { isHoveredRef.current = false; clearAllParticles(); gsap.to(element, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: 0.3 }); };
        const handleMouseMove = e => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left, y = e.clientY - rect.top;
            const cX = rect.width / 2, cY = rect.height / 2;
            if (enableTilt) gsap.to(element, { rotateX: ((y - cY) / cY) * -6, rotateY: ((x - cX) / cX) * 6, duration: 0.1, transformPerspective: 1000 });
            if (enableMagnetism) magnetismAnimationRef.current = gsap.to(element, { x: (x - cX) * 0.03, y: (y - cY) * 0.03, duration: 0.2 });
        };

        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
        element.addEventListener('mousemove', handleMouseMove);
        return () => {
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
            element.removeEventListener('mousemove', handleMouseMove);
            clearAllParticles();
        };
    }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism]);

    return <div ref={cardRef} className={`${className} particle-container`} style={{ ...style, position: 'relative', overflow: 'hidden' }}>{children}</div>;
};

const GlobalSpotlight = ({ gridRef, disableAnimations = false, enabled = true, spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS, glowColor = DEFAULT_GLOW_COLOR }) => {
    useEffect(() => {
        if (disableAnimations || !gridRef?.current || !enabled) return;
        const spotlight = document.createElement('div');
        spotlight.className = 'bento-global-spotlight';
        spotlight.style.cssText = `position: fixed; width: 600px; height: 600px; border-radius: 50%; pointer-events: none; background: radial-gradient(circle, rgba(${glowColor}, 0.12) 0%, transparent 70%); z-index: 200; opacity: 0; transform: translate(-50%, -50%); mix-blend-mode: screen;`;
        document.body.appendChild(spotlight);

        const handleMouseMove = e => {
            if (!gridRef.current) return;
            const rect = gridRef.current.getBoundingClientRect();
            const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
            gsap.to(spotlight, { opacity: inside ? 1 : 0, left: e.clientX, top: e.clientY, duration: 0.1 });

            gridRef.current.querySelectorAll('.magic-bento-card').forEach(card => {
                const cRect = card.getBoundingClientRect();
                const relativeX = ((e.clientX - cRect.left) / cRect.width) * 100;
                const relativeY = ((e.clientY - cRect.top) / cRect.height) * 100;
                card.style.setProperty('--glow-x', `${relativeX}%`);
                card.style.setProperty('--glow-y', `${relativeY}%`);
                card.style.setProperty('--glow-intensity', inside ? '1' : '0');
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => { document.removeEventListener('mousemove', handleMouseMove); spotlight.remove(); };
    }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);
    return null;
};

export default function MagicBento() {
    const gridRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkSize = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
        checkSize(); window.addEventListener('resize', checkSize);
        return () => window.removeMirror || window.removeEventListener('resize', checkSize);
    }, []);

    return (
        <section className="bento-outer-wrapper">
            <div className="bento-text-header">
                <p className="bento-tagline">Track Record of Success</p>
                <h2 className="bento-main-heading">FACTS & FIGURES THAT DELIVER ROI</h2>
            </div>

            <GlobalSpotlight gridRef={gridRef} disableAnimations={isMobile} enabled={true} />

            <div className="card-grid bento-section" ref={gridRef}>
                {cardData.map((card, index) => (
                    <ParticleCard key={index} className={`magic-bento-card ${card.sizeClass} magic-bento-card--border-glow`} style={{ backgroundColor: card.color, '--glow-color': DEFAULT_GLOW_COLOR }} disableAnimations={isMobile} enableTilt={true} enableMagnetism={true}>
                        <div className="magic-bento-card__header">
                            <div className="magic-bento-card__label">{card.label}</div>
                        </div>
                        <div className="magic-bento-card__content">
                            <h2 className="magic-bento-card__title">{card.title}</h2>
                            <p className="magic-bento-card__description">{card.description}</p>
                        </div>
                    </ParticleCard>
                ))}
            </div>
        </section>
    );
}