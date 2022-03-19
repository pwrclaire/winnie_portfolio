module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "nav-reveal": {
          "0%": {
            opacity: "50",
            transform: "translateY(-5px)",
          },
          "50%": {
            height: "40px",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "pulser": {
          "0%": {
            left: '35%',
            width: "30%",
          },
          "50%": {
            left: '30%',
            width: "40%",
          },
          "100%": {
            left: '35%',
            width: "30%",
          },
        },
      },
      animation: {
        "nav-reveal": "nav-reveal 0.4s ease-out",
        "pulser": "pulser 2s ease-in infinite",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif", "system-ui"],
    },
    screens: {
      sm: { max: "639px" },
      md: { max: "767px" },
      lg: { max: "1023px" },
      xl: { max: "1279px" },
      "2xl": { max: "1600px" },
      allSize: { min: "1601" },
    },
  },
  plugins: [],
};
