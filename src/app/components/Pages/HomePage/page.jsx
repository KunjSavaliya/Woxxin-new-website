'use client';
import WaveText from '@/app/Pages/BubbleText';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from "framer-motion";
import itemVariants from '@/app/Pages/Animation';
import Text from '../../../Reusable/Text';
import Button from '@/app/Reusable/Button';
import { contentArray } from '@/app/Pages/HomePage/Data';
import Advertisers from './Advertisers';
import Publishers from './Publishers';
import 'animate.css';
function MainPage() {
  const [active, setActive] = useState('Advertisers');

  return (
    <>
      <div className="relative">
        <div>
          <img
            src="/HomePages/Home.png"
            alt="Main Background"
            className="w-full h-[800px]"
          />
        </div>
        <div className="absolute top-0 left-0 flex flex-col items-start justify-center w-full h-full text-left animate__animated animate__fadeInLeft">
          <div className='flex gap-80 lg:px-28 xl:px-32'>
            <div className="flex flex-col mt-64 text-white gap-7 px-36 ">
              <Text size="text-4xl md:text-4xl lg:text-5xl xl:text-[115px] font-bold text-white text-gradient text-start">
                Accelerate Your App / H5 Game Growth
              </Text>
              <Text size="text-4xl md:text-2xl lg:text-2xl xl:text-[30px] text-white font-medium text-start" >
                Woxxin Solutions is a dynamic company focused on creating innovative Mobile Applications and engaging Mobile games, boasting over 650 million downloads globally.
              </Text>
              <Text size='text-xl md:text-2xl lg:text-3xl xl:text-[25px] text-[#ffffff] '>
                PUBLISHER
              </Text>
              <img
                src="/HomePages/line.png"
                alt="Advertisers Icon"
              // className="w-32 h-32"
              />
              <div className="flex justify-center divide-x divide-[#9387FF]  mb-[100px]">
                {/* Block 1 */}
                <div className="flex flex-col w-full max-w-[300px] px-6 text-start space-y-2">
                  <Text className="text-xl md:text-2xl lg:text-3xl xl:text-[35px] text-white mt-[50px]">
                    Top 20
                  </Text>
                  <Text className="text-base md:text-xl lg:text-xl xl:text-[20px] text-white font-medium break-words">
                    Global Google Play Publisher in Non-Game
                  </Text>
                </div>

                {/* Block 2 */}
                <div className="flex flex-col w-full max-w-[300px] px-6 text-start space-y-2">
                  <Text className="text-xl md:text-2xl lg:text-3xl xl:text-[35px] text-white mt-[50px]">
                    Top 03
                  </Text>
                  <Text className="text-base md:text-xl lg:text-xl xl:text-[20px] text-white font-medium break-words">
                    In Southeast Asia Non-Game segment
                  </Text>
                </div>

                {/* Block 3 */}
                <div className="flex flex-col w-full max-w-[300px] px-6 text-start space-y-2">
                  <Text className="text-xl md:text-2xl lg:text-3xl xl:text-[35px] text-white mt-[50px]">
                    2022
                  </Text>
                  <Text className="text-base md:text-xl lg:text-xl xl:text-[20px] text-white font-medium break-words">
                    Outstanding Company in Business Development and Expansion by Google
                  </Text>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
      <div className="relative">
        <div>
          <img
            src="/HomePages/Home2.png"
            alt="Main Background"
            className="w-full "
          />
        </div>
        <div className="absolute top-0 left-0 flex flex-col items-start justify-start w-full h-full mt-32 text-left animate__animated animate__fadeInLeft">
          <div className='flex flex-col  gap-36 lg:px-28 xl:px-32'>
            <div className="flex flex-col text-white gap-7 ">
              <Text className="px-40 text-4xl font-bold leading-relaxed text-white md:text-2xl lg:text-2xl xl:text-5xl">
                Woxxin’s ecosystem of quality products
                has helped more than half a billion
                people work and play effectively, aiming
                to serve 1 billion users by 2025
              </Text>
            </div>

            <div className='mt-5 contents'>
              <div className=' contents'>
                <div className=''>
                  <Text size="text-4xl md:text-4xl lg:text-5xl xl:text-[115px] font-bold text-white text-gradient text-center text2-gradient">
                    1 Bil
                  </Text>
                  <Text size='text-xl md:text-2xl lg:text-3xl xl:text-[45px] text-white '>
                    Global Downloads
                  </Text>
                </div>


                <img
                  src="/HomePages/Appimg.png"
                  alt="Advertisers Icon"
                  className=""
                />
              </div>
            </div>

            <div className=''>
              <Text size="text-center text-4xl md:text-4xl lg:text-5xl xl:text-[115px] font-bold text-white ActiveUser-gradient text-center text2-gradient">
                50M+
              </Text>
              <Text size='text-xl md:text-2xl lg:text-3xl xl:text-[26px] text-white '>
                Monthly Active Users
              </Text>
            </div>
          </div>

        </div>
      </div>


      <div className="relative">
        <div>
          <img
            src="/HomePages/Home4.png"
            alt="Main Background"
            className="w-full "
          />
        </div>
        <div className="absolute top-0 left-0 flex flex-col items-center  justify-strat w-full h-full mt-80 text-left animate__animated animate__fadeInLeft">
          <div className='lg:px-28 xl:px-32'>
            <div className="flex flex-col text-white gap-7 ">
              <Text className="text-center text-4xl font-lighter leading-relaxed text-white md:text-2xl lg:text-5xl xl:text-[90px] text-gradient-mobileApp">
                Mobile Apps
              </Text>
            </div>


          </div>

        </div>
      </div>

      <div className="relative">
        <div>
          <img
            src="/HomePages/Home5.png"
            alt="Main Background"
            className="w-full "
          />
        </div>
        <div className="absolute top-0 left-0 flex flex-col items-center  justify-strat w-full h-full mt-10 text-left animate__animated animate__fadeInLeft">
          <div className='lg:px-28 xl:px-32'>
            <div className="flex flex-col text-white gap-7 ">
              <Text className="text-center text-4xl font-lighter leading-relaxed text-white md:text-2xl lg:text-5xl xl:text-[90px] text-gradient-mobileGames">
                Mobile Games
              </Text>
            </div>


          </div>

        </div>
      </div>

      <div className="relative">
        <div>
          <img
            src="/HomePages/Home6.png"
            alt="Main Background"
            className="w-full h-[800px]"
          />
        </div>
        <div className="absolute top-0 left-0 flex flex-col items-start mt-36 w-full h-full text-left animate__animated animate__fadeInLeft">
          <div className='flex justify-around flex-col '>
            <div className="flex justify-between  text-white gap-7 pr-20 pl-20 ">


              {/* Block 1 */}
              <div className=" w-[60%]">
                <Text className="text-xl md:text-2xl lg:text-5xl text-start xl:text-[55px] text-white  break-words font-lighter">
                  Enhancing Personalized
                  App Experiences for Billions
                </Text>

              </div>

              <div className="w-[40%] ">
                <ul class="space-y-3">
                  <li class="flex items-start space-x-3">
                    <span class="mt-[10px] h-2 w-2 rounded-full bg-[#AAB0C0] opacity-80"></span>
                    <span class=" text-[20px]  text-white">
                      Market Research
                    </span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <span class="mt-[10px] h-2 w-2 rounded-full bg-[#AAB0C0] opacity-80"></span>
                    <span class=" text-[20px]  text-white">
                      Marketing Optimization
                    </span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <span class="mt-[10px] h-2 w-2 rounded-full bg-[#AAB0C0] opacity-80"></span>
                    <span class=" text-[20px]  text-white">
                      Product Optimization
                    </span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <span class="mt-[10px] h-2 w-2 rounded-full bg-[#AAB0C0] opacity-80"></span>
                    <span class=" text-[20px]  text-white">
                      Monetization/Subscription Optimization
                    </span>
                  </li>
                </ul>

              </div>

            </div>
            <div className="flex justify-center mt-12">
              <Button
                text="Discover Ecosystem"
                iconColor="#6C63FF"
                className="mt-5 text-white bg-transparent border border-[#5961F9] "
              />
            </div>

            <div className="flex flex-col justify-center mt-12">
              <div className="flex flex-col text-white gap-7 ">
                <Text className="text-center text-4xl font-lighter leading-relaxed text-white md:text-2xl lg:text-5xl xl:text-[90px] px-40">
                  Your Future Career
                  Opportunities
                </Text>
              </div>
              <div className="flex justify-center mt-12">
                <Button
                  text="Discover Ecosystem"
                  iconColor="#6C63FF"
                  className="mt-5 text-white bg-transparent border border-[#5961F9] bg-[#110F27] "
                />
              </div>

            </div>

          </div>
        </div>

      </div>











    </>
  );
}

export default MainPage;
