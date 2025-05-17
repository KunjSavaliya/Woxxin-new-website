// components/HeroSection.jsx
import Image from "next/image";
import Text from "./Text";
import Button from "./Button";

// onButtonClick
const HeroSection = ({ imageSrc, text, buttonText ,textClassName}) => {
    return (
        <div className="relative  bg-[#110f27]">
            <div>
                <Image
                    src={imageSrc}
                    alt="Main Background"
                    className="w-full mt-[-4px] h-[600px] xl:h-[700px]"
                    width={1920}
                    height={700}
                />
            </div>
            <div className="absolute top-0 left-0 flex flex-col items-center w-full h-full text-left mt-36">
                <div className="flex flex-col justify-around">
                    <div className="flex justify-center mt-12"></div>
                    <div className="mt-10 sm:mt-12">
                        {/* text-gradient-lasttext */}
                        <Text className={`md:leading-[1.2] mt-1 mb-12 text-4xl sm:text-5xl md:text-5xl lg:text-7xl lg:leading-[1.2] xl:text-8xl xl:leading-[1.2]  sm:px-12 md:px-20 lg:px-20 xl:px-80 xl:pl-80 ${textClassName}`}>
                            {text}
                        </Text>
                        <div className="flex justify-center mt-12">
                            <Button
                                text={buttonText}
                                iconColor="#6C63FF"
                                // onClick={onButtonClick}
                                className="mt-2 sm:mt-5 text-white border border-[#5961F9] bg-[#110F27] rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
