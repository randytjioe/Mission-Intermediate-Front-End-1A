import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";

export default function TrendingFilm() {
  // const images = [
  //   {
  //     src: "/assets/tren_1.png",
  //   },
  //   {
  //     src: "/assets/tren_2.png",
  //   },
  //   {
  //     src: "/assets/tren_3.png",
  //   },
  //   {
  //     src: "/assets/tren_4.png",
  //   },
  //   {
  //     src: "/assets/tren_5.png",
  //   },
  // ];

  const images = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg", // Tambahkan gambar keenam
  ];
  return (
    // <div className="px-[80px] py-[40px] w-full flex flex-col bg-[#181A1C] dark:bg-gray-900 text-white ">
    //   <div className="text-[32px] font-medium py-[40px] ">Film Trending</div>
    //   <div className="flex flex-wrap w-full gap-3">
    //     <div className="flex items-center justify-center p-2 ">
    //       <IoArrowBackSharp className="bg-[#2F3334]  rounded-full w-[25px] h-[25px]" />
    //     </div>
    //     {images.map((images) => {
    //       return (
    //         <div
    //           className={`relative h-[365px] w-[234px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-cover`}
    //           style={{ backgroundImage: `url(${images.src})` }}
    //         >
    //           <div className="pb-5 text-white ">
    //             <div className="absolute flex items-center justify-between top-0 right-3 p-2 bg-[#B71F1D]  flex-col">
    //               <span className="text-[18px]   dark:text-white">Top</span>
    //               <span className="text-[18px]   dark:text-white">10</span>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //     <div className="flex items-center justify-center p-2 ">
    //       <IoMdArrowRoundForward className="bg-[#2F3334]  rounded-full w-[25px] h-[25px]" />
    //     </div>
    //   </div>
    // </div>
//     <div id="gallery" className="relative w-full" data-carousel="slide">
//   {/* Carousel wrapper */}
//   <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//     {/* Item 1 */}
//     <div className="hidden duration-700 ease-in-out" data-carousel-item="">
//       <img
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
//         className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//         alt=""
//       />
//     </div>
//     {/* Item 2 */}
//     <div
//       className="hidden duration-700 ease-in-out"
//       data-carousel-item="active"
//     >
//       <img
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
//         className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//         alt=""
//       />
//     </div>
//     {/* Item 3 */}
//     <div className="hidden duration-700 ease-in-out" data-carousel-item="">
//       <img
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
//         className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//         alt=""
//       />
//     </div>
//     {/* Item 4 */}
//     <div className="hidden duration-700 ease-in-out" data-carousel-item="">
//       <img
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
//         className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//         alt=""
//       />
//     </div>
//     {/* Item 5 */}
//     <div className="hidden duration-700 ease-in-out" data-carousel-item="">
//       <img
//         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
//         className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//         alt=""
//       />
//     </div>
//   </div>
//   {/* Slider controls */}
//   <button
//     type="button"
//     className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//     data-carousel-prev=""
//   >
//     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//       <svg
//         className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 6 10"
//       >
//         <path
//           stroke="currentColor"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M5 1 1 5l4 4"
//         />
//       </svg>
//       <span className="sr-only">Previous</span>
//     </span>
//   </button>
//   <button
//     type="button"
//     className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//     data-carousel-next=""
//   >
//     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//       <svg
//         className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 6 10"
//       >
//         <path
//           stroke="currentColor"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="m1 9 4-4-4-4"
//         />
//       </svg>
//       <span className="sr-only">Next</span>
//     </span>
//   </button>
// </div>
<div id="gallery" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative overflow-hidden rounded-lg">
        {/* Grid container */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
          {images.map((src, index) => (
            <div key={index} className="h-[365px] w-[234px] md:h-96">
              <img
                src={src}
                className="w-full h-full object-cover rounded-lg"
                alt={`Gallery Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
