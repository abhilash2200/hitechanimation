"use client";

import { useRouter } from 'next/navigation';
import { Russo_One, Poppins } from 'next/font/google';

const russo = Russo_One({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export default function Home() {
  const router = useRouter();

  const navigateToProjectTab = (tabIndex) => {
    router.push(`/projects?tab=${tabIndex}`);
  };

  return (
    <>
      <section className="bg-[url('/assets/img/banner/banner-hitech.jpg')] bg-cover bg-center h-[600px] lg:mt-[68px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="h-[600px] flex justify-center flex-col">
              <div className="bg-black bg-opacity-20 inline-block p-4 rounded-lg">
                <h1 className={`text-[25px] md:text-[32px] lg:text-[32px] text-white ${russo.className}`}>
                  Hi-Tech Animation<br />
                  Studio
                </h1>
                <p className={`text-white text-[15px] md:text-[20px] lg:text-[20px] pb-12 pt-6 ${poppins.className}`}>
                  An India based premier Animation and<br /> Motion Graphics studio in Kolkata
                </p>
                <div>
                  <a
                    className="text-white bg-[#C8181D] text-[13px] md:text-[16px] lg:text-[16px] px-8 py-3 rounded-lg"
                    href="/contact"
                  >
                    Contact With Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap gap-y-1">
          {[
            {
              title: "TELEVISION CARTOON PROGRAMMES",
              description:
                "Rated as one of the largest production houses in Eastern India",
              tabIndex: 1,
            },
            {
              title: "ED-TECH CONTENT",
              description:
                "Rated as one of the largest production houses in Eastern India",
              tabIndex: 2,
              bgColor: "bg-[#262626]",
              textColor: "text-white",
              buttonBgColor: "bg-[#FFF]",
              buttonTextColor: "text-[#000]",
            },
            {
              title: "CORPORATE COMMUNICATION VIDEOS",
              description:
                "Rated as one of the largest production houses in Eastern India",
              tabIndex: 3,
            },
            {
              title: "BRAND AND ADVERTISEMENT VIDEOS",
              description:
                "Rated as one of the largest production houses in Eastern India",
              tabIndex: 4,
              bgColor: "bg-[#262626]",
              textColor: "text-white",
              buttonBgColor: "bg-[#FFF]",
              buttonTextColor: "text-[#000]",
            },
          ].map(({ title, description, tabIndex, bgColor = '', textColor = '', buttonBgColor = 'bg-[#C8181D]', buttonTextColor = 'text-white' }, index) => (
            <div key={index} className={`w-[100%] md:w-[50%] lg:w-[25%] ${bgColor}`}>
              <div className="h-[250px] flex justify-center flex-col px-12 my-10">
                <h2 className={`text-[17px] md:text-[20px] lg:text-[20px] ${textColor} ${russo.className}`}>
                  {title}
                </h2>
                <p className={`text-[13px] pt-6 pb-12 leading-[20px] ${textColor} ${poppins.className}`}>
                  {description}
                </p>
                <button
                  className={`${buttonTextColor} ${buttonBgColor} text-[13px] lg:text-[16px] px-8 py-3 rounded-lg`}
                  onClick={() => navigateToProjectTab(tabIndex)}
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F4F4F4] py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-[100%] md:w-[70%] lg:w-[50%]">
              <img
                className="rounded-l-[20px]"
                src="/assets/img/home/about-us.jpg"
                alt=""
                width="100%"
                height="100%"
              />
            </div>
            <div className="w-[100%] md:w-[70%] lg:w-[40%] flex justify-center flex-col bg-[#fff] rounded-r-[20px] pb-12">
              <div className="px-8 lg:px-16">
                <div className="pt-8">
                  <h2 className={`text-[22px] md:text-[30px] lg:text-[30px] ${russo.className}`}>About Us</h2>
                  <p className={`text-[14px] pb-16 pt-3 ${poppins.className}`}>
                    Hi-Tech Animation is an India-based animation production studio with a state-of-the-art production
                    facility located in Kolkata and Mumbai...
                  </p>
                </div>
                <a className="text-white bg-[#C8181D] text-[13px] lg:text-[16px] px-8 py-3 rounded-lg" href="/about">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="pb-12">
            <h2 className={`text-[22px] md:text-[30px] lg:text-[30px] ${russo.className}`}>Our Clients & Broadcasters</h2>
          </div>
          <div className="flex flex-wrap border-2 p-16 rounded-[20px] relative">
            {/* Client Logos */}
            {['abp', 'byjus', 'cn', 'narayana', 'netflix', 'nick', 'pogo', 'sonic', 'sony', 'viacom', 'zee-bangla', 'zee-news'].map((logo, index) => (
              <div key={index} className={`w-[50%] lg:w-[25%] px-2 ${index < 8 ? 'border-b-2' : ''} ${index % 4 !== 3 ? 'border-r-2' : ''}`}>
                <img className="block mx-auto" src={`/assets/img/partner/${logo}.png`} alt={logo} width="160" height="160" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F4] py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-[70%] lg:w-[40%] bg-[#262626] flex justify-center flex-col rounded-l-[20px] pt-12 pb-16 order-2 lg:order-1">
              <div className="px-12">
                <div className="mb-12">
                  <h2 className={`text-[22px] md:text-[30px] lg:text-[30px] text-[#fff] mb-8 ${russo.className}`}>
                    Creative<br /> Partnership
                  </h2>
                  <h3 className={`text-[16px] text-[#fff] mb-8 ${poppins.className}`}>WE CREATE and also we take care of everything else!</h3>
                  <p className={`text-[12px] text-[#fff] leading-[25px] ${poppins.className}`}>
                    Be a part of the fastest growing vertical in the education industry. low investment franchise business
                  </p>
                </div>
                <a className="text-white bg-[#C8181D] text-[13px] lg:text-[16px] px-8 py-3 rounded-lg" href="/contact">
                  Request A Call
                </a>
              </div>
            </div>
            <div className="w-full md:w-[70%] lg:w-[40%] order-1 lg:order-2">
              <img
                className="rounded-r-[20px]"
                src="/assets/img/home/handshake.jpg"
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
