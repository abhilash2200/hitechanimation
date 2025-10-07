"use client";
import React, { useState } from 'react';
import { Russo_One, Poppins } from 'next/font/google';

const russo = Russo_One({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

const page = () => {
  // Define an array for button and card data
  const data = [
    { buttonLabel: 'All', target: 'all' },
    { 
      card:1,
      buttonLabel: '3D Animator', 
      target: 'card-1', 
      content: 'Senior 3D Animator', 
      skills: 'Certified in 3D Animation', 
      jobDesc: 'Hi-Tech Animation is an India based Animation production studio with a state-of-the-art production facility with offices located at Kolkata and Mumbai. Other than having a production company, Hi-Tech Animation has a line of premier training institutes in Eastern India.', 
      positions: 1
    },
    { 
      card:2,
      buttonLabel: 'Lighting Artist', 
      target: 'card-2', 
      content: 'Senior Lighting Artist', 
      skills: 'Certified in Lighting Animation', 
      jobDesc: 'Hi-Tech Animation is an India based Animation production studio with a state-of-the-art production facility with offices located at Kolkata and Mumbai. Other than having a production company, Hi-Tech Animation has a line of premier training institutes in Eastern India.', 
      positions: 2 
    },
    { 
      card:3,
      buttonLabel: 'Storyboard Artist', 
      target: 'card-3', 
      content: 'Senior Storyboard Artist', 
      skills: 'Skilled in Storyboard', 
      jobDesc: 'Hi-Tech Animation is an India based Animation production studio with a state-of-the-art production facility with offices located at Kolkata and Mumbai. Other than having a production company, Hi-Tech Animation has a line of premier training institutes in Eastern India.', 
      positions: 3 
    },
    { 
      card:4,
      buttonLabel: 'Compositor', 
      target: 'card-4', 
      content: 'Senior Compositor', 
      skills: 'Certified in Compositing', 
      jobDesc: 'Hi-Tech Animation is an India based Animation production studio with a state-of-the-art production facility with offices located at Kolkata and Mumbai. Other than having a production company, Hi-Tech Animation has a line of premier training institutes in Eastern India.', 
      positions: 4 
    },
  ];

  // State to keep track of the selected target for filtering
  const [selectedTarget, setSelectedTarget] = useState('all');

  const handleButtonClick = (target) => {
    setSelectedTarget(target);
  };

  return (
    <>
      <div className="bg-[#F4F4F4] py-32 lg:py-32">
        <div className="container mx-auto px-6 lg:px-24">
          <div className={`text-[25px] md:text-[32px] lg:text-[32px] my-3 lg:my-5 ${russo.className}`}>
            <h1>Career at Hi-Tech<br />Production House</h1>
          </div>
          <p className={`my-3 lg:my-5 text-[13px] md:text-[16px] lg:text-[16px] ${poppins.className}`}>
            Hi-Tech Animation is an India based Animation production studio with a state-of-the-art production facility with offices located at Kolkata and Mumbai. Other than having a production company, Hi-Tech Animation has a line of premier training institutes in Eastern India.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 my-5 lg:my-12 text-[13px] lg:text-[16px]">
            {data.map((item, index) => (
              <div
                key={index}
                className={`${selectedTarget === item.target ? 'bg-[#C8181D] text-white' : 'bg-white text-black'} w-[100%] md:w-[18%] lg:w-[15%] flex justify-center rounded-lg`}
              >
                <button
                  className={`tab-button w-full py-2 cursor-pointer ${russo.className}`}
                  onClick={() => handleButtonClick(item.target)}
                >
                  {item.buttonLabel}
                </button>
              </div>
            ))}
          </div>

          {/* Cards */}
          <div className="flex flex-wrap justify-between gap-y-20 mt-20">
            {data
              .filter((item) => selectedTarget === 'all' || item.target === selectedTarget)
              .filter((item) => item.target !== 'all') // Exclude 'All' button item from cards
              .map((item, index) => (
                <div key={index} className={`card ${item.target} w-[100%] md:w-[48%] lg:w-[48%]`}>
                  <div className="bg-white rounded-xl p-3 lg:p-6 w-full">
                    <div className="flex items-start mb-4">
                      <h1 className={`bg-[#C8181D] text-white rounded-md text-center p-4 w-20 h-20 lg:h-24 -mt-12 flex items-center justify-center text-2xl ${russo.className}`}>
                        {item.card}
                      </h1>
                      <div className="ml-4">
                        <h2 className={`text-[16px] lg:text-[20px] text-black ${russo.className}`}>{item.content}</h2>
                        <p className={`text-gray-500 text-[13px] lg:text-[16px] ${poppins.className}`}>
                          Skills required: {item.skills}
                        </p>
                      </div>
                    </div>
                    <h3 className={`text-[#C8181D] mb-2 text-[14px] lg:text-[18px] ${russo.className}`}>Job Description</h3>
                    <p className={`text-gray-600 mb-4 text-[13px] lg:text-[16px] ${poppins.className}`}>{item.jobDesc}</p>
                    <p className={`text-gray-700 mb-4 text-[13px] lg:text-[16px] ${poppins.className}`}>No of Positions: {item.positions}</p>
                    <div className="text-center">
                      <button className={`bg-[#C8181D] text-[13px] lg:text-[16px] text-white px-6 py-2 rounded-md hover:bg-red-700 focus:outline-none flex items-center justify-center ${poppins.className}`}>
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
