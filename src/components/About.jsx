import React, { useEffect, useRef } from 'react';

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    const reveals = entry.target.querySelectorAll('.reveal-section');
                    reveals.forEach(el => el.classList.add('is-visible'));
                } else {
                    entry.target.classList.remove('is-visible');
                    const reveals = entry.target.querySelectorAll('.reveal-section');
                    reveals.forEach(el => el.classList.remove('is-visible'));
                }
            });
        }, { threshold: 0.1 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="py-24 relative z-10" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-section">
                
                <h2 className="font-display text-5xl md:text-6xl font-bold mb-16 heading-web-line text-textPrimary inline-block">
                    WHO AM I?
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Left: Bio */}
                    <div className="lg:col-span-3 space-y-6 text-textMuted leading-relaxed text-lg font-sans">
                        <p className="hover:text-white transition-colors duration-300">
                            I'm a B.Tech Computer Science student at Lloyd Institute of Engineering & Technology (2023–2027), specializing in Java backend development, REST APIs, and cloud-deployed full-stack systems.
                        </p>
                        <p className="hover:text-white transition-colors duration-300">
                            I've interned at Infosys Springboard building production-grade APIs, and I build enterprise-level projects around AI observability and intelligent event management. 
                        </p>
                        <p className="hover:text-white transition-colors duration-300">
                            I'm passionate about clean architecture, competitive programming, and open-source contribution. Currently, I am actively seeking software engineering internship opportunities in backend, systems, and platform engineering.
                        </p>
                    </div>

                    {/* Right: Info Cards */}
                    <div className="lg:col-span-2 flex flex-col gap-6 w-full">
                        <div className="stark-hud bg-surface p-6 hover:border-secondary transition-all flex items-start gap-4">
                            <div className="bg-secondary/20 p-3 text-secondary flex-shrink-0 relative z-10">
                                <i className="fas fa-graduation-cap text-2xl"></i>
                            </div>
                            <div className="relative z-10">
                                <h3 className="font-display font-bold text-xl text-textPrimary tracking-wider">Education</h3>
                                <p className="font-mono text-sm text-secondary mt-1">B.Tech in CSE</p>
                                <p className="text-textMuted text-sm mt-1">Lloyd Institute of Engineering & Technology</p>
                                <p className="text-textMuted/60 text-xs mt-1">2023 - 2027</p>
                            </div>
                        </div>

                        <div className="stark-hud bg-surface p-6 hover:border-primary transition-all flex items-start gap-4">
                            <div className="bg-primary/20 p-3 text-primary flex-shrink-0 relative z-10">
                                <i className="fas fa-briefcase text-2xl"></i>
                            </div>
                            <div className="relative z-10">
                                <h3 className="font-display font-bold text-xl text-textPrimary tracking-wider">Experience</h3>
                                <p className="font-mono text-sm text-primary mt-1">Java Backend Dev Intern</p>
                                <p className="text-textMuted text-sm mt-1">Infosys Springboard</p>
                                <p className="text-textMuted/60 text-xs mt-1">Dec 2025 - Feb 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;