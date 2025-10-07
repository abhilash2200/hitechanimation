"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Russo_One, Poppins } from 'next/font/google';
import { useRouter } from 'next/navigation';

const russo = Russo_One({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

const Footer = () => {
    const router = useRouter();

    const navigateToProjectTab = (tabIndex) => {
        // Navigate to the projects page with the specified tab in the query parameters
        router.push(`/projects?tab=${tabIndex}`);
    };
    const handleTabClick = (tabIndex) => {
        // Navigate to the projects page with the specified tab in the query parameters
        router.push(`/contact?tab=${tabIndex}`);
    };

  return (
    <>
    <section className="bg-[#262626] py-8 bg-[url(/assets/img/banner/Rectangle73.png)] bg-cover bg-end">
        <div className="container mx-auto px-6 lg:px-24">
            <div className="flex flex-wrap gap-y-8">
                <div className="w-full md:w-[30%] lg:w-[30%] px-2">
                    <div>
                        <Image src="/assets/img/banner/logo.jpg" alt="" width="66" height="76" />
                    </div>
                    <div className="pt-8">
                        <p className={`text-white text-[20px] lg:text-[25px] font-bold pb-5 ${russo.className}`}>Get Social</p>
                        <div className="flex gap-x-3 lg:gap-x-5">
                            <div>
                                <a href="https://www.facebook.com/hitechproductionstudio">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24"
                                        viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M11.666,2.005C6.62,2.17,2.374,6.251,2.025,11.288c-0.369,5.329,3.442,9.832,8.481,10.589V14.65H8.892 c-0.726,0-1.314-0.588-1.314-1.314v0c0-0.726,0.588-1.314,1.314-1.314h1.613v-1.749c0-2.896,1.411-4.167,3.818-4.167 c0.357,0,0.662,0.008,0.921,0.021c0.636,0.031,1.129,0.561,1.129,1.198v0c0,0.663-0.537,1.2-1.2,1.2h-0.442 c-1.022,0-1.379,0.969-1.379,2.061v1.437h1.87c0.591,0,1.043,0.527,0.953,1.111l-0.108,0.701c-0.073,0.47-0.477,0.817-0.953,0.817 h-1.762v7.247C18.235,21.236,22,17.062,22,12C22,6.366,17.341,1.821,11.666,2.005z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.instagram.com/hitech_production_studio/">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24"
                                        viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/company/hi-tech-production-studio/">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24"
                                        viewBox="0 0 50 50">
                                        <path fill="white"
                                            d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.youtube.com/channel/UCXshXTHCMSKOMSlpKm4HCIQ">
                                    <svg xmlns="https://twitter.com/" x="0px" y="0px" width="24" height="24"
                                        viewBox="0 0 50 50">
                                        <path fill="white"
                                            d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.youtube.com/channel/UCXshXTHCMSKOMSlpKm4HCIQ">
                                    <svg xmlns="https://www.youtube.com/c/" x="0px" y="0px" width="24" height="24"
                                        viewBox="0 0 50 50">
                                        <path fill="white"
                                            d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[30%] lg:w-[20%] px-2">
                    <div>
                        <div className="pb-5">
                            <p className={`text-white text-[18px] lg:text-[23px] font-bold ${russo.className}`}>About Us</p>
                        </div>
                        <div>
                            <ul>
                                <li className="flex items-center gap-x-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15"
                                        viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z">
                                        </path>
                                    </svg>
                                    <Link className="text-white text-[11px] lg:text-[16px]" href="/about"
                                        /* onclick="redirectToSecondPage(1)" */>Misson</Link>
                                </li>
                                <li className="flex items-center gap-x-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15"
                                        viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z">
                                        </path>
                                    </svg>
                                    <Link className="text-white text-[11px] lg:text-[16px]" href="/about">Vision</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[30%] lg:w-[30%] px-2">
                    <div>
                        <div className="pb-5">
                            <p className={`text-white text-[18px] lg:text-[23px] font-bold ${russo.className}`}>Projects</p>
                        </div>
                        <div>
                            <ul>
                                <li className="flex items-center gap-x-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15"
                                        viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z">
                                        </path>
                                    </svg>
                                    <button onClick={() => navigateToProjectTab(1)} className="text-white text-[11px] lg:text-[16px]">Television Cartoon Programmers</button>
                                </li>
                                <li className="flex items-center gap-x-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15"
                                        viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z">
                                        </path>
                                    </svg>
                                    <button onClick={() => navigateToProjectTab(2)} className="text-white text-[11px] lg:text-[16px]">ED-Tech Content</button>
                                </li>
                                <li className="flex items-center gap-x-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15"
                                        viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z">
                                        </path>
                                    </svg>
                                    <button onClick={() => navigateToProjectTab(3)} className="text-white text-[11px] lg:text-[16px]">Corporate Communucation Videos</button>
                                </li>
                                <li className="flex items-center gap-x-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15"
                                        viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z">
                                        </path>
                                    </svg>
                                    <button onClick={() => navigateToProjectTab(4)} className="text-white text-[11px] lg:text-[16px]">Brand and Advertisement Videos</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[30%] lg:w-[20%] px-2">
                    <div>
                        <div className="pb-5">
                            <p className={`text-white text-[18px] lg:text-[23px] font-bold ${russo.className}`}>Quick Links</p>
                        </div>
                        <div>
                            <ul>
                                                            
                                <li className="flex items-center gap-x-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15"
                                        viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z">
                                        </path>
                                    </svg>
                                    <a className="text-white text-[11px] lg:text-[16px]"
                                        href="partnership">University</a>
                                </li>
                                <li className="flex items-center gap-x-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15"
                                        viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z">
                                        </path>
                                    </svg>
                                    <a className="text-white text-[11px] lg:text-[16px]" href="gallery">Gallery</a>
                                </li>
                                <li className="flex items-center gap-x-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15"
                                        viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z">
                                        </path>
                                    </svg>
                                    <a className="text-white text-[11px] lg:text-[16px]" href="career">Career</a>
                                </li>
                                <li className="flex items-center gap-x-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15"
                                        viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z">
                                        </path>
                                    </svg>
                                    <a className="text-white text-[11px] lg:text-[16px]" href="blogs">Blogs</a>
                                </li>
                                <li className="flex items-center gap-x-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15"
                                        viewBox="0 0 24 24">
                                        <path fill="white"
                                            d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z">
                                        </path>
                                    </svg>
                                    <a className="text-white text-[11px] lg:text-[16px]"
                                        href="contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Image src="/assets/img/Line-8.png" alt="" width="1090" height="2"/>
                <p className="text-white mt-6 text-[11px] lg:text-[14px]"
                    >Copyright © Hi-Tech Film & Brodcast Academy | Design by <Link href="https://www.digitalwolf.co.in/">Digital Wolf</Link></p>
                <div id="scrollTopBtn" className="flex justify-end absolute -mt-12 lg:-mt-20 right-5 lg:right-40 ">
                    <Link href="" className="bg-[#C8181D] p-2 lg:p-5">
                        <Image src="/assets/img/arrowup.png" alt="Call" className="w-3 h-2" width="31" height="18"/>
                    </Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer