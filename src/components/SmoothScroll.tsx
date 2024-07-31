'use client'

import { ReactLenis, useLenis } from 'lenis/react'

const SmoothScroll = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <ReactLenis root>
            {children}
        </ReactLenis>
    )
}

export default SmoothScroll