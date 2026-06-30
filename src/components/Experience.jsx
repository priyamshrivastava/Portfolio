import React, { useEffect, useRef } from 'react';

const Experience = () => {
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
        <section id="experience" className="py-24 relative z-10" ref={sectionRef}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 reveal-section">
                <h2 className="font-display text-5xl md:text-6xl font-bold mb-16 heading-web-line text-textPrimary inline-block">
                    MY JOURNEY (ORIGIN STORY)
                </h2>
                
                <div className="relative border-l-2 border-dashed border-border ml-4 md:ml-0 md:pl-0 space-y-16">
                    {/* Infosys Springboard Experience */}
                    <div className="relative pl-10 md:pl-0 group">
                        <div className="md:w-full relative">
                            {/* Animated pulsing spider dot */}
                            <div className="absolute left-[-47px] top-2 w-6 h-6 bg-primary rounded-full z-10 flex items-center justify-center spider-sense-pulse">
                                <i className="fas fa-spider text-white text-sm animate-spin-slow"></i>
                            </div>

                            {/* Card - STARK HUD style */}
                            <div className="stark-hud bg-surface/80 p-8 relative z-20 transition-all duration-300 group-hover:border-primary">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 relative z-10">
                                    <div>
                                        <h3 className="font-display text-3xl font-bold text-white mb-1 tracking-wide">Java Backend Developer Intern</h3>
                                        <h4 className="text-secondary font-bold text-lg flex items-center gap-2">
                                            <i className="fas fa-building text-sm"></i> Infosys Springboard
                                        </h4>
                                    </div>
                                    <span className="font-mono text-accent text-sm bg-accent/10 border border-accent/20 px-4 py-1.5 w-max mt-4 sm:mt-0 whitespace-nowrap shadow-[2px_2px_0_0_#F59E0B]">
                                        Dec 2025 - Feb 2026 | Remote
                                    </span>
                                </div>
                                
                                <ul className="text-textMuted text-base space-y-3 font-sans relative z-10">
                                    <li className="flex items-start gap-3 hover:text-white transition-colors">
                                        <i className="fas fa-crosshairs text-primary text-xs mt-1.5 flex-shrink-0 animate-pulse"></i>
                                        <span>Developed 15+ RESTful APIs using <strong className="text-white font-medium">Java Spring Boot</strong> and <strong className="text-white font-medium">PostgreSQL</strong> supporting secure case-management workflows.</span>
                                    </li>
                                    <li className="flex items-start gap-3 hover:text-white transition-colors">
                                        <i className="fas fa-crosshairs text-primary text-xs mt-1.5 flex-shrink-0 animate-pulse"></i>
                                        <span>Implemented <strong className="text-white font-medium">JWT authentication</strong> and role-based authorization (RBAC) for protected backend endpoints.</span>
                                    </li>
                                    <li className="flex items-start gap-3 hover:text-white transition-colors">
                                        <i className="fas fa-crosshairs text-primary text-xs mt-1.5 flex-shrink-0 animate-pulse"></i>
                                        <span>Achieved <strong className="text-white font-medium">80%+ unit test coverage</strong> using JUnit and Mockito, improving backend reliability.</span>
                                    </li>
                                    <li className="flex items-start gap-3 hover:text-white transition-colors">
                                        <i className="fas fa-crosshairs text-primary text-xs mt-1.5 flex-shrink-0 animate-pulse"></i>
                                        <span>Collaborated with frontend team for API integration and testing using React.js, Git, and Postman.</span>
                                    </li>
                                    <li className="flex items-start gap-3 hover:text-white transition-colors">
                                        <i className="fas fa-crosshairs text-primary text-xs mt-1.5 flex-shrink-0 animate-pulse"></i>
                                        <span>Built scalable services following layered architecture (Controller, Service, Repository) and clean code principles.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;