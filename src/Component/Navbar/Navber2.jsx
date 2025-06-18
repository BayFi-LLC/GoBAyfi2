"use client";

import { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";

import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

import { smoother } from "../Smothscrolling";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openCalendlyPopup = () => {
    window.open(
      "https://calendly.com/bayfistudio/30min",
      "_blank",
      "noopener noreferrer"
    );
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClick = (id) => {
    scrollToSection(id);
    toggleMenu();
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      smoother?.paused(true); // scrolling off
    } else {
      document.body.style.overflow = "";
      smoother?.paused(false); // scrolling on
    }
  }, [isMenuOpen]);

  return (
    <section className=" ">
      <div
        className={`fixed top-0 left-0 z-[9999] h-screen w-screen pb-24 transition-all duration-1000 ease-linear ${
          isMenuOpen
            ? "mt-10 translate-x-0 translate-y-0 scale-100 rounded-[50%] opacity-100"
            : "translate-x-[45%] translate-y-[-45%] scale-0 rounded-full opacity-0"
        } `}
      >
        <div
          className={`${
            isMenuOpen ? "opacity-100" : "opacity-0"
          } mt-12 flex h-full cursor-pointer flex-col items-center justify-center gap-1 md:gap-5 text-3xl leading-[3.25rem] text-black transition-all duration-1000 md:text-4xl`}
        >
          <button onClick={() => handleMenuClick("#services")} className="cursor-pointer">
            Services
          </button>
          <button onClick={() => handleMenuClick("#subcription")}>Benefits</button>
          <button onClick={() => handleMenuClick("#portfolio")}>Portfolio</button>
          <button onClick={() => handleMenuClick("#pricing")}>Pricing</button>
          <button onClick={() => handleMenuClick("#how-we-work")}>Process</button>
          <button onClick={() => handleMenuClick("#contact")}>Contact Us</button>

          <div onClick={openCalendlyPopup} className="group flex items-center pr-7">
            <button className="mt-4 border-2 text-2xl ml-10 px-8 rounded-full py-[11px]">
              Book a Call
              <div className="relative ml-2 inline-flex h-5 w-5 items-center justify-center">
                {/* Default Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/Image/conBtnBlack.svg"
                    alt="Star Icon"
                    fill
                    sizes="100%"
                    className="transition-opacity duration-300 group-hover:opacity-0"
                  />
                </div>

                {/* Black Circle on hover */}
                <div className="absolute inset-0 rounded-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* Arrow Icon */}
                <GoArrowRight className="absolute h-3 w-3 text-black transition-all duration-300 group-hover:h-4 group-hover:w-4 group-hover:-rotate-60 group-hover:text-[#B8DE19]" />
              </div>
              {/* Background hover effect */}
              <span className="absolute bottom-5 right-6 -z-20 h-0.5 w-0.5 translate-y-full rounded-md bg-[#B8DE19] transition-all duration-700 group-hover:scale-[300] 2xl:bottom-6 2xl:right-9"></span>
            </button>
          </div>

          <div className="mt-16 flex w-[95vw] justify-around text-base font-medium text-[#0C1F0C] md:text-2xl">
            <div className="flex flex-col gap-2">
              <h1>Drop us a line</h1>
              <div
                onClick={() => {
                  window.open("mailto:hello@gobayfi.com", "_blank");
                }}
                className="flex items-center justify-center gap-1 "
              >
                <CiMail className="size-5" />
                <p className="text-sm font-light md:text-xl">hello@gobayfi.com</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1>Direct Message Us</h1>
              <div
                onClick={() => {
                  window.open("https://wa.me/8801313395681", "_blank");
                }}
                className="flex items-center justify-center gap-1"
              >
                <FaWhatsapp className="size-5 md:size-7" />
                <p className="text-sm font-light md:text-xl">+880 1313-395681</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`fixed lg:hidden   z-[999] mx-auto box-border flex   h-14 w-11/12 items-center justify-between rounded-full bg-black transition-all duration-1000 lg:h-[88px] ${
          isMenuOpen ? "scale-100 opacity-100" : "scale-100 opacity-0"
        } `}
      >
        {/* Logo */}
        <Image
          src="/Image/Primary Logo.svg"
          alt="Logo"
          className="h-[23px] cursor-pointer pl-4 lg:ml-7 lg:h-[38px] lg:w-[144px]"
          width={144}
          height={38}
        />

        {/* Menu Toggle for Mobile */}
        <div
          onClick={toggleMenu}
          className="mr-3 flex size-10 cursor-pointer items-center justify-center lg:hidden"
        >
          <img
            src={isMenuOpen ? "/Image/Menu Close.svg" : "/Image/Menu.svg"}
            alt="Menu Toggle"
            className=""
          />
        </div>
      </nav>

      <nav className="z-50 mx-auto box-border flex h-14 w-full items-center justify-between rounded-full bg-white/5 lg:h-[76px] xl:h-[80px] 2xl:h-[88px]">
        {/* Logo */}
        <motion.div
          layoutId="main-logo"
          className="relative z-[90] flex items-center gap-[6px] lg:gap-2 cursor-pointer pl-8 lg:pl-4 lg:ml-1 lg:h-[30px] xl:ml-3 2xl:ml-5"
          transition={{
            duration: 1.1,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/Image/icon mark.svg"
            alt="Icon"
            width={23}
            height={23}
            className="object-contain lg:h-8 lg:w-8"
            priority
          />
          <Image
            src="/Image/Wordmark.svg"
            alt="Wordmark"
            width={48}
            height={22}
            className="object-contain lg:h-8 lg:w-[74px]"
            priority
          />
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden lg:block">
          <ul className="flex items-center justify-center gap-1 font-normal text-white xl:gap-4 2xl:gap-7">
            <li onClick={() => scrollToSection("#services")}>
              <button className="btn5 mt-[10px]">
                <span className="btn-text-one1">Servicess</span>
                <span className="btn-text-two2">Services</span>
              </button>
            </li>
            <li onClick={() => scrollToSection("#subcription")}>
              <button className="btn5 mt-[10px]">
                <span className="btn-text-one1">Benefits</span>
                <span className="btn-text-two2">Benefits</span>
              </button>
            </li>
            <li onClick={() => scrollToSection("#portfolio")}>
              <button className="btn5 mt-[10px]">
                <span className="btn-text-one1">Portfolio</span>
                <span className="btn-text-two2">Portfolio</span>
              </button>
            </li>
            <li onClick={() => scrollToSection("#pricing")}>
              <button className="btn5 mt-[10px]">
                <span className="btn-text-one1">Pricing</span>
                <span className="btn-text-two2">Pricing</span>
              </button>
            </li>
            <li onClick={() => scrollToSection("#how-we-work")}>
              <button className="btn5 mt-[10px]">
                <span className="btn-text-one1">Process</span>
                <span className="btn-text-two2">Process</span>
              </button>
            </li>
            <li onClick={() => scrollToSection("#contact")}>
              <button className="btn5 ml-3 mr-5 mt-[10px]">
                <span className="btn-text-one1">Contact Us</span>
                <span className="btn-text-two2">Contact Us</span>
              </button>
            </li>

            {/* Button */}
            <div onClick={openCalendlyPopup} className="group flex items-center pr-7">
              <button className="cursor-pointer relative z-30 flex items-center justify-center overflow-hidden whitespace-nowrap rounded-full border-2 border-[#B8DE19] px-4 py-2.5 text-[17px] font-medium text-white transition-all duration-700 hover:text-black xl:px-5 xl:py-3 2xl:px-6 2xl:py-[13px]">
                Book a Call
                <div className="relative ml-2 inline-flex h-5 w-5 items-center justify-center">
                  {/* Default Image */}
                  <div className="absolute inset-0">
                    <Image
                      src="/Image/Star.svg"
                      alt="Star Icon"
                      fill
                      sizes="100%"
                      className="transition-opacity duration-300 group-hover:opacity-0"
                    />
                  </div>

                  {/* Black Circle on hover */}
                  <div className="absolute inset-0 rounded-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                  {/* Arrow Icon */}
                  <GoArrowRight className="absolute h-3 w-3 text-black transition-all duration-300 group-hover:h-4 group-hover:w-4 group-hover:-rotate-60 group-hover:text-[#B8DE19]" />
                </div>
                {/* Background hover effect */}
                <span className="absolute bottom-5 right-6 -z-20 h-0.5 w-0.5 translate-y-full rounded-md bg-[#B8DE19] transition-all duration-700 group-hover:scale-[300] 2xl:bottom-6 2xl:right-9"></span>
              </button>
            </div>
          </ul>
        </div>

        <div
          onClick={toggleMenu}
          className={`relative z-30 mr-3 flex size-10 cursor-pointer items-center justify-center rounded-full bg-none transition-all duration-1000 after:absolute after:bottom-[100%] after:right-0 after:-z-20 after:size-10 after:translate-y-full after:rounded-full after:bg-[#B8DE19] after:text-black lg:hidden ${
            isMenuOpen
              ? "animate-fadeIn text-black after:z-50 after:scale-[100] after:opacity-100"
              : "after:scale-0 after:opacity-90 after:duration-1000"
          }`}
        >
          <img
            src={isMenuOpen ? "/Image/Menu Close.svg" : "/Image/Menu.svg"}
            alt="Menu Toggle"
            className=""
          />
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
