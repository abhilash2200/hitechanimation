// In your component file, e.g., Page.js
"use client";
import React, { useState } from 'react';
import { Russo_One, Poppins } from 'next/font/google';

const russo = Russo_One({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

const Page = () => {
  const [showContactForm, setShowContactForm] = useState(true);

  const handleShowContactForm = () => {
    setShowContactForm(true);
  };

  const handleShowPartnerForm = () => {
    setShowContactForm(false);
  };

  return (
    <div>
      <div className="bg-[#F4F4F4] py-32 lg:py-32">
        <div className="container mx-auto px-6 lg:px-24">
          <div className={`text-[25px] md:text-[32px] lg:text-[32px] my-1 lg:my-3 ${russo.className}`}>
            <h1>{/* Let’s Connect<br />To Do Great Things */}</h1>
          </div>
          <div className="flex flex-wrap my-1 lg:my-12 gap-10 md:gap-3 lg:gap-8">
            <div
              className="bg-[#525252] w-[100%] md:w-[48%] lg:w-[48%] text-white px-5 py-10 rounded-3xl md:h-[653px] lg:h-[800px]"
            >
              {/* Contact Information Section */}
              <div className={`text-[22px] md:text-[28px] lg:text-[28px] my-1 lg:my-2 ${russo.className}`}>
                <h2>Get in Touch</h2>
              </div>
              {/* Contact Information for each location */}
              {[
                {
                  title: "HI-TECH FILM & BROADCAST ACADEMY PRIVATE LIMITED : KOLKATA",
                  address: `113A, Matheswartala Road\nTopsia (Near Axis Bank & ILead College Campus)\nKolkata: 700046`,
                  email: ["Productioninfo@hitechanimation.com","chandan.bose@hitechanimation.com"],
                  phone: "+91 9147077609",
                },
                {
                  title: "HI-TECH FILM & BROADCAST ACADEMY PRIVATE LIMITED : MUMBAI",
                  address: `91 Springboard Business Hub 74/ll,"C" Cross Road,\nOpp Gate No 2 Seepz, Andheri East Mumbai\nMaharashtra 400093`,
                  email: ["ashish@hitechanimation.com"],
                },
                /* {
                  title: "Corporate Office: Kolkata",
                  address: `1/424 Gariahat Road, Bank Of India building\n(2nd Floor) Kolkata-68`,
                  email: ["Productioninfo@hitechanimation.com","chandan.bose@hitechanimation.com"],
                  phone: "+91 9147077609",
                }, */
              ].map((location, index) => (
                <div key={index}>
                  <div className={`text-[15px] md:text-[18px] lg:text-[20px] my-1 lg:my-5 flex justify-between ${russo.className}`}>
                    <h2>{location.title}</h2>
                    <img src="/assets/img/material-symbols-light_directions-outline.png" alt="" className="h-6 lg:h-8" />
                  </div>
                  <p className={`my-1 lg:my-3 text-[11px] md:text-[14px] lg:text-[16px] whitespace-pre-line ${poppins.className}`}>
                    {location.address}
                  </p>
                  <p className={`my-1 lg:my-3 text-[11px] md:text-[14px] lg:text-[16px] ${poppins.className}`}>Email: {location.email[0]}<br/><span className='pl-35px md:pl-0px lg:pl-51px'>{location.email[1]}</span></p>
                  {location.phone && (
                    <p className={`my-1 lg:my-3 text-[11px] md:text-[14px] lg:text-[16px] ${poppins.className}`}>Phone No: {location.phone}</p>
                  )}
                  <hr className={index < 2 ? "" : "lg:mb-32"} />
                </div>
              ))}
            </div>

            {/* Form Section */}
            <div className="w-[100%] md:w-[48%] lg:w-[48%] text-white rounded-3xl">
              <div className="flex justify-between gap-5 lg:gap-0 cursor-pointer">
                <button
                  id="contact-tab"
                  className={`${
                    showContactForm ? "bg-white text-red-600" : "text-black bg-[#F4F4F4]"
                  } text-[12px] w-full md:text-[20px] lg:text-[24px] p-3 lg:p-5 rounded-t-[20px] ${russo.className}`}
                  onClick={handleShowContactForm}
                >
                  Contact Us
                </button>
                <button
                  id="partner-tab"
                  className={`${
                    !showContactForm ? "bg-white text-red-600" : "text-black bg-[#F4F4F4]"
                  } text-[12px] w-full md:text-[20px] lg:text-[24px] p-2 lg:p-5 rounded-t-[20px] ${russo.className}`}
                  onClick={handleShowPartnerForm}
                >
                  Partner With Us
                </button>
              </div>

              <div className={`text-[10px] md:text-[14px] lg:text-[16px] ${poppins.className}`}>
                {/* Conditionally Render Forms */}
                {showContactForm ? (
                  <form
                    id="contact-form"
                    className="p-5 lg:p-10 bg-white rounded-b-[20px] rounded-tr-[20px] md:h-[600px] lg:h-[725px]"
                  >
                    {/* Contact Us Form */}
                    {["Full Name", "Email Address", "Phone Number", "Location"].map((placeholder, index) => (
                      <div key={index} className="mb-5 lg:mb-8">
                        <input
                          type={placeholder === "Email Address" ? "email" : "text"}
                          placeholder={placeholder}
                          className="w-full border-b border-gray-400 px-2 py-2 text-black"
                        />
                      </div>
                    ))}
                    <div className="mb-5 lg:mb-8">
                      <select id="services" name="services" autoComplete="country-name" className="w-full border-b border-gray-400 px-2 py-2 text-black">
                        <option>Services</option>
                        <option value="Television Cartoon Programmes">Television Cartoon Programmes</option>
                        <option value='ED-Tech Content'>ED-Tech Content</option>
                        <option value="Corporate Communication Videos">Corporate Communication Videos</option>
                        <option value="Brand and Advertisement Videos">Brand and Advertisement Videos</option>
                        <option value="University Tie-Up">University Tie-Up</option>
                      </select>
                    </div>
                    <div className="mb-5 lg:mb-8">
                      <textarea
                        placeholder="Message"
                        className="w-full border-b border-gray-400 px-2 py-2 text-black"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="bg-red-600 text-white w-[50%] md:w-[50%] lg:w-[40%] text-[13px] lg:text-[16px] px-8 py-3 rounded-md hover:bg-red-700"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                ) : (
                  <form
                    id="partner-form"
                    className="p-5 lg:p-10 bg-white rounded-b-[20px] rounded-tl-[20px] md:h-[600px] lg:h-[725px]"
                  >
                    {/* Partner With Us Form */}
                    {["University Name", "Email", "Phone Number", "Address"].map(
                      (placeholder, index) => (
                        <div key={index} className="mb-5 lg:mb-8">
                          <input
                            type={placeholder === "Email Address" ? "email" : "text"}
                            placeholder={placeholder}
                            className="w-full border-b border-gray-400 px-2 py-2 text-black"
                          />
                        </div>
                      )
                    )}
                
                    <div className="mb-5 lg:mb-8">
                      <textarea
                        placeholder="Your Query"
                        className="w-full border-b border-gray-400 px-2 py-2 text-black"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="bg-red-600 text-white w-[50%] md:w-[50%] lg:w-[40%] text-[13px] lg:text-[16px] px-8 py-3 rounded-md hover:bg-red-700"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
