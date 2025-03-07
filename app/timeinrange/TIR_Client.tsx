'use client';

import Image from "next/image";
import { font_light } from "../fonts";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";

const TIR_Client = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col md:mx-96 mx-8">
            <div className="hidden md:block md:text-5xl text-zinc-400 md:mt-20 mt-6">
                T1D REACHOUT
            </div>
            <div className="md:hidden text-3xl text-zinc-400 md:mt-20 mt-12">
                REACHOUT
            </div>
            <div className="md:text-5xl text-3xl text-zinc-700">
                Time in Range
            </div>
            <Image 
                src='/images/tir_page_2.svg'
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
                        BC Children's Hospital Research Institute
                    </div>
                </div>
                <div className="text-base flex flex-col pt-4 md:pt-0">
                    <div className="text-zinc-400 md:font-semibold">
                        Tools
                    </div>
                    <div className={`text-zinc-700 ${font_light.className}`}>
                        R, Jupyter, tidyverse
                    </div>
                </div>
                <div className="text-base flex flex-col pt-4 md:pt-0">
                    <div className="text-zinc-400 md:font-semibold">
                        Timeline
                    </div>
                    <div className={`text-zinc-700 ${font_light.className}`}>
                        May 2023 - April 2024
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:mt-16 mt-8">
                <div className={`text-zinc-700 md:text-lg text-base font-semibold`}>
                    Introduction
                </div>
                <div className={`text-base md:text-lg pt-5 text-zinc-700 ${font_light.className}`}>
                    T1D REACHOUT is a study investigating the effects of a peer support intervention via mobile application on diabetes distress in adults with type 1 diabetes in British Columbia. The study was conducting a randomized controlled trial at the time of my involvement, following a prior pilot trial.
                </div>
                <div className={`text-base md:text-lg pt-3 text-zinc-700 ${font_light.className}`}>
                    Time in range is a secondary outcome of the study, and refers to the time spent by the participant within the 3.9-10.0 mmol/L range, and measures glycemic control. This data is collected from continuous glucose monitors, which upload the data to a patient-facing mobile app and a provider-facing web portal through which we were able to collect data.
                </div>
                <div className={`text-base md:text-lg pt-3 text-zinc-700 md:font-semibold`}>
                    I led time in range data collection and analysis for the study, writing scripts in R to automate the pipeline to analysis.
                </div>
            </div>
            <hr className="text-zinc-100 md:mt-16 mt-8"/>
            <div className="flex flex-col md:mt-16 mt-8">
                <div className={`text-zinc-700 md:text-lg text-base font-semibold`}>
                    Key Points
                </div>
                <div className={`text-base md:text-lg pt-5 text-zinc-700 ${font_light.className}`}>
                    · We aimed to see the effect, if any, of the intervention on time in range, and visualize changes before and after participation.
                </div>
                <div className={`text-base md:text-lg pt-3 text-zinc-700 ${font_light.className}`}>
                    · We used the most common continuous glucose monitors worn by participants, which were the Dexecom G6, Dexcom G7, and FreeStyle Libre 3.
                </div>
                <div className={`text-base md:text-lg pt-3 text-zinc-700 ${font_light.className}`}>
                    · We also calculated time spent in the high range, very high range, low range, and very low range, as well as Glucose Management Indicator and coefficient of variation.
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
                    onClick={() => router.push('/forestar')}
                >
                    <div className="md:text-5xl text-2xl text-zinc-400 group-hover:opacity-50">
                        Next work
                    </div>
                    <MdKeyboardArrowRight className="text-zinc-400 md:text-5xl text-3xl pt-1 md:pt-0 group-hover:opacity-50 group-hover:translate-x-2 duration-200 ease-in transition"/>
                </div>
            </div>
        </div>
    );
}

export default TIR_Client;