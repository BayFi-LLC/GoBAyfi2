"use client";
import { useEffect } from "react";

import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { smoother } from "@/Component/Smothscrolling";
import { usePathname, useRouter } from "next/navigation";
 
const RouteNav = ({ isMenuOpen, setIsMenuOpen }) => {
 const pathname = usePathname(); // ✅ top level e call kora thakbe
const router = useRouter();     // ✅ top level e call kora thakbe

const toggleMenu = () => {
  setIsMenuOpen((prev) => !prev);
};

const scrollToSection = (id) => {
  toggleMenu(); // 🔁 menu off kore dite chaile scroll korar age ei line ta thakbe

  if (pathname === "/") {
    if (smoother) {
      smoother.scrollTo(id, true, "top top");
    } else {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    router.push("/" + id); // e.g., /#services
  }
};

  const openCalendlyPopup = () => {
    window.open(
      "https://calendly.com/bayfistudio/30min",
      "_blank",
      "noopener noreferrer"
    );
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      smoother?.paused(true);
    } else {
      document.body.style.overflow = "";
      smoother?.paused(false);
    }

    return () => {
      document.body.style.overflow = "";
      smoother?.paused(false);
    };
  }, [isMenuOpen]);

  return (
    <section className="block lg:hidden  ">
      <div
        className={`fixed top-0 left-0 z-[9999] h-screen w-screen pb-24 transition-all duration-1000 ease-linear ${
          isMenuOpen
            ? "mt-10 translate-x-0 translate-y-0 scale-100 rounded-[50%] opacity-100"
            : "translate-x-[45%] translate-y-[-45%] scale-0 rounded-full opacity-0"
        }`}
      >
        <div
          className={`${
            isMenuOpen ? "opacity-100" : "opacity-0"
          } mt-12 flex h-full cursor-pointer flex-col items-center justify-center gap-1 md:gap-5 text-3xl leading-[3.25rem] text-black transition-all duration-1000 md:text-4xl`}
        >
          <button onClick={() => scrollToSection("#services")} >Services</button>
          <button onClick={() => scrollToSection("#subcription")} >Benefits</button>
          <button onClick={() => scrollToSection("#portfolio")} >Portfolio</button>
          <button onClick={() => scrollToSection("#pricing")}>Pricing</button>
          <button onClick={() => scrollToSection("#how-we-work")} >Process</button>
          <button  onClick={() => scrollToSection("#contact")}>Contact Us</button>

          <div
            onClick={openCalendlyPopup}
            className="group flex items-center pr-7"
          >
            <button className="mt-4 border-2 text-2xl ml-10 px-8 rounded-full py-[11px]">
              Book a Call
              <div className="relative ml-2 inline-flex h-5 w-5 items-center justify-center">
                <div className="absolute inset-0">
                  <Image
                    src="/Image/conBtnBlack.svg"
                    alt="Star Icon"
                    fill
                    sizes="100%"
                    className="transition-opacity duration-300 group-hover:opacity-0"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <GoArrowRight className="absolute h-3 w-3 text-black transition-all duration-300 group-hover:h-4 group-hover:w-4 group-hover:-rotate-60 group-hover:text-[#B8DE19]" />
              </div>
              <span className="absolute bottom-5 right-6 z-20 h-0.5 w-0.5 translate-y-full rounded-md bg-[#B8DE19] transition-all duration-700 group-hover:scale-[300] 2xl:bottom-6 2xl:right-9"></span>
            </button>
          </div>

          <div className="mt-16 flex w-[95vw] justify-around text-base font-medium text-[#0C1F0C] md:text-2xl">
            <div className="flex flex-col gap-2">
              <h1>Drop us a line</h1>
              <div
                onClick={() =>
                  window.open("mailto:yesbayzid@gmail.com", "_blank")
                }
                className="flex items-center justify-center gap-1 "
              >
                <CiMail className="size-5" />
                <p className="text-sm font-light md:text-xl">
                  hello@bayfi.studio
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1>Direct Message Us</h1>
              <div
                onClick={() =>
                  window.open("https://wa.me/8801313395681", "_blank")
                }
                className="flex items-center justify-center gap-1"
              >
                <FaWhatsapp className="size-5 md:size-7" />
                <p className="text-sm font-light md:text-xl">
                  +880 1313-395681
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Black navbar */}
      <nav
        className={`fixed z-50 mx-auto box-border flex h-14 w-11/12 items-center justify-between rounded-full bg-black transition-all duration-1000 lg:h-[88px] ${
          isMenuOpen ? "scale-100 opacity-100" : "scale-100 opacity-0"
        }`}
      >
        <Image
          src="/Image/Primary Logo.svg"
          alt="Logo"
          className="h-[23px] cursor-pointer pl-4 lg:ml-7 lg:h-[38px] lg:w-[144px]"
          width={144}
          height={38}
        />
        <div
          onClick={toggleMenu}
          className="mr-3 flex size-10 cursor-pointer items-center justify-center lg:hidden"
        >
          <img
            src={isMenuOpen ? "/Image/Menu Close.svg" : "/Image/Menu.svg"}
            alt="Menu Toggle"
          />
        </div>
      </nav>

      {/* Transparent Route nav */}
      <nav   className=" mx-auto box-border flex h-14 w-full items-center justify-between rounded-full bg-[rgba(12,31,12,0.90)] backdrop-blur-[28.4754467px]">
 
 <div    onClick={() => scrollToSection("#portfolio")}>
    <Image
    src="/Image/Primary-Logo.svg"
    alt="Logo"
    className="h-[23px] cursor-pointer pl-0.5 lg:ml-7 lg:h-[38px] lg:w-[144px] "
    width={144}
    height={38}
    
  />
 
 </div>

        <div
          onClick={toggleMenu}
          className={`relative z-30 mr-3 flex size-10 cursor-pointer items-center justify-center rounded-full bg-none transition-all duration-1000 after:absolute after:bottom-[100%] after:right-0 after:-z-20 after:size-10 after:translate-y-full after:rounded-full after:bg-[#B8DE19] after:text-black xl:hidden ${
            isMenuOpen
              ? "animate-fadeIn text-black after:z-50 after:scale-[100] after:opacity-100"
              : "after:scale-0 after:opacity-90 after:duration-1000"
          }`}
        >
          <img
            src={
              isMenuOpen ? "/Image/Menu Close.svg" : "/Image/Menu.svg"
            }
            alt="Menu Toggle"
          />
        </div>
      </nav>
    </section>
  );
};

export default RouteNav;
