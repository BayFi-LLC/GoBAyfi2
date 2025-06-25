"use client";
import { useState } from "react";
import { InlineWidget } from "react-calendly";
import SvgBorderAnimation from "../ButtonAnimation/SvgBorderAnimation";
const Container = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative mx-auto mt-6 flex h-[60vh] w-11/12  flex-col items-center justify-center overflow-hidden rounded-[20px] bg-[#091609]">
        <h1 className="w-12/12 mx-auto -mt-6 overflow-hidden text-center text-[28px] font-normal text-white sm:w-11/12 sm:text-4xl pb-10">
          Your cutting edge Design, Development & Growth partner
        </h1>
        <div
          onClick={() => openModal()}
          style={{
            background: "linear-gradient(180deg, #B8DE19 0%, #0C1F0C 100%)",
          }}
          className="w-[290px] h-[55px] flex justify-center items-center text-lg rounded-[2rem] border border-[#B8DE19]
                transition-[box-shadow] duration-300 ease-linear hover:shadow-[0px_0px_58.8px_0px_#B8DE19] cursor-pointer"
        >
          Let’s Build Your Brand Today
        </div>

        {/* <button onClick={openModal} className=" snake-button ">
          Let’s Build Your Brand Today
        </button> */}

        <div className="absolute -bottom-[80px] size-40 rounded-full bg-[#B8DE19] blur-3xl"></div>
      </div>
      <div>
        {/* Modal */}
        {isModalOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 1000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={closeModal} // Close modal when clicking outside the content
          >
            <div
              className="max-w-[95%] md:max-w-[80%]  "
              style={{
                position: "relative",
                width: "100%",
                height: "auto",

                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button
                onClick={closeModal}
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "20px",
                  fontSize: "35px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                &times;
              </button>

              {/* Calendly Embed */}
              <InlineWidget url=" https://calendly.com/bayfistudio/30min" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Container;
