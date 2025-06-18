"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ReactDOM from "react-dom";
import Card from "../Card/Card";


// Inline Modal Component with Portal
const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="w-11/12 max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <video
            className="h-64 w-full sm:h-96"
            src={videoSrc}
            controls
            autoPlay
          />
          <button
            onClick={onClose}
            className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#B8DE19] text-white"
          >
            ✕
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
const cardData = [
  {
    title: "Discovery",
    description: "We start by listening to your vision and understanding your needs.",
  },
  {
    title: "Ideation",
    description: "We brainstorm creative concepts that bring your ideas to life.",
  },
  {
    title: "Design & Development",
    description: "We craft stunning designs and develop solutions that work beautifully.",
  },
  {
    title: "Launch & Grow",
    description: " We launch your project and help you grow it further.",
  },
];
const Working = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const openModal = () => {
    // setVideoSrc("/Image/bayzidvideo.mp4");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setVideoSrc("");
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <div id="how-we-work" className="relative bg-[#0C1F0C] pb-11 text-white">
        {/* Header Section */}
        <div className="pt-16">
          <div className="mx-auto flex w-10/12 items-center justify-center gap-4">
            <Image
              src="/Image/newStar.svg"
              alt="Star Icon"
              width={112}
              height={68}
              className="h-16 w-12 md:h-20 md:w-16 lg:h-[68px] lg:w-28"
            />
            <h1 className="text-base font-normal text-white md:text-2xl lg:text-4xl">
              From concept to completion, we’re with you every step of the way.
              Because success is always a team effort, don’t you think?
            </h1>
          </div>
        </div>

        {/* Working Section */}
        <div className="h-auto w-full bg-[#0C1F0C] pt-16">
          <div className="h-full w-full pb-11">
            <div className="relative mx-auto w-11/12 px-5 py-8 pb-12 md:w-10/12 lg:mt-5">
              {/* Background Images */}
              <img
                src="https://i.ibb.co.com/2gWF0nw/how-we2.png"
                alt=""
                className="absolute  left-0 top-0 z-0 block h-full w-full lg:hidden"
              />
              <img
                src="https://i.ibb.co.com/RHPjvk3/how-we.png"
                alt=""
                className="absolute left-0 top-0 z-0 hidden h-full w-full lg:block"
              />

              {/* Title and Play Button */}
              <div className="flex items-center justify-between">
                <h1 className="z-50 mb-10 ml-3 mt-8 text-4xl font-medium text-black md:text-6xl lg:text-8xl">
                  How <br /> We Work?
                </h1>
                <div className="flex items-center p-1 lg:mt-16">
                  <div
                    onClick={openModal}
                    className="relative z-50 -ml-5 h-20 w-20 cursor-pointer md:-ml-6 md:h-20 md:w-20 lg:-ml-9 lg:-mt-5 lg:h-32 lg:w-32  "
                  >
                    <Image
                      src="/Image/ceo-black.svg"
                      alt="Work Icon"
                      fill
                      className="rounded-full new object-cover"
                    />
                    <div className="absolute inset-0 m-auto h-3 w-3 md:h-5 md:w-5 lg:h-6">
                      <Image
                        src="/Image/work5.svg"
                        alt="Small Work Icon"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Cards */}
              <div className="grid gap-4 md:grid-cols-2">
               {cardData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
              
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portal-based Modal (inside same file) */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoSrc={videoSrc}
      />
    </>
  );
};

export default Working;
