"use client";
import Image from "next/image";

const CardOne = () => {
  return (
    <div className="card-1 card glass relative z-30 mx-auto mt-6 w-full max-w-[400px] rounded-xl border-2 border-white/10 bg-white/5 px-6 py-10 backdrop-blur-lg shadow-lg overflow-hidden">
      {/* Icon Container */}
      <div className="relative h-[78px] w-[78px] mx-auto mb-4">
        <Image
          src="/Image/Stargreen2.svg"
          alt="Green Star"
          width={78}
          height={78}
          className="object-contain"
        />
        <Image
          src="/Image/Box-Add.svg"
          alt="Pen Icon"
          width={24}
          height={24}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        />
      </div>

      {/* Text Content */}
      <h2 className="text-center text-2xl font-semibold text-white">
        Endless Requests
      </h2>
      <p className="mt-2 text-center text-sm text-white opacity-90">
        Request unlimited designs, updates, materials anytime.
      </p>

      {/* Glowing Background Effect */}
      <div className="absolute left-1/4 top-1/2 -z-10 h-52 w-52 rounded-full bg-[#B8DE19]/20 blur-3xl" />
    </div>
  );
};

export default CardOne;
