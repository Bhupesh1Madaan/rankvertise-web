import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <div style={{
                maxWidth: '1120px',
                margin: '0 auto',
                padding: '16px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ color: '#2563EB', fontWeight: 'bold', fontSize: '24px' }}>
                    📊 DigitalAu
                </div>

                <nav style={{ display: 'flex', gap: '32px', alignItems: 'center', /* Use media queries later for responsiveness */ }}>
                    <Link to="/" style={{ color: '#374151', textDecoration: 'none', marginRight: '16px' }}>Home</Link>
                    <Link to="/services" style={{ color: '#374151', textDecoration: 'none', marginRight: '16px' }}>Services</Link>
                    <Link to="/aboutus" style={{ color: '#374151', textDecoration: 'none', marginRight: '16px' }}>About</Link>
                    <Link to="/case-studies" style={{ color: '#374151', textDecoration: 'none', marginRight: '16px' }}>Case studies</Link>
                    <Link to="/blogs" style={{ color: '#374151', textDecoration: 'none', marginRight: '16px' }}>Blog</Link>
                    <Link to="/contact" style={{ color: '#374151', textDecoration: 'none', marginRight: '16px' }}>Contact</Link>
                </nav>

                <button style={{
                    backgroundColor: '#2563EB',
                    color: 'white',
                    padding: '8px 24px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                }}
                    onMouseOver={e => e.currentTarget.style.backgroundColor = '#1E40AF'}
                    onMouseOut={e => e.currentTarget.style.backgroundColor = '#2563EB'}
                >
                    Dashboard
                </button>
            </div>
        </header>
    );
};

export default Header;
