'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HeroSection = () => {
    const imageRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if (imageRef.current) {
            const handleMouseMove = (event: MouseEvent) => {
                const { clientX, clientY, currentTarget } = event;
                const { left, top, width, height } = (currentTarget as HTMLElement).getBoundingClientRect();
                const x = (clientX - left) / width;
                const y = (clientY - top) / height;

                gsap.to(imageRef.current, {
                    rotationX: (y - 0.5) * 30,
                    rotationY: (x - 0.5) * -30,
                    transformPerspective: 500,
                    ease: 'power1.out',
                });
            };

            const resetRotation = () => {
                gsap.to(imageRef.current, {
                    rotationX: 0,
                    rotationY: 0,
                    ease: 'power1.out',
                });
            };

            const imageElement = imageRef.current;

            imageElement.addEventListener('mousemove', handleMouseMove);
            imageElement.addEventListener('mouseleave', resetRotation);

            return () => {
                imageElement.removeEventListener('mousemove', handleMouseMove);
                imageElement.removeEventListener('mouseleave', resetRotation);
            };
        }
    }, []);

    return (
        <div className="flex sm:flex-row flex-col items-center justify-center min-h-screen bg-black relative w-full">
            <div className="div z-50 sm:w-7/12 w-full sm:min-h-screen min-h-fit flex items-center justify-center overflow-x-hidden">
                <div className="flex flex-col items-center justify-center w-[90%] mt-32 sm:mt-0 sm:text-left text-center">
                    <p className="text-neutral-500 text-md sm:text-base mb-2 w-full">
                        Empowering the Future of Education!
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-slate-200 to-slate-500 bg-clip-text text-transparent w-full tracking-tight">
                        Get the <span className="text-blue-500 block md:text-7xl">Competitive Edge</span>
                    </h1>
                    <p className="text-neutral-500 text-md sm:text-base mt-5 w-full">
                        Learn In-Demand Management Skills with KaizenYou
                    </p>
                    <div className="flex flex-row space-y-0 space-x-4 mt-7 sm:w-full">
                        <Link href={'/dashboard'}>
                            <Button title="Get Started" className="px-5" />
                        </Link>
                        <a href='#about'>
                            <Button title="Know More" className="px-5 bg-gradient-to-br from-slate-700 hover:text-slate-400" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="sm:w-5/12 w-full relative sm:min-h-screen min-h-[60vh] overflow-hidden flex items-center justify-center">
                <div ref={imageRef}>
                    <Image
                        src='/herosection.png'
                        alt="hero section image"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
