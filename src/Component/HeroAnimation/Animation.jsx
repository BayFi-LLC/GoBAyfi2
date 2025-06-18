"use client";
import { Canvas } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import { Text as DreiText, Html } from "@react-three/drei";
import { useEffect, useState, useRef } from "react";
import { InlineWidget } from "react-calendly";
import ReactDOM from "react-dom";
import SvgBorderAnimation from "../ButtonAnimation/SvgBorderAnimation";

// Modal component with portal
const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[70%] rounded-lg bg-white shadow-lg z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-2 z-20 cursor-pointer bg-transparent text-4xl text-black"
        >
          &times;
        </button>
        <InlineWidget url="https://calendly.com/bayfistudio/30min" />
      </div>
    </div>,
    document.body
  );
};

const Animation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [fontSize, setFontSize] = useState(0.5);
  const [positions, setPositions] = useState({
    firstText: [0, 0.9, 0],
    secondText: [0, 0.3, 0],
    htmlPosition: [0, -0.8, 0],
  });

  useEffect(() => {
    const updateTextProperties = () => {
      if (window.innerWidth < 768) {
        setFontSize(0.2);
        setPositions({
          firstText: [0, 0.8, 0],
          secondText: [0, 0.5, 0],
          htmlPosition: [0, -0.3, 0],
        });
      } else {
        setFontSize(0.4);
        setPositions({
          firstText: [0, 1.2, 0],
          secondText: [0, 0.6, 0],
          htmlPosition: [0, -0.3, 0],
        });
      }
    };

    updateTextProperties();
    window.addEventListener("resize", updateTextProperties);
    return () => window.removeEventListener("resize", updateTextProperties);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    setIsVisible(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsVisible(true);
  };

  return (
    <>
      <div
        ref={containerRef}
        className="relative mx-auto mt-11 flex h-[53vh] w-10/12 items-center justify-center overflow-hidden rounded-[20px] bg-[#091609] text-xl 2xl:h-[60vh] z-50"
      >
        <Canvas
        
          style={{
            position: "absolute",
            top: -150,
            left: -150,
            height: "100vh",
            width: "100vw",
          
          }}
        >
          <EffectComposer>
            <Fluid
              radius={0.5}
              curl={0}
              swirl={0}
              distortion={0.05}
              force={2}
              pressure={0.1}
              densityDissipation={0.97}
              velocityDissipation={0.9}
              intensity={0.3}
              rainbow={false}
              blend={5} // ✅ allow blending over background
              showBackground={true} 
              backgroundColor="#091609" 
              fluidColor="#B8DE19"
              mousePosition={mouseRef.current}
            />
            <DreiText
              letterSpacing={-0.07}
              fontSize={fontSize}
              position={positions.firstText}
              color="#fff"
              material-toneMapped={false}
              material-depthWrite={false}
              material-depthTest={false}
              anchorX="center"
              anchorY="middle"
            >
              {"Your cutting edge Design, "}
            </DreiText>
            <DreiText
              letterSpacing={-0.07}
              fontSize={fontSize}
              position={positions.secondText}
              color="#fff"
              material-toneMapped={false}
              material-depthWrite={false}
              material-depthTest={false}
              anchorX="center"
              anchorY="middle"
            >
              {" Development  &  Growth partner "}
            </DreiText>
            <Html position={positions.htmlPosition} center>
              <div>
                {isVisible && ( // Conditional rendering
                  <div
                    onClick={() => {
                      openModal();
                     
                    }}
                    className=" backgroudMoveings  z-[100] w-[289px] rounded-4xl   overflow-hidden bg-#091609"
                  >
                    <SvgBorderAnimation></SvgBorderAnimation>
                  </div>
                )}
              </div>
            </Html>
          </EffectComposer>
        </Canvas>
      </div>

      {/* Portal-based Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Animation;
