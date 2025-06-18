"use client";
import Book from "@/Component/Booking/Book";
import CaseStudy from "@/Component/CaseStudy/CaseStudy";
import Hero from "@/Component/HeroSection/Hero";
import IntroScreen from "@/Component/Intro/IntroScreen";
import Hudai from "@/Component/ParalaxScrolling/ParallaxScrolling/Hudai";
import Marque from "@/Component/Portfolio/Portfolio";
import Pricing from "@/Component/Pricing/Pricing";
import Test from "@/Component/Service/Service/Test";
import SubscriptionCopy from "@/Component/Subcription/SubscriptionCopy";
import Marque2 from "@/Component/Testimonial/Marque2";
import Working from "@/Component/WorkingSection/Working";
 
 

export default function Home() {
 

  return (
     
     
<>
  {/* 👇 Always render all sections */}
      <Hero />
      <Marque />
      <Working />
      <CaseStudy />
      <Hudai />
      <Test />
      <Pricing />
      <Book />
      <SubscriptionCopy />
      <Marque2 />
</>
   
  );
}
