"use client"
import { GoArrowRight } from "react-icons/go";
import { HiMiniCheck } from "react-icons/hi2";
import Image from "next/image";

const PricingCard2 = ({ openModal }) => {
  return (
    <>
      <div className="w-full rounded-[20px] bg-black pt-[54px] text-white mb-6">
        <div className="pl-[54px] mb-16">
          <div className="flex items-center justify-between">
            <h1 className="text-[24px] font-normal leading-[1.5rem]">
              Growth Plan
            </h1>
            <h1 className="bg-[#CFE965] px-3 py-2 text-black rounded-full text-xs mr-3">
              Most Popular
            </h1>
          </div>
          <p className="mt-2 text-[14px] font-normal leading-[1rem]">
            2 request at a time. <br />
            Pause or cancel anytime.
          </p>
          <h1 className="mt-4 text-4xl xl:text-6xl lg:text-5xl font-medium">
            $1999<span className="text-3xl">/month</span>
          </h1>

          {/* button */}
          <div onClick={openModal} className="group mt-6 flex items-center cursor-pointer">
            <button className="relative z-30 flex items-center justify-center overflow-hidden rounded-[100px] bg-[#B8DE19] px-6 py-2 text-[20px] text-black font-medium">
              Get Started Now
              <div className="group relative ml-2 inline-block h-8 w-8">
                {/* Default Star */}
                <div className="absolute inset-0 m-auto h-6 w-6 transition-opacity duration-300 group-hover:opacity-0">
                  <Image
                    src="/Image/StarPricing.svg"
                    alt="Star Icon"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Hover Circle */}
                <div className="absolute inset-0 m-auto h-7 w-7 rounded-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* Arrow */}
                <GoArrowRight className="absolute inset-0 m-auto h-5 w-4 transition-transform duration-300 group-hover:w-5 group-hover:-rotate-[60deg] text-[#B8DE19]" />
              </div>
            </button>
          </div>
        </div>

        {/* Checklist items */}
        {[
          "All services are included",
          "2 request at a time",
          "Delivery Within 24 hours",
          "Unlimited revision",
          "Managed via Slack & Trello",
          "10% off for 6-month upfront",
          "$99 'Test Drive' Trial",
          "Pause or cancel anytime.",
          "Best For Growing startups",
        ].map((text, index) => (
          <div key={index} className="flex items-center w-10/12 mb-3 mx-auto">
            <div className="relative h-5 w-5">
              <Image
                src='/Image/Star.svg'
                alt=""
                fill
                className="object-cover"
              />
              <HiMiniCheck className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform text-2xl text-black" />
            </div>
            <h1 className="ml-5 font-light">{text}</h1>
          </div>
        ))}

        <div className="pb-6" />
      </div>
    </>
  );
};

export default PricingCard2;
