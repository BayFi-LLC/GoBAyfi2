"use client";
import Image from "next/image";

const CardSix = () => {
  return (
    <div className="card card-6 glass3 relative z-30 mx-auto mt-[105px] w-full max-w-[400px] overflow-hidden rounded-xl px-6 py-10 backdrop-blur-lg">
      {/* Icon */}
      <div className="relative mx-auto mb-4 h-[78px] w-[78px]">
        <Image
          src="/Image/Stargreen2.svg"
          alt="Star Icon"
          width={78}
          height={78}
          className="object-contain"
        />
        <Image
          src="/Image/cancel.svg"
          alt="Pen Icon"
          width={24}
          height={24}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Content */}
      <h2 className="text-center text-2xl font-semibold text-white">
        Cancel Anytime
      </h2>
      <p className="mt-2 text-center text-sm text-white opacity-90">
        Pause, upgrade, or cancel anytime to fit your needs.
      </p>

      {/* Glow effect */}
      <div className="absolute left-1/4 top-1/2 -z-10 h-52 w-52 rounded-full bg-[#B8DE19]/20 blur-3xl" />
    </div>
  );
};

export default CardSix;
