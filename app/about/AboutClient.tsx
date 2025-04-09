'use client';

import Image from "next/image";
import Link from "next/link";

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
            <div className="flex flex-col md:h-screen md:justify-center md:items-center mt-12 md:mt-0">
                <div className="flex flex-col justify-left items-left pb-4">
                    <Image 
                        src='/images/about_mayo.svg'
                        alt="about_mayo"
                        height={360}
                        width={360}
                        className="md:hidden rounded-xs"
                    />
                </div>
                <div className="flex md:flex-row flex-col gap-10 justify-between">
                    <div>
                        <div className="text-zinc-400 md:text-2xl text-xl">
                            More about me
                        </div>
                        <div className="text-zinc-700 md:text-2xl text-base pt-2">
                            I’m currently a junior at the University of British Columbia studying cognitive science with a minor in data science. 
                            Interested in building and evaluating applications of data and emerging technology to advance human health.
                        </div>
                        <div className="text-zinc-700 md:text-2xl text-base pt-4">
                            Outside of work and school, you can find me cooking, running, and continuing to learn new things.
                        </div>
                        <div className="flex flex-row gap-2">
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
                                        mt-8
                                    "
                                >
                                    View my resume
                                </div>
                            </a>
                            <a href="/lab">
                                <div
                                    className="
                                        text-zinc-700
                                        md:text-base
                                        text-sm
                                        bg-white
                                        outline
                                        outline-neutral-900
                                        outline-[1px]
                                        rounded-full 
                                        py-2
                                        px-3 
                                        md:w-[100px]
                                        w-[90px]
                                        cursor-pointer
                                        hover:bg-zinc-700
                                        hover:text-zinc-200
                                        transition
                                        duration-200 
                                        ease-in
                                        mt-8
                                    "
                                >
                                    See my lab
                                </div>
                            </a>
                        </div>
                    </div>
                    <Image 
                        src='/images/about_new.svg'
                        alt="about_mayo"
                        height={380}
                        width={380}
                        className="-mt-10 hidden md:block"
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutClient;