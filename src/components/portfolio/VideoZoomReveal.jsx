import React, { useState, useEffect, useRef } from 'react';

export default function VideoZoomReveal() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFullyZoomed, setIsFullyZoomed] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      // Pure container ki bounds aur screen scroll positions calculate karna
      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = rect.top + window.scrollY;
      const currentScrollWithinContainer = window.scrollY - containerTop;
      const maxScrollDistance = containerRef.current.scrollHeight - window.innerHeight;

      // Scroll progress mapping (0 se 1 ke beech)
      const progress = Math.min(Math.max(currentScrollWithinContainer / maxScrollDistance, 0), 1);
      setScrollProgress(progress);

      // 40% scroll par video full zoom lock ho jayegi
      if (progress >= 0.4) {
        setIsFullyZoomed(true);
      } else {
        setIsFullyZoomed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scale computation (1x se 100x scale tak smoothly expand hoga)
  const zoomProgress = Math.min(scrollProgress / 0.4, 1);
  const boxScale = 1 + zoomProgress * 99;

  // Bacha hua 60% scroll data text content reveal aur slide up ke liye mapping kiya hai
  const textProgress = scrollProgress > 0.4 ? (scrollProgress - 0.4) / 0.6 : 0;

  return (
    // 🎨 Theme Sync: Pure canvas container locked to Luxury Deep Maroon (#1a0508)
    <div ref={containerRef} style={{ height: '300vh', backgroundColor: '#1a0508', position: 'relative' }}>
      
      {/* PINNED WRAPPER */}
      <div style={{
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>

        {/* CENTER VIDEO MASK BOX */}
        <div style={{
          width: '15px',
          height: '15px',
          backgroundColor: '#801a24', // Luxury Maroon border accent drop during expansion
          borderRadius: isFullyZoomed ? '0px' : '8px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: `scale(${boxScale})`,
          transition: 'transform 0.05s ease-out, border-radius 0.15s ease-out',
          willChange: 'transform',
          zIndex: 1
        }}>
          {/* Inside Video Element */}
          <video
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-41767-large.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              transform: `scale(${1 / boxScale})`, 
              transition: 'transform 0.05s ease-out',
              willChange: 'transform',
              opacity: 0.45 // Video opacity dimmed slightly for premium editorial content readability
            }}
          />
        </div>

        {/* ── FADE-IN LUXURY CONTENT REVEAL ── */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) translateY(${(1 - textProgress) * 40}px)`,
          width: '100%',
          maxWidth: '900px',
          padding: '0 40px',
          textAlign: 'center',
          color: '#f5ebe0', // Premium Soft Beige Text
          fontFamily: 'sans-serif',
          opacity: textProgress,
          zIndex: 2,
          pointerEvents: textProgress > 0.5 ? 'auto' : 'none',
          transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
        }}>
          {/* 🎨 Luxury Editorial Typography Tags & Headers */}
          <span style={{ 
            color: '#d4a373', 
            fontSize: '1rem', 
            fontWeight: '800', 
            letterSpacing: '4px', 
            textTransform: 'uppercase', 
            display: 'block',
            marginBottom: '20px'
          }}>
            Our Executive Vision
          </span>
          
          <h2 style={{ 
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', 
            fontWeight: '900', 
            color: '#f5ebe0', 
            letterSpacing: '-1.5px',
            lineHeight: '1.1',
            marginBottom: '2rem'
          }}>
            Scaling Capital Through <br/>
            <span style={{ color: '#801a24' }}>Digital Authority.</span>
          </h2>
          
          <p style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)', lineHeight: '1.7', color: 'rgba(245, 235, 224, 0.8)', marginBottom: '1.5rem' }}>
            At Rankvertise, we discard conventional vanity metrics. True digital marketing isn't about generating arbitrary clicks—it is about orchestrating premium consumer acquisition funnels that optimize enterprise yield.
          </p>
          
          <p style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)', lineHeight: '1.7', color: 'rgba(245, 235, 224, 0.8)', marginBottom: '2.5rem' }}>
            We engineering custom performance infrastructures, aligning semantic organic search systems and dynamic deployment models to guarantee conversion velocity for high-ticket brands.
          </p>

          <button style={{
            backgroundColor: '#801a24',
            color: '#f5ebe0',
            border: '1px solid rgba(245, 235, 224, 0.15)',
            padding: '16px 36px',
            fontSize: '1rem',
            fontWeight: '700',
            borderRadius: '50px',
            cursor: 'pointer',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
          }}>
            Deploy Our Framework
          </button>
        </div>

      </div>
    </div>
  );
}