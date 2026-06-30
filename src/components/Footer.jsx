import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#030303] py-16 border-t border-border relative z-10 overflow-hidden">
            {/* Subtle web background */}
            <div className="absolute inset-0 bg-web opacity-20 pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                
                {/* The Iconic Quote */}
                <div className="mb-10 text-center">
                    <p className="font-display text-2xl md:text-3xl tracking-widest text-textMuted uppercase relative inline-block">
                        <span className="text-primary text-4xl leading-none absolute -left-6 -top-2">"</span>
                        With great power... comes great <span className="text-white relative">responsibility<span className="absolute -bottom-1 left-0 w-full h-1 bg-primary"></span></span>
                        <span className="text-primary text-4xl leading-none absolute -right-6 -bottom-4">"</span>
                    </p>
                </div>

                <div className="flex justify-center space-x-8 mb-8">
                    <a href="https://github.com/priyamshrivastava" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-white text-3xl transition-transform hover:-translate-y-2 hover:scale-110 duration-200">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/priyam-shrivastava-6484a533b/" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-secondary text-3xl transition-transform hover:-translate-y-2 hover:scale-110 duration-200">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://leetcode.com/u/Priyam__Shrivastava/" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-accent text-3xl transition-transform hover:-translate-y-2 hover:scale-110 duration-200 flex items-center justify-center w-8 h-8">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                            <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.536-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.464 2.325-1.464 3.765s.483 2.734 1.464 3.716l4.332 4.363c.981.981 2.325 1.464 3.765 1.464s2.734-.483 3.716-1.464l2.697-2.607c.514-.514.498-1.366-.038-1.901-.536-.536-1.387-.552-1.901-.038zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
                        </svg>
                    </a>
                </div>
                <div className="font-mono text-textMuted text-xs tracking-widest uppercase">
                    <p>&copy; {new Date().getFullYear()} Priyam Srivastava. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;