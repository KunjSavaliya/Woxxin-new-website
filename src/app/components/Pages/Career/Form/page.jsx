'use client';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from "framer-motion";
// import Text from '../../../Reusable/Text';
import Button from '@/app/Reusable/Button';
import Text from '@/app/Reusable/Text';
function Form() {

    return (
        <>
            <div>

                <div className="min-h-screen flex items-center justify-center bg-[#111] px-4 py-10">
                    <form className="w-full max-w-xl bg-[#0c0b20] p-6 md:p-10 rounded-2xl text-white shadow-md space-y-6">
                        <div>
                            <label className="block mb-2 text-sm font-medium">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full p-3 rounded bg-[#2c2b40] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#5961F9]"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium">Email address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 rounded bg-[#2c2b40] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#5961F9]"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium">Position of interest</label>
                            <select
                                className="w-full p-3 rounded bg-[#2c2b40] text-white outline-none focus:ring-2 focus:ring-[#5961F9]"
                            >
                                <option value="">Select a position</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="manager">Project Manager</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium">Resume (PDF or DOC)</label>
                            <input
                                type="file"
                                className="bg-white text-black rounded px-3 py-2 w-full cursor-pointer"
                                accept=".pdf,.doc,.docx"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium">Additional Information</label>
                            <textarea
                                rows="5"
                                placeholder="Tell us more about yourself, your experience..."
                                className="w-full p-3 rounded bg-[#2c2b40] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#5961F9]"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full py-3 rounded border border-[#5961F9] text-white hover:bg-[#5961F9]/10 transition duration-300"
                            >
                                Submit Application
                            </button>
                        </div>
                    </form>
                </div>


            </div>
        </>
    );
}

export default Form;
