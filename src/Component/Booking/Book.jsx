"use client";
const Book = () => {
  const openCalendlyPopup = () => {
    window.open(
      "https://calendly.com/bayfistudio/30min",
      "_blank",
      "noopener noreferrer"
    );
  };
  return (
    <>
      <div className="h-auto w-full bg-[#0C1F0C] pt-11 pb-6 overflow-x-hidden relative ">
        <div className="relative mx-auto flex h-52 w-10/12 items-center justify-center   rounded-[20px] overflow-hidden bg-black p-6 pt-12">
          <div className="flex flex-col items-center justify-center text-center z-30">
            <h1 className="text-2xl font-medium text-white">
              Book a 30min intro call & get one task done for free!
            </h1>
            <button
              onClick={openCalendlyPopup}
              type="button"
              style={{
                background: "linear-gradient(180deg, #B8DE19 0%, #0C1F0C 100%)",
              }}
              className="backgroundMoveings mt-6 mb-5 px-6 py-4 rounded-4xl font-medium text-xl text-white"
            >
              Book a Free Call
            </button>
          </div>
          {/* gradient color */}
          <div className="absolute -left-24 top-[70px] size-64 rounded-full bg-[#B8DE19] blur-[100px]"></div>
          <div className="absolute left-[45%] top-36 h-[110px] w-[110px] rounded-full bg-[#B8DE19] blur-[50px]"></div>
          <div className="absolute  size-64 rounded-full bg-[#B8DE19] -right-28 top-1/2 blur-[100px]"></div>
        </div>
      </div>
    </>
  );
};

export default Book;
