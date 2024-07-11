


const AboutSection = () => {
    return (
        <div className="min-h-[50rem] w-full flex flex-col items-center justify-center antialiased snap-start bg-dot-white/[0.2] bg-black relative">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <h1 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl relative z-20">
                Who are We?
            </h1>
            <p className="text-neutral-500 xl:w-[45%] md:w-[65%] w-[80%] mx-auto my-2 relative text-lg text-center z-20">
                KaizenYou is an online training and learning platform created specifically for school students from the field of Commerce.

            </p>
            <p className="text-neutral-500 xl:w-[45%] md:w-[65%] w-[80%] mx-auto my-2 text-lg text-justify ">
                Through training sessions and workshops we assist individuals in learning several departments inside an organization. We also give our students access to both paid and unpaid internships so that, they can get a hands-on experience in a skill and develop their ability to handle pressure. Additionally, we offer mentoring sessions led by professionals with at least five years of expertise in a given industry.
            </p>
        </div>
    );
}


export default AboutSection;