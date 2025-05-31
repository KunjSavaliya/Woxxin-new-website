'use client';
import React, { useState, useEffect, useRef } from 'react';
import { HiMenu, HiX, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { useRouter, usePathname } from 'next/navigation';
import 'animate.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  const dropdownItems = [
    { title: 'Mobile Apps', navigate: '/components/Pages/EcoSystem/MobileApp' },
    { title: 'Mobile Games', navigate: '/components/Pages/EcoSystem/MobileGame' },
    { title: 'H5 Games / Quiz', navigate: '/components/Pages/EcoSystem/H5Game' },
    { title: 'Video Ads', navigate: '/components/Pages/EcoSystem/VideoAds' },
    { title: 'Google Ads' },
  ];

  const handleNavigation = (path) => {
    setIsDropdownOpen(false);
    setMobileDropdownOpen(false);
    setIsOpen(false);
    if (path) router.push(path);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#110f27] shadow-md">
      <div className="flex items-center justify-between p-4 text-white lg:justify-around">
        <img
          src="/logo.png"
          alt="logo"
          className="cursor-pointer w-28"
          onClick={() => handleNavigation('/')}
        />

        {/* Desktop Nav */}
        <div className="items-center hidden gap-8 text-xl font-light lg:flex">
          <p
            onClick={() => handleNavigation('/components/Pages/HomePage')}
            className={`relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:translate-x-[-50%] after:bottom-[-6px] after:h-[3px] after:w-[70%] after:rounded-full after:bg-[#6960EB] ${isActive('/components/Pages/HomePage') ? 'text-white after:block' : 'after:hidden'}`}
          >
            About Us
          </p>

          <div className="relative" ref={dropdownRef}>
            <div
              className="relative flex items-center cursor-pointer"
              onClick={() => handleNavigation('/components/Pages/EcoSystem/Eco')}
            >
              <span
                className={`relative after:content-[''] after:absolute after:left-1/2 after:translate-x-[-50%] after:bottom-[-6px] after:h-[3px] after:w-[70%] after:rounded-full after:bg-[#6960EB] ${pathname.startsWith('/components/Pages/EcoSystem') ? 'text-white after:block' : 'after:hidden'}`}
              >
                Ecosystem
              </span>
              <div
                className="ml-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
              >
                {isDropdownOpen ? <HiChevronUp /> : <HiChevronDown />}
              </div>
            </div>

            {isDropdownOpen && (
              <div className="absolute mt-4 bg-white text-black border border-[#6C63FF] shadow-xl rounded-2xl p-4 w-56 z-50">
                {dropdownItems.map((item, index) => (
                  <div key={index}>
                    <div
                      className={`cursor-pointer hover:text-[#6C63FF] ${!item.navigate ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={() => item.navigate && handleNavigation(item.navigate)}
                    >
                      <p className="text-lg">{item.title}</p>
                    </div>
                    {index < dropdownItems.length - 1 && <hr className="my-2" />}
                  </div>
                ))}
              </div>
            )}
          </div>

          <p onClick={() => handleNavigation('/components/Pages/Investment')} className="cursor-pointer">
            Investment
          </p>
          <p onClick={() => handleNavigation('/components/Pages/Publishing')} className="cursor-pointer">
            Publishing
          </p>
          <p className="cursor-pointer">Career</p>
          <p onClick={() => handleNavigation('/components/Pages/ContactUs')} className="cursor-pointer">
            Contact Us
          </p>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#110f27] z-40 p-4 animate__animated animate__fadeInDown overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <img src="/logo.png" alt="logo" className="w-28" onClick={() => handleNavigation('/')} />
            <button onClick={() => setIsOpen(false)}>
              <HiX size={30} />
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-xl font-semibold cursor-pointer" onClick={() => handleNavigation('/components/Pages/HomePage')}>About us</p>

            <div className="mb-2">
              <p className="flex items-center justify-between text-xl font-semibold cursor-pointer"
                onClick={() => handleNavigation('/components/Pages/EcoSystem/Eco')}
              >
                Ecosystem
                <span onClick={(e) => {
                  e.stopPropagation();
                  setMobileDropdownOpen(!mobileDropdownOpen);
                }}>
                  {mobileDropdownOpen ? <HiChevronUp /> : <HiChevronDown />}
                </span>
              </p>

              {mobileDropdownOpen && (
                <div className="mt-2 ml-4">
                  {dropdownItems.map((item, index) => (
                    <div key={index} className="mb-3">
                      <p
                        className={`cursor-pointer hover:text-blue-500 ${!item.navigate ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => item.navigate && handleNavigation(item.navigate)}
                      >
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <p className="text-xl font-semibold cursor-pointer" onClick={() => handleNavigation('/components/Pages/Investment')}>Investment</p>
            <p className="text-xl font-semibold cursor-pointer" onClick={() => handleNavigation('/components/Pages/Publishing')}>Publishing</p>
            <p className="text-xl font-semibold cursor-pointer">Career</p>
            <p className="text-xl font-semibold cursor-pointer" onClick={() => handleNavigation('/components/Pages/ContactUs')}>Contact Us</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
