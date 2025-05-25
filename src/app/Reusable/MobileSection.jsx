// components/MobileAppSection.js
import Image from 'next/image';
import Text from './Text';
import Button from './Button';

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
  descriptionClassName = '',
  buttonText = '',
  buttonText1 = '',
  Mtext = '',
  MTitle = '',
  EcoText1 = '',
  EcoText = '',
}) => {
  return (
    <div className="relative bg-[#110f27] w-full h-full">
      <img
        src={bgImageSrc}
        alt="Main Background"
        className={`absolute w-full ${bgImageClassNames}`}
      />
      <div className="relative z-10 flex flex-col items-start w-full h-full text-left">
        <div className="flex flex-col p-6 mt-32 text-white sm:mt-40 gap-[100px] lg:gap-[150px] sm:px-12 md:px-20 lg:px-20 xl:px-36 xl:pl-64">
          {/* Top Section */}
          <div>
            <div className="flex justify-start md:gap-10 lg:gap-32">
              <div className="w-auto lg:w-1/2">
                <img
                  src={logoSrc}
                  alt="Logo"
                  className="w-32 sm:w-40 md:w-64"
                />
                <Text className=" leading-[1.2] md:leading-[1.2] text-gradient-mobiletext font-extralight text-4xl sm:text-5xl md:text-5xl lg:text-[70px] xl:text-[80px] text-start mt-6 sm:mt-10">
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
            <Text className={` text-white font-medium text-start mt-12 ${descriptionClassName}`}>
              {description}
            </Text>
            {(EcoText || EcoText1) && (
              <div className=" mt-[-100px] pl-56 pr-56 mb-12">
                {EcoText && (
                  <Text className={` text-white text-4xl text-center  `}>
                    {EcoText}
                  </Text>
                )}

                {EcoText1 && (
                  <Text className={` text-white text-4xl text-center mt-12 `}>
                    {EcoText1}
                  </Text>
                )}
              </div>
            )}
            {(buttonText || buttonText1) && (
              <div className="flex justify-start gap-12 mt-12">
                {buttonText && (
                  <Button
                    text={buttonText}
                    iconColor="#6C63FF"
                    className="mt-2 sm:mt-5 text-white border border-[#5961F9] bg-[#110F27] rounded-md"
                  />
                )}

                {buttonText1 && (
                  <Button
                    text={buttonText1}
                    iconColor="#6C63FF"
                    className="mt-2 sm:mt-5 text-white border border-[#5961F9] bg-[#110F27] rounded-md"
                  />
                )}
              </div>
            )}

          </div>
          {(MTitle) && (
            <div>
              <Text className="text-xl md:text-2xl mt-1 lg:text-3xl xl:text-[35px] text-white">
                {MTitle}
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
                  {Mtext}
                </Text>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;
