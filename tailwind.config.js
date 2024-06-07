/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('/public/assets/login.jpg')",
        register: "url('/public/assets/daftar.jpg')",
        hero: "url('/public/assets/hero.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};