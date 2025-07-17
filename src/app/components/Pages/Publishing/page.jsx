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
                    bgImageClassNames="absolute w-full h-[800px] md:h-[1000px] "
                    // className=""
                    iconClassNames='w-32 w-auto mt-[-25px]'
                    descriptionClassName='text-2xl '
                    MTitle='MISSION'
                    Mtext='Empower product creators to reach new heights
and foster lasting growth.'
                />
                <div className="bg-[#110f27] mx-auto">
                    <img
                        src="/HomePages/Publishing/Publishingman.png"
                        alt="Main Background"
                        className="w-full h-[400px] sm:h-[600px]"
                    />
                </div>
                <div className="bg-[#110f27] flex flex-col p-6  text-white gap-7 sm:px-12 md:px-20 lg:px-20 xl:px-64 xl:pl-64">
                        <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                    <Text className="text-xl md:text-2xl mt-1 lg:text-3xl xl:text-[35px] text-white">
                        VISION
                    </Text>
                    <img
                        src="/HomePages/line.png"
                        alt="Line"
                        className="w-full mt-6 rounded-[20%]"
                    />
                    <Text size="text-center text-xl font-bold text-white   md:text-4xl lg:text-4xl xl:text-4xl  xl:mt-0 lg:mt-0 pt-12 ">
                        Collaborating with over 200 international partners,
                        we create a vibrant technology ecosystem that serves
                        hundreds of millions of users each month.
                    </Text>
                    </ScrollAnimation>
                </div>
                <div className='bg-[#110f27] px-5 sm:px-12 md:px-20 lg:px-20 xl:px-36 xl:pl-36 pt-12'>
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
                                className="flex flex-col w-full max-w-full px-4 py-4 pt-12 space-y-2 sm:w-1/2 md:w-1/3 text-start"
                            >
                                <Text className="text-2xl md:text-3xl xl:text-[90px] text-white text2-gradient font-bold xl:leading-[1]">
                                    {item.title}
                                </Text>
                                <Text className="text-md sm:text-lg md:text-xl xl:text-[20px] text-white font-medium break-words">
                                    {item.description}
                                </Text>
                            </div>
                        ))}
                    </div>


                    <div className="px-4 space-y-24 mt-44 md:px-10">

                        {/* Section 1: Image-Text on desktop */}
                                                <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                        <div className="flex flex-col items-center justify-between md:flex-row ">
                            <div className="flex justify-center order-1 w-full md:w-1/2 md:justify-center md:order-1">
                                <img
                                    src="/HomePages/Publishing/Publishing1.png"
                                    alt="Investment"
                                    className="w-full max-w-[450px] h-auto rounded"
                                />
                            </div>
                            <div className="order-2 w-full text-center text-white md:w-1/2 md:text-left md:order-2">
                                <p className="text-2xl sm:text-3xl lg:text-3xl xl:text-[35px]">
                                    <span className="text-[#5961F9]">Top</span> team of experts
                                </p>
                                <img
                                    src="/HomePages/line.png"
                                    alt="Line"
                                    className="mx-auto mt-8 mb-8 rounded md:mx-0"
                                />
                                <p className="text-xl sm:text-2xl lg:text-3xl xl:text-[25px] leading-relaxed">
                                    With 200+ experts bringing 5–10 years of experience, we craft exclusive
                                    strategies to accelerate your app’s breakthrough growth.
                                </p>
                            </div>
                        </div>
</ScrollAnimation>
                        <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                        {/* Section 2: Text-Image on desktop */}
                        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
                            <div className="flex justify-center order-1 w-full md:w-1/2 md:justify-center md:order-2">
                                <img
                                    src="/HomePages/Publishing/Publishing2.png"
                                    alt="Investment"
                                    className="w-full max-w-[450px] h-auto rounded"
                                />
                            </div>
                            <div className="order-2 w-full p-5 text-center text-white md:w-1/2 md:text-left md:order-1">
                                <p className="text-2xl sm:text-3xl lg:text-3xl xl:text-[35px]">
                                    <span className="text-[#5961F9]">Maximum</span> Transparency
                                </p>
                                <img
                                    src="/HomePages/line.png"
                                    alt="Line"
                                    className="mx-auto mt-8 mb-8 rounded md:mx-0"
                                />
                                <p className="text-xl sm:text-2xl lg:text-3xl xl:text-[25px] leading-relaxed">
                                    Regularly deliver detailed updates on all app activities, ensuring
                                    partners remain fully informed on progress and essential metrics.
                                </p>
                            </div>
                        </div>
                        </ScrollAnimation>
                                                <ScrollAnimation animateIn="animate__animated animate__fadeInUp">


                        {/* Section 3: Image-Text on desktop */}
                        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
                            <div className="flex justify-center order-1 w-full md:w-1/2 md:justify-center md:order-1">
                                <img
                                    src="/HomePages/Publishing/Publishing3.png"
                                    alt="Investment"
                                    className="w-full max-w-[450px] h-auto rounded"
                                />
                            </div>
                            <div className="order-2 w-full p-5 text-center text-white md:w-1/2 md:text-left md:order-2">
                                <p className="text-2xl sm:text-3xl lg:text-3xl xl:text-[35px]">
                                    The process from <span className="text-[#5961F9]">Marketing to scaling</span>
                                </p>
                                <img
                                    src="/HomePages/line.png"
                                    alt="Line"
                                   className="mx-auto mt-8 mb-8 rounded md:mx-0"
                                />
                                <p className="text-xl sm:text-2xl lg:text-3xl xl:text-[25px] leading-relaxed">
                                    Woxxin offers an all-encompassing approach that covers every aspect of
                                    marketing expenses, guiding you from the initial development stage all
                                    the way to worldwide expansion.
                                </p>
                            </div>
                        </div>
</ScrollAnimation>
                        <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                        {/* Section 4: Text-Image on desktop */}
                        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
                            <div className="flex justify-center order-1 w-full md:w-1/2 md:justify-center md:order-2">
                                <img
                                    src="/HomePages/Publishing/Publishing4.png"
                                    alt="Investment"
                                    className="w-full max-w-[450px] h-auto rounded"
                                />
                            </div>
                            <div className="order-2 w-full p-5 text-center text-white md:w-1/2 md:text-left md:order-1">
                                <p className="text-2xl sm:text-3xl lg:text-3xl xl:text-[35px]">
                                    <span className="text-[#5961F9]">Revenue</span> Optimization
                                </p>
                                <img
                                    src="/HomePages/line.png"
                                    alt="Line"
                                    className="mx-auto mt-8 mb-8 md:mx-0"
                                />
                                <p className="text-xl sm:text-2xl lg:text-3xl xl:text-[25px] leading-relaxed">
                                    Launch a comprehensive marketing strategy across platforms like Google,
                                    Facebook, Instagram, and more to maximize your app’s visibility and
                                    revenue opportunities.
                                </p>
                            </div>
                        </div>
</ScrollAnimation>
                    </div>
                    <div className='flex justify-center pt-12 xl:px-48 xl:pl-48 '>


                        {/* Left Content */}
                        <Text className="text-gradient-mobileGames font-extralight text-4xl sm:text-5xl md:text-5xl lg:text-[70px] xl:text-[80px]  text-white  mt-6 sm:mt-10 xl:leading-[1.2]">
                            How do we work
                            together?
                        </Text>



                    </div>
                    <div className="flex items-center justify-center pt-12 pb-12 text-white ">
                        <div className="relative w-full max-w-5xl">
                            <div className="relative space-y-12">

                                {/* Vertical line: only show on medium screens and up */}
                                <div className="absolute left-[238px] top-[8px] bottom-[8px] w-[2px] bg-violet-500 z-0 hidden md:block" />

                                {steps.map((step, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-1 md:grid-cols-[200px_40px_1fr] items-start gap-4 relative"
                                    >
                                        {/* Title */}
                                        <div className="text-xl font-bold md:text-2xl">{step.title}</div>

                                        {/* Dot: only visible on medium screens and up */}
                                        <div className="hidden md:flex relative z-10 justify-center ml-[7px]">
                                            <div className="w-5 h-5 rounded-full bg-white border-4 border-[#0C0C25] shadow-[0px_0px_0px_2px_#8B5CF6]" />
                                        </div>

                                        {/* Description */}
                                        <div className="text-xl leading-relaxed text-white font-extralight md:text-2xl">{step.description}</div>
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
                    textClassName='text-white text-gradient-publish lg:text-8xl'
                // onButtonClick={() => alert("Button clicked!")}
                />

            </div>
        </>
    );
}

export default Publishing;
