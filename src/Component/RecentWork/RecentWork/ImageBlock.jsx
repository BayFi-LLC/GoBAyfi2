import { GoArrowUpRight } from "react-icons/go";

const ImageBlock = ({ picture, glass }) => (
    <div className="img_main relative basis-[30%]   aspect-[4/3]  rounded-2xl">
      <img
        src={picture}
        alt="logo"
        className="img h-full w-full rounded-2xl  object-cover"
      />
      {/* btn  start*/}
      <div className="absolute bottom-3 left-3  ">
        <button className="Btn">
          <div className="text">UI/UX DESIGN</div>
          <div className="sign">
            <div className="relative h-6 w-6">
              <img
                src={glass}
                alt="Logo"
                className="new w-full h-full"
              />
              <GoArrowUpRight className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-white" />
            </div>
          </div>
        </button>
      </div>
      {/* btn end */}
    </div>
  );
  export default ImageBlock