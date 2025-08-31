import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Video, MapPin, Clock, User, Shield, Headphones, FileText, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        businessGoals: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        alert('Thank you! Your consultation request has been submitted.');
    };

    // Inline styles
    const styles = {
        container: {
            minHeight: '100vh',
            backgroundColor: '#eadccc',
            fontFamily: 'Arial, sans-serif'
        },
        header: {
            backgroundColor: '#eadccc',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            padding: '16px 0'
        },
        headerInner: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        logo: {
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#714b38'
        },
        headerButton: {
            backgroundColor: '#714b38',
            color: '#eadccc',
            padding: '8px 16px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
        },
        heroSection: {
            background: 'linear-gradient(to bottom right, #b49b90, #eadccc)',
            padding: '80px 0',
            textAlign: 'center'
        },
        heroContainer: {
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '0 16px'
        },
        heroTitle: {
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '24px',
            lineHeight: '1.2'
        },
        heroTitleBlue: {
            color: '#714b38'
        },
        heroText: {
            fontSize: '20px',
            color: '#6b7280',
            marginBottom: '32px',
            maxWidth: '800px',
            margin: '0 auto 32px auto',
            lineHeight: '1.6'
        },
        heroButtons: {
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center'
        },
        primaryButton: {
            backgroundColor: '#714b38',
            color: '#eadccc',
            padding: '16px 32px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '16px',
            transition: 'background-color 0.3s'
        },
        secondaryButton: {
            backgroundColor: 'transparent',
            color: '#374151',
            padding: '16px 32px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '16px',
            transition: 'all 0.3s'
        },
        section: {
            padding: '64px 0',
            backgroundColor: '#eadccc'
        },
        sectionGray: {
            padding: '64px 0',
            backgroundColor: '#f9fafb'
        },
        sectionContainer: {
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '0 16px'
        },
        sectionTitle: {
            fontSize: '36px',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#111827',
            marginBottom: '16px'
        },
        sectionSubtitle: {
            fontSize: '20px',
            color: '#6b7280',
            textAlign: 'center',
            marginBottom: '48px'
        },
        grid4: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px'
        },
        grid2: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '48px'
        },
        card: {
            backgroundColor: '#f9fafb',
            padding: '24px',
            borderRadius: '12px',
            textAlign: 'center'
        },
        cardWhite: {
            backgroundColor: '#eadccc',
            padding: '32px',
            borderRadius: '16px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
        },
        iconCircle: {
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px auto'
        },
        blueIconCircle: {
            backgroundColor: '#dbeafe'
        },
        cardTitle: {
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '12px',
            color: '#111827'
        },
        cardText: {
            color: '#6b7280',
            marginBottom: '16px',
            lineHeight: '1.5'
        },
        cardHighlight: {
            color: '#714b38',
            fontWeight: '600',
            fontSize: '18px',
            marginBottom: '8px'
        },
        cardSmallText: {
            fontSize: '14px',
            color: '#9ca3af'
        },
        formSection: {
            marginBottom: '24px'
        },
        formRow: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '24px'
        },
        label: {
            display: 'block',
            fontSize: '14px',
            fontWeight: '600',
            color: '#374151',
            marginBottom: '8px'
        },
        input: {
            width: '100%',
            padding: '12px 16px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.3s, box-shadow 0.3s',
            boxSizing: 'border-box'
        },
        textarea: {
            width: '100%',
            padding: '12px 16px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.3s, box-shadow 0.3s',
            resize: 'vertical',
            minHeight: '120px',
            boxSizing: 'border-box'
        },
        select: {
            width: '100%',
            padding: '12px 16px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '16px',
            outline: 'none',
            backgroundColor: '#eadccc',
            cursor: 'pointer',
            boxSizing: 'border-box'
        },
        submitButton: {
            width: '100%',
            backgroundColor: '#714b38',
            color: '#eadccc',
            padding: '16px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.3s'
        },
        disclaimerText: {
            fontSize: '14px',
            color: '#6b7280',
            lineHeight: '1.5',
            marginBottom: '24px'
        },
        featureList: {
            listStyle: 'none',
            padding: 0,
            margin: 0
        },
        featureItem: {
            display: 'flex',
            alignItems: 'flex-start',
            gap: '16px',
            marginBottom: '24px'
        },
        featureIcon: {
            backgroundColor: '#dbeafe',
            padding: '8px',
            borderRadius: '8px',
            flexShrink: 0
        },
        featureTitle: {
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '8px',
            color: '#111827'
        },
        featureText: {
            color: '#6b7280',
            lineHeight: '1.5'
        },
        processCard: {
            backgroundColor: '#b49b90',
            padding: '24px',
            borderRadius: '12px'
        },
        processTitle: {
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '16px',
            color: '#fff'
        },
        processStep: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '12px',
            color: '#fff'
        },
        processNumber: {
            backgroundColor: '#714b38',
            color: '#eadccc',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: '600',
            flexShrink: 0
        },
        emergencyCard: {
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            padding: '24px',
            borderRadius: '12px'
        },
        emergencyTitle: {
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '8px',
            color: '#991b1b'
        },
        emergencyText: {
            color: '#dc2626',
            marginBottom: '12px'
        },
        emergencyPhone: {
            color: '#991b1b',
            fontWeight: 'bold',
            fontSize: '18px',
            marginBottom: '4px'
        },
        emergencySmall: {
            fontSize: '14px',
            color: '#b91c1c'
        },
        officeCard: {
            backgroundColor: '#f9fafb',
            padding: '32px',
            borderRadius: '12px'
        },
        officeHeader: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px'
        },
        officeTitle: {
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#111827'
        },
        officeBadge: {
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#eadccc'
        },
        purpleBadge: {
            backgroundColor: '#714b38'
        },
        blueBadge: {
            backgroundColor: '#714b38'
        },
        greenBadge: {
            backgroundColor: '#714b38'
        },
        orangeBadge: {
            backgroundColor: '#714b38'
        },
        officeDetails: {
            marginBottom: '24px'
        },
        officeDetail: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
            color: '#6b7280'
        },
        officeButton: {
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            color: '#eadccc',
            transition: 'background-color 0.3s'
        },
        purpleButton: {
            backgroundColor: '#714b38'
        },
        blueButton: {
            backgroundColor: '#714b38'
        },
        greenButton: {
            backgroundColor: '#714b38'
        },
        orangeButton: {
            backgroundColor: '#714b38'
        },
        businessInfoSection: {
            padding: '48px 0',
            backgroundColor: '#eadccc'
        },
        businessInfoGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
        },
        businessInfoCard: {
            backgroundColor: '#eadccc',
            padding: '24px',
            borderRadius: '8px'
        },
        businessInfoTitle: {
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#111827'
        },
        businessInfoList: {
            listStyle: 'none',
            padding: 0,
            margin: 0
        },
        businessInfoItem: {
            color: '#6b7280',
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        ctaSection: {
            background: 'linear-gradient(to right, #714b38, #b49b90)',
            padding: '64px 0',
            color: '#eadccc',
            textAlign: 'center'
        },
        ctaTitle: {
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '16px'
        },
        ctaText: {
            fontSize: '20px',
            marginBottom: '32px',
            opacity: 0.9,
            maxWidth: '800px',
            margin: '0 auto 32px auto',
            lineHeight: '1.6'
        },
        ctaButtons: {
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center'
        },
        ctaButtonWhite: {
            backgroundColor: '#b49b90',
            color: '#fff',
            padding: '16px 32px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '16px',
            transition: 'background-color 0.3s'
        },
        ctaButtonTransparent: {
            backgroundColor: '#b49b90',
            color: '#eadccc',
            padding: '16px 32px',
            borderRadius: '8px',
            border: '1px solid #60a5fa',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '16px',
            transition: 'background-color 0.3s'
        }
    };

    // Hover effects using onMouseEnter and onMouseLeave
    const handleButtonHover = (e, hoverColor) => {
        e.target.style.backgroundColor = hoverColor;
    };

    const handleButtonLeave = (e, originalColor) => {
        e.target.style.backgroundColor = originalColor;
    };

    const handleInputFocus = (e) => {
        e.target.style.borderColor = '#714b38';
        e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
    };

    const handleInputBlur = (e) => {
        e.target.style.borderColor = '#d1d5db';
        e.target.style.boxShadow = 'none';
    };

    return (
        <div style={{ backgroundColor: '#eadccc', minHeight: '100vh' }}>
            <Header />
            {/* Hero Section */}
            <section style={styles.heroSection}>
                <div style={styles.heroContainer}>
                    <h1 style={styles.heroTitle}>
                        Let's Grow Your Indian Business <span style={styles.heroTitleBlue}>Together</span>
                    </h1>
                    <p style={styles.heroText}>
                        Ready to take your digital marketing to the next level? Get in touch with our Indian team for
                        a free consultation and custom strategy tailored to your business goals.
                    </p>
                    <div style={styles.heroButtons}>
                        <button
                            style={styles.primaryButton}
                            onMouseEnter={(e) => handleButtonHover(e, '#714B38')}
                            onMouseLeave={(e) => handleButtonLeave(e, '#9c7462')}
                        >
                            Get Free Consultation →
                        </button>
                        <button
                            style={styles.secondaryButton}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#eadccc';
                                e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.boxShadow = 'none';
                            }}
                        >
                            View Our Services
                        </button>
                    </div>
                </div>
            </section>

            {/* How to Reach Us */}
            <section style={styles.section}>
                <div style={styles.sectionContainer}>
                    <h2 style={styles.sectionTitle}>How to Reach Us</h2>
                    <p style={styles.sectionSubtitle}>
                        Multiple ways to connect with our Indian digital marketing experts
                    </p>

                    <div style={styles.grid4}>
                        {/* Phone Support */}
                        <div style={styles.card}>
                            <div style={{ ...styles.iconCircle, ...styles.blueIconCircle }}>
                                <Phone style={{ width: '32px', height: '32px', color: '#714b38' }} />
                            </div>
                            <h3 style={styles.cardTitle}>Phone Support</h3>
                            <p style={styles.cardText}>Speak directly with our Indian team during business hours</p>
                            <div style={styles.cardHighlight}>1300 DIGITAL (1300 344 482)</div>
                            <p style={styles.cardSmallText}>Mon-Fri: 9AM-6PM, Sat: 10AM-2PM (AEST/AWST)</p>
                        </div>

                        {/* Email Support */}
                        <div style={styles.card}>
                            <div style={{ ...styles.iconCircle, ...styles.blueIconCircle }}>
                                <Mail style={{ width: '32px', height: '32px', color: '#714b38' }} />
                            </div>
                            <h3 style={styles.cardTitle}>Email Support</h3>
                            <p style={styles.cardText}>Send us your questions and we'll respond within 4 hours during business days</p>
                            <div style={styles.cardHighlight}>hello@Rankvertise.com.au</div>
                            <p style={styles.cardSmallText}>24/7 - Response within 4 hours</p>
                        </div>

                        {/* Live Chat */}
                        <div style={styles.card}>
                            <div style={{ ...styles.iconCircle, ...styles.blueIconCircle }}>
                                <MessageCircle style={{ width: '32px', height: '32px', color: '#714b38' }} />
                            </div>
                            <h3 style={styles.cardTitle}>Live Chat</h3>
                            <p style={styles.cardText}>Chat with our team in real-time for immediate assistance</p>
                            <div style={styles.cardHighlight}>Available on our website</div>
                            <p style={styles.cardSmallText}>Mon-Fri: 9AM-6PM (AEST/AWST)</p>
                        </div>

                        {/* Video Consultation */}
                        <div style={styles.card}>
                            <div style={{ ...styles.iconCircle, ...styles.blueIconCircle }}>
                                <Video style={{ width: '32px', height: '32px', color: '#714b38' }} />
                            </div>
                            <h3 style={styles.cardTitle}>Video Consultation</h3>
                            <p style={styles.cardText}>Book a free 30-minute strategy session with our experts</p>
                            <div style={styles.cardHighlight}>Zoom, Teams, or Google Meet</div>
                            <p style={styles.cardSmallText}>By appointment - 7 days a week</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content - Form and Why Choose */}
            <section style={styles.sectionGray}>
                <div style={styles.sectionContainer}>
                    <div style={styles.grid2}>
                        {/* Consultation Form */}
                        <div style={styles.cardWhite}>
                            <h2 style={{ ...styles.sectionTitle, textAlign: 'left', marginBottom: '24px' }}>
                                Get Your Free Digital Marketing Consultation
                            </h2>
                            <p style={{ ...styles.cardText, marginBottom: '32px' }}>
                                Fill out the form below and our Indian team will get back to you within 4 hours during business days.
                            </p>

                            <div>
                                <div style={styles.formRow}>
                                    <div>
                                        <label style={styles.label}>First Name *</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            onFocus={handleInputFocus}
                                            onBlur={handleInputBlur}
                                            placeholder="John"
                                            style={styles.input}
                                        />
                                    </div>
                                    <div>
                                        <label style={styles.label}>Last Name *</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            onFocus={handleInputFocus}
                                            onBlur={handleInputBlur}
                                            placeholder="Smith"
                                            style={styles.input}
                                        />
                                    </div>
                                </div>

                                <div style={styles.formSection}>
                                    <label style={styles.label}>Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        placeholder="john@company.com.au"
                                        style={styles.input}
                                    />
                                </div>

                                <div style={styles.formSection}>
                                    <label style={styles.label}>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        placeholder="+61 4XX XXX XXX"
                                        style={styles.input}
                                    />
                                </div>

                                <div style={styles.formSection}>
                                    <label style={styles.label}>Company Name</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        placeholder="Your Company Pty Ltd"
                                        style={styles.input}
                                    />
                                </div>

                                <div style={styles.formSection}>
                                    <label style={styles.label}>Service of Interest</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        style={styles.select}
                                    >
                                        <option value="">Select a service...</option>
                                        <option value="seo">Search Engine Optimization</option>
                                        <option value="ppc">Pay-Per-Click Advertising</option>
                                        <option value="social">Social Media Marketing</option>
                                        <option value="content">Content Marketing</option>
                                        <option value="email">Email Marketing</option>
                                        <option value="analytics">Analytics & Reporting</option>
                                    </select>
                                </div>

                                <div style={styles.formSection}>
                                    <label style={styles.label}>Monthly Budget Range</label>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleInputChange}
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        style={styles.select}
                                    >
                                        <option value="">Select budget range...</option>
                                        <option value="under-5k">Under $5,000</option>
                                        <option value="5k-10k">$5,000 - $10,000</option>
                                        <option value="10k-25k">$10,000 - $25,000</option>
                                        <option value="25k-50k">$25,000 - $50,000</option>
                                        <option value="over-50k">Over $50,000</option>
                                    </select>
                                </div>

                                <div style={styles.formSection}>
                                    <label style={styles.label}>Tell us about your business goals *</label>
                                    <textarea
                                        name="businessGoals"
                                        value={formData.businessGoals}
                                        onChange={handleInputChange}
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        placeholder="Describe your business, current digital marketing challenges, and what you'd like to achieve..."
                                        style={styles.textarea}
                                    />
                                </div>

                                <p style={styles.disclaimerText}>
                                    * Required fields<br />
                                    By submitting this form, you consent to Rankvertise collecting and using your information in accordance with our Privacy Policy and Indian Privacy Act 1988. You can unsubscribe at any time.
                                </p>

                                <button
                                    onClick={handleSubmit}
                                    style={styles.submitButton}
                                    onMouseEnter={(e) => handleButtonHover(e, '#714B38')}
                                    onMouseLeave={(e) => handleButtonLeave(e, '#714b38')}
                                >
                                    Send Message & Get Free Consultation
                                </button>
                            </div>
                        </div>

                        {/* Why Choose Rankvertise */}
                        <div>
                            <h2 style={{ ...styles.sectionTitle, textAlign: 'left', marginBottom: '32px' }}>
                                Why Choose Rankvertise?
                            </h2>

                            <ul style={styles.featureList}>
                                <li style={styles.featureItem}>
                                    <div style={styles.featureIcon}>
                                        <CheckCircle style={{ width: '24px', height: '24px', color: '#714b38' }} />
                                    </div>
                                    <div>
                                        <h3 style={styles.featureTitle}>Fast Response</h3>
                                        <p style={styles.featureText}>We respond to all inquiries within 4 hours during business days, often much faster.</p>
                                    </div>
                                </li>

                                <li style={styles.featureItem}>
                                    <div style={styles.featureIcon}>
                                        <User style={{ width: '24px', height: '24px', color: '#714b38' }} />
                                    </div>
                                    <div>
                                        <h3 style={styles.featureTitle}>Local Expertise</h3>
                                        <p style={styles.featureText}>Indian team with deep understanding of local markets and regulations.</p>
                                    </div>
                                </li>

                                <li style={styles.featureItem}>
                                    <div style={styles.featureIcon}>
                                        <Shield style={{ width: '24px', height: '24px', color: '#714b38' }} />
                                    </div>
                                    <div>
                                        <h3 style={styles.featureTitle}>Privacy Compliant</h3>
                                        <p style={styles.featureText}>Full compliance with Indian Privacy Act and SPAM Act requirements.</p>
                                    </div>
                                </li>

                                <li style={styles.featureItem}>
                                    <div style={styles.featureIcon}>
                                        <CheckCircle style={{ width: '24px', height: '24px', color: '#714b38' }} />
                                    </div>
                                    <div>
                                        <h3 style={styles.featureTitle}>Proven Results</h3>
                                        <p style={styles.featureText}>Over 150 successful Indian businesses trust us with their digital growth.</p>
                                    </div>
                                </li>
                            </ul>

                            {/* What Happens Next */}
                            <div style={styles.processCard}>
                                <h3 style={styles.processTitle}>What Happens Next?</h3>
                                <div>
                                    <div style={styles.processStep}>
                                        <div style={styles.processNumber}>1</div>
                                        <p>We'll review your submission within 4 hours</p>
                                    </div>
                                    <div style={styles.processStep}>
                                        <div style={styles.processNumber}>2</div>
                                        <p>Schedule a free 30-minute strategy call</p>
                                    </div>
                                    <div style={styles.processStep}>
                                        <div style={styles.processNumber}>3</div>
                                        <p>Receive a custom digital marketing proposal</p>
                                    </div>
                                </div>
                            </div>

                            {/* Emergency Support */}
                            <div style={{ ...styles.emergencyCard, marginTop: '24px' }}>
                                <h3 style={styles.emergencyTitle}>Emergency Support</h3>
                                <p style={styles.emergencyText}>Existing client with an urgent issue? Call our emergency line:</p>
                                <div style={styles.emergencyPhone}>1300 URGENT (1300 874 368)</div>
                                <p style={styles.emergencySmall}>Available 24/7 for existing clients only</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Locations */}
            <section style={styles.section}>
                <div style={styles.sectionContainer}>
                    <h2 style={styles.sectionTitle}>Our Office Locations</h2>
                    <p style={styles.sectionSubtitle}>
                        Local presence across India's major business centers
                    </p>

                    <div style={styles.grid2}>
                        {/* Melbourne */}
                        <div style={styles.officeCard}>
                            <div style={styles.officeHeader}>
                                <div>
                                    <h3 style={styles.officeTitle}>Melbourne</h3>
                                    <span style={{ ...styles.officeBadge, ...styles.purpleBadge }}>Head Office</span>
                                </div>
                                <MapPin style={{ width: '32px', height: '32px', color: '#714b38' }} />
                            </div>
                            <div style={styles.officeDetails}>
                                <div style={styles.officeDetail}>
                                    <MapPin style={{ width: '16px', height: '16px' }} />
                                    <span>Level 10, 123 Collins Street, Melbourne VIC 3000</span>
                                </div>
                                <div style={styles.officeDetail}>
                                    <Phone style={{ width: '16px', height: '16px' }} />
                                    <span>+61 3 9000 1234</span>
                                </div>
                                <div style={styles.officeDetail}>
                                    <Mail style={{ width: '16px', height: '16px' }} />
                                    <span>melbourne@Rankvertise.com.au</span>
                                </div>
                                <div style={styles.officeDetail}>
                                    <Clock style={{ width: '16px', height: '16px' }} />
                                    <span>Mon-Fri: 9AM-6PM AEST, Sat: 10AM-2PM AEST</span>
                                </div>
                                <div style={styles.officeDetail}>
                                    <User style={{ width: '16px', height: '16px' }} />
                                    <span>Office Manager: Sarah Mitchell</span>
                                </div>
                                <div style={{ fontSize: '14px', color: '#6b7280' }}>
                                    Specializes: Digital Strategy, SEO, Analytics
                                </div>
                            </div>
                            <button
                                style={{ ...styles.officeButton, ...styles.purpleButton }}
                                onMouseEnter={(e) => handleButtonHover(e, '#6d28d9')}
                                onMouseLeave={(e) => handleButtonLeave(e, '#714b38')}
                            >
                                📅 Book Melbourne Consultation
                            </button>
                        </div>

                        {/* Sydney */}
                        <div style={styles.officeCard}>
                            <div style={styles.officeHeader}>
                                <div>
                                    <h3 style={styles.officeTitle}>Sydney</h3>
                                    <span style={{ ...styles.officeBadge, ...styles.blueBadge }}>Regional Office</span>
                                </div>
                                <MapPin style={{ width: '32px', height: '32px', color: '#714b38' }} />
                            </div>
                            <div style={styles.officeDetails}>
                                <div style={styles.officeDetail}>
                                    <MapPin style={{ width: '16px', height: '16px' }} />
                                    <span>Level 15, 456 George Street, Sydney NSW 2000</span>
                                </div>
                                <div style={styles.officeDetail}>
                                    <Phone style={{ width: '16px', height: '16px' }} />
                                    <span>+61 2 8000 5678</span>
                                </div>
                                <div style={styles.officeDetail}>
                                    <Mail style={{ width: '16px', height: '16px' }} />
                                    <span>sydney@Rankvertise.com.au</span>
                                </div>
                                <div style={styles.officeDetail}>
                                    <Clock style={{ width: '16px', height: '16px' }} />
                                    <span>Mon-Fri: 9AM-6PM AEST, Sat: 10AM-2PM AEST</span>
                                </div>
                                <div style={styles.officeDetail}>
                                    <User style={{ width: '16px', height: '16px' }} />
                                    <span>Office Manager: Michael Chen</span>
                                </div>
                                <div style={{ fontSize: '14px', color: '#6b7280' }}>
                                    Specializes: PPC Advertising, Social Media, Content
                                </div>
                            </div>
                            <button
                                style={{ ...styles.officeButton, ...styles.blueButton }}
                                onMouseEnter={(e) => handleButtonHover(e, '#714B38')}
                                onMouseLeave={(e) => handleButtonLeave(e, '#714b38')}
                            >
                                📅 Book Sydney Consultation
                            </button>
                        </div>

                        {/* Brisbane */}
                        <div style={styles.officeCard}>
                            <div style={styles.officeHeader}>
                                <div>
                                    <h3 style={styles.officeTitle}>Brisbane</h3>
                                    <span style={{ ...styles.officeBadge, ...styles.greenBadge }}>Regional Office</span>
                                </div>
                                <MapPin style={{ width: '32px', height: '32px', color: '#714b38' }} />
                            </div>
                            <div style={styles.officeDetails}>
                                <div style={styles.officeDetail}>
                                    <MapPin style={{ width: '16px', height: '16px' }} />
                                    <span>Level 8, 789 Queen Street, Brisbane QLD 4000</span>
                                </div>
                                <div style={styles.officeDetail}>
                                    <Phone style={{ width: '16px', height: '16px' }} />
                                    <span>+61 7 3000 9012</span>
                                </div>
                                <div style={styles.officeDetail}>
                                    <Mail style={{ width: '16px', height: '16px' }} />
                                    <span>brisbane@Rankvertise.com.au</span>
                                </div>
                                <div style={styles.officeDetail}>
                                    <Clock style={{ width: '16px', height: '16px' }} />
                                    <span>Mon-Fri: 9AM-6PM AEST, Sat: 10AM-2PM AEST</span>
                                </div>
                                <div style={styles.officeDetail}>
                                    <User style={{ width: '16px', height: '16px' }} />
                                    <span>Office Manager: Emma Rodriguez</span>
                                </div>
                                <div style={{ fontSize: '14px', color: '#6b7280' }}>
                                    Specializes: Creative Strategy, Email Marketing, Branding
                                </div>
                            </div>
                            <button
                                style={{ ...styles.officeButton, ...styles.greenButton }}
                                onMouseEnter={(e) => handleButtonHover(e, '#047857')}
                                onMouseLeave={(e) => handleButtonLeave(e, '#714b38')}
                            >
                                📅 Book Brisbane Consultation
                            </button>
                        </div>

                        {/* Perth */}
                        <div style={styles.officeCard}>
                            <div style={styles.officeHeader}>
                                <div>
                                    <h3 style={styles.officeTitle}>Perth</h3>
                                    <span style={{ ...styles.officeBadge, ...styles.orangeBadge }}>Regional Office</span>
                                </div>
                                <MapPin style={{ width: '32px', height: '32px', color: '#714b38' }} />
                            </div>
                            <div style={styles.officeDetails}>
                                <div style={styles.officeDetail}>
                                    <MapPin style={{ width: '16px', height: '16px' }} />
                                    <span>Level 12, 321 St Georges Terrace, Perth WA 6000</span>
                                </div>
                                <div style={styles.officeDetail}>
                                    <Phone style={{ width: '16px', height: '16px' }} />
                                    <span>+61 8 6000 3456</span>
                                </div>
                                <div style={styles.officeDetail}>
                                    <Mail style={{ width: '16px', height: '16px' }} />
                                    <span>perth@Rankvertise.com.au</span>
                                </div>
                                <div style={styles.officeDetail}>
                                    <Clock style={{ width: '16px', height: '16px' }} />
                                    <span>Mon-Fri: 9AM-6PM AWST, Sat: 10AM-2PM AWST</span>
                                </div>
                                <div style={styles.officeDetail}>
                                    <User style={{ width: '16px', height: '16px' }} />
                                    <span>Office Manager: James Thompson</span>
                                </div>
                                <div style={{ fontSize: '14px', color: '#6b7280' }}>
                                    Specializes: Local SEO, Google Ads, Web Analytics
                                </div>
                            </div>
                            <button
                                style={{ ...styles.officeButton, ...styles.orangeButton }}
                                onMouseEnter={(e) => handleButtonHover(e, '#c2410c')}
                                onMouseLeave={(e) => handleButtonLeave(e, '#714b38')}
                            >
                                📅 Book Perth Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Information Footer */}
            <section style={styles.businessInfoSection}>
                <div style={styles.sectionContainer}>
                    <div style={styles.businessInfoGrid}>
                        {/* Business Information */}
                        <div style={styles.businessInfoCard}>
                            <h3 style={styles.businessInfoTitle}>
                                <FileText style={{ width: '20px', height: '20px', color: '#714b38' }} />
                                Business Information
                            </h3>
                            <ul style={styles.businessInfoList}>
                                <li style={styles.businessInfoItem}><strong>Company:</strong> Rankvertise Pty Ltd</li>
                                <li style={styles.businessInfoItem}><strong>ABN:</strong> 12 345 678 901</li>
                                <li style={styles.businessInfoItem}><strong>ACN:</strong> 987 654 321</li>
                                <li style={styles.businessInfoItem}><strong>Industry:</strong> Digital Marketing Services</li>
                                <li style={styles.businessInfoItem}><strong>Established:</strong> 2019</li>
                            </ul>
                        </div>

                        {/* Compliance & Security */}
                        <div style={styles.businessInfoCard}>
                            <h3 style={styles.businessInfoTitle}>
                                <Shield style={{ width: '20px', height: '20px', color: '#714b38' }} />
                                Compliance & Security
                            </h3>
                            <ul style={styles.businessInfoList}>
                                <li style={styles.businessInfoItem}>
                                    <CheckCircle style={{ width: '16px', height: '16px', color: '#10b981' }} />
                                    Indian Privacy Act 1988 Compliant
                                </li>
                                <li style={styles.businessInfoItem}>
                                    <CheckCircle style={{ width: '16px', height: '16px', color: '#10b981' }} />
                                    SPAM Act 2003 Compliant
                                </li>
                                <li style={styles.businessInfoItem}>
                                    <CheckCircle style={{ width: '16px', height: '16px', color: '#10b981' }} />
                                    ACCC Guidelines Adherent
                                </li>
                                <li style={styles.businessInfoItem}>
                                    <CheckCircle style={{ width: '16px', height: '16px', color: '#10b981' }} />
                                    ISO 27001 Information Security
                                </li>
                                <li style={styles.businessInfoItem}>
                                    <CheckCircle style={{ width: '16px', height: '16px', color: '#10b981' }} />
                                    Google Premier Partner Certified
                                </li>
                            </ul>
                        </div>

                        {/* Support Hours */}
                        <div style={styles.businessInfoCard}>
                            <h3 style={styles.businessInfoTitle}>
                                <Headphones style={{ width: '20px', height: '20px', color: '#714b38' }} />
                                Support Hours
                            </h3>
                            <ul style={styles.businessInfoList}>
                                <li style={styles.businessInfoItem}><strong>Phone & Chat:</strong></li>
                                <li style={styles.businessInfoItem}>Mon-Fri: 9:00 AM - 6:00 PM</li>
                                <li style={styles.businessInfoItem}>Saturday: 10:00 AM - 2:00 PM</li>
                                <li style={styles.businessInfoItem}>Sunday: Closed</li>
                                <li style={styles.businessInfoItem}><strong>Email:</strong> 24/7 (4hr response)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Footer */}
            <section style={styles.ctaSection}>
                <div style={styles.sectionContainer}>
                    <h2 style={styles.ctaTitle}>Ready to Start Your Digital Growth Journey?</h2>
                    <p style={styles.ctaText}>
                        Join over 150 Indian businesses who trust Rankvertise to drive their online success.
                        Get your free consultation today and discover how we can help your business thrive.
                    </p>
                    <div style={styles.ctaButtons}>
                        <button
                            style={styles.ctaButtonWhite}
                            onMouseEnter={(e) => handleButtonHover(e, '#b49b90')}
                            onMouseLeave={(e) => handleButtonLeave(e, '#714b38')}
                        >
                            📞 Call Now: 1300 DIGITAL
                        </button>
                        <button
                            style={styles.ctaButtonTransparent}
                            onMouseEnter={(e) => handleButtonHover(e, '#b49b90')}
                            onMouseLeave={(e) => handleButtonLeave(e, '#714b38')}
                        >
                            Get Free Consultation
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}