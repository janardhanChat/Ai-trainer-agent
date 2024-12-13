/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        laptop: { max: "1500px" },
        tab: { max: "1180px" },
        mobile: { max: "576px" },
      },
      colors: {
        black: "#000",
        black100: "#19133A",
        black200: "#272727",
        blue: "#5138EE",
        gray900: "#999",
        borderColor:'#DADADA',
        borderColor1:'#DFCBDE',
        whiteOpacitybg:'rgba(255, 255, 255, 0.10)',
        whiteOpacitybg30:'rgba(255, 255, 255, 0.30)',
        whiteBorder:'rgba(255, 255, 255, 0.60)',
        modalbg:'rgba(0, 0, 0, 0.7)',
        blackOpacitybg:'rgba(0, 0, 0, 0.8)',
      },
      spacing: {
        30: '30px',
        50: '50px',
        60: '60px',
        80: '80px',
        100: '100px',
        110: '110px',
        120: '120px',
      },
      boxShadow: {
        "md": " 0px 4px 24px 0px rgba(0, 0, 0, 0.05)",
        "lg": " 0px 4px 24px 0px rgba(0, 0, 0, 0.04)",
        "lg2": " 0px 4px 24px 0px rgba(0, 0, 0, 0.04)",

      },
      fontSize: {

      },
      animation: {
        opacityAnimation: "opacity  .5s linear",
        scroll: "scrollY 60s linear infinite",
      },
      keyframes: {
        rotateAnimation: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(1turn)' },
        },
        scrollY: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(calc(-100% - 1rem))' },
        },
        opacity: {
          from: { opacity: "0", },
          to: { opacity: "1", },
        },
        enterFromLeft: {
          from: { opacity: "0", transform: "translateX(-200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
          to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(264deg, #9E8FFC 0%, #6061FA 50%, #5EADFA 100%)',
        'page-gradient': 'linear-gradient(180deg, #EFEFFD 0%, #F4E2EF 100%)',
      },

    },
  },
  plugins: [],
}