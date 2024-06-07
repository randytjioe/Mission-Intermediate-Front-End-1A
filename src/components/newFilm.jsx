import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";

export default function NewFilm() {
  const images = [
    {

      src: "/assets/new_1.png",
      label: "top",
    },
    {
  
      src: "/assets/new_2.png",
      label: "new",
    },
    {
  
      src: "/assets/new_3.png",
      label: "top",
    },
    {

      src: "/assets/new_4.png",
      label: "new",
    },
    {

      src: "/assets/new_5.png",
      label: "",
    },
  ];
  return (
    <div className="px-[80px] py-[40px] w-full flex flex-col bg-[#181A1C] dark:bg-gray-900 text-white ">
      <div className="text-[32px] font-medium py-[40px] ">Rilis Baru</div>
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
              {images.label === "new" ? (
                <div className="absolute flex items-center justify-between  px-5 top-3 left-2 bg-[#0F1E93] rounded-[24px]">
                  <span className="text-[18px] font-bold  dark:text-white">
                    Episode Baru
                  </span>
                </div>
              ) : images.label === "top" ? (
                <div className="pb-5 text-white ">
                  <div className="absolute flex items-center justify-between top-0 right-3 p-2 bg-[#B71F1D]  flex-col">
                    <span className="text-[18px]   dark:text-white">Top</span>
                    <span className="text-[18px]   dark:text-white">10</span>
                  </div>
                </div>
              ) : (
                ""
              )}
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
