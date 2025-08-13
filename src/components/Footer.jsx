import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#111827', color: 'white', padding: '64px 24px' }}>
            <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>

                <div>
                    <div style={{ color: '#3B82F6', fontWeight: 'bold', fontSize: '24px', marginBottom: '16px' }}>📊 DigitalAu</div>
                    <p style={{ color: '#9CA3AF', marginBottom: '24px' }}>
                        Australia's leading digital marketing agency helping businesses grow their online presence and drive measurable results through proven strategies and cutting-edge technologies.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#9CA3AF' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Phone size={16} style={{ marginRight: '8px' }} />
                            1300 DIGITAL (1300 344 4825)
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Mail size={16} style={{ marginRight: '8px' }} />
                            hello@digitalau.com.au
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <MapPin size={16} style={{ marginRight: '8px' }} />
                            Level 10, 123 Collins Street, Melbourne VIC 3000
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
                        <Facebook size={20} style={{ color: '#9CA3AF', cursor: 'pointer' }} />
                        <Linkedin size={20} style={{ color: '#9CA3AF', cursor: 'pointer' }} />
                        <Twitter size={20} style={{ color: '#9CA3AF', cursor: 'pointer' }} />
                        <Instagram size={20} style={{ color: '#9CA3AF', cursor: 'pointer' }} />
                        <Globe size={20} style={{ color: '#9CA3AF', cursor: 'pointer' }} />
                    </div>
                </div>

                <div>
                    <h3 style={{ fontWeight: '600', fontSize: '18px', marginBottom: '16px' }}>Our Services</h3>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0, color: '#9CA3AF' }}>
                        {['Search Engine Optimisation', 'Pay-Per-Click Advertising', 'Social Media Marketing', 'Content Marketing', 'Email Marketing', 'Web Analytics & Reporting'].map((item, idx) => (
                            <li key={idx} style={{ marginBottom: '8px', cursor: 'pointer', textDecoration: 'underline' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 style={{ fontWeight: '600', fontSize: '18px', marginBottom: '16px' }}>Quick Links</h3>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0, color: '#9CA3AF' }}>
                        {['About Us', 'Our Services', 'Case Studies', 'Blog & Insights', 'Contact Us', 'Free Consultation'].map((item, idx) => (
                            <li key={idx} style={{ marginBottom: '8px', cursor: 'pointer', textDecoration: 'underline' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 style={{ fontWeight: '600', fontSize: '18px', marginBottom: '16px' }}>Legal & Support</h3>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0, color: '#9CA3AF' }}>
                        {['Terms & Conditions', 'Privacy Policy', 'Cookie Policy', 'Disclaimer', 'Refund Policy', 'ACCC Compliance'].map((item, idx) => (
                            <li key={idx} style={{ marginBottom: '8px', cursor: 'pointer', textDecoration: 'underline' }}>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div style={{ marginTop: '24px', backgroundColor: '#DC2626', borderRadius: '6px', padding: '12px' }}>
                        <div style={{ fontWeight: '600', fontSize: '14px' }}>Emergency Support</div>
                        <div style={{ fontSize: '12px' }}>1800 URGENT</div>
                        <div style={{ fontSize: '12px' }}>Available 24/7</div>
                    </div>
                </div>

            </div>

            <div style={{ borderTop: '1px solid #374151', paddingTop: '32px', marginTop: '32px', textAlign: 'center', color: '#9CA3AF', fontSize: '12px' }}>
                <p>© 2024 DigitalAu Pty Ltd. All rights reserved. Proudly Australian owned and operated.</p>
                <p style={{ marginTop: '8px' }}>
                    Built with ❤️ in Melbourne | <a href="#" style={{ color: '#9CA3AF', marginLeft: '4px', marginRight: '4px', textDecoration: 'underline' }}>Privacy Policy</a> | <a href="#" style={{ color: '#9CA3AF', marginLeft: '4px', marginRight: '4px', textDecoration: 'underline' }}>Terms of Service</a> | <a href="#" style={{ color: '#9CA3AF', marginLeft: '4px', marginRight: '4px', textDecoration: 'underline' }}>Sitemap</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
