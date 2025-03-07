'use client';

import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useRouter } from "next/navigation";

const Hero_Sm = () => {
    const router = useRouter();

    return (
        <div className="overflow-x-hidden">
            <section id="top" className="flex flex-col justify-center mx-8 mt-16 gap-2">
                <Image 
                    src='/images/pfp_sm.svg'
                    alt="pfp"
                    height={60}
                    width={60}
                />
                <div className="text-3xl text-zinc-400 pt-2">
                    Hi, I'm Sadie.
                </div>
                <div className="text-3xl text-zinc-700">
                    Student at UBC. Focused on data & emerging tech.
                </div>
                <div className="pt-8 text-lg text-zinc-700 flex flex-row gap-8">
                    <Link href="/" className="text-base underline underline-offset-4 cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                        Work
                    </Link>
                    <Link href="/about" className="text-base cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                        About
                    </Link>
                    <Link href="/lab" className="text-base cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                        Lab
                    </Link>
                </div>
            </section>
            <section className="w-screen flex flex-col mt-16 bg-zinc-50">
                <div className="flex flex-col mx-8">
                    <Image 
                        src='/images/mcp_ai.svg'
                        alt="mcp"
                        height={350}
                        width={350}
                        className="rounded-xs pt-10"
                    />
                    <div className="text-zinc-400 text-base pt-4">
                        Mayo Clinic Platform · Summer 2024
                    </div>
                    <div className="text-zinc-800 text-xl">
                        Developing and testing an end-to-end AI for medical imaging workflow
                    </div>
                    <div className="flex flex-row group pt-2"
                        onClick={() => router.push('/imaging')}
                    >
                        <div className="text-zinc-400 text-base cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                            Read more
                        </div>
                        <MdKeyboardArrowRight size={20} className="cursor-pointer mt-1 text-zinc-400 group-hover:opacity-50 group-hover:translate-x-1 transition duration-200 ease-in"/>
                    </div>
                    <Image 
                        src='/images/tir.svg'
                        alt="mcp"
                        height={350}
                        width={350}
                        className="rounded-xs pt-10"
                    />
                    <div className="text-zinc-400 text-base pt-4">
                        BCCHR · 2023-2024
                    </div>
                    <div className="text-zinc-800 text-xl">
                        Writing scripts to collect and analyze time in range data for type 1 diabetes
                    </div>
                    <div className="flex flex-row group pt-2"
                        onClick={() => router.push('/timeinrange')}
                    >
                        <div className="text-zinc-400 text-base cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                            Read more
                        </div>
                        <MdKeyboardArrowRight size={20} className="cursor-pointer mt-1 text-zinc-400 group-hover:opacity-50 group-hover:translate-x-1 transition duration-200 ease-in"/>
                    </div>
                    <Image 
                        src='/images/forestar.svg'
                        alt="mcp"
                        height={350}
                        width={350}
                        className="rounded-xs pt-10"
                    />
                    <div className="text-zinc-400 text-base pt-4">
                        Emerging Media Lab · Summer 2023
                    </div>
                    <div className="text-zinc-800 text-xl">
                        Building a web app with location-based AR for forest bathing
                    </div>
                    <div className="flex flex-row group pt-2 pb-8"
                        onClick={() => router.push('/forestar')}
                    >
                        <div className="text-zinc-400 text-base cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                            Read more
                        </div>
                        <MdKeyboardArrowRight size={20} className="cursor-pointer mt-1 text-zinc-400 group-hover:opacity-50 group-hover:translate-x-1 transition duration-200 ease-in"/>
                    </div>
                </div>
            </section>
            <section className="w-screen flex flex-col mt-16">
                <div className="mx-8">
                    <div className="text-zinc-700 text-xl">
                        Research
                    </div>
                    <hr className="text-zinc-300 mt-5"/>
                    <div 
                        className="text-base py-4 group hover:bg-zinc-100 ease-in-out duration-300 transition"
                    >
                        <div className="text-base flex flex-row justify-between">
                            <div className="text-zinc-700 group-hover:translate-x-2 ease-in duration-300 transition">
                                Re-identification Risk in Artificial Intelligence for Medical Imaging
                            </div>
                        </div>
                        <div className="text-zinc-400 group-hover:translate-x-2 ease-in duration-300 transition">
                            In Progress
                        </div>
                    </div>
                    <hr className="text-zinc-300"/>
                    <div 
                        className="text-base py-4 group hover:bg-zinc-100 ease-in-out duration-300 transition"
                    >
                        <div className="text-base flex flex-row justify-between">
                            <div className="text-zinc-700 group-hover:translate-x-2 ease-in duration-300 transition">
                                Design and Implementation of a Mobile App to Deliver Peer Support to Adults with T1D: Operational Feasibility Study
                            </div>
                        </div>
                        <div className="text-zinc-400 group-hover:translate-x-2 ease-in duration-300 transition">
                            In Progress
                        </div>
                    </div>
                    <hr className="text-zinc-300"/>
                    <a target="_blank" rel="noopener noreferrer" href="files/URTC2024Camera.pdf">
                        <div 
                            className="text-base py-4 group hover:bg-zinc-100 ease-in-out duration-300 transition"
                        >
                            <div className="text-base flex flex-row justify-between">
                                <div className="text-zinc-700 group-hover:translate-x-2 ease-in duration-300 transition">
                                    Formalizing Ethical Design in Prostate Cancer Image Analysis: A Preliminary Case Study
                                </div>
                            </div>
                            <div className="text-zinc-400 group-hover:translate-x-2 ease-in duration-300 transition">
                                Accepted · 2024 IEEE MIT URTC
                            </div>
                        </div>
                    </a>
                    <hr className="text-zinc-300"/>
                    <a target="_blank" rel="noopener noreferrer" href="files/AAAI_UC_Proposal.pdf">
                        <div 
                            className="text-base py-4 group hover:bg-zinc-100 ease-in-out duration-300 transition"
                        >
                            <div className="text-base flex flex-row justify-between">
                                <div className="text-zinc-700 group-hover:translate-x-2 ease-in duration-300 transition">
                                    Topological Data Analysis and Interpretability of 3D-Convolutional Neural Networks
                                </div>
                            </div>
                            <div className="text-zinc-400 group-hover:translate-x-2 ease-in duration-300 transition">
                                Accepted · 2024 AAAI UC
                            </div>
                        </div>
                    </a>
                    <hr className="text-zinc-300"/>
                    <a target="_blank" rel="noopener noreferrer" href="files/HCI_BCI_Lit_Review.pdf">
                        <div 
                            className="text-base py-4 group hover:bg-zinc-100 ease-in-out duration-300 transition"
                        >
                            <div className="text-base flex flex-row justify-between">
                                <div className="text-zinc-700 group-hover:translate-x-2 ease-in duration-300 transition">
                                    HCI for Brain Computer Interfaces: Literature Review
                                </div>
                            </div>
                            <div className="text-zinc-400 group-hover:translate-x-2 ease-in duration-300 transition">
                                UBC MINT Design Team
                            </div>
                        </div>
                    </a>
                </div>
                <div className="flex flex-col pb-6 mx-8 mt-16 items-center justify-center">
                    <div className="flex flex-row items-center group text-zinc-800">
                        <Link href="#top" className="text-base cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                            Back to top
                        </Link>
                        <Link href="#top" className="text-lg cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                            <MdKeyboardArrowUp size={20}/>
                        </Link>
                    </div>
                    
                    <div className="flex flex-row justify-between text-zinc-400 pt-8 w-64">
                        <Link href="https://github.com/leesadie" className="text-base cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                            Github
                        </Link>
                        <Link href="https://www.linkedin.com/in/leesadie/" className="text-base cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                            LinkedIn
                        </Link>
                        <Link href="mailto:leesadie025@gmail.com" className="text-base cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                            Email
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero_Sm;