import { BsFillPlayCircleFill } from "react-icons/bs";
import { FaRegCircleCheck } from "react-icons/fa6";
import {
  IoIosArrowDropdownCircle,
  IoMdArrowRoundForward,
} from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";

export default function TopRatingFilm() {
  const images = [
    {
      id: 1,
      src: "/assets/top_1.jpg",
      new: true,
      popOver: "/assets/top_p_1.png",
    },
    {
      id: 2,
      src: "/assets/top_2.jpg",
      popOver: "/assets/top_p_2.png",
    },
    {
      id: 3,
      src: "/assets/top_3.jpg",
      popOver: "/assets/top_p_3.png",
    },
    {
      id: 4,
      src: "/assets/top_4.jpg",
      new: true,
      popOver: "/assets/top_p_4.png",
    },
    {
      id: 5,
      src: "/assets/top_5.jpg",
      popOver: "/assets/top_p_5.png",
    },
  ];
  return (
    <div className="px-[80px] py-[40px] w-full flex flex-col bg-[#181A1C] dark:bg-gray-900 text-white ">
      <div className="text-[32px] font-medium py-[40px] ">
        Top Rating Film dan Series Hari ini
      </div>
      <div className="flex flex-wrap w-full gap-3">
        <div className="flex items-center justify-center p-2 ">
          <IoArrowBackSharp className="bg-[#2F3334]  rounded-full w-[25px] h-[25px]" />
        </div>
        {images.map((images) => {
          return (
            <>
              <div
                className={`relative w-full max-w-sm h-[365px] w-[234px]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-cover`}
                style={{ backgroundImage: `url(${images.src})` }}
                data-popover-target={`popover-default-${images.id}`}
                data-popover-placement="bottom-end"
              >
                <div className="pb-5 text-white ">
                  <div className="absolute flex items-center justify-between  px-5 top-3 left-2 bg-[#0F1E93] rounded-[24px]">
                    <span className="text-[18px] font-bold  dark:text-white">
                      {images.new === true ? "Episode Baru" : ""}
                    </span>
                  </div>
                </div>
              </div>
              <div
                data-popover=""
                id={`popover-default-${images.id}`}
                role="tooltip"
                className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-[#181A1C] border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
              >
                <img src={images.popOver} />

                <div className="px-3 py-2">
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <div className="flex gap-5">
                        <BsFillPlayCircleFill className="text-white h-7 w-7" />
                        <FaRegCircleCheck className="text-white h-7 w-7" />
                      </div>

                      <div>
                        <IoIosArrowDropdownCircle className="text-white h-7 w-7" />
                      </div>
                    </div>
                    <div className="flex gap-3 pt-3 text-white">
                      <div className="bg-[#C1C2C4] rounded-[24px] px-2">
                        13 +
                      </div>
                      <div> 2j 33m</div>
                    </div>
                  </div>
                </div>
                <div data-popper-arrow="" />
              </div>
            </>
          );
        })}

        <div className="flex items-center justify-center p-2 ">
          <IoMdArrowRoundForward className="bg-[#2F3334]  rounded-full w-[25px] h-[25px]" />
        </div>
      </div>
    </div>
  );
}
