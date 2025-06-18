import { GoArrowRight } from "react-icons/go";
import PropTypes from "prop-types";
import Image from "next/image";

const ButtonArrowDown = ({ buttonText, onClick }) => {
  return (
    <div className="group flex items-center">
      <button
        onClick={onClick}
        className="relative z-30 flex items-center justify-center overflow-hidden whitespace-nowrap rounded-full border-2 border-[#B8DE19] bg-black px-4 py-[2px] text-xs font-medium text-white transition-all duration-700 group-hover:border-[#b8de19b3] focus:bg-[#B8DE19] focus:text-black"
      >
        {buttonText}
        <div className="relative -ml-1 inline-block h-8 w-8">
          {/* Star Image (default) */}
          <Image
            src="/Image/Star.svg"
            alt="Star Icon"
            className="absolute inset-0 m-auto h-4 w-4 transition-opacity duration-300 group-hover:opacity-0"
            width={16}
            height={16}
          />

          {/* Hover circle */}
          <div className="absolute inset-0 m-auto h-5 w-5 rounded-full bg-[rgba(184,222,25,0.30)] opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus:h-4 group-focus:w-4 group-focus:bg-black group-focus:opacity-100" />

          {/* Arrow icon */}
          <GoArrowRight className="absolute inset-0 m-auto h-3 w-3 text-black transition-all duration-300 group-hover:z-50 group-hover:w-4 group-hover:rotate-[40deg] group-hover:text-[#B8DE19] group-focus:text-[#B8DE19]" />
        </div>

        {/* Background animation (bottom right expanding dot) */}
        <span className="absolute bottom-[15px] right-[28px] -z-20 h-0.5 w-0.5 translate-y-full rounded-md bg-[rgba(184,222,25,0.30)] transition-all duration-700 group-hover:scale-[300]" />
      </button>
    </div>
  );
};

ButtonArrowDown.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonArrowDown;
