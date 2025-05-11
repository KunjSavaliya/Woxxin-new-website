// components/MobileAppSection.js
import Image from 'next/image';
import Text from './Text';

const MobileAppSection = ({
  bgImageSrc,
  iconSrc,
  logoSrc,
  title,
  title1,
  title2,
  description,
  mission,
  img1,
  iconClassNames = '',
  bgImageClassNames = '',
}) => {
  return (
    <div className="relative bg-[#110f27] w-full h-full">
      <img
        src={bgImageSrc}
        alt="Main Background"
        className={`absolute w-full ${bgImageClassNames}`}
      />
      <div className="relative z-10 flex flex-col items-start w-full h-full text-left">
        <div className="flex flex-col p-6 mt-32 text-white sm:mt-40 gap-[200px] lg:gap-[300px] sm:px-12 md:px-20 lg:px-20 xl:px-36 xl:pl-64">
          {/* Top Section */}
          <div>
            <div className="flex justify-start md:gap-10 lg:gap-32">
              <div className="w-auto lg:w-1/2">
                <img
                  src={logoSrc}
                  alt="Logo"
                  className="w-32 sm:w-40 md:w-64"
                />
                <Text className="text-gradient-mobiletext font-extralight text-4xl sm:text-5xl md:text-5xl lg:text-[70px] xl:text-[80px] text-start mt-6 sm:mt-10">
                  {title}
                </Text>
                <Text className=" font-extralight text-2xl sm:text-3xl md:text-3xl lg:text-[30px] xl:text-[30px] text-white text-start mt-6 sm:mt-10">
                  {title1}
                </Text>
              </div>
              <div className="flex justify-center w-full lg:w-auto lg:justify-end">
                <img
                  src={iconSrc}
                  alt="Icon"
                  className={iconClassNames}
                />
              </div>
            </div>
            <Text className="text-[18px] md:text-2xl xl:text-4xl text-white font-medium text-start mt-12">
              {description}
            </Text>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;
