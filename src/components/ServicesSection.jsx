import React, { useEffect, useRef } from "react";
import { PenTool, Instagram, BarChart2, Globe, Camera } from "lucide-react";

const services = [
    {
        title: "Brand Identity",
        description:
            "Logo. Voice. Vibe. All dialed in. Whether you're starting out or starting over, we’ll design a brand that actually speaks.",
        items: [
            "Visual identity",
            "Logo design",
            "Brand naming",
            "Brand guidelines",
            "Brand voice & storytelling",
        ],
        keywords: ["branding agency", "brand strategy", "logo design", "visual identity"],
        bgColor: "#714B38",
        icon: <PenTool size={28} color="#fff" />,
    },
    {
        title: "Social Media & Content",
        description:
            "We don’t just manage. We create. Our content strategies are scroll-stopping, algorithm-busting, and extremely double-tap worthy.",
        items: [
            "Content creation",
            "Social media management",
            "Influencer partnerships",
            "Campaign strategy",
            "Content calendars & copywriting",
        ],
        keywords: ["social media marketing", "content creation", "influencer marketing", "performance marketing"],
        bgColor: "#eadccc",
        textColor: "#222",
        icon: <Instagram size={28} color="#222" />,
    },
    {
        title: "Digital Marketing That Clicks",
        description:
            "Your goals + our data-backed brains = ROI that actually means something. From SEO to paid ads, we speak digital fluently.",
        items: [
            "SEO & keyword strategy",
            "Paid ads (Google, Meta, LinkedIn)",
            "Email marketing",
            "Conversion optimization",
        ],
        keywords: ["digital marketing agency", "paid campaigns", "SEO services", "performance marketing"],
        bgColor: "#714B38",
        icon: <BarChart2 size={28} color="#fff" />,
    },
    {
        title: "Web Experiences",
        description:
            "Websites that look hot and load fast. From portfolios to e-commerce, we turn code into conversion.",
        items: [
            "UI/UX design",
            "Shopify & WordPress development",
            "E-commerce experiences",
            "Copywriting & wireframing",
        ],
        keywords: ["website development", "UX/UI design", "ecommerce websites"],
        bgColor: "#eadccc",
        textColor: "#222",
        icon: <Globe size={28} color="#222" />,
    },
    {
        title: "Creative Direction & Production",
        description:
            "Ideas are cute. Execution is everything. From aesthetic to impact, we concept, shoot, and produce brand content that doesn’t just sit pretty, it performs.",
        items: [
            "Campaign ideation",
            "Visual storytelling",
            "Brand films & product shoots",
            "Reels, UGC & viral-first formats",
            "Motion graphics & creative editing",
        ],
        keywords: [
            "creative direction",
            "content production",
            "brand videos",
            "UGC content",
            "motion design",
            "visual storytelling",
            "video marketing",
        ],
        bgColor: "#714B38",
        icon: <Camera size={28} color="#fff" />,
    },
];

const ServicesSection = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const cards = containerRef.current.children;

            Array.from(cards).forEach((card, index) => {
                const start = index * windowHeight * 1.3; // scroll start for this card
                const end = start + windowHeight * 1.3;   // scroll end for this card

                if (scrollY < start) {
                    card.style.opacity = 0;
                    card.style.transform = "translateY(50px)";
                    card.style.zIndex = services.length - index;
                } else if (scrollY >= start && scrollY <= end) {
                    card.style.opacity = 1;
                    card.style.transform = "translateY(0)";
                    card.style.zIndex = services.length - index;
                } else {
                    card.style.opacity = 0;
                    card.style.transform = "translateY(-50px)";
                    card.style.zIndex = services.length - index;
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // initialize
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={containerRef}
            style={{ height: `${services.length * 100}vh`, position: "relative" }}
        >
            {services.map((s, i) => (
                <section
                    key={i}
                    style={{
                        position: "sticky",
                        top: 0,
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: s.bgColor,
                        color: s.textColor || "#fff",
                        fontSize: "1.8rem",
                        padding: "2rem",
                        textAlign: "center",
                        transition: "opacity 0.5s ease, transform 0.5s ease",
                        zIndex: services.length - i,
                    }}
                >
                    <div style={{ marginBottom: "1rem" }}>{s.icon}</div>
                    <h2 style={{ fontSize: "2.8rem", margin: "0 0 10px 0" }}>{s.title}</h2>
                    <p style={{ fontSize: "1.2rem", maxWidth: "600px", marginBottom: "1rem" }}>
                        {s.description}
                    </p>
                    <ul style={{ paddingLeft: "1.5rem", textAlign: "left", marginBottom: "1rem" }}>
                        {s.items.map((item, idx) => (
                            <li key={idx} style={{ marginBottom: "0.4rem" }}>
                                ✦ {item}
                            </li>
                        ))}
                    </ul>
                    <p style={{ fontSize: "0.9rem", color: "#eee" }}>
                        <strong>Keywords:</strong> {s.keywords.join(", ")}
                    </p>
                </section>
            ))}
        </div>
    );
};

export default ServicesSection;
