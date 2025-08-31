import React from 'react';
import { Search, MousePointer, Share2, FileText, Mail, BarChart3, Globe, TrendingUp, Users, Smartphone, Target } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RankvertiseServices = () => {
    const services = [
        {
            icon: <Search size={24} color="#714B38" />,
            title: "Search Engine Optimisation (SEO)",
            description: "Improve your website's visibility on Google and drive organic traffic with our comprehensive SEO strategies tailored for Indian businesses.",
            features: [
                "Local SEO",
                "Technical SEO",
                "Content Optimisation",
                "Link Building",
                "Keyword Research",
                "SEO Audits"
            ],
            price: "From $2,500/month",
            featured: false
        },
        {
            icon: <MousePointer size={24} color="#714B38" />,
            title: "Pay-Per-Click (PPC) Advertising",
            description: "Generate immediate results with expertly managed Google Ads, Facebook Ads, and other PPC campaigns targeting Indian customers.",
            features: [
                "Google Ads",
                "Facebook Ads",
                "Shopping Campaigns",
                "Display Advertising",
                "YouTube Ads",
                "Conversion Tracking"
            ],
            price: "From $1,200/month + ad spend",
            featured: true
        },
        {
            icon: <Share2 size={24} color="#714B38" />,
            title: "Social Media Marketing",
            description: "Build your brand presence and engage with Indian audiences across Facebook, Instagram, LinkedIn, and other social platforms.",
            features: [
                "Content Creation",
                "Community Management",
                "Social Advertising",
                "Influencer Partnerships",
                "Analytics",
                "Strategy Development"
            ],
            price: "From $1,500/month",
            featured: false
        },
        {
            icon: <FileText size={24} color="#714B38" />,
            title: "Content Marketing",
            description: "Create valuable, engaging content that attracts and converts your target Indian audience while building brand authority.",
            features: [
                "Blog Writing",
                "Video Content",
                "Infographics",
                "eBooks",
                "Case Studies",
                "Content Strategy"
            ],
            price: "From $1,800/month",
            featured: false
        },
        {
            icon: <Mail size={24} color="#714B38" />,
            title: "Email Marketing",
            description: "Nurture leads and retain customers with strategic email campaigns designed for the Indian market.",
            features: [
                "Campaign Design",
                "List Building",
                "Automation",
                "Segmentation",
                "A/B Testing",
                "Performance Analytics"
            ],
            price: "From $800/month",
            featured: false
        },
        {
            icon: <BarChart3 size={24} color="#714B38" />,
            title: "Web Analytics & Reporting",
            description: "Track, measure, and optimise your digital marketing performance with comprehensive analytics and reporting.",
            features: [
                "Google Analytics Setup",
                "Conversion Tracking",
                "Custom Dashboards",
                "Monthly Reports",
                "ROI Analysis",
                "Performance Insights"
            ],
            price: "From $600/month",
            featured: false
        }
    ];

    const processSteps = [
        {
            number: "01",
            icon: <Target size={32} color="#714B38" />,
            title: "Discovery & Audit",
            description: "We analyse your current digital presence, competitors, and Indian market opportunities."
        },
        {
            number: "02",
            icon: <FileText size={32} color="#714B38" />,
            title: "Strategy Development",
            description: "Create a customised digital marketing strategy aligned with your business goals and budget."
        },
        {
            number: "03",
            icon: <TrendingUp size={32} color="#714B38" />,
            title: "Implementation",
            description: "Execute your digital marketing campaigns with precision and attention to detail."
        },
        {
            number: "04",
            icon: <BarChart3 size={32} color="#714B38" />,
            title: "Monitor & Optimise",
            description: "Continuously track performance and make data-driven optimisations for better results."
        }
    ];

    const whyChooseUs = [
        {
            icon: <Globe size={32} color="#714B38" />,
            title: "Indian Market Expertise",
            description: "Deep understanding of Indian consumer behavior, local SEO, and compliance requirements."
        },
        {
            icon: <BarChart3 size={32} color="#714B38" />,
            title: "Transparent Reporting",
            description: "Clear, comprehensive reports showing exactly how your investment is performing."
        },
        {
            icon: <Users size={32} color="#714B38" />,
            title: "Dedicated Account Management",
            description: "Personal account managers who understand your business and are available during Indian business hours."
        },
        {
            icon: <Smartphone size={32} color="#714B38" />,
            title: "Mobile-First Approach",
            description: "All campaigns optimised for the mobile-first Indian market."
        }
    ];

    return (
        <div style={{ backgroundColor: '#eadccc', minHeight: '100vh' }}>
            <Header />
            {/* Hero Section */}
            <section style={{
                backgroundColor: '#f8f9fa',
                padding: '4rem 2rem',
                textAlign: 'center'
            }}>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <h1 style={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                        lineHeight: '1.2'
                    }}>
                        Digital Marketing Services for <span style={{ color: '#714B38' }}>Indian Businesses</span>
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#666',
                        marginBottom: '2rem'
                    }}>
                        Comprehensive digital marketing solutions designed to help Indian businesses grow their online presence, drive qualified leads, and increase revenue through proven strategies.
                    </p>
                    <button style={{
                        backgroundColor: '#714B38',
                        color: 'white',
                        border: 'none',
                        padding: '0.75rem 2rem',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        Get Free Consultation →
                    </button>
                </div>
            </section>

            {/* Services Grid */}
            <section style={{
                padding: '4rem 2rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <div style={{
                    textAlign: 'center',
                    marginBottom: '3rem'
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
                        color: '#666'
                    }}>
                        Choose from our comprehensive suite of digital marketing services
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <div key={index} style={{
                            backgroundColor: '#fff',
                            border: service.featured ? '2px solid #714B38' : '1px solid #e0e0e0',
                            borderRadius: '8px',
                            padding: '2rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            position: 'relative'
                        }}>
                            {service.featured && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-10px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#714B38',
                                    color: 'white',
                                    padding: '0.25rem 1rem',
                                    borderRadius: '12px',
                                    fontSize: '0.8rem',
                                    fontWeight: '500'
                                }}>
                                    Most Popular
                                </div>
                            )}

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '1rem'
                            }}>
                                <div style={{
                                    backgroundColor: '#e3f2fd',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '1rem'
                                }}>
                                    {service.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 'bold',
                                    margin: '0'
                                }}>
                                    {service.title}
                                </h3>
                            </div>

                            <p style={{
                                color: '#666',
                                marginBottom: '1.5rem',
                                fontSize: '0.95rem'
                            }}>
                                {service.description}
                            </p>

                            <ul style={{
                                listStyle: 'none',
                                padding: '0',
                                margin: '0 0 1.5rem 0'
                            }}>
                                {service.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '0.5rem',
                                        fontSize: '0.9rem'
                                    }}>
                                        <span style={{
                                            color: '#28a745',
                                            marginRight: '0.5rem',
                                            fontWeight: 'bold'
                                        }}>
                                            ✓
                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div style={{
                                borderTop: '1px solid #e0e0e0',
                                paddingTop: '1rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <div style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    color: '#714B38'
                                }}>
                                    {service.price}
                                </div>
                                <button style={{
                                    backgroundColor: service.featured ? '#714B38' : 'transparent',
                                    color: service.featured ? 'white' : '#714B38',
                                    border: service.featured ? 'none' : '2px solid #714B38',
                                    padding: '0.5rem 1.5rem',
                                    borderRadius: '4px',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    cursor: 'pointer'
                                }}>
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section style={{
                backgroundColor: '#f8f9fa',
                padding: '4rem 2rem'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    textAlign: 'center'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem'
                    }}>
                        Our Proven Process
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: '#666',
                        marginBottom: '3rem'
                    }}>
                        How we deliver results for Indian businesses
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem'
                    }}>
                        {processSteps.map((step, index) => (
                            <div key={index} style={{
                                backgroundColor: '#fff',
                                padding: '2rem',
                                borderRadius: '8px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                position: 'relative'
                            }}>
                                <div style={{
                                    backgroundColor: '#714B38',
                                    color: 'white',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    margin: '0 auto 1rem'
                                }}>
                                    {step.number}
                                </div>

                                <div style={{
                                    marginBottom: '1rem',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    {step.icon}
                                </div>

                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 'bold',
                                    marginBottom: '1rem'
                                }}>
                                    {step.title}
                                </h3>

                                <p style={{
                                    color: '#666',
                                    fontSize: '0.95rem'
                                }}>
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section style={{
                backgroundColor: '#fff',
                padding: '4rem 2rem'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    textAlign: 'center'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem'
                    }}>
                        Why Choose Rankvertise?
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: '#666',
                        marginBottom: '3rem'
                    }}>
                        What sets us apart in the Indian digital marketing landscape
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem'
                    }}>
                        {whyChooseUs.map((item, index) => (
                            <div key={index} style={{
                                backgroundColor: '#f8f9fa',
                                padding: '2rem',
                                borderRadius: '8px',
                                textAlign: 'center'
                            }}>
                                <div style={{
                                    marginBottom: '1rem',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    {item.icon}
                                </div>

                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 'bold',
                                    marginBottom: '1rem'
                                }}>
                                    {item.title}
                                </h3>

                                <p style={{
                                    color: '#666',
                                    fontSize: '0.95rem'
                                }}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section style={{
                backgroundColor: '#714B38',
                color: 'white',
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
                        Results That Speak for Themselves
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        marginBottom: '3rem',
                        opacity: '0.9'
                    }}>
                        See how we've helped Indian businesses achieve their digital marketing goals
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        <div style={{
                            backgroundColor: '#eadccc',
                            color: '#333',
                            padding: '2rem',
                            borderRadius: '8px',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                fontSize: '3rem',
                                fontWeight: 'bold',
                                color: '#714B38',
                                marginBottom: '0.5rem'
                            }}>
                                400%
                            </div>
                            <div style={{
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem'
                            }}>
                                ROI Increase
                            </div>
                            <div style={{
                                color: '#666',
                                fontSize: '0.9rem'
                            }}>
                                Average return on investment for our PPC campaigns
                            </div>
                        </div>

                        <div style={{
                            backgroundColor: '#eadccc',
                            color: '#333',
                            padding: '2rem',
                            borderRadius: '8px',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                fontSize: '3rem',
                                fontWeight: 'bold',
                                color: '#714B38',
                                marginBottom: '0.5rem'
                            }}>
                                150%
                            </div>
                            <div style={{
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem'
                            }}>
                                Traffic Growth
                            </div>
                            <div style={{
                                color: '#666',
                                fontSize: '0.9rem'
                            }}>
                                Average organic traffic increase through our SEO services
                            </div>
                        </div>

                        <div style={{
                            backgroundColor: '#eadccc',
                            color: '#333',
                            padding: '2rem',
                            borderRadius: '8px',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                fontSize: '3rem',
                                fontWeight: 'bold',
                                color: '#714B38',
                                marginBottom: '0.5rem'
                            }}>
                                98%
                            </div>
                            <div style={{
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem'
                            }}>
                                Client Retention
                            </div>
                            <div style={{
                                color: '#666',
                                fontSize: '0.9rem'
                            }}>
                                Of our clients continue working with us year after year
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                backgroundColor: '#f8f9fa',
                padding: '4rem 2rem',
                textAlign: 'center'
            }}>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem'
                    }}>
                        Ready to Grow Your Indian Business?
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#666',
                        marginBottom: '2rem'
                    }}>
                        Get a free consultation and custom digital marketing strategy tailored to your business goals and the Indian market.
                    </p>
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <button style={{
                            backgroundColor: '#714B38',
                            color: 'white',
                            border: 'none',
                            padding: '0.75rem 2rem',
                            borderRadius: '4px',
                            fontSize: '1rem',
                            fontWeight: '500',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            Get Free Consultation →
                        </button>
                        <button style={{
                            backgroundColor: 'transparent',
                            color: '#714B38',
                            border: '2px solid #714B38',
                            padding: '0.75rem 2rem',
                            borderRadius: '4px',
                            fontSize: '1rem',
                            fontWeight: '500',
                            cursor: 'pointer'
                        }}>
                            View Case Studies
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default RankvertiseServices;