// src/fonts/localFont.js
import localFont from "next/font/local";

export const bayfiFont = localFont({
  src: [
    {
      path: "../fonts/Graphik-Extralight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Graphik-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Graphik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Graphik-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Graphik-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Graphik-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-bayfi",
});
