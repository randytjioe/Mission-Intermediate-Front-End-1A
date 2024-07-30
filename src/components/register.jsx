import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Success Register",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/login')
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password dan konfirmasi password tidak cocok",
        footer: '<a href="/">Silahkan cek kembali</a>'
      });
    }
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto bg-contain md:h-screen lg:py-0 bg-register">
        <div className="w-full bg-[#181A1C]/80 background-color: transparent; rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700  ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex flex-col items-center justify-center gap-5">
              <img
                src="/assets/logo.png"
                className="w-[163px] h-[44px]"
                alt="logo"
              />
              <div className="text-center text-white">
                <h3 className="text-[32px] font-bold font-bold leading-tight tracking-tight md:text-2xl dark:text-white">
                  Daftar
                </h3>
                <p className="text-[16px] font-[140] ">Selamat datang!</p>
              </div>
            </div>

            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2  font-medium text-white dark:text-white text-[18px] "
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className=" border bg-[#181A1C]/80 border-gray-300 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-white pl-5"
                  placeholder="Masukan username"
                  required=""
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2  font-medium text-white dark:text-white text-[18px]"
                >
                  Kata Sandi
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Masukan Password"
                  className="bg-[#181A1C]/80 border border-gray-300 text-white sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-5"
                  required=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2  font-medium text-white dark:text-white text-[18px]"
                >
                  Konfirmasi Kata Sandi
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Masukan Konfirmasi Kata Sandi"
                  className="bg-[#181A1C]/80 border border-gray-300 text-white sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-5"
                  required=""
                  value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start text-white text-[16px] font-medium">
                  Sudah punya akun?
                  <a
                    href="/"
                    className="text-[16px] font-bold text-[16px] text-white text-primary-600 hover:underline dark:text-primary-500 pl-2"
                  >
                    Masuk
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  className="w-full text-white bg-[#E7E3FC]/25 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Daftar
                </button>
                <p className="text-[16px] font-[140] text-center text-white">
                  Atau
                </p>
                <button
                  type="submit"
                  className="w-full text-white bg-[#181A1C]/80 border flex justify-center gap-2 border-gray-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <img
                    src="/assets/google.png"
                    alt="google"
                    className="w-[20px] h-[20px]"
                  />
                  Daftar dengan Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

