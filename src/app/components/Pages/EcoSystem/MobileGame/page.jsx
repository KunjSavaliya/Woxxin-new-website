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
function MobileGame() {

    return (
        <>
            <div>

                <MobileAppSection
                    bgImageSrc="/HomePages/MobileGame/MobGameVector.png"
                    logoSrc="/HomePages/Google.png"
                    iconSrc="/HomePages/MobileGame/MobGame.png"
                    title="Play. Connect. Innovate"
                    title1="Endless fun awaits you with engaging and easy-to-play games!"
                    description="An enthusiastic and innovative group delivers fresh and thrilling adventures to users every day."
                    bgImageClassNames="h-full"
                />
                <div className=" bg-[#110f27]  ">

                    <img
                        src="/HomePages/MobileGame/MobGameMan.png"
                        alt="Main Background"
                        className="w-full h-[400px] sm:h-[650px]"
                    />

                    <Text size="md:leading-[1] mt-1 mb-12 text-4xl sm:text-5xl md:text-5xl lg:text-7xl lg:leading-[1] xl:text-8xl xl:leading-[1] text-gradient-Mobetext sm:px-12 md:px-20 lg:px-20 xl:px-36 xl:pl-64">
                        Immerse yourself in the world of true
                    </Text>
                    <div className='flex flex-col gap-5' >
                        <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                        </ScrollAnimation>
                        <div className='flex justify-center'>
                            <img
                                src="/HomePages/Mobile.png"
                                alt="Main Background"
                                className="w-auto mt-[-4px] h-[200px] sm:h-[300px] md:h-[300px] lg:h-[600px]"
                            />
                        </div>
                    </div>
                    <div className=' sm:px-12 md:px-20 lg:px-20 xl:px-36 xl:pl-64' >
                        <Text className="text-xl md:text-2xl mt-1 lg:text-3xl xl:text-[35px] text-white">
                            MISSION
                        </Text>
                        <img
                            src="/HomePages/line.png"
                            alt="Line"
                            className="w-full mt-6"
                        />
                        <div className="flex flex-wrap md:flex-nowrap  mt-2 justify-center divide-y md:divide-y-0 md:divide-x divide-[#9387FF] mb-10">
                        </div>
                        <div className="flex flex-col text-white  ">
                            <Text size="text-center text-xl font-bold text-white   md:text-4xl lg:text-4xl xl:text-4xl  mb-12 ">
                                Our vision is to become a top-tier Game Studio,celebrated for crafting engaging, inventive,and beloved games that unite players globally.
                            </Text>
                        </div>

                        <Text className="text-xl md:text-2xl  lg:text-3xl xl:text-[35px] text-white mt-12">
                            VISION
                        </Text>
                        <img
                            src="/HomePages/line.png"
                            alt="Line"
                            className="w-full mt-6"
                        />
                        <div className="flex flex-wrap md:flex-nowrap  mt-2 justify-center divide-y md:divide-y-0 md:divide-x divide-[#9387FF] mb-10">
                        </div>
                        <div className="flex flex-col text-white  ">
                            <Text size="text-center text-xl font-bold text-white   md:text-4xl lg:text-4xl xl:text-4xl   mb-12">
                                Our mission is to craft games that resonate with players around the world, sparking joy, creativity, and a sense of community. We aim to transform the mobile gaming landscape by focusing on simplicity and innovative design.
                            </Text>
                        </div>
                    </div>


                </div>

                <HeroSection
                    imageSrc="/HomePages/MobileApp/MobileHand.png"
                    text="Creating World-Class Products Together"
                    buttonText="Apply here"
                    onButtonClick={() => alert("Button clicked!")}
                />

            </div>
        </>
    );
}

export default MobileGame;
