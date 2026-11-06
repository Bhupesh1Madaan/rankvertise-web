import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import './OrbitImages.css';

const DEFAULT_ORBIT_CLIENTS = [
  { 
    name: "FinTech Labs", 
    logo: "https://static.wixstatic.com/media/4fce5e_f579dec309b24713bbbacae25da05c5c~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/18.png" 
  },
  { 
    name: "Alpha Ventures", 
    logo: "https://static.wixstatic.com/media/4fce5e_3a747d46d465459cb71669eb0a5e7a10~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/17.png" 
  },
  { 
    name: "Next Core", 
    logo: "https://static.wixstatic.com/media/4fce5e_23443126bf6443f0b7e88ffc57d846be~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/19.png" 
  },
  { 
    name: "Meta Matrix", 
    logo: "https://static.wixstatic.com/media/4fce5e_4dfc40799fb242479d108fa60e46653c~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/14.png" 
  },
  { 
    name: "Quantum Digit", 
    logo: "https://static.wixstatic.com/media/4fce5e_40e22c72ffb9402e9c8ee15d632cf7e2~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/15.png" 
  }
];

export function ClientOrbitSection() {
  const { getVal } = useData();
  const navigate = useNavigate();

  // CMS se dynamic client data read karega (string arrays & object arrays both supported)
  const rawClients = getVal('client_orbit_data', DEFAULT_ORBIT_CLIENTS);

  const clientsList = useMemo(() => {
    if (!Array.isArray(rawClients) || rawClients.length === 0) return DEFAULT_ORBIT_CLIENTS;
    return rawClients.map((item, idx) => {
      if (typeof item === 'string') {
        return { name: `Partner ${idx + 1}`, logo: item };
      }
      return {
        name: item.name || `Partner ${idx + 1}`,
        logo: item.logo || DEFAULT_ORBIT_CLIENTS[idx % DEFAULT_ORBIT_CLIENTS.length].logo
      };
    });
  }, [rawClients]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleNavigatePortfolio = () => {
    navigate('/portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="orbit-showcase-section" onMouseMove={handleMouseMove}>
      <div className="orbit-section-header">
        <span className="orbit-label">ENTERPRISE TRUST</span>
        <h2 className="orbit-main-title">Brands Scaled Across Global Markets</h2>
        <p className="orbit-sub-text">
          Explore data-backed organic growth, performance campaigns, and bespoke technology architectures we’ve deployed for modern brands.
        </p>
      </div>

      <div className="collage-grid-viewport">
        {clientsList.map((client, idx) => (
          <div 
            key={idx}
            className="collage-brand-card"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={handleNavigatePortfolio}
          >
            <div className="collage-card-inner">
              <img
                src={client.logo}
                alt={client.name}
                draggable={false}
                className="collage-brand-image"
              />
            </div>
            <div className="collage-card-action">
              <span>View Case Study ↗</span>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Cursor Follower */}
      {hoveredIdx !== null && (
        <div 
          className="collage-floating-tooltip"
          style={{
            transform: `translate(${mousePos.x + 14}px, ${mousePos.y + 14}px)`
          }}
        >
          View Details ↗
        </div>
      )}
    </section>
  );
}

export default ClientOrbitSection;