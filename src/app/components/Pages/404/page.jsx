'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import MobileAppSection from '@/app/Reusable/MobileSection'; // Update path if needed

function Page404() {
    const router = useRouter();

    const handleClick = () => {
        console.log('✅ Button clicked!');
        router.push('/');
    };

    return (
        <MobileAppSection
            bgImageSrc="/HomePages/Homedesign.png"
            logoSrc="/HomePages/Google.png"
            iconSrc="/HomePages/VideoAdsImg.png"
            title="404 - error"
            title1="Page not found"
            description="Your search has ventured beyond the known universe."
            bgImageClassNames="h-full"
            iconClassNames="w-32 w-auto"
            descriptionClassName="text-2xl"
            buttonText="Back To Home"
            buttonClick={handleClick} // ✅ This is the critical part
        />
    );
}

export default Page404;
