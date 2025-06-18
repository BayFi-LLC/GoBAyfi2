"use client";
import React, { useState } from 'react';
import { LayoutGroup, AnimatePresence } from "framer-motion";
import IntroScreen from '../Intro/IntroScreen';

const ClientWrapper = ({ children }) => { // <-- Accept children here
  const [showIntro, setShowIntro] = useState(true);

  return (
    <LayoutGroup>
      {children}

      {/* 👇 Intro screen overlays everything, then disappears */}
      <AnimatePresence>
        {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default ClientWrapper;
