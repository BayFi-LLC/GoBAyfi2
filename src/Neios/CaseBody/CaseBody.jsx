"use client";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import { CaseBodyDAta } from "@/CaseBodyDAta";

const CaseBody = () => {
  const pathname = usePathname();
  const defaultData = {
    title: "Edgex",
    two: "/Edgex/EdgeX (1).png",
    three: "/Edgex/EdgeX (3).png",
    four: "/Edgex/EdgeX (4).png",
    five: "/Edgex/EdgeX (5).png",
    six: "/Edgex/EdgeX (6).png",
    seven: "/Edgex/EdgeX (7).png",
    eight: "/Edgex/EdgeX (8).png",
    nine: "/Edgex/EdgeX (9).png",
    ten: "/Edgex/EdgeX (10).png",
    eleven: "/Edgex/EdgeX (11).png",
    twelve: "/Edgex/EdgeX (12).png",
  };

  const currentData = CaseBodyDAta[pathname] || defaultData;
  return (
    <>
      <div className="h-auto w-11/12 lg:w-10/12 mx-auto">
        {/* Problem */}
        <div className="lg:grid lg:grid-cols-[350px_1fr] items-start lg:mt-16">
          <h1 className="text-[#0C1F0C] font-graphik text-[20px] font-medium leading-[28px] lg:text-4xl pb-5">
            Problem
          </h1>
          <div>
            <p className="text-[#0C1F0C] text-justify font-graphik text-[12px] font-normal leading-[16px] lg:text-[16px] lg:leading-[22px]">
              {currentData.problem1}
            </p>
            <p className="text-[#0C1F0C] mt-5 text-justify font-graphik text-[12px] font-normal leading-[16px] lg:text-[16px] lg:leading-[22px]">
              {currentData.problem2}
            </p>
          </div>
        </div>
        {/* Challenges
         */}
        <div className="lg:grid mt-12 lg:grid-cols-[350px_1fr] items-start lg:mt-16">
          <h1 className="text-[#0C1F0C] font-graphik text-[20px] font-medium leading-[28px] lg:text-4xl pb-5">
            Challenges
          </h1>
          <div>
            <p className="text-[#0C1F0C] text-justify font-graphik text-[12px] font-normal leading-[16px] lg:text-[16px] lg:leading-[22px]">
              {currentData.Challenges1}
            </p>
            <p className="text-[#0C1F0C] mt-5 text-justify font-graphik text-[12px] font-normal leading-[16px] lg:text-[16px] lg:leading-[22px]">
              {currentData.Challenges2}
            </p>
          </div>
        </div>
        {/*Our Solutions
         */}
        <div className="mt-12 lg:grid lg:grid-cols-[350px_1fr] items-start lg:mt-16 ">
          <h1 className="text-[#0C1F0C] font-graphik text-[20px] font-medium leading-[28px] lg:text-4xl pb-5">
            Our Solutions
          </h1>
          <div>
            <p className="text-[#0C1F0C] text-justify font-graphik text-[12px] font-normal leading-[16px] lg:text-[16px] lg:leading-[22px]">
              {currentData.Solutions1}
            </p>
            <p className="text-[#0C1F0C] mt-5 text-justify font-graphik text-[12px] font-normal leading-[16px] lg:text-[16px] lg:leading-[22px]">
              {currentData.Solutions2}
            </p>
          </div>
        </div>
        {/* two */}
        {currentData.two ? (
          <div className="w-full mx-auto mt-9 lg:mt-20 mb-10 aspect-[16/9] relative rounded-2xl overflow-hidden">
            <Image
              src={currentData.two}
              alt="cover"
              fill
              className="object-cover"
              priority
            />
          </div>
        ) : null}

        {/* three */}
        {currentData.three ? (
          <div className="lg:mt-16 w-full mx-auto mt-9 mb-10 aspect-[16/9]   relative rounded-2xl overflow-hidden">
            <Image
              src={currentData.three}
              alt="cover"
              fill
              className="object-cover"
              priority // Optional: Speeds up load if above-the-fold
            />
          </div>
        ) : null}

        {/* four */}
        {currentData.four ? (
          <div className="lg:mt-16 w-full mx-auto mt-9 mb-10 aspect-[16/9]   relative rounded-2xl overflow-hidden ">
            <Image
              src={currentData.four}
              alt="cover"
              fill
              className="object-cover"
              priority // Optional: Speeds up load if above-the-fold
            />
          </div>
        ) : null}
        {/* Sketch */}
        <div className="lg:grid lg:grid-cols-[350px_1fr] items-start lg:mt-16">
          <h1 className="text-[#0C1F0C] font-graphik text-[20px] font-medium leading-[28px] lg:text-4xl pb-5">
            Sketch
          </h1>
          <div>
            <p className="text-[#0C1F0C] text-justify font-graphik text-[12px] font-normal leading-[16px] lg:text-[16px] lg:leading-[22px]">
              {currentData.Sketch1}
            </p>
            <p className="text-[#0C1F0C] mt-5 text-justify font-graphik text-[12px] font-normal leading-[16px] lg:text-[16px] lg:leading-[22px]">
              {currentData.Sketch2}
            </p>
          </div>
        </div>
        {/* five */}
        {currentData.five ? (
          <div className="lg:mt-16 w-full mx-auto mt-9 mb-10 aspect-[16/9]   relative rounded-2xl overflow-hidden ">
            <Image
              src={currentData.five}
              alt="cover"
              fill
              className="object-cover"
              priority // Optional: Speeds up load if above-the-fold
            />
          </div>
        ) : null}
        {/* Wireframe
         */}
        <div className="lg:grid lg:grid-cols-[350px_1fr] items-start lg:mt-16">
          <h1 className="text-[#0C1F0C] font-graphik text-[20px] font-medium leading-[28px] lg:text-4xl pb-5">
            Wireframe
          </h1>
          <div>
            <p className="text-[#0C1F0C] text-justify font-graphik text-[12px] font-normal leading-[16px] lg:text-[16px] lg:leading-[22px]">
              {currentData.Wireframe1}
            </p>
            <p className="text-[#0C1F0C] mt-5 text-justify font-graphik text-[12px] font-normal leading-[16px] lg:text-[16px] lg:leading-[22px]">
              {currentData.Wireframe2}
            </p>
          </div>
        </div>
        {/* six */}
        {currentData.six ? (
          <div className="lg:mt-16 w-full mx-auto mt-9 mb-10 aspect-[16/9]   relative rounded-2xl overflow-hidden ">
            <Image
              src={currentData.six}
              alt="cover"
              fill
              className="object-cover"
              priority // Optional: Speeds up load if above-the-fold
            />
          </div>
        ) : null}
        {/* Style Guide
         */}
        <div className="lg:grid lg:grid-cols-[350px_1fr] items-start lg:mt-16">
          <h1 className="text-[#0C1F0C] font-graphik text-[20px] font-medium leading-[28px] lg:text-4xl pb-5">
            Style Guide
          </h1>
          <div>
            <p className="text-[#0C1F0C] text-justify font-graphik text-[12px] font-normal leading-[16px] lg:text-[16px] lg:leading-[22px]">
              {currentData.Style1}
            </p>
            <p className="text-[#0C1F0C] mt-5 text-justify font-graphik text-[12px] font-normal leading-[16px] lg:text-[16px] lg:leading-[22px]">
             {currentData.Style2}
            </p>
          </div>
        </div>
        {/* seven */}
        {currentData.seven ? (
          <div className="lg:mt-16 w-full mx-auto mt-9 mb-10 aspect-[16/9]   relative rounded-2xl overflow-hidden ">
            <Image
              src={currentData.seven}
              alt="cover"
              fill
              className="object-cover"
              priority // Optional: Speeds up load if above-the-fold
            />
          </div>
        ) : null}
        {/* Eight */}
        {currentData.eight ? (
          <div className="lg:mt-16 w-full mx-auto mt-9 mb-10 aspect-[16/9]   relative rounded-2xl overflow-hidden ">
            <Image
              src={currentData.eight}
              alt="cover"
              fill
              className="object-cover"
              priority // Optional: Speeds up load if above-the-fold
            />
          </div>
        ) : null}
        <div className="lg:grid lg:grid-cols-[350px_1fr] items-start lg:mt-16">
          <h1 className="text-[#0C1F0C] font-graphik text-[20px] font-medium leading-[28px] lg:text-4xl pb-5">
            Visual Output{" "}
          </h1>
          <div>
            <p className="text-[#0C1F0C] text-justify font-graphik text-[12px] font-normal leading-[16px] lg:text-[16px] lg:leading-[22px]">
           {currentData.Visual1}
            </p>
            <p className="text-[#0C1F0C] mt-5 text-justify font-graphik text-[12px] font-normal leading-[16px] lg:text-[16px] lg:leading-[22px]">
             {currentData.Visual2}
            </p>
          </div>
        </div>
        {/* nine */}
        {currentData.nine ? (
          <div className="lg:mt-16 w-full mx-auto mt-9 mb-10 aspect-[16/9]   relative rounded-2xl overflow-hidden ">
            <Image
              src={currentData.nine}
              alt="cover"
              fill
              className="object-cover"
              priority // Optional: Speeds up load if above-the-fold
            />
          </div>
        ) : null}
        {/* ten */}
        {currentData.ten ? (
          <div className="lg:mt-16 w-full mx-auto mt-9 mb-10 aspect-[16/9]   relative rounded-2xl overflow-hidden ">
            <Image
              src={currentData.ten}
              alt="cover"
              fill
              className="object-cover"
              priority // Optional: Speeds up load if above-the-fold
            />
          </div>
        ) : null}
        {/* eleven */}
        {currentData.eleven ? (
          <div className="lg:mt-16 w-full mx-auto mt-9 mb-10 aspect-[16/9]   relative rounded-2xl overflow-hidden ">
            <Image
              src={currentData.eleven}
              alt="cover"
              fill
              className="object-cover"
              priority // Optional: Speeds up load if above-the-fold
            />
          </div>
        ) : null}
        {/* twelve */}
        {currentData.twelve ? (
          <div className="lg:mt-16 w-full mx-auto mt-9 mb-10 aspect-[16/9]   relative rounded-2xl overflow-hidden ">
            <Image
              src={currentData.twelve}
              alt="cover"
              fill
              className="object-cover"
              priority // Optional: Speeds up load if above-the-fold
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default CaseBody;
