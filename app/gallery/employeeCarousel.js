// components/EmployeeCarousel.js
import React, { useState, useEffect } from 'react';
import { Russo_One, Poppins } from 'next/font/google';

const russo = Russo_One({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

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
      {
        name: 'Kousik Goswami',
        role: 'Team Leader – 3D Animation',
        image: 'assets/img/gallery/Kousik_Goswami.png',
        description: 'I had an outstanding experience working with Hitech Flim and Broadcast Pvt.Ltd on our recent project. Their team’s creativity, attention to detail, and dedication to high-quality animation truly brought our vision to life. The artistry and technical skill they bring to their work are impressive, making each scene engaging and visually stunning. Hitech Flim and Broadcast Pvt.Ltd is reliable, responsive, and a pleasure to collaborate with—I highly recommend them to anyone looking for exceptional animation services',
      },
      {
        name: 'MANAS KUMAR',
        role: 'Team Leader – 3D Animation',
        image: 'assets/img/gallery/MANAS_KUMAR.png',
        description: 'My self Manas kumar I am working in this company since 2016 to till now as a Animation Team lead,I worked many company but I found a healthy environment in this company very friendly  work culture ,very polite behaviour of staffs ,nice behaviour especially our sir very down to earth personality which create very healthy environment for all employee I am very happy to be a part of Hitech Animation.',
      },
      {
        name: 'Chandan Bose',
        role: 'Vice President-Sales',
        image: 'assets/img/gallery/Chandan_Bose.png',
        description: 'In Hi Tech Animation, we animate your imagination and bring stories to life where creativity meets innovation. We work together to bring your vision to life. Our Values are creativity, Innovation and Collaboration. It’s a Great place to work with freedom and Discipline for a Great future.',
      },
      {
        name: 'Chandan Maity',
        role: 'Production Manager',
        image: 'assets/img/gallery/Chandan_Maity.png',
        description: 'Hitech Animation is one of its greatest strengths, allowing us to combine our diverse talents and expertise to produce outstanding results. Working alongside dedicated professionals who bring creativity and skill to each project is both motivating and rewarding. Leadership’s commitment to our growth is another key factor in our success, providing us with the resources, training, and support needed to advance in our careers and enhance our skills.',
      },
      {
        name: 'Debasish Dutta',
        role: 'Supervisor – 3d Asset',
        image: 'assets/img/gallery/Debasish_Dutta.png',
        description: 'Hi everyone. I am Debasish Dutta working in the field of animation for the past 19 years with different organizations. Working at Hi-Tech as a 3D Modelling Supervisor has been a highly rewarding experience. Over the course of my time in Hi-Tech which is now more than 5 years, I’ve had the opportunity to grow both professionally and personally, thanks to the supportive work environment and the collaborative culture the company fosters.',
      },
      {
        name: 'ARUP CHAKRABORTY',
        role: 'Team Leader – 3D Animation',
        image: 'assets/img/gallery/ARUP_CHAKRABORTY.png',
        description: 'I have had the privilege of leading the talented team at Hi-Tech Animation for the past 8 years, and I can confidently attest that this company is a shining example of excellence in the animation industry. Our team’s dedication to quality, creativity has been the driving force behind our success. If you’re looking for an animation partner that will bring your vision to life, look no further than Hi-Tech Animation. We’re a team that cares, creates, and delivers – every time!',
      },
      {
        name: 'Chitradeep Mukherjee',
        role: 'Deputy Production Manager',
        image: 'assets/img/gallery/Chitradeep_Mukherjee.png',
        description: 'My stay, at Hi Tech Animation was really great! The company appreciates its people. Form a nice atmosphere and every time I come in, it is a productive and engaging day! The peers here are always ready to lend each other a helping hand, and all of them work as a unit. Help each other out to push for growth and promote great relationships at work.',
      },
      {
        name: 'Pikaso Bhattacharya',
        role: 'Senior Production Artist',
        image: 'assets/img/gallery/Pikaso_Bhattacharya.png',
        description: 'I have fantastic experience with Hitech Flim and Broadcast Pvt.Ltd. It’s a long time of period I am here with this company. As a Team Lead, working here is great. Their creativity and detailed work in 3D animation consistently exceed expectations. On time delivery of quality work is another thing to be appreciate. According to me they are talented and dependable animation studio who brings stories to life beautifully and professionally.',
      },
      {
        name: 'Chandan Soni',
        role: 'Deputy Accounts Manager',
        image: 'assets/img/gallery/Chandan_Soni.png',
        description: 'The leadership team is transparent and approachable, which helps create a trusting work environment. It’s motivating to have leaders who actively listen to feedback and make efforts to implement changes. The flexibility around work-life balance has had a positive impact on my productivity and well-being. I feel trusted to manage my workload, and that sense of autonomy is empowering.',
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
            <p className={`text-[#C8181D] text-[18px] lg:text-[24px] font-bold mt-4 ${russo.className}`}>{employee.name}</p>
            <p className={`text-[15px] lg:text-[17px] ${poppins.className}`}>{employee.role}</p>
            <p className={`text-[13px] lg:text-[16px] mt-2 ${poppins.className}`}>{employee.description}</p>
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
