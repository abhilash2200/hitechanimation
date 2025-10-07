import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Russo_One, Poppins } from "next/font/google";

const russo = Russo_One({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const page = () => {
  return (
    <>
      <div className="bg-[#F4F4F4] pb-12 pt-24 lg:pb-12 lg:pt-32">
        <div className="conatiner mx-5 lg:mx-28 px-1 lg:px-5">
          <div className="my-3 lg:my-5">
            <h1
              className={`text-[25px] md:text-[32px] lg:text-[32px] ${russo.className}`}
            >
              About Us
            </h1>
          </div>
          <div
            className={`my-5 text-[13px] md:text-[16px] lg:text-[16px] ${poppins.className}`}
          >
            <p>
              Hi-Tech Animation is a leading content creation and Animation
              studio in India, with state-of-the-art production facilities in
              Kolkata and Mumbai. We work with esteemed global clients such as
              My Jove Corporation (US), Sony Yay, Nickelodeon, Byju’s, Cartoon
              Network, Zee News, Narayana, ABP Ananda, Zee Bangla, and the SITI
              Group. Our team of skilled professionals excels in Animation, VFX,
              filmmaking, and diverse content creation, consistently delivering
              exceptional results.
            </p>
            <p>
              Our expertise extends to producing curriculum-aligned Ed-Tech
              content for modern learning platforms, crafting impactful
              corporate communication videos to enhance business messaging, and
              creating compelling brand and advertisement videos that elevate
              marketing strategies. At Hi-Tech Animation, we take pride in
              delivering world-class visual content that drives value for
              clients worldwide.
            </p>
          </div>
          <div className="mt-12">
            <div className="flex flex-wrap justify-between gap-5">
              <div className="bg-white w-[100%] md:w-[48%] lg:w-[48%] p-5 lg:p-8 rounded-3xl">
                <div className="flex gap-3 lg:gap-5 mt-5 items-center">
                  <Link href="#">
                    <Image
                      className="img1"
                      src="/assets/img/Vector.jpg"
                      alt="logo"
                      width={36}
                      height={36}
                    />
                  </Link>
                  <h2
                    className={`text-[22px] md:text-[30px] lg:text-[30px] ${russo.className}`}
                  >
                    Mission
                  </h2>
                </div>
                <p
                  className={`mt-5 lg:mt-8 text-[13px] md:text-[16px] lg:text-[16px] ${poppins.className}`}
                >
                  Hi-Tech Animation's mission is to bring imagination to life
                  through exceptional Animation, VFX, and content creation. We
                  aim to inspire, educate, and entertain by delivering engaging
                  Ed-Tech content, impactful corporate videos, and captivating
                  visuals. Through creativity and innovation, we strive to be a
                  trusted partner for clients globally.
                </p>
              </div>
              <div className="bg-white w-[100%] md:w-[48%] lg:w-[48%] p-5 lg:p-8 rounded-3xl">
                <div className="flex gap-3 lg:gap-5 mt-5 items-center">
                  <Link href="#">
                    <Image
                      className="img1"
                      src="/assets/img/Vector.jpg"
                      alt="logo"
                      width={36}
                      height={36}
                    />
                  </Link>
                  <h2
                    className={`text-[22px] md:text-[30px] lg:text-[30px] ${russo.className}`}
                  >
                    Vision
                  </h2>
                </div>
                <p
                  className={`mt-5 lg:mt-8 text-[13px] md:text-[16px] lg:text-[16px] ${poppins.className}`}
                >
                  At Hi-Tech Animation, we envision a world where stories come
                  alive through captivating visuals and impactful content. We
                  excel in Ed-Tech content, corporate communication videos,
                  Animation, and VFX, empowering brands and businesses globally.
                  Our mission is to inspire, educate, innovate and collaborate setting
                  benchmarks in creativity and delivering excellence worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#D3575A] py-5 lg:pt-20 lg:pb-8">
        <div className="conatiner mx-5 lg:mx-28 px-1 lg:px-5">
          <div className="flex flex-wrap justify-center gap-10">
            <div className="w-[100%] md:w-[30%] lg:w-[30%]">
              <div className="relative">
                <Link className="" href="#">
                  <Image
                    src="/assets/img/Subtract.png"
                    alt="logo"
                    width={481}
                    height={482}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent rounded-b-[12px]"></div>
                  <div className="absolute bottom-3 right-5 lg:bottom-5 lg:right-5 text-white">
                    <h6
                      className={`text-[14sspx] md:text-[14px] lg:text-[20px] ${russo.className}`}
                    >
                      Mr. Subrata Roy
                    </h6>
                    <p
                      className={`text-[10px] md:text-[10px] lg:text-[12px] ${poppins.className}`}
                    >
                      Managing Director
                    </p>
                  </div>
                </Link>
              </div>
              <p
                className={`p-5 text-white text-[13px] md:text-[13px] lg:text-[16px] ${poppins.className}`}
              >
                The Founder and Managing Director of Hi-Tech Animation and
                Moople, Mr. Roy with 25 years of experience has founded the
                company with a single vision – to transform Kolkata as the
                Animation hub of the India. A veteran in the Animation industry,
                he guides the overall creative and aesthetic aspiration of the
                organization. A pillar of humility, honesty, integrity and
                empathy, he is the primary motivating force and the backbone
                behind all.
              </p>
            </div>
            <div className="w-[100%] md:w-[30%] lg:w-[30%]">
              <div className="relative">
                <Link className="" href="#">
                  <Image
                    src="/assets/img/Subtract2.png"
                    alt="logo"
                    width={481}
                    height={482}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent rounded-b-[12px]"></div>
                  <div
                    className={`absolute bottom-3 right-5 lg:bottom-5 lg:right-5 text-white ${russo.className}`}
                  >
                    <h6 className="text-[14sspx] md:text-[14px] lg:text-[20px]">
                      Mr. Anurag Chirmar
                    </h6>
                    <p
                      className={`text-[10px] md:text-[10px] lg:text-[12px] ${poppins.className}`}
                    >
                      Director
                    </p>
                  </div>
                </Link>
              </div>
              <p
                className={`p-5 text-white text-[13px] md:text-[13px] lg:text-[16px] ${poppins.className}`}
              >
                A director in SITI Group of Companies, Mr. Chirimar brings in a
                wealth of quantitative experience from the media industry. His
                excellent networking skills and ability to connect with the
                influencers in the industry has been a game changer for the
                organization. With a motto “All dreams can be fulfilled with
                hard work, honesty and immaculate planning” his ability to
                connect, motivate and inspire is exceptional.
              </p>
            </div>
            <div className="w-[100%] md:w-[30%] lg:w-[30%]">
              <div className="relative">
                <Link href="#">
                  <Image
                    src="/assets/img/Subtract3.png"
                    alt="logo"
                    width={481}
                    height={482}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent rounded-b-[12px]"></div>
                  <div
                    className={`absolute bottom-3 right-5 lg:bottom-5 lg:right-5 text-white ${russo.className}`}
                  >
                    <h6 className="text-[14px] md:text-[14px] lg:text-[20px]">
                      Mr. Prashant Chopra
                    </h6>
                    <p
                      className={`text-[10px] md:text-[10px] lg:text-[12px] ${poppins.className}`}
                    >
                      Director
                    </p>
                  </div>
                </Link>
              </div>
              <p
                className={`p-5 text-white text-[13px] md:text-[13px] lg:text-[16px] ${poppins.className}`}
              >
                A self-motivated and results driven director in PS Group of
                companies, Mr. Chopra sets the strategic direction for Moople.
                Mr. Chopra is an energetic entrepreneur with over 18 years of
                experience and holds a masters degree in FMBA from SP Jain
                Institute of Management & Research, Mumbai. He uses his
                expertise in Finance, Human Resource and Marketing and his
                strong leadership skills to drive the team towards excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='bg-[#F4F4F4] py-5 lg:py-24'>
        <div className='conatiner mx-5 lg:mx-28 px-1 lg:px-5'>
            <div className='flex flex-wrap justify-center gap-10'>
                <div className='w-[100%] md:w-[30%] lg:w-[30%]'>
                    <div className='relative'>
                        <Link href="#">
                            <Image src="/assets/img/Subtract4.png" alt="logo" width={481} height={482}/>
                            <div
                                className='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent rounded-b-[12px]'>
                            </div>
                            <div className={`absolute bottom-3 right-5 lg:bottom-5 lg:right-5 text-white ${russo.className}`}>
                                <h6 className="text-[14px] md:text-[14px] lg:text-[20px]">
                                    Mr. Ashish Thapar</h6>
                                <p className={`text-[10px] md:text-[10px] lg:text-[12px] ${poppins.className}`}>
                                    CEO</p>
                            </div>
                        </Link>
                    </div>
                    <p className={`p-5 text-[13px] md:text-[13px] lg:text-[16px] ${poppins.className}`}>
                        Mr. Thapar has been
                        into Animation & production business for over 20 years. Having worked on multiple projects of
                        international repute with leading studios like Disney, Vanguard Films, Sony Films, The Jim
                        Henson Company, RGH Entertainment and leading Indian production houses like Dharma Productions &
                        Yashraj Films has given him the opportunity to interact with some of the best creative talent
                        globally. </p>
                </div>
                <div className="w-[100%] md:w-[30%] lg:w-[30%]">
                    <div className="relative">
                        <Link href="#">
                            <Image src="/assets/img/Subtract5.png" alt="logo" width={481} height={482}/>
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent rounded-b-[12px]">
                            </div>
                            <div className={`absolute bottom-3 right-5 lg:bottom-5 lg:right-5 text-white ${russo.className}`}>
                                <h6 className="text-[14px] md:text-[14px] lg:text-[20px]">
                                    Mr. Manoj Bose</h6>
                                <p className={`text-[10px] md:text-[10px] lg:text-[12px] ${poppins.className}`}>
                                    Head of Production</p>
                            </div>
                        </Link>
                    </div>
                    <p className={`p-5 text-[13px] md:text-[13px] lg:text-[16px] ${poppins.className}`}>
                        Mr. Bose began his
                        career with Hi-Tech Animation as any other Animation student. This regular student however had
                        determination and dreams bigger than any ordinary student. Over the years, he has gained over 15
                        years of experience with end to end production at Hi-Tech Animation. He is an associate with the
                        organisation at present. He also leads the entire production team with zest and excellence.</p>
                </div>
                <div className="w-[100%] md:w-[30%] lg:w-[30%]">
                    <div className="relative">
                        <Link href="#">
                            <Image src="/assets/img/Subtract6.png" alt="logo" width={481} height={482}/>
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent rounded-b-[12px]">
                            </div>
                            <div className="absolute bottom-3 right-5 lg:bottom-5 lg:right-5 text-white">
                                <h6 className={`text-[14px] md:text-[14px] lg:text-[20px] ${russo.className}`}>
                                    MR Arun Thander</h6>
                                <p className={`text-[10px] md:text-[10px] lg:text-[12px] ${poppins.className}`}>
                                    Head of Animation</p>
                            </div>
                        </Link>
                    </div>
                    <p className={`p-5 text-[13px] md:text-[13px] lg:text-[16px] ${poppins.className}`}>
                        Mr. Thander has overall experience
                        of 10- years is designing & Animation , He is
                        leading the 3D Animation team, Having worked on multiple projects of national and international
                        repute with leading studios.</p>
                </div>
            </div>
        </div>
    </div>  */}
    </>
  );
};

export default page;
