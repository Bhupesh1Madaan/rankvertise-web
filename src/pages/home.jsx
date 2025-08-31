import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import { Star, Search, MousePointer, Share2, FileText } from 'lucide-react';
import { Star, Search, MousePointer, Share2, FileText, Phone, Mail, MapPin } from "lucide-react";

const Home = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
        console.log('Form submitted:', formData);
    };

    return (
        <div style={{ backgroundColor: '#eadccc', minHeight: '100vh' }}>

            <Header />

            {/* Hero Section 
            {/* <section style={{ backgroundColor: '#F9FAFB', padding: '80px 24px' }}>
                <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '24px', color: '#111827' }}>
                            Grow Your Indian <br />
                            Business with <span style={{ color: '#2563EB' }}>Digital Marketing</span>
                        </h1>
                        <p style={{ fontSize: '18px', color: '#4B5563', marginBottom: '32px' }}>
                            We help Indian businesses increase their online presence, drive qualified leads, and grow revenue through proven digital marketing strategies.
                        </p>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <button style={{
                                backgroundColor: '#2563EB',
                                color: 'white',
                                padding: '12px 32px',
                                borderRadius: '6px',
                                border: 'none',
                                cursor: 'pointer',
                                fontWeight: '600',
                                transition: 'background-color 0.3s'
                            }}
                                onMouseOver={e => e.currentTarget.style.backgroundColor = '#1E40AF'}
                                onMouseOut={e => e.currentTarget.style.backgroundColor = '#2563EB'}
                            >
                                Get Free Consultation
                            </button>
                            <button style={{
                                backgroundColor: 'transparent',
                                color: '#2563EB',
                                border: 'none',
                                cursor: 'pointer',
                                fontWeight: '600',
                                padding: '12px 16px'
                            }}>
                                View Our Services
                            </button>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
                            alt="Digital marketing concept"
                            style={{ width: '100%', borderRadius: '12px' }}
                        />
                    </div>
                </div>
            </section>

            {/* Stats Section 
            <section style={{ padding: '48px 24px' }}>
                <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', gap: '24px', flexWrap: 'wrap' }}>
                    {[
                        { icon: <Star size={24} color="#2563EB" />, value: '10+', label: 'Years of Experience' },
                        { icon: <Search size={24} color="#2563EB" />, value: '500+', label: 'Projects Completed' },
                        { icon: <MousePointer size={24} color="#2563EB" />, value: '300k+', label: 'Leads Generated' },
                        { icon: <Share2 size={24} color="#2563EB" />, value: '100+', label: 'Active Clients' },
                        { icon: <FileText size={24} color="#2563EB" />, value: '50+', label: 'Awards & Recognitions' },
                    ].map((stat, idx) => (
                        <div key={idx} style={{ flex: '1 1 160px', backgroundColor: '#EFF6FF', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                            <div>{stat.icon}</div>
                            <div style={{ fontSize: '32px', fontWeight: '700', color: '#2563EB', marginTop: '12px' }}>
                                {stat.value}
                            </div>
                            <div style={{ marginTop: '8px', color: '#374151' }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Form Section 
            <section style={{ backgroundColor: '#2563EB', color: 'white', padding: '80px 24px' }}>
                <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
                    <div>
                        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '24px' }}>Ready to Grow Your Business?</h2>
                        <p style={{ fontSize: '20px', marginBottom: '32px' }}>
                            Get in touch for a free consultation and custom digital marketing strategy
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <h3 style={{ fontWeight: '600', fontSize: '24px' }}>Contact Information</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Phone size={20} />
                                <span>+61 3 8888 9999</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Mail size={20} />
                                <span>hello@Rankvertise.com.au</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <MapPin size={20} />
                                <span>Level 10, 123 Collins Street, Melbourne VIC 3000</span>
                            </div>
                            <div style={{ marginTop: '32px' }}>
                                <h3 style={{ fontWeight: '600', fontSize: '20px', marginBottom: '16px' }}>Business Hours</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Monday - Friday</span><span>9:00 AM - 6:00 PM AEST</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Saturday</span><span>10:00 AM - 2:00 PM AEST</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Sunday</span><span>Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '12px', color: '#111827' }}>
                        <h3 style={{ fontWeight: '700', fontSize: '24px', marginBottom: '16px' }}>Get Your Free Consultation</h3>
                        <p style={{ color: '#4B5563', marginBottom: '24px' }}>
                            Fill out the form below and we'll be in touch within 24 hours
                        </p>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                <div>
                                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '4px' }}>First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="John"
                                        required
                                        style={{ width: '100%', padding: '8px', border: '1px solid #D1D5DB', borderRadius: '6px', outline: 'none' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '4px' }}>Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Smith"
                                        required
                                        style={{ width: '100%', padding: '8px', border: '1px solid #D1D5DB', borderRadius: '6px', outline: 'none' }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontWeight: '600', marginBottom: '4px' }}>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="john@example.com"
                                    required
                                    style={{ width: '100%', padding: '8px', border: '1px solid #D1D5DB', borderRadius: '6px', outline: 'none' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontWeight: '600', marginBottom: '4px' }}>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="+61 400 000 000"
                                    style={{ width: '100%', padding: '8px', border: '1px solid #D1D5DB', borderRadius: '6px', outline: 'none' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontWeight: '600', marginBottom: '4px' }}>Company Name</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    placeholder="Your Company"
                                    style={{ width: '100%', padding: '8px', border: '1px solid #D1D5DB', borderRadius: '6px', outline: 'none' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontWeight: '600', marginBottom: '4px' }}>How can we help you?</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Tell us about your business goals and digital marketing needs..."
                                    rows={4}
                                    style={{ width: '100%', padding: '8px', border: '1px solid #D1D5DB', borderRadius: '6px', outline: 'none' }}
                                />
                            </div>

                            <button
                                type="submit"
                                style={{
                                    backgroundColor: '#2563EB',
                                    color: 'white',
                                    padding: '12px',
                                    borderRadius: '6px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    transition: 'background-color 0.3s'
                                }}
                                onMouseOver={e => e.currentTarget.style.backgroundColor = '#1E40AF'}
                                onMouseOut={e => e.currentTarget.style.backgroundColor = '#2563EB'}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section> */}
            <section style={{
                padding: '4rem 2rem',
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'center'
            }}>
                <div>
                    <h1 style={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                        lineHeight: '1.2'
                    }}>
                        Grow Your Indian Business with <span style={{ color: '#714B38' }}>Digital Marketing</span>
                    </h1>
                    <p style={{
                        fontSize: '1.1rem',
                        color: '#666',
                        marginBottom: '2rem'
                    }}>
                        We help Indian businesses increase their online presence, drive qualified leads, and grow revenue through proven digital marketing strategies.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button style={{
                            backgroundColor: '#714B38',
                            color: 'white',
                            border: 'none',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '4px',
                            fontSize: '1rem',
                            cursor: 'pointer'
                        }}>
                            Get Free Consultation
                        </button>
                        <button style={{
                            backgroundColor: 'transparent',
                            color: '#714B38',
                            border: '2px solid #714B38',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '4px',
                            fontSize: '1rem',
                            cursor: 'pointer'
                        }}>
                            View Our Services
                        </button>
                    </div>
                </div>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="Digital Marketing Dashboard"
                        style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover',
                            borderRadius: '8px'
                        }}
                    />
                </div>
            </section>

            {/* Stats Section */}
            <section style={{
                backgroundColor: '#fff',
                padding: '3rem 2rem',
                textAlign: 'center'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '2rem'
                }}>
                    <div>
                        <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#714B38', margin: '0' }}>150+</h3>
                        <p style={{ color: '#666', margin: '0.5rem 0 0 0' }}>Indian Clients</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#714B38', margin: '0' }}>400%</h3>
                        <p style={{ color: '#666', margin: '0.5rem 0 0 0' }}>Average ROI Increase</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#714B38', margin: '0' }}>5+</h3>
                        <p style={{ color: '#666', margin: '0.5rem 0 0 0' }}>Years Experience</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#714B38', margin: '0' }}>98%</h3>
                        <p style={{ color: '#666', margin: '0.5rem 0 0 0' }}>Client Retention Rate</p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section style={{
                padding: '4rem 2rem',
                maxWidth: '1200px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem'
                }}>
                    Our Digital Marketing Services
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    color: '#666',
                    marginBottom: '3rem'
                }}>
                    Comprehensive digital marketing solutions designed specifically for Indian businesses
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    <div style={{
                        backgroundColor: '#fff',
                        padding: '2rem',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        textAlign: 'left'
                    }}>
                        <div style={{
                            backgroundColor: '#e3f2fd',
                            width: '60px',
                            height: '60px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1rem'
                        }}>
                            <Search size={24} color="#714B38" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                            SEO Optimisation
                        </h3>
                        <p style={{ color: '#666' }}>
                            Improve your Google rankings with data-driven SEO strategies and best organic traffic.
                        </p>
                    </div>

                    <div style={{
                        backgroundColor: '#fff',
                        padding: '2rem',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        textAlign: 'left'
                    }}>
                        <div style={{
                            backgroundColor: '#e3f2fd',
                            width: '60px',
                            height: '60px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1rem'
                        }}>
                            <MousePointer size={24} color="#714B38" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                            PPC Advertising
                        </h3>
                        <p style={{ color: '#666' }}>
                            Maximise ROI with targeted Google Ads campaigns.
                        </p>
                    </div>

                    <div style={{
                        backgroundColor: '#fff',
                        padding: '2rem',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        textAlign: 'left'
                    }}>
                        <div style={{
                            backgroundColor: '#e3f2fd',
                            width: '60px',
                            height: '60px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1rem'
                        }}>
                            <Share2 size={24} color="#714B38" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                            Social Media
                        </h3>
                        <p style={{ color: '#666' }}>
                            Build your brand presence across social platforms.
                        </p>
                    </div>

                    <div style={{
                        backgroundColor: '#fff',
                        padding: '2rem',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        textAlign: 'left'
                    }}>
                        <div style={{
                            backgroundColor: '#e3f2fd',
                            width: '60px',
                            height: '60px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1rem'
                        }}>
                            <FileText size={24} color="#714B38" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                            Content Marketing
                        </h3>
                        <p style={{ color: '#666' }}>
                            Create engaging content that drives results and revenue.
                        </p>
                    </div>
                </div>

                <button style={{
                    backgroundColor: '#714B38',
                    color: 'white',
                    border: 'none',
                    padding: '0.75rem 2rem',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    cursor: 'pointer'
                }}>
                    View All Services →
                </button>
            </section>

            {/* About Section */}
            <section style={{
                backgroundColor: '#fff',
                padding: '4rem 2rem'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '3rem',
                    alignItems: 'center'
                }}>
                    <div>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: 'bold',
                            marginBottom: '1.5rem'
                        }}>
                            About Rankvertise
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#666',
                            marginBottom: '2rem'
                        }}>
                            We're a team of digital marketing specialists with deep expertise in the Indian market. Our mission is to help local businesses thrive online through data-driven strategies and cutting-edge digital marketing techniques.
                        </p>
                        <ul style={{
                            listStyle: 'none',
                            padding: '0'
                        }}>
                            <li style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '0.5rem',
                                color: '#28a745'
                            }}>
                                <span style={{ marginRight: '0.5rem' }}>✓</span>
                                Indian Business Number (ABN): 12 345 678 901
                            </li>
                            <li style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '0.5rem',
                                color: '#28a745'
                            }}>
                                <span style={{ marginRight: '0.5rem' }}>✓</span>
                                Google Partner Certified
                            </li>
                            <li style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '0.5rem',
                                color: '#28a745'
                            }}>
                                <span style={{ marginRight: '0.5rem' }}>✓</span>
                                Facebook Marketing Partner
                            </li>
                            <li style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '0.5rem',
                                color: '#28a745'
                            }}>
                                <span style={{ marginRight: '0.5rem' }}>✓</span>
                                5+ Years Serving Indian Businesses
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                            alt="Team working together"
                            style={{
                                width: '100%',
                                height: '400px',
                                objectFit: 'cover',
                                borderRadius: '8px'
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section style={{
                padding: '4rem 2rem',
                textAlign: 'center'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem'
                    }}>
                        Client Success Stories
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: '#666',
                        marginBottom: '3rem'
                    }}>
                        Real results from real Indian businesses
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '2rem'
                    }}>
                        <div style={{
                            backgroundColor: '#fff',
                            padding: '2rem',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            textAlign: 'left'
                        }}>
                            <div style={{ marginBottom: '1rem' }}>
                                <span style={{ color: '#ffc107', fontSize: '1.2rem' }}>★★★★★</span>
                            </div>
                            <p style={{
                                fontSize: '1rem',
                                color: '#666',
                                marginBottom: '1.5rem',
                                fontStyle: 'italic'
                            }}>
                                "Our online sales increased by 150% within 6 months of working with this team. Their understanding of the Indian market is exceptional."
                            </p>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0' }}>Sarah Johnson</h4>
                                <p style={{ color: '#666', fontSize: '0.9rem', margin: '0' }}>Managing Director</p>
                                <p style={{ color: '#666', fontSize: '0.9rem', margin: '0' }}>Melbourne, VIC</p>
                            </div>
                        </div>

                        <div style={{
                            backgroundColor: '#fff',
                            padding: '2rem',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            textAlign: 'left'
                        }}>
                            <div style={{ marginBottom: '1rem' }}>
                                <span style={{ color: '#ffc107', fontSize: '1.2rem' }}>★★★★★</span>
                            </div>
                            <p style={{
                                fontSize: '1rem',
                                color: '#666',
                                marginBottom: '1.5rem',
                                fontStyle: 'italic'
                            }}>
                                "The SEO results have been outstanding. We're now ranking #1 for our key terms across Sydney and Brisbane markets."
                            </p>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0' }}>David Chen</h4>
                                <p style={{ color: '#666', fontSize: '0.9rem', margin: '0' }}>Owner, ASK Solutions</p>
                                <p style={{ color: '#666', fontSize: '0.9rem', margin: '0' }}>Sydney, NSW</p>
                            </div>
                        </div>

                        <div style={{
                            backgroundColor: '#fff',
                            padding: '2rem',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            textAlign: 'left'
                        }}>
                            <div style={{ marginBottom: '1rem' }}>
                                <span style={{ color: '#ffc107', fontSize: '1.2rem' }}>★★★★★</span>
                            </div>
                            <p style={{
                                fontSize: '1rem',
                                color: '#666',
                                marginBottom: '1.5rem',
                                fontStyle: 'italic'
                            }}>
                                "Professional, reliable, and results-driven. They helped us establish a strong digital presence across Western India."
                            </p>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0' }}>Emma Williams</h4>
                                <p style={{ color: '#666', fontSize: '0.9rem', margin: '0' }}>Perth Professional Services</p>
                                <p style={{ color: '#666', fontSize: '0.9rem', margin: '0' }}>Perth, WA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section style={{
                backgroundColor: '#fff',
                padding: '4rem 2rem',
                textAlign: 'center'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem'
                    }}>
                        Latest Digital Marketing Insights
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: '#666',
                        marginBottom: '3rem'
                    }}>
                        Stay updated with the latest trends in Indian digital marketing
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '2rem'
                    }}>
                        <div style={{
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            overflow: 'hidden',
                            textAlign: 'left'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="SEO Strategy"
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover'
                                }}
                            />
                            <div style={{ padding: '1.5rem' }}>
                                <div style={{
                                    backgroundColor: '#333',
                                    color: 'white',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '12px',
                                    fontSize: '0.8rem',
                                    display: 'inline-block',
                                    marginBottom: '1rem'
                                }}>
                                    SEO
                                </div>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 'bold',
                                    marginBottom: '1rem'
                                }}>
                                    Top SEO Strategies for Indian E-commerce in 2024
                                </h3>
                                <p style={{
                                    color: '#666',
                                    fontSize: '0.95rem'
                                }}>
                                    Discover the latest SEO techniques that are driving results for Indian online retailers.
                                </p>
                            </div>
                        </div>

                        <div style={{
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            overflow: 'hidden',
                            textAlign: 'left'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Instagram Marketing"
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover'
                                }}
                            />
                            <div style={{ padding: '1.5rem' }}>
                                <div style={{
                                    backgroundColor: '#e91e63',
                                    color: 'white',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '12px',
                                    fontSize: '0.8rem',
                                    display: 'inline-block',
                                    marginBottom: '1rem'
                                }}>
                                    SOCIAL MEDIA
                                </div>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 'bold',
                                    marginBottom: '1rem'
                                }}>
                                    Instagram Marketing Tips for Indian Small Businesses
                                </h3>
                                <p style={{
                                    color: '#666',
                                    fontSize: '0.95rem'
                                }}>
                                    Learn how to leverage Instagram to reach your target audience and improve your local presence.
                                </p>
                            </div>
                        </div>

                        <div style={{
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            overflow: 'hidden',
                            textAlign: 'left'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Google Ads Analytics"
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover'
                                }}
                            />
                            <div style={{ padding: '1.5rem' }}>
                                <div style={{
                                    backgroundColor: '#714B38',
                                    color: 'white',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '12px',
                                    fontSize: '0.8rem',
                                    display: 'inline-block',
                                    marginBottom: '1rem'
                                }}>
                                    PPC
                                </div>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 'bold',
                                    marginBottom: '1rem'
                                }}>
                                    Maximising Google Ads ROI in Competitive Indian Markets
                                </h3>
                                <p style={{
                                    color: '#666',
                                    fontSize: '0.95rem'
                                }}>
                                    Advanced strategies to outperform competitors and reduce cost per click.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                backgroundColor: '#714B38',
                padding: '4rem 2rem',
                color: 'white'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '3rem',
                    alignItems: 'flex-start'
                }}>
                    <div>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: 'bold',
                            marginBottom: '1rem'
                        }}>
                            Ready to Grow Your Business?
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            marginBottom: '2rem',
                            opacity: '0.9'
                        }}>
                            Get in touch for a free consultation and custom digital marketing strategy
                        </p>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: 'bold',
                                marginBottom: '1rem'
                            }}>
                                Contact Information
                            </h3>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '0.75rem'
                            }}>
                                <Phone size={20} style={{ marginRight: '0.75rem' }} />
                                <span>+61 3 8888 9999</span>
                            </div>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '0.75rem'
                            }}>
                                <Mail size={20} style={{ marginRight: '0.75rem' }} />
                                <span>hello@Rankvertise.com.au</span>
                            </div>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '1rem'
                            }}>
                                <MapPin size={20} style={{ marginRight: '0.75rem' }} />
                                <span>Level 10, 123 Collins Street, Melbourne VIC 3000</span>
                            </div>
                        </div>

                        <div>
                            <h4 style={{
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem'
                            }}>
                                Business Hours
                            </h4>
                            <div style={{ fontSize: '0.95rem', opacity: '0.9' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                    <span>Monday - Friday</span>
                                    <span>9:00 AM - 6:00 PM AEST</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                    <span>Saturday</span>
                                    <span>10:00 AM - 2:00 PM AEST</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: '#eadccc',
                        padding: '2rem',
                        borderRadius: '8px',
                        color: '#333'
                    }}>
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            marginBottom: '1rem'
                        }}>
                            Get Your Free Consultation
                        </h3>
                        <p style={{
                            color: '#666',
                            marginBottom: '1.5rem'
                        }}>
                            Fill out the form below and we'll be in touch within 24 hours
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '1rem',
                                marginBottom: '1rem'
                            }}>
                                <div>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontSize: '0.9rem',
                                        fontWeight: '500'
                                    }}>
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="John"
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem',
                                            border: '1px solid #ddd',
                                            borderRadius: '4px',
                                            fontSize: '1rem'
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        fontSize: '0.9rem',
                                        fontWeight: '500'
                                    }}>
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Smith"
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem',
                                            border: '1px solid #ddd',
                                            borderRadius: '4px',
                                            fontSize: '1rem'
                                        }}
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '0.5rem',
                                    fontSize: '0.9rem',
                                    fontWeight: '500'
                                }}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="john@example.com"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '0.5rem',
                                    fontSize: '0.9rem',
                                    fontWeight: '500'
                                }}>
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="+61 400 000 000"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '0.5rem',
                                    fontSize: '0.9rem',
                                    fontWeight: '500'
                                }}>
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    placeholder="Your Company"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{
                                    display: 'block',
                                    marginBottom: '0.5rem',
                                    fontSize: '0.9rem',
                                    fontWeight: '500'
                                }}>
                                    How can we help you?
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Tell us about your business goals and digital marketing needs..."
                                    rows={4}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        fontSize: '1rem',
                                        resize: 'vertical'
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                style={{
                                    width: '100%',
                                    backgroundColor: '#714B38',
                                    color: 'white',
                                    border: 'none',
                                    padding: '0.75rem',
                                    borderRadius: '4px',
                                    fontSize: '1rem',
                                    fontWeight: '500',
                                    cursor: 'pointer'
                                }} 
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    );
};

export default Home;
