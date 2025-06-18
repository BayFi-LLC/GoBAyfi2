import { GoArrowRight } from "react-icons/go";
import Image from "next/image";

const ButtonOne = () => {
  return (
    <div className="group -ml-7 mr-6 flex items-center">
      <button
        className="relative z-30 flex items-center justify-center overflow-hidden rounded-full border-2 border-[#B8DE19] px-6 py-[13px] text-[17px] font-medium text-white transition-all duration-700 hover:text-black"
      >
        See More...

        {/* Animated star and arrow container */}
        <div className="relative ml-2 inline-block h-8 w-8">
          {/* Star image (visible by default) */}
          <Image
            src="/Image/Star.svg"
            alt="Star Icon"
            width={24}
            height={24}
            className="absolute inset-0 m-auto h-6 w-6 transition-opacity duration-300 group-hover:opacity-0"
          />

          {/* Hover background circle */}
          <div className="absolute inset-0 m-auto h-7 w-7 rounded-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Arrow icon */}
          <GoArrowRight className="absolute inset-0 m-auto h-5 w-4 text-black transition-transform duration-300 group-hover:w-5 group-hover:-rotate-[60deg] group-hover:text-[#B8DE19]" />
        </div>

        {/* Expanding hover dot effect */}
        <span className="absolute bottom-[33px] right-[45px] -z-20 h-0.5 w-0.5 translate-y-full rounded-md bg-[#B8DE19] transition-all duration-700 group-hover:scale-[300]" />
      </button>
    </div>
  );
};

export default ButtonOne;
