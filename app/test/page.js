"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogSection = () => {
    const itemsPerPage = 4;
    const totalPages = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const cards = [
        {
            title: "Behind the Screens: An Inside Look at Media and Animation Studios",
            date: "29 January 2024",
            description: "Media production studios and animation companies are integral parts of creating movies...",
            image: "/assets/img/blogs/animation-studio-25-01-2024.jpg",
            link: "/an-inside-look-at-media-and-animation-studios.html",
        },
        {
            title: "Behind the Screens: An Inside Look at Media and Animation Studios",
            date: "29 January 2024",
            description: "Media production studios and animation companies are integral parts of creating movies...",
            image: "/assets/img/blogs/animation-studio-25-01-2024.jpg",
            link: "/an-inside-look-at-media-and-animation-studios.html",
        },
        {
            title: "Behind the Screens: An Inside Look at Media and Animation Studios",
            date: "29 January 2024",
            description: "Media production studios and animation companies are integral parts of creating movies...",
            image: "/assets/img/blogs/animation-studio-25-01-2024.jpg",
            link: "/an-inside-look-at-media-and-animation-studios.html",
        },
        {
            title: "Behind the Screens: An Inside Look at Media and Animation Studios",
            date: "29 January 2024",
            description: "Media production studios and animation companies are integral parts of creating movies...",
            image: "/assets/img/blogs/animation-studio-25-01-2024.jpg",
            link: "/an-inside-look-at-media-and-animation-studios.html",
        },
        {
            title: "Behind the Screens: An Inside Look at Media and Animation Studios",
            date: "29 January 2024",
            description: "Media production studios and animation companies are integral parts of creating movies...",
            image: "/assets/img/blogs/animation-studio-25-01-2024.jpg",
            link: "/an-inside-look-at-media-and-animation-studios.html",
        },
        {
            title: "Behind the Screens: An Inside Look at Media and Animation Studios",
            date: "29 January 2024",
            description: "Media production studios and animation companies are integral parts of creating movies...",
            image: "/assets/img/blogs/animation-studio-25-01-2024.jpg",
            link: "/an-inside-look-at-media-and-animation-studios.html",
        },
        {
            title: "Behind the Screens: An Inside Look at Media and Animation Studios",
            date: "29 January 2024",
            description: "Media production studios and animation companies are integral parts of creating movies...",
            image: "/assets/img/blogs/animation-studio-25-01-2024.jpg",
            link: "/an-inside-look-at-media-and-animation-studios.html",
        },
        {
            title: "Behind the Screens: An Inside Look at Media and Animation Studios",
            date: "29 January 2024",
            description: "Media production studios and animation companies are integral parts of creating movies...",
            image: "/assets/img/blogs/animation-studio-25-01-2024.jpg",
            link: "/an-inside-look-at-media-and-animation-studios.html",
        },
        // Additional cards can go here
    ];

    const displayedCards = cards.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    useEffect(() => {
        setCurrentPage(1); // Reset to page 1 on load
    }, []);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div className="bg-[#F4F4F4]">
            <div className="container mx-5 md:mx-16 lg:mx-16 px-1 lg:px-5 pb-16 lg:pb-12 pt-32 lg:pt-24">
                <div className="text-[25px] md:text-[32px] lg:text-[32px] my-1 lg:my-3" style={{ fontFamily: 'Russo One, sans-serif', fontWeight: 400 }}>
                    <h1>Recent Updates on<br /> Animation Industries</h1>
                </div>
                <p className="my-3 lg:my-5 text-[13px] md:text-[16px] lg:text-[16px]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
                    Hi-Tech Animation is an India-based animation production studio with a state-of-the-art production facility with offices located at Kolkata and Mumbai...
                </p>

                <div className="card-container">
                    {displayedCards.map((card, index) => (
                        <div className="bg-white rounded-lg p-3 lg:p-10 my-5 lg:my-10 w-full card" key={index}>
                            <div className="flex flex-wrap gap-3 md:gap-3 lg:gap-8">
                                <div className="w-[100%] md:w-[48%] lg:w-[48%]">
                                    <Link href="#">
                                        <Image src={card.image} alt="Blog Image" width={600} height={400} className="rounded-lg" />
                                    </Link>
                                </div>
                                <div className="w-[100%] md:w-[48%] lg:w-[48%]">
                                    <div style={{ fontFamily: 'Russo One, sans-serif', fontWeight: 400 }}>
                                        <h2 className="text-[#C8181D] text-[18px] lg:text-[24px]">
                                            {card.title}
                                        </h2>
                                    </div>
                                    <div className="text-[14px] lg:text-[18px] my-1 lg:my-5" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
                                        <p>Posted by: Admin</p>
                                        <p>{card.date}</p>
                                    </div>
                                    <div className="my-5 lg:my-5 text-[13px] lg:text-[16px]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
                                        <p>{card.description}</p>
                                    </div>
                                    <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
                                        <Link href={card.link}>
                                            <button className="bg-[#C8181D] py-3 px-3 w-[50%] md:w-[40%] lg:w-[30%] text-[13px] lg:text-[16px] text-white rounded-lg mt-4 md:mt-4 lg:mt-5">
                                                Read More
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="pagination flex flex-wrap gap-2">
                    <button
                        className="bg-white rounded-md p-2 lg:p-4 w-28 lg:w-32 h-10 lg:h-16 text-lg lg:text-xl"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`rounded-md p-2 lg:p-4 w-10 lg:w-16 h-10 lg:h-16 text-lg lg:text-xl ${currentPage === index + 1 ? 'bg-[#C8181D] text-white' : 'bg-white'
                                }`}
                            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                            onClick={() => handlePageClick(index + 1)}
                        >
                            {String(index + 1).padStart(2, '0')}
                        </button>
                    ))}
                    <button
                        className="bg-white rounded-md p-2 lg:p-4 w-28 lg:w-32 h-10 lg:h-16 text-lg lg:text-xl"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
