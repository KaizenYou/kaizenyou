

const AboutSection = () => {

    return (
        <div id="about" className="min-h-screen w-full flex items-center justify-center antialiased bg-black relative" >
            <video preload="none" width='500' height='500' className="absolute top-0 left-0 w-full h-screen z-0 object-cover">
                <source src="money.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-screen z-10 flex items-center">

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
}

export default AboutSection;
