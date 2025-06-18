import React from "react";
import Navbar2 from "../Navbar/Navber2";
// import Animation from "../HeroAnimation/Animation";
import Container from "../HeroAnimation/Container";
import MarqueeSection from "../HeroAnimation/MarqueeSection";

const Hero = () => {
  return (
    <div
      id="hero"
      className=" relative h-screen max-h-[900px] w-full bg-[#0C1F0C] pt-8  overflow-hidden "
    >
      <div className=" w-11/12 mx-auto h-auto lg:w-10/12 ">
        <Navbar2></Navbar2>
        
      </div>
      <div className="hidden lg:block">
        {/* <Animation></Animation> */}
      </div>
      <div className="block lg:hidden">
        {" "}
        <Container/>
      </div>
      <h1 className="mt-8 flex items-center justify-center text-[20px] text-white font-medium">
  Trusted by 150+ brands <span className="font-light ml-2">worldwide</span>
</h1>

      <MarqueeSection></MarqueeSection>
    </div>
  );
};

export default Hero;
