'use client';

import Image from "next/image";
import Link from "next/link";
import { font_light } from "../fonts";

const AboutClient = () => {
    return (
        <div className="h-screen flex flex-col gap-2 md:mx-80 mx-8">
            <div className="pt-8 text-lg text-zinc-700 flex flex-row gap-8 md:hidden">
                <Link href="/" className="text-base cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                    Work
                </Link>
                <Link href="/about" className="text-base underline underline-offset-4 cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                    About
                </Link>
                <Link href="/lab" className="text-base cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                    Lab
                </Link>
            </div>
            <div className="text-zinc-400 text-2xl md:mt-20 mt-12">
                More about me
            </div>
            <div className="text-zinc-700 md:text-2xl text-base pt-2">
                I’m currently a junior at the University of British Columbia studying cognitive science with a minor in data science. 
                Interested in building and evaluating applications of data and emerging technology.
            </div>
            <div className="flex flex-col gap-4 pt-4">
                <div className="flex md:flex-row flex-col justify-between">
                    <div>
                        <div className="text-zinc-400 md:text-xl pt-2">
                            Previously
                        </div>
                        <div className={`text-zinc-700 md:text-xl pl-2 ${font_light.className}`}>
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
                        className="rounded-xs object-cover hidden md:block md:w-72"
                    />
                </div>
                <div className="flex md:flex-row flex-col justify-between pt-4">
                    <div>
                        <div className="text-zinc-400 md:text-xl md:pt-2">
                            Outside work & school
                        </div>
                        <div className={`text-zinc-700 md:text-xl pl-2 ${font_light.className}`}>
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
                                py-2
                                px-3 
                                md:w-[145px]
                                w-[130px]
                                cursor-pointer
                                hover:bg-white
                                hover:text-zinc-700
                                transition
                                duration-200 
                                ease-in
                                mt-4
                                md:hidden
                            "
                        >
                            View my resume
                        </div>
                    </a>
                    <div className="flex flex-row gap-2 md:gap-0 pt-4 md:pt-0 pb-8 md:pb-0">
                        <Image 
                            src='/images/about_ballet.svg'
                            alt="about_ballet"
                            height={280}
                            width={280}
                            className="rounded-xs object-cover md:pt-0 pt-6 w-40 h-40 md:w-72 h-auto"
                        />
                        <Image 
                            src='/images/about_mayo.svg'
                            alt="about_mayo"
                            height={280}
                            width={280}
                            className="rounded-xs object-cover md:hidden pt-6 w-40 h-40"
                        />
                    </div>
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
                        py-2
                        px-3 
                        md:w-[145px]
                        w-[130px]
                        cursor-pointer
                        hover:bg-white
                        hover:text-zinc-700
                        transition
                        duration-200 
                        ease-in
                        mt-4
                        hidden
                        md:block
                    "
                >
                    View my resume
                </div>
            </a>
        </div>
    );
}

export default AboutClient;