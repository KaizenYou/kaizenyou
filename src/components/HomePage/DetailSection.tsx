'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DetailSection = () => {
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        contentRefs.current.forEach((ref) => {
            if (ref) {
                gsap.from(ref, {
                    opacity: 0,
                    y: 100,
                    duration: 1,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: ref,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        scrub: 1,
                    },
                });
            }
        });

        imageRefs.current.forEach((ref) => {
            if (ref) {
                const handleMouseMove = (event: MouseEvent) => {
                    const { clientX, clientY, currentTarget } = event;
                    const { left, top, width, height } = (currentTarget as HTMLElement).getBoundingClientRect();
                    const x = (clientX - left) / width;
                    const y = (clientY - top) / height;

                    gsap.to(ref, {
                        rotationX: (y - 0.5) * 30, // X-axis rotation
                        rotationY: (x - 0.5) * -30, // Y-axis rotation
                        transformPerspective: 500, // Depth perspective
                        ease: 'power1.out',
                    });
                };

                const resetRotation = () => {
                    gsap.to(ref, {
                        rotationX: 0,
                        rotationY: 0,
                        ease: 'power1.out',
                    });
                };

                ref.addEventListener('mousemove', handleMouseMove);
                ref.addEventListener('mouseleave', resetRotation);

                return () => {
                    ref.removeEventListener('mousemove', handleMouseMove);
                    ref.removeEventListener('mouseleave', resetRotation);
                };
            }
        });

    }, []);

    const setContentRef = (index: number) => (el: HTMLDivElement | null) => {
        contentRefs.current[index] = el;
    };

    const setImageRef = (index: number) => (el: HTMLDivElement | null) => {
        imageRefs.current[index] = el;
    };

    return (
        <div className="w-full">
            <div className="w-full flex-col md:flex-row flex min-h-screen">
                <div className="md:w-[50%] w-full flex items-center justify-center relative">
                    <div ref={setImageRef(0)} className="relative w-full h-full flex items-center justify-center">
                        <Image
                            src='/workshop.png'
                            alt="workshop"
                            width={500}
                            height={500}
                            className="transform-gpu"
                        />
                    </div>
                </div>
                <div className="md:w-[50%] w-full flex items-center">
                    <div ref={setContentRef(0)} className="sm:w-[60%] w-full mx-auto">
                        <p className="md:text-3xl text-2xl font-semibold tracking-tight leading-relaxed text-blue-500 w-[95%] mx-auto my-2 text-left z-20">
                            <span className="text-5xl font-bold">W</span>e go beyond traditional learning by offering dynamic training sessions and workshops.
                        </p>
                        <p className="text-neutral-500 w-[95%] mx-auto my-2 text-lg text-justify">
                            Our platform also provides exclusive mentoring sessions with seasoned professionals, each boasting over five years of industry experience, to guide and inspire students towards their career goals.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col min-h-screen md:flex-row-reverse">
                <div className="md:w-[50%] w-full flex h-screen items-center justify-center relative">
                    <div ref={setImageRef(1)} className="relative w-full h-full flex items-center justify-center">
                        <Image
                            src='/leader.png'
                            alt="leader"
                            width={500}
                            height={500}
                            className="transform-gpu"
                        />
                    </div>
                </div>
                <div className="md:w-[50%] w-full flex items-center">
                    <div ref={setContentRef(1)} className="sm:w-[60%] w-full mx-auto">
                        <p className="md:text-3xl text-2xl font-semibold tracking-tight leading-relaxed text-blue-500 w-[95%] mx-auto my-2 text-left z-20">
                            <span className="text-5xl font-bold">E</span>xclusive opportunities for both paid and unpaid internships.
                        </p>
                        <p className="text-neutral-500 w-[95%] mx-auto my-2 text-lg text-justify">
                            We provide both paid and unpaid internships, allowing students to gain practical, hands-on experience in their chosen fields. These internships not only enhance their skill set but also prepare them to excel in high-pressure environments, bridging the gap between academic learning and real-world application.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailSection;
