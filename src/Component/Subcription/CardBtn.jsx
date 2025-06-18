"use client";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";

const CardBtn = () => {
  return (
    <div className="hidden lg:block">
      <div className="group mr-6 mt-8 flex items-center">
        <button className="relative z-30 flex items-center justify-center overflow-hidden rounded-full border-2 border-[#B8DE19] px-7 py-3 text-[17px] font-medium text-white transition-all duration-700 hover:text-black after:absolute after:bottom-[33px] after:right-[45px] after:-z-20 after:h-0.5 after:w-0.5 after:translate-y-full after:rounded-md after:bg-[#B8DE19] after:transition-all after:duration-700 hover:after:scale-[300]">
          Book a Call

          <div className="relative ml-2 inline-block h-8 w-8">
            {/* Default Star Icon */}
            <Image
              src="/Image/Star.svg"
              alt="Star Icon"
              width={24}
              height={24}
              className="absolute inset-0 m-auto h-6 w-6 transition-opacity duration-300 group-hover:opacity-0"
            />

            {/* Hover Circle */}
            <div className="absolute inset-0 m-auto h-5 w-5 rounded-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Arrow Icon */}
            <GoArrowRight className="absolute inset-0 m-auto h-5 w-4 text-black transition-all duration-300 group-hover:w-4 group-hover:-rotate-[60deg] group-hover:text-[#B8DE19]" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default CardBtn;
