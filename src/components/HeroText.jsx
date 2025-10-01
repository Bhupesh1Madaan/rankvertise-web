import React, { useState } from "react";

const HeroText = () => {
    const options1 = ["a game", "a business tool", "a website", "an automation"];
    const options2 = [
        "friends in different locations",
        "account managers",
        "remote team members",
        "global collaborators",
    ];
    const options3 = [
        "compete in quick challenges",
        "streamline onboarding",
        "improve collaboration",
        "boost productivity",
    ];

    const brandColor = "#714B38";
    const bgColor = "#EADCCC";
    const textColor = "#714B38";

    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
    const [index3, setIndex3] = useState(0);

    const handleChange = (setter, index, options, e) => {
        e.preventDefault();
        e.stopPropagation();
        setter((index + 1) % options.length);
    };

    const HighlightedWord = ({ index, options, setter }) => {
        const [hovered, setHovered] = useState(false);
        const [buttonHovered, setButtonHovered] = useState(false);

        const isHovered = hovered || buttonHovered;

        return (
            <span
                style={{
                    display: "inline-block",
                    position: "relative",
                    margin: "0 8px",
                    fontWeight: "bold",
                    fontSize: "2rem",
                    color: textColor,
                    borderBottom: `2px solid ${brandColor}`,
                    padding: "0.3rem 0.7rem",
                    borderRadius: "6px",
                    minWidth: "200px",
                    lineHeight: "1.4",
                    whiteSpace: "nowrap",
                    textAlign: "left",
                    transition: "background-color 0.3s ease",
                    backgroundColor: isHovered ? `${brandColor}30` : "transparent",
                    cursor: "pointer",
                    verticalAlign: "middle",
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <button
                    onClick={(e) => handleChange(setter, index, options, e)}
                    onMouseEnter={() => setButtonHovered(true)}
                    onMouseLeave={() => setButtonHovered(false)}
                    style={{
                        position: "absolute",
                        bottom: "calc(100% - 4px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        transition: "opacity 0.3s ease",
                        fontSize: "0.75rem",
                        padding: "6px 12px",
                        borderRadius: "4px",
                        border: "none",
                        backgroundColor: brandColor,
                        color: bgColor,
                        cursor: "pointer",
                        opacity: isHovered ? 1 : 0,
                        pointerEvents: isHovered ? "auto" : "none",
                        whiteSpace: "nowrap",
                        fontWeight: "500",
                        zIndex: 10,
                    }}
                >
                    Change it
                </button>

                {options[index]}
            </span>
        );
    };

    return (
        <div
            style={{
                fontSize: "2rem",
                textAlign: "left",
                fontWeight: "600",
                width: "800px",
                margin: "0 auto",
                color: textColor,
                backgroundColor: bgColor,
                padding: "4rem 2rem 2rem 2rem",
                borderRadius: "12px",
                overflow: "visible",
            }}
        >
            <div style={{ marginBottom: "1.5rem" }}>
                Make me <HighlightedWord index={index1} options={options1} setter={setIndex1} />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
                for <HighlightedWord index={index2} options={options2} setter={setIndex2} />
            </div>
            <div>
                that helps them <HighlightedWord index={index3} options={options3} setter={setIndex3} />
            </div>
        </div>
    );
};

export default HeroText;