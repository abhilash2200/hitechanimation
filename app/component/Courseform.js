"use client";

import React, { useRef } from 'react';

const Courseform = ({ closeForm }) => {  // Corrected here

    const modalRef = useRef(null);

    const handleOverlayClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeForm(); // Close if clicked outside the modal
        }
    };

    const handleCloseClick = (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the overlay click handler
        closeForm();
    };

    return (
        <main>
            <div
                className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50"
                onClick={handleOverlayClick}
            >
                <div
                    ref={modalRef}
                    className="relative flex justify-center w-[90%] md:w-[50%] lg:w-[50%] items-center mt-[16px] lg:mt-16"
                >
                    <button
                        className="absolute hidden md:flex lg:flex top-3 right-5 text-2xl cursor-pointer"
                        onClick={handleCloseClick}
                    >
                        x
                    </button>
                    <form
                        id="contact-form"
                        className="p-5 lg:p-10 bg-white rounded-b-[20px] rounded-t-[20px] w-[100%]"
                    >
                        {["University Name", "Email Address", "Phone Number", "Location"].map((placeholder, index) => (
                            <div key={index} className="mb-5 lg:mb-8">
                                <input
                                    type={placeholder === "Email Address" ? "email" : "text"}
                                    placeholder={placeholder}
                                    className="w-full border-b border-gray-400 px-2 py-2 text-black"
                                />
                            </div>
                        ))}
                        <select
                            name="course"
                            className="w-full border-b border-gray-400 px-2 py-2 text-black"
                        >
                            <option value="">B.Tech Computer Science (Gaming)</option>
                            <option value="1">B.Sc in Animation & Filmmaking</option>
                            <option value="3">B.Sc Visual Effects For Film</option>
                        </select>
                        <div className="mb-5 lg:mb-8">
                            <textarea
                                placeholder="Message"
                                className="w-full border-b border-gray-400 px-2 py-2 text-black"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-red-600 text-white w-[50%] md:w-[50%] lg:w-[30%] text-[13px] lg:text-[16px] px-8 py-3 rounded-md hover:bg-red-700"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Courseform;
