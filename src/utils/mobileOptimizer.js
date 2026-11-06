import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initMobileOptimizer = () => {
  if (typeof window === 'undefined') return;

  const handleDeviceCheck = () => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      document.documentElement.classList.add('is-mobile-viewport');
      document.body.classList.add('is-mobile-viewport');

      // Prevent mobile address bar show/hide from thrashing scroll animations
      ScrollTrigger.config({
        ignoreMobileResize: true,
        autoRefreshEvents: "DOMContentLoaded,load,orientationchange"
      });

      // Normalize scroll speed for touch devices
      ScrollTrigger.normalizeScroll(true);
    } else {
      document.documentElement.classList.remove('is-mobile-viewport');
      document.body.classList.remove('is-mobile-viewport');
      ScrollTrigger.normalizeScroll(false);
    }

    // Refresh triggers with updated layout dimensions
    ScrollTrigger.refresh();
  };

  handleDeviceCheck();

  let resizeTimer;
  const onResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleDeviceCheck, 200);
  };

  window.addEventListener('resize', onResize, { passive: true });
  window.addEventListener('orientationchange', onResize, { passive: true });
};