import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, Scroll, useScroll } from '@react-three/drei';

// 1. Cube Component: Jo scroll ke mutabik move aur rotate hoga
function MovingCube() {
  const cubeRef = useRef();
  const scrollData = useScroll();

  useFrame(() => {
    // scrollData.offset ki value 0 se 1 tak jati hai jaise hi user scroll karta hai
    const offset = scrollData.offset;

    // Cube ko left side move karna (0 se -2.5 tak)
    cubeRef.current.position.x = -offset * 2.5;

    // Cube ko thoda rotate karna taaki scroll animation cool lage
    cubeRef.current.rotation.x = offset * 2;
    cubeRef.current.rotation.y = offset * 3;
    
    // Scale (size) management
    cubeRef.current.scale.setScalar(1 + offset * 0.2);
  });

  return (
    <mesh ref={cubeRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      {/* 🎨 Color Changed: Muted Gold Finish (#d4a373) with higher metalness for Luxury Theme */}
      <meshStandardMaterial color="#d4a373" roughness={0.2} metalness={0.7} />
    </mesh>
  );
}

// 2. Exporting the Main Modular Component
export default function Cube3D() {
  return (
    // 🎨 Color Changed: Background updated to Luxury Deep Maroon (#1a0508)
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#1a0508', overflow: 'hidden', position: 'relative' }}>
      
      {/* Three.js Canvas */}
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.6} />
        {/* 🎨 Lighting adjusted for luxury gold highlights */}
        <directionalLight position={[10, 10, 5]} intensity={1.8} color="#f5ebe0" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#801a24" />

        {/* ScrollControls: pages={2} ka matlab hai 2 pages jitna scroll area milega */}
        <ScrollControls pages={2} damping={0.25}>
          
          {/* Canvas ke andar ka 3D element (Cube) */}
          <MovingCube />

          {/* HTML Overlay: Jo scroll ke sath upar aayega */}
          <Scroll html style={{ width: '100%' }}>
            
            {/* Page 1: Shuruat mein user ko sirf ye dikhega (Cube center mein hoga) */}
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              {/* 🎨 Content & Color Changed: Agency Branding & Typography */}
              <span style={{ color: '#d4a373', fontFamily: 'sans-serif', fontSize: '1rem', fontWeight: '800', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>
                Performance Engineering
              </span>
              <h1 style={{ color: '#f5ebe0', fontFamily: 'sans-serif', fontSize: 'clamp(2.5rem, 6vw, 4.6rem)', fontWeight: '900', letterSpacing: '-2px', margin: '0 auto', textAlign: 'center' }}>
                RANK<span style={{ color: '#801a24' }}>VERTISE</span>
              </h1>
              <p style={{ color: 'rgba(245, 235, 224, 0.6)', fontFamily: 'sans-serif', fontSize: '1.1rem', marginTop: '24px', letterSpacing: '2px' }}>
                Scroll Down To Discover Growth...
              </p>
            </div>

            {/* Page 2: Scroll karne ke baad, text Right Side mein dikhega */}
            <div style={{ 
              height: '100vh', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'flex-end', 
              paddingRight: '12%' 
            }}>
              <div style={{ 
                color: '#f5ebe0', 
                fontFamily: 'sans-serif', 
                maxWidth: '480px',
                textAlign: 'left'
              }}>
                {/* 🎨 Content & Color Changed: Luxury Accent Crimson (#801a24) & Premium Soft Beige (#f5ebe0) */}
                <span style={{ color: '#d4a373', fontSize: '0.85rem', fontWeight: '800', letterSpacing: '3px', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
                  The Growth Framework
                </span>
                <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: '900', color: '#f5ebe0', letterSpacing: '-1.5px', lineHeight: '1.15', marginBottom: '1.5rem' }}>
                  We Build Digital <span style={{ color: '#801a24' }}>Equity.</span>
                </h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.65', color: 'rgba(245, 235, 224, 0.75)' }}>
                  Welcome to Rankvertise. As you scroll, we realign dynamic data and consumer intent to place your enterprise at the pinnacle of digital visibility.
                </p>
              </div>
            </div>

          </Scroll>
        </ScrollControls>
      </Canvas>
      
    </div>
  );
}