// components/EmployeeCarousel.js
import React, { useState, useEffect } from 'react';

const EmployeeCarousel = () => {
  const employees = [
    {
      name: 'Soumyajit Maity',
      role: 'Chief Operating Officer',
      image: 'assets/img/gallery/Ellipse 79.png',
      description: 'Its Pleasure working with visionary Leadership and the largest and talented Production team. Its Pleasure working with visionary Leadership and the largest and talented Production team',
    },
    {
      name: 'Aloke Naskar',
      role: 'HR',
      image: 'assets/img/gallery/aloke-naskar.png',
      description: 'I am proud to share that our company consistently prioritizes employee well-being, growth, and a positive work environment. We value open communication and actively seek feedback to continuously improve. Our collaborative culture empowers every individual to contribute meaningfully, ensuring both personal and organizational success.',
    },
    {
      name: 'Reshmi Chowdhury',
      role: 'Line Producer',
      image: 'assets/img/gallery/reshmi-chowdhury.png',
      description: 'It’s always been a fun to achieve challenges in Hitech, because you have a supportive team collaborating to walk you through. Overall the journey has been both engaging and rewarding, as your efforts never go unnoticed here.',
    },
    {
        name: 'Sudipta-Bhakta',
        role: 'Production Coordinator',
        image: 'assets/img/gallery/sudipta.png',
        description: 'I have been working here since I started my career, Even a blink of an eye feels like a year and a year passes by within the blink of an eye. Hi-tech taught me to fall in love with my work. All the years I have been here and for more years to come I have never felt or will never feel like a second of it has been wasted.',
      },
      {
        name: 'Debashish Dutta',
        role: '3D Modelling Supervisor',
        image: 'assets/img/gallery/debashish-dutta.png',
        description: 'I joined Hi-Tech in 2019 and ever since then it has been a learning curve for me even though its been 15+ years in the Industry.',
      },
      {
        name: 'Shubham Shukla',
        role: 'Line Producer',
        image: 'assets/img/gallery/shubham-shukla.png',
        description: 'It is always fun working in Hi-Tech because of the challenges you face. In my 6 years career I have been associated with Hi-Tech for 4 years and so far what I have learned that your hard work will never go unnoticed.',
      },
      {
        name: 'Raju Karmakar',
        role: 'Production Manager- 3D Asset',
        image: 'assets/img/gallery/raju-karmakar.png',
        description: 'I have been working here in Hitech Animation since 2016, since then the company has been looking after me like a family. Everyone here is supportive and what makes this company even more unique is that they encourage employees to grow to the fullest in their own unique ways.',
      },
    // Add other employees here...
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const [widthPercentage, setWidthPercentage] = useState(100); // Default to 100% for small screens

  // Function to get width percentage based on window size
  const getWidthPercentage = () => {
    if (typeof window !== 'undefined') { // Ensure window is defined
      if (window.innerWidth >= 1024) { // lg: large screens
        return 33.33; // 3 cards
      } else if (window.innerWidth >= 640) { // md: medium screens
        return 50; // 2 cards
      } else { // sm: small screens
        return 100; // 1 card
      }
    }
    return 100; // Fallback for server-side rendering
  };

  useEffect(() => {
    const handleResize = () => {
      setWidthPercentage(getWidthPercentage());
    };

    // Set initial width percentage
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (employees.length-3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? employees.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000);

    return () => clearInterval(autoSlide); // Clear interval on component unmount
  }, []);
  

  
  

  return (
    <div className="relative overflow-hidden">
      <div
        className="mx-auto grid grid-flow-col auto-cols-[calc(100%/1)] sm:auto-cols-[calc(96%/2)] lg:auto-cols-[calc(92%/3)] md:gap-5 lg:gap-8 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * widthPercentage}%)` }}
      >
        {employees.map((employee, index) => (
          <div key={index} className="flex flex-col items-start bg-white px-8 py-10 rounded-3xl">
            <img className="mb-4 w-32" src={employee.image} alt={employee.name} />
            <p className="text-[#C8181D] text-[18px] lg:text-[24px] font-bold mt-4">{employee.name}</p>
            <p className="text-[15px] lg:text-[17px]">{employee.role}</p>
            <p className="text-[13px] lg:text-[16px] mt-2">{employee.description}</p>
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="mx-auto absolute top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-300 focus:outline-none">
        ◀
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-300 focus:outline-none">
        ▶
      </button>
    </div>
  );
};

export default EmployeeCarousel;
