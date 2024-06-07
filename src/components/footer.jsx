export default function Footer() {
  return (
    <footer className="bg-[#181A1C] dark:bg-gray-900">
      <hr className="my-[1px] border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-[1px]" />
      <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="gap-6 mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center pb-5">
              <img
                src="/assets/logo.png"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
            </a>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023 Chill All Rights Reserved.
            </span>
          </div>

          <div>
            <h2 className="mb-6 text-lg font-bold text-white uppercase dark:text-white">
              Genre
            </h2>
            <div className="flex gap-6">
              <ul className="text-white dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Aksi
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Anak-Anak
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Anime
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Britania
                  </a>
                </li>
              </ul>
              <ul className="text-white dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Drama
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Fantasi Ilmiah & Fantasi
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Kejahatan
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    KDrama
                  </a>
                </li>
              </ul>
              <ul className="text-white dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Komedi
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Pertualangan
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Perang
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Romantis
                  </a>
                </li>
              </ul>
              <ul className="text-white dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Sains & Alam
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Thiriller
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
              Bantuan
            </h2>
            <ul className="font-medium text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="text-white hover:underline">
                  FAQ
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-white hover:underline">
                  Kontak Kami
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-white hover:underline">
                  Privasi
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-white hover:underline">
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
