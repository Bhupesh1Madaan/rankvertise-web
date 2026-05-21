import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Navbar.css';

const Navbar = ({
    className = '',
    ease = 'power3.out',
    baseColor = 'rgba(26, 5, 8, 0.95)', // Premium Maroon Blur tint
    menuColor = '#f5ebe0',               // Beige Hamburger lines
    buttonBgColor = '#801a24',           // Solid Maroon button
    buttonTextColor = '#f5ebe0'          // Beige text
}) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const navRef = useRef(null);
    const cardsRef = useRef([]);
    const tlRef = useRef(null);

    // Saara Navigation menu content cards ke format mein split kiya
    const items = [
        {
            label: "Explore",
            bgColor: "#2a0b10",
            textColor: "#f5ebe0",
            links: [
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about-us" },
                { label: "Plans & Pricing", href: "#plans-and-pricing" }
            ]
        },
        {
            label: "Work",
            bgColor: "#3d0f16",
            textColor: "#f5ebe0",
            links: [
                { label: "Portfolio", href: "#portfolio" },
                { label: "Services", href: "#services" },
                { label: "Blogs", href: "#blogs" }
            ]
        },
        {
            label: "Connect",
            bgColor: "#54141e",
            textColor: "#f5ebe0",
            links: [
                { label: "Instagram", href: "https://www.instagram.com/rankvertise/" },
                { label: "LinkedIn", href: "https://www.linkedin.com/company/rankvertise/" }
            ]
        }
    ];

    const calculateHeight = () => {
        const navEl = navRef.current;
        if (!navEl) return 320;

        const contentEl = navEl.querySelector('.card-nav-content');
        if (contentEl) {
            const wasVisible = contentEl.style.visibility;
            const wasPointerEvents = contentEl.style.pointerEvents;
            const wasPosition = contentEl.style.position;
            const wasHeight = contentEl.style.height;

            contentEl.style.visibility = 'visible';
            contentEl.style.pointerEvents = 'auto';
            contentEl.style.position = 'static';
            contentEl.style.height = 'auto';

            contentEl.offsetHeight;

            const topBar = 70;
            const padding = 24;
            const contentHeight = contentEl.scrollHeight;

            contentEl.style.visibility = wasVisible;
            contentEl.style.pointerEvents = wasPointerEvents;
            contentEl.style.position = wasPosition;
            contentEl.style.height = wasHeight;

            return topBar + contentHeight + padding;
        }
        return 320;
    };

    const createTimeline = () => {
        const navEl = navRef.current;
        if (!navEl) return null;

        gsap.set(navEl, { height: 70, overflow: 'hidden' });
        gsap.set(cardsRef.current, { y: 40, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        tl.to(navEl, {
            height: calculateHeight,
            duration: 0.4,
            ease
        });

        tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

        return tl;
    };

    useLayoutEffect(() => {
        const tl = createTimeline();
        tlRef.current = tl;

        return () => {
            tl?.kill();
            tlRef.current = null;
        };
    }, [ease]);

    useLayoutEffect(() => {
        const handleResize = () => {
            if (!tlRef.current) return;

            if (isExpanded) {
                const newHeight = calculateHeight();
                gsap.set(navRef.current, { height: newHeight });

                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                    newTl.progress(1);
                    tlRef.current = newTl;
                }
            } else {
                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                    tlRef.current = newTl;
                }
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isExpanded]);

    const toggleMenu = () => {
        const tl = tlRef.current;
        if (!tl) return;
        if (!isExpanded) {
            setIsHamburgerOpen(true);
            setIsExpanded(true);
            tl.play(0);
        } else {
            setIsHamburgerOpen(false);
            tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
            tl.reverse();
        }
    };

    const setCardRef = i => el => {
        if (el) cardsRef.current[i] = el;
    };

    return (
        <div className={`card-nav-container ${className}`}>
            <nav ref={navRef} className={`card-nav ${isExpanded ? 'open' : ''}`} style={{ backgroundColor: baseColor }}>
                <div className="card-nav-top">
                    <div
                        className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                        role="button"
                        aria-label={isExpanded ? 'Close menu' : 'Open menu'}
                        tabIndex={0}
                        style={{ color: menuColor }}
                    >
                        <div className="hamburger-line" />
                        <div className="hamburger-line" />
                    </div>

                    <div className="logo-container">
                        <span className="logo-text">Rank<span>vertise</span></span>
                    </div>

                    <a
                        href="https://www.rankvertise.in/consultation"
                        target="_blank"
                        rel="noreferrer"
                        className="card-nav-cta-button"
                        style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
                    >
                        Get Started
                    </a>
                </div>

                <div className="card-nav-content" aria-hidden={!isExpanded}>
                    {(items || []).slice(0, 3).map((item, idx) => (
                        <div
                            key={`${item.label}-${idx}`}
                            className="nav-card"
                            ref={setCardRef(idx)}
                            style={{ backgroundColor: item.bgColor, color: item.textColor }}
                        >
                            <div className="nav-card-label">{item.label}</div>
                            <div className="nav-card-links">
                                {item.links?.map((lnk, i) => (
                                    <a key={`${lnk.label}-${i}`} className="nav-card-link" href={lnk.href}>
                                        {/* Inline SVG for cross icon */}
                                        <svg className="nav-card-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                        {lnk.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;