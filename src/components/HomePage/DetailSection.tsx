
const DetailSection = () => {
    return (
        <div className="w-full">
            <div className="w-full flex-col md:flex-row flex min-h-screen">
                <div className="md:w-[50%] w-full"></div>
                <div className="md:w-[50%] w-full flex items-center">
                    <div className="sm:w-[60%] w-full mx-auto">
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
                <div className="md:w-[50%] w-full"></div>
                <div className="md:w-[50%] w-full items-center">
                    <div className="sm:w-[60%] w-full mx-auto">
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
    )
}

export default DetailSection
