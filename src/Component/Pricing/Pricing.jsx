"use client";
import { useState } from "react";
import { InlineWidget } from "react-calendly";
import Image from "next/image";
import ReactDOM from "react-dom";
import "./Pricing.css";

import PricingCard from "./PricingCard";
import PricingCard2 from "./PricingCard2";
import PricingCard3 from "./PricingCard3";
import { useEffect } from "react";

// Modal Component
const Modal = ({ isOpen, onClose }) => {
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
        className="relative w-full max-w-[70%] rounded-lg bg-white shadow-lg z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-2 z-20 cursor-pointer bg-transparent text-4xl text-black"
        >
          &times;
        </button>
        <InlineWidget url="https://calendly.com/bayfistudio/30min" />
      </div>
    </div>,
    document.body
  );
};

// Main Component
const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div id="pricing" className="relative box-border h-auto w-full bg-[#0C1F0C]">
        <div className="mx-auto h-auto w-11/12 items-center pt-24 md:w-10/12">
          {/* heading */}
          <div className="grid grid-flow-col-dense items-center justify-start gap-4">
            <div className="relative h-16 w-16 lg:h-[133px] lg:w-[133px]">
              <Image
                src="/Image/Stargreen2.svg"
                alt="Logo"
                fill
                className="relative z-10 object-contain"
              />
              <div className="absolute left-1/2 top-1/2 z-20 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform lg:h-16 lg:w-16">
                <Image
                  src="/Image/fourangle.svg"
                  alt="Angle"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="h-auto lg:max-w-[893px]">
              <h1 className="text-xl text-white lg:text-5xl">
                Your One-Stop Solution for Affordable, Flexible
                Subscription-based Pricing
              </h1>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-14 grid h-auto w-10/12 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-3 xl:gap-6">
          <PricingCard openModal={openModal} />
          <PricingCard2 openModal={openModal} />
          <div className="flex items-center justify-center md:col-span-2 lg:col-span-1">
            <PricingCard3 openModal={openModal} />
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Pricing;
