'use client';
import React, { useState } from 'react';
import Text from '../../../Reusable/Text';
import Button from '@/app/Reusable/Button';
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { FaAndroid, FaPaintBrush, FaGamepad } from 'react-icons/fa';
import { MdCampaign } from 'react-icons/md';        // Marketing (or use MdWork)
import { FaBullseye, FaChartLine, FaUserCheck, FaBookOpen, FaExchangeAlt, FaHandshake } from 'react-icons/fa';
import Image from 'next/image';

function MainPage() {
    const jobs = [
        {
            title: 'Android Developer',
            experience: '2 to 5 year',
            icon: <FaAndroid size={36} />,
        },
        {
            title: 'Digital Marketing',
            experience: '1 to 3 year',
            icon: <MdCampaign size={36} />,
        },
        {
            title: 'Graphics Designer',
            experience: '2 to 5 year',
            icon: <FaPaintBrush size={36} />,
        },
        {
            title: 'Unity Developer',
            experience: '1 to 3 year',
            icon: <FaGamepad size={36} />,
        },
    ];
    const traits = [
        {
            text: 'You have a sense of purpose, a personal goal in life and always strive to reach that goal',
            icon: <FaBullseye size={28} className="text-orange-400" />,
        },
        {
            text: 'You always look for a way to improve and advance yourself forward',
            icon: <FaChartLine size={28} className="text-orange-400" />,
        },
        {
            text: 'You are responsible, always take the initiative, and enthusiastic about your jobs.',
            icon: <FaUserCheck size={28} className="text-orange-400" />,
        },
        {
            text: 'You are a fast learner who can have the ability to research, persevere, well communicate',
            icon: <FaBookOpen size={28} className="text-orange-400" />,
        },
        {
            text: 'Ready to change your habit, your mindset, fast to adapt, ready to learn new things',
            icon: <FaExchangeAlt size={28} className="text-orange-400" />,
        },
        {
            text: 'If the company acknowledges your value, gives you a chance and being fair with you',
            icon: <FaHandshake size={28} className="text-orange-400" />,
        },
    ];
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
            <div className='bg-[#110f27] pt-28  sm:px-12 md:px-20 lg:px-20 xl:px-64 xl:pl-64'>
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

                <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 justify-center">
                        {jobs.map((job, index) => (
                            <div
                                key={index}
                                className="bg-[#0e0c23] p-6 rounded-xl shadow-md border border-[#1c1a2e] hover:shadow-xl transition-all duration-300"
                            >
                                <div className="text-3xl mb-4 text-[#5961F9]">
                                    {job.icon}
                                </div>
                                <h3 className="text-white text-lg font-extralight mb-4">{job.title}</h3>
                                <p className="text-sm text-gray-400 mb-6">
                                    Experience:{' '} <br />
                                    <span className="text-white font-lighter">{job.experience}</span>
                                </p>
                                <button className="px-4 py-2 border border-[#5961F9] text-white font-bold rounded-md hover:bg-[#5961F9]/10 transition ">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
            <div className="bg-[#110f27] relative z-10 flex flex-col md:pl-32 md:pr-32 xl:pl-40 xl:pr-40">

                <div className='flex justify-center mt-12 '>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                        {/* Left Content */}
                        <Text className="text-start text-gradient-mobiletext font-extralight text-4xl sm:text-5xl md:text-5xl lg:text-[70px] xl:text-[80px]  text-white  mt-6 sm:mt-10">
                            Our Perks Create a Difference
                        </Text>

                    </ScrollAnimation>
                </div>
                <div className='flex flex-col gap-10 mt-16 ' >
                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
                        <Text size="text-start text-xl font-extralight  text-white md:text-4xl lg:text-4xl xl:text-3xl ">
                            Inspiring culture where ambition & creativity lead the way
                        </Text>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
                        <Text size="text-start text-xl font-extralight  text-white md:text-4xl lg:text-4xl xl:text-3xl ">
                            Chance to collaborate with Exceptional Individuals on globally
                            recognized projects and alongside Renowned Partners.
                        </Text>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
                        <Text size="text-start text-xl font-extralight  text-white md:text-4xl lg:text-4xl xl:text-3xl ">
                            Continuous Learning and Growth Environment: We provide tuition
                            fee sponsorship of up to 100%.
                        </Text>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
                        <Text size="text-start text-xl font-extralight  text-white md:text-4xl lg:text-4xl xl:text-3xl ">
                            Regular Salary Reviews and Performance Bonuses: Twice annually
                        </Text>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
                        <Text size="text-start text-xl font-extralight  text-white md:text-4xl lg:text-4xl xl:text-3xl ">
                            Monthly Lunch Allowance with a Generous Benefit.
                        </Text>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
                        <Text size="text-start text-xl font-extralight  text-white md:text-4xl lg:text-4xl xl:text-3xl ">
                            Regular Team Fun Days, Company Events, and Holiday Celebrations

                        </Text>
                    </ScrollAnimation>


                </div>
                <div className='pt-[150px] sm:mt-10'>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                        {/* Left Content */}
                        <Text className=" text-gradient-mobiletext font-extralight text-4xl sm:text-5xl md:text-5xl lg:text-[70px] xl:text-[80px]  text-white ">
                            Are you a perfect part of
                            Woxxin Solution
                        </Text>

                    </ScrollAnimation>

                    <div className=" py-10 px-4 sm:px-6 lg:px-20  pt-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {traits.map((trait, index) => (
                                <div
                                    key={index}
                                    className="bg-[#141229] border border-[#2a2742] p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
                                >
                                    <div className="mb-4">
                                        {trait.icon}
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">{trait.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <div className="relative  bg-[#110f27]">
                <div>
                    <Image
                        src='/HomePages/Contfooter.png'
                        alt="Main Background"
                        className="w-full mt-[-4px] h-[250px] xl:h-[250px]"
                        width={1920}
                        height={700}
                    />
                </div>
                <div className="absolute top-0 left-0 flex justify-center w-full h-full p-6 items-top">
                    <div className="w-full max-w-[92rem] px-4">
                        <div className="flex justify-center mt-12 ">
                            <Button
                                text="Contact us"
                                iconColor="#6C63FF"
                                // onClick={onButtonClick}
                                className="mt-2 sm:mt-5 text-white border border-[#5961F9] bg-[#110F27] rounded-md "
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default MainPage;
