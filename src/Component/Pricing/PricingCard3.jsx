"use client";
import { GoArrowRight } from "react-icons/go";
import { HiMiniCheck } from "react-icons/hi2";
import Image from "next/image";

const PricingCard3 = ({ openModal }) => {
  return (
    <>
      <div className="mb-6 w-full rounded-[20px] bg-black pt-[54px] text-white">
        <div className="mb-16 pl-[54px]">
          <h1 className="text-[24px] font-normal leading-[1.5rem]">
            Premium Plan
          </h1>
          <p className="mt-2 text-[14px] font-normal leading-[1rem]">
            4 request at a time. <br />
            Pause or cancel anytime.
          </p>
          <h1 className="mt-4 text-4xl font-medium lg:text-5xl xl:text-6xl">
            $2999<span className="text-3xl">/month</span>
          </h1>
          {/* button */}
          <div
            onClick={openModal}
            className="group mt-6 flex items-center cursor-pointer"
          >
            <button className="relative z-30 flex items-center justify-center overflow-hidden rounded-full border-2 border-[#B8DE19] hover:border-black px-6 py-2 text-lg font-medium text-white transition-all duration-700 hover:text-black">
              <span className="relative z-10  cursor-pointer">Go Premium Now</span>

              {/* Animated expanding background */}
              <span className="absolute right-10 bottom-1/2 h-0.5 w-0.5 translate-y-1/2 rounded bg-[#B8DE19] transition-transform duration-700 group-hover:scale-[300] -z-10"></span>

              {/* Icon */}
              <div className="relative ml-2 h-8 w-8">
                {/* Star Image */}
                <div className="absolute inset-0 m-auto h-6 w-6 transition-opacity duration-300 group-hover:opacity-0">
                  <Image
                    src="/Image/Star.svg"
                    alt="Star Icon"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Black background circle on hover */}
                <div className="absolute inset-0 m-auto h-7 w-7 rounded-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* Arrow Icon */}
                <GoArrowRight className="absolute inset-0 m-auto h-5 w-4 text-black transition-all duration-300 group-hover:w-5 group-hover:-rotate-[60deg] group-hover:text-[#B8DE19]" />
              </div>
            </button>
          </div>
        </div>
        {/* custom offer */}

        <div className="mx-auto mb-3 flex w-10/12 items-center">
          <div className="relative h-5 w-5">
            <Image
              src="/Image/Star.svg"
              alt="Star Icon"
              fill
              className="object-cover"
            />
            <HiMiniCheck className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform text-2xl text-black" />
          </div>
          <h1 className="ml-5 font-light">All services are included</h1>
        </div>
        <div className="mx-auto mb-3 flex w-10/12 items-center">
          <div className="relative h-5 w-5">
            <Image
              src="/Image/Star.svg"
              alt="Star Icon"
              fill
              className="object-cover"
            />
            <HiMiniCheck className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform text-2xl text-black" />
          </div>
          <h1 className="ml-5 font-light">4 request at a time</h1>
        </div>
        <div className="mx-auto mb-3 flex w-10/12 items-center">
          <div className="relative h-5 w-5">
            <Image
              src="/Image/Star.svg"
              alt="Star Icon"
              fill
              className="object-cover"
            />
            <HiMiniCheck className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform text-2xl text-black" />
          </div>
          <h1 className="ml-5 font-light">
            Delivery within your-set timelines
          </h1>
        </div>
        <div className="mx-auto mb-3 flex w-10/12 items-center">
          <div className="relative h-5 w-5">
            <Image
              src="/Image/Star.svg"
              alt="Star Icon"
              fill
              className="object-cover"
            />
            <HiMiniCheck className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform text-2xl text-black" />
          </div>
          <h1 className="ml-5 font-light">Unlimited revision</h1>
        </div>
        <div className="mx-auto mb-3 flex w-10/12 items-center">
          <div className="relative h-5 w-5">
            <Image
              src="/Image/Star.svg"
              alt="Star Icon"
              fill
              className="object-cover"
            />
            <HiMiniCheck className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform text-2xl text-black" />
          </div>
          <h1 className="ml-5 font-light">Managed via Slack & Trello</h1>
        </div>
        <div className="mx-auto mb-3 flex w-10/12 items-center">
          <div className="relative h-5 w-5">
            <Image
              src="/Image/Star.svg"
              alt="Star Icon"
              fill
              className="object-cover"
            />
            <HiMiniCheck className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform text-2xl text-black" />
          </div>
          <h1 className="ml-5 font-light">15% off for 12-month upfront</h1>
        </div>
        <div className="mx-auto mb-3 flex w-10/12 items-center">
          <div className="relative h-5 w-5">
            <Image
              src="/Image/Star.svg"
              alt="Star Icon"
              fill
              className="object-cover"
            />
            <HiMiniCheck className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform text-2xl text-black" />
          </div>
          <h1 className="ml-5 font-light">$99 {"'Test Drive' "} Trial</h1>
        </div>
        <div className="mx-auto mb-3 flex w-10/12 items-center">
          <div className="relative h-5 w-5">
            <Image
              src="/Image/Star.svg"
              alt="Star Icon"
              fill
              className="object-cover"
            />
            <HiMiniCheck className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform text-2xl text-black" />
          </div>
          <h1 className="ml-5 font-light">Pause or cancel anytime.</h1>
        </div>
        <div className="mx-auto mb-3 flex w-10/12 items-center pb-6">
          <div className="relative h-5 w-5">
            <Image
              src="/Image/Star.svg"
              alt="Star Icon"
              fill
              className="object-cover"
            />
            <HiMiniCheck className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform text-2xl text-black" />
          </div>
          <h1 className="ml-5 font-light">Best For Established brands</h1>
        </div>
      </div>
    </>
  );
};

export default PricingCard3;
