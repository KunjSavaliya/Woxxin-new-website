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
import { FaChartLine, FaChartBar, FaDollarSign, FaUsers } from 'react-icons/fa';

function GoogleAds() {
    const services = [
        {
            icon: <FaChartLine className="text-[#7A7AFB] text-3xl" />,
            title: 'Campaigning Optimization',
            items: [
                'Strategic Campaign Planning',
                'Performance Tracking & Analysis',
                'A/B Testing & Iterative Improvements',
                'Audience Targeting Optimization',
                'Budget Optimization',
                'Multi-Channel Optimization',
            ],
        },
        {
            icon: <FaChartBar className="text-[#7A7AFB] text-3xl" />,
            title: 'Data Analytics',
            items: [
                'Conversion Tracking Setup (Forms, Calls, Purchases)',
                'Custom Dashboard Creation (GA4 & Google Data Studio)',
                'Funnel Analysis & User Behavior Insights',
                'Predictive Performance Forecasting',
                'Retargeting Audiences Based on Behavior',
            ],
        },
        {
            icon: <FaDollarSign className="text-[#7A7AFB] text-3xl" />,
            title: 'ROAS Campaigning',
            items: [
                'We provide ready-to-use, professionally managed advertising accounts',
                'Smart Bidding & Conversion Value Rules',
                'Audience Segmentation by Purchase Intent',
                'High-Intent Remarketing Campaigns',
                'Performance Max Campaign Optimization',
                'Lifetime Value & CAC Tracking',
            ],
        },
        {
            icon: <FaUsers className="text-[#7A7AFB] text-3xl" />,
            title: 'Agency Account',
            items: [
                'We provide business and agency-level accounts',
                'Google Ads (Search, Display, YouTube)',
                'Meta Ads (Facebook & Instagram)',
            ],
        },
    ];
    return (
        <>
            <div>

                <MobileAppSection
                    bgImageSrc="/HomePages/Homedesign.png"
                    logoSrc="/HomePages/Google.png"
                    iconSrc="/HomePages/GoogleAds/Gads.png"
                    title="Transform Your Google
Ads Performance"
                    title1="Data-driven strategies that deliver measurable
results for your business growth"
                    bgImageClassNames="h-full"
                    iconClassNames='w-32 w-auto '
                    buttonText='Contact Us'
                />
                <div className='bg-[#110f27] pt-28  sm:px-12 md:px-20 lg:px-20 xl:px-64 xl:pl-64'>

                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                        <Text className="text-xl md:text-2xl lg:text-3xl xl:text-[35px] text-[#FFFFFF80]">
                            OUR SERVICES
                        </Text>
                        <img
                            src="/HomePages/line.png"
                            alt="Line"
                            className="w-full mt-6"
                        />
                    </ScrollAnimation>


                    <section className=" text-white py-12 px-4 md:px-12 mt-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-[#12112B] p-6 rounded-lg shadow-lg border border-[#1C1B33]"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold">{service.title}</h3>

                                    <ul className="list-disc list-inside text-sm space-y-2 text-gray-300 mt-5">
                                        {service.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                        <Text className="text-xl md:text-2xl lg:text-3xl xl:text-[35px] text-[#FFFFFF80]">
                            Proven Results
                        </Text>
                        <img
                            src="/HomePages/line.png"
                            alt="Line"
                            className="w-full mt-6"
                        />
                    </ScrollAnimation>
                    <div className="mt-5 flex pt-12 flex-wrap md:flex-nowrap gap-4 justify-center divide-y md:divide-y-0 md:divide-x divide-[#9387FF] ">
                        {[
                            {
                                title: "250%",
                                description: "Average ROAS Improvement",
                            },
                            {
                                title: "$10M+",
                                description: "Ad Spend Managed",
                            },
                            {
                                title: "98%",
                                description: "Client Retention Rate",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col w-full max-w-full px-4 py-4 pt-12 space-y-2 sm:w-1/2 md:w-1/3 text-start"
                            >
                                <Text className="text-2xl md:text-3xl xl:text-[90px] text-white text2-gradient font-bold xl:leading-[1]">
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
                    imageSrc="/HomePages/Investment/footerbtn.png"
                    text="Ready to Improve Your
Google Ads Performance?"
                    buttonText="Let’s Talk"
                    textClassName='text-white text-gradient-publish lg:text-7xl'
                    text1ClassName='text-3xl text-white mt-[-5px] '
                    text1='Let’s  discuss how we can help you achieve your marketing goals'
                // onButtonClick={() => alert("Button clicked!")}
                />

            </div>
        </>
    );
}

export default GoogleAds;
