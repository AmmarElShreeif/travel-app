/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", " ./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#0373F3",
        },
        secoundary: {
          100: "#f3f4f6",
          200: "#f0f2fbe",
        },
      },
    },
  },
  plugins: [],
};
