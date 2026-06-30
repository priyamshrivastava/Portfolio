import React, { useEffect, useState } from 'react';

const SpiderManLogo = () => (
    <svg viewBox="0 0 100 100" className="w-48 h-48 text-primary drop-shadow-[0_0_15px_#E33636]">
        <path fill="currentColor" d="M50,10 C65,10 70,20 70,25 C70,30 60,30 60,40 C60,50 75,55 75,65 C75,75 65,80 50,90 C35,80 25,75 25,65 C25,55 40,50 40,40 C40,30 30,30 30,25 C30,20 35,10 50,10 Z" />
        <path fill="#050505" d="M50,20 C55,20 58,25 58,28 C58,31 55,32 55,38 C55,44 60,45 60,50 C60,55 55,58 50,65 C45,58 40,55 40,50 C40,45 45,44 45,38 C45,32 42,31 42,28 C42,25 45,20 50,20 Z" />
    </svg>
);

const Loader = ({ onLoaded }) => {
    const [phase, setPhase] = useState('logo'); // 'logo', 'webs', 'fading'

    useEffect(() => {
        const timer1 = setTimeout(() => setPhase('webs'), 200);
        const timer2 = setTimeout(() => setPhase('fading'), 1500);
        const timer3 = setTimeout(() => onLoaded(), 2000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [onLoaded]);

    return (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500 ${phase === 'fading' ? 'opacity-0' : 'opacity-100'}`}>
            {/* Web Lines expanding from center */}
            <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute top-1/2 left-1/2 h-[2px] bg-primary origin-left transition-all duration-1000 ease-out"
                        style={{
                            width: phase === 'webs' || phase === 'fading' ? '150%' : '0%',
                            transform: `rotate(${i * 30}deg)`,
                            boxShadow: '0 0 15px #E33636',
                            transitionDelay: `${i * 50}ms`
                        }}
                    ></div>
                ))}
            </div>

            {/* Spider-Man Logo */}
            <div className={`transition-transform duration-500 ease-in-out ${phase === 'logo' ? 'scale-100' : 'scale-125'}`}>
                <SpiderManLogo />
            </div>
            
            {/* Name Reveal */}
            <div className={`absolute bottom-1/4 transition-opacity duration-500 ${phase === 'webs' ? 'opacity-100' : 'opacity-0'}`}>
                <h1 className="font-mono text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
                    &lt;<span className="text-primary">Priyam</span> /&gt;
                </h1>
            </div>
        </div>
    );
};

export default Loader;