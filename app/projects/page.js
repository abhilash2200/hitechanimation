"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Russo_One, Poppins } from 'next/font/google';

const russo = Russo_One({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });






const VideoTabs = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPlayingVideo, setCurrentPlayingVideo] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  const videoRefs = useRef([]);
  const playButtonRefs = useRef([]);


  useEffect(() => {
    // Check the `tab` query parameter and set active tab
    const tabParam = searchParams.get("tab");
    if (tabParam) {
      setActiveTab(Number(tabParam)); // Set active tab based on query parameter
    }
  }, [searchParams]);

  const handleTabClick = (tabIndex) => {
    // Pause all videos when switching tabs
    videoRefs.current.forEach((video) => {
      if (video) video.pause();
    });
    setActiveTab(tabIndex);
    router.push(`?tab=${tabIndex}`); // Update query parameter
  };



  const togglePlayPause = (index) => {
    const videoElement = videoRefs.current[index];
    const playButtonContainer = playButtonRefs.current[index];

    // Pause any other currently playing video
    if (currentPlayingVideo && currentPlayingVideo !== videoElement) {
      const currentIndex = videoRefs.current.indexOf(currentPlayingVideo);
      videoRefs.current[currentIndex].pause();
      videoRefs.current[currentIndex].removeAttribute('controls');
      playButtonRefs.current[currentIndex].style.display = 'flex';
    }

    // Toggle play/pause for the selected video
    if (videoElement.paused) {
      videoElement.play();
      videoElement.setAttribute('controls', ''); // Show controls when playing
      playButtonContainer.style.display = 'none'; // Hide play button
      setCurrentPlayingVideo(videoElement);
    } else {
      videoElement.pause();
      videoElement.removeAttribute('controls'); // Remove controls when paused
      playButtonContainer.style.display = 'flex'; // Show play button
      setCurrentPlayingVideo(null);
    }
  };

  const tabs = [
    {
      tabName: "Television Cartoon Programmers",
      cards: [
        {
          title: ["TELEVISION CARTOON PROGRAMMES"],
          discription: "Hitech Animation delivers captivating 2D and 3D animated content for leading TV channels, designed to engage and entertain diverse audiences with creativity and precision.",
          chname: "The Pandavas",
          channel: "Cartoon Network (Warner Media)",
          medium: "3D Animation",
          outline: `The story revolves round 5 Pandavs along with there rival brothers Kaourav’s and there guru Dronacharya.
                    These 5 Pandavs are popular because of there knowledge, honesty and there respect for others. On the otherside Kaurav’s envy the pandavs and tried to overcome the popularity of them. But there evil intention were left unfulfilled every time.`,
          videoSrc: "/assets/video/PANDAVAS.mov",
          poster: "/assets/img/project/01.png",
        },
        {
          title: ["TELEVISION CARTOON PROGRAMMES"],
          discription: "",
          chname: "Chikoo aur Bunty ",
          channel: "Nickelodeon",
          medium: "2D Animation",
          outline: `Chikoo and Bunty are two brothers. Chikoo is an 11-year-old Virat Kohli fan whereas Bunty is a 10-year-old dance freak.
                    The show is a delightful slice of life that revolves around these two brothers, who are constantly competing with each other. From trying to convince their perpetually tired father, Mr. Batra, their discipline-seeking mother, Mrs. Batra, and further involving their dear dog, Barfi, their sibling rivalry causes nothing but pure mayhem in their house.`,
          videoSrc: "/assets/video/2D-SHOWREEL-hitech-animation.mp4",
          poster: "/assets/img/project/02.png",
        },
        {
          title: ["TELEVISION CARTOON PROGRAMMES"],
          discription: "",
          chname: "Abhimanyu",
          channel: "Nickelodeon",
          medium: "3D Animation",
          outline: `The series is a comedy action, presenting Abhimanyu, both in the form of a 12 year old boy as well as The Alien. It will showcase his journey of fitting in with the humansin making friends with them along with three member team from his planet Naveen, Kookie & Arya all in both Human & Alien form.`,
          videoSrc: "/assets/video/ABHIMANYU.mov",
          poster: "/assets/video/thumb/abhimanyu.jpg",
        },
        {
          title: ["TELEVISION CARTOON PROGRAMMES"],
          discription: "",
          chname: "Shiva",
          channel: "Nickelodeon",
          medium: "3D Animation",
          outline: `A young super boy who lives with his grand parents in a fictional city named Vada city, he uses his heroic skill and
                    sifi gadgets to protect his city from all odds along with his friends Reva, Adi, Udi. A young super boy who lives with his grand parents in a fictional city named Vada city, he uses his heroic skill and sifi gadgets to protect his city from all odds along with his friends Reva, Adi, Udi.`,
          videoSrc: "/assets/video/SHIVA.mov",
          poster: "/assets/img/project/04.png",
        },
        {
          title: ["TELEVISION CARTOON PROGRAMMES"],
          discription: "",
          chname: "Ekans",
          channel: "Cartoon Network  (Warner Media)",
          medium: "3D Animation",
          outline: `Ekans, a cool 13 year old boy living in the metropolitan city of Mumbai is the “Chosen One” to possess the Naagmani by the group of most powerful snakes in the world, The Naagmani gives him snake powers that are heightened vision, sensitive to sound and vibrations, healing very quickly and also camouflaging. With these powers and a heart of gold, Ekans fights every possible evil and keep humanity safe.`,
          videoSrc: "/assets/video/BHOOT-BANDHUS.mov",
          poster: "/assets/img/project/05.png",
        },
        {
          title: ["TELEVISION CARTOON PROGRAMMES"],
          discription: "",
          chname: "Taarak Mehta ka ulta chashma",
          channel: "Sony",
          medium: "3D Animation",
          outline: `The series takes place at the Gokuldham Co-operative Housing Society, an apartment complex  and centers around the members of Gokuldham Society. The Gada Family consists of a successful businessman Jethalal Champaklal Gada, who owns "Gada Electronics", his father Champaklal, his wife Daya Gada and their naughty son Tipendra "Tapu" Gada, who is the leader of his friend circle called "Tapu Sena"(Tapu's Army).`,
          videoSrc: "/assets/video/TARAK MEHTA.mov",
          poster: "/assets/img/project/06.png",
        },
        {
          title: ["TELEVISION CARTOON PROGRAMMES"],
          discription: "",
          chname: "Bhoot Bandhus",
          channel: "Nickelodeon",
          medium: "3D Animation",
          outline: `A 11 year old boy Pinaki, raised by a family of Ghosts within the four walls of a mansion, decides to step out for the first time into the real world. This is where the things go crazy and ghostly funny!`,
          videoSrc: "/assets/video/BHOOT-BANDHUS.mov",
          poster: "/assets/img/project/07.png",
        },
        {
          title: ["TELEVISION CARTOON PROGRAMMES"],
          discription: "",
          chname: "Guru Aur Bhole",
          channel: "Netflix/Sony YAY",
          medium: "2D Animation",
          outline: `Hi-Tech Animation’s one of the most successful shows, Guru Aur Bhole has been a benchmark show. Creating a fun tune between two characters who sing and dance; the show revolves around them getting in sticky situations and how they deal with it. A fun watch for children and brings a smile on every face who watches it.`,
          videoSrc: "/assets/video/GURU-BHOLE.mov",
          poster: "/assets/video/thumb/guru-aur-bhole.jpg",
        },
      ],
    },
    {
      tabName: "ED-Tech Content",
      cards: [
        {
          title: ["ED-TECH CONTENT"],
          discription: "We collaborate with top ed-tech platforms and educational institutions to produce high-quality educational content that enhances learning and fosters meaningful engagement.",
          chname: "Content Creation for Post Graduate Students",
          channel: "My Jove Corporation (United Stated of America)",
          medium: "Motion graphics, 2D Animation",
          outline: `We create educational video content for postgraduate students, designed to enhance learning and assist with practical notetaking. Our videos cover a variety of subjects, including Microeconomics, Marketing, Nursing, Medical and Surgical Nursing, Psychology, Finance, and more. By providing high-quality, subject-specific resources, we aim to support students in their academic pursuits, helping them better understand key concepts and succeed in their postgraduate programs.`,
          videoSrc: "/assets/video/jove.mp4",
          poster: "/assets/video/thumb/jove.jpg",
        },
        {
          title: ["ED-TECH CONTENT"],
          discription: "",
          chname: "Content Creation for K-12",
          channel: "Narayana Group",
          medium: "Motion graphics, 2D Animation",
          outline: `We are developing content for the Narayana Group, covering subjects from Class 7 to Class 10. Our approach incorporates 3D Animation, 2D Animation, and motion graphics to create engaging and interactive learning materials that enhance the educational experience for students.`,
          videoSrc: "/assets/video/NARAYANA School.mov",
          poster: "/assets/video/thumb/content-creation.jpg",
        },
        {
          title: ["ED-TECH CONTENT"],
          discription: "",
          chname: "Byju’s",
          channel: "Byjus",
          medium: "3D & 2D Animation",
          outline: `Byju’s is India's largest Ed-tech company, it is the most loved school learning app.
                    Hi-Tech Animation works closely with Byjus, we help them edit and composite their videos. We also design 2D and 3D artworks for them.`,
          videoSrc: "/assets/video/byjus.mp4",
          poster: "/assets/video/thumb/byjus.jpg",
        },
        {
          title: ["ED-TECH CONTENT"],
          discription: "",
          chname: "Content for Class 7-12 in Bangla",
          channel: "Tutopia",
          medium: "3D & 2D Animation",
          outline: `Tutopia is West Bengal's largest Ed-tech company, it is the most loved school learning app. Hi-Tech Animation works closely with Byjus, we help them in end to end edit and composite their videos. We also design 2D and 3D artworks for them.`,
          videoSrc: "/assets/video/Tutopia-Promo-2.mp4",
          poster: "/assets/video/thumb/tutopia.jpg",
        },
      ],
    },
    {
      tabName: "Corporate communucation videos",
      cards: [
        {
          title: ["CORPORATE COMMUNICATION VIDEOS"],
          discription: "Our team creates impactful corporate communication and explainer videos, helping businesses convey their messages clearly and effectively for internal and external audiences.",
          chname: "Corporate Communication",
          channel: "ABP",
          medium: "3D Animation",
          outline: `We have developed various visual communication modules for different shows of ABP Ananda`,
          videoSrc: "/assets/video/ABP_PROMO.mov",
          poster: "/assets/video/thumb/corporate-communication.jpg",
        },
       /*  {
          title: ["CORPORATE COMMUNICATION VIDEOS"],
          discription: "",
          chname: "Corporate Communication",
          channel: "PS Group",
          medium: "3D Animation / Motion Graphics",
          outline: `We have developed various visual communication modules for different departments of ABP Ananda`,
          videoSrc: "/assets/video/10.mp4",
          poster: "/assets/video/thumb/ps-group.jpg",
        }, */
        {
          title: ["CORPORATE COMMUNICATION VIDEOS"],
          discription: "",
          chname: "YouTube Communication",
          channel: "Siti Cable",
          medium: "Live Action / Motion Graphics",
          outline: `We have developed various visual communication modules for all the YouTube Channel of Siti Media group.`,
          videoSrc: "/assets/video/siti-cinema.mp4",
          poster: "/assets/video/thumb/siti-channel.jpg",
        },
      ],
    },
    {
      tabName: "Brand And Advertisement Videos",
      cards: [
       /*  {
          title: ["BRAND AND ADVERTISEMENT VIDEOS"],
          discription: "From brand storytelling to advertising content, Hitech Animation crafts visually compelling narratives that amplify brand identity and connect with target audiences.",
          chname: "FAFA",
          channel: "FAFA",
          medium: "Live Action / Motion Graphics",
          outline: `We have developed the promotional Contents for this international client.`,
          videoSrc: "/assets/video/13.mp4",
          poster: "/assets/img/Rectangle 738.png",
        }, */
        {
          title: ["BRAND AND ADVERTISEMENT VIDEOS"],
          discription: "",
          chname: "Marketing Commercial Video",
          channel: "Annapurna Chips",
          medium: "3D Animation / Motion Graphics",
          outline: `We have developed the TV/ Social Media Commercial for the Annapurna Chips (one of the famous Snacks Brand in West Bengal).`,
          videoSrc: "/assets/video/ANNAPURNA CHIPS.mov",
          poster: "/assets/video/thumb/annapurna-chips.jpg",
        },
        {
          title: ["BRAND AND ADVERTISEMENT VIDEOS"],
          discription: "",
          chname: "YouTube Communication",
          channel: "Vivo",
          medium: "Live Action / Motion Graphics",
          outline: `We have developed the Social Media Advertisement and Product promotional Video for VIVO mobiles.`,
          videoSrc: "/assets/video/VIVO PHONE commercial.mov",
          poster: "/assets/video/thumb/vivo.jpg",
        },
        {
          title: ["BRAND AND ADVERTISEMENT VIDEOS"],
          discription: "",
          chname: "Government of Qatar",
          channel: "Govt of Qatar",
          medium: "Live Action / VFX / Motion Graphics",
          outline: `We have developed the communication and transformation video cum New Government logo release for Government of Qatar.`,
          videoSrc: "/assets/video/qatar govt.mov",
          poster: "/assets/video/thumb/gov-of-qatar.jpg",
        },
      ],
    },
  ];

  return (
    <div className="bg-[#F4F4F4] py-32 lg:py-32">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="my-3 lg:my-5">
          <h1 className="text-[25px] md:text-[32px] lg:text-[32px]">
            <span className={`block ${russo.className}`}>{tabs[activeTab - 1].cards[0].title[0]}</span>
            <span className={`block ${russo.className}`}>{tabs[activeTab - 1].cards[0].title[1]}</span>
          </h1>
          <div className={`text-[13px] md:text-[16px] lg:text-[16px] my-5 ${poppins.className}`}>
            <p>
              {tabs[activeTab - 1].cards[0].discription}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 my-5 lg:my-6">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`text-center rounded-lg ${activeTab === index + 1 ? "bg-[#C8181D] text-white md:w-auto w-[100%] lg:w-auto text-center rounded-lg" : "bg-white md:w-auto w-[100%] lg:w-auto text-center rounded-lg"
                }`}
            >
              <button id="${(index + 1)}"
                className="tab-button px-5 py-2 text-[13px] md:text-[16px] lg:text-[16px]"
                onClick={() => handleTabClick(index + 1)}
              >
                {tab.tabName}
              </button>
            </div>
          ))}
        </div>

        {tabs.map((tab, tabIndex) => (
          <div
            key={tabIndex}
            className={`tab-content bg-white mt-10 ${activeTab === tabIndex + 1 ? "block" : "hidden"
              }`}
          >
            <div className="bg-[#F4F4F4]">
              {tab.cards.map((card, cardIndex) => {
                const isEvenCard = cardIndex % 2 === 0;
                return (
                  <div
                    key={cardIndex}
                    className="card bg-white p-3 lg:p-8 mt-10 rounded-xl"
                  >
                    {isEvenCard ? (
                      <>
                        <div className="flex flex-wrap justify-between gap-5">
                          <div className="w-[100%] md:w-[50%] lg:w-[50%]">
                            <h2 className={`text-[#C8181D] text-[20px] md:text-[22px] lg:text-[26px] ${russo.className}`}>
                              {card.chname}
                            </h2>
                            <p className={`text-[14px] md:text-[14px] lg:text-[16px] mt-1 ${poppins.className}`}>
                              Channel Name: {card.channel}
                            </p>
                            <p className={`text-[14px] md:text-[14px] lg:text-[16px] mt-1 ${poppins.className}`}>
                              Medium: {card.medium}
                            </p>
                            <h2 className={`text-[#C8181D] text-[20px] md:text-[20px] lg:text-[24px] mt-4 ${russo.className}`}>
                              Project Outline
                            </h2>
                            <p className={`mt-1 text-[13px] md:text-[13px] lg:text-[16px] ${poppins.className}`}>
                              {card.outline}
                            </p>
                            
                          </div>
                          <div className="w-[100%] md:w-[47%] lg:w-[48%] order-first md:order-last lg:order-last">
                            <div className="relative">
                              <video
                                ref={(el) => (videoRefs.current[tabIndex * 10 + cardIndex] = el)}
                                src={card.videoSrc}
                                poster={card.poster}
                                className="w-full h-auto rounded-xl"
                                onClick={() => togglePlayPause(tabIndex * 10 + cardIndex)}
                                onEnded={() => {
                                  playButtonRefs.current[tabIndex * 10 + cardIndex].style.display = 'flex';
                                  videoRefs.current[tabIndex * 10 + cardIndex].removeAttribute('controls');
                                  setCurrentPlayingVideo(null);
                                }}
                              />
                              <div
                                ref={(el) => (playButtonRefs.current[tabIndex * 10 + cardIndex] = el)}
                                onClick={() => togglePlayPause(tabIndex * 10 + cardIndex)}
                                style={{ display: 'flex' }}
                                className="play-button-container absolute bottom-5 right-5 cursor-pointer"
                              >
                                <img src="/assets/img/play.png" alt="Play" className="w-12 h-12" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-wrap justify-between gap-5">
                          <div className="w-[100%] md:w-[47%] lg:w-[48%]">
                            <div className="relative">
                              <video
                                ref={(el) => (videoRefs.current[tabIndex * 10 + cardIndex] = el)}
                                src={card.videoSrc}
                                poster={card.poster}
                                className="w-full h-auto rounded-xl"
                                onClick={() => togglePlayPause(tabIndex * 10 + cardIndex)}
                                onEnded={() => {
                                  playButtonRefs.current[tabIndex * 10 + cardIndex].style.display = 'flex';
                                  videoRefs.current[tabIndex * 10 + cardIndex].removeAttribute('controls');
                                  setCurrentPlayingVideo(null);
                                }}
                              />
                              <div
                                ref={(el) => (playButtonRefs.current[tabIndex * 10 + cardIndex] = el)}
                                onClick={() => togglePlayPause(tabIndex * 10 + cardIndex)}
                                style={{ display: 'flex' }}
                                className="play-button-container absolute bottom-5 right-5 cursor-pointer"
                              >
                                <img src="/assets/img/play.png" alt="Play" className="w-12 h-12" />
                              </div>
                            </div>
                          </div>
                          <div className="w-[100%] md:w-[50%] lg:w-[50%]">
                            <h2 className={`text-[#C8181D] text-[20px] md:text-[22px] lg:text-[26px] ${russo.className}`}>
                              {card.chname}
                            </h2>
                            <p className={`text-[14px] md:text-[14px] lg:text-[16px] mt-1 ${poppins.className}`}>
                              Channel Name: {card.channel}
                            </p>
                            <p className={`text-[14px] md:text-[14px] lg:text-[16px] mt-1 ${poppins.className}`}>
                              Medium: {card.medium}
                            </p>
                            <h2 className={`text-[#C8181D] text-[20px] md:text-[20px] lg:text-[24px] mt-4 ${russo.className}`}>
                              Project Outline
                            </h2>
                            <p className={`mt-1 text-[13px] md:text-[13px] lg:text-[16px] ${poppins.className}`}>
                              {card.outline}
                            </p>
                           
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoTabs;
