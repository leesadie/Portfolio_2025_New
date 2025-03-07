'use client';

import Image from "next/image";
import { font_light } from "../fonts";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";

const ForestarClient = () => {
    const router = useRouter();
    
        return (
            <div className="flex flex-col md:mx-96 mx-8">
                <div className="md:text-5xl text-3xl text-zinc-400 md:mt-20 mt-6">
                    EMLx
                </div>
                <div className="md:text-5xl text-3xl text-zinc-700">
                    Forestar
                </div>
                <Image 
                    src='/images/forestar_page.svg'
                    alt="tir"
                    height={100}
                    width={100}
                    className="rounded-xs w-full object-contain justify-center items-center min-h-0 h-full md:pt-10 pt-6"
                />
                <div className="flex md:flex-row flex-col md:mt-16 mt-8 md:justify-between">
                    <div className=" text-base flex flex-col">
                        <div className="text-zinc-400 md:font-semibold">
                            Organization
                        </div>
                        <div className={`text-zinc-700 ${font_light.className}`}>
                            UBC Emerging Media Labx
                        </div>
                    </div>
                    <div className="text-base flex flex-col pt-4 md:pt-0">
                        <div className="text-zinc-400 md:font-semibold">
                            Tools
                        </div>
                        <div className={`text-zinc-700 ${font_light.className}`}>
                            React, TypeScript, MongoDB, Tailwind, Needle Engine
                        </div>
                    </div>
                    <div className="text-base flex flex-col pt-4 md:pt-0">
                        <div className="text-zinc-400 md:font-semibold">
                            Timeline
                        </div>
                        <div className={`text-zinc-700 ${font_light.className}`}>
                            May - August 2023
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:mt-16 mt-8">
                    <div className={`text-zinc-700 md:text-lg text-base font-semibold`}>
                        Introduction
                    </div>
                    <div className={`text-base md:text-lg pt-5 text-zinc-700 ${font_light.className}`}>
                        Forestar is an extension of a 2022 UBC Faculty of Forestry clinical trial that studied the health merits of the Japanese practice, forest bathing. 
                        During the trial, participants faced challenges with mobility, transportation, illness, and/or guidance.
                    </div>
                    <div className={`text-base md:text-lg pt-3 text-zinc-700 ${font_light.className}`}>
                        The project aimed to pilot an immersive audio-visual application to provide accessible and personalized forest bathing experiences as an alternative to traditional, guided sessions.
                    </div>
                    <div className={`text-base md:text-lg pt-3 text-zinc-700 ${font_light.className}`}>
                        EMLx is a volunteer-based group within the Emerging Media Lab that aims to explore and experiment with emerging technologies.
                    </div>
                    <div className={`text-base md:text-lg pt-3 text-zinc-700 md:font-semibold`}>
                        I led software development for the mobile app, involved with both frontend and backend.
                    </div>
                </div>
                <hr className="text-zinc-100 md:mt-16 mt-8"/>
                <div className="flex flex-col md:mt-16 mt-8">
                    <div className={`text-zinc-700 md:text-lg text-base font-semibold`}>
                        Challenges
                    </div>
                    <div className={`text-base md:text-lg pt-5 text-zinc-700 ${font_light.className}`}>
                        · How can we build an app to reduce distractions?
                    </div>
                    <div className={`text-base md:text-lg pt-3 text-zinc-700 ${font_light.className}`}>
                        · How can alternative media and emerging technology be used to maintain user focus?
                    </div>
                </div>
                <hr className="text-zinc-100 md:mt-16 mt-8"/>
                <div className="flex flex-col md:mt-16 mt-8">
                    <div className={`text-zinc-700 md:text-lg text-base font-semibold`}>
                        Key Points
                    </div>
                    <div className={`text-base md:text-lg pt-5 text-zinc-700 ${font_light.className}`}>
                        · We intentionally chose wording in the app to situate users in the experience and remind users of their goals.
                    </div>
                    <div className={`text-base md:text-lg pt-3 text-zinc-700 ${font_light.className}`}>
                        · We incorporated location-based augmented reality while users were going through the experience to prompt focus on a specific sensory system at a given location on the route.
                    </div>
                </div>
                <div className="flex flex-row justify-between md:pb-16 pb-8">
                    <div className="flex flex-row md:mt-20 mt-6 group cursor-pointer"
                        onClick={() => router.push('/#selected-work')}
                    >
                        <MdKeyboardArrowLeft className="text-zinc-400 md:text-5xl text-3xl pt-1 md:pt-0 group-hover:opacity-50 group-hover:-translate-x-2 duration-200 ease-in transition"/>
                        <div className="md:text-5xl text-2xl text-zinc-400 group-hover:opacity-50">
                            All work
                        </div>
                    </div>
                    <div className="flex flex-row md:mt-20 mt-6 group cursor-pointer"
                        onClick={() => router.push('/lab')}
                    >
                        <div className="md:text-5xl text-2xl text-zinc-400 group-hover:opacity-50">
                            Explore lab
                        </div>
                        <MdKeyboardArrowRight className="text-zinc-400 md:text-5xl text-3xl pt-1 md:pt-0 group-hover:opacity-50 group-hover:translate-x-2 duration-200 ease-in transition"/>
                    </div>
                </div>
            </div>
        );
}

export default ForestarClient;