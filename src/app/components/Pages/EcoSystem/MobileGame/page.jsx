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
                    iconClassNames='w-32 xl:w-auto'
                    descriptionClassName='text-4xl'
                />
                <div className=" bg-[#110f27]  ">

                    <img
                        src="/HomePages/MobileGame/MobGameMan.png"
                        alt="Main Background"
                        className="w-full h-[400px] sm:h-[650px]"
                    />
                        <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                    <Text size="md:leading-[1] mt-1  text-4xl sm:text-5xl md:text-5xl lg:text-7xl lg:leading-[1] xl:text-8xl xl:leading-[1] text-gradient-Mobetext sm:px-12 md:px-20 lg:px-20 xl:px-36 xl:pl-64 p-4">
                        Immerse yourself in the world of true
                    </Text>
                    </ScrollAnimation>
                    <div className='flex flex-col ' >
                        <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                        </ScrollAnimation>
                        <div className='flex justify-center'>
                            <img
                                src="/HomePages/MobileGame/MobImg.png"
                                alt="Main Background"
                                className="w-auto  h-auto xl:h-[900px]"
                            />
                        </div>




                    </div>

                    <div className=' sm:px-12 md:px-20 lg:px-20 xl:px-36 xl:pl-64' >
                        <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

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
                        <div className="flex flex-col text-white ">
                            <Text size="text-center text-xl font-bold text-white   md:text-4xl lg:text-4xl xl:text-4xl  mb-12 ">
                                Our vision is to become a top-tier Game Studio,celebrated for crafting engaging, inventive,and beloved games that unite players globally.
                            </Text>
                        </div>
</ScrollAnimation>
                        <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

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
                        <div className="flex flex-col text-white ">
                            <Text size="text-center text-xl font-bold text-white   md:text-4xl lg:text-4xl xl:text-4xl   mb-12">
                                Our mission is to craft games that resonate with players around the world, sparking joy, creativity, and a sense of community. We aim to transform the mobile gaming landscape by focusing on simplicity and innovative design.
                            </Text>
                        </div>
                        </ScrollAnimation>
                    </div>


                </div>
                <div className='mt-6'>
                    <Text className="p-4 mb-6 text-5xl text-white md:text-2xl lg:text-5xl xl:text-7xl text-gradient-mobilePro" >
                        Outstanding products
                    </Text>
                    <div className='flex flex-wrap justify-center gap-5'>
                        <ScrollAnimation animateIn="animate__animated animate__flipInY">

                        <img
                            src="/HomePages/MobileGame/MobApp1.png"
                            alt="Line"
                            className="w-auto"
                        />
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__animated animate__flipInY">

                        <img
                            src="/HomePages/MobileGame/MobApp2.png"
                            alt="Line"
                            className="w-auto"
                        />
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__animated animate__flipInY">

                        <img
                            src="/HomePages/MobileGame/MobApp3.png"
                            alt="Line"
                            className="w-auto"
                        />
                        </ScrollAnimation>
                    </div>
                    <div className='flex justify-center mb-12'>
                        <ScrollAnimation animateIn="animate__animated animate__flipInY">
                        <img
                            src="/HomePages/MobileGame/MobApp4.png"
                            alt="Line"
                            className="w-auto h-[500px]"
                        />
                        </ScrollAnimation>
                    </div>
                </div>


                <HeroSection
                    imageSrc="/HomePages/MobileApp/MobileHand.png"
                    text="Creating World-Class Products Together"
                    textClassName='lg:text-8xl text-gradient-Hero'
                    buttonText="Apply here"
                    onButtonClick={() => alert("Button clicked!")}
                />


            </div>
        </>
    );
}

export default MobileGame;
