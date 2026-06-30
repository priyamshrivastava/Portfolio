import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [showToast, setShowToast] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
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

    const handleChange = (e) => setFormData({...formData, [e.target.id]: e.target.value});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "909191cf-408a-48e6-b9f6-dd386b53485f",
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: "New Message from Portfolio"
                }),
            });

            const result = await response.json();
            
            if (result.success) {
                setShowToast(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setShowToast(false), 4000);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative z-10" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-section">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    
                    {/* Left: Contact Info */}
                    <div>
                        <h2 className="font-display text-6xl md:text-7xl font-bold mb-6 text-white uppercase tracking-tight">
                            SEND A <br/><span className="text-transparent bg-clip-text bg-spider-gradient">SIGNAL</span>
                        </h2>
                        <p className="font-sans text-textMuted text-lg mb-10 max-w-md hover:text-white transition-colors duration-300">
                            I'm currently looking for software engineering internship opportunities. Whether you have a question or just want to say hi, my spider-sense is tingling!
                        </p>

                        <div className="space-y-6 relative z-20">
                            <a href="mailto:shrivastavapriyam1402@gmail.com" className="stark-hud flex items-center gap-5 p-4 border border-border bg-surface hover:border-primary transition-all group">
                                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform relative z-10">
                                    <i className="fas fa-envelope text-xl"></i>
                                </div>
                                <div className="relative z-10">
                                    <p className="text-textMuted text-sm font-mono uppercase tracking-widest">Email</p>
                                    <p className="text-white font-medium">shrivastavapriyam1402@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/priyam-shrivastava-6484a533b/" target="_blank" rel="noopener noreferrer" className="stark-hud flex items-center gap-5 p-4 border border-border bg-surface hover:border-secondary transition-all group">
                                <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform relative z-10">
                                    <i className="fab fa-linkedin-in text-xl"></i>
                                </div>
                                <div className="relative z-10">
                                    <p className="text-textMuted text-sm font-mono uppercase tracking-widest">LinkedIn</p>
                                    <p className="text-white font-medium">Connect on LinkedIn</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right: Floating Label Form */}
                    <div className="stark-hud bg-surface border-2 border-border p-8 relative z-20">
                        {/* Panel aesthetics */}
                        <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary bg-background z-20"></div>
                        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-secondary bg-background z-20"></div>

                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                    placeholder=" "
                                    className="floating-input w-full block" 
                                />
                                <label htmlFor="name" className="floating-label">Your Name</label>
                            </div>

                            <div className="relative">
                                <input 
                                    type="email" 
                                    id="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                    placeholder=" "
                                    className="floating-input w-full block" 
                                />
                                <label htmlFor="email" className="floating-label">Email Address</label>
                            </div>

                            <div className="relative">
                                <textarea 
                                    id="message" 
                                    rows="5" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    required 
                                    placeholder=" "
                                    className="floating-input w-full block resize-none"
                                ></textarea>
                                <label htmlFor="message" className="floating-label">Your Message</label>
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={`thwip-btn w-full font-display tracking-widest text-2xl py-4 px-4 transition-colors flex items-center justify-center gap-3 border border-transparent ${
                                    isSubmitting ? 'bg-primary/50 text-white/50 cursor-not-allowed' : 'bg-primary hover:bg-secondary hover:border-white text-white'
                                }`}
                            >
                                <span>{isSubmitting ? 'TRANSMITTING...' : 'THWIP IT (SEND)'}</span>
                                <i className={`fas fa-spider ${isSubmitting ? 'animate-spin' : ''}`}></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Toast Notification */}
            <div className={`fixed bottom-8 right-8 z-[100] bg-surface border-2 border-primary text-textPrimary px-6 py-4 shadow-[4px_4px_0_0_#E33636] flex items-center gap-3 transition-all duration-300 transform ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
                <div className="text-primary text-xl">
                    <i className="fas fa-spider animate-web-swing"></i>
                </div>
                <span className="font-mono text-sm tracking-wide uppercase">Signal Received. I'll get back to you soon.</span>
            </div>
        </section>
    );
};

export default Contact;