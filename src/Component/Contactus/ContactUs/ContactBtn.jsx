"use client"
//  import black from "../../assets/conBtnBlack.svg"
// import green from "../../assets/conBtnGreen.svg"
import PropTypes from "prop-types";
import Image from "next/image";
const FooterBtn = ({ buttonText, onClick, services }) => {
 
  const isActive = services.includes(buttonText);
  
  

  return (
    <div className="group flex items-center justify-center ">
    <button
  className={`text-[8px] lg:text-[12px] font-medium group relative z-30 flex gap-2 items-center justify-center overflow-hidden text-nowrap rounded-[100px] border-[0.846px] border-[#B8DE19] px-[8px] lg:px-[25px] py-[6px] lg:py-[8px] transition-all duration-700
    ${isActive ? "bg-[#B8DE19] text-black z-30" : "bg-black text-white"}
  `}
  onClick={onClick}
>
  {buttonText}

  <div className="relative h-4 w-4">
  <Image
    src="/Image/conBtnGreen.svg"
    alt="Green Logo"
    fill
    className={`absolute inset-0 transition-opacity duration-500 ${
      isActive ? "opacity-0" : "opacity-100"
    }`}
  />
  <Image
    src="/Image/conBtnBlack.svg"
    alt="Black Logo"
    fill
    className={`absolute inset-0 transition-opacity duration-500 ${
      isActive ? "opacity-100" : "opacity-0"
    }`}
  />
</div>
</button>
    </div>
  );
};

FooterBtn.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool.isRequired,
  services: PropTypes.array,
};

export default FooterBtn;