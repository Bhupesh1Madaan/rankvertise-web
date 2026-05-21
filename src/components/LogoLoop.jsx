import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';
import './LogoLoop.css';

const ANIMATION_CONFIG = { SMOOTH_TAU: 0.25, MIN_COPIES: 2, COPY_HEADROOM: 2 };
const toCssLength = value => (typeof value === 'number' ? `${value}px` : (value ?? undefined));

const useResizeObserver = (callback, elements) => {
    useEffect(() => {
        if (!window.ResizeObserver) {
            window.addEventListener('resize', callback);
            callback();
            return () => window.removeEventListener('resize', callback);
        }
        const observers = elements.map(ref => {
            if (!ref.current) return null;
            const observer = new ResizeObserver(callback);
            observer.observe(ref.current);
            return observer;
        });
        callback();
        return () => observers.forEach(observer => observer?.disconnect());
    }, [callback]);
};

const useImageLoader = (seqRef, onLoad) => {
    useEffect(() => {
        const images = seqRef.current?.querySelectorAll('img') ?? [];
        if (images.length === 0) { onLoad(); return; }
        let remainingImages = images.length;
        const handleImageLoad = () => {
            remainingImages -= 1;
            if (remainingImages === 0) onLoad();
        };
        images.forEach(img => {
            if (img.complete) handleImageLoad();
            else {
                img.addEventListener('load', handleImageLoad, { once: true });
                img.addEventListener('error', handleImageLoad, { once: true });
            }
        });
    }, [onLoad, seqRef]);
};

const useAnimationLoop = (trackRef, targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical) => {
    const rafRef = useRef(null);
    const lastTimestampRef = useRef(null);
    const offsetRef = useRef(0);
    const velocityRef = useRef(0);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const seqSize = isVertical ? seqHeight : seqWidth;

        const animate = timestamp => {
            if (lastTimestampRef.current === null) lastTimestampRef.current = timestamp;
            const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
            lastTimestampRef.current = timestamp;

            const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;
            const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
            velocityRef.current += (target - velocityRef.current) * easingFactor;

            if (seqSize > 0) {
                let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
                nextOffset = ((nextOffset % seqSize) + seqSize) % seqSize;
                offsetRef.current = nextOffset;
                track.style.transform = isVertical ? `translate3d(0, ${-offsetRef.current}px, 0)` : `translate3d(${-offsetRef.current}px, 0, 0)`;
            }
            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);
        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, [targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical, trackRef]);
};

export const LogoLoop = memo(({
    logos, speed = 80, direction = 'left', width = '100%', logoHeight = 35, gap = 50,
    pauseOnHover = true, hoverSpeed, fadeOut = true, fadeOutColor = '#f5ebe0', scaleOnHover = false,
    renderItem, ariaLabel = 'USP Track marketing labels', className, style
}) => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const seqRef = useRef(null);
    const [seqWidth, setSeqWidth] = useState(0);
    const [seqHeight, setSeqHeight] = useState(0);
    const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState(false);

    const effectiveHoverSpeed = useMemo(() => {
        if (hoverSpeed !== undefined) return hoverSpeed;
        return pauseOnHover ? 0 : undefined;
    }, [hoverSpeed, pauseOnHover]);

    const isVertical = direction === 'up' || direction === 'down';
    const targetVelocity = useMemo(() => speed * (direction === 'left' || direction === 'up' ? 1 : -1), [speed, direction]);

    const updateDimensions = useCallback(() => {
        const containerWidth = containerRef.current?.clientWidth ?? 0;
        const sequenceWidth = seqRef.current?.getBoundingClientRect?.().width ?? 0;
        const sequenceHeight = seqRef.current?.getBoundingClientRect?.().height ?? 0;

        if (isVertical && sequenceHeight > 0) {
            setSeqHeight(Math.ceil(sequenceHeight));
            setCopyCount(Math.ceil(window.innerHeight / sequenceHeight) + ANIMATION_CONFIG.COPY_HEADROOM);
        } else if (sequenceWidth > 0) {
            setSeqWidth(Math.ceil(sequenceWidth));
            setCopyCount(Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM);
        }
    }, [isVertical]);

    useResizeObserver(updateDimensions, [containerRef, seqRef]);
    useImageLoader(seqRef, updateDimensions);
    useAnimationLoop(trackRef, targetVelocity, seqWidth, seqHeight, isHovered, effectiveHoverSpeed, isVertical);

    return (
        <div ref={containerRef} className={`logoloop ${fadeOut ? 'logoloop--fade' : ''} ${className ?? ''}`} style={{ '--logoloop-gap': `${gap}px`, '--logoloop-logoHeight': `${logoHeight}px`, '--logoloop-fadeColor': fadeOutColor, ...style }}>
            <div className="logoloop__track" ref={trackRef} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {Array.from({ length: copyCount }).map((_, cIdx) => (
                    <ul className="logoloop__list" key={cIdx} ref={cIdx === 0 ? seqRef : undefined}>
                        {logos.map((logo, lIdx) => (
                            <li className="logoloop__item" key={`${cIdx}-${lIdx}`}>
                                {renderItem ? renderItem(logo) : <span className="logo-usp-node">{logo.text}</span>}
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
});