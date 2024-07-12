"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const OurMission = () => {
    return (
        <div className="h-[40rem] snap-start flex flex-col antialiased bg-black bg-dot-white/[0.3] items-center justify-center relative overflow-hidden">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <InfiniteMovingCards
                items={content}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

export default OurMission;


const content = [
    {
        quote:
            "At KaizenYou, our mission is to revolutionize education through innovative technology. We are committed to providing high-quality digital solutions that empower educators and inspire students to achieve their full potential.",
        title: "Our Mission",
    },

    {
        quote:
            "KaizenYou is a budding edtech platform and it would be a provider of educational technology solutions. Our team of passionate educators, technologists, and innovators work tirelessly to create tools that make learning more effective and enjoyable.",
        title: "Our Story",
    },

    {
        quote:
            "KaizenYou, an innovative edtech platform catering specifically to commerce and management students. With a passion for revolutionizing education, At KaizenYou, we believe in the power of continuous improvement, which is reflected in our name itself. We have integrated this philosophy into our platform to provide students with a dynamic and personalized learning experience.",
        title: "Founder's desk",
    },

];