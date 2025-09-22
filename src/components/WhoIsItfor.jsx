import React, { useState } from "react";

const WhoIsItFor = () => {
    const items = [
        "Direct-to-consumer (D2C)",
        "SaaS & tech companies",
        "Lifestyle & fashion",
        "Creators & entrepreneurs",
        "Hospitality & F&B",
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoverDirection, setHoverDirection] = useState(null);

    const getDirection = (e, li) => {
        const w = li.offsetWidth;
        const h = li.offsetHeight;
        const x = (e.nativeEvent.offsetX - w / 2) * (w > h ? h / w : 1);
        const y = (e.nativeEvent.offsetY - h / 2) * (h > w ? w / h : 1);
        const d = Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;
        return d; // 0: top, 1: right, 2: bottom, 3: left
    };

    const handleMouseEnter = (index) => (e) => {
        setHoveredIndex(index);
        setHoverDirection(getDirection(e, e.currentTarget));
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        setHoverDirection(null);
    };

    return (
        <section
            style={{
                padding: "4rem 2rem",
                maxWidth: "1000px",
                margin: "0 auto",
                textAlign: "center",
            }}
        >
            <h2
                style={{
                    fontSize: "2.2rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                }}
            >
                Who’s It For?
            </h2>
            <p style={{ fontSize: "1.1rem", marginBottom: "2rem", color: "#444" }}>
                Startups. Legacy brands. Bootstrapped ideas. Venture-backed rockets. If
                you’re bold, you belong. You also belong if you are:
            </p>

            <ul
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "1rem",
                    listStyle: "none",
                    padding: 0,
                }}
            >
                {items.map((item, i) => {
                    const isHovered = hoveredIndex === i;
                    return (
                        <li
                            key={i}
                            onMouseEnter={handleMouseEnter(i)}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                position: "relative",
                                background: "#f9f9f9",
                                padding: "1rem",
                                borderRadius: "8px",
                                fontWeight: "500",
                                cursor: "pointer",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    background:
                                        "linear-gradient(135deg, #FF6B6B, #FFD93D)",
                                    transform: isHovered
                                        ? "scaleX(1) scaleY(1)"
                                        : "scaleX(0) scaleY(0)",
                                    transition: "transform 0.3s ease",
                                    zIndex: 1,
                                }}
                            />
                            <span
                                style={{
                                    position: "relative",
                                    zIndex: 2,
                                    display: "block",
                                    textAlign: "center",
                                    opacity: isHovered ? 0 : 1,
                                    transition: "opacity 0.3s ease",
                                }}
                            >
                                ✦ {item}
                            </span>
                            <span
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontWeight: "500",
                                    textAlign: "center",
                                    opacity: isHovered ? 1 : 0,
                                    transform: isHovered
                                        ? hoverDirection === 0
                                            ? "translateY(-10px)"
                                            : hoverDirection === 1
                                                ? "translateX(10px)"
                                                : hoverDirection === 2
                                                    ? "translateY(10px)"
                                                    : "translateX(-10px)"
                                        : "translate(0,0)",
                                    transition: "opacity 0.3s ease, transform 0.3s ease",
                                    zIndex: 3,
                                }}
                            >
                                ✦ {item} Details
                            </span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default WhoIsItFor;
