import React, { useEffect, useRef, useState } from 'react';

const Cursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    // Initial position in center to prevent sticking in corner on load
    const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const ringPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    
    // Check if it's a touch device
    const isTouchDevice = typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches;

    useEffect(() => {
        if (isTouchDevice) return; // Don't run on mobile

        const onMouseMove = (e) => {
            mousePos.current.x = e.clientX;
            mousePos.current.y = e.clientY;
            
            // Move dot instantly
            if (dotRef.current) {
                dotRef.current.style.left = `${mousePos.current.x}px`;
                dotRef.current.style.top = `${mousePos.current.y}px`;
            }
        };

        const renderRing = () => {
            // Lerp logic for smooth following
            const lerp = 0.15;
            ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerp;
            ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerp;

            if (ringRef.current) {
                ringRef.current.style.left = `${ringPos.current.x}px`;
                ringRef.current.style.top = `${ringPos.current.y}px`;
            }

            requestAnimationFrame(renderRing);
        };

        const checkHover = (e) => {
            const tag = e.target.tagName.toLowerCase();
            const isInteractive = tag === 'a' || tag === 'button' || tag === 'input' || tag === 'textarea' || e.target.closest('a') || e.target.closest('button');
            setIsHovering(!!isInteractive);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseover', checkHover);
        
        // Start animation loop
        const animId = requestAnimationFrame(renderRing);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', checkHover);
            cancelAnimationFrame(animId);
        };
    }, [isTouchDevice]);

    if (isTouchDevice) return null;

    return (
        <>
            <div ref={dotRef} className="custom-cursor-dot"></div>
            <div ref={ringRef} className={`custom-cursor-ring ${isHovering ? 'hovering' : ''}`}></div>
        </>
    );
};

export default Cursor;