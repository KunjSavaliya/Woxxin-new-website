'use client';
import React, { useState } from 'react';
import Text from '../../../Reusable/Text';
import Button from '@/app/Reusable/Button';
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
function MainPage() {

    return (
        <>

            <div className="relative bg-[#110f27] ] w-full h-full overflow-hidden">
                <img
                    src="/HomePages/Career.png"
                    alt="Main Background"
                    className="absolute inset-0 z-0 object-fill w-full h-auto "
                />
                <div className="relative z-10 flex flex-col items-center w-full h-full text-left ">

                    <div className="flex flex-col gap-12 p-6 mt-32 text-white sm:mt-40 sm:gap-7 xl:gap-16 sm:px-12 md:px-24 lg:px-20 xl:px-52 xl:pl-52">
                        <div>
                            <img
                                src="/HomePages/Google.png"
                                alt="Google"
                                className="w-40 md:w-56"
                            />
                        </div>
                        <Text className="text-gradient-mobiletext text-4xl sm:text-5xl  md:text-6xl lg:text-[80px] xl:text-[100px] font-bold text-white text-start ActiveUser-homePage">
                            Career
                        </Text>
                        <Text className="text-[18px] md:text-2xl xl:text-4xl text-white font-medium text-start">
                            Exciting Prospects: Become part of a thriving industry
                            worth over $120 billion, expanding at a remarkable
                            rate of 20-35% each year.
                        </Text>
                        <div className="mb-40">
                            <Button
                                text="See jobs & apply"
                                iconColor="#6C63FF"
                                // onClick={onButtonClick}
                                className="mt-2 sm:mt-5 text-white border border-[#5961F9] bg-[#110F27] rounded-md "
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#110f27] pt-28'>
                <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                    <Text className="text-xl md:text-2xl lg:text-3xl xl:text-[35px] text-[#FFFFFF80]">
                        TOP POSITIONS
                    </Text>
                    <img
                        src="/HomePages/line.png"
                        alt="Line"
                        className="w-full mt-6"
                    />
                </ScrollAnimation>
            </div>

        </>
    );
}

export default MainPage;
