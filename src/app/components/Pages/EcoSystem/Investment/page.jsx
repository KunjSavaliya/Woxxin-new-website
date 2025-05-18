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
                    <div className="pt-24 flex flex-col md:flex-row justify-betweensm:px-12 md:px-20 lg:px-20 xl:px-36 xl:pl-64 gap-5">

                        {/* Image Section */}
                        <div className="flex justify-center md:justify-start">
                            <img
                                src="/HomePages/Investment/investTechno.png"
                                alt="Investment"
                                className="w-3/4 md:w-auto h-auto rounded   "
                            />
                        </div>

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

                    </div>
                    <div className="pt-24 flex flex-col md:flex-row justify-betweensm:px-12 md:px-20 lg:px-20 xl:px-36 xl:pl-64 gap-5">


                        {/* Text Section */}
                        <div className="text-white p-5  ">
                            <p className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-[25px]  text-center lg:text-start">
                                <span className="text-[#5961F9]">OUR</span> MISSION
                            </p>
                            <img
                                src="/HomePages/line.png"
                                alt="Line"
                                className="mt-5 mb-5"
                            />
                            <p className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-[30px] text-center lg:text-start">
                                Transform the lives of millions globally
                                by crafting innovative technology
                                solutions that seamlessly integrate
                                into every facet of daily living.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="flex justify-center md:justify-start">
                            <img
                                src="/HomePages/Investment/investMission.png"
                                alt="Investment"
                                className="w-3/4  h-auto rounded   "
                            />
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

            </div>
        </>
    );
}

export default Investment;
