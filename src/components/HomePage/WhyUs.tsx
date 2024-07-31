"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import {
    AcademicCapIcon,
    ArrowPathIcon,
    NewspaperIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";

const features = [
    {
        name: "Interactive Learning Tools",
        description:
            "Engage students with interactive lessons, quizzes, and games that make learning fun and effective.",
        icon: AcademicCapIcon,
    },
    {
        name: "Personalized Learning Paths",
        description:
            "Tailor educational experiences to meet the unique needs of each student, ensuring no one gets left behind.",
        icon: NewspaperIcon,
    },
    {
        name: "Teacher Resources",
        description:
            "Equip educators with the tools they need to create dynamic and impactful lessons.",
        icon: UserGroupIcon,
    },
    {
        name: "Analytics and Reporting",
        description:
            "Gain insights into student performance and progress with our comprehensive analytics platform.",
        icon: ArrowPathIcon,
    },
];


const WhyUs = () => {
    return (
        <div className="min-h-[90vh] w-full flex flex-col items-center justify-center bg-black bg-grid-white/[0.2] snap-start relative">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 pb-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl mt-6">
                Why Choose Us?
            </h1>
            <div className=" w-[80%] grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 mb-6">
                {features.map((feature) => (
                    <div key={feature.name}>
                        <PinContainer title={feature.description}>
                            <div className="flex basis-full flex-col p-2 tracking-tight hover:text-slate-100/50 sm:basis-1/2 w-[16rem] h-[16rem] text-white ">

                                <div className="text-base !m-0 !p-0 font-normal">
                                </div>
                                <div className="flex justify-center items-center flex-1 w-full rounded-lg mb-4 bg-gradient-to-b from-blue-500 to-blue-600"><feature.icon
                                    className=" text-gradient-to-br from-slate-300 to-slate-500 size-6/12 " /></div>
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-center text-base text-slate-100 ">
                                    {feature.name}
                                </h3>
                            </div></PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyUs


