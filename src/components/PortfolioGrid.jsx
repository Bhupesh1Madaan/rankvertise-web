import React from "react";
import { useNavigate } from "react-router-dom"; // if using react-router

const portfolioItems = [
    {
        title: "Project One",
        description: "An amazing project demonstrating design skills.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        portfolioLink: "/portfolio/1",
    },
    {
        title: "Project Two",
        description: "Another project showcasing creativity.",
        videoUrl: "https://www.w3schools.com/html/movie.mp4",
        portfolioLink: "/portfolio/2",
    },
    {
        title: "Project Three",
        description: "A cool project with modern UI/UX.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        portfolioLink: "/portfolio/3",
    },
    {
        title: "Project Four",
        description: "Interactive and engaging project.",
        videoUrl: "https://www.w3schools.com/html/movie.mp4",
        portfolioLink: "/portfolio/4",
    },
];

const PortfolioGrid = () => {
    const navigate = useNavigate(); // react-router navigation

    return (
        <section style={{ padding: "4rem 2rem", background: "#f5f5f5" }}>
            <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "2rem" }}>
                Our Portfolio
            </h2>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "2rem",
                }}
            >
                {portfolioItems.map((item, idx) => (
                    <div
                        key={idx}
                        onClick={() => navigate(item.portfolioLink)}
                        style={{
                            background: "#fff",
                            borderRadius: "12px",
                            overflow: "hidden",
                            cursor: "pointer",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                            transition: "transform 0.3s",
                        }}
                        onMouseEnter={(e) => {
                            const video = e.currentTarget.querySelector("video");
                            if (video) video.play();
                        }}
                        onMouseLeave={(e) => {
                            const video = e.currentTarget.querySelector("video");
                            if (video) video.pause();
                            if (video) video.currentTime = 0;
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                height: "180px",
                                overflow: "hidden",
                                position: "relative",
                            }}
                        >
                            <video
                                src={item.videoUrl}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "12px 12px 0 0",
                                }}
                                muted
                                loop
                                playsInline
                            />
                        </div>
                        <div style={{ padding: "1rem" }}>
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                                {item.title}
                            </h3>
                            <p style={{ fontSize: "1rem", color: "#555" }}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PortfolioGrid;
