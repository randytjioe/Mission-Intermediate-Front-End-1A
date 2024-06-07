import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";

export default function TrendingFilm() {
  const images = [
    {
      src: "/assets/tren_1.png",
    },
    {
      src: "/assets/tren_2.png",
    },
    {
      src: "/assets/tren_3.png",
    },
    {
      src: "/assets/tren_4.png",
    },
    {
      src: "/assets/tren_5.png",
    },
  ];
  return (
    <div className="px-[80px] py-[40px] w-full flex flex-col bg-[#181A1C] dark:bg-gray-900 text-white ">
      <div className="text-[32px] font-medium py-[40px] ">Film Trending</div>
      <div className="flex flex-wrap w-full gap-3">
        <div className="flex items-center justify-center p-2 ">
          <IoArrowBackSharp className="bg-[#2F3334]  rounded-full w-[25px] h-[25px]" />
        </div>
        {images.map((images) => {
          return (
            <div
              className={`relative w-full max-w-sm h-[365px] w-[234px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-cover`}
              style={{ backgroundImage: `url(${images.src})` }}
            >
              <div className="pb-5 text-white ">
                <div className="absolute flex items-center justify-between top-0 right-3 p-2 bg-[#B71F1D]  flex-col">
                  <span className="text-[18px]   dark:text-white">Top</span>
                  <span className="text-[18px]   dark:text-white">10</span>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex items-center justify-center p-2 ">
          <IoMdArrowRoundForward className="bg-[#2F3334]  rounded-full w-[25px] h-[25px]" />
        </div>
      </div>
    </div>
  );
}
