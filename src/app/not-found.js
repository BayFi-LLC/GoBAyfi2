"use client";
import PricingNavbarDekstop from "@/Component/SubPricing/PricingNav/PricingNavbarDekstop";
import PricingNavMobile from "@/Component/SubPricing/PricingNav/PricingNavMobile";
import React, { useState } from "react";
 
 import { motion } from "framer-motion";
import Link from "next/link";

// Motion-enabled Link for direct button animation (pro style)
const MotionLink = motion(Link);

const NotFound = () => {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  

 

  return (
    <>
 
           <div
        id="hero"
        className={`z-0 bg-[#0C1F0C] relative w-full pt-8  transition-all duration-500 h-screen overflow-hidden`}
      >
        <div className="mb-12 w-11/12 mx-auto lg:w-10/12 block lg:hidden">
          <PricingNavMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        <div className="mb-12 lg:mb-20 w-11/12 mx-auto lg:w-10/12">
          <PricingNavbarDekstop />
        </div>

  
 <div className="flex flex-col items-center justify-center ">
 {/* Animated 404 */}
      <motion.h1
        initial={{ opacity: 0, y: -120, scale: 0.7, rotate: -10 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 10
        }}
        style={{
          fontSize: "8rem",
          margin: 0,
          fontWeight: 900,
          color: "#B8DE19",
          
        }}
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 100 }}
        style={{
          margin: 0,
          fontWeight: 700,
          color: "#F3F3F3",
          letterSpacing: "0.01em",
          fontSize: "2.3rem",
        }}
      >
        Page Not Found
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        style={{
          color: "#F3F3F3",
          margin: "1.2rem 0 2.2rem 0",
          fontSize: "1.2rem",
          maxWidth: "420px",
          textAlign: "center",
          opacity: 0.88,
        }}
      >
        Oops! The page you’re looking for doesn’t exist or has moved.<br />
        Let’s get you back on course.
      </motion.p>

      {/* Animated Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.45, type: "spring", bounce: 0.5 }}
        style={{ marginTop: "0.6rem" }}
      >
        <MotionLink
          href="/"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 18px 4px #B8DE19aa, 0 2px 18px #0C1F0C",
            backgroundColor: "#B8DE19",
            color: "#0C1F0C"
          }}
          whileTap={{ scale: 0.96 }}
          style={{
            padding: "1rem 2.7rem",
            background: "#0C1F0C",
            color: "#B8DE19",
            borderRadius: "14px",
            border: "2px solid #B8DE19",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1.15rem",
            boxShadow: "0 2px 18px #B8DE1920",
            transition: "all 0.15s cubic-bezier(.23,1.22,.32,1)"
          }}
        >
          Go to Homepage
        </MotionLink>
      </motion.div>

 </div>
    </div>

        

       
 
 
    </>
  );
};

export default NotFound;
