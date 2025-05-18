import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import frontPageImage from '../../assets/FRONTPAGE.jpg';

export function Hero() {
    const [lightsOn, setLightsOn] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const imageRef = useRef(null);
    const lightsRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        // Subtle movement animation
        gsap.to(imageRef.current, {
            rotationY: 2,
            yoyo: true,
            repeat: -1,
            duration: 3,
            ease: "power1.inOut"
        });

        // Lighting effect
        gsap.to(lightsRef.current, {
            opacity: 0.15,
            yoyo: true,
            repeat: -1,
            duration: 2,
            ease: "sine.inOut"
        });

        // Content fade in
        gsap.fromTo(contentRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
        );

        // Function to animate text
        const animateText = () => {
            const textElements = document.querySelectorAll('.bounce-text');
            textElements.forEach((el) => {
                const letters = el.textContent.split('').map(letter => {
                    if (letter === ' ') {
                        return `<span>&nbsp;</span>`;
                    }
                    return `<span>${letter}</span>`;
                }).join('');
                el.innerHTML = letters;
                if (el.tagName === 'H1') {
                    // Bounce animation for headings
                    gsap.fromTo(el.children, {
                        opacity: 0,
                        y: -40,
                        scale: 1.3
                    }, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.6,
                        ease: "bounce.out",
                        stagger: 0.05
                    });
                } else {
                    // Wave animation for other text
                    gsap.fromTo(el.children, {
                        y: -10
                    }, {
                        y: 10,
                        yoyo: true,
                        repeat: -1,
                        duration: 1,
                        ease: "sine.inOut",
                        stagger: { each: 0.05, from: "start" }
                    });
                }
            });
        };

        // Initial animation
        animateText();

        // Repeat animation every 5 seconds
        const intervalId = setInterval(() => {
            animateText();
        }, 5000);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        if (lightsOn) {
            gsap.to(lightsRef.current, { opacity: 0.3, duration: 0.3 });
        } else {
            gsap.to(lightsRef.current, { opacity: 0.1, duration: 0.3 });
        }
    }, [lightsOn]);

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden">
            {/* Background Image Container */}
            <div className="absolute inset-0 w-full h-full">
                <div
                    ref={imageRef}
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url(${frontPageImage})`,
                        backgroundPosition: isMobile ? '50% 40%' : 'center center',
                        backgroundSize: isMobile ? '140% auto' : '100% auto',
                        backgroundRepeat: 'no-repeat',
                        filter: 'brightness(0.9)',
                        transform: isMobile ? 'scale(1)' : 'scale(0.9)',
                        transformOrigin: 'center center',
                        transition: 'all 0.3s ease-out',
                        backgroundColor: '#000000'
                    }}
                />

                {/* Dark Gradient Overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)',
                        backdropFilter: 'blur(0px)'
                    }}
                />

                {/* Golden Light Effect */}
                <div
                    ref={lightsRef}
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        opacity: 0.25,
                        background: `
                            radial-gradient(circle at 35% 50%, rgba(184, 134, 11, 0.8) 0%, transparent 35%),
                            radial-gradient(circle at 65% 50%, rgba(184, 134, 11, 0.8) 0%, transparent 35%),
                            linear-gradient(90deg, 
                                transparent 15%,
                                rgba(184, 134, 11, 0.2) 40%,
                                rgba(184, 134, 11, 0.2) 60%,
                                transparent 85%
                            )
                        `,
                        mixBlendMode: 'soft-light'
                    }}
                />
            </div>

            {/* Content */}
            <div
                ref={contentRef}
                className="relative z-20 px-4 md:px-8 w-full max-w-7xl mx-auto text-center"
            >
                {/* Empty content div kept for potential future use */}
            </div>
        </section>
    );
} 