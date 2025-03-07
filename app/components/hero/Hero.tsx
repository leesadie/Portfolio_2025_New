'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const Hero = () => {
    const router = useRouter();

    return (
        <div>
            {/* Main landing section */}
            <section id="top" className="h-screen w-screen flex flex-col justify-center items-center">
                <div className="flex flex-row gap-4">
                    <div className="text-5xl text-zinc-400">
                        Hi, I'm
                    </div>
                    <Image 
                        src='/images/pfp_portfolio.svg'
                        alt="pfp"
                        width={80}
                        height={80}
                        className=""
                    />
                    <div className="text-5xl text-zinc-400">
                        Sadie.
                    </div>
                </div>
                <div className="text-5xl text-zinc-700">
                    Cognitive science & data science
                </div>
                <div className="text-5xl text-zinc-700">
                    student at UBC in Vancouver, CA.
                </div>
                <div className="text-5xl text-zinc-700">
                    Focused on data & emerging tech.
                </div>
                <div className="absolute bottom-6 flex flex-col items-center group text-zinc-800">
                    <Link href="#selected-work" className="text-base cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                        Selected Work
                    </Link>
                    <Link href="#selected-work" className="text-lg cursor-pointer group-hover:opacity-50 group-hover:translate-y-1 transition duration-200 ease-in">
                        <MdKeyboardArrowDown size={24}/>
                    </Link>
                </div>
            </section>

            {/* Selected work section */}
            <section id="selected-work" className="h-auto w-screen flex justify-center">
                <div className="flex flex-col mx-72 mt-20">
                    <div className="flex flex-row gap-10">
                        <Image 
                            src='/images/mcp_ai.svg'
                            alt="mcp"
                            height={400}
                            width={400}
                            className="rounded-xs"
                        />
                        <div className="flex flex-col gap-3">
                            <div className="text-zinc-400 text-base">
                                Mayo Clinic Platform · Summer 2024
                            </div>
                            <div className="text-zinc-800 text-4xl">
                                Developing and testing an end-to-end AI for medical imaging workflow
                            </div>
                            <div className="flex flex-row group"
                                onClick={() => {}}
                            >
                                <div className="text-zinc-400 text-base cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                                    Read more
                                </div>
                                <MdKeyboardArrowRight size={24} className="cursor-pointer pt-0.5 text-zinc-400 group-hover:opacity-50 group-hover:translate-x-1 transition duration-200 ease-in"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-10 pt-10">
                        <Image 
                            src='/images/tir.svg'
                            alt="tir"
                            height={400}
                            width={400}
                            className="rounded-xs"
                        />
                        <div className="flex flex-col gap-3">
                            <div className="text-zinc-400 text-base">
                                BC Children's Hospital Research Institute · 2023-2024
                            </div>
                            <div className="text-zinc-800 text-4xl">
                                Writing scripts to collect and analyze time in range data for type 1 diabetes
                            </div>
                            <div className="flex flex-row group"
                                onClick={() => {}}
                            >
                                <div className="text-zinc-400 text-base cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                                    Read more
                                </div>
                                <MdKeyboardArrowRight size={24} className="cursor-pointer pt-0.5 text-zinc-400 group-hover:opacity-50 group-hover:translate-x-1 transition duration-200 ease-in"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-10 pt-10 pb-20">
                        <Image 
                            src='/images/forestar.svg'
                            alt="foretar"
                            height={400}
                            width={400}
                            className="rounded-xs"
                        />
                        <div className="flex flex-col gap-3">
                            <div className="text-zinc-400 text-base">
                                Emerging Media Lab · Summer 2023
                            </div>
                            <div className="text-zinc-800 text-4xl">
                                Building a web app with location-based AR for forest bathing
                            </div>
                            <div className="flex flex-row group"
                                onClick={() => {}}
                            >
                                <div className="text-zinc-400 text-base cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                                    Read more
                                </div>
                                <MdKeyboardArrowRight size={24} className="cursor-pointer pt-0.5 text-zinc-400 group-hover:opacity-50 group-hover:translate-x-1 transition duration-200 ease-in"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research section */}
            <section className="h-screen w-screen flex flex-col justify-between">
                <div className="flex flex-col mx-72 mt-20">
                    <div className="text-zinc-700 text-xl">
                        Research
                    </div>
                    <hr className="text-zinc-300 mt-5"/>
                    <div 
                        className="text-base py-6 group hover:bg-zinc-100 ease-in-out duration-300 transition"
                    >
                        <div className="text-lg flex flex-row justify-between">
                            <div className="text-zinc-700 group-hover:translate-x-2 ease-in duration-300 transition">
                                Re-identification Risk in Artificial Intelligence for Medical Imaging
                            </div>
                            <div className="text-zinc-400 group-hover:-translate-x-2 ease-in duration-300 transition">
                                2025 - Present
                            </div>
                        </div>
                        <div className="text-zinc-400 group-hover:translate-x-2 ease-in duration-300 transition">
                            In Progress · Affiliated with Mayo Clinic Platform
                        </div>
                    </div>
                    <hr className="text-zinc-300"/>
                    <div 
                        className="text-base py-6 group hover:bg-zinc-100 ease-in-out duration-300 transition"
                    >
                        <div className="text-lg flex flex-row justify-between">
                            <div className="text-zinc-700 group-hover:translate-x-2 ease-in duration-300 transition">
                                Design and Implementation of a Mobile App to Deliver Peer Support to Adults with T1D:
                                <br /> 
                                Operational Feasibility Study
                            </div>
                            <div className="text-zinc-400 group-hover:-translate-x-2 ease-in duration-300 transition">
                                2024 - Present
                            </div>
                        </div>
                        <div className="text-zinc-400 group-hover:translate-x-2 ease-in duration-300 transition">
                            In Progress · Affiliated with BC Children's Hospital Research Institute
                        </div>
                    </div>
                    <hr className="text-zinc-300"/>
                    <a target="_blank" rel="noopener noreferrer" href="files/URTC2024Camera.pdf">
                        <div 
                            className="text-base py-6 group hover:bg-zinc-100 ease-in-out duration-300 transition cursor-pointer"
                        >
                            <div className="text-lg flex flex-row justify-between">
                                <div className="text-zinc-700 group-hover:translate-x-2 ease-in duration-300 transition">
                                    Formalizing Ethical Design in Prostate Cancer Image Analysis: A Preliminary Case Study
                                </div>
                                <div className="text-zinc-400 group-hover:-translate-x-2 ease-in duration-300 transition">
                                    2024
                                </div>
                            </div>
                            <div className="text-zinc-400 group-hover:translate-x-2 ease-in duration-300 transition">
                                Accepted · 2024 IEEE MIT Undergraduate Research Technology Conference
                            </div>
                        </div>
                    </a>
                    <hr className="text-zinc-300"/>
                    <a target="_blank" rel="noopener noreferrer" href="files/AAAI_UC_Proposal.pdf">
                        <div 
                            className="text-base py-6 group hover:bg-zinc-100 ease-in-out duration-300 transition cursor-pointer"
                        >
                            <div className="text-lg flex flex-row justify-between">
                                <div className="text-zinc-700 group-hover:translate-x-2 ease-in duration-300 transition">
                                    Topological Data Analysis and Interpretability of 3D-Convolutional Neural Networks
                                </div>
                                <div className="text-zinc-400 group-hover:-translate-x-2 ease-in duration-300 transition">
                                    2024
                                </div>
                            </div>
                            <div className="text-zinc-400 group-hover:translate-x-2 ease-in duration-300 transition">
                                Accepted · 2024 AAAI Undergraduate Consortium 
                            </div>
                        </div>
                    </a>
                    <hr className="text-zinc-300"/>
                    <a target="_blank" rel="noopener noreferrer" href="files/HCI_BCI_Lit_Review.pdf">
                        <div 
                            className="text-base py-6 group hover:bg-zinc-100 ease-in-out duration-300 transition cursor-pointer"
                        >
                            <div className="text-lg flex flex-row justify-between">
                                <div className="text-zinc-700 group-hover:translate-x-2 ease-in duration-300 transition">
                                Human Computer Interaction for Brain Computer Interfaces: Literature Review
                                </div>
                                <div className="text-zinc-400 group-hover:-translate-x-2 ease-in duration-300 transition">
                                    2023
                                </div>
                            </div>
                            <div className="text-zinc-400 group-hover:translate-x-2 ease-in duration-300 transition">
                                UBC Multifaceted Innovations in Neurotechnology (MINT) Design Team
                            </div>
                        </div>
                    </a>
                    <hr className="text-zinc-300"/>
                </div>
                <div className="flex flex-col mx-72 pb-6">
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center group text-zinc-800">
                            <Link href="#top" className="text-base cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                                Back to top
                            </Link>
                            <Link href="#top" className="text-lg cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                                <MdKeyboardArrowUp size={20}/>
                            </Link>
                        </div>
                        <div className="text-zinc-800 text-base">
                            2025 Portfolio by Sadie Lee
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;