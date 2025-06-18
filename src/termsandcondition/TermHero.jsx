"use client";
import { BsDot } from "react-icons/bs";
import RouteNav from "@/Neios/Header/RouteNav";
import RouteNav2 from "@/Neios/Header/RouteNav2";
import { useState } from "react";

const TermHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div id="hero"   className={`z-0 relative w-full pt-8 transition-all duration-500 ${
          isMenuOpen ? "overflow-hidden h-screen" : "overflow-visible h-auto"
        }`}>
        <div className=" w-11/12 mx-auto lg:w-10/12 block lg:hidden">
          <RouteNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        <div className=" lg:mb-20 w-11/12 mx-auto lg:w-10/12">
          <RouteNav2 />
        </div>
        <div className=" mt-12 lg:mt-[128px] w-11/12 mx-auto lg:w-10/12">
          <h1 className=" text-2xl lg:text-5xl font-medium leading-[36px] text-[#0C1F0c]">
            Terms & Conditions for BayFi LLC
          </h1>
          <p className="mt-9 text-[13px] lg:text-[16px] lg:leading-[24px] font-normal leading-[22px] text-[#0C1F0c]">
            Welcome to the BayFi LLC website (https://gobayfi.com) (the "Site").
            These Terms & Conditions ("Terms") govern your access to and use of
            our Site and the information, services, and materials provided
            herein. BayFi LLC ("BayFi," "we," "us," or "our") is a design and
            development agency registered in Bangladesh. By accessing or using
            the Site, you agree to be bound by these Terms. If you do not agree
            to these Terms, please do not use the Site.
          </p>
          {/* One */}
          <div>
            <h1 className="mt-14 lg:mt-20 font-medium text-[18px] lg:text-4xl text-[#0C1F0c]">
              1. Use of the Site
            </h1>
            <div className="ml-[0px] lg:ml-1  lg:mt-9 grid grid-cols-[30px_1fr] items-start">
              <div className="flex items-start pt-2">
                <BsDot className="text-[24px]  lg:text-2xl text-[#0C1F0c]" />
              </div>
              <p className="text-sm leading-[28px]  lg:text-[16px] text-[#0C1F0c] mt-[6px]">
                You agree to use the Site only for lawful purposes and in a way
                that does not infringe the rights of, restrict, or inhibit
                anyone else's use and enjoyment of the Site.
              </p>
            </div>
            
            <div className="ml-[0px] lg:ml-1 grid grid-cols-[30px_1fr] items-start">
              <div className="flex items-start pt-2">
                <BsDot className="text-[24px] lg:text-2xl text-[#0C1F0c]" />
              </div>
              <p className="text-sm leading-[28px] lg:text-[16px] text-[#0C1F0c] mt-[6px]">
                Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within the Site.
              </p>
            </div>
            <div className="ml-[0px] lg:ml-1 grid grid-cols-[30px_1fr] items-start">
              <div className="flex items-start pt-2">
                <BsDot className="text-[24px] lg:text-2xl text-[#0C1F0c]" />
              </div>
              <p className="text-sm leading-[28px] lg:text-[16px] text-[#0C1F0c] mt-[6px]">
              You must not use the Site to send unsolicited commercial communications.
              </p>
            </div>
            <div className="ml-[0px] lg:ml-1 grid grid-cols-[30px_1fr] items-start">
              <div className="flex items-start pt-2">
                <BsDot className="text-[24px] lg:text-2xl text-[#0C1F0c]" />
              </div>
              <p className="text-sm leading-[28px] lg:text-[16px] text-[#0C1F0c] mt-[6px]">
                You must not use the content on the Site for any marketing-related purpose without our express written consent.
              </p>
            </div>
          </div>
            {/* two */}
          <div>
            <h1 className="mt-14 lg:mt-20 font-medium text-[18px] lg:text-4xl text-[#0C1F0c]">
             2. Intellectual Property Rights
            </h1>
            <div className="ml-[0px] lg:ml-1  lg:mt-9 grid grid-cols-[30px_1fr] items-start">
              <div className="flex items-start pt-2">
                <BsDot className="text-[24px] lg:text-2xl text-[#0C1F0c]" />
              </div>
              <p className="text-sm leading-[28px] lg:text-[16px] text-[#0C1F0c] mt-[6px]">
                All content included on the Site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of BayFi LLC or its content suppliers and protected by Bangladeshi and international copyright laws.
              </p>
            </div>
            
            <div className="ml-[0px] lg:ml-1 grid grid-cols-[30px_1fr] items-start">
              <div className="flex items-start pt-2">
                <BsDot className="text-[24px] lg:text-2xl text-[#0C1F0c]" />
              </div>
              <p className="text-sm leading-[28px] lg:text-[16px] text-[#0C1F0c] mt-[6px]">
                The compilation of all content on this Site is the exclusive property of BayFi LLC, with copyright authorship for this collection by BayFi LLC, and protected by Bangladeshi and international copyright laws.
              </p>
            </div>
            <div className="ml-[0px] lg:ml-1 grid grid-cols-[30px_1fr] items-start">
              <div className="flex items-start pt-2">
                <BsDot className="text-[24px] lg:text-2xl text-[#0C1F0c]" />
              </div>
              <p className="text-sm  leading-[28px] lg:text-[16px] text-[#0C1F0c] mt-[6px]">
             You may not systematically extract and/or re-utilize parts of the contents of the Site without our express written consent. In particular, you may not utilize any data mining, robots, or similar data gathering and extraction tools to extract (whether once or many times) for re-utilization any substantial parts of the Site without our express written consent.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default TermHero;
