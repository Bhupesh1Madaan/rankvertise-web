import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import { Star, Search, MousePointer, Share2, FileText } from 'lucide-react';
import { Star, Search, MousePointer, Share2, FileText, Phone, Mail, MapPin } from "lucide-react";
import { PenTool, Instagram, BarChart2, Globe, Camera } from "lucide-react";
import ServicesSection from '../components/ServicesSection';
import WhoIsItFor from '../components/WhoIsItfor';
import HeroText from '../components/HeroText';
import AboutSection from '../components/AboutSection';
import PortfolioGrid from '../components/PortfolioGrid';


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

            {/* Hero Section */}
                <div>
                    <HeroText />
                </div>


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
                <ServicesSection />

                {/* Who's It For Section */}
                
            <div style={{ height: "50vh" }} /> {/* Spacer after services */}
            <WhoIsItFor />


            {/* About Section */}
            
            <AboutSection />

            {/* CTA Section */}
                <section
                    style={{
                        textAlign: "center",
                        padding: "3rem 2rem",
                        background: "#714B38",
                        color: "white",
                    }}
                >
                    <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                        What Makes Us Us?
                    </h2>
                    <ul
                        style={{
                            margin: "0 auto 2rem auto",
                            maxWidth: "600px",
                            textAlign: "left",
                            listStyle: "none",
                            padding: 0,
                            fontSize: "1rem",
                            lineHeight: "1.6",
                        }}
                    >
                        {[
                            "Gen Z creativity, business-level strategy",
                            "Speedy timelines without sacrificing quality",
                            "Budget-friendly, ROI-rich strategies",
                            "Transparent process and honest communication",
                            "Custom solutions that scale with you",
                        ].map((point, idx) => (
                            <li key={idx}>✦ {point}</li>
                        ))}
                    </ul>
                    <button
                        style={{
                            background: "white",
                            color: "#714B38",
                            border: "none",
                            padding: "0.8rem 1.6rem",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontWeight: "600",
                        }}
                    >
                        📩 Let’s Talk
                    </button>
                </section>

                {/* Portfolio Section */}
                {/* <section
                    style={{
                        padding: "4rem 2rem",
                        textAlign: "center",
                        maxWidth: "1100px",
                        margin: "0 auto",
                    }}
                >
                    <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Our Work</h2>
                    <p style={{ marginBottom: "2rem", color: "#555" }}>
                        Still Scrolling? Good. That means we’re doing our job.
                        Keep going. It only gets better 👇
                    </p>

                    {/* Carousel Placeholder *
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "1.5rem",
                        }}
                    >
                        {[
                            "This post broke the internet (literally).",
                            "A campaign so sharp, it cut through the noise.",
                            "From zero to viral in 30 days.",
                        ].map((caption, idx) => (
                            <div
                                key={idx}
                                style={{
                                    background: "#eee",
                                    padding: "4rem 1rem",
                                    borderRadius: "10px",
                                    fontWeight: "500",
                                }}
                            >
                                {caption}
                            </div>
                        ))}
                    </div>

                    <button
                        style={{
                            marginTop: "2rem",
                            background: "#714B38",
                            color: "white",
                            border: "none",
                            padding: "0.8rem 1.6rem",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontWeight: "600",
                        }}
                    >
                        Explore Our Work →
                    </button>
                </section> */}
                <PortfolioGrid />

                {/* Final CTA */}
                <section
                    style={{
                        textAlign: "center",
                        padding: "3rem 2rem",
                        background: "#714B38",
                        color: "white",
                    }}
                >
                    <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                        Let’s Make It Unignorable
                    </h2>
                    <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
                        Whether it’s time to launch or level up, we’re here to build something
                        that stands out. And stays out.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
                        <button
                            style={{
                                background: "white",
                                color: "#714B38",
                                border: "none",
                                padding: "0.8rem 1.6rem",
                                borderRadius: "6px",
                                cursor: "pointer",
                                fontWeight: "600",
                            }}
                        >
                            Contact Us
                        </button>
                        <button
                            style={{
                                background: "#f9f9f9",
                                color: "#714B38",
                                border: "1px solid #fff",
                                padding: "0.8rem 1.6rem",
                                borderRadius: "6px",
                                cursor: "pointer",
                                fontWeight: "600",
                            }}
                        >
                            Book a Free Discovery Call
                        </button>
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
