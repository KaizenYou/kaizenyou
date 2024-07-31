'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP);

const WhoSlider = () => {
    const container = useRef(null)
    const slider = useRef(null)

    useGSAP(() => {
        if (container.current && slider.current) {
            gsap.set(slider.current, { x: 0 })
            gsap.to(slider.current, {
                x: '-60%',
                scrollTrigger: {
                    trigger: container.current,
                    scroller: "body",
                    markers: false,
                    start: 'clamp(top 0%)',
                    end: 'clamp(top -150%)',
                    scrub: 2,
                    pin: true,
                }
            })
        }
    }, [container, slider])

    return (
        <div className='w-full min-h-screen bg-black overflow-hidden flex items-center' ref={container} id='container'>
            <h1 className='text-[30vw] font-semibold uppercase whitespace-nowrap text-blue-500 min-h-screen flex items-center' ref={slider}>Who are we?</h1>
        </div>
    )
}

export default WhoSlider
