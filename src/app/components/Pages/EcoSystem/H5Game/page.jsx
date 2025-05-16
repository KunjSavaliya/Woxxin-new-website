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
                    iconClassNames='w-32 sm:w-40 md:w-56 xl:w-80    '
                />

                <HeroSection
                    imageSrc="/HomePages/MobileApp/MobileHand.png"
                    text="Creating World-Class Products Together"
                    buttonText="Apply here"
                    onButtonClick={() => alert("Button clicked!")}
                />

            </div>
        </>
    );
}

export default H5Game;
