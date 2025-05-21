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
                <div className='bg-[#110f27]'>
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
                </div>
                <div>
                    <GlobalPartners />
                </div>
                <HeroSection
                    imageSrc="/HomePages/Investment/footerbtn.png"
                    text="Contact us for
collaboration today"
                    buttonText="Contact Us"
                    textClassName='text-white'
                    text1ClassName='text-3xl text-white mt-[-5px]'
                // onButtonClick={() => alert("Button clicked!")}
                />

            </div>
        </>
    );
}

export default Publishing;
