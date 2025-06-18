"use client";
import Services from "./Services";
import Services2 from "./Services2";
import Services3 from "./Services3";
import Services4 from "./Services4";
import Services5 from "./Services5";
import Services6 from "./Services6";

import "./Services.css";
import { useState, useEffect } from "react";
import Image from "next/image";

const Test = () => {
  const servicesData = [
    {
      title: "Logo & Brand Identity",
      description:
        "Craft a memorable identity for your brand with custom logos, color palettes, and typography designed to reflect your core values and create a lasting impact.",
    },
    {
      title: "Web Design & Development",
      description:
        "Build engaging, responsive websites that not only look good but also deliver an intuitive user experience, driving conversions and boosting online presence.",
    },
    {
      title: "UI/UX Design",
      description:
        "Design user-centric interfaces that are both visually appealing and easy to navigate, ensuring a seamless user experience across web and mobile platforms.",
    },
    {
      title: "Video Editing & Animation",
      description:
        "Enhance your brand's storytelling through compelling video content and animations, designed to capture attention and communicate messages effectively.",
    },
    {
      title: "Graphics Design",
      description:
        "Create eye-catching graphics for marketing materials, presentations, and digital campaigns that elevate your brand's visual appeal and engagement.",
    },
    {
      title: "Digital Marketing",
      description:
        "Grow your online presence with custom social media content, strategic campaigns, and designs that build engagement and community.",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const serviceOpenModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <div
        id="services"
        className="h-auto w-full bg-black pb-11 lg:pb-36 lg:pt-10 relative"
      >
        <div className="mx-auto w-11/12 pb-12 pt-20 lg:w-10/12">
          <h1 className="text-[64px] font-medium text-white lg:text-8xl">
            Services we offer
          </h1>
        </div>

        {/* Mobile view */}
        <div className="lg:hidden">
          <div className="grid md:grid-cols-2">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="bg-black/48 mx-auto mb-6 w-11/12 rounded-2xl border border-yellow-300/30 p-6 backdrop-blur-lg"
              >
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-medium w-48 text-white">
                    {service.title}
                  </h1>

                  <div
                    onClick={serviceOpenModal}
                    className="relative h-[72px] w-[72px] cursor-pointer"
                  >
                    <Image
                      src="/Image/Stargreen2.svg"
                      alt="Logo"
                      className="new"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                    <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2">
                      <Image
                        src="/Image/Bstar.svg"
                        alt="Star Logo"
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </div>
                <h1 className="mt-6 text-sm font-light text-white">
                  {service.description}
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden lg:block">
          <Services serviceOpenModal={serviceOpenModal} />
          <Services2 serviceOpenModal={serviceOpenModal} />
          <Services3 serviceOpenModal={serviceOpenModal} />
          <Services4 serviceOpenModal={serviceOpenModal} />
          <Services5 serviceOpenModal={serviceOpenModal} />
          <Services6 serviceOpenModal={serviceOpenModal} />
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={closeModal}
          >
            <div
              className="w-11/12 max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Replace this with actual YouTube embed or video component */}
                <video
                  className="h-64 w-full sm:h-96"
                  controls
                  autoPlay
                  muted
                >
                  <source src="/Image/new.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <button
                  onClick={closeModal}
                  className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#B8DE19] text-white"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Test;
