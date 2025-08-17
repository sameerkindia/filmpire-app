// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// 2nd

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   presets: [require("nativewind/preset")],
//   // content: [
//   //   "./App.{js,jsx,ts,tsx}",
//   //   "./src/**/*.{js,jsx,ts,tsx}"
//   // ],
//   content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        light: {
          100: "#D6C7FF",
          200: "#A8B5DB",
          300: "#9CA4AB",
        },
        dark: {
          100: "#221F3D",
          200: "#0F0D23",
        },
        accent: "#AB8BFF",
      },
    },
  },
  plugins: [],
};
