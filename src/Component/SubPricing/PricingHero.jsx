"use client";
import React, { useState } from "react";
import PricingNavMobile from "./PricingNav/PricingNavMobile";
import PricingNavbarDekstop from "./PricingNav/PricingNavbarDekstop";
 

const PricingHero = () => {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  

 

  return (
    <>
    <div className="h-screen  bg-[#0C1F0C]">
           <div
        id="hero"
        className={`z-0 relative w-full pt-8  transition-all duration-500 ${
          isMenuOpen ? "overflow-hidden h-screen" : "overflow-visible h-auto"
        }`}
      >
        <div className="mb-12 w-11/12 mx-auto lg:w-10/12 block lg:hidden">
          <PricingNavMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        <div className="mb-12 lg:mb-20 w-11/12 mx-auto lg:w-10/12">
          <PricingNavbarDekstop />
        </div>

      

        

       
      </div>
    </div>
    </>
  );
};

export default PricingHero;
