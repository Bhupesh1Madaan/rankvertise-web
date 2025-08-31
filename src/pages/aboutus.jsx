import React, { useState } from 'react';
import { Heart, Shield, Lightbulb, Users, MapPin, Award, Star, Trophy } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
    const [hoveredStat, setHoveredStat] = useState(null);
    const [hoveredTeamMember, setHoveredTeamMember] = useState(null);


    const stats = [
        { number: '150+', label: 'Indian Clients Served', description: 'From startups to enterprise businesses' },
        { number: '5+', label: 'Years in Business', description: 'Established and trusted since 2019' },
        { number: '400%', label: 'Average ROI Increase', description: 'Proven results across all our services' },
        { number: '98%', label: 'Client Retention Rate', description: 'Long-term partnerships built on trust' }
    ];

    const values = [
        {
            icon: <Heart size={40} />,
            title: 'Client-First Approach',
            description: 'Every strategy we develop puts our Indian clients\' success at the forefront. Your growth is our primary measure of success.'
        },
        {
            icon: <Shield size={40} />,
            title: 'Transparency & Trust',
            description: 'We believe in complete transparency with our reporting, pricing, and communication. No hidden fees, no confusing jargon.'
        },
        {
            icon: <Lightbulb size={40} />,
            title: 'Innovation & Results',
            description: 'We stay ahead of digital marketing trends and use cutting-edge strategies to deliver measurable results for our clients.'
        },
        {
            icon: <Users size={40} />,
            title: 'Collaborative Partnership',
            description: 'We work as an extension of your team, understanding your business inside and out to deliver personalised solutions.'
        }
    ];

    const teamMembers = [
        {
            name: 'Sarah Mitchell',
            role: 'Founder & CEO',
            experience: '8+ years',
            speciality: 'Digital Strategy & Business Growth',
            location: 'Melbourne, VIC',
            image: '/api/placeholder/150/150'
        },
        {
            name: 'Michael Chen',
            role: 'Head of SEO & Analytics',
            experience: '6+ years',
            speciality: 'Technical SEO & Data Analysis',
            location: 'Sydney, NSW',
            image: '/api/placeholder/150/150'
        },
        {
            name: 'Emma Rodriguez',
            role: 'Creative Director',
            experience: '7+ years',
            speciality: 'Content & Social Media Strategy',
            location: 'Brisbane, QLD',
            image: '/api/placeholder/150/150'
        },
        {
            name: 'James Thompson',
            role: 'PPC Specialist',
            experience: '5+ years',
            speciality: 'Google Ads & Paid Campaigns',
            location: 'Perth, WA',
            image: '/api/placeholder/150/150'
        }
    ];

    const timeline = [
        {
            year: '2019',
            title: 'Rankvertise Founded',
            description: 'Started as a boutique digital marketing consultancy in Melbourne, focusing on helping small Indian businesses grow online.'
        },
        {
            year: '2020',
            title: 'Team Expansion',
            description: 'Expanded our team to include specialists in SEO, PPC, and social media marketing. Opened our first Sydney office.'
        },
        {
            year: '2021',
            title: 'Google Premier Partner',
            description: 'Achieved Google Premier Partner status and became an official Facebook Marketing Partner, validating our expertise.'
        },
        {
            year: '2022',
            title: 'National Presence',
            description: 'Expanded operations to Brisbane and Perth, serving clients across all major Indian cities.'
        },
        {
            year: '2023',
            title: 'Industry Recognition',
            description: 'Won multiple Indian Digital Marketing Awards and reached 150+ active clients milestone.'
        }
    ];

    const achievements = [
        {
            icon: <Award size={30} />,
            title: 'Google Premier Partner',
            description: 'Certified Google Premier Partner with advanced expertise in Google Ads and Analytics'
        },
        {
            icon: <Star size={30} />,
            title: 'Facebook Marketing Partner',
            description: 'Official Facebook Marketing Partner with proven success in social media advertising'
        },
        {
            icon: <Trophy size={30} />,
            title: 'HubSpot Certified',
            description: 'Certified in inbound marketing and sales enablement strategies'
        },
        {
            icon: <Award size={30} />,
            title: 'Indian Digital Marketing Awards',
            description: 'Winner of \'Best SEO Campaign\' and \'Excellence in Digital Strategy\' 2023'
        }
    ];

    const compliance = [
        '✓ Indian Business Number (ABN): 12 345 678 901',
        '✓ ACCC Compliant Marketing Practices',
        '✓ Privacy Act 1988 Compliant Data Handling'
    ];

    return (
        <div style={{ backgroundColor: '#eadccc', minHeight: '100vh' }}>
            <Header />
            {/* About Rankvertise Badge
            <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'linear-gradient(135deg, #714B38, #b49b90)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: 'bold'
            }}>
                About Rankvertise
            </div> */}

            {/* Hero Section */}
            <section style={{
                textAlign: 'center',
                padding: '100px 20px 80px',
                background: 'linear-gradient(135deg, #b49b90 0%, #eadccc 100%)'
            }}>
                <h1 style={{
                    fontSize: '3.5rem',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                    background: 'linear-gradient(135deg, #4d3427, #714B38)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>
                    Helping Indian Businesses <span style={{ color: '#714B38' }}>Thrive Online</span>
                </h1>
                <p style={{
                    fontSize: '1.2rem',
                    color: '#000',
                    maxWidth: '800px',
                    margin: '0 auto 40px',
                    lineHeight: '1.8'
                }}>
                    We're a team of digital marketing specialists with deep expertise in the Indian market. Our
                    mission is to help local businesses grow through data-driven strategies and cutting-edge digital
                    marketing techniques.
                </p>
                <button style={{
                    background: 'linear-gradient(135deg, #714B38, #b49b90)',
                    color: 'white',
                    border: 'none',
                    padding: '15px 30px',
                    borderRadius: '25px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
                }}
                    onMouseOver={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.4)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.3)';
                    }}>
                    Start Your Journey →
                </button>
            </section>

            {/* Stats Section */}
            <section style={{
                padding: '80px 20px',
                // background: 'white'
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '40px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            style={{
                                textAlign: 'center',
                                padding: '30px 20px',
                                borderRadius: '15px',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                background: hoveredStat === index ? 'linear-gradient(135deg, #714B38, #b49b90)' : 'transparent',
                                color: hoveredStat === index ? 'white' : '#333',
                                transform: hoveredStat === index ? 'translateY(-10px)' : 'translateY(0)',
                                boxShadow: hoveredStat === index ? '0 20px 40px rgba(139, 92, 246, 0.3)' : 'none'
                            }}
                            onMouseEnter={() => setHoveredStat(index)}
                            onMouseLeave={() => setHoveredStat(null)}
                        >
                            <div style={{
                                fontSize: '3rem',
                                fontWeight: 'bold',
                                color: hoveredStat === index ? 'white' : '#714B38',
                                marginBottom: '15px'
                            }}>
                                {stat.number}
                            </div>
                            <div style={{
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                marginBottom: '10px'
                            }}>
                                {stat.label}
                            </div>
                            <div style={{
                                fontSize: '0.9rem',
                                opacity: '0.8'
                            }}>
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Story Section */}
            <section style={{
                padding: '80px 20px',
                background: 'linear-gradient(135deg, #eadccc 0%, #b49b90 100%)'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '60px',
                    alignItems: 'center'
                }}>
                    <div>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: 'bold',
                            marginBottom: '30px',
                            color: '#4d3427'
                        }}>
                            Our Story: From Melbourne Startup to National Leader
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#000',
                            marginBottom: '20px',
                            lineHeight: '1.8'
                        }}>
                            Founded in 2019 in Melbourne, Rankvertise began with a simple mission: to
                            help Indian businesses succeed in the digital landscape. What started
                            as a small consultancy has grown into a trusted partner for over 150
                            businesses across India.
                        </p>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#000',
                            lineHeight: '1.8'
                        }}>
                            We understand the unique challenges Indian businesses face - from
                            navigating local regulations like the Privacy Act and SPAM Act, to
                            competing in diverse markets from Sydney's corporate landscape to
                            Perth's resource sector.
                        </p>
                        <div style={{ marginTop: '30px' }}>
                            {compliance.map((item, index) => (
                                <div key={index} style={{
                                    color: '#714B38',
                                    fontSize: '1rem',
                                    marginBottom: '8px',
                                    fontWeight: '500'
                                }}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{
                        width: '100%',
                        height: '400px',
                        background: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80") center/cover',
                        borderRadius: '15px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                    }} />
                </div>
            </section>

            {/* Values Section */}
            <section style={{
                padding: '80px 20px',
                // background: 'white'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        color: '#4d3427'
                    }}>
                        Our Values Drive Everything We Do
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#64748b',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        The principles that guide our approach to digital marketing and client relationships
                    </p>
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '40px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {values.map((value, index) => (
                        <div
                            key={index}
                            style={{
                                textAlign: 'center',
                                padding: '40px 30px',
                                borderRadius: '15px',
                                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                                border: '1px solid #e2e8f0',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{
                                color: '#714B38',
                                marginBottom: '20px',
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                {value.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.3rem',
                                fontWeight: 'bold',
                                marginBottom: '15px',
                                color: '#4d3427'
                            }}>
                                {value.title}
                            </h3>
                            <p style={{
                                color: '#64748b',
                                lineHeight: '1.6'
                            }}>
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section style={{
                padding: '80px 20px',
                background: 'linear-gradient(135deg, #b49b90 0%, #eadccc 100%)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        color: '#4d3427'
                    }}>
                        Meet Our Expert Team
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#64748b'
                    }}>
                        Digital marketing specialists with deep Indian market expertise
                    </p>
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '40px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            style={{
                                // background: 'white',
                                borderRadius: '15px',
                                padding: '30px',
                                textAlign: 'center',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s ease',
                                transform: hoveredTeamMember === index ? 'translateY(-10px)' : 'translateY(0)',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={() => setHoveredTeamMember(index)}
                            onMouseLeave={() => setHoveredTeamMember(null)}
                        >
                            <div style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #714B38, #b49b90)',
                                margin: '0 auto 20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                color: 'white',
                                fontWeight: 'bold'
                            }}>
                                {member.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <h3 style={{
                                fontSize: '1.3rem',
                                fontWeight: 'bold',
                                marginBottom: '5px',
                                color: '#4d3427'
                            }}>
                                {member.name}
                            </h3>
                            <div style={{
                                color: '#714B38',
                                fontWeight: 'bold',
                                marginBottom: '10px'
                            }}>
                                {member.role}
                            </div>
                            <div style={{
                                fontSize: '0.9rem',
                                color: '#64748b',
                                marginBottom: '5px'
                            }}>
                                {member.experience}
                            </div>
                            <div style={{
                                fontSize: '0.9rem',
                                color: '#64748b',
                                marginBottom: '10px'
                            }}>
                                {member.speciality}
                            </div>
                            <div style={{
                                fontSize: '0.9rem',
                                color: '#714B38',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '5px'
                            }}>
                                <MapPin size={14} />
                                {member.location}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Timeline Section */}
            <section style={{
                padding: '80px 20px',
                // background: 'white'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        color: '#4d3427'
                    }}>
                        Our Journey Through the Years
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#64748b'
                    }}>
                        Key milestones in our growth and evolution as India's trusted digital marketing partner
                    </p>
                </div>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {timeline.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                marginBottom: '50px',
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #714B38, #b49b90)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                                marginRight: '30px',
                                flexShrink: 0
                            }}>
                                {item.year}
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{
                                    fontSize: '1.4rem',
                                    fontWeight: 'bold',
                                    marginBottom: '10px',
                                    color: '#4d3427'
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    color: '#64748b',
                                    lineHeight: '1.6'
                                }}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Achievements Section */}
            <section style={{
                padding: '80px 20px',
                background: 'linear-gradient(135deg, #b49b90 0%, #eadccc 100%)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        color: '#4d3427'
                    }}>
                        Achievements & Certifications
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#64748b'
                    }}>
                        Industry recognition and partnerships that validate our expertise
                    </p>
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            style={{
                                // background: 'white',
                                borderRadius: '15px',
                                padding: '30px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ color: '#714B38', flexShrink: 0 }}>
                                {achievement.icon}
                            </div>
                            <div>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    marginBottom: '8px',
                                    color: '#4d3427'
                                }}>
                                    {achievement.title}
                                </h3>
                                <p style={{
                                    color: '#64748b',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.5'
                                }}>
                                    {achievement.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA Section */}
            <section style={{
                padding: '80px 20px',
                // background: 'white'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '60px',
                    alignItems: 'center'
                }}>
                    <div style={{
                        width: '100%',
                        height: '400px',
                        background: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80") center/cover',
                        borderRadius: '15px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                    }} />
                    <div>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: 'bold',
                            marginBottom: '30px',
                            color: '#4d3427'
                        }}>
                            Why Indian Businesses Choose Rankvertise
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#64748b',
                            marginBottom: '30px',
                            lineHeight: '1.8'
                        }}>
                            We're not just another digital marketing agency. We're your strategic
                            partner in growth, with deep understanding of the Indian market and
                            regulatory environment.
                        </p>
                        <div style={{ marginBottom: '20px' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '15px',
                                gap: '10px'
                            }}>
                                <div style={{ color: '#714B38' }}>🎯</div>
                                <div>
                                    <strong>Local Market Expertise</strong>
                                    <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                                        Deep understanding of Indian consumer behaviour, local SEO, and regional market dynamics
                                    </div>
                                </div>
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '15px',
                                gap: '10px'
                            }}>
                                <div style={{ color: '#714B38' }}>🕐</div>
                                <div>
                                    <strong>Indian Business Hours Support</strong>
                                    <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                                        Dedicated support during Indian business hours with local phone numbers and offices
                                    </div>
                                </div>
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <div style={{ color: '#714B38' }}>⚖️</div>
                                <div>
                                    <strong>Compliance & Regulation Knowledge</strong>
                                    <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                                        Expert knowledge of Indian privacy laws, ACCC guidelines, and industry-specific regulations
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AboutPage;