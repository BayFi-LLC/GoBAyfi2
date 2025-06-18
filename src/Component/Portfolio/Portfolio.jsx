"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
const images = [
  { id: 1, src: "/Portfolio/First/1.webp" },
  { id: 2, src: "/Portfolio/First/2.webp" },
  { id: 3, src: "/Portfolio/First/3.webp" },
  { id: 4, src: "/Portfolio/First/4.webp" },
  { id: 5, src: "/Portfolio/First/5.webp" },
  { id: 6, src: "/Portfolio/First/6.webp" },
  { id: 7, src: "/Portfolio/First/7.webp" },
  { id: 8, src: "/Portfolio/First/8.webp" },
  { id: 9, src: "/Portfolio/First/9.webp" },
];
const images3 = [
  { id: 1, src: "/Portfolio/Third/31.webp" },
  { id: 2, src: "/Portfolio/Third/32.webp" },
  { id: 3, src: "/Portfolio/Third/33.webp" },
  { id: 4, src: "/Portfolio/Third/34.webp" },
  { id: 5, src: "/Portfolio/Third/35.webp" },
  { id: 6, src: "/Portfolio/Third/36.webp" },
  { id: 7, src: "/Portfolio/Third/37.webp" },
  { id: 8, src: "/Portfolio/Third/38.webp" },
  { id: 9, src: "/Portfolio/Third/39.webp" },
];
const marqueeImages2 = [
  { id: 1, src: "/Portfolio/Second/21.webp" },
  { id: 2, src: "/Portfolio/Second/22.webp" },
  { id: 3, src: "/Portfolio/Second/23.webp" },
  { id: 4, src: "/Portfolio/Second/24.webp" },
  { id: 5, src: "/Portfolio/Second/25.webp" },
  { id: 6, src: "/Portfolio/Second/26.webp" },
  { id: 7, src: "/Portfolio/Second/27.webp" },
  { id: 8, src: "/Portfolio/Second/28.webp" },
  { id: 9, src: "/Portfolio/Second/29.webp" },
];
const marqueeImages4 = [
  { id: 1, src: "/Portfolio/Four/p 1.webp" },
  { id: 2, src: "/Portfolio/Four/p 2.webp" },
  { id: 3, src: "/Portfolio/Four/p 3.webp" },
  { id: 4, src: "/Portfolio/Four/p 4.webp" },
  { id: 5, src: "/Portfolio/Four/p 5.webp" },
  { id: 6, src: "/Portfolio/Four/p 6.webp" },
  { id: 7, src: "/Portfolio/Four/p 7.webp" },
  { id: 8, src: "/Portfolio/Four/p 8.webp" },
  { id: 9, src: "/Portfolio/Four/p 9.webp" },
];
const Marque2 = () => {
  return (
    <div id="portfolio" className="relative bg-[#0C1F0C] pb-14 pt-12">
      <div className="relative bg-[#0C1F0C]">
        <Marquee
          pauseOnHover
          direction="right"
          className="absolute z-10 mb-6"
          speed={100}
          autoFill
          loop={0}
        >
          {images.map((image) => (
            <div
              key={image.id}
              className="mr-5 flex h-auto items-center justify-center text-white"
            >
              <div className="relative aspect-[4/3] w-80 overflow-hidden rounded-[20px] border border-white/30 bg-[rgba(9,22,9,0.5)] backdrop-blur-[25px]">
                <Image
                  src={image.src}
                  alt="Logo"
                  fill
                  priority // 👈 loads image immediately (eager load)
                  loading="eager" // optional when using priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </div>
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          className="absolute z-10 mb-6"
          speed={100}
          autoFill
          loop={0}
        >
          {marqueeImages2.map((image) => (
            <div
              key={image.id}
              className="mr-5 flex h-auto items-center justify-center text-white"
            >
              <div className="relative aspect-[4/3] w-80 overflow-hidden rounded-[20px] border border-white/30 bg-[rgba(9,22,9,0.5)] backdrop-blur-[25px]">
                <Image
                  src={image.src}
                  alt="Logo"
                  fill
                  priority // 👈 loads image immediately (eager load)
                  loading="eager" // optional when using priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </div>
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          direction="right"
          className="absolute z-10 mb-6"
          speed={100}
          autoFill
          loop={0}
        >
          {images3.map((image) => (
            <div
              key={image.id}
              className="mr-5 flex h-auto items-center justify-center text-white"
            >
              <div className="relative aspect-[4/3] w-80 overflow-hidden rounded-[20px] border border-white/30 bg-[rgba(9,22,9,0.5)] backdrop-blur-[25px]">
                <Image
                  src={image.src}
                  alt="Logo"
                  fill
                  priority // 👈 loads image immediately (eager load)
                  loading="eager" // optional when using priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </div>
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          className="absolute z-10 mb-6"
          speed={100}
          autoFill
          loop={0}
        >
          {marqueeImages4.map((image) => (
            <div
              key={image.id}
              className="mr-5 flex h-auto items-center justify-center text-white"
            >
              <div className="relative aspect-[4/3] w-80 overflow-hidden rounded-[20px] border border-white/30 bg-[rgba(9,22,9,0.5)] backdrop-blur-[25px]">
                <Image
                  src={image.src}
                  alt="Logo"
                  fill
                  priority // 👈 loads image immediately (eager load)
                  loading="eager" // optional when using priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Marque2;
