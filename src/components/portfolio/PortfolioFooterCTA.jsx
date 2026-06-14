import React from 'react';

export default function PortfolioFooterCTA() {
  const metrics = [
    { value: "$14M+", label: "Ad Spend Engineered" },
    { value: "4.2x", label: "Avg. ROAS Scale" },
    { value: "380%", label: "Organic Yield Surge" },
    { value: "12+", label: "Global Enterprise Brands" }
  ];

  return (
    <div style={{ backgroundColor: '#1a0508', width: '100vw', fontFamily: 'sans-serif' }}>
      
      {/* ── PART A: METRICS GRID SECTION ── */}
      <div style={{
        padding: '120px 8%',
        borderTop: '1px solid rgba(245, 235, 224, 0.08)',
        borderBottom: '1px solid rgba(245, 235, 224, 0.08)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '60px',
        textAlign: 'center'
      }}>
        {metrics.map((item, idx) => (
          <div key={idx} style={{ padding: '20px' }}>
            {/* Gold Bold Counter Value */}
            <h3 style={{ 
              fontSize: 'clamp(3rem, 5vw, 4.2rem)', 
              fontWeight: '900', 
              color: '#d4a373', 
              margin: '0 0 12px 0',
              letterSpacing: '-2px'
            }}>
              {item.value}
            </h3>
            {/* Soft Beige Description Label */}
            <p style={{ 
              fontSize: '0.95rem', 
              textTransform: 'uppercase', 
              letterSpacing: '3px', 
              color: 'rgba(245, 235, 224, 0.6)', 
              fontWeight: '600',
              margin: 0 
            }}>
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* ── PART B: THE GRAND CLOSING HERO CTA ── */}
      <div style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 8%',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle background crimson aura glow */}
        <div style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          backgroundColor: '#801a24',
          filter: 'blur(180px)',
          opacity: 0.15,
          zIndex: 1,
          pointerEvents: 'none'
        }} />

        <div style={{ zIndex: 2, maxWidth: '850px' }}>
          <span style={{ 
            color: '#d4a373', 
            fontSize: '1rem', 
            fontWeight: '800', 
            letterSpacing: '5px', 
            textTransform: 'uppercase', 
            display: 'block',
            marginBottom: '24px'
          }}>
            Vanguard Allocation
          </span>
          
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4.4rem)', 
            fontWeight: '900', 
            color: '#f5ebe0', 
            letterSpacing: '-2px',
            lineHeight: '1.05',
            marginBottom: '2rem'
          }}>
            Ready to Command Your <br/>
            <span style={{ color: '#801a24' }}>Digital Ecosystem?</span>
          </h2>
          
          <p style={{ 
            fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)', 
            lineHeight: '1.7', 
            color: 'rgba(245, 235, 224, 0.7)', 
            marginBottom: '3.5rem',
            padding: '0 5%'
          }}>
            We deliberately restrict onboarding to two enterprise accounts per operational phase. This ensures elite bandwidth and surgical execution for your asset portfolio.
          </p>

          {/* Premium High Ticket CTA Button */}
          <button style={{
            backgroundColor: 'transparent',
            color: '#f5ebe0',
            border: '2px solid #d4a373', // Muted Gold Outer Ring Frame
            padding: '20px 48px',
            fontSize: '1.05rem',
            fontWeight: '800',
            borderRadius: '50px',
            cursor: 'pointer',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#d4a373';
            e.currentTarget.style.color = '#1a0508';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#f5ebe0';
          }}
          >
            Request Private Briefing
          </button>
        </div>
      </div>

    </div>
  );
}