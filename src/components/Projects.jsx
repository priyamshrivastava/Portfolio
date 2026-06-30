import React, { useEffect, useRef } from 'react';

const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                } else {
                    entry.target.classList.remove('is-visible');
                }
            });
        }, { threshold: 0.1 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const projectList = [
        {
            title: "VortexOps — Enterprise AI Observability",
            desc: "Built a full-stack AI observability platform streaming real-time CPU, JVM, and infrastructure telemetry. Engineered an incident simulation engine and integrated OpenRouter AI for live root-cause analysis.",
            metrics: ["⚡ 30% FASTER DIAGNOSIS", "🔬 40% LESS INVESTIGATION"],
            tags: ["Java 21", "Spring Boot", "React", "Docker", "AWS EC2"],
            github: "https://github.com/priyamshrivastava/VortexOps", 
            live: ""    
        },
        {
            title: "Network Security Analytics",
            desc: "AI-powered real-time network monitoring platform built with Spring Boot, React, and Apache Kafka. Detects SQL Injections and DDoS attacks while providing AI-assisted remediation.",
            metrics: ["📡 LIVE PACKET MONITORING", "🤖 AI SECOPS COPILOT"],
            tags: ["Java 17", "Spring Boot", "Kafka", "Pcap4J", "React", "Ollama"],
            github: "https://github.com/priyamshrivastava/network-security-analytics", 
            live: ""    
        },
        {
            title: "EventNexus AI",
            desc: "Shipped a cloud-native event management platform with AI-driven scheduling and automated attendee coordination. Implemented dual-layer Email OTP authentication and leveraged Neon PostgreSQL.",
            metrics: ["🔒 DUAL-LAYER AUTH", "🤖 AI AUTOMATION"],
            tags: ["Java 17", "Spring Boot", "Neon PostgreSQL", "Hibernate"],
            github: "https://github.com/priyamshrivastava/EventNexus-AI", 
            live: ""    
        },
        {
            title: "E-Commerce Backend",
            desc: "A robust backend-only E-Commerce application focused on clean architecture, RESTful APIs, and scalable design. Serves as the core backend for an e-commerce platform using an H2 database.",
            metrics: ["🏛️ LAYERED ARCHITECTURE", "⚙️ RESTful APIs"],
            tags: ["Java", "Spring Boot", "Spring Data JPA", "H2 Database"],
            github: "https://github.com/priyamshrivastava/ecom-springboot", 
            live: "" 
        },
        {
            title: "Quiz App Backend",
            desc: "A clean, scalable, and production-ready Quiz Application Backend. Handles quizzes, questions, answers, and scoring logic efficiently using REST API standards and database best practices.",
            metrics: ["✅ SCORING LOGIC", "🗃️ PERSISTENT DATA"],
            tags: ["Java", "Spring Boot", "PostgreSQL", "REST APIs"],
            github: "https://github.com/priyamshrivastava/quiz-app", 
            live: "" 
        },
        {
            title: "Support Ticket System",
            desc: "A full-stack support ticket system built for technical assessment. Features LLM integration for automatic ticket classification based on descriptions. Containerized with Docker.",
            metrics: ["🤖 LLM CLASSIFICATION", "🐳 DOCKERIZED"],
            tags: ["Django", "React", "PostgreSQL", "OpenAI GPT-3.5", "Docker"],
            github: "https://github.com/priyamshrivastava/support-ticket-system", 
            live: "" 
        }
    ];

    return (
        <section id="projects" className="py-24 relative z-10" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-section">
                <h2 className="font-display text-5xl md:text-6xl font-bold mb-16 heading-web-line text-textPrimary inline-block">
                    FEATURED MISSIONS
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-20">
                    {projectList.map((proj, idx) => (
                        <div key={idx} className="spidey-card bg-surface border-2 border-border p-8 flex flex-col relative">
                            {/* Comic panel corners */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
                            
                            <h3 className="font-display text-3xl font-bold mb-3 text-white uppercase tracking-wide">{proj.title}</h3>
                            <p className="font-sans text-textMuted text-sm mb-6 flex-grow">{proj.desc}</p>
                            
                            {/* Impact Metrics - Comic style badges */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                {proj.metrics.map((metric, mIdx) => (
                                    <span key={mIdx} className="font-display text-accent text-sm tracking-wider bg-accent/10 px-3 py-1 border border-accent/30 skew-x-[-10deg]">
                                        <span className="inline-block skew-x-[10deg]">{metric}</span>
                                    </span>
                                ))}
                            </div>

                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {proj.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="font-mono text-xs bg-[#050505] border border-border px-3 py-1 text-textMuted">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                                {proj.github && (
                                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="flex-1 bg-surface border border-primary hover:bg-primary text-white font-display tracking-widest text-lg py-2 px-4 flex items-center justify-center gap-2 transition-all">
                                        <i className="fab fa-github"></i> SOURCE
                                    </a>
                                )}
                                {proj.live && (
                                    <a href={proj.live} target="_blank" rel="noopener noreferrer" className="flex-1 bg-secondary hover:bg-blue-600 text-white font-display tracking-widest text-lg py-2 px-4 flex items-center justify-center gap-2 transition-all">
                                        <i className="fas fa-external-link-alt"></i> LIVE DEMO
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;