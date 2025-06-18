"use client";

import "./Services.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const Services = ({ serviceOpenModal }) => {
   const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowVideo(true);
    }, 10000); // 3 second delay (adjust as needed)

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {/* Services Section */}
      <div className="parent group h-auto w-full overflow-hidden bg-black text-white hover:bg-[#B8DE19]">
        <div className="mx-auto flex h-[200px] w-10/12 items-center justify-between space-x-4 text-white">
          <h1 className="text-5xl font-medium group-hover:text-black w-[352px]">
            Digital <br /> Marketing
          </h1>
          <p className="text-base font-light group-hover:text-black">
            Grow your online presence with custom social media content, <br />{" "}
            strategic campaigns, and designs that build engagement and <br />
            community.
          </p>
          <div className="relative h-48 w-48">
            {/* Image 1 */}
            <Image
              src="/Image/Sstarb2.png"
              alt="Black"
              className="child new hidden h-full w-full group-hover:block"
              fill
            />
            {/* Video Section */}
            <div
              onClick={serviceOpenModal}
              className="warper cursor-pointer absolute left-2 top-2 z-50 h-72 w-72"
            >
              <div className="item hidden group-hover:block">
                    {showVideo && (
        <video
          className="vid"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="none"
        >
          <source src="/Image/new.mp4" type="video/mp4" />
        </video>
      )}
              </div>
            </div>
            {/* End video section */}

            {/* Image 2 */}
            <div className="new absolute left-1/2 top-1/2 z-20 h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 transform group-hover:hidden">
              <Image
                src="/Image/Sstarblack.svg"
                alt="Green"
                fill
                className="object-contain"
              />
            </div>

            {/* Image 3 */}
            <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 transform group-hover:hidden w-[25px] h-[25px] ">
              <Image
                src="/Image/Bstar.svg"
                alt="Star"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
