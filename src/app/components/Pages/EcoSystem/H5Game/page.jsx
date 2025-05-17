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
function H5Game() {

    return (
        <>
            <div>

                <MobileAppSection
                    bgImageSrc="/HomePages/MobileGame/MobGameVector.png"
                    logoSrc="/HomePages/Google.png"
                    iconSrc="/HomePages/MobileGame/MobGame.png"
                    title="H5 Games / Quiz"
                    title1="For Incremental Revenues and Better Engagement"
                    description="Boost your ad revenues with our exciting HTML5 quiz and
gaming solutions! Experience up to 40% more incremental
revenue while enhancing user engagement. Our easy-to-integrate,
plug-and-play products are designed to elevate your platform's
performance."
                    bgImageClassNames="h-full"
                    iconClassNames='w-32 sm:w-40 md:w-56 xl:w-80'
                    descriptionClassName='text-2xl '
                    buttonText='Quiz Platform'
                    buttonText1='Game Platform'
                />

    <div className='bg-[#110f27] p-16'>
        <Text className="text-xl md:text-2xl lg:text-3xl xl:text-[25px] text-white">
          PUBLISHER
        </Text>

        <img
          src="/HomePages/line.png"
          alt="Line"
          className="w-full pl-5 pr-5 mt-6 rounded-[100%]"
        ></img>

        <div className="flex flex-wrap md:flex-nowrap gap-4 mt-10 justify-center divide-y md:divide-y-0 md:divide-x divide-[#9387FF]">
          {[
            {
              title: "Top 20",
              description: "Global Google Play Publisher in Non-Game",
            },
            {
              title: "Top 03",
              description: "In Southeast Asia Non-Game segment",
            },
            {
              title: "2022",
              description: "Outstanding Company in Business Development and Expansion by Google",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-full max-w-full px-4 py-4 space-y-2 sm:w-1/2 md:w-1/3 text-start"
            >
              <Text className="text-2xl md:text-3xl xl:text-[35px] text-white">
                {item.title}
              </Text>
              <Text className="text-md sm:text-lg md:text-xl xl:text-[20px] text-white font-medium break-words">
                {item.description}
              </Text>
            </div>
          ))}
        </div>
        </div>

                <HeroSection
                    imageSrc="/HomePages/H5Game.png"
                    text="Your Future Career Opportunities"
                    buttonText="Discover Now"
                    textClassName='text-white'
                    // onButtonClick={() => alert("Button clicked!")}
                />

            </div>
        </>
    );
}

export default H5Game;
