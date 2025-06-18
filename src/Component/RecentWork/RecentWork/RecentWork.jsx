"use client";
import { useState } from "react";
import Image from "next/image";
import ButtonArrowDown from "./ButtonArrowDown";
import ImageBlock from "./ImageBlock";
import "./RecentWork.css";
import ButtonOne from "./ButtonOne";
import { ScrollTrigger } from "gsap/all";

const RecentWork = () => {
  const [currentData, setCurrentData] = useState([
    { picture: "/Image/Vinapp.jpg", glass: "/Image/glass-star.svg" },
    { picture: "/Image/13.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/5.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/3.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/16.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/4.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/6.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/7.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/8.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/Instanx.jpg", glass: "/Image/glass-star.svg" },
    { picture: "/Image/Sanford.png", glass: "/Image/glass-star.svg" },
    { picture: "/Image/Vinapp.jpg", glass: "/Image/glass-star.svg" },
  ]);

  const dataOne = [
    { picture: "/Image/2.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/1.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/5.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/3.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/16.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/4.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/6.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/7.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/8.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/Instanx.jpg", glass: "/Image/glass-star.svg" },
    { picture: "/Image/Sanford.png", glass: "/Image/glass-star.svg" },
    { picture: "/Image/Vinapp.jpg", glass: "/Image/glass-star.svg" },
  ];
  const dataTwo = [
    { picture: "/Image/1.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/2.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/3.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/4.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/7.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/8.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/12.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/13.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/10.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/Instanx.jpg", glass: "/Image/glass-star.svg" },
    { picture: "/Image/Sanford.png", glass: "/Image/glass-star.svg" },
    { picture: "/Image/Vinapp.jpg", glass: "/Image/glass-star.svg" },
  ];
  const dataThree = [
    { picture: "/Image/5.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/6.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/16.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/18.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/5.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/6.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/16.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/18.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/5.webp", glass: "/Image/glass-star.svg" },
    { picture: "/Image/Instanx.jpg", glass: "/Image/glass-star.svg" },
    { picture: "/Image/Sanford.png", glass: "/Image/glass-star.svg" },
    { picture: "/Image/Vinapp.jpg", glass: "/Image/glass-star.svg" },
  ];
  const dataFour = dataThree;
  const dataFive = Array(9).fill({ picture: "/Image/portfolio5.jpg", glass: "/Image/glass-star.svg" }).concat([
    { picture: "/Image/Instanx.jpg", glass: "/Image/glass-star.svg" },
    { picture: "/Image/Sanford.png", glass: "/Image/glass-star.svg" },
    { picture: "/Image/Vinapp.jpg", glass: "/Image/glass-star.svg" },
  ]);
  const dataSix = Array(9).fill({ picture: "/Image/portfolio6.png", glass: "/Image/glass-star.svg" }).concat([
    { picture: "/Image/Instanx.jpg", glass: "/Image/glass-star.svg" },
    { picture: "/Image/Sanford.png", glass: "/Image/glass-star.svg" },
    { picture: "/Image/Vinapp.jpg", glass: "/Image/glass-star.svg" },
  ]);

  const currentButtonClick = () => setCurrentData(dataOne);
  const handleButtonClick = () => setCurrentData(dataTwo);
  const three = () => setCurrentData(dataThree);
  const four = () => setCurrentData(dataFour);
  const five = () => setCurrentData(dataFive);
  const six = () => setCurrentData(dataSix);

  const [visibleCount, setVisibleCount] = useState(6);
const showAll = () => {
    setVisibleCount(currentData.length);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);
  };

  return (
    <div className="relative h-auto w-full bg-[#0C1F0C] pb-10 lg:pb-24">
      <div className="mx-auto h-auto w-10/12 bg-[#0C1F0C] pt-8">
        {/* Heading */}
        <div className="flex items-center gap-5">
          <div className="relative h-14 w-14 lg:h-28 lg:w-28">
            <Image src="/Image/Stargreen.png" alt="Logo" fill className="new object-contain" />
            <Image
              src="/Image/text-icon.svg"
              alt="Logo Overlay"
              width={30}
              height={30}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform lg:w-14 lg:h-16"
            />
          </div>
          <h1 className="text-[32px] font-medium text-white lg:text-6xl">Recent Work</h1>
        </div>

        {/* Description */}
        <div className="mt-[51px] max-w-[960px]">
          <p className="text-2xl font-normal text-white lg:text-5xl">
            We are constantly showing our awesome works in different kinds of industries daily, see what we've been up to!
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap gap-4">
          <ButtonArrowDown buttonText="All Showcase" onClick={currentButtonClick} />
          <ButtonArrowDown buttonText="Logo & Brand Identity" onClick={handleButtonClick} />
          <ButtonArrowDown buttonText="Web Design & Development" onClick={three} />
          <ButtonArrowDown buttonText="UI/UX Design" onClick={four} />
          <ButtonArrowDown buttonText="Video Editing & Animation" onClick={five} />
          <ButtonArrowDown buttonText="Graphics Design" onClick={six} />
        </div>

        {/* Image Section */}
        <div className="mx-auto mt-12 grid grid-cols-1 gap-6 pb-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentData.slice(0, visibleCount).map((item, index) => (
            <div key={index}>
              <ImageBlock picture={item.picture} glass={item.glass} />
            </div>
          ))}
        </div>

          {/* Final Button */}
          {visibleCount < currentData.length && (
       <div
       onClick={showAll}
       className="mt-9 flex items-center justify-center pb-6 lg:mt-12"
     >
       <ButtonOne
      
       />
     </div>
    )}
      </div>
    </div>
  );
};

export default RecentWork;