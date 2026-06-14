import React, { useState, useEffect } from 'react';

export default function ClientsShowcase() {
  const [activeClientIndex, setActiveClientIndex] = useState(0);

  // 🎨 Real Agency Client Case Studies optimized with Luxury Palette constraints
  const clientsData = [
    {
      id: "client-0",
      name: "Aura FinTech",
      tagline: "Scaled search visibility by 340% within the first two quarters, capturing high-intent investment cohorts seamlessly.",
      accentColor: "#d4a373", // Muted Gold Accent
      creatives: [
        "https://picsum.photos/600/800?random=10",
        "https://picsum.photos/600/800?random=11",
        "https://picsum.photos/600/800?random=12",
      ]
    },
    {
      id: "client-1",
      name: "Nexa Luxury Retail",
      tagline: "Engineered high-converting funnel systems reducing acquisition costs by 42% while protecting brand premiums.",
      accentColor: "#801a24", // Crimson Maroon Accent
      creatives: [
        "https://picsum.photos/600/800?random=20",
        "https://picsum.photos/600/800?random=21",
        "https://picsum.photos/600/800?random=22",
      ]
    },
    {
      id: "client-2",
      name: "Quantum SaaS Enterprise",
      tagline: "Deployed algorithmic semantic content networks that captured sustainable organic pipeline dominance.",
      accentColor: "#d4a373", // Muted Gold Accent
      creatives: [
        "https://picsum.photos/600/800?random=30",
        "https://picsum.photos/600/800?random=31",
        "https://picsum.photos/600/800?random=32",
      ]
    }
  ];

  useEffect(() => {
    // Intersection Observer configuration tracking right side active sections
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -40% 0px", // Sharp center area focal lock
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.id.split('-')[1]);
          setActiveClientIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    clientsData.forEach((client) => {
      const el = document.getElementById(client.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    // 🎨 Theme Sync: Locked background canvas to Luxury Deep Maroon (#1a0508)
    <div style={{ backgroundColor: '#1a0508', minHeight: '100vh', width: '100vw', fontFamily: 'sans-serif', position: 'relative' }}>
      
      {/* SECTION MAIN HEADING (Sticky Top) */}
      <div style={{
        position: 'sticky',
        top: 0,
        width: '100vw',
        zIndex: 30,
        padding: '50px 8% 30px 8%',
        backgroundColor: '#1a0508',
        borderBottom: '1px solid rgba(245, 235, 224, 0.05)'
      }}>
        <h2 style={{ fontSize: '1rem', letterSpacing: '4px', color: '#d4a373', fontWeight: '800', margin: 0, textTransform: 'uppercase' }}>
          Strategic Partnerships & Impact
        </h2>
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div style={{
        display: 'flex',
        padding: '0 8%',
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative'
      }}>
        
        {/* LEFT COLUMN: Sticky Details Box Container */}
        <div style={{
          width: '45%',
          height: 'calc(100vh - 150px)',
          position: 'sticky',
          top: '150px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingRight: '6%',
          boxSizing: 'border-box',
        }}>
          {clientsData.map((client, index) => {
            const isActive = index === activeClientIndex;
            return (
              <div
                key={client.id}
                style={{
                  position: 'absolute',
                  maxWidth: '460px',
                  color: '#f5ebe0', // Premium Beige base text
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0px)' : 'translateY(40px)',
                  visibility: isActive ? 'visible' : 'hidden',
                  transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.7s',
                }}
              >
                {/* Monogram Monolith Icon Grid */}
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  backgroundColor: client.accentColor,
                  color: '#1a0508', // Text inside icon set to Deep Maroon for high visibility contrast
                  marginBottom: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: '900',
                  boxShadow: `0 20px 40px -10px ${client.accentColor}44`,
                  border: '1px solid rgba(245, 235, 224, 0.2)'
                }}>
                  {client.name[0]}
                </div>

                {/* Brand Title */}
                <h3 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.6rem)', margin: '0 0 20px 0', fontWeight: '900', letterSpacing: '-1.5px', color: '#f5ebe0', lineHeight: '1.1' }}>
                  {client.name}
                </h3>

                {/* Performance Narrative */}
                <p style={{ fontSize: '1.2rem', lineHeight: '1.75', color: 'rgba(245, 235, 224, 0.7)', margin: 0 }}>
                  {client.tagline}
                </p>
              </div>
            );
          })}
        </div>

        {/* RIGHT COLUMN: Continuous Scrolling Images Assets */}
        <div style={{ width: '55%', display: 'flex', flexDirection: 'column', gap: '120px', paddingBottom: '40vh' }}>
          {clientsData.map((client) => (
            <div 
              key={client.id} 
              id={client.id}
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '50px',
                minHeight: '100vh',
                justifyContent: 'center',
                paddingTop: '60px'
              }}
            >
              {client.creatives.map((imgUrl, imgIndex) => (
                <div
                  key={imgIndex}
                  style={{
                    width: '100%',
                    height: '560px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 40px 80px -25px rgba(0,0,0,0.8)',
                    backgroundColor: '#1a0508',
                    border: '1px solid rgba(245, 235, 224, 0.06)',
                    transition: 'transform 0.4s ease',
                  }}
                >
                  <img
                    src={imgUrl}
                    alt={`${client.name} Asset Deployment ${imgIndex + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}