import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <nav className="border-gray-200 bg-[#181A1C] dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/assets/logo.png"
            className="w-[163px] h-[44px]"
            alt="Flowbite Logo"
          />
        </a>
        <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex items-center justify-center gap-2 ounded-full utext-sm md:me-0"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="/assets/avatar.png"
              alt="user photo"
            />
            <IoIosArrowDown className="text-white " />
          </button>

          {/* Dropdown menu */}
          <div
            className="z-50 hidden my-4 text-base list-none bg-[#181A1C] divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="flex items-center block gap-2 px-4 py-2 text-sm text-white hover:text-blue-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  <FaUser className="text-white hover:text-blue-700" />
                  Profile Saya
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center block gap-2 px-4 py-2 text-sm text-white hover:text-blue-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  <IoStar className="text-white hover:text-blue-700" />
                  Ubah Premium
                </a>
              </li>

              <li>
                <a
                  href="/login"
                  className="flex items-center block gap-2 px-4 py-2 text-sm text-white hover:text-blue-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  <RiLogoutBoxRLine className="text-white hover:text-blue-700" />
                  Keluar
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Series
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Film
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Daftar Saya
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
