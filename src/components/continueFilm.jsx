import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";

export default function ContinueFilm() {
  const images = [
    {
      name: "Dont't Look Up",
      src: "/assets/continue_1.jpg",
      rating: "4.5",
    },
    {
      name: "Dont't Look Up",
      src: "/assets/continue_2.jpg",
      rating: "4.5",
    },
    {
      name: "Dont't Look Up",
      src: "/assets/continue_3.jpg",
      rating: "4.5",
    },
    {
      name: "Dont't Look Up",
      src: "/assets/continue_4.jpg",
      rating: "4.5",
    },
  ];
  return (
    <div className="px-[80px] py-[40px] w-full flex flex-col bg-[#181A1C] dark:bg-gray-900 text-white ">
      <div className="text-[32px] font-medium py-[40px] ">
        Melanjutkan Tonton Film
      </div>
      <div className="flex flex-wrap w-full gap-3">
        <div className="flex items-center justify-center p-2 ">
          <IoArrowBackSharp className="bg-[#2F3334]  rounded-full w-[25px] h-[25px]" />
        </div>
        {images.map((images) => {
          return (
            <div
              className={`relative w-full max-w-sm h-[162px] w-[302px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-cover`}
              style={{ backgroundImage: `url(${images.src})` }}
            >
              <div className="pb-5 text-white ">
                <div className="absolute flex items-center justify-between w-full px-5 bottom-2">
                  <span className="text-[18px] font-bold  dark:text-white">
                    {images.name}
                  </span>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>{" "}
                    <div>{images.rating}/5</div>
                  </div>
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
