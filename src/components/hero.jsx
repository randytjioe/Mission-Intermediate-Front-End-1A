import { PiSpeakerSlashFill } from "react-icons/pi";

export default function Hero() {
  return (
    <div>
      <div className="relative flex flex-col mx-auto bg-no-repeat bg-cover sm:h-screen lg:py-0 bg-hero ">
        <div className="absolute inset-x-0 px-[80px] text-white bottom-20  flex flex-col gap-3 w-full ">
          <div className="text-[48px] font-bold">Duty After School</div>
          <div className="py-3 w-[668px]">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis
            depan dalam perang.
          </div>
          <div className="flex gap-3 pt-3">
            <button className="px-5 py-1 bg-[#0F1E93] rounded-[48px] ">
              Mulai
            </button>
            <button className="px-5 py-1 bg-[#22282A] rounded-[48px]">
              Selengkapnya
            </button>
            <button className="px-3 py-1  rounded-[48px] border border-white">
              18 +
            </button>
            <div className="absolute bottom-0 p-1 border border-white rounded-full right-20">
              <PiSpeakerSlashFill className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
