import React, { useEffect, useRef, useState } from 'react';
import Typewriter from './Typewriter';
import profilePic from '../../my profile pic 2.jpeg';

const Hero = () => {
    const roles = ["Java Backend Developer", "Spring Boot Engineer", "Competitive Programmer", "Web Slinger (Developer)"];
    const [animationTriggered, setAnimationTriggered] = useState(false);
    
    // Spidey Web/Particles canvas
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        
        let nodes = Array.from({ length: 40 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8,
            radius: Math.random() * 2 + 1
        }));

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw Web Lines between close nodes
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        // Fading red/blue web lines
                        ctx.strokeStyle = `rgba(227, 54, 54, ${1 - dist/150})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            // Draw Nodes
            nodes.forEach(node => {
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.fill();
                
                node.x += node.vx;
                node.y += node.vy;
                
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
            });

            animationFrameId = requestAnimationFrame(render);
        };
        render();

        const handleResize = () => { setCanvasSize(); };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Observer for reveal
    const sectionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // We only want the swing animation to trigger once the user actually sees it.
                    // Delaying it slightly ensures it happens *after* the loader finishes fading out.
                    setTimeout(() => setAnimationTriggered(true), 1500); 
                    
                    const reveals = entry.target.querySelectorAll('.reveal-left, .reveal-right, .reveal-section');
                    reveals.forEach(el => el.classList.add('is-visible'));
                } else {
                    entry.target.classList.remove('is-visible');
                    setAnimationTriggered(false); // Reset animation when scrolling away
                    const reveals = entry.target.querySelectorAll('.reveal-left, .reveal-right, .reveal-section');
                    reveals.forEach(el => el.classList.remove('is-visible'));
                }
            });
        }, { threshold: 0.1 });
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    // Force download logic for Google Drive
    const handleDownload = (e) => {
        e.preventDefault();
        const fileId = '1b_3z7KaBuWfIa497GQJt4s2Fw3WpBybQ';
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
        
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = 'Priyam-Srivastava-Resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20" ref={sectionRef}>
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-40"></canvas>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                
                {/* Left Column (Text) */}
                <div className="flex-1 text-left w-full reveal-left">
                    <p className="text-primary font-mono text-sm uppercase tracking-widest mb-4">
                        // Welcome to my Universe...
                    </p>
                    
                    <h1 className="font-display text-7xl md:text-9xl font-bold mb-2 text-white leading-none tracking-tight glitch-text" data-text="PRIYAM">
                        PRIYAM <br/><span className="text-transparent bg-clip-text bg-spider-gradient glitch-text" data-text="SRIVASTAVA">SRIVASTAVA</span>
                    </h1>
                    
                    <div className="font-display text-3xl md:text-4xl font-normal mb-8 h-12 text-textMuted tracking-wider">
                        <Typewriter words={roles} />
                    </div>
                    
                    <p className="font-sans text-textMuted text-lg max-w-[500px] leading-relaxed mb-10 border-l-2 border-primary pl-4">
                        B.Tech CS student building scalable backend systems and AI-powered platforms. Spinning webs of code to catch bugs and deploy fast.
                    </p>
                    
                    <div className="flex flex-wrap gap-5">
                        <a href="#projects" className="thwip-btn px-8 py-4 bg-primary text-white font-display text-xl tracking-widest border border-primary hover:border-white transition-colors duration-300">
                            <span>View Projects</span>
                        </a>
                        <a href="#" onClick={handleDownload} className="thwip-btn px-8 py-4 border border-border text-white font-display text-xl tracking-widest hover:border-secondary transition-colors duration-300 bg-surface/50 backdrop-blur-sm">
                            <span className="flex items-center gap-2">
                                <i className="fas fa-spider text-secondary group-hover:animate-web-swing"></i> 
                                Download CV
                            </span>
                        </a>
                    </div>
                    
                    {/* Socials */}
                    <div className="flex space-x-5 mt-12">
                        <a href="https://github.com/priyamshrivastava" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <i className="fab fa-github text-3xl"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/priyam-shrivastava-6484a533b/" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-secondary transition-colors hover:scale-110 transform duration-200">
                            <i className="fab fa-linkedin text-3xl"></i>
                        </a>
                        <a href="https://leetcode.com/u/Priyam__Shrivastava/" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-accent transition-colors hover:scale-110 transform duration-200">
                            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.536-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.464 2.325-1.464 3.765s.483 2.734 1.464 3.716l4.332 4.363c.981.981 2.325 1.464 3.765 1.464s2.734-.483 3.716-1.464l2.697-2.607c.514-.514.498-1.366-.038-1.901-.536-.536-1.387-.552-1.901-.038zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Right Column (Image) - Swing in Animation */}
                <div className="flex-1 flex justify-center lg:justify-end w-full">
                    <div className={`relative group ${animationTriggered ? 'animate-swing-drop' : 'opacity-0'}`}>
                        {/* Web string hanging from top */}
                        <div className="absolute -top-[200px] left-1/2 w-0.5 h-[200px] bg-gradient-to-b from-transparent to-white/50 transform -translate-x-1/2 z-0"></div>

                        {/* Halftone / Offset background box */}
                        <div className="absolute top-4 left-4 w-64 h-64 md:w-80 md:h-80 border-2 border-primary bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzhhYWGMYAEYB8RmROaABADeOQ8CXl/xfgAAAABJRU5ErkJggg==')] z-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        
                        {/* Main Image Container */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 z-10 overflow-hidden border-2 border-border group-hover:border-white transition-colors duration-300 filter grayscale group-hover:grayscale-0">
                            <img 
                                src={profilePic} 
                                alt="Priyam Srivastava" 
                                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-500" 
                            />
                            {/* Spidey Overlay Color tint */}
                            <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;