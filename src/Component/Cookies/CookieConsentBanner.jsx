"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [shouldShowAfterScroll, setShouldShowAfterScroll] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (consent === "accepted") {
      loadGoogleAnalytics();
    } else if (!consent) {
      const handleScroll = () => {
        if (window.scrollY > 10000) {
          setShouldShowAfterScroll(true);
          window.removeEventListener("scroll", handleScroll);
        }
      };

      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  useEffect(() => {
    if (shouldShowAfterScroll) {
      setShowBanner(true);
    }
  }, [shouldShowAfterScroll]);

  const handleConsent = (value) => {
    localStorage.setItem("cookie_consent", value);
    setShowBanner(false);

    if (value === "accepted") {
      loadGoogleAnalytics();
    }
  };

  const loadGoogleAnalytics = () => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-PEJ72JDX1V";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-PEJ72JDX1V");
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="p-9 lg:pr-[48px]  fixed bottom-[-100px] lg:bottom-[-40px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 lg:w-10/12 xl:w-8/12 z-[999]   
            rounded-[24px] 
            border border-white 
            bg-[linear-gradient(180deg,_rgba(255,255,255,0.20)_0%,_rgba(255,255,255,0.00)_140.59%)] 
            backdrop-blur-[12px]"
        >
          {/* Close button */}
          <div
            className="fixed right-5 top-3 cursor-pointer"
            onClick={() => setShowBanner(false)}
          >
            <IoMdClose className="size-5 text-white" />
          </div>

          <div className="lg:flex lg:justify-between lg:items-center">
            {/* Icon + Text */}
            <div className="lg:grid lg:grid-cols-[24px_1fr] lg:items-center lg:gap-3">
              <div className="relative flex justify-center items-center mx-auto w-[24px] h-[24px] mb-4 lg:mb-0">
                <Image
                  src="/Image/Frame 1984078335.svg"
                  alt="Star Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>

              <p className="text-white text-center lg:text-left text-[14px] lg:text-base font-normal mx-auto lg:mx-0 leading-none mb-6 lg:mb-0">
                We use cookies to enhance your experience. You can accept or
                reject them.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-[10px]">
              <button
                onClick={() => handleConsent("rejected")}
                className="px-[18px] py-3 rounded-[55px] cursor-pointer
                border-[rgba(255,255,255,0.50)] border-[0.5px] 
                bg-[rgba(255,255,255,0.10)] text-white text-[12px] font-medium"
              >
                Reject all
              </button>
              <button
                onClick={() => handleConsent("accepted")}
                className="px-[18px] py-3 rounded-[55px] cursor-pointer
                bg-[#B8DE19] text-white text-[12px] font-medium"
              >
                Accept all
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
