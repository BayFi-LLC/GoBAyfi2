"use client";
import { useState } from "react";
import Image from "next/image";
import green from "../../../public/Image/new2.svg";
import black from "../../../public/Image/cardblackstar.svg";

const Card = ({ title, description }) => {
  const [currentPicture, setCurrentPicture] = useState(green.src);

  const handleMouseEnter = () => setCurrentPicture(black.src);
  const handleMouseLeave = () => setCurrentPicture(green.src);

  return (
    <div
      className="pl-5 pt-3 pr-3 mx-auto block h-auto w-full rounded-[20px] bg-[#0C1F0C] text-white relative overflow-hidden group hover:z-30 hover:text-black transition duration-1000 ease-in-out"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Header */}
      <div className="flex justify-between items-center pt-3 relative z-20">
        <h1 className="font-medium text-xl lg:text-2xl">{title}</h1>
        <div className="relative inline-block transition duration-1000 ease-in-out">
          <Image
            src={currentPicture}
            alt="Star Icon"
            height={56}
            width={56}
            className="object-cover h-[32px] w-[32px] lg:h-14 lg:w-14"
          />
        </div>
      </div>

      {/* Description */}
      <h1 className="mt-11 mb-4 relative z-20 text-[11px] lg:text-base lg:max-w-[341px] max-w-[210px]">
        {description}
      </h1>

      {/* Hover Background */}
      <div className="absolute size-36 -bottom-[127px] blur-[30px] -right-5 bg-[#B8DE19] rounded-full group-hover:scale-[15] group-hover:blur-0 transition duration-1000 ease-in-out z-10"></div>
    </div>
  );
};

export default Card;
