'use client';
import React from 'react';
import Text from '../../../Reusable/Text';
import Button from '@/app/Reusable/Button';
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import {
    FaAndroid,
    FaPaintBrush,
    FaGamepad,
    FaBullseye,
    FaChartLine,
    FaUserCheck,
    FaBookOpen,
    FaExchangeAlt,
    FaHandshake,
} from 'react-icons/fa';
import { MdCampaign } from 'react-icons/md';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
function MainPage() {
    /** ----------------------------------------------------------------
     *  1. DATA DEFINITIONS
     * ----------------------------------------------------------------*/
    // Store icon *components* – NOT instantiated JSX – to avoid
    // hydration loops / “Maximum call stack size exceeded” in SSR.
    const jobs = [
        { title: 'Android Developer', experience: '2 to 5 year', Icon: FaAndroid },
        { title: 'Digital Marketing', experience: '1 to 3 year', Icon: MdCampaign },
        { title: 'Graphics Designer', experience: '2 to 5 year', Icon: FaPaintBrush },
        { title: 'Unity Developer', experience: '1 to 3 year', Icon: FaGamepad },
    ];

    const traits = [
        { text: 'You have a sense of purpose, a personal goal in life and always strive to reach that goal', Icon: FaBullseye },
        { text: 'You always look for a way to improve and advance yourself forward', Icon: FaChartLine },
        { text: 'You are responsible, always take the initiative, and enthusiastic about your jobs.', Icon: FaUserCheck },
        { text: 'You are a fast learner who can research, persevere and communicate well', Icon: FaBookOpen },
        { text: 'Ready to change your habit, mindset, and adapt fast to new things', Icon: FaExchangeAlt },
        { text: 'If the company acknowledges your value, gives you a chance and is fair with you', Icon: FaHandshake },
    ];
    const router = useRouter();

    const handleClick = () => {
        router.push('/Publishing/Form');
    };
    return (

        <>
            <div className="relative bg-[#110f27] w-full h-full overflow-hidden">
                <img
                    src="/HomePages/Career.png"
                    alt="Main Background"
                    className="absolute inset-0 z-0 object-fill w-full h-auto"
                />
                <div className="relative z-10 flex flex-col items-center w-full h-full text-left">
                    <div className="flex flex-col gap-12 p-6 mt-32 text-white sm:mt-40 sm:gap-7 xl:gap-16 sm:px-12 md:px-24 lg:px-20 xl:px-52 xl:pl-52">
                        <img src="/HomePages/Google.png" alt="Google" className="w-40 md:w-56" />

                        <Text className="text-gradient-mobiletext text-4xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[100px] font-bold text-white text-start">
                            Career
                        </Text>

                        <Text className="text-[18px] md:text-2xl xl:text-4xl text-white font-medium text-start">
                            Exciting Prospects: Become part of a thriving industry worth over
                            $120 billion, expanding at a remarkable 20–35 % each year.
                        </Text>

                        <div className="mb-40">
                            <Button
                                text="See jobs & apply"
                                iconColor="#6C63FF"
                                className="mt-2 sm:mt-5 text-white border border-[#5961F9] bg-[#110F27] rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#110f27] pt-28 sm:px-12 md:px-20 lg:px-20 xl:px-64 xl:pl-64">
                <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
                    <Text className="text-xl md:text-2xl lg:text-3xl xl:text-[35px] text-[#FFFFFF80]">
                        TOP POSITIONS
                    </Text>
                    <img src="/HomePages/line.png" alt="Line" className="w-full mt-6" />
                </ScrollAnimation>

                <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6">
                        {jobs.map(({ title, experience, Icon }, idx) => (
                            <div
                                key={idx}
                                className="bg-[#0e0c23] p-6 rounded-xl shadow-md border border-[#1c1a2e] hover:shadow-xl transition-all duration-300"
                            >
                                <div className="text-3xl mb-4 text-[#5961F9]">
                                    <Icon size={36} />
                                </div>
                                <h3 className="text-white text-lg font-extralight mb-4">{title}</h3>
                                <p className="text-sm text-gray-400 mb-6">
                                    Experience:
                                    <br />
                                    <span className="text-white font-lighter">{experience}</span>
                                </p>
                                <button onClick={handleClick} className="px-4 py-2 border border-[#5961F9] text-white font-bold rounded-md hover:bg-[#5961F9]/10 transition">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-[#110f27] relative z-10 flex flex-col md:px-32 xl:px-40">
                <div className="flex justify-center mt-12">
                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
                        <Text className="text-gradient-mobiletext font-extralight text-4xl sm:text-5xl md:text-5xl lg:text-[70px] xl:text-[80px] text-white mt-6">
                            Our Perks Create a Difference
                        </Text>
                    </ScrollAnimation>
                </div>

                <div className="flex flex-col gap-10 mt-16">
                    {[
                        'Inspiring culture where ambition & creativity lead the way',
                        'Chance to collaborate with exceptional individuals on globally recognised projects',
                        'Continuous learning: we sponsor tuition fees up to 100 %',
                        'Regular salary reviews & performance bonuses twice annually',
                        'Monthly lunch allowance with generous benefits',
                        'Regular team fun days, company events & holiday celebrations',
                    ].map((line, i) => (
                        <ScrollAnimation key={i} animateIn="animate__animated animate__fadeInUp">
                            <Text className="text-start text-xl font-extralight text-white md:text-4xl lg:text-4xl xl:text-3xl">
                                {line}
                            </Text>
                        </ScrollAnimation>
                    ))}
                </div>

                <div className="pt-[150px] sm:mt-10">
                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
                        <Text className="text-gradient-mobiletext font-extralight text-4xl sm:text-5xl md:text-5xl lg:text-[70px] xl:text-[80px] text-white">
                            Are you a perfect part of Woxxin Solution
                        </Text>
                    </ScrollAnimation>

                    <div className="py-10 px-4 sm:px-6 lg:px-20 pt-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {traits.map(({ text, Icon }, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#141229] border border-[#2a2742] p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
                                >
                                    <Icon size={28} className="text-orange-400 mb-4" />
                                    <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative bg-[#110f27]">
                <Image
                    src="/HomePages/Contfooter.png"
                    alt="Footer background"
                    className="w-full mt-[-4px] h-[250px] xl:h-[250px]"
                    width={1920}
                    height={700}
                />

                <div className="absolute top-0 left-0 flex justify-center w-full h-full p-6 items-start">
                    <div className="w-full max-w-[92rem] px-4">
                        <div className="flex justify-center mt-12">
                            <Button
                                text="Contact us"
                                iconColor="#6C63FF"
                                className="mt-2 sm:mt-5 text-white border border-[#5961F9] bg-[#110F27] rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;
