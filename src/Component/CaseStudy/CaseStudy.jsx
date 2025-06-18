"use client";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { GoArrowRight } from "react-icons/go";

const caseStudies = [
  {
    title: "Neios",
    image: "/Neios/Neios Cover.webp",
    description:
      "Empowering humanity with cutting-edge bio-AI technology to revolutionize health, wellness, and life sciences. We aim to bridge the gap between biology and artificial intelligence to unlock unprecedented advancements in human potential. Explore the cutting-edge features of Neios that bridge biology.",
    tags: ["UX Research", "UI Design", "Product Strategy"],
    path: "/neios",
  },
  {
    title: "Priome",
    image: "/Priome/priome.jpg",
    description:
      "Our website has just been updated, come and discover Priome. Innovating for a connected future. Transforming businesses with strategy, design, and technology. Experts in UX/UI and software development. Creating memorable digital experiences. Innovating for a connected future.",
    tags: ["Prototyping", "UX Research", "Design Systems"],
    path: "/priome",
  },
  {
    title: "Unilex",
    image: "/Unilex/Unilex Cover.webp",
    description:
      "Empower individuals and businesses to seamlessly invest, grow wealth, and take control of their financial future using cryptocurrency. We simplify the complexities of crypto to create an accessible and trusted financial ecosystem.",
    tags: ["Prototyping", "UX Research", "Design Systems"],
    path: "/unilex",
  },
  {
    title: "Agent Ai",
    image: "/AgentAi/Agent Cover.webp",
    description: ` Empower individuals and businesses to streamline 
operations, boost productivity, and unlock growth through intelligent AI 
automation. We simplify the complexities of automation by delivering 
accessible, reliable, and results-driven AI solutions—transforming everyday 
workflows into powerful engines of efficiency. `,
  tags: ["Prototyping", "UX Research", "Design Systems"],
    path: "/agentai",
  },
  {
    title: "Canlio",
    image: "/Canlio/Canlio Cover.png",
    description:
      `Canlio is an innovative, AI-driven platform designed to 
seamlessly connect individuals and communities, empowering them to 
grow and thrive. The name Canlio reflects our commitment to delivering 
fast, intuitive, and meaningful experiences that foster connection, 
well-being, and personal growth. `,
    tags: ["Prototyping", "UX Research", "Design Systems"],
    path: "/canlio",
  },
  {
    title: "EdgeX",
    image: "/Edgex/Dribbble shot - 1.png",
    description:
      "To become the most trusted global gateway between traditional finance and decentralized ecosystems, driving mainstream adoption of blockchain technology. Pioneer AI-driven trading tools, cross-chain interoperability, and institutional-grade security to redefine how the world interacts with digital assets.",
    tags: ["Prototyping", "UX Research", "Design Systems"],
    path: "/edgex",
  },
];

const CaseStudy = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const router = useRouter(); // ✅ Add this line

  const handleShowMore = () => {
    setVisibleCount(caseStudies.length);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);
  };
  const handleTitleClick = (path) => {
    router.prefetch(path); // Prefetch the page
    router.push(path); // Navigate immediately
  };

  // Function to determine margin top class
  const getMarginTopClass = (index) => {
    if (index === 1) return "lg:mt-[200px]";
    if (index === 2) return "lg:mt-[-200px]";
    if (index === 4) return "lg:mt-[-200px]";
    return "lg:mt-0";
  };
  return (
    <div className="w-full h-auto bg-[#0C1F0C]">
      <div className="mb-20 w-11/12 lg:w-10/12 mx-auto">
        {/* Heading */}
        <div className="flex items-center gap-3 pb-12 ">
          <div className="relative h-14 w-14 lg:h-28 lg:w-28 ">
            <Image
              src="/Image/Stargreen.png"
              alt="Logo"
              fill
              className="object-contain new"
            />
            <Image
              src="/Image/text-icon.svg"
              alt="Logo Overlay"
              width={25}
              height={25}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform lg:w-14 lg:h-16"
            />
          </div>
          <h1 className="text-[32px] font-medium text-white lg:text-6xl">
            Our Case Studies
          </h1>
        </div>

        {/* Case Studies */}
        <div className="grid lg:grid-cols-2 gap-10">
          {caseStudies.slice(0, visibleCount).map((study, index) => (
            <div
              key={study.title + index}
              className={`group w-full pt-3 lg:py-5 lg:px-0 px-2 pb-10 h-auto   lg:h-[650px] xl:h-[720px] 2xl:h-[870px] relative lg:hover:-rotate-3 duration-300    rounded-[32px]   ${getMarginTopClass(
                index
              )}`}
            >
              {/* Background */}
              <div className="absolute block lg:hidden left-0 top-0 z-0 w-full h-full">
                <Image
                  src="/Image/Subtract.jpg"
                  alt="Background"
                  fill
                  className="object-center"
                  priority
                />
              </div>
              <div className="absolute hidden lg:block left-0 top-0 z-0 w-full h-full">
                <Image
                  src="/Image/Subtract2.png"
                  alt="Background"
                  fill
                  className="object-fill "
                  priority
                />
              </div>

              <div className="absolute block lg:hidden  right-2 bottom-3 z-10  ">
                <Image
                  src="/Image/new2.svg"
                  alt="Star Icon"
                  height={76}
                  width={76}
                  className="object-cover h-[38px] w-[38px] lg:h-14 lg:w-14"
                />
              </div>
              <div className="hidden lg:block absolute right-[35px] xl:group-hover:translate-x-9 2xl:group-hover:translate-x-6   bottom-1 -z-20   2xl:bottom-4 transition-transform duration-500">
                <Image
                  src="/Image/new2.svg"
                  alt="Star Icon"
                  height={76}
                  width={76}
                  className="object-cover h-[38px] w-[38px] lg:h-14 lg:w-14"
                />
              </div>
              <div className=" hidden lg:block group-hover:-translate-x-38 group-hover:-translate-y-38 gro absolute right-[0px] bottom-0 z-10 duration-500 rounded-4xl     w-40 h-40 bg-white"></div>
              {/* Content */}
              <div className="relative z-50 px-[15px] py-[7px] lg:px-6 ">
                <div
  data-cursor-hover
  onClick={() => handleTitleClick(study.path)}
  className="relative w-full lg:rounded-3xl aspect-[4/3] max-h-[600px] rounded-xl overflow-hidden"
>
  <Image
    src={study.image}
    alt={study.title}
    fill
    className="object-fill"
    priority
  />
</div>


                <h1 className="pt-5 lg:pt-9 text-black font-medium text-[16px] lg:text-2xl">
                  {study.title}
                </h1>

                <p className="text-black text-[11px] font-light mt-4 lg:mt-6 lg:text-[14px]">
                  {study.description}
                </p>

                <div className="mt-7 flex gap-[9px] flex-wrap">
                  {study.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#E8E8E8] inline-block text-[9px] text-[#0C1F0C] lg:text-[14px] lg:py-3 lg:px-5 lg:rounded-4xl py-[9px] px-3 rounded-2xl"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < caseStudies.length && (
          <div onClick={handleShowMore} className="flex justify-center ">
            <div className="group mt-12  flex items-center">
              <button className="relative z-30 flex items-center justify-center overflow-hidden rounded-full border-2 border-[#B8DE19] px-6 py-[10px] text-[17px] font-medium text-white transition-all duration-700 hover:text-black">
                See More...
                {/* Animated star and arrow container */}
                <div className="relative ml-2 inline-block h-8 w-8">
                  {/* Star image (visible by default) */}
                  <Image
                    src="/Image/Star.svg"
                    alt="Star Icon"
                    width={24}
                    height={24}
                    className="absolute inset-0 m-auto h-6 w-6 transition-opacity duration-300 group-hover:opacity-0"
                  />

                  {/* Hover background circle */}
                  <div className="absolute inset-0 m-auto h-7 w-7 rounded-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Arrow icon */}
                  <GoArrowRight className="absolute inset-0 m-auto h-5 w-4 text-black transition-transform duration-300 group-hover:w-5 group-hover:-rotate-[60deg] group-hover:text-[#B8DE19]" />
                </div>
                {/* Expanding hover dot effect */}
                <span className="absolute bottom-[33px] right-[45px] -z-20 h-0.5 w-0.5 translate-y-full rounded-md bg-[#B8DE19] transition-all duration-700 group-hover:scale-[300]" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudy;
