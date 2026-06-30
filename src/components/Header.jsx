import React, { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            // Navbar style change
            if (window.scrollY > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Active section highlighting
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            let currentSection = 'home';
            
            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    // Check if section is in the top half of the viewport
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        currentSection = sectionId;
                        break;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'home', title: 'Home' },
        { id: 'about', title: 'Origin' },
        { id: 'skills', title: 'Powers' },
        { id: 'projects', title: 'Missions' },
        { id: 'contact', title: 'Signal' },
    ];

    return (
        <nav className={`fixed w-full z-[100] transition-all duration-300 border-b ${
            scrolled 
                ? 'bg-background/90 backdrop-blur-xl border-border' 
                : 'bg-transparent border-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Spider Logo / Name */}
                    <a href="#home" className="flex-shrink-0 font-display font-bold text-3xl tracking-widest text-white group flex items-center gap-2">
                        <i className="fas fa-spider text-primary group-hover:animate-web-swing"></i>
                        PS<span className="text-primary">.</span>
                    </a>
                    
                    <div className="hidden md:flex items-center">
                        <div className="ml-10 flex items-baseline space-x-8 font-mono text-sm uppercase tracking-widest">
                            {navLinks.map(link => (
                                <a 
                                    key={link.id}
                                    href={`#${link.id}`} 
                                    className={`transition-colors px-3 py-2 relative group ${
                                        activeSection === link.id ? 'text-white font-bold' : 'text-textMuted hover:text-white'
                                    }`}
                                >
                                    {link.title}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                                        activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}></span>
                                </a>
                            ))}
                        </div>

                        {/* View Resume Button */}
                        <a 
                            href="https://drive.google.com/file/d/1b_3z7KaBuWfIa497GQJt4s2Fw3WpBybQ/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-10 font-display tracking-widest text-lg bg-primary text-white px-6 py-2 hover:bg-red-700 transition-colors shadow-[3px_3px_0_0_#1A4F8B] hover:shadow-[0_0_0_0_#1A4F8B] hover:translate-x-[3px] hover:translate-y-[3px]"
                        >
                            View Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;