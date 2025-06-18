"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Intro2 = ({ onComplete }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onComplete();
    }, 3000); // Ends after 6 seconds

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 z-[9999] flex h-screen w-screen items-center justify-center bg-[#0C1F0C]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative h-14 w-14 lg:h-28 lg:w-28">
          {/* Stargreen: scale + rotate */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 0, rotate: 0 }}
            animate={{
              scale: [0, 1, 1, 0],
              rotate: [0, 360, 360, 720],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              times: [0, 0.33, 0.66, 1], // 0s, 2s, 4s, 6s
            }}
          >
            <Image
              src="/Image/Stargreen.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* newStar: only scale, no rotate */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
            initial={{ scale: 0 }}
            animate={{
              scale: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              times: [0, 0.33, 0.66, 1],
            }}
          >
            <Image
              src="/Image/newStar.svg"
              alt="Logo Overlay"
              width={56}
              height={56}
              className="lg:w-14 lg:h-16"
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Intro2;
