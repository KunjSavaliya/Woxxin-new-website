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
function Investment() {

    return (
        <>
            <div>

                <MobileAppSection
                    bgImageSrc="/HomePages/MobileGame/MobGameVector.png"
                    logoSrc="/HomePages/Google.png"
                    iconSrc="/HomePages/MobileGame/MobGame.png"
                    title="Investment"
                    title1="With a huge resources and the most experience in
the field of Product Development, Marketing,
Operation, Optimization, Financer...
in Mobile Games,
Apps & H5 Games/Quiz we really want to help
companies make strong breakthroughs and achieve
many great
achievements."
                    bgImageClassNames="h-full"
                    iconClassNames='w-32 sm:w-40 md:w-56 xl:w-80'
                    descriptionClassName='text-2xl '
                />
                <div className="bg-[#110f27] mt-[-4px]">

                    <div className="pt-24 flex flex-col md:flex-row justify-between px-5 sm:px-12 md:px-20 lg:px-20 xl:px-36 xl:pl-64 gap-10">
                        <div className="flex justify-center md:justify-end w-full md:w-1/2">
                            <img
                                src="/HomePages/Investment/InvestMission.png"
                                alt="Investment"
                                className="w-3/4 md:w-auto h-auto rounded   "
                            />
                        </div>
                        {/* Text Section */}
                        <div className="text-white p-5 w-full">
                            <p className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-[25px] text-center md:text-start">
                                <span className="text-[#5961F9]">OUR</span> MISSION
                            </p>
                            <img
                                src="/HomePages/line.png"
                                alt="Line"
                                className="mt-5 mb-5 mx-auto md:mx-0"
                            />
                            <p className="text-xl sm:text-2xl lg:text-3xl xl:text-[30px] text-center md:text-start leading-relaxed">
                                Transform the lives of millions globally
                                by crafting innovative technology
                                solutions that seamlessly integrate
                                into every facet of daily living.
                            </p>
                        </div>

                        {/* Image Section */}


                    </div>
                    <div className="pt-24 flex flex-col md:flex-row justify-betweensm:px-12 md:px-20 lg:px-20 xl:px-36 xl:pl-64 gap-5">


                        {/* Text Section */}
                        <div className="text-white p-5  ">
                            <p className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-[25px]  text-center lg:text-start">
                                <span className="text-[#5961F9]">OUR</span> VISION
                            </p>
                            <img
                                src="/HomePages/line.png"
                                alt="Line"
                                className="mt-5 mb-5"
                            />
                            <p className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-[30px] text-center lg:text-start">
                                Aspire to be the leading tech company
                                in India, aiming to make a global
                                impact.
                            </p>



                        </div>

                        {/* Image Section */}
                        <div className="flex justify-center md:justify-start">
                            <img
                                src="/HomePages/Investment/investTechno.png"
                                alt="Investment"
                                className="w-3/4 md:w-auto h-auto rounded   "
                            />
                        </div>
                    </div>
                </div>

                <div className="relative bg-[#110f27] w-full h-full ">
                    <img
                        src="/HomePages/Investment/SellApp.png"
                        alt="Main Background"
                        className="absolute w-full h-[800px] md:h-[1000px] "
                    />
                    <div className="relative z-10 md:pl-80 md:pr-80 flex flex-col gap-16">

                        <div className='flex justify-center mt-12 '>
                            <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                                {/* Left Content */}
                                <Text className="text-gradient-mobiletext font-extralight text-4xl sm:text-5xl md:text-5xl lg:text-[70px] xl:text-[80px]  text-white  mt-6 sm:mt-10">
                                    LOOKING TO SELL YOUR APP?
                                </Text>

                            </ScrollAnimation>


                        </div>
                        <div className="flex flex-col text-white  ">
                            <Text size="text-center text-xl font-bold text-white   md:text-4xl lg:text-4xl xl:text-4xl  mb-12 ">
                                Simply fill out the form below and one of our
                                team members will get back to you within
                                12
                                hours.
                            </Text>
                        </div>
                        <div className="flex flex-col text-white  ">
                            <Text size="text-center text-xl font-bold text-white   md:text-4xl lg:text-4xl xl:text-4xl  mb-12 ">
                                Our promise: We'll get you a definite answer
                                within 72 hours.
                            </Text>
                        </div>
                        <div className=" flex    justify-center px-4">
                            <form className="w-full max-w-lg space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#5961F9] backdrop-blur-sm"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#5961F9] backdrop-blur-sm"
                                />
                                <input
                                    type="url"
                                    placeholder="Google Play App URL"
                                    className="w-full px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#5961F9] backdrop-blur-sm"
                                />
                                <button
                                    type="submit"
                                    className="w-full py-3 text-white border border-[#5961F9] rounded-md hover:bg-[#5961F9]/10 transition duration-300"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>

                    </div>
                </div>

                <HeroSection
                    imageSrc="/HomePages/H5Game.png"
                    text="Your Future Career Opportunities"
                    buttonText="Discover Now"
                    textClassName='text-white mt-[-100px] md:mt-[-150px] lg:mt-[-150px] xl:mt-[-150px]'
                // onButtonClick={() => alert("Button clicked!")}
                />

            </div >
        </>
    );
}

export default Investment;
