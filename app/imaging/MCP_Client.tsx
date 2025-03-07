'use client';

import Image from "next/image";
import { font_light } from "../fonts";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";

const MCP_Client = () => {
    const router = useRouter();
        
        return (
            <div className="flex flex-col md:mx-96 mx-8">
                <div className="md:text-5xl text-3xl text-zinc-400 md:mt-20 mt-6">
                    Accelerate
                </div>
                <div className="md:text-5xl text-3xl text-zinc-700">
                    AI Imaging Workflow
                </div>
                <Image 
                    src='/images/imaging_page.svg'
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
                            Mayo Clinic Platform
                        </div>
                    </div>
                    <div className="text-base flex flex-col pt-4 md:pt-0">
                        <div className="text-zinc-400 md:font-semibold">
                            Tools
                        </div>
                        <div className={`text-zinc-700 ${font_light.className}`}>
                            Python, PyTorch, Nibabel, LinuxOS
                        </div>
                    </div>
                    <div className="text-base flex flex-col pt-4 md:pt-0">
                        <div className="text-zinc-400 md:font-semibold">
                            Timeline
                        </div>
                        <div className={`text-zinc-700 ${font_light.className}`}>
                            May - August 2024
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:mt-16 mt-8">
                    <div className={`text-zinc-700 md:text-lg text-base font-semibold`}>
                        Introduction
                    </div>
                    <div className={`text-base md:text-lg pt-5 text-zinc-700 ${font_light.className}`}>
                        Mayo Clinic Platform_Accelerate supports early-stage health-tech AI start-ups in becoming market-ready, in part by offering access to de-identified datasets. 
                    </div>
                    <div className={`text-base md:text-lg pt-3 text-zinc-700 ${font_light.className}`}>
                        Wanting to expand capabilties to support start-ups using imaging data (e.g. MRI, PET, CT modalities), the project aimed to establish an end-to-end workflow for imaging data, which included defining a relevant cohort, testing a new annotation tool, building test models, and documenting any issues. 
                    </div>
                    <div className={`text-base md:text-lg pt-3 text-zinc-700 md:font-semibold`}>
                        I developed a use case identifying prostate abnormalities from DICOM MR images and helped to actualize the workflow.
                    </div>
                </div>
                <hr className="text-zinc-100 md:mt-16 mt-8"/>
                <div className="flex flex-col md:mt-16 mt-8">
                    <div className={`text-zinc-700 md:text-lg text-base font-semibold`}>
                        Key Takeaways
                    </div>
                    <div className={`text-base md:text-lg pt-5 text-zinc-700 ${font_light.className}`}>
                        · In order to annotate images, build models, and fully understand how to analyze medical images, I did a deep dive in multiparametric MRI protocol, prostate anatomy, PI-RADS scoring, and the DICOM standard.
                    </div>
                    <div className={`text-base md:text-lg pt-3 text-zinc-700 ${font_light.className}`}>
                        · I learned how to preprocess medical image data and how to build models with high-dimensional data for classification and segmentation tasks using a DenseNet121 and U-Net architecture, respectively.
                    </div>
                    <div className={`text-base md:text-lg pt-3 text-zinc-700 ${font_light.className}`}>
                        · To define a relevant cohort for my use case, I also learned SQL.
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
                        onClick={() => router.push('/timeinrange')}
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

export default MCP_Client;