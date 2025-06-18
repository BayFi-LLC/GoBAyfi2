"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function BodyStyle() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      document.body.style.background = "#0C1F0C";
      document.body.style.color = "white";
    } else {
      document.body.style.background = "#F3F3F3";
      document.body.style.color = "black";
    }
  }, [pathname]);

  return null; // because we only modify body
}
