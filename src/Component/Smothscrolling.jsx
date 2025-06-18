"use client"
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScrolling = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
        duration: 7, // ডিফল্ট 1.2, এটা বাড়ালে স্ক্রল আরও মসৃণ হবে
        easing: (t) => 1 - Math.pow(1 - t, 3), // মসৃণ ইফেক্টের জন্য কাস্টম ইজিং ফাংশন
        smooth: true,
      smoothWheel: true, // Mouse scroll smooth করবে
      smoothTouch: true, // Touch scroll smooth করবে
      lerp: 0.1, // স্ক্রলিং এর মসৃণতা নিয়ন্ত্রণ
      wheelMultiplier: 0.8, // মাউস স্ক্রল করলে ধীরে নামবে
      touchMultiplier: 1.0, // মোবাইল টাচ স্ক্রলে ধীরে নামবে
       
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrolling;
