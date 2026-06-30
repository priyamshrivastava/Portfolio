document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor Logic
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows instantly
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Outline follows with a slight delay/smoothness
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover effects on interactive elements
    const interactives = document.querySelectorAll('a, button, .skill-card, input, textarea');
    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursorOutline.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.backgroundColor = 'transparent';
        });
    });

    // Typewriter Effect
    const texts = [
        "Software Developer", 
        "Java Developer", 
        "Backend Developer"
    ];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const delayBetweenWords = 2000;
    
    const typewriterElement = document.querySelector('.typewriter');
    
    function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        
        // Typing forward
        if (index < currentText.length) {
            letter = currentText.slice(0, ++index);
            typewriterElement.textContent = letter;
            setTimeout(type, typeSpeed);
        } else {
            // Wait before deleting
            setTimeout(erase, delayBetweenWords);
        }
    }
    
    function erase() {
        if (index > 0) {
            letter = currentText.slice(0, --index);
            typewriterElement.textContent = letter;
            setTimeout(erase, deleteSpeed);
        } else {
            count++;
            setTimeout(type, typeSpeed);
        }
    }
    
    // Start typewriter
    setTimeout(type, 1000);

    // Form Submission Logic
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Since we can't easily send an email purely from frontend without a backend/service,
        // we'll construct a mailto link as a fallback. 
        // For production, use a service like Formspree or an actual backend endpoint.
        
        /* 
        Ideally, you'd post to a backend route that sends the email to shrivastavapriyam1402@gmail.com
        Example:
        fetch('/send-mail', {
            method: 'POST',
            body: JSON.stringify({ name, phone, email, message })
        })
        */

        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`);
        
        // Open user's default email client
        window.location.href = `mailto:shrivastavapriyam1402@gmail.com?subject=${subject}&body=${body}`;

        // Show success msg
        formStatus.textContent = "Opening email client... (If not, please email shrivastavapriyam1402@gmail.com directly)";
        formStatus.className = "text-center mt-4 text-sm text-green-400 block";
        
        contactForm.reset();
    });
});