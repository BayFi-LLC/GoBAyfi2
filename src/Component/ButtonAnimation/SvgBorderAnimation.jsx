"use client";
import "./SvgBorderAnimation.css";

const SvgBorderAnimation = () => {


  return (
    <button className="Button ml-[-15px]">
      <svg className="Button-svg" width="500" height="200" viewBox="0 0 300 80">
        <rect
          className="Button-line--outer"
          strokeWidth="1"
          stroke="#B8DE19"
          strokeLinecap="round"
          fill="none"
          x="-35"
          y="1"
          width="calc(100% + 70px)"
          height="calc(100% - 2px)"
          rx="40"
         
        />
      </svg>
      <div className="Button-content backgroudMoveings ">Let’s Build Your Brand Today</div>
    </button>
  );
};

export default SvgBorderAnimation;