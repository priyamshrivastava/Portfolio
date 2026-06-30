import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
    const [activeTab, setActiveTab] = useState('All');
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

    const categories = ['All', 'Languages', 'Backend & DB', 'Frontend', 'Cloud, AI & Tools'];

    const skillsData = [
        { name: "Java", category: "Languages", icon: "fa-brands fa-java text-primary" },
        { name: "C++", category: "Languages", icon: "fa-brands fa-cuttlefish text-secondary" },
        { name: "JavaScript", category: "Languages", icon: "fa-brands fa-js text-accent" },
        { name: "SQL", category: "Languages", icon: "fa-solid fa-database text-white" },
        
        { name: "Spring Boot", category: "Backend & DB", icon: "fa-solid fa-leaf text-primary" },
        { name: "Hibernate/JPA", category: "Backend & DB", icon: "fa-solid fa-layer-group text-textMuted" },
        { name: "REST APIs", category: "Backend & DB", icon: "fa-solid fa-network-wired text-secondary" },
        { name: "PostgreSQL", category: "Backend & DB", icon: "fa-solid fa-database text-white" },
        { name: "H2 Database", category: "Backend & DB", icon: "fa-solid fa-server text-white" },
        
        { name: "React.js", category: "Frontend", icon: "fa-brands fa-react text-secondary" },
        { name: "Tailwind CSS", category: "Frontend", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
        { name: "HTML5/CSS3", category: "Frontend", icon: "fa-brands fa-html5 text-primary" },
        { name: "Vite", category: "Frontend", icon: "fa-solid fa-bolt text-accent" },
        
        { name: "AWS EC2", category: "Cloud, AI & Tools", icon: "fa-brands fa-aws text-accent" },
        { name: "Docker", category: "Cloud, AI & Tools", icon: "fa-brands fa-docker text-secondary" },
        { name: "Git/GitHub", category: "Cloud, AI & Tools", icon: "fa-brands fa-github text-white" },
        { name: "Postman", category: "Cloud, AI & Tools", img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "Maven", category: "Cloud, AI & Tools", icon: "fa-solid fa-cogs text-primary" },
        { name: "AI Integration", category: "Cloud, AI & Tools", icon: "fa-solid fa-robot text-secondary" }
    ];

    const filteredSkills = activeTab === 'All' ? skillsData : skillsData.filter(s => s.category === activeTab);

    return (
        <section id="skills" className="py-24 relative z-10" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-section">
                <h2 className="font-display text-5xl md:text-6xl font-bold mb-10 heading-web-line text-textPrimary inline-block">
                    WEB OF SKILLS
                </h2>

                {/* Tabs */}
                <div className="flex flex-wrap gap-3 mb-12 relative z-20">
                    {categories.map((cat, i) => (
                        <button 
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-6 py-2 border font-display tracking-widest text-lg transition-all duration-300 cursor-pointer uppercase skew-x-[-10deg] ${
                                activeTab === cat 
                                ? 'bg-primary border-primary text-white shadow-[4px_4px_0_0_#1A4F8B]' 
                                : 'bg-surface border-border text-textMuted hover:border-primary hover:text-white'
                            }`}
                        >
                            <span className="inline-block skew-x-[10deg]">{cat}</span>
                        </button>
                    ))}
                </div>

                {/* Skill Chips Grid */}
                <div className="flex flex-wrap gap-4 min-h-[200px] items-start relative z-10">
                    {filteredSkills.map((skill, index) => (
                        <div 
                            key={`${activeTab}-${skill.name}`}
                            className="stagger-item group flex items-center gap-3 bg-surface border border-border px-5 py-3 hover:border-primary transition-all duration-300 hover:shadow-[4px_4px_0_0_#E33636]"
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {skill.icon ? (
                                <i className={`${skill.icon} text-xl w-6 text-center group-hover:scale-110 transition-transform`}></i>
                            ) : (
                                <img src={skill.img} className="h-5 w-6 object-contain group-hover:scale-110 transition-transform" alt={skill.name} />
                            )}
                            <span className="font-mono text-textPrimary text-sm tracking-wide">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;