'use client';

import Image from "next/image";

const AboutClient = () => {
    return (
        <div className="h-screen flex flex-col gap-2 mx-80">
            <div className="text-zinc-700 text-2xl mt-20">
                More about me.
            </div>
            <div className="text-zinc-700 text-2xl pt-2">
                I’m currently a junior at the University of British Columbia studying cognitive science with a minor in data science. 
                Interested in building and evaluating applications of data and emerging technology.
            </div>
            <div className="flex flex-col gap-4 pt-4">
                <div className="flex flex-row justify-between">
                    <div>
                        <div className="text-zinc-400 text-xl pt-2">
                            Previously
                        </div>
                        <div className="text-zinc-700 text-xl pl-2">
                            <div className="pt-2">
                                Intern @ Mayo Clinic Platform
                            </div>
                            <div className="pt-2">
                                RA @ BC Children’s Hospital Research Institute
                            </div>
                            <div className="pt-2">
                                Software Developer @ UBC Emerging Media Lab
                            </div>
                            <div className="pt-2">
                                Deep Learning Researcher @ UBC MINT
                            </div>
                            <div className="pt-2">
                                Data Science Consultant @ 180 Degrees Consulting
                            </div>
                        </div>
                    </div>
                    <Image 
                        src='/images/about_mayo.svg'
                        alt="about_mayo"
                        height={280}
                        width={280}
                        className="rounded-xs object-cover"
                    />
                </div>
                <div className="flex flex-row justify-between pt-4">
                    <div>
                        <div className="text-zinc-400 text-xl pt-2">
                            Outside work & school
                        </div>
                        <div className="text-zinc-700 text-xl pl-2">
                            <div className="pt-2">
                                Dancing & teaching ballet @ UBC Ballet
                            </div>
                            <div className="pt-2">
                                Improving my cooking
                            </div>
                            <div className="pt-2">
                                Running at sunrise more
                            </div>
                            <div className="pt-2">
                                Continuing to learn new things
                            </div>
                        </div>
                    </div>
                    <Image 
                        src='/images/about_ballet.svg'
                        alt="about_ballet"
                        height={280}
                        width={280}
                        className="rounded-xs object-cover"
                    />
                </div>
            </div>
            <a target="_blank" rel="noopener noreferrer" href="files/Sadie_Lee_Resume.pdf">
                <div
                    className="
                        text-zinc-200
                        md:text-base
                        text-sm
                        bg-zinc-700
                        outline
                        outline-neutral-900
                        outline-[1px]
                        rounded-full 
                        md:py-2
                        py-1
                        px-3 
                        md:w-[145px]
                        w-[90px]
                        cursor-pointer
                        hover:bg-white
                        hover:text-zinc-700
                        transition
                        duration-200 
                        ease-in
                        mt-4
                    "
                >
                    View my resume
                </div>
            </a>
        </div>
    );
}

export default AboutClient;