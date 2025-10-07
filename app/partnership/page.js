"use client";

import React from 'react'
import Courseform from '../component/Courseform';
import { Russo_One, Poppins } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';
import Career from '../component/Career';

const russo = Russo_One({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

const page = () => {

    const [showForm, setShowForm] = useState(false);

    /* const closeForm = () => {
        setIsCourseOpen(false);
      }; */


    return (
        <div>
            <div className="bg-[#F4F4F4] pt-32 pb-10 lg:pt-32 lg:pb-10">
                <div className="conatiner mx-5 lg:mx-28 px-1 lg:px-5">
                    <div className={`text-[23px] md:text-[32px] lg:text-[32px] my-3 lg:my-5 ${russo.className}`}>
                        <h1>University Partnership
                            Programme</h1>
                    </div>
                    <p className={`mt-8 text-[13px] md:text-[16px] lg:text-[16px] ${poppins.className}`}>A
                        career in the Animation,
                        Visual Effects, Gaming and Comics (AVGC) industry can be
                        both exciting and dynamic, offering a range of opportunities for individuals with diverse skills and
                        interests. The AVGC industry encompasses various sectors, including Animation, visual effects, gaming,
                        virtual reality, augmented reality, and more..
                        A career in the Animation, Visual Effects, Gaming and Comics (AVGC) industry can be both exciting and
                        dynamic, offering a range of opportunities for individuals with diverse skills and interests. The AVGC
                        industry encompasses various sectors, including Animation, visual effects, gaming, virtual reality,
                        augmented reality, and more.</p>
                    <div className={`text-[22px] md:text-[32px] lg:text-[32px] mt-10 ${russo.className}`}
                    >
                        <h2>Why this initiative</h2>
                    </div>
                    <div className={`text-[18px] md:text-[24px] lg:text-[24px] text-[#C8181D] my-1 lg:my-5 ${russo.className}`}>
                        <h2>Present scenario in {/* <br /> */}
                            Animation Industry</h2>
                    </div>
                    <div className="desktopView">
                        <div className="hidden md:flex lg:flex justify-between gap-3 lg:gap-10">
                            <div className="bg-white rounded-lg p-6 md:h-40 md:w-40 lg:h-52 lg:w-52">
                                <div className="mb-4">
                                    <a className="" href="#">
                                        <img className="img1 h-8 pt-2" src="assets\img\Vector.png" alt="logo" />
                                    </a>
                                </div>
                                <h2 className={`md:text-[18px] lg:text-[20px] text-gray-800 ${russo.className}`}>
                                    Choosing a<br />reputed<br />university
                                </h2>
                            </div>
                            <div className="w-12 flex justify-center items-center">
                                <img src="assets\img\arrow5.png" alt="" />
                            </div>
                            <div className="bg-white rounded-lg p-6 md:h-40 md:w-40 lg:h-52 lg:w-52">
                                <div className="mb-4">
                                    <a className="" href="#">
                                        <img className="img1 h-8 pt-2" src="assets\img\Vector.png" alt="logo" />
                                    </a>
                                </div>
                                <h2 className={`md:text-[18px] lg:text-[20px] text-gray-800 ${russo.className}`}>
                                    Getting<br />Certified
                                </h2>
                            </div>
                            <div className="w-12 flex justify-center items-center">
                                <img src="assets\img\arrow5.png" alt="" />
                            </div>
                            <div className="bg-[#D3575A] rounded-lg p-6 md:h-40 md:w-40 lg:h-52 lg:w-52">
                                <div className="mb-4">
                                    <a className="" href="#">
                                        <img className="img1 h-8 pt-2" src="assets\img\close-circle.png" alt="logo" />
                                    </a>
                                </div>
                                <h2 className={`md:text-[18px] lg:text-[20px] text-gray-800 ${russo.className}`}>
                                    Lack of<br />Industry<br />Exposure
                                </h2>
                            </div>
                            <div className="w-12 flex justify-center items-center">
                                <img src="assets\img\arrow5.png" alt="" />
                            </div>
                            <div className="bg-white rounded-lg p-6 md:h-40 md:w-40 lg:h-52 lg:w-52">
                                <div className=" mb-4">
                                    <a className="" href="#">
                                        <img className="img1 h-8 pt-2" src="assets\img\Vector.png" alt="logo" />
                                    </a>
                                </div>
                                <h2 className={`md:text-[18px] lg:text-[20px] text-gray-800 ${russo.className}`}>
                                    Placement<br />Assistance
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="mobileView mt-5">
                        <div className="lg:hidden md:hidden flex flex-wrap justify-between gap-3">
                            <div className="bg-white rounded-lg p-2 w-[40%]">
                                <div className="mb-4">
                                    <a className="" href="#">
                                        <img className="img1 h-4" src="assets\img\Vector.png" alt="logo" />
                                    </a>
                                </div>
                                <h2 className={`md:text-[18px] lg:text-[20px] text-gray-800 ${russo.className}`}>
                                    Choosing a<br />reputed<br />university
                                </h2>
                            </div>
                            <div className="w-[8%] flex justify-center items-center">
                                <img src="assets\img\arrow5.png" alt="" />
                            </div>
                            <div className="bg-white rounded-lg p-2 w-[40%]">
                                <div className="mb-4">
                                    <a className="" href="#">
                                        <img className="img1 h-4" src="assets\img\Vector.png" alt="logo" />
                                    </a>
                                </div>
                                <h2 className={`md:text-[18px] lg:text-[20px] text-gray-800 ${russo.className}`}>
                                    Getting<br />Certified
                                </h2>
                            </div>

                            <div className="bg-[#D3575A] rounded-lg p-2 w-[40%] mt-5">
                                <div className="mb-4">
                                    <a className="" href="#">
                                        <img className="img1 h-4" src="assets\img\close-circle.png" alt="logo" />
                                    </a>
                                </div>
                                <h2 className={`md:text-[18px] lg:text-[20px] text-gray-800 ${russo.className}`}>
                                    Lack of<br />Industry<br />Exposure
                                </h2>
                            </div>
                            <div className="w-[8%] flex justify-center items-center">
                                <img src="assets\img\arrow5.png" alt="" />
                            </div>
                            <div className="bg-white rounded-lg p-2 w-[40%] mt-5">
                                <div className=" mb-4">
                                    <a className="" href="#">
                                        <img className="img1 h-4" src="assets\img\Vector.png" alt="logo" />
                                    </a>
                                </div>
                                <h2 className={`md:text-[18px] lg:text-[20px] text-gray-800 ${russo.className}`}>
                                    Placement<br />Assistance
                                </h2>
                            </div>
                        </div>
                    </div>


                    <div className={`text-[18px] md:text-[24px] lg:text-[24px] text-[#C8181D] my-1 lg:my-5 ${russo.className}`}>
                        <h2>Changes we have {/* <br /> */}
                            initiated</h2>
                    </div>
                    <div className="desktopView">
                        <div className="hidden md:flex lg:flex justify-between gap-3 lg:gap-10">
                            <div className="bg-white rounded-lg p-6 md:h-40 md:w-40 lg:h-52 lg:w-52">
                                <div className="flex items-center mb-4">
                                    <a className="" href="#">
                                        <img className="img1 h-8 pt-2" src="assets\img\Vector.png" alt="logo" />
                                    </a>
                                </div>
                                <h2 className={`md:text-[18px] lg:text-[20px] text-gray-800 ${russo.className}`}>
                                    Choosing a<br />reputed<br />university
                                </h2>
                            </div>
                            <div className="w-12 flex justify-center items-center">
                                <img src="assets\img\arrow5.png" alt="" />
                            </div>
                            <div className="bg-white rounded-lg p-6 md:h-40 md:w-40 lg:h-52 lg:w-52">
                                <div className="flex items-center mb-4">
                                    <a className="" href="#">
                                        <img className="img1 h-8 pt-2" src="assets\img\Vector.png" alt="logo" />
                                    </a>
                                </div>
                                <h2 className={`md:text-[18px] lg:text-[20px] text-gray-800 ${russo.className}`}>
                                    Getting<br />Certified
                                </h2>
                            </div>
                            <div className="w-12 flex justify-center items-center">
                                <img src="assets\img\arrow5.png" alt="" />
                            </div>
                            <div className="bg-[#168E6A] rounded-lg p-6 md:h-40 md:w-40 lg:h-52 lg:w-52">
                                <div className="flex items-center mb-4">
                                    <a className="" href="#">
                                        <img className="img1 h-8 pt-2" src="assets\img\tick-circle.png" alt="logo" />
                                    </a>
                                </div>
                                <h2 className={`md:text-[18px] lg:text-[20px] text-gray-800 ${russo.className}`}>
                                    Lack of<br />Industry<br />Exposure
                                </h2>
                            </div>
                            <div className="w-12 flex justify-center items-center">
                                <img src="assets\img\arrow5.png" alt="" />
                            </div>
                            <div className="bg-white rounded-lg p-6 h-40 md:h-40 md:w-40 lg:h-52 lg:w-52">
                                <div className="flex items-center mb-4">
                                    <a className="" href="#">
                                        <img className="img1 h-8 pt-2" src="assets\img\Vector.png" alt="logo" />
                                    </a>
                                </div>
                                <h2 className={`md:text-[18px] lg:text-[20px] text-gray-800 ${russo.className}`}>
                                    Placement<br />Assistance
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="mobileView mt-5">
                        <div className="lg:hidden md:hidden flex flex-wrap justify-between gap-3">
                            <div className="bg-white rounded-lg p-2 w-[40%]">
                                <div className="flex items-center mb-4">
                                    <a className="" href="#">
                                        <img className="img1 h-4" src="assets\img\Vector.png" alt="logo" />
                                    </a>
                                </div>
                                <h2 className={`md:text-[18px] lg:text-[20px] text-gray-800 ${russo.className}`}>
                                    Choosing a<br />reputed<br />university
                                </h2>
                            </div>
                            <div className="w-[10%] flex justify-center items-center">
                                <img src="assets\img\arrow5.png" alt="" />
                            </div>
                            <div className="bg-white rounded-lg p-2 w-[40%]">
                                <div className="flex items-center mb-4">
                                    <a className="" href="#">
                                        <img className="img1 h-4" src="assets\img\Vector.png" alt="logo" />
                                    </a>
                                </div>
                                <h2 className={`md:text-[18px] lg:text-[20px] text-gray-800 ${russo.className}`}>
                                    Getting<br />Certified
                                </h2>
                            </div>

                            <div className="bg-[#168E6A] rounded-lg p-2 w-[40%] mt-5">
                                <div className="flex items-center mb-4">
                                    <a className="" href="#">
                                        <img className="img1 h-4" src="assets\img\tick-circle.png" alt="logo" />
                                    </a>
                                </div>
                                <h2 className={`md:text-[18px] lg:text-[20px] text-gray-800 ${russo.className}`}>
                                    Lack of<br />Industry<br />Exposure
                                </h2>
                            </div>
                            <div className="w-[8%] flex justify-center items-center">
                                <img src="assets\img\arrow5.png" alt="" />
                            </div>
                            <div className="bg-white rounded-lg p-2 w-[40%] mt-5">
                                <div className="flex items-center mb-4">
                                    <a className="" href="#">
                                        <img className="img1 h-4" src="assets\img\Vector.png" alt="logo" />
                                    </a>
                                </div>
                                <h2 className={`md:text-[18px] lg:text-[20px] text-gray-800 ${russo.className}`}>
                                    Placement<br />Assistance
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-10 pb-2">
                <div className="conatiner mx-5 lg:mx-28 px-1 lg:px-5">
                    <div className={`text-[22px] md:text-[32px] lg:text-[32px] my-1 lg:my-3 ${russo.className}`}>
                        <h2>Proposed Courses</h2>
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap justify-center gap-5 md:gap-3 lg:gap-10 my-5 lg:my-10">
                        <div className="bg-white w-[100%] md:w-[30%] lg:w-[30%]">
                            <div className="">
                                <a className="" href="#">
                                    <img className="img1" src="assets\img\Subtract (2).png" alt="logo" width="100%" />
                                </a>
                            </div>
                            <p className={`text-[#C8181D] text-[18px] md:text-[20px] lg:text-[24px] mt-3 ${russo.className}`}>B.Sc in Animation
                                &<br />Filmmaking</p>
                            <p className={`mt-5 text-[15px] md:text-[16px] lg:text-[17px] mb-2 ${poppins.className}`}>Course Duration</p>
                            <div className="flex gap-3 items-center">
                                <div>
                                    <a className="" href="#">
                                        <img className="img1" src="assets\img\VectorB.png" alt="logo" width="15" height="15" />
                                    </a>
                                </div>
                                <p className={`text-[13px] md:text-[14px] lg:text-[16px] ${poppins.className}`}>3 Years Degree Course
                                </p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div>
                                    <a className="" href="#">
                                        <img className="img1" src="assets\img\VectorB.png" alt="logo" width="15" height="15" />
                                    </a>
                                </div>
                                <p className={`text-[13px] md:text-[14px] lg:text-[16px] ${poppins.className}`}>4 Years Degree Course</p>
                            </div>
                            <div>
                                <button onClick={() => setShowForm(true)} className={`text-white bg-[#C8181D] text-[13px] lg:text-[16px] px-8 py-3 rounded-lg ${poppins.className}`}>Know More</button>
                                {showForm && <Courseform closeForm={() => setShowForm(false)} />}
                            </div>
                        </div>
                        <div className="bg-white w-[100%] md:w-[30%] lg:w-[30%]">
                            <div className="">
                                <a className="" href="#">
                                    <img className="img1" src="assets\img\Subtract (1).png" alt="logo" width="100%" />
                                </a>
                            </div>
                            <p className={`text-[#C8181D] text-[18px] md:text-[20px] lg:text-[24px] mt-3 ${russo.className}`}>B.Tech Computer
                                Science<br />(Gaming)</p>
                            <p className={`mt-5 text-[15px] md:text-[16px] lg:text-[17px] mb-2 ${poppins.className}`}>Course Duration</p>
                            <div className="flex gap-3 items-center">
                                <div>
                                    <a className="" href="#">
                                        <img className="img1" src="assets\img\VectorB.png" alt="logo" width="15" height="15" />
                                    </a>
                                </div>
                                <p className={`text-[13px] md:text-[14px] lg:text-[16px] ${poppins.className}`}>3 Years Degree Course
                                </p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div>
                                    <a className="" href="#">
                                        <img className="img1" src="assets\img\VectorB.png" alt="logo" width="15" height="15" />
                                    </a>
                                </div>
                                <p className={`text-[13px] md:text-[14px] lg:text-[16px] ${poppins.className}`}>4 Years Degree Course</p>
                            </div>
                            <div>
                                <button onClick={() => setShowForm(true)} className={`text-white bg-[#C8181D] text-[13px] lg:text-[16px] px-8 py-3 rounded-lg ${poppins.className}`}>Know More</button>
                                {showForm && <Courseform closeForm={() => setShowForm(false)} />}
                            </div>
                        </div>
                        <div className="bg-white w-[100%] md:w-[30%] lg:w-[30%]">
                            <div className="">
                                <a className="" href="#">
                                    <img className="img1" src="assets\img\Subtract (3).png" alt="logo" width="100%" />
                                </a>
                            </div>
                            <p className={`text-[#C8181D] text-[18px] md:text-[20px] lg:text-[24px] mt-3 ${russo.className}`}>B.Sc Visual Effects<br />For Film
                            </p>
                            <p className={`mt-5 text-[15px] md:text-[16px] lg:text-[17px] mb-2 ${poppins.className}`}>Course Duration</p>
                            <div className="flex gap-3 items-center">
                                <div>
                                    <a className="" href="#">
                                        <img className="img1" src="assets\img\VectorB.png" alt="logo" width="15" height="15" />
                                    </a>
                                </div>
                                <p className={`text-[13px] md:text-[14px] lg:text-[16px] ${poppins.className}`}>3 Years Degree Course
                                </p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div>
                                    <a className="" href="#">
                                        <img className="img1" src="assets\img\VectorB.png" alt="logo" width="15" height="15" />
                                    </a>
                                </div>
                                <p className={`text-[13px] md:text-[14px] lg:text-[16px] ${poppins.className}`}>4 Years Degree Course</p>
                            </div>
                            <div>
                                <button onClick={() => setShowForm(true)} className={`text-white bg-[#C8181D] text-[13px] lg:text-[16px] px-8 py-3 rounded-lg ${poppins.className}`}>Know More</button>
                                {showForm && <Courseform closeForm={() => setShowForm(false)} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="bg-[#D3575A] py-5 lg:py-24">
                <div className="conatiner mx-5 lg:mx-28 px-1 lg:px-5">
                    <div className={`text-[22px] md:text-[32px] lg:text-[32px] font-bold text-white my-1 lg:my-3 ${russo.className}`}>
                        <h2>Career Opportunities</h2>
                    </div>
                </div>
                <div className="dancing">
                    <div className={`text ${russo.className}`}>
                        Animation is the process of creating the illusion of motion by displaying a sequence of images, or
                        frames, in rapid succession. Techniques like keyframing, tweening, and rigging are used to control
                        movement. 2D Animation involves hand-drawn or digital art, while 3D Animation uses models and motion
                        capture. Animation enhances storytelling in films, games, and virtual reality, making it a powerful
                        visual medium.
                    </div>
                </div>
            </div> */}
            <Career/>
            <div className="bg-[#F4F4F4] py-5 lg:py-10">
                <div className="conatiner mx-5 lg:mx-28 px-1 lg:px-5">
                    <div className="flex flex-wrap justify-center md:gap-3 lg:gap-10">
                        <div className="w-[100%] md:w-[45%] lg:w-[45%]">
                            <div className={`text-[22px] md:text-[32px] lg:text-[32px] ${russo.className}`}>
                                <h2>Responsibility Matrix</h2>
                            </div>
                            <div className={`text-[18px] md:text-[24px] lg:text-[24px] text-[#C8181D] mt-5 ${russo.className}`}>
                                <h2>Our Responsibilities:</h2>
                            </div>
                            <p className={`mt-3 text-[13px] md:text-[16px] lg:text-[16px] ${poppins.className}`}>A career in
                                the Animation, Visual Effects, Gaming and Comics (AVGC) industry can
                                be both exciting
                                and dynamic, offering a range of opportunities for individuals with diverse skills and
                                interests. The AVGC industry encompasses various sectors, including Animation, visual effects,
                                gaming, virtual reality, augmented reality, and more.</p>
                            <div className="flex gap-3 my-5 items-start">
                                <img className="img1 my-1" src="assets\img\Vectorpoint.png" alt="logo" width="15" height="15" />
                                <p className={`text-[13px] md:text-[16px] lg:text-[16px] ${poppins.className}`}>Education– End
                                    to end Education includes all faculty & HOD, day to day
                                    education, examination
                                    support etc for major papers and Industry Exposure through Live Project Work.</p>
                            </div>
                            <div className="flex gap-3 my-5 items-start">
                                <img className="img1 my-1" src="assets\img\Vectorpoint.png" alt="logo" width="15" height="15" />
                                <p className={`text-[13px] md:text-[16px] lg:text-[16px] ${poppins.className}`}>
                                    Placement–includes salary for placement team, cost for placement drives,
                                    company tie ups,etc.</p>
                            </div>
                            <div className={`text-[18px] md:text-[24px] lg:text-[24px] text-[#C8181D] my-1 lg:my-3 ${russo.className}`}>
                                <h2>University Responsibilities:</h2>
                            </div>
                            <div className="flex gap-3 my-5 items-start">
                                <img className="img1 my-1" src="assets\img\Vectorpoint.png" alt="logo" width="15" height="15" />
                                <p className={`text-[13px] md:text-[16px] lg:text-[16px] ${poppins.className}`}>
                                    Infrastructure–includes classNameroom Training Lab, hardware,<br /> software, housekeeping, etc.
                                </p>
                            </div>
                            <div className={`text-[18px] md:text-[24px] lg:text-[24px] text-[#C8181D] my-1 lg:my-3 ${russo.className}`}>
                                <h2>Joint Responsibilities:</h2>
                            </div>
                            <div className="flex gap-3 my-5 items-start">
                                <img className="img1 my-1" src="assets\img\Vectorpoint.png" alt="logo" width="15" height="15" />
                                <p className={`text-[13px] md:text-[16px] lg:text-[16px] ${poppins.className}`}>Admissions–
                                    Student enrollment initiative</p>
                            </div>
                            <div className="flex gap-3 my-5 items-start ">
                                <img className="img1 my-1" src="assets\img\Vectorpoint.png" alt="logo" width="15" height="15" />
                                <p className={`text-[13px] md:text-[16px] lg:text-[16px] ${poppins.className}`}>Marketing–Lead
                                    generation campaign</p>
                            </div>
                            <div className={`text-[18px] md:text-[24px] lg:text-[24px] text-[#C8181D] my-1 lg:my-8 ${russo.className}`}>
                                <h2>Revenue Sharing Ratio</h2>
                            </div>
                            <div className={`text-7xl text-[#525252] my-1 lg:my-8 ${russo.className}`}>
                                <h2>50:50</h2>
                            </div>
                        </div>
                        <div className="w-[100%] md:w-[45%] lg:w-[45%] rounded-3xl">
                            <div className="bg-white w-[50%] text-red-600 px-5 lg:px-10 py-3 lg:py-5 rounded-t-[20px]"
                            >
                                <h2 className={`text-[#C8181D] text-[12px] md:text-[24px] lg:text-[24px] ${russo.className}`}>Contact Us</h2>
                            </div>
                            <form
                                className={`p-5 lg:p-10 bg-white rounded-b-[20px] rounded-tr-[20px] text-[10px] md:text-[16px] lg:text-[16px] ${poppins.className}`}>
                                <div className="mb-8">
                                    <input type="text" placeholder="University Name"
                                        className="w-full border-b border-gray-400 px-2 py-2 " />
                                </div>
                                <div className="mb-8">
                                    <input type="email" placeholder="Email"
                                        className="w-full border-b border-gray-400 px-2 py-2 " />
                                </div>
                                <div className="mb-8">
                                    <input type="text" placeholder="Phone Number"
                                        className="w-full border-b border-gray-400 px-2 py-2 " />
                                </div>
                                <div className="mb-8">
                                    <input type="text" placeholder="Address"
                                        className="w-full border-b border-gray-400 px-2 py-2 " />
                                </div>

                                <div className="mb-8">
                                    <textarea  placeholder="Your query for Collaboraton/Tie-up"
                                        className="w-full h-[8rem] border-b border-gray-400 pt-5 px-2 "></textarea>
                                </div>
                                <div className="mb-10 md:mb-10 lg:mb-10">
                                    <button type="submit"
                                        className="bg-red-600 text-white text-[13px] lg:text-[16px] w-[65%] lg:w-[40%] px-8 py-3 rounded-md hover:bg-red-700 ">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 lg:py-10">
                <div className="conatiner mx-5 lg:mx-28 px-1 lg:px-5">
                    <div className={`text-[22px] md:text-[32px] lg:text-[32px] my-1 md:my-10 lg:my-10 ${russo.className}`}>
                        <h1>About AVGC-XR</h1>
                    </div>
                    <div className="flex flex-wrap  md:gap-3 lg:gap-10">
                        <div className="w-[100%] md:w-[45%] lg:w-[45%]">
                            <p className={`text-[13px] md:text-[15px] lg:text-[16px] ${poppins.className}`}>
                                A career in the Animation, Visual Effects, Gaming and Comics (AVGC) industry can be both
                                exciting and dynamic, offering a range of opportunities for individuals with diverse skills and
                                interests. The AVGC industry encompasses various sectors, including Animation, visual effects,
                                gaming, virtual reality, augmented reality, and more.
                            </p>
                            <div className={`text-[18px] md:text-[22px] lg:text-[24px] text-[#C8181D] my-1 md:my-3 lg:my-3 ${russo.className}`}>
                                <h2>Career scope in Animation & VFX Industry</h2>
                            </div>
                            <p className={`text-[13px] md:text-[15px] lg:text-[16px] ${poppins.className}`}>
                                A career in the
                                Animation, Visual Effects, Gaming and Comics (AVGC) industry can
                                be both exciting
                                and dynamic, offering a range of opportunities for individuals with diverse skills and
                                interests. The AVGC industry encompasses various sectors, including Animation, visual effects,
                                gaming, virtual reality, augmented reality, and more.</p>

                            <div className="flex flex-wrap mt-5">
                                <div className={`bg-white rounded-lg p-3 w-[100%] md:w-[45%] lg:w-[45%] ${poppins.className}`}>
                                    <div className="flex items-center mb-4">
                                        <a className="" href="#">
                                            <img className="img1 h-4 lg:h-6" src="assets\img\Vector.png" alt="logo" />
                                        </a>
                                    </div>
                                    <h2 className="text-[13px] md:text-[14px] lg:text-[16px]"
                                    >
                                        Animation and special effects are in high demand on television, film and advertising
                                        industries
                                    </h2>
                                    <p className="text-[#C8181D] text-[13px] md:text-[14px] lg:text-[16px]"
                                    >-
                                        India Today</p>
                                </div>
                                <div className={`bg-white rounded-lg p-3 w-[100%] md:w-[45%] lg:w-[45%] ${poppins.className}`}>
                                    <div className="flex items-center mb-4">
                                        <a className="" href="#">
                                            <img className="img1 h-4 lg:h-6" src="assets\img\Vector.png" alt="logo" />
                                        </a>
                                    </div>
                                    <h2 className="text-[13px] md:text-[14px] lg:text-[16px]"
                                    >
                                        Gaming is one the key industries that is generating a variety of job opportunities right
                                        now
                                    </h2>
                                    <p className="text-[#C8181D] text-[13px] md:text-[14px] lg:text-[16px]"
                                    >-
                                        The Economic Times</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className={`bg-white rounded-lg p-3 w-[100%] md:w-[45%] lg:w-[45%] ${poppins.className}`}>
                                    <div className="flex items-center mb-4">
                                        <a className="" href="#">
                                            <img className="img1 h-4 lg:h-6" src="assets\img\Vector.png" alt="logo" />
                                        </a>
                                    </div>
                                    <h2 className="text-[13px] md:text-[14px] lg:text-[16px]"
                                    >
                                        Govt says AVGC sector to provide employment over 20 lakh people in upcoming years
                                    </h2>
                                    <p className="text-[#C8181D] text-[13px] md:text-[14px] lg:text-[16px]"
                                    >-
                                        News Services Division All India Radio 2022</p>
                                </div>
                                <div className={`bg-white rounded-lg p-3 w-[100%] md:w-[45%] lg:w-[45%] ${poppins.className}`}>
                                    <div className="flex items-center mb-4">
                                        <a className="" href="#">
                                            <img className="img1 h-4 lg:h-6" src="assets\img\Vector.png" alt="logo" />
                                        </a>
                                    </div>
                                    <h2 className="text-[13px] md:text-[14px] lg:text-[16px]"
                                    >
                                        The pandemic has opened new horizons for animators all over the globe, including in
                                        India
                                    </h2>
                                    <p className="text-[#C8181D] text-[13px] md:text-[14px] lg:text-[16px]"
                                    >-
                                        Telegraph India</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[100%] md:w-[45%] lg:w-[45%]">
                            <div className={`text-[18px] md:text-[22px] lg:text-[24px] text-[#C8181D] ${russo.className}`}>
                                <h2>Central Govt. promotes Animation & VFX Industry {/* <br className="hidden lg:block" /> */}
                                    in India</h2>
                            </div>
                            <p className={`text-[13px] md:text-[15px] lg:text-[16px] ${poppins.className}`}>
                                Animation, Visual Effects, Gaming,
                                and Comic (AVGC) sector offers immense potential to employ
                                youth. Prime minister Shri Narendra Modi highlighted the need to promote AVGC to build domestic
                                capacity for serving Indian markets and the global demand</p>
                            <div className="flex items-center my-5">
                                <a className="" href="#">
                                    <img className="" src="assets\img\Screenshot 2024-09-18 at 6.45.09 PM 1.png" alt="logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page