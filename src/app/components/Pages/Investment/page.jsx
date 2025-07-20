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
                    bgImageSrc="/HomePages/Homedesign.png"
                    logoSrc="/HomePages/Google.png"
                    iconSrc="/HomePages/Investment/rocket.png"
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
                    iconClassNames=" md:w-auto lg:w-full h-[400px]"
                    descriptionClassName='text-2xl '
                />
                <div className="bg-[#110f27] mt-[-4px]">
                   <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                        <div className="flex flex-col justify-between gap-10 px-5 pt-24 md:flex-row sm:px-12 md:px-20 lg:px-20 xl:px-36 xl:pl-64">
                            <div className="flex justify-center w-full md:justify-end md:w-1/2">
                                <img
                                    src="/HomePages/Investment/InvestMission.png"
                                    alt="Investment"
                                    className="w-3/4 h-auto rounded md:w-auto "
                                />
                            </div>
                            {/* Text Section */}
                            <div className="w-full p-5 text-white">
                                <p className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-[25px] text-center md:text-start">
                                    <span className="text-[#5961F9]">OUR</span> MISSION
                                </p>
                                <img
                                    src="/HomePages/line.png"
                                    alt="Line"
                                    className="mx-auto mt-5 mb-5 md:mx-0"
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
                    </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                        <div className="flex flex-col gap-5 pt-24 md:flex-row justify-betweensm:px-12 md:px-20 lg:px-20 xl:px-36 xl:pl-64">
                            <div className="p-5 text-white ">
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
                                    src="/HomePages/Investment/InvestTechno.png"
                                    alt="Investment"
                                    className="w-3/4 h-auto rounded md:w-auto "
                                />
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>

                <div className="relative bg-[#110f27] w-full h-full mb-28">
                    <img
                        src="/HomePages/Investment/SellApp.png"
                        alt="Main Background"
                        className="absolute w-full h-[800px] md:h-[1000px] "
                    />
                    <div className="relative z-10 flex flex-col gap-16 md:pl-80 md:pr-80">

                        <div className='flex justify-center mt-12 '>
                            <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                                {/* Left Content */}
                                <Text className="text-gradient-mobiletext font-extralight text-4xl sm:text-5xl md:text-5xl lg:text-[70px] xl:text-[80px]  text-white  mt-6 sm:mt-10">
                                    LOOKING TO SELL YOUR APP?
                                </Text>

                            </ScrollAnimation>


                        </div>
                        <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
                            <div className="flex flex-col text-white ">
                                <Text size="text-center text-xl font-bold text-white   md:text-4xl lg:text-4xl xl:text-4xl  mb-12 ">
                                    Simply fill out the form below and one of our
                                    team members will get back to you within
                                    12
                                    hours.
                                </Text>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
                            <div className="flex flex-col text-white ">
                                <Text size="text-center text-xl font-bold text-white   md:text-4xl lg:text-4xl xl:text-4xl  mb-12 ">
                                    Our promise: We will get you a definite answer
                                    within 72 hours.
                                </Text>
                            </div>
                        </ScrollAnimation>
                        <div className="flex justify-center px-4 ">
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
                    imageSrc="/HomePages/Investment/footerbtn.png"
         text="Apply for Investment"
        textClassName='lg:text-[69px] xl:text-[70px] 2xl:text-[90px] text-gradient-Home'

                    text1='We would like to get to know you and your start-up'
        buttonText="Let`s Talk"
        text1ClassName='text-white text-2xl'
        onButtonClick={() => alert("Button clicked!")}
      />
            </div >
        </>
    );
}

export default Investment;
