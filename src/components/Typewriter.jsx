import React, { useState, useEffect } from 'react';

const Typewriter = ({ words }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (!words || words.length === 0) return;

        const typeSpeed = isDeleting ? 50 : 100;
        const delayBetweenWords = 2000;
        
        const currentWord = words[currentWordIndex];
        
        let timeout;

        if (isDeleting) {
            timeout = setTimeout(() => {
                setCurrentText(currentWord.substring(0, currentText.length - 1));
                if (currentText.length === 0) {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            }, typeSpeed);
        } else {
            timeout = setTimeout(() => {
                setCurrentText(currentWord.substring(0, currentText.length + 1));
                if (currentText.length === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), delayBetweenWords);
                }
            }, typeSpeed);
        }

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, words]);

    return (
        <span className="typewriter">
            {currentText}
            <span className="cursor-blink inline-block w-[3px] bg-primary ml-[2px] animate-[blink_0.8s_step-end_infinite]">&nbsp;</span>
        </span>
    );
};

export default Typewriter;