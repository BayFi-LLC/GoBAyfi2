"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  const logos = [
    "/Image/logo-1.svg",
    "/Image/logo-2.svg",
    "/Image/logo-3.svg",
    "/Image/logo-4.svg",
    "/Image/logo-5.svg",
    "/Image/logo-6.svg",
    "/Image/logo-7.svg",
    "/Image/logo-8.svg",
  ];
  const group = "/Image/one-logo.svg";

  return (
    <div className="z-0 h-auto bg-[#0C1F0C]">
      <div className="relative mx-auto w-10/12 bg-[#0C1F0C]">
        <Marquee className="mb-6" speed={100} autoFill loop={0}>
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center">
              <div className="flex h-36 items-center justify-center text-white">
                <div className="mr-5 flex h-auto w-auto items-center justify-center rounded-full bg-[#091609]">
                  <div className="h-[25px] w-[85px] mx-[32px] my-[12px] relative">
                    <Image
                      src={logo}
                      alt={`logo-${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="85px"
                      priority // 👈 loads image immediately (eager load)
                      loading="eager" // optional when using priority
                    />
                  </div>
                </div>
              </div>
              <div className="relative w-7 h-7 mr-5">
                <Image
                  src={group}
                  alt="group"
                  fill
                  className="object-contain"
                  sizes="28px"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Marquee>
        <div className="absolute left-0 top-0 z-20 h-full w-1/3 bg-gradient-to-r from-[#0C1F0C] to-transparent opacity-100"></div>
        <div className="absolute right-0 top-0 z-20 h-full w-1/3 bg-gradient-to-l from-[#0C1F0C] to-transparent opacity-100"></div>
      </div>
    </div>
  );
};

export default MarqueeSection;
