"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import CardBtn from "./CardBtn";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";
import CardFour from "./CardFour";
import CardFive from "./CardFive";
import CardSix from "./CardSix";

gsap.registerPlugin(ScrollTrigger);

const SubscriptionCopy = () => {
  const containerRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const pathname = usePathname();

  const openCalendlyPopup = () => {
    window.open(
      "https://calendly.com/bayfistudio/30min",
      "_blank",
      "noopener noreferrer"
    );
  };
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container || pathname !== "/") return;

    // Remove old trigger
    ScrollTrigger.getById("subscription-scroll")?.kill();

    // Initial card state
    gsap.set(".card-1", { y: 0 });
    gsap.set(".card:not(.card-1)", { y: 800 });

    const tl = gsap.timeline({
      scrollTrigger: {
        id: "subscription-scroll",
        trigger: container,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        start: "top top",
        end: "+=4000px",
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(".card:not(.card-1)", { y: 0, stagger: 0.3 });

    scrollTriggerRef.current = tl.scrollTrigger;

    const handleResize = debounce(() => {
      ScrollTrigger.getById("subscription-scroll")?.kill();

      const newTimeline = gsap.timeline({
        scrollTrigger: {
          id: "subscription-scroll",
          trigger: container,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          start: "top top",
          end: "+=4000px",
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      newTimeline.to(".card:not(.card-1)", { y: 0, stagger: 0.3 });
      scrollTriggerRef.current = newTimeline.scrollTrigger;

      ScrollTrigger.refresh();
    }, 300);

    window.addEventListener("resize", handleResize);

    // Refresh to avoid layout mismatch
    setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      ScrollTrigger.getById("subscription-scroll")?.kill();
      ScrollTrigger.refresh();
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      id="subcription"
      className="relative overflow-hidden min-h-screen w-full lg:flex lg:justify-center lg:items-center bg-[#0C1F0C] pt-28"
    >
      <div className="mx-auto h-auto w-11/12 container pb-40 lg:flex lg:items-center lg:justify-between lg:w-10/12">
        <div className="relative h-full lg:w-5/12 lg:ml-36">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-medium leading-none">
              Subscription <br />
              Benefits
            </h1>
            <p className="mt-6 text-base font-normal">
              Experience the freedom to create without limits. Our subscription
              plans offer flexible, custom solutions and easy collaboration to
              help your brand grow.
            </p>
            <div onClick={openCalendlyPopup}>
              <CardBtn />
            </div>
          </div>
        </div>

        <div className="cards relative h-auto w-full mx-auto lg:mt-[-420px] lg:-mr-56 2xl:-mr-96 flex justify-center">
          <CardOne className="card card-1" />
          <CardTwo className="card card-2" />
          <CardThree className="card card-3" />
          <CardFour className="card card-4" />
          <CardFive className="card card-5" />
          <CardSix className="card card-6 z-50" />
        </div>
      </div>
    </div>
  );
};

const debounce = (fn, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
};

export default SubscriptionCopy;
