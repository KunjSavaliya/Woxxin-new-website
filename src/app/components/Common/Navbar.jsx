'use client';
import React, { useState, useEffect, useRef } from 'react';
import { HiMenu, HiX, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import 'animate.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);

  const dropdownItems = [
    { title: 'Mobile Apps', navigate: '/components/Pages/EcoSystem/MobileApp' },
    { title: 'Mobile Games', navigate: '/components/Pages/EcoSystem/MobileGame' },
    { title: 'H5 Games / Quiz', navigate: '/components/Pages/EcoSystem/H5Game' },
    { title: 'Video Ads', navigate: '/components/Pages/EcoSystem/VideoAds' },
    { title: 'Google Ads' },
    { title: 'Investment', navigate: '/components/Pages/EcoSystem/Investment' },
    { title: 'App Acquire' },
  ];

  const handleNavigation = (path) => {
    if (path) {
      router.push(path);
    }
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#110f27] shadow-md">
      <div className="flex items-center justify-between p-4 text-white lg:justify-around">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="logo"
          className="cursor-pointer w-28"
          onClick={() => handleNavigation('/')}
        />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-xl font-light">
          <p className="cursor-pointer">About us</p>
          <div className="relative" ref={dropdownRef}>
            <p
              className="flex items-center cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen), router.push('/components/Pages/EcoSystem/Eco')}
            >
              Ecosystem
              {isDropdownOpen ? <HiChevronUp className="ml-1" /> : <HiChevronDown className="ml-1" />}
            </p>
            {isDropdownOpen && (
              <div className="absolute mt-4 bg-white text-black border border-[#6C63FF] shadow-xl rounded-2xl p-4 w-56 z-50">
                {dropdownItems.map((item, index) => (
                  <div key={index}>
                    <div
                      className="cursor-pointer hover:text-blue-500"
                      onClick={() => handleNavigation(item.navigate)}
                    >
                      <p className="text-lg">{item.title}</p>
                    </div>
                    {index < dropdownItems.length - 1 && <hr className="my-2" />}
                  </div>
                ))}
              </div>
            )}
          </div>
          <p>Advertisers</p>
          <p onClick={() => router.push('/components/Pages/Publishing')} className='cursor-pointer'>Publishing</p>
          <p>Career</p>
          <p onClick={() => router.push('/components/Pages/ContactUs')} className='cursor-pointer'>Contact Us</p>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#110f27] z-40 p-4 animate__animated animate__fadeInDown overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <img
              src="/logo.png"
              alt="logo"
              className="w-28"
              onClick={() => handleNavigation('/')}
            />
            <button onClick={() => setIsOpen(false)}>
              <HiX size={30} />
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-xl font-semibold">About us</p>

            <div className="mb-2">
              <p
                className="flex justify-between items-center text-xl font-semibold cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Ecosystem
                {isDropdownOpen ? <HiChevronUp /> : <HiChevronDown />}
              </p>
              {isDropdownOpen && (
                <div className="mt-2 pl-2">
                  {dropdownItems.map((item, index) => (
                    <div key={index} className="mb-3">
                      <p
                        className="cursor-pointer hover:text-blue-500"
                        onClick={() => handleNavigation(item.navigate)}
                      >
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <p className="text-xl font-semibold">Advertisers</p>
            <p className="text-xl font-semibold">Publishing</p>
            <p className="text-xl font-semibold">Career</p>
            <p className="text-xl font-semibold">Contact Us</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
