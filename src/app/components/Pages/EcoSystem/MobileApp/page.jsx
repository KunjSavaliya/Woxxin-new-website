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
function MobilePage() {
  const [active, setActive] = useState('Advertisers');

  return (
    <>
      <div className="relative bg-[#110f27] w-full h-full  shadow-[0_8px_10px_-6px_rgba(255,255,255,0.3)]">
        <img
          src="/HomePages/MobileApp/MobileApps.png"
          alt="Main Background"
          className="absolute w-full h-[800px] md:h-[1000px] "
        />
        <div className="relative z-10 flex flex-col items-start w-full h-full text-left">
          <div className="flex flex-col  p-6 mt-32 text-white sm:mt-40 gap-[200px] lg:gap-[200px]  sm:px-12 md:px-20 lg:px-20 xl:px-28 xl:pl-28 2xl:px-60 2xl:pl-60">
            <div>
              <div className="flex justify-around md:gap-10 lg:gap-5">
                {/* Left Content */}
              <div className=" w-auto md:w-[70%] lg:w-1/2">
                  <img
                    src="/HomePages/Google.png"
                    alt="Google"
                    className="w-32 sm:w-40 md:w-64"
                  />
                  <Text className="text-gradient-mobiletext font-extralight text-6xl sm:text-5xl md:text-[75px]  lg:text-[70px] xl:text-[95px]  text-white text-start mt-6 sm:mt-10">
                    Woxxin Intelligent Mobile Apps
                  </Text>
                </div>
                 <div className="items-center justify-center hidden md:flex">
                  <img
                    src="/HomePages/MobileApp/MobileIcon.png"
                    alt="Mobile Icon"
                    // className="w-32 xl:w-auto"
                    className=" md:w-auto md:h-[250px] lg:w-full lg:h-[300px] xl:h-[400px]"
                  />
                </div>
              </div>
              <Text className="text-[18px] md:text-2xl xl:text-4xl text-white font-medium text-start mt-16 ">
                Creating a comprehensive mobile platform that enhances
                daily living and fosters sustainable growth for millions
                of users around the globe.
              </Text>
            </div>
            <ScrollAnimation animateIn="animate__animated animate__zoomIn">
              <div>
                <Text className="text-xl md:text-2xl mt-1 lg:text-3xl xl:text-[35px] text-white">
                  MISSION
                </Text>
                <img
                  src="/HomePages/line.png"
                  alt="Line"
                  className="w-full mt-6"
                />
                <div className="flex flex-wrap md:flex-nowrap  mt-2 justify-center divide-y md:divide-y-0 md:divide-x divide-[#9387FF] mb-16">
                </div>
                <div className="flex flex-col text-white gap-7 ">
                  <Text size="text-center text-xl font-bold text-white   md:text-4xl lg:text-4xl xl:text-4xl  xl:mt-0 lg:mt-0 ">
                    Create innovative mobile applications that enhance the daily experiences of millions of people around the globe.
                  </Text>
                </div>
              </div>
            </ScrollAnimation>

          </div>
        </div>

        <img
          src="/HomePages/MobileApp/MobileMan.png"
          alt="Main Background"
          className="w-auto w-full h-auto"
        />

        <ScrollAnimation animateIn="animate__animated animate__zoomIn">
          <div className="flex flex-col p-6 mt-10 text-white gap-7 sm:px-12 md:px-20 lg:px-20 xl:px-36 xl:pl-64">
            <Text className="text-xl md:text-2xl mt-1 lg:text-3xl xl:text-[35px] text-white">
              VISION
            </Text>
            <img
              src="/HomePages/line.png"
              alt="Line"
              className="w-full mt-6"
            />
            <Text size="text-center text-xl font-bold text-white   md:text-4xl lg:text-4xl xl:text-4xl  xl:mt-0 lg:mt-0 ">
              A vibrant network of cutting-edge apps designed
              to enhance the lives of millions, paving the
              way for a brighter future.
            </Text>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__animated animate__zoomIn">
          <div className="flex flex-wrap md:flex-nowrap gap-4 mt-10 justify-center divide-y md:divide-y-0 md:divide-x divide-[#9387FF] pl-20 px-20 ">
            {[
              {
                title: "Top 03",
                description: "Software Publisher ASIA Ranking",
              },
              {
                title: "Top 20",
                description: "In Southeast Asia Non-Game segment",
              },
              {
                title: "50M+",
                description: "Downloads",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col w-full max-w-full gap-2 px-4 py-4 mb-12 space-y-2 sm:w-1/2 md:w-1/3 text-start"
              >
                <Text className="text-3xl md:text-3xl xl:text-[35px] text-white font-bold">
                  {item.title}
                </Text>
                <Text className="text-md sm:text-lg md:text-xl xl:text-[20px] text-white font-medium break-words font-extralight">
                  {item.description}
                </Text>
              </div>
            ))}
          </div>
        </ScrollAnimation>

      </div>
      <div className=' bg-[#F4F4F4]'>
        <ScrollAnimation animateIn="animate__animated animate__zoomIn">
          <Text className="p-10 text-5xl text-white md:text-2xl lg:text-5xl xl:text-7xl text-gradient-mobilePro" >
            Featured Products
          </Text>
        </ScrollAnimation>
             <ScrollAnimation animateIn="animate__animated animate__zoomIn">

          <div className='p-4 md:px-20 lg:px-20 xl:px-36 xl:pl-64 '>
            <img
              src="/HomePages/MobileApp/MobileBanner1.png"
              alt="Main Background"
               className="w-[90%] mx-auto "
            />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__animated animate__zoomIn">

          <div className='p-4 md:px-20 lg:px-20 xl:px-36 xl:pl-64 '>
            <img
              src="/HomePages/MobileApp/MobileBanner3.png"
              alt="Main Background"
               className="w-[80%] mx-auto "
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__animated animate__zoomIn">

          <Text className="mt-16 mb-12 text-5xl text-white md:text-2xl lg:text-5xl xl:text-7xl text-gradient-mobilePro" >
            Explore our products
          </Text>

          <div className='p-4 md:px-20 lg:px-20 xl:px-36 xl:pl-64'>
            <img
              src="/HomePages/MobileApp/MobileBanner2.png"
              alt="Main Background"
                 className="w-auto mx-auto "
            />
          </div>
        </ScrollAnimation>

      </div>


      <HeroSection
        imageSrc="/HomePages/MobileApp/MobileHand2.png"
        text="Let’s Build Awesome Products Together!"
        textClassName='lg:text-[69px] xl:text-[70px] 2xl:text-[90px]  text-gradient-Home'
        buttonText="Apply here"
        onButtonClick={() => alert("Button clicked!")}
      />
    </>
  );
}

export default MobilePage;
