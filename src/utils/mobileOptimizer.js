import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Universal Mobile Hardware Acceleration & Animation Streamlining Engine
 * Mobile screens par heavy pinning aur resource-intensive transforms ko bypass karta hai,
 * jabki text animations aur core layouts naturally render hote hain.
 */
export const initMobileOptimizer = () => {
    if (typeof window === 'undefined') return;

    const checkMobile = () => window.innerWidth <= 768;

    const applyOptimization = () => {
        const isMobile = checkMobile();

        if (isMobile) {
            document.documentElement.classList.add('is-mobile-device');
            document.body.classList.add('is-mobile-device');

            // GSAP settings for mobile: Smooth touch & kill laggy scroll recalculations
            if (ScrollTrigger) {
                ScrollTrigger.config({
                    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load", // resize storms prevent karega
                    ignoreMobileResize: true // Mobile URL bar expand/collapse jitter fix
                });
            }
        } else {
            document.documentElement.classList.remove('is-mobile-device');
            document.body.classList.remove('is-mobile-device');
        }
    };

    applyOptimization();

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            applyOptimization();
            if (ScrollTrigger) ScrollTrigger.refresh();
        }, 200);
    }, { passive: true });
};