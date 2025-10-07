"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BlogSection = () => {
  const itemsPerPage = 4; // Items per page
  const totalPages = 10; // Total number of pages
  const maxVisibleButtons = 6; // Maximum number of pagination buttons visible at a time
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const cards = [
    {
      title: "Behind the Screens: An Inside Look at Media and Animation Studios",
      date: "29 January 2024",
      description:
        "Media production studios and Animation companies are integral parts of creating movies...",
      image: "/assets/img/blogs/animation-studio-25-01-2024.jpg",
      link: "an-inside-look-at-media-and-animation-studios",
    },
    {
      title: "Behind the Screens: An Inside Look at Media and Animation Studios",
      date: "29 January 2024",
      description:
        "Media production studios and Animation companies are integral parts of creating movies...",
      image: "/assets/img/blogs/animation-studio-25-01-2024.jpg",
      link: "an-inside-look-at-media-and-animation-studios",
    },
    {
      title: "Behind the Screens: An Inside Look at Media and Animation Studios",
      date: "29 January 2024",
      description:
        "Media production studios and Animation companies are integral parts of creating movies...",
      image: "/assets/img/blogs/animation-studio-25-01-2024.jpg",
      link: "an-inside-look-at-media-and-animation-studios",
    },
    {
      title: "Behind the Screens: An Inside Look at Media and Animation Studios",
      date: "29 January 2024",
      description:
        "Media production studios and Animation companies are integral parts of creating movies...",
      image: "/assets/img/blogs/animation-studio-25-01-2024.jpg",
      link: "an-inside-look-at-media-and-animation-studios",
    },
    // Add additional unique blog objects
  ];

  const displayedCards = cards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (pageNumber) => setCurrentPage(pageNumber);
  const handleNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const handlePreviousPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  const navigateToBlog = (slug) => router.push(`/blogs/${slug}`);

  // Determine the range of visible pagination buttons
  const startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
  const endPage = Math.min(
    totalPages,
    startPage + maxVisibleButtons - 1
  );
  const visibleButtons = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <div className="bg-[#F4F4F4] py-32 lg:py-32">
      <div className="container mx-auto px-6 lg:px-24">
        <div
          className="text-[25px] md:text-[32px] lg:text-[32px] my-1 lg:my-3"
          style={{ fontFamily: "Russo One, sans-serif", fontWeight: 400 }}
        >
          <h1>Recent Updates on Animation Industries</h1>
        </div>
        <p
          className="my-3 lg:my-5 text-[13px] md:text-[16px] lg:text-[16px]"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
        >
          Hi-Tech Animation is an India-based Animation production studio with a
          state-of-the-art production facility...
        </p>

        <div className="card-container">
          {displayedCards.map((card, index) => (
            <div
              className="bg-white rounded-lg p-3 lg:p-10 my-5 lg:my-10 w-full card"
              key={index}
            >
              <div
                className={`flex flex-wrap gap-3 md:gap-3 lg:gap-8 ${
                  index % 2 === 0 ? "" : "flex-row-reverse"
                }`}
              >
                <div className="w-[100%] md:w-[48%] lg:w-[48%]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
                <div className="w-[100%] md:w-[48%] lg:w-[48%]">
                  <h2
                    className="text-[#C8181D] text-[18px] lg:text-[24px]"
                    style={{ fontFamily: "Russo One, sans-serif", fontWeight: 400 }}
                  >
                    {card.title}
                  </h2>
                  <p
                    className="text-[14px] lg:text-[18px] my-1 lg:my-5"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                  >
                    <strong>Posted by:</strong> Admin
                  </p>
                  <p
                    className="my-5 lg:my-5 text-[13px] lg:text-[16px]"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                  >
                    {card.description}
                  </p>
                  <button
                    className="bg-[#C8181D] py-3 px-3 w-[50%] md:w-[40%] lg:w-[30%] text-[13px] lg:text-[16px] text-white rounded-lg mt-4 md:mt-4 lg:mt-5"
                    onClick={() => navigateToBlog(card.link)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="pagination flex flex-wrap gap-2 justify-center mt-10">
          <button
            className="bg-white rounded-md p-2 lg:p-4 w-28 lg:w-32 h-10 lg:h-16 text-lg lg:text-xl"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {visibleButtons.map((page) => (
            <button
              key={page}
              className={`rounded-md p-2 lg:p-4 w-10 lg:w-16 h-10 lg:h-16 text-lg lg:text-xl ${
                currentPage === page ? "bg-[#C8181D] text-white" : "bg-white"
              }`}
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          ))}

          <button
            className="bg-white rounded-md p-2 lg:p-4 w-28 lg:w-32 h-10 lg:h-16 text-lg lg:text-xl"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
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
