"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import "./Hudai.css";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const contentArray = [
  {
    title: "We Help Our Clients Shine Online",
    description:
      "We collaborate as a team, combining creativity and passion to deliver exceptional results. Together, we help your brand shine online and achieve lasting success.",
  },
  {
    title: "Your Partner in Digital Success",
    description:
      "At BayFi Studio, we’re more than a creative agency – we’re your growth partner. From discovery and branding to design, development, and post-launch optimization, we provide end-to-end solutions to ensure your success.",
  },
  {
    title: "Innovation Without Borders",
    description:
      "BayFi Studio® blends global talent with innovative thinking to craft tailored solutions for your brand. Through collaboration and creativity, we deliver impactful work that drives success and stands the test of time.",
  },
];

const Hudai = () => {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const container = containerRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!container || !scrollContainer) return;

    ScrollTrigger.getById("hudai-scroll")?.kill();

    const totalScroll = scrollContainer.scrollWidth - container.offsetWidth;

    const trigger = gsap.to(scrollContainer, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        id: "hudai-scroll",
        trigger: container,
        start: "top top",
        end: `+=${totalScroll}`,
        scrub: true,
        pin: true,
        markers: false,
      },
    });

    const handleResize = debounce(() => {
      ScrollTrigger.getById("hudai-scroll")?.kill();

      const updatedTotalScroll = scrollContainer.scrollWidth - container.offsetWidth;

      gsap.to(scrollContainer, {
        x: -updatedTotalScroll,
        ease: "none",
        scrollTrigger: {
          id: "hudai-scroll",
          trigger: container,
          start: "top top",
          end: `+=${updatedTotalScroll}`,
          scrub: true,
          pin: true,
          markers: false,
        },
      });

      ScrollTrigger.refresh();
    }, 200);

    window.addEventListener("resize", handleResize);

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ScrollTrigger.getById("hudai-scroll")?.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      className="hudai-container overflow-hidden bg-white relative"
    >
      <div className="hudai-fixed-header top-5 absolute left-10 z-50 block p-4 text-3xl sm:text-4xl font-medium text-black lg:hidden">
        Why Choose <br /> BayFi®
      </div>

      <div
        ref={scrollContainerRef}
        className="hudai-scroll-container mt-16 flex h-full w-full items-center space-x-20 lg:mt-5"
      >
        <div className="hudai-box hidden h-auto w-11/12 shrink-0 rounded-[24px] p-9 lg:ml-16 lg:block lg:w-1/2">
          <h1 className="flex items-center justify-center text-6xl lg:text-8xl font-medium text-black">
            Why Choose <br />
            BayFi®
          </h1>
        </div>

        {contentArray.map((item, index) => (
          <div
            key={index}
            className="scrollContainer hudai_color hudai-box w-11/12 shrink-0 rounded-[24px] p-8 lg:ml-16 lg:w-7/12 xl:w-1/2"
          >
            <div className="relative h-[177px] w-[177px]">
              <Image
                src="/Image/work3.svg"
                alt="Black logo"
                fill
                className="new object-cover"
              />
              <Image
                src="/Image/why.svg"
                alt="Why logo"
                width={90}
                height={110}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
              />
            </div>
            <h1 className="mt-6 w-full lg:w-8/12 xl:w-8/12 2xl:w-11/12 h-[122px] lg:h-[150px] xl:h-[200px] text-4xl sm:text-5xl text-black lg:text-5xl xl:text-6xl 2xl:text-[80px] font-normal">
              {item.title}
            </h1>
            <p className="mt-6 w-full h-[185px] xl:h-[100px] mb-12 sm:mb-4 lg:mt-9 xl:mt-3 xl:mb-10 2xl:mb-3 text-xl sm:text-2xl font-light text-black lg:w-full lg:text-2xl">
              {item.description}
            </p>
          </div>
        ))}

        <div className="hudai-box h-auto w-1 shrink-0 lg:block">
          <h1 className="opacity-0">hello world</h1>
        </div>
      </div>
    </div>
  );
};

// ✅ Debounce utility
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export default Hudai;
