import React, { useEffect, useRef } from "react";

const AboutSection = () => {
    const imgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!imgRef.current) return;
            const section = imgRef.current.closest("section");
            const sectionTop = section.getBoundingClientRect().top;
            const speed = 0.5; // parallax speed
            const offset = -sectionTop * speed;
            imgRef.current.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // initial position

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                background: "#f5f5f5",
                position: "relative",
                padding: "0 2rem",
            }}
        >
            {/* Left text */}
            <div style={{ width: "45%", paddingLeft: "50px", zIndex: 10 }}>
                <h2 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                    About Rankvertise
                </h2>
                <p style={{ fontSize: "1.2rem", maxWidth: "400px", lineHeight: "1.6", color: "#666" }}>
                    We're a team of digital marketing specialists with deep expertise in the Indian market.
                    Our mission is to help local businesses thrive online through data-driven strategies and
                    cutting-edge digital marketing techniques.
                </p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {[
                        "Indian Business Number (ABN): 12 345 678 901",
                        "Google Partner Certified",
                        "Facebook Marketing Partner",
                        "5+ Years Serving Indian Businesses",
                    ].map((item, i) => (
                        <li
                            key={i}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "0.5rem",
                                color: "#28a745",
                            }}
                        >
                            <span style={{ marginRight: "0.5rem" }}>✓</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right frame with parallax image */}
            <div
                style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: "80%",
                        height: "80%",
                        border: "5px solid #ccc",
                        position: "relative",
                        overflow: "hidden",
                        background: "#eee",
                    }}
                >
                    <img
                        ref={imgRef}
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Team working together"
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: "auto",
                            height: "120%",
                            objectFit: "cover",
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
