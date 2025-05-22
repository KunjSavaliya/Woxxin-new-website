'use client';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from "framer-motion";
// import Text from '../../../Reusable/Text';
import Button from '@/app/Reusable/Button';

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
function Publishing() {
    const logos = [
        '/HomePages/Gp1.png',
        '/HomePages/Gp2.png',
        '/HomePages/Gp3.png',
        '/HomePages/Gp4.png',
        '/HomePages/Gp5.png',
        '/HomePages/Gp6.png',
    ];
    const steps = [
        {
            title: "1.Introduction",
            description: "Communicate to know each other and find a way to work",
        },
        {
            title: "2.Evaluation",
            description: "Share your app data for us to analyze and feedback on how to grow your app",
        },
        {
            title: "3.Testing",
            description: "Run UA campaigns with a specific budget, then identify the scalability and improvement in-app",
        },
        {
            title: "4.Official Partner",
            description: "Discuss the agreement, then both sign and officially become partners",
        },
        {
            title: "5.Optimize & Scale",
            description: "Analyze metrics, create an interaction roadmap, promote & monetize app",
        },
        {
            title: "6.Get profits",
            description: "We celebrate success with millions of profits, together",
        },
    ];
    return (
        <>
            <div>

                <MobileAppSection
                    bgImageSrc="/HomePages/Publishing/Publishing.png"
                    logoSrc="/HomePages/Google.png"
                    iconSrc="/HomePages/Publishing/PublishingIcon.png"
                    title="Publishing"
                    title1="Empower developers to launch impactful mobile
apps & H5 Games that thrive in the worldwide
marketplace."
                    bgImageClassNames="h-auto object-fill "
                    iconClassNames='w-32 sm:w-40 md:w-56 xl:w-80'
                    descriptionClassName='text-2xl '
                    buttonText='Publishing'
                    MTitle='MISSION'

                    Mtext='Empower product creators to reach new heights
and foster lasting growth.'
                />
                <div className="bg-[#110f27] ">
                    <img
                        src="/HomePages/Publishing/Publishingman.png"
                        alt="Main Background"
                        className="w-full h-[400px] sm:h-[500px]"
                    />
                </div>
                <div className="bg-[#110f27] flex flex-col p-6  text-white gap-7 sm:px-12 md:px-20 lg:px-20 xl:px-36 xl:pl-64">

                    <Text className="text-xl md:text-2xl mt-1 lg:text-3xl xl:text-[35px] text-white">
                        VISION
                    </Text>
                    <img
                        src="/HomePages/line.png"
                        alt="Line"
                        className="w-full mt-6"
                    />
                    <Text size="text-center text-xl font-bold text-white   md:text-4xl lg:text-4xl xl:text-4xl  xl:mt-0 lg:mt-0 ">
                        Collaborating with over 200 international partners,
                        we create a vibrant technology ecosystem that serves
                        hundreds of millions of users each month.
                    </Text>
                </div>
                <div className='bg-[#110f27] px-5 sm:px-12 md:px-20 lg:px-20 xl:px-36 xl:pl-36'>
                    <div className="flex pt-12 flex-wrap md:flex-nowrap gap-4 justify-center divide-y md:divide-y-0 md:divide-x divide-[#9387FF] ">
                        {[
                            {
                                title: "100M+",
                                description: "Downloads",
                            },
                            {
                                title: "50M+",
                                description: "Monthly Active User",
                            },
                            {
                                title: "TOP20",
                                description: "Google Play's world in the Non-Game sector",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col pt-12 w-full max-w-full px-4 py-4 space-y-2 sm:w-1/2 md:w-1/3 text-start"
                            >
                                <Text className="text-2xl md:text-3xl xl:text-[70px] text-white text2-gradient font-bold xl:leading-[1]">
                                    {item.title}
                                </Text>
                                <Text className="text-md sm:text-lg md:text-xl xl:text-[20px] text-white font-medium break-words">
                                    {item.description}
                                </Text>
                            </div>
                        ))}
                    </div>


                    <div className="space-y-24 px-4 md:px-10 mt-12">

                        {/* Section 1: Image-Text on desktop */}
                        <div className="flex flex-col md:flex-row items-center justify-between ">
                            <div className="w-full md:w-1/2 flex justify-center md:justify-center order-1 md:order-1">
                                <img
                                    src="/HomePages/Publishing/Publishing1.png"
                                    alt="Investment"
                                    className="w-full max-w-[450px] h-auto rounded"
                                />
                            </div>
                            <div className="w-full md:w-1/2 text-white  text-center md:text-left order-2 md:order-2">
                                <p className="text-2xl sm:text-3xl lg:text-3xl xl:text-[35px]">
                                    <span className="text-[#5961F9]">Top</span> team of experts
                                </p>
                                <img
                                    src="/HomePages/line.png"
                                    alt="Line"
                                    className="mt-8 mb-8 mx-auto md:mx-0"
                                />
                                <p className="text-xl sm:text-2xl lg:text-3xl xl:text-[25px] leading-relaxed">
                                    With 200+ experts bringing 5–10 years of experience, we craft exclusive
                                    strategies to accelerate your app’s breakthrough growth.
                                </p>
                            </div>
                        </div>

                        {/* Section 2: Text-Image on desktop */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="w-full md:w-1/2 flex justify-center md:justify-center order-1 md:order-2">
                                <img
                                    src="/HomePages/Publishing/Publishing2.png"
                                    alt="Investment"
                                    className="w-full max-w-[450px] h-auto rounded"
                                />
                            </div>
                            <div className="w-full md:w-1/2 text-white p-5 text-center md:text-left order-2 md:order-1">
                                <p className="text-2xl sm:text-3xl lg:text-3xl xl:text-[35px]">
                                    <span className="text-[#5961F9]">Maximum</span> Transparency
                                </p>
                                <img
                                    src="/HomePages/line.png"
                                    alt="Line"
                                    className="mt-8 mb-8 mx-auto md:mx-0"
                                />
                                <p className="text-xl sm:text-2xl lg:text-3xl xl:text-[25px] leading-relaxed">
                                    Regularly deliver detailed updates on all app activities, ensuring
                                    partners remain fully informed on progress and essential metrics.
                                </p>
                            </div>
                        </div>

                        {/* Section 3: Image-Text on desktop */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="w-full md:w-1/2 flex justify-center md:justify-center order-1 md:order-1">
                                <img
                                    src="/HomePages/Publishing/Publishing3.png"
                                    alt="Investment"
                                    className="w-full max-w-[450px] h-auto rounded"
                                />
                            </div>
                            <div className="w-full md:w-1/2 text-white p-5 text-center md:text-left order-2 md:order-2">
                                <p className="text-2xl sm:text-3xl lg:text-3xl xl:text-[35px]">
                                    The process from <span className="text-[#5961F9]">Marketing to scaling</span>
                                </p>
                                <img
                                    src="/HomePages/line.png"
                                    alt="Line"
                                    className="mt-8 mb-8 mx-auto md:mx-0"
                                />
                                <p className="text-xl sm:text-2xl lg:text-3xl xl:text-[25px] leading-relaxed">
                                    Woxxin offers an all-encompassing approach that covers every aspect of
                                    marketing expenses, guiding you from the initial development stage all
                                    the way to worldwide expansion.
                                </p>
                            </div>
                        </div>

                        {/* Section 4: Text-Image on desktop */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="w-full md:w-1/2 flex justify-center md:justify-center order-1 md:order-2">
                                <img
                                    src="/HomePages/Publishing/Publishing4.png"
                                    alt="Investment"
                                    className="w-full max-w-[450px] h-auto rounded"
                                />
                            </div>
                            <div className="w-full md:w-1/2 text-white p-5 text-center md:text-left order-2 md:order-1">
                                <p className="text-2xl sm:text-3xl lg:text-3xl xl:text-[35px]">
                                    <span className="text-[#5961F9]">Revenue</span> Optimization
                                </p>
                                <img
                                    src="/HomePages/line.png"
                                    alt="Line"
                                    className="mt-8 mb-8 mx-auto md:mx-0"
                                />
                                <p className="text-xl sm:text-2xl lg:text-3xl xl:text-[25px] leading-relaxed">
                                    Launch a comprehensive marketing strategy across platforms like Google,
                                    Facebook, Instagram, and more to maximize your app’s visibility and
                                    revenue opportunities.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-center  xl:px-48 xl:pl-48 pt-12 '>


                        {/* Left Content */}
                        <Text className="text-gradient-mobileGames font-extralight text-4xl sm:text-5xl md:text-5xl lg:text-[70px] xl:text-[80px]  text-white  mt-6 sm:mt-10 xl:leading-[1.2]">
                            How do we work
                            together?
                        </Text>



                    </div>
                    <div className=" pt-12 pb-12 flex justify-center items-center  text-white">
                        <div className="w-full max-w-5xl relative">
                            <div className="space-y-12 relative">

                                {/* Vertical line: only show on medium screens and up */}
                                <div className="absolute left-[238px] top-[8px] bottom-[8px] w-[2px] bg-violet-500 z-0 hidden md:block" />

                                {steps.map((step, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-1 md:grid-cols-[200px_40px_1fr] items-start gap-4 relative"
                                    >
                                        {/* Title */}
                                        <div className="font-bold text-xl md:text-2xl">{step.title}</div>

                                        {/* Dot: only visible on medium screens and up */}
                                        <div className="hidden md:flex relative z-10 justify-center ml-[7px]">
                                            <div className="w-5 h-5 rounded-full bg-white border-4 border-[#0C0C25] shadow-[0px_0px_0px_2px_#8B5CF6]" />
                                        </div>

                                        {/* Description */}
                                        <div className="text-white font-extralight text-xl md:text-2xl leading-relaxed">{step.description}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                </div>




                <div>
                    <GlobalPartners />
                </div>
                <HeroSection
                    imageSrc="/HomePages/Investment/footerbtn.png"
                    text="Contact us for
collaboration today"
                    buttonText="Contact Us"
                    textClassName='text-white text-gradient-publish'
                    text1ClassName='text-3xl text-white mt-[-5px] '
                // onButtonClick={() => alert("Button clicked!")}
                />

            </div>
        </>
    );
}

export default Publishing;
