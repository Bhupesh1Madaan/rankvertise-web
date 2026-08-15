import { useMemo, useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useData } from '../context/DataContext';
import './OrbitImages.css';

const DEFAULT_ORBIT_CLIENTS = [
    { logo: "https://static.wixstatic.com/media/4fce5e_f579dec309b24713bbbacae25da05c5c~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/18.png", url: "https://rankvertise.in" },
    { logo: "https://static.wixstatic.com/media/4fce5e_3a747d46d465459cb71669eb0a5e7a10~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/17.png", url: "https://rankvertise.in" },
    { logo: "https://static.wixstatic.com/media/4fce5e_23443126bf6443f0b7e88ffc57d846be~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/19.png", url: "https://rankvertise.in" },
    { logo: "https://static.wixstatic.com/media/4fce5e_4dfc40799fb242479d108fa60e46653c~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/14.png", url: "https://rankvertise.in" },
    { logo: "https://static.wixstatic.com/media/4fce5e_40e22c72ffb9402e9c8ee15d632cf7e2~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/15.png", url: "https://rankvertise.in" }
];

export function ClientOrbitSection() {
    const { getVal } = useData();
    const rawClients = getVal('client_orbit_data', DEFAULT_ORBIT_CLIENTS);

    // Format check: agar direct strings hon ya objects
    const clientsList = useMemo(() => {
        if (!Array.isArray(rawClients)) return DEFAULT_ORBIT_CLIENTS;
        return rawClients.map(item => {
            if (typeof item === 'string') return { logo: item, url: 'https://rankvertise.in' };
            return item;
        });
    }, [rawClients]);

    return (
        <section className="orbit-showcase-section">
            <div className="orbit-section-header">
                <span className="orbit-label">GLOBAL TRUST MATRIX</span>
                <h2 className="orbit-main-title">Trusted by Innovators Globally</h2>
                <p className="orbit-sub-text">
                    Powering scalable operations and high-impact creative growth loops across active time-zones.
                </p>
            </div>

            <div className="w-full max-w-5xl mx-auto flex justify-center items-center h-[520px]">
                <div className="w-full max-w-5xl mx-auto flex justify-center items-center h-[550px]">
                    <OrbitImages
                        itemsData={clientsList}
                        shape="ellipse"
                        showPath={true}
                        pathColor="rgba(245, 235, 224, 0.35)"
                        pathWidth={2.5}
                        duration={35}
                        itemSize={110}
                        responsive={true}
                        rotation={-6}
                        centerContent={
                            <div className="orbit-center-capsule">
                                <span className="orbit-center-text">Rankvertise Orbit</span>
                            </div>
                        }
                    />
                </div>
            </div>
        </section>
    );
}

function generateEllipsePath(cx, cy, rx, ry) {
    return `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 0 ${cx - rx} ${cy}`;
}

function OrbitItem({ item, index, totalItems, path, itemSize, rotation, progress, fill }) {
    const itemOffset = fill ? (index / totalItems) * 100 : 0;
    const offsetDistance = useTransform(progress, (p) => {
        const offset = (((p + itemOffset) % 100) + 100) % 100;
        return `${offset}%`;
    });

    return (
        <motion.div
            className="orbit-item"
            style={{
                width: itemSize,
                height: itemSize,
                offsetPath: `path("${path}")`,
                offsetRotate: '0deg',
                offsetAnchor: 'center center',
                offsetDistance,
            }}
        >
            <div style={{ transform: `rotate(${-rotation}deg)`, width: '100%', height: '100%' }}>
                {item}
            </div>
        </motion.div>
    );
}

function OrbitImages({
    itemsData = [],
    shape = 'ellipse',
    baseWidth = 1400,
    radiusX = 700,
    radiusY = 170,
    rotation = -8,
    duration = 40,
    itemSize = 64,
    direction = 'normal',
    fill = true,
    showPath = false,
    pathColor = 'rgba(0,0,0,0.1)',
    pathWidth = 2,
    easing = 'linear',
    paused = false,
    centerContent,
    responsive = false,
}) {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);
    const designCenterX = baseWidth / 2;
    const designCenterY = baseWidth / 2;

    const path = useMemo(() => {
        return generateEllipsePath(designCenterX, designCenterY, radiusX, radiusY);
    }, [designCenterX, designCenterY, radiusX, radiusY]);

    useEffect(() => {
        if (!responsive || !containerRef.current) return;
        const updateScale = () => {
            if (!containerRef.current) return;
            setScale(containerRef.current.clientWidth / baseWidth);
        };
        updateScale();
        const observer = new ResizeObserver(updateScale);
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [responsive, baseWidth]);

    const progress = useMotionValue(0);

    useEffect(() => {
        if (paused) return;
        const controls = animate(progress, direction === 'reverse' ? -100 : 100, {
            duration,
            ease: easing,
            repeat: Infinity,
            repeatType: 'loop',
        });
        return () => controls.stop();
    }, [progress, duration, easing, direction, paused]);

    const renderedItems = itemsData.map((client, index) => (
        <a 
            key={index} 
            href={client.url || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="orbit-image-wrapper"
            style={{ textDecoration: 'none', display: 'flex' }}
        >
            <img
                src={client.logo}
                alt={`Client ${index + 1}`}
                draggable={false}
                className="orbit-image"
            />
        </a>
    ));

    return (
        <div
            ref={containerRef}
            className="orbit-container"
            style={{
                width: '100%',
                aspectRatio: responsive ? '1 / 1' : undefined,
            }}
            aria-hidden="true"
        >
            <div
                className={responsive ? 'orbit-scaling-container orbit-scaling-container--responsive' : 'orbit-scaling-container'}
                style={{
                    width: responsive ? baseWidth : '100%',
                    height: responsive ? baseWidth : '100%',
                    transform: responsive ? `translate(-50%, -50%) scale(${scale})` : undefined,
                }}
            >
                <div
                    className="orbit-rotation-wrapper"
                    style={{ transform: `rotate(${rotation}deg)` }}
                >
                    {showPath && (
                        <svg
                            width="100%"
                            height="100%"
                            viewBox={`0 0 ${baseWidth} ${baseWidth}`}
                            className="orbit-path-svg"
                        >
                            <path d={path} fill="none" stroke={pathColor} strokeWidth={pathWidth / scale} />
                        </svg>
                    )}

                    {renderedItems.map((item, index) => (
                        <OrbitItem
                            key={index}
                            item={item}
                            index={index}
                            totalItems={renderedItems.length}
                            path={path}
                            itemSize={itemSize}
                            rotation={rotation}
                            progress={progress}
                            fill={fill}
                        />
                    ))}
                </div>
            </div>

            {centerContent && (
                <div className="orbit-center-content">
                    {centerContent}
                </div>
            )}
        </div>
    );
}