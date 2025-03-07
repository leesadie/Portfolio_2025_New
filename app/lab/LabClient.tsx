'use client';

import Image from "next/image";
import Link from "next/link";

const LabClient = () => {

    return (
        <div className="flex flex-col md:mx-72 mx-8">
            <div className="pt-8 text-lg text-zinc-700 flex flex-row gap-8 md:hidden">
                <Link href="/" className="text-base cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                    Work
                </Link>
                <Link href="/about" className="text-base cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                    About
                </Link>
                <Link href="/lab" className="text-base underline underline-offset-4 cursor-pointer group-hover:opacity-50 transition duration-200 ease-in">
                    Lab
                </Link>
            </div>
            <div className="text-zinc-400 text-2xl md:mt-20 mt-12">
                In the lab
            </div>
            <div className="text-zinc-700 md:text-2xl text-base pt-2">
                A collection of things I've learned, explored, and experimented with on my own.
            </div>

            {/* Creative code section */}
            <div className="mt-10 text-xl text-zinc-700">
                Creative Code
            </div>
            <div className="grid grid-cols-2 gap-3 mt-5">
                <div className="w-full lg:h-60 h-32 rounded-lg">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-xs object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/coordinates.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="w-full lg:h-60 h-32 rounded-lg">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-xs object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/flow.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="text-xs text-neutral-900 opacity-70 lg:text-base">
                    Spherical coordinates - p5.js
                </div>
                <div className="text-xs text-neutral-900 opacity-70 lg:text-base">
                    Flow fields - p5.js
                </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-5">
                <div className="w-full lg:h-60 h-24 rounded-lg">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-xs object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/loading.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="w-full lg:h-60 h-24 rounded-lg">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-xs object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/typography.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="w-full lg:h-60 h-24 rounded-lg">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-xs object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/generative.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="text-xs text-neutral-900 opacity-70 lg:text-base">
                    Loading - Processing
                </div>
                <div className="text-xs text-neutral-900 opacity-70 lg:text-base">
                    Typography - Processing
                </div>
                <div className="text-xs text-neutral-900 opacity-70 lg:text-base">
                    Generative - Processing
                </div>
            </div>

            {/* Models & Methods section */}
            <div className="md:mt-20 mt-12 text-xl text-zinc-700">
                Models & Methods
            </div>
            <hr className="text-zinc-200 mt-5"/>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/leesadie/Pytorch_Transformer">
                <div 
                    className="py-4 group hover:bg-zinc-100 ease-in-out duration-300 transition cursor-pointer"
                >
                    <div className="flex flex-row justify-between">
                        <div className="text-zinc-700 md:text-lg group-hover:translate-x-2 ease-in duration-300 transition">
                            Transformer implementation with Pytorch
                        </div>
                        <Image 
                            src='/images/transformer_2.svg'
                            alt="transformer"
                            height={80}
                            width={80}
                            className="group-hover:-translate-x-2 ease-in duration-300 transition md:rounded-sm rounded-xs"
                        />
                    </div>
                </div>
            </a>
            <hr className="text-zinc-200"/>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/leesadie/GNNs-for-fMRI">
                <div 
                    className="py-4 group hover:bg-zinc-100 ease-in-out duration-300 transition cursor-pointer"
                >
                    <div className="flex flex-row justify-between">
                        <div className="text-zinc-700 md:text-lg group-hover:translate-x-2 ease-in duration-300 transition">
                            Graph convolutional networks for fMRI
                        </div>
                        <Image 
                            src='/images/gnn2.svg'
                            alt="gnn"
                            height={80}
                            width={80}
                            className="group-hover:-translate-x-2 ease-in duration-300 transition md:rounded-sm rounded-xs"
                        />
                    </div>
                </div>
            </a>
            <hr className="text-zinc-200"/>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/leesadie/fMRI_Network_TDA">
                <div 
                    className="py-4 group hover:bg-zinc-100 ease-in-out duration-300 transition cursor-pointer"
                >
                    <div className="flex flex-row justify-between">
                        <div className="text-zinc-700 md:text-lg group-hover:translate-x-2 ease-in duration-300 transition">
                            Network & topological data analysis for fMRI
                        </div>
                        <Image 
                            src='/images/ntda_2.svg'
                            alt="gnn"
                            height={80}
                            width={80}
                            className="group-hover:-translate-x-2 ease-in duration-300 transition md:rounded-sm rounded-xs"
                        />
                    </div>
                </div>
            </a>
            <hr className="text-zinc-200"/>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/leesadie/Brain-Tumor-Detection">
                <div 
                    className="py-4 group hover:bg-zinc-100 ease-in-out duration-300 transition cursor-pointer"
                >
                    <div className="flex flex-row justify-between">
                        <div className="text-zinc-700 md:text-lg group-hover:translate-x-2 ease-in duration-300 transition">
                            Brain tumor classification with Pytorch
                        </div>
                        <Image 
                            src='/images/brain_classif2.svg'
                            alt="gnn"
                            height={80}
                            width={80}
                            className="bg-black group-hover:-translate-x-2 ease-in duration-300 transition md:rounded-sm rounded-xs py-1"
                        />
                    </div>
                </div>
            </a>
            <hr className="text-zinc-200"/>

            {/* Extras section */}
            <div className="md:mt-20 mt-12 text-xl text-zinc-700">
                Extras - Web Dev
            </div>
            <div className="grid grid-cols-2 gap-3 mt-5 pb-10">
                <a target="_blank" rel="noopener noreferrer" href="https://ubcballet.vercel.app/">
                    <div className="w-full lg:h-60 h-32">
                        <Image 
                            src='/images/ubcballet.svg'
                            alt="ubcballet"
                            className="rounded-xs object-cover hover:opacity-75 transition duration-200 ease-in"
                            height={100}
                            width={100}
                            style={{ width: '100%', height: '100%'}}
                        />
                    </div>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://kyralee.vercel.app/">
                    <div className="w-full lg:h-60 h-32">
                        <Image 
                            src='/images/kyra_web.svg'
                            alt="ubcballet"
                            height={100}
                            width={100}
                            className="rounded-xs object-cover hover:opacity-75 transition duration-200 ease-in"
                            style={{ width: '100%', height: '100%'}}
                        />
                    </div>
                </a>
                <div className="text-sm text-neutral-900 opacity-70 lg:text-base">
                    UBC Ballet Website
                </div>
                <div className="text-sm text-neutral-900 opacity-70 lg:text-base">
                    Kyra Lee Portfolio
                </div>
            </div>
        </div>
    );
}

export default LabClient;