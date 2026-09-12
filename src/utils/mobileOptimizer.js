import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const initMobileOptimizer = () => {
  if (typeof window === 'undefined') return;

  const handleDeviceCheck = () => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      document.documentElement.classList.add('is-mobile-viewport');
      document.body.classList.add('is-mobile-viewport');

      // Mobile browser address bar scroll par resize events fire karta hai,
      // usse animations reload/jump na ho isliye ignoreMobileResize enable karein:
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.config({
          ignoreMobileResize: true,
          autoRefreshEvents: "DOMContentLoaded,load"
        });
      }
    } else {
      document.documentElement.classList.remove('is-mobile-viewport');
      document.body.classList.remove('is-mobile-viewport');
    }
  };

  handleDeviceCheck();

  let timeoutId;
  window.addEventListener('resize', () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      handleDeviceCheck();
    }, 200);
  }, { passive: true });
};