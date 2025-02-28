/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradientStart: "#183EC2",
        gradientend: "#EAEEFE",
        paleBlue: "#EAEEFE",
        navbar: "#EAEEFE",
        textStart: "#000000",
        textEnd: "#001354",
        lightBlue: "#001354",
        greyBorder: "#2222221A",
        purpleFont: "#010D3E",
        secGradStart: "#FFFFFF",
        secGradEnd: "#D2DCFF",
        shadow: "#24262B",
        bluryBack: "#f5f5f5"
      },
      height: {
        navbar: "50px"
      },
      backgroundImage: {
        'color-pattern': "url('/images/Rectangle 2.png')",
      },
      fontFamily: {
        head: ["Manrope", "sans-serif"],
        main: ["Inter", "sans-serif"]
      },
      spacing: {
        "10PX": "10px",
        "20PX": "20px",
        "30PX": "30px",
        "40PX": "40px",
      },
      padding: {
        10: "10px",
        20: "20px",
        30: "30px",
        40: "40px",
      },
      borderRadius: {
        "sml": "10px",
        "mid": "15px",
        "large": "20px"
      },
      width: {
        "90p": "90%",
        "85p": "85%",
      },
      boxShadow: {
        custom: "0px 0px 10px theme('colors.shadow')",
      },
    },
  },
  plugins: [],
};
