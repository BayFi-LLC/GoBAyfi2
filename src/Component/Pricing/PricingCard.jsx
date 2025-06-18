"use client";
import { GoArrowRight } from "react-icons/go";

import { HiMiniCheck } from "react-icons/hi2";
import Image from "next/image";

const features = [
  "All services are included",
  "1 request at a time",
  "Delivery Within 48 hours",
  "Unlimited revision",
  "Managed via Slack & Trello",
  "10% off for 6-month upfront",
  "$99 'Test Drive' Trial",
  "Pause or cancel anytime.",
  "Best For Small businesses",
];

const PricingCard = ({ openModal }) => {
  return (
    <>
      <div className="w-full rounded-[20px] bg-black pt-[54px] text-white mb-6">
        <div className="pl-5 lg:pl-[54px] mb-16">
          <h1 className="text-[24px] font-normal leading-[1.5rem]">
            Starter Plan
          </h1>
          <p className="mt-2 text-[14px] font-normal leading-[1rem]">
            1 request at a time. <br />
            Pause or cancel anytime.
          </p>
          <h1 className="mt-4 xl:text-6xl text-5xl font-medium">
            $999<span className="text-3xl">/month</span>
          </h1>
          {/* Button */}
          <div
            onClick={openModal}
            className="group mt-6 flex items-center cursor-pointer "
          >
            <button className="relative z-30 flex items-center justify-center overflow-hidden rounded-full border-2 border-[#B8DE19] hover:border-black  px-6 py-2 text-lg font-medium text-white transition-all duration-700 hover:text-black  cursor-pointer">
              <span className="relative z-10">Level Up Now</span>

              {/* Background expanding effect */}
              <span className="absolute right-10 bottom-1/2 h-0.5 w-0.5 translate-y-1/2 rounded bg-[#B8DE19] transition-transform duration-700 group-hover:scale-[300] group-hover:transition-all group-hover:duration-700 -z-10"></span>

              {/* Icon section */}
              <div className="group relative ml-2 flex h-8 w-8 items-center justify-center">
                {/* Star Icon (default) */}
                <Image
                  src="/Image/Star.svg"
                  alt="Star Icon"
                  className="absolute inset-0 m-auto h-6 w-6 transition-opacity duration-300 group-hover:opacity-0"
                  width={24}
                  height={24}
                />

                {/* Black circle background (on hover) */}
                <div className="absolute inset-0 m-auto h-7 w-7 rounded-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* Arrow Icon */}
                <GoArrowRight className="absolute inset-0 m-auto h-5 w-4 text-black transition-all duration-300 group-hover:w-5 group-hover:-rotate-[60deg] group-hover:text-[#B8DE19]" />
              </div>
            </button>
          </div>
        </div>
        {/* Features */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center w-10/12 mx-auto">
              <div className="relative h-5 w-5">
                <Image
                  src="/Image/Star.svg"
                  alt="Star Icon"
                  fill
                  className="object-cover"
                />
                <HiMiniCheck className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform text-2xl text-black" />
              </div>
              <h1 className="ml-5 font-light">{feature}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PricingCard;
