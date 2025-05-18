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
function VideoAds() {
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
                    bgImageSrc="/HomePages/MobileGame/MobGameVector.png"
                    logoSrc="/HomePages/Google.png"
                    iconSrc="/HomePages/VideoAdsImg.png"
                    title="Video Player Ads"
                    title1="For Unique Video Content & Ads"
                    description="Introducing our cutting-edge AI-powered video player,
designed to connect you with top-tier direct and programmatic advertisers.
Boost your ad revenue by as much as 60% with our state-of-the-art
optimization technology and compliant video formats. With years
of expertise in ad tech, our V-Stream player delivers outstanding
CPMs and fill rates, making it the best choice in the market!"
                    bgImageClassNames="h-full"
                    iconClassNames='w-32 sm:w-40 md:w-56 xl:w-80'
                    descriptionClassName='text-2xl '
                    buttonText='Quiz Demo'
                />

                <GlobalPartners />

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

export default VideoAds;
