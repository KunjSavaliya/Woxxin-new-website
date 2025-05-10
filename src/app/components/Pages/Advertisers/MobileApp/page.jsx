'use client';
import WaveText from '@/app/Pages/BubbleText';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from "framer-motion";
import itemVariants from '@/app/Pages/Animation';
// import Text from '../../../Reusable/Text';
import Button from '@/app/Reusable/Button';
import { contentArray } from '@/app/Pages/HomePage/Data';

import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Text from '@/app/Reusable/Text';
function MobilePage() {
  const [active, setActive] = useState('Advertisers');

  return (
    <>
     <div className="relative bg-[#110f27] w-full h-full ">
       <img
         src="/HomePages/MobileApp/MobileApps.png"
         alt="Main Background"
         className="absolute w-full h-[800px] md:h-[1000px] "
       />
  <div className="relative z-10 flex flex-col items-start w-full h-full text-left">
  <div className="flex flex-col  p-6 mt-32 text-white sm:mt-40 gap-[200px] lg:gap-[300px]  sm:px-12 md:px-20 lg:px-20 xl:px-36 xl:pl-64">
    <div>
    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
      <div className="flex justify-start md:gap-10 lg:gap-32">
        {/* Left Content */}
        <div className="w-auto lg:w-1/2">
          <img
            src="/HomePages/Google.png"
            alt="Google"
            className="w-32 sm:w-40 md:w-64"
          />
          <Text className="text-gradient-mobiletext font-extralight text-4xl sm:text-5xl md:text-5xl lg:text-[70px] xl:text-[80px]  text-white text-start mt-6 sm:mt-10">
            Woxxin Intelligent Mobile Apps
          </Text>
        </div>
        <div className="flex justify-center w-full lg:w-auto lg:justify-end">
          <img
            src="/HomePages/MobileApp/MobileIcon.png"
            alt="Mobile Icon"
            className="w-32 sm:w-40 md:w-56 xl:w-80"
          />
        </div>
      </div>
    </ScrollAnimation>
    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
      <Text className="text-[18px] md:text-2xl xl:text-4xl text-white font-medium text-start mt-12">
        Creating a comprehensive mobile platform that enhances
        daily living and fosters sustainable growth for millions
        of users around the globe.
      </Text>
    </ScrollAnimation>
 </div>
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
  </div>
</div>

 <img
         src="/HomePages/MobileApp/MobileMan.png"
         alt="Main Background"
         className="w-full h-[400px] sm:h-[500px]"
       />


       <div className="flex flex-col p-6 mt-10 text-white gap-7 sm:px-12 md:px-20 lg:px-20 xl:px-36 xl:pl-64">
                      <Text size="text-center text-xl font-bold text-white   md:text-4xl lg:text-4xl xl:text-4xl  xl:mt-0 lg:mt-0 ">
                     A vibrant network of cutting-edge apps designed
to enhance the lives of millions, paving the
way for a brighter future.
                      </Text>
                    </div>

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
<div className=' bg-[#F4F4F4]'>

   <Text className="text-xl text-white md:text-2xl lg:text-5xl xl:text-7xl text-gradient-mobilePro" >
        Featured Products
        </Text>


<div className='gap-3'>
   <img
         src="/HomePages/MobileApp/MobileBanner1.png"
         alt="Main Background"
         className="w-[70%] mx-auto"
       />
</div>
<div>
   <img
         src="/HomePages/MobileApp/MobileBanner2.png"
         alt="Main Background"
           className="w-[70%] mx-auto"
       />
</div>

 <Text className="mt-1 mb-12 text-xl text-white md:text-2xl lg:text-5xl xl:text-7xl text-gradient-mobilePro" >
     Explore our products
        </Text>

        <div className=''>
   <img
         src="/HomePages/MobileApp/MobileBanner3.png"
         alt="Main Background"
           className="w-[70%] mx-auto"
       />
</div>
</div>

    </>
  );
}

export default MobilePage;
