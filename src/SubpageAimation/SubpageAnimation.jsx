"use client";
import Intro2 from "@/Component/Intro/Intro2";
import EdgexHeader from "@/Edgex/EdgexHeader";
import CaseBody from "@/Neios/CaseBody/CaseBody";
import CaseDeu from "@/Neios/CaseDeu/CaseDeu";
import { LayoutGroup, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react" 
const SubpageAnimation = () => {
     const [showIntro, setShowIntro] = useState(true);
    
      useEffect(() => {
        const timeout = setTimeout(() => {
          setShowIntro(false);
        }, 3000); // Animation duration
    
        return () => clearTimeout(timeout);
      }, []);
    return (
       <LayoutGroup>
      {/* ✅ Always render actual content */}
      <EdgexHeader />
      <CaseBody />
      <CaseDeu />

      {/* ✅ Overlay animation, but don't block content loading */}
      <AnimatePresence>
        {showIntro && <Intro2 onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>
    </LayoutGroup>
    );
};

export default SubpageAnimation;