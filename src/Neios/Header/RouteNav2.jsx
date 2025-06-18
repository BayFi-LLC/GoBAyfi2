"use client";
import { GoArrowRight } from "react-icons/go";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { smoother } from "@/Component/Smothscrolling";
import Link from "next/link";

const RouteNav2 = () => {
   const pathname = usePathname(); // ✅ hook called at top level
    const router = useRouter(); // ✅ hook called at top level
   
  const scrollToSection = (id) => {
     if (pathname === "/") {
      // যদি home page এ থাকি
      if (smoother) {
        smoother.scrollTo(id, true, "top top");
      } else {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // অন্য path এ থাকলে "/" তে পাঠাও, সাথে section id
      router.push("/" + id); // "/" + "#services"
    }
  };

  const openCalendlyPopup = () => {
    window.open(
      "https://calendly.com/bayfistudio/30min",
      "_blank",
      "noopener noreferrer"
    );
  };

  return (
    <section className="hidden lg:block">
      <nav className="z-50 mx-auto box-border flex h-14 w-full items-center justify-between rounded-full  bg-[rgba(12,31,12,0.90)]

   lg:h-[76px] xl:h-[80px] 2xl:h-[88px]">
        {/* Logo */}
        <Link href="/" passHref>
          <Image
            src="/Image/Primary Logo.svg"
            alt="Logo"
            className="h-[27px] cursor-pointer pl-4 lg:ml-1 lg:h-[30px] lg:w-[110px] xl:ml-3 xl:w-[130px] 2xl:ml-5 2xl:w-[144px]"
            width={144}
            height={34}
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:block">
          <ul className="flex items-center justify-center gap-1 font-normal text-white xl:gap-4 2xl:gap-7">
            <li onClick={() => scrollToSection("#services")} className="">
              <button className="btn5 mt-[10px]">
                <span className="btn-text-one1">Services</span>
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
              <a>
                <button className="btn5 mt-[10px]">
                  <span className="btn-text-one1">Process</span>
                  <span className="btn-text-two2">Process</span>
                </button>
              </a>
            </li>
            <li onClick={() => scrollToSection("#contact")}>
              <button className="btn5 ml-3 mr-5 mt-[10px]">
                <span className="btn-text-one1">Contact Us</span>
                <span className="btn-text-two2">Contact Us</span>
              </button>
            </li>

            {/* Button */}
            <div
              onClick={openCalendlyPopup}
              className="group flex items-center pr-7"
            >
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
      </nav>
    </section>
  );
};

export default RouteNav2;
