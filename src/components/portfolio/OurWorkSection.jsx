import React, { useState, useEffect, useRef } from 'react';

export default function OurWorkSection() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollTop = window.scrollY;
      const offsetTop = containerRef.current.offsetTop;
      const totalHeight = containerRef.current.scrollHeight - window.innerHeight;
      
      const currentScroll = scrollTop - offsetTop;
      const progress = Math.min(Math.max(currentScroll / totalHeight, 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🎨 Real Agency Deliverables Data Array with high-end premium marketing placeholders
  const projects = [
    { title: "Enterprise SEO Architecture", img: "https://picsum.photos/600/450?random=1" },
    { title: "High-Ticket Funnel Engineering", img: "https://picsum.photos/600/450?random=2" },
    { title: "SaaS Performance Marketing", img: "https://picsum.photos/600/450?random=3" },
    { title: "Brand Identity & Positioning", img: "https://picsum.photos/600/450?random=4" },
    { title: "Conversion Velocity UI/UX", img: "https://picsum.photos/600/450?random=5" },
    { title: "Predictive Analytics Systems", img: "https://picsum.photos/600/450?random=6" },
    { title: "E-Commerce Scale Engine", img: "https://picsum.photos/600/450?random=7" },
    { title: "Web3 Enterprise Strategy", img: "https://picsum.photos/600/450?random=8" },
    { title: "Automated Lifecycle Loops", img: "https://picsum.photos/600/450?random=9" },
    { title: "Paid Acquisition Frameworks", img: "https://picsum.photos/600/450?random=10" },
    { title: "Semantic Content Networks", img: "https://picsum.photos/600/450?random=11" },
    { title: "Enterprise Lead Funnels", img: "https://picsum.photos/600/450?random=12" }
  ];

  // --- ANIMATION MATHS ---
  // Heading Movement (0% se 15% scroll progress tak)
  const headingProgress = Math.min(scrollProgress / 0.15, 1);
  const headingTop = 5 + headingProgress * 45; // 5% se center (50%) tak linear movement
  const headingSize = 5 - headingProgress * 1.2;

  // Images Movement (15% se 100% scroll progress tak trigger hogi)
  const imagesSectionProgress = scrollProgress > 0.15 ? (scrollProgress - 0.15) / 0.85 : 0;

  return (
    // 🎨 Theme Sync: Container background updated to Luxury Deep Maroon (#1a0508)
    <div ref={containerRef} style={{ height: '650vh', backgroundColor: '#1a0508', position: 'relative' }}>
      
      {/* STICKY SCREEN */}
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

        {/* ── MOVING HEADING (Rankvertise Editorial Look) ── */}
        <h1 style={{
          position: 'absolute',
          top: `${headingTop}%`,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: `${headingSize}rem`,
          fontWeight: '900',
          color: '#f5ebe0', // Premium Soft Beige Text
          letterSpacing: '6px',
          fontFamily: 'sans-serif',
          margin: 0,
          zIndex: 10,
          whiteSpace: 'nowrap',
          textShadow: '0px 10px 30px rgba(0, 0, 0, 0.9)',
          // Glassmorphism block utilizing the core palette translucent values
          backgroundColor: headingProgress > 0.9 ? 'rgba(26, 5, 8, 0.65)' : 'transparent',
          border: headingProgress > 0.9 ? '1px solid rgba(245, 235, 224, 0.08)' : '1px solid transparent',
          padding: '12px 40px',
          borderRadius: '50px',
          backdropFilter: headingProgress > 0.9 ? 'blur(12px)' : 'none',
          transition: 'font-size 0.08s ease-out, backdrop-filter 0.3s, border 0.3s',
          opacity: scrollProgress > 0.96 ? 1 - (scrollProgress - 0.96) * 25 : 1
        }}>
          CASE <span style={{ color: '#801a24' }}>STUDIES</span>
        </h1>

        {/* IMAGES AREA */}
        <div style={{ position: 'relative', width: '100%', height: '100%', zIndex: 5 }}>
          {projects.map((item, index) => {
            const totalImages = projects.length;
            const sectionPerImage = 1 / totalImages;
            
            const imgStart = index * sectionPerImage;
            const imgEnd = imgStart + sectionPerImage;

            let yPos = 120; // Bottom boundary setup
            let opacity = 0;
            let scale = 0.85;

            if (imagesSectionProgress >= imgStart && imagesSectionProgress <= imgEnd) {
              const imgProgress = (imagesSectionProgress - imgStart) / sectionPerImage;

              if (imgProgress < 0.25) {
                // Entrance Phase (Bottom to Center)
                const enterProgress = imgProgress / 0.25;
                yPos = 120 - enterProgress * 120;
                opacity = enterProgress;
                scale = 0.85 + enterProgress * 0.15;
              } else if (imgProgress >= 0.25 && imgProgress <= 0.75) {
                // Pinned Active Phase (Holds perfectly in center)
                yPos = 0;
                opacity = 1;
                scale = 1;
              } else {
                // Exit Phase (Center to Top)
                const exitProgress = (imgProgress - 0.75) / 0.25;
                yPos = -exitProgress * 120;
                opacity = 1 - exitProgress;
                scale = 1 - exitProgress * 0.15;
              }
            } else if (imagesSectionProgress > imgEnd) {
              yPos = -120; // Off-screen exit state configuration
              opacity = 0;
            }

            // --- ALTERNATING LAYOUT LOGIC ---
            const isLeft = index % 2 === 0;
            const sideProperty = isLeft ? { left: '8%' } : { right: '8%' };
            const rotationDegree = isLeft ? (index % 3 === 0 ? '-2deg' : '-0.5deg') : (index % 3 === 0 ? '2deg' : '0.5deg');

            return (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  top: '25%', 
                  ...sideProperty,
                  width: '38%',
                  maxWidth: '520px',
                  height: '380px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  // Luxury shadow layout separating assets from the background canvas
                  boxShadow: '0 40px 80px -20px rgba(0,0,0,0.85)',
                  border: '1px solid rgba(214, 163, 115, 0.15)', // Light Muted Gold border touch
                  transform: `translateY(${yPos}vh) scale(${scale}) rotate(${rotationDegree})`,
                  opacity: opacity,
                  willChange: 'transform, opacity',
                  transition: 'transform 0.05s ease-out, opacity 0.05s ease-out',
                }}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                
                {/* ── IMAGE INFO OVERLAY LABEL ── */}
                <div style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  backgroundColor: 'rgba(26, 5, 8, 0.85)', // Deep maroon backing
                  backdropFilter: 'blur(12px)',
                  color: '#f5ebe0',
                  padding: '10px 24px',
                  borderRadius: '30px',
                  fontFamily: 'sans-serif',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  border: '1px solid rgba(214, 163, 115, 0.3)', // Custom Muted Gold border framing
                  boxShadow: '0 10px 20px rgba(0,0,0,0.4)'
                }}>
                  <span style={{ color: '#801a24', marginRight: '8px' }}>•</span> {item.title}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}