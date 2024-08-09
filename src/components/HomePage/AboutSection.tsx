'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const rippleRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const videoElement = videoRef.current;
        const rippleElement = rippleRef.current;

        if (videoElement) {
            ScrollTrigger.create({
                trigger: '#about',
                start: 'top 80%',
                end: 'bottom 20%',
                onEnter: () => videoElement.play(),
                onLeave: () => videoElement.pause(),
                onEnterBack: () => videoElement.play(),
                onLeaveBack: () => videoElement.pause(),
            });
        }

        if (rippleElement) {
            const handleMouseMove = (event: MouseEvent) => {
                const { clientX, clientY } = event;

                // Set ripple position and style
                gsap.to(rippleElement, {
                    left: clientX - rippleElement.clientWidth / 2,
                    top: clientY - rippleElement.clientHeight / 2,
                    opacity: 0.8,
                    scale: 1.2,
                    duration: 0.1,
                    ease: 'power2.out',
                    transformOrigin: 'center center'
                });

                // Ripple effect
                gsap.to(rippleElement, {
                    opacity: 0,
                    scale: 2,
                    duration: 0.6,
                    ease: 'power2.out',
                    delay: 0.1,
                });
            };

            // Hide default cursor and show ripple element
            const handleMouseEnter = () => {
                document.body.style.cursor = 'none'; // Hide default cursor
            };

            const handleMouseLeave = () => {
                document.body.style.cursor = ''; // Show default cursor
            };

            // Add event listeners
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseenter', handleMouseEnter);
            window.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseenter', handleMouseEnter);
                window.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);

    return (
        <div id="about" className="min-h-screen w-full flex items-center justify-center antialiased bg-black relative overflow-hidden">
            <video
                ref={videoRef}
                preload="none"
                width="500"
                height="500"
                className="absolute top-0 left-0 w-full h-screen z-0 object-cover"
                muted
                loop
            >
                <source src="money.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="bg-[#000000a6] w-full min-h-screen z-10 absolute left-0 top-0"></div>
            <div className="absolute top-0 left-0 w-full h-screen z-20 flex items-center backdrop-blur-sm">
                <div className="sm:w-[60%] w-full mx-auto">
                    <p className="md:text-3xl text-2xl font-semibold tracking-tight leading-relaxed text-blue-500 w-[95%] mx-auto my-2 text-left z-20">
                        <span className="text-5xl font-bold">K</span>aizenYou is an online training and learning platform created specifically for school students from the field of Commerce.
                    </p>
                    <p className="text-neutral-500 w-[95%] mx-auto my-2 text-lg text-justify">
                        Through training sessions and workshops we assist individuals in learning several departments inside an organization.
                    </p>
                </div>
            </div>
            <div
                ref={rippleRef}
                className="pointer-events-none absolute w-20 h-20 rounded-full bg-customGray opacity-0 z-30"
                style={{ transform: 'translate(-50%, -50%)', mixBlendMode: 'screen' }}
            ></div>
        </div>
    );
};

export default AboutSection;
