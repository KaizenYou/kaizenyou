import Link from "next/link";
import Button from "../ui/Button";

const HeroSection = () => {
    return (
        <div className="flex sm:flex-row flex-col items-center justify-center min-h-screen bg-black  relative w-full">
            <div
                className="div z-50 sm:w-8/12 w-full sm:min-h-screen min-h-fit flex items-center justify-center overflow-x-hidden "
            >
                <div className="flex flex-col items-center justify-center w-[90%] mt-32  sm:mt-0 sm:text-left text-center">

                    <p className="text-neutral-500 text-md sm:text-base mb-2 w-full">
                        Empowering the Future of Education!
                    </p>
                    <h1 className=" text-5xl md:text-6xl font-bold  bg-gradient-to-br from-slate-200 to-slate-500 bg-clip-text text-transparent w-full tracking-tight">Get the <span className="text-blue-500 block md:text-7xl">Competitive Edge</span></h1>
                    <p className="text-neutral-500 text-md sm:text-base mt-5 w-full">Learn In-Demand Commerce & Management Skills with KaizenYou</p>
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
            <div className="sm:w-4/12  w-full relative sm:min-h-screen min-h-[60vh] overflow-hidden ">
                <div className="absolute h-full md:min-h-screen  z-0 xl:w-full sm:w-auto w-full -bottom-0 ">

                </div>
            </div>
        </div>
    )
}

export default HeroSection
