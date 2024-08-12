'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const cursorRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const videoElement = videoRef.current;
        const cursor = cursorRef.current;

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

        // Check if the screen width is larger than a certain threshold (e.g., 768px)
        if (cursor && window.innerWidth > 768) {
            const onMouseMove = (e: MouseEvent) => {
                gsap.to(cursor, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.3,
                    ease: 'power3.out',
                });
            };

            const onMouseOverText = () => {
                gsap.to(cursor, { scale: 2, duration: 0.3, ease: 'power3.out' });
            };

            const onMouseOutText = () => {
                gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power3.out' });
            };

            window.addEventListener('mousemove', onMouseMove);

            const textElements = document.querySelectorAll('p, h1');
            textElements.forEach((text) => {
                text.addEventListener('mouseover', onMouseOverText);
                text.addEventListener('mouseout', onMouseOutText);
            });

            return () => {
                window.removeEventListener('mousemove', onMouseMove);

                textElements.forEach((text) => {
                    text.removeEventListener('mouseover', onMouseOverText);
                    text.removeEventListener('mouseout', onMouseOutText);
                });
            };
        }
    }, []);

    return (
        <div id="about" className="min-h-screen w-full flex items-center justify-center antialiased bg-black relative overflow-hidden">
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-10 h-10 rounded-full bg-blue-500 z-50 pointer-events-none hidden md:block"
                style={{ mixBlendMode: 'difference', transform: 'translate(-50%, -50%)' }}
            ></div>

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
        </div>
    );
};

export default AboutSection;
