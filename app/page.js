"use client";


import { useRouter } from 'next/navigation'; // Use the appropriate import for Next.js version
import { Russo_One, Poppins } from 'next/font/google';
import Image from 'next/image';

const russo = Russo_One({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });


export default function Home() {
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
            <section className="bg-[url('/assets/img/banner/banner-hitech.jpg')] bg-cover bg-center h-[600px] lg:mt-[68px]">
                <div className="container mx-auto px-4">
                    <div className=" flex flex-wrap">
                        <div className="h-[600px] flex justify-center flex-col">
                            <div className="bg-black bg-opacity-20 inline-block p-4 rounded-lg">
                                <h1 className={`text-[25px] md:text-[32px] lg:text-[32px] text-white ${russo.className}`}>Hi-Tech Animation<br />
                                    Studio</h1>
                                <p className={`text-white text-[15px] md:text-[20px] lg:text-[20px] pb-12 pt-6 ${poppins.className}`}>An India based premier
                                    Animation and<br /> Motion Graphics studio in Kolkata</p>

                                <div>
                                    <a className={`text-white bg-[#C8181D] text-[13px] md:text-[16px] lg:text-[16px] px-8 py-3 rounded-lg ${poppins.className}`} href='/contact'>Contact With Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex flex-wrap gap-y-1">
                    <div className="w-[100%]  md:w-[50%] lg:w-[25%]">
                        <div className="h-[250px] flex justify-center flex-col px-12 my-10">
                            <div>
                                <h2 className={`text-[17px] md:text-[20px] lg:text-[20px] ${russo.className}`}>
                                    TELEVISION CARTOON<br /> PROGRAMMES</h2>
                                <p className={`text-[13px] pt-2 pb-12 leading-[20px] ${poppins.className}`}>
                                    Rated as the largest production house<br/> in Eastern India </p>
                            </div>
                            <div>
                                <button className={`text-white bg-[#C8181D] text-[13px] lg:text-[16px] px-8 py-3 rounded-lg ${poppins.className}`}
                                    onClick={() => navigateToProjectTab(1)}>View More</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%]  md:w-[50%] lg:w-[25%] bg-[#262626] ">
                        <div className="h-[250px] flex justify-center flex-col px-12 my-10">
                            <div>
                                <h2 className={`text-[17px] md:text-[20px] lg:text-[20px] text-white ${russo.className}`}>ED-TECH <br /> CONTENT</h2>
                                <p className={`text-[13px] text-white pt-2 pb-12 leading-[20px] ${poppins.className}`}>Rated as the largest
                                    production<br/> house in India </p>
                            </div>
                            <div>
                                <button className={`text-[#000] bg-[#FFF] text-[13px] lg:text-[16px] px-8 py-3 rounded-lg ${poppins.className}`}
                                    onClick={() => navigateToProjectTab(2)}>View More</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%] md:w-[50%] lg:w-[25%]">
                        <div className="h-[250px] flex justify-center flex-col px-12 my-10">
                            <div>
                                <h2 className={`text-[17px] md:text-[20px] lg:text-[20px] ${russo.className}`}>
                                    CORPORATE<br /> COMMUNICATION VIDEOS</h2>
                                <p className={`text-[13px] pt-2 pb-12 leading-[20px] ${poppins.className}`}>We utilise innovative techniques to<br/> create impactful visuals </p>
                            </div>
                            <div>
                                <button className={`text-white bg-[#C8181D] text-[13px] lg:text-[16px] px-8 py-3 rounded-lg ${poppins.className}`}
                                    onClick={() => navigateToProjectTab(3)}>View More</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%] md:w-[50%] lg:w-[25%] bg-[#262626]">
                        <div className="h-[250px] flex justify-center flex-col px-12 my-10">
                            <div>
                                <h2 className={`text-[17px] md:text-[20px] lg:text-[20px] text-white ${russo.className}`}>BRAND AND<br />
                                    ADVERTISEMENT VIDEOS</h2>
                                <p className={`text-[13px] text-white pt-2 pb-12 leading-[20px] ${poppins.className}`}>It is one of the best and innovative
                                    production<br/> houses In India </p>
                            </div>
                            <div>
                                <button className={`text-[#000] bg-[#FFF] text-[13px] lg:text-[16px] px-8 py-3 rounded-lg ${poppins.className}`}
                                    onClick={() => navigateToProjectTab(4)}>View More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#F4F4F4] py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-[100%] md:w-[70%] lg:w-[40%]">
                            <Image className="rounded-l-[20px]" src="/assets/img/home/about-us.jpg" alt="" width={600}
                                height={100} />
                        </div>
                        <div
                            className="w-[100%] md:w-[70%] lg:w-[60%] flex justify-center flex-col bg-[#fff] rounded-r-[20px] py-6">
                            <div className="px-8 lg:px-16">
                                <div className="">
                                    <h2 className={`text-[22px] md:text-[30px] lg:text-[30px] ${russo.className}`}>About Us</h2>
                                    <p className={`text-[14px] pb-2 pt-3 ${poppins.className}`}>
                                    Hi-Tech Animation is a leading content creation and Animation studio in India, with state-of-the-art production facilities in Kolkata and Mumbai. We work with esteemed National and International clients.
                                    </p>
                                    <p className={`text-[14px] pb-8 pt-3 ${poppins.className}`}>
                                    Our expertise extends to producing curriculum-aligned Ed-Tech content for modern learning platforms, crafting impactful corporate communication videos to enhance business messaging, and creating compelling brand and advertisement videos that elevate marketing strategies. At Hi-Tech Animation, we take pride in delivering world-class visual content that drives value for clients worldwide.
                                    </p>
                                </div>
                                <div>
                                    <a className={`text-white bg-[#C8181D] text-[13px] lg:text-[16px] px-8 py-3 rounded-lg ${poppins.className}`} href="/about">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="pb-12">
                        <h2 className={`text-[22px] md:text-[30px] lg:text-[30px] ${russo.className}`}>
                            Our Clients & Broadcasters</h2>
                    </div>
                    <div className="flex flex-wrap border-2 p-16 rounded-[20px] relative">
                        <div className="w-[50%] lg:w-[25%] px-2 border-r-2 border-b-2">
                            <img className="block mx-auto" src="/assets/img/partner/cn.png" alt="" width="160" height="160" />
                        </div>
                        <div className="w-[50%] lg:w-[25%] px-2 border-r-2 border-b-2">
                            <img className="block mx-auto" src="/assets/img/partner/netflix.png" alt="" width="160" height="160" />
                        </div>
                        <div className="w-[50%] lg:w-[25%] px-2 border-r-2 border-b-2">
                            <img className="block mx-auto" src="/assets/img/partner/pogo.png" alt="" width="160" height="160" />
                        </div>
                        <div className="w-[50%] lg:w-[25%] px-2 border-b-2">
                            <img className="block mx-auto" src="/assets/img/partner/nick.png" alt="" width="160" height="160" />
                        </div>
                        <div className="w-[50%] lg:w-[25%] px-2 border-r-2 border-b-2">
                            <img className="block mx-auto" src="/assets/img/partner/sonic.png" alt="" width="160" height="160" />
                        </div>
                        <div className="w-[50%] lg:w-[25%] px-2 border-r-2 border-b-2">
                            <img className="block mx-auto" src="/assets/img/partner/viacom.png" alt="" width="160" height="160" />
                        </div>
                        <div className="w-[50%] lg:w-[25%] px-2 border-r-2 border-b-2">
                            <img className="block mx-auto" src="/assets/img/partner/sony.png" alt="" width="160" height="160" />
                        </div>
                        <div className="w-[50%] lg:w-[25%] px-2 border-b-2">
                            <img className="block mx-auto" src="/assets/img/partner/narayana.png" alt="" width="160" height="160" />
                        </div>
                        <div className="w-[50%] lg:w-[25%] px-2 border-r-2">
                            <img className="block mx-auto" src="/assets/img/partner/byjus.png" alt="" width="160" height="160" />
                        </div>
                        <div className="w-[50%] lg:w-[25%] px-2 border-r-2">
                            <img className="block mx-auto" src="/assets/img/partner/zee-news.png" alt="" width="160" height="160" />
                        </div>
                        <div className="w-[50%] lg:w-[25%] px-2 border-r-2">
                            <img className="block mx-auto" src="/assets/img/partner/zee-bangla.png" alt="" width="160"
                                height="160" />
                        </div>
                        <div className="w-[50%] lg:w-[25%] px-2">
                            <img className="block mx-auto" src="/assets/img/partner/abp.png" alt="" width="160" height="160" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#F4F4F4] py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center">
                        <div
                            className="w-full md:w-[70%] lg:w-[40%] bg-[#262626] flex justify-center flex-col rounded-l-[20px] pt-12 pb-16 order-2 lg:order-1">
                            <div className="px-12">
                                <div className="mb-12">
                                    <h2 className={`text-[22px] md:text-[30px] lg:text-[30px] text-[#fff] mb-5 ${russo.className}`}>Partner
                                        With Us</h2>
                                    {/* <h3 className={`text-[16px] text-[#fff] mb-8 ${poppins.className}`}>WE CREATE and also we take
                                        care of everything else!</h3>
                                    <p className={`text-[12px] text-[#fff] leading-[25px] ${poppins.className}`}>Be a part of the fastest
                                        growing vertical in the education industry. low investment franchise business</p> */}
                                </div>
                                <div>
                                    <button onClick={()=>handleTabClick(1)} className={`text-white bg-[#C8181D] text-[13px] lg:text-[16px] px-8 py-3 rounded-lg ${poppins.className}`}>Request A Call</button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-[70%] lg:w-[50%] order-1 lg:order-2">
                            <Image className="rounded-r-[20px]" src="/assets/img/home/handshake.jpg" alt="" width={600}
                                height={400} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="mb-8">
                        <h2 className={`text-[22px] md:text-[30px] lg:text-[30px] text-center ${russo.className}`}>Awards & Achievements</h2>
                    </div>
                    <div className="flex flex-wrap gap-y-10">
                        <div className="w-[50%] lg:w-[25%] px-2">
                            <img className=" block m-auto" src="/assets/img/award/award01.png" alt="" width="80%" height="100%" />
                        </div>
                        <div className="w-[50%] lg:w-[25%] px-2">
                            <img className=" block m-auto" src="/assets/img/award/award02.png" alt="" width="80%" height="100%" />
                        </div>
                        <div className="w-[50%] lg:w-[25%] px-2">
                            <img className=" block m-auto" src="/assets/img/award/award03.png" alt="" width="80%" height="100%" />
                        </div>
                        <div className="w-[50%] lg:w-[25%] px-2">
                            <img className=" block m-auto" src="/assets/img/award/award04.png" alt="" width="80%" height="100%" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-5'>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between gap-y-2 ">
                        <div className="px-1 bg-cover flex justify-around flex-col w-[100%] lg:w-[50%]">
                            <img src="/assets/img/gal/gal8.jpg" alt="" width="100%" />
                        </div>
                        <div className="w-[100%] md:w-[50%] lg:w-[25%] px-1 order-1 md:order-1 lg:order-1">
                            <img src="/assets/img/gal/gal1.jpg" alt="" width="100%" />
                        </div>
                        <div className="w-[100%] md:w-[50%] lg:w-[25%] px-1 order-2 md:order-2 lg:order-2">
                            <img src="/assets/img/gal/gal2.jpg" alt="" width="100%" />
                        </div>
                        <div className="w-[100%] md:w-[50%] lg:w-[25%] px-1 order-3 md:order-3 lg:order-3">
                            <img src="/assets/img/gal/gal3.jpg" alt="" width="100%" />
                        </div>
                        <div className="w-[100%] md:w-[100%] lg:w-[50%] px-1 order-4 md:order-5 lg:order-4">
                            <img src="/assets/img/gal/gal4.jpg" alt="" width="100%" />
                        </div>
                        <div className="w-[100%] md:w-[50%] lg:w-[25%] px-1 order-5 md:order-4 lg:order-5">
                            <img src="/assets/img/gal/gal5.jpg" alt="" width="100%" />
                        </div>
                        <div className="w-[100%] md:w-[100%] lg:w-[50%] px-1 order-6 md:order-6 lg:order-6">
                            <img src="/assets/img/gal/gal6.jpg" alt="" width="100%" />
                        </div>
                        <div className="w-[100%] md:w-[100%] lg:w-[50%] px-1 order-7 md:order-7 lg:order-7">
                            <img src="/assets/img/gal/gal7.jpg" alt="" width="100%" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}