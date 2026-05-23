import { useMemo, useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import './OrbitImages.css';

const dummyLogos = [
    "https://static.wixstatic.com/media/4fce5e_f579dec309b24713bbbacae25da05c5c~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/18.png",
    "https://static.wixstatic.com/media/4fce5e_3a747d46d465459cb71669eb0a5e7a10~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/17.png",
    "https://static.wixstatic.com/media/4fce5e_23443126bf6443f0b7e88ffc57d846be~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/19.png",
    "https://static.wixstatic.com/media/4fce5e_4dfc40799fb242479d108fa60e46653c~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/14.png",
    "https://static.wixstatic.com/media/4fce5e_40e22c72ffb9402e9c8ee15d632cf7e2~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/15.png",
    "https://static.wixstatic.com/media/4fce5e_d8b0bfe9f60f443dbf9a8d0ebaf52d83~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/16.png",
    "https://static.wixstatic.com/media/4fce5e_a52f704c9aa345f0a911415e81747761~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/13.png",
    "https://static.wixstatic.com/media/4fce5e_e9e4b828abcd4ce1a11be0ee435cefc8~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/10.png",
    "https://static.wixstatic.com/media/4fce5e_a911a0ea4c4d46a0928f5094d35aa054~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9.png",
    "https://static.wixstatic.com/media/4fce5e_896ce7936ef548cf84a6f6135c629d22~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11.png",
    "https://static.wixstatic.com/media/4fce5e_d8be49e8f5cb48259be1fa196c0fb0c6~mv2.png/v1/fill/w_319,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/12.png"
];

export function ClientOrbitSection() {
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
                        images={dummyLogos}
                        shape="ellipse"
                        showPath={true}
                        pathColor="rgba(245, 235, 224, 0.35)" /* HIGH CONTRAST CLEAR AXIS PATH LINE */
                        pathWidth={2.5}                      /* Line thodi bold ki taaki saaf dikhe */
                        duration={35}
                        itemSize={110}                       /* LOGOS SIZE EXPANDED FROM 75 TO 110 */
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

// ── INNER STRUCTURAL CALCULATION CONTROLLERS (DOMINIK KOCH) ──
function generateEllipsePath(cx, cy, rx, ry) {
    return `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 0 ${cx - rx} ${cy}`;
}
function generateCirclePath(cx, cy, r) { return generateEllipsePath(cx, cy, r, r); }
function generateSquarePath(cx, cy, size) {
    const h = size / 2; return `M ${cx - h} ${cy - h} L ${cx + h} ${cy - h} L ${cx + h} ${cy + h} L ${cx - h} ${cy + h} Z`;
}
function generateRectanglePath(cx, cy, w, h) {
    const hw = w / 2; const hh = h / 2; return `M ${cx - hw} ${cy - hh} L ${cx + hw} ${cy - hh} L ${cx + hw} ${cy + hh} L ${cx - hw} ${cy - hh} Z`;
}
function generateTrianglePath(cx, cy, size) {
    const height = (size * Math.sqrt(3)) / 2; const hs = size / 2; return `M ${cx} ${cy - height / 1.5} L ${cx + hs} ${cy + height / 3} L ${cx - hs} ${cy + height / 3} Z`;
}
function generateStarPath(cx, cy, outerR, innerR, points) {
    const step = Math.PI / points; let path = '';
    for (let i = 0; i < 2 * points; i++) {
        const r = i % 2 === 0 ? outerR : innerR; const angle = i * step - Math.PI / 2;
        const x = cx + r * Math.cos(angle); const y = cy + r * Math.sin(angle);
        path += i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
    }
    return path + ' Z';
}
function generateHeartPath(cx, cy, size) {
    const s = size / 30; return `M ${cx} ${cy + 12 * s} C ${cx - 20 * s} ${cy - 5 * s}, ${cx - 12 * s} ${cy - 18 * s}, ${cx} ${cy - 8 * s} C ${cx + 12 * s} ${cy - 18 * s}, ${cx + 20 * s} ${cy - 5 * s}, ${cx} ${cy + 12 * s}`;
}
function generateInfinityPath(cx, cy, w, h) {
    const hw = w / 2; const hh = h / 2; return `M ${cx} ${cy} C ${cx + hw * 0.5} ${cy - hh}, ${cx + hw} ${cy - hh}, ${cx + hw} ${cy} C ${cx + hw} ${cy + hh}, ${cx + hw * 0.5} ${cy + hh}, ${cx} ${cy} C ${cx - hw * 0.5} ${cy + hh}, ${cx - hw} ${cy + hh}, ${cx - hw} ${cy} C ${cx - hw} ${cy - hh}, ${cx - hw * 0.5} ${cy - hh}, ${cx} ${cy}`;
}
function generateWavePath(cx, cy, w, amplitude, waves) {
    const pts = []; const segs = waves * 20; const hw = w / 2;
    for (let i = 0; i <= segs; i++) {
        const x = cx - hw + (w * i) / segs; const y = cy + Math.sin((i / segs) * waves * 2 * Math.PI) * amplitude; pts.push(i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`);
    }
    for (let i = segs; i >= 0; i--) {
        const x = cx - hw + (w * i) / segs; const y = cy - Math.sin((i / segs) * waves * 2 * Math.PI) * amplitude; pts.push(`L ${x} ${y}`);
    }
    return pts.join(' ') + ' Z';
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
    images = [],
    altPrefix = 'Orbiting image',
    shape = 'ellipse',
    customPath,
    baseWidth = 1400,
    radiusX = 700,
    radiusY = 170,
    radius = 300,
    starPoints = 5,
    starInnerRatio = 0.5,
    rotation = -8,
    duration = 40,
    itemSize = 64,
    direction = 'normal',
    fill = true,
    width = 100,
    height = 100,
    className = '',
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
        switch (shape) {
            case 'circle': return generateCirclePath(designCenterX, designCenterY, radius);
            case 'ellipse': return generateEllipsePath(designCenterX, designCenterY, radiusX, radiusY);
            case 'square': return generateSquarePath(designCenterX, designCenterY, radius * 2);
            case 'rectangle': return generateRectanglePath(designCenterX, designCenterY, radiusX * 2, radiusY * 2);
            case 'triangle': return generateTrianglePath(designCenterX, designCenterY, radius * 2);
            case 'star': return generateStarPath(designCenterX, designCenterY, radius, radius * starInnerRatio, starPoints);
            case 'heart': return generateHeartPath(designCenterX, designCenterY, radius * 2);
            case 'infinity': return generateInfinityPath(designCenterX, designCenterY, radiusX * 2, radiusY * 2);
            case 'wave': return generateWavePath(designCenterX, designCenterY, radiusX * 2, radiusY, 3);
            case 'custom': return customPath || generateCirclePath(designCenterX, designCenterY, radius);
            default: return generateEllipsePath(designCenterX, designCenterY, radiusX, radiusY);
        }
    }, [shape, customPath, designCenterX, designCenterY, radiusX, radiusY, radius, starPoints, starInnerRatio]);

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

    const containerWidth = responsive ? '100%' : (typeof width === 'number' ? width : '100%');
    const containerHeight = responsive ? 'auto' : (typeof height === 'number' ? height : (typeof width === 'number' ? width : 'auto'));

    const items = images.map((src, index) => (
        <div key={src} className="orbit-image-wrapper">
            <img
                src={src}
                alt={`${altPrefix} ${index + 1}`}
                draggable={false}
                className="orbit-image"
            />
        </div>
    ));

    return (
        <div
            ref={containerRef}
            className={`orbit-container ${className}`}
            style={{
                width: containerWidth,
                height: containerHeight,
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

                    {items.map((item, index) => (
                        <OrbitItem
                            key={index}
                            item={item}
                            index={index}
                            totalItems={items.length}
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