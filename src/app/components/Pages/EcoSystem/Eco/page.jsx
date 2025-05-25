'use client';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from "framer-motion";
// import Text from '../../../Reusable/Text';
import Button from '@/app/Reusable/Button';

import { FaChartLine, FaBullseye, FaCoins, FaCogs } from "react-icons/fa";
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Text from '@/app/Reusable/Text';
import HeroSection from '@/app/Reusable/HeroSection';
import MobileAppSection from '@/app/Reusable/MobileSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core styles
import 'swiper/css/autoplay'; // autoplay module
import { Autoplay } from 'swiper/modules';
import GlobalPartners from '@/app/Reusable/GlobalPartners';
import Image from 'next/image';
function Eco() {
    const features = [
        {
            icon: <FaChartLine size={28} className="text-blue-500" />,
            title: "Market Research",
            desc: "Deep market analysis and competitor research to position your product effectively",
        },
        {
            icon: <FaBullseye size={28} className="text-blue-500" />,
            title: "Marketing Optimization",
            desc: "Data-driven strategies to maximize your marketing ROI and reach",
        },
        {
            icon: <FaCoins size={28} className="text-blue-500" />,
            title: "Monetization",
            desc: "Optimize revenue streams and subscription models for sustainable growth",
        },
        {
            icon: <FaCogs size={28} className="text-blue-500" />,
            title: "Product Optimization",
            desc: "Continuous improvement and refinement of your digital products",
        },
    ];
    return (
        <>
            <div>

                <MobileAppSection
                    bgImageSrc="/HomePages/MobileGame/MobGameVector.png"
                    logoSrc="/HomePages/Google.png"
                    iconSrc="/HomePages/Eco/EcoDim.png"
                    title="Innovative
Solutions for a
Global Audience."
                    EcoText1='Explore over 300+ innovative items in
3 popular sectors!'
                    EcoText='Innovative solutions paired with efficient
strategies for success.'
                    bgImageClassNames="h-full"
                    iconClassNames='Auto'
                />

                <div className='bg-[#F4F4F4] pt-10'>
                    <Text className="text-xl p-4 text-white md:text-2xl lg:text-5xl xl:text-7xl text-gradient-mobilePro" >
                        Discover Our
                        Top Picks
                    </Text>


                    <div className='mt-24'>
                        <img
                            src="/HomePages/Eco/EcoMobileUp.png"
                            alt="Main Background"
                            className="w-[60%] mx-auto"
                        />
                    </div>
                </div>
                <div className="relative  bg-[#110f27] ">
                    <div>
                        <Image
                            src='/HomePages/Eco/EcoDrive.png'
                            alt="Main Background"
                            className="w-full mt-[-4px] h-[250px] xl:h-[650px]"
                            width={1920}
                            height={700}
                        />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center">
                        <div className="w-full max-w-4xl px-4">

                            <Text className='text-white text-8xl text-start'>
                                Innovation Drives
                                Our Success
                            </Text>
                        </div>
                    </div>

                </div>

                <div className="bg-[#110f27] py-12 px-4 pt-60">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-[#100F23] border border-white/10 rounded-lg p-6 hover:shadow-lg transition"
                            >
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-400">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative  bg-[#110f27] ">
                    <div>
                        <Image
                            src='/HomePages/Eco/EcoTouch.png'
                            alt="Main Background"
                            className="w-full mt-[-4px] h-[250px] xl:h-[650px]"
                            width={1920}
                            height={700}
                        />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center pt-12">
                        <div className="w-full max-w-4xl px-4">

                            <Text className='text-white text-8xl text-center'>
                                Join Woxxin to open new
                                pathways in the
                                digital future
                            </Text>
                        </div>
                    </div>

                </div>
                <div className="relative  bg-[#110f27]">
                    <div>
                        <Image
                            src='/HomePages/Contfooter.png'
                            alt="Main Background"
                            className="w-full mt-[-4px] h-[250px] xl:h-[250px]"
                            width={1920}
                            height={700}
                        />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-top justify-center">
                        <div className="w-full max-w-sm px-4">
                            <button
                                type="Apply here"
                                className="w-full py-3 text-white border border-[#5961F9] rounded-md hover:bg-[#5961F9]/10 transition duration-300"
                            >
                                Apply here
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Eco;
