"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import RouteNav from "@/Neios/Header/RouteNav";
import RouteNav2 from "@/Neios/Header/RouteNav2";
import { headerData } from "@/headerDAta";

const EdgexHeader = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const defaultData = {
    cover: "/Image/1.webp",
    overlay: "/Image/default-icon.svg",
    title: "Welcome to Our Platform",
  };

  const currentData = headerData[pathname] || defaultData;

  return (
    <>
      <div
        id="hero"
        className={`z-0 relative w-full pt-8 transition-all duration-500 ${
          isMenuOpen ? "overflow-hidden h-screen" : "overflow-visible h-auto"
        }`}
      >
        <div className="mb-12 w-11/12 mx-auto lg:w-10/12 block lg:hidden">
          <RouteNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        <div className="mb-12 lg:mb-20 w-11/12 mx-auto lg:w-10/12">
          <RouteNav2 />
        </div>

        {/* Heading */}
        <div className="w-11/12 lg:w-10/12 mx-auto flex items-center gap-4">
          <div className="relative z-0 h-14 w-14 lg:h-28 lg:w-28 shrink-0">
            <Image
              src="/Image/Stargreen.png"
              alt="Logo"
              fill
              className="object-contain rotating-image"
              priority
            />
            <Image
              src="/Image/text-icon.svg"
              alt="Logo Overlay"
              width={56}
              height={64}
              className={`absolute left-1/2 top-1/2 h-7 w-6 -translate-x-1/2 -translate-y-1/2 transform lg:h-16 lg:w-14 transition-opacity duration-500 ${
                isMenuOpen ? "opacity-0" : "opacity-100 delay-500"
              }`}
            />
          </div>
          <h1 className="text-2xl lg:text-5xl leading-[34px] lg:leading-[68px]">
            {currentData.title}
          </h1>
        </div>

        {currentData.cover && (
          <div
            className={`w-11/12 lg:w-10/12 mx-auto mt-9 lg:mt-20 aspect-[16/9] relative rounded-2xl overflow-hidden transition-opacity duration-1000 ${
              isMenuOpen ? "opacity-0 pointer-events-none  " : "  opacity-100"
            }`}
          >
            <Image src={currentData.cover} alt="cover" fill />
          </div>
        )}

        <div className="bg-[#E8E8E8] mt-10 lg:mt-16 mb-10 h-auto w-11/12 lg:w-10/12 mx-auto p-7 lg:px-12 lg:py-[64px] rounded-[18px] lg:grid lg:grid-cols-2 gap-x-20">
          <div>
            <h1 className="text-black text-xl lg:text-4xl font-medium">
              About
            </h1>
            <p className="mt-5 lg:mt-9 text-black text-justify font-[Graphik] text-[12px] font-normal leading-[18px] lg:text-[16px] lg:leading-[20px]">
              {currentData.about1}
            </p>
            <p className="mt-5 lg:mt-9 text-black text-justify font-[Graphik] lg:text-[16px] text-[12px] font-normal leading-[18px] lg:leading-[20px]">
              {currentData.about2}
            </p>
            <div className="mt-7 lg:mt-12 xl:mt-20 2xl:mt-32 flex gap-[9px] flex-wrap pb-5">
              <span className="bg-[#F3F3F3] inline-block text-[12px] text-[#0C1F0C] py-[9px] px-3 rounded-2xl">
                UX Research
              </span>
              <span className="bg-[#F3F3F3] inline-block text-[12px] text-[#0C1F0C] py-[9px] px-3 rounded-2xl">
                UX Design
              </span>
              <span className="bg-[#F3F3F3] inline-block text-[12px] text-[#0C1F0C] py-[9px] px-3 rounded-2xl">
                Design System
              </span>
            </div>
          </div>
          <div>
            <div className="border-b border-[#0C1F0C66] flex justify-between pb-5 lg:pb-9">
              <h1 className="text-[12px] lg:text-xl text-[#0C1F0C]">
                Engagement
              </h1>
              <h1 className="text-[12px] lg:text-xl text-[#0C1F0C] font-medium">
                Bayfi Studio
              </h1>
            </div>
            <div className="mt-5 border-b border-[#0C1F0C66] flex justify-between pb-5 lg:pb-9 lg:mt-9">
              <h1 className="text-[12px] lg:text-xl text-[#0C1F0C]">Type</h1>
              <h1 className="text-[12px] lg:text-xl text-[#0C1F0C] font-medium">
                Startup
              </h1>
            </div>
            <div className="mt-5 border-b border-[#0C1F0C66] flex justify-between pb-5 lg:pb-9 lg:mt-9">
              <h1 className="text-[12px] lg:text-xl text-[#0C1F0C]">
                Category
              </h1>
              <h1 className="text-[12px] lg:text-xl text-[#0C1F0C] font-medium">
                {currentData.Category}
              </h1>
            </div>
            <div className="mt-5 border-b border-[#0C1F0C66] flex justify-between pb-5 lg:pb-9 lg:mt-9">
              <h1 className="text-[12px] lg:text-xl text-[#0C1F0C]">Funding</h1>
              <h1 className="text-[12px] lg:text-xl text-[#0C1F0C] font-medium">
                 {currentData.Funding}
              </h1>
            </div>
            <div className="mt-5 border-b border-[#0C1F0C66] flex justify-between pb-5 lg:pb-9 lg:mt-9">
              <h1 className="text-[12px] lg:text-xl text-[#0C1F0C]">
                Valuation
              </h1>
              <h1 className="text-[12px] lg:text-xl text-[#0C1F0C] font-medium">
              {currentData.Valuation}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EdgexHeader;
