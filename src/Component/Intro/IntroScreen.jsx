"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const IntroScreen = ({ onComplete }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="fixed top-0 left-0 z-[9999] flex h-screen w-screen items-center justify-center bg-[#0C1F0C]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Parent group that moves both icon & wordmark together */}
          <motion.div
            layoutId="main-logo"
            className="flex items-center gap-2 justify-center " // gap keeps space fixed
            initial={{ x: 40 }}
            animate={{ x: 0 }}
            transition={{
              delay: 1,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            {/* Icon: scale in */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/Image/icon mark.svg"
                alt="Icon"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Wordmark: clip reveal only */}
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{
                delay: 1,
                duration: 1,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
            >
              <Image
                src="/Image/Wordmark.svg"
                alt="Wordmark"
                width={100}
                height={40}
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default IntroScreen;
