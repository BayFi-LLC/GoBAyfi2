'use client';
import { GoArrowRight, GoArrowUp, GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import {
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import "./Footer.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FooterBtn from "./FooterBtn";
 


const Footer = () => {
 const router = useRouter();

  const scrollToSection = (id) => {
    if (router.pathname !== '/') {
      router.push(`/${id}`);
    } else {
      const el = document.querySelector(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
 
 
  const openCalendlyPopup = () => {
    window.open(
      "https://calendly.com/bayfistudio/30min",
      "_blank",
      "noopener noreferrer",
    );
  };
  return (
    <>
      <div className="h-auto  relative z-0 w-full bg-[#091609] pt-10 lg:pt-24 -mt-1">
        <div className="mx-auto w-11/12 lg:w-10/12">
          <div className="mx-auto flex h-auto w-10/12 flex-col justify-between lg:hidden">
            {/* 1st child div */}

            <div>
              <h1 className="mx-auto px-5 text-center text-[32px] font-medium text-white">
                We would love to hear from you.
              </h1>
              <p className="mt-6 text-center text-[16px] font-light text-white">
                Feel free to reach our if you want to collaborate with us, or
                simply have a chat
              </p>
              {/* btn start */}
              <div onClick={openCalendlyPopup} className="  mt-10 flex justify-center">
                <button className=":text-black group relative z-30 flex items-center justify-center overflow-hidden rounded-[100px] border-2 border-[#B8DE19] bg-black px-6 py-[12px] text-[18px] font-medium text-white transition-all duration-700 after:absolute after:bottom-[30px] after:right-[30px] after:-z-20 after:h-0.5 after:w-0.5 after:translate-y-full after:rounded-md after:bg-[rgba(184,222,25,0.30)] after:transition-all after:duration-700 after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 group-hover:border-[rgba(184,222,25,0.70)]">
                  Start a new project
                  <div className="group relative ml-2 inline-block h-8 w-8">
                    {/* Default Image */}
                    <Image
                      src="/Image/Star.svg"
                      alt="Star Icon"
                      width={24} // h-6 = 24px
                      height={24} // w-6 = 24px
                      className="absolute inset-0 m-auto transition-opacity duration-300 group-hover:opacity-0"
                    />

                    {/* New div on hover */}
                    <div className="absolute inset-0 m-auto h-5 w-5 rounded-full bg-[rgba(184,222,25,0.30)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                    {/* Arrow */}
                    <GoArrowRight className="absolute inset-0 m-auto h-4 w-4 text-black transition-transform duration-300 group-hover:z-50 group-hover:w-4 group-hover:rotate-[40deg] group-hover:text-[#B8DE19]" />
                  </div>
                </button>
              </div>
              {/* btn  end */}
            </div>
            {/* 1st child end */}
            {/* 2nd child start */}
            <div className="mt-6">
              <h1 className="mb-6 text-center text-2xl font-medium text-white">
                Navigation
              </h1>

              <div onClick={() => scrollToSection("#services")} className=" cursor-pointer w-full text-center text-white  ">
                <div className="group mb-3 flex items-center justify-center gap-1 ">
                  <h1 className="font-light text-white transition-all duration-[300ms] ease-linear group-hover:border-b-2 group-hover:border-b-[#B8DE19] group-hover:text-[#B8DE19]  ">
                    Services
                  </h1>
                  <GoArrowUpRight className="opacity-0 transition-all duration-[300ms] ease-linear group-hover:text-[#B8DE19] group-hover:opacity-100" />
                </div>
              </div>
              <div onClick={() => scrollToSection("#subcription")} className="cursor-pointer w-full text-center text-white">
                <div className="group mb-3 flex items-center justify-center gap-1">
                  <h1 className="font-light text-white transition-all duration-[300ms] ease-linear group-hover:border-b-2 group-hover:border-b-[#B8DE19] group-hover:text-[#B8DE19]">
                    Benefits
                  </h1>
                  <GoArrowUpRight className="opacity-0 transition-all duration-[300ms] ease-linear group-hover:text-[#B8DE19] group-hover:opacity-100" />
                </div>
              </div>
              <div onClick={() => scrollToSection("#portfolio")} className=" cursor-pointer w-full text-center text-white">
                <div className="group mb-3 flex items-center justify-center gap-1">
                  <h1 className="font-light text-white transition-all duration-[300ms] ease-linear group-hover:border-b-2 group-hover:border-b-[#B8DE19] group-hover:text-[#B8DE19]">
                    Portfolio
                  </h1>
                  <GoArrowUpRight className="opacity-0 transition-all duration-[300ms] ease-linear group-hover:text-[#B8DE19] group-hover:opacity-100" />
                </div>
              </div>
              <div onClick={() => scrollToSection("#pricing")} className="cursor-pointer w-full text-center text-white">
                <div className="group mb-3 flex items-center justify-center gap-1">
                  <h1 className="font-light text-white transition-all duration-[300ms] ease-linear group-hover:border-b-2 group-hover:border-b-[#B8DE19] group-hover:text-[#B8DE19]">
                    Pricing
                  </h1>
                  <GoArrowUpRight className="opacity-0 transition-all duration-[300ms] ease-linear group-hover:text-[#B8DE19] group-hover:opacity-100" />
                </div>
              </div>
              <div onClick={() => scrollToSection("#contact")} className="w-full text-center cursor-pointer text-white">
                <div className="group mb-3 flex items-center justify-center gap-1">
                  <h1 className="font-light text-white transition-all duration-[300ms] ease-linear group-hover:border-b-2 group-hover:border-b-[#B8DE19] group-hover:text-[#B8DE19]">
                    Contact us
                  </h1>
                  <GoArrowUpRight className="opacity-0 transition-all duration-[300ms] ease-linear group-hover:text-[#B8DE19] group-hover:opacity-100" />
                </div>
              </div>
            </div>
            {/* 2nd child end */}
            {/* icon section star */}
            <div className="mx-auto mt-12 flex gap-10">
              <a
                href="https://dribbble.com/gobayfi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDribbble className="size-6 font-light text-[#4D5D0B] transition-all duration-[200ms] ease-linear hover:text-[#B8DE19]" />
              </a>
              <a
                href=" https://www.facebook.com/bayfistudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFacebook className="size-6 font-light text-[#4D5D0B] transition-all duration-[200ms] ease-linear hover:text-[#B8DE19]" />
              </a>
              <a
                href="https://www.instagram.com/gobayfi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="size-6 font-light text-[#4D5D0B] transition-all duration-[200ms] ease-linear hover:text-[#B8DE19]" />
              </a>
              <a
                href=" https://www.linkedin.com/company/gobayfi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="size-6 font-light text-[#4D5D0B] transition-all duration-[200ms] ease-linear hover:text-[#B8DE19]" />
              </a>
              <a
                href=" https://www.youtube.com/@gobayfi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="size-6 font-light text-[#4D5D0B] transition-all duration-[200ms] ease-linear hover:text-[#B8DE19]" />
              </a>
            </div>

            {/* icon section end */}
          </div>
          {/* 3rd child start */}

          <div className="mt-12 flex items-center justify-between lg:hidden">
            <div className=" ">
              <h1 className="text-lg font-medium text-white">Drop us a line</h1>
              <div
                onClick={() => {
                  window.open("mailto:hello@gobayfi.com", "_blank");
                }}
                className="group flex items-center overflow-hidden"
              >
                <CiMail
                  size="30px"
                  className="mr-2 text-white transition-all duration-[300ms] ease-linear group-hover:text-[#B8DE19]"
                />
                {/* Adjust size for consistency */}
                <h1 className="text-base font-light text-white transition-all duration-[300ms] ease-linear group-hover:border-b-2 group-hover:border-b-[#B8DE19] group-hover:text-[#B8DE19]">
                hello@gobayfi.com
                </h1>
              </div>
            </div>
            <div className="">
              <h1 className="text-lg font-medium text-white">
                Direct Message Us
              </h1>
              <div
                onClick={() => {
                  window.open("https://wa.me/8801313395681", "_blank");
                }}
                className="group flex items-center cursor-pointer"
              >
                <FaWhatsapp
                  size="30px"
                  className="mr-2 text-white transition-all duration-[300ms] ease-linear group-hover:text-[#B8DE19]"
                />
                {/* Adjust size for consistency */}
                <h1 className="text-base font-light text-white transition-all duration-[300ms] ease-linear group-hover:border-b-2 group-hover:border-b-[#B8DE19] group-hover:text-[#B8DE19]">
                  +8801313395681
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-11 h-full w-full border-t-2 border-t-[#B8DE19] bg-[#091609] pt-[22px]  lg:hidden pb-7">
            <h1 className="text-center font-light text-white/40">
              ©BayFi Studio 2024. All rights reserved
            </h1>
            <div className="mx-auto flex items-center justify-center">
              <div className="mr-3 h-1 w-1 rounded-full bg-white/40"></div>
            <Link href="/termsandcondition">
            <h1 className="text-base text-white/40 hover:text-white hover:underline cursor-pointer">
                Terms & Condition
              </h1></Link>
              <div className="ml-5 mr-3 h-1 w-1 rounded-full bg-white/40"></div>
              <Link href="/privacypolicy">
              <h1 className="text-base text-white/40 hover:text-white hover:underline ">
                Privacy Policy
              </h1></Link>
            </div>
          </div>

          {/* 3rd child end */}
          {/* new start */}
          {/*  hidden div */}
          <div className="hidden lg:block pb-7">
            <div className="flex justify-between">
              {/* 1st div start */}
              <div>
                <h1 className="max-w-[400px] text-5xl font-medium text-white">
                  We would love to hear from you.
                </h1>
                <p className="mt-9 max-w-[306px] text-base font-light text-white">
                  Feel free to reach out if you want to collaborate with us, or
                  simply have a chat
                </p>
                <div onClick={openCalendlyPopup} className="mt-10 flex">
                  <button className="group relative z-30 flex items-center justify-center overflow-hidden rounded-full border-2 border-[#B8DE19] bg-black px-6 py-3 text-lg font-medium text-white transition-all duration-700 hover:border-[rgba(184,222,25,0.70)]">
                    Start a new project
                    {/* Star + Hover Effects */}
                    <div className="relative ml-2 inline-block h-8 w-8">
                      {/* Default Star Icon */}
                      <Image
                        src="/Image/Star.svg"
                        alt="Star Icon"
                        width={24}
                        height={24}
                        className="absolute inset-0 m-auto transition-opacity duration-300 group-hover:opacity-0"
                      />

                      {/* Hover Effect Circle */}
                      <div className="absolute inset-0 m-auto h-5 w-5 rounded-full bg-[rgba(184,222,25,0.30)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                      {/* Arrow Icon */}
                      <GoArrowRight className="absolute inset-0 m-auto h-4 w-4 text-black transition-transform duration-300 group-hover:rotate-[40deg] group-hover:text-[#B8DE19]" />
                    </div>
                    {/* Background expanding hover effect */}
                    <span className="absolute bottom-7 right-9 -z-20 h-0.5 w-0.5 translate-y-full rounded-md bg-[rgba(184,222,25,0.30)] transition-all duration-700 group-hover:scale-[300]"></span>
                  </button>
                </div>
                <h1 className="mt-[59px] text-xl font-light text-white">
                  Follow us here
                </h1>
                <div className="mx-auto mt-[22px] flex gap-10">
                  <a
                    href="https://dribbble.com/gobayfi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaDribbble className="size-6 font-light text-[#4D5D0B] transition-all duration-[200ms] ease-linear hover:text-[#B8DE19]" />
                  </a>
                  <a
                    href="https://www.facebook.com/bayfistudio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiFacebook className="size-6 font-light text-[#4D5D0B] transition-all duration-[200ms] ease-linear hover:text-[#B8DE19]" />
                  </a>
                  <a
                    href="https://www.instagram.com/gobayfi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="size-6 font-light text-[#4D5D0B] transition-all duration-[200ms] ease-linear hover:text-[#B8DE19]" />
                  </a>
                  <a
                    href="  https://www.linkedin.com/company/gobayfi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="size-6 font-light text-[#4D5D0B] transition-all duration-[200ms] ease-linear hover:text-[#B8DE19]" />
                  </a>
                  <a
                    href=" https://www.youtube.com/@gobayfi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="size-6 font-light text-[#4D5D0B] transition-all duration-[200ms] ease-linear hover:text-[#B8DE19]" />
                  </a>
                </div>
                <div className="mt-16 flex items-center">
                  <h1 className="text-base font-light text-white">
                    ©Bayfi Studio 2024. All rights reserved
                  </h1>
                  <div className="mx-3 h-1 w-1 rounded-full bg-white"></div>
                  <Link href="/termsandcondition">
                  <h1 className="text-white/40 hover:text-white hover:underline cursor-pointer">Terms & Condition</h1>
                  </Link>
                  <div className="mx-3 h-1 w-1 rounded-full bg-white"></div>
                  <Link href="/privacypolicy">
                  <h1 className="text-white/40 hover:text-white hover:underline cursor-pointer">Privacy Policy</h1>
                  </Link>
                </div>
              </div>
              {/* 1st div end */}
              {/* 2nd div start */}
              <div>
                <h1 className="mb-2 text-2xl font-medium text-white">
                  Navigations
                </h1>

                <div onClick={() => scrollToSection('#services')} className="w-full text-white cursor-pointer">
                  <div className="group mt-5 flex items-center gap-1">
                    <h1 className="font-light text-white transition-all duration-[300ms] ease-linear group-hover:border-b-2 group-hover:border-b-[#B8DE19] group-hover:text-[#B8DE19]">
                      Services
                    </h1>
                    <GoArrowUpRight className="opacity-0 transition-all duration-[300ms] ease-linear group-hover:text-[#B8DE19] group-hover:opacity-100" />
                  </div>
                </div>
                <div  onClick={() => scrollToSection('#subcription')}  className="w-full text-white cursor-pointer">
                  <div className="group mt-5 flex items-center gap-1">
                    <h1 className="font-light text-white transition-all duration-[300ms] ease-linear group-hover:border-b-2 group-hover:border-b-[#B8DE19] group-hover:text-[#B8DE19]">
                      Benefits
                    </h1>
                    <GoArrowUpRight className="opacity-0 transition-all duration-[300ms] ease-linear group-hover:text-[#B8DE19] group-hover:opacity-100" />
                  </div>
                </div>
                <div  onClick={() => scrollToSection('#portfolio')}  className="w-full text-white cursor-pointer">
                  <div className="group mt-5 flex items-center gap-1">
                    <h1 className="font-light text-white transition-all duration-[300ms] ease-linear group-hover:border-b-2 group-hover:border-b-[#B8DE19] group-hover:text-[#B8DE19]">
                      Portfolio
                    </h1>
                    <GoArrowUpRight className="opacity-0 transition-all duration-[300ms] ease-linear group-hover:text-[#B8DE19] group-hover:opacity-100" />
                  </div>
                </div>
                <div  onClick={() => scrollToSection('#pricing')} className="w-full text-white cursor-pointer">
                  <div className="group mt-5 flex items-center gap-1">
                    <h1 className="font-light text-white transition-all duration-[300ms] ease-linear group-hover:border-b-2 group-hover:border-b-[#B8DE19] group-hover:text-[#B8DE19]">
                      Pricing
                    </h1>
                    <GoArrowUpRight className="opacity-0 transition-all duration-[300ms] ease-linear group-hover:text-[#B8DE19] group-hover:opacity-100" />
                  </div>
                </div>
            
                <div  onClick={() => scrollToSection('#contact')}  className="w-full text-white cursor-pointer ">
                  <div className="group mt-5 flex items-center gap-1">
                    <h1 className="font-light text-white transition-all duration-[300ms] ease-linear group-hover:border-b-2 group-hover:border-b-[#B8DE19] group-hover:text-[#B8DE19]">
                      Contact us
                    </h1>
                    <GoArrowUpRight className="opacity-0 transition-all duration-[300ms] ease-linear group-hover:text-[#B8DE19] group-hover:opacity-100" />
                  </div>
                </div>
              </div>
              {/* 2nd div end */}
              {/* 3rd div start */}
              <div>
                <h1 className="text-2xl font-medium text-white">
                  Drop us a line
                </h1>

                <div
                  onClick={() => {
                    window.open("mailto:hello@gobayfi.com", "_blank");
                  }}
                  className=" cursor-pointer group mt-6 flex items-center overflow-hidden"
                >
                  <CiMail
                    size="30px"
                    className="mr-2 text-white transition-all duration-[300ms] ease-linear group-hover:text-[#B8DE19]"
                  />
                  {/* Adjust size for consistency */}
                  <h1 className="text-base font-light text-white transition-all duration-[300ms] ease-linear group-hover:border-b-2 group-hover:border-b-[#B8DE19] group-hover:text-[#B8DE19]">
                  hello@gobayfi.com
                  </h1>
                </div>

                <h1 className="mt-20 text-2xl font-medium text-white">
                  Direct Message Us
                </h1>
                <div
                  onClick={() => {
                    window.open("https://wa.me/8801313395681", "_blank");
                  }}
                  className="group mt-6 flex items-center overflow-hidden cursor-pointer"
                >
                  <FaWhatsapp
                    size="30px"
                    className="mr-2 text-white transition-all duration-[300ms] ease-linear group-hover:text-[#B8DE19]"
                  />
                  {/* Adjust size for consistency */}
                  <h1 className="text-base font-light text-white transition-all duration-[300ms] ease-linear group-hover:border-b-2 group-hover:border-b-[#B8DE19] group-hover:text-[#B8DE19]">
                    +8801313395681
                  </h1>
                </div>

                {/* button start */}

                {/* <button onClick={() => scrollToSection('#hero')}   className="Btn2 group mt-[142px]">
                  <div className="text2 text-5xl">BACK TO TOP</div>
                  <div className="sign2">
                    <div className="relative h-6 w-6 group">
                 
                      <Image
                        src="/Image/Star.svg"
                        alt="Logo"
                        fill
                        className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />

                   
                      <GoArrowUp className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-white transition-all duration-300 group-hover:h-4 group-hover:w-4 group-hover:text-black" />
                    </div>
                  </div>
                </button> */}
               <div  onClick={() => scrollToSection('#hero')}  className="  mt-[142px] flex justify-center ">
                 <FooterBtn></FooterBtn>
               </div>

                {/* button end */}
              </div>
              {/* 3rd div end */}
            </div>
          </div>
          {/*  div end */}

          {/*1st three div  */}
          {/* new end */}
        </div>
      </div>
    </>
  );
};

export default Footer;
