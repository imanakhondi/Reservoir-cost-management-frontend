/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      iransansx: ["IRANSansX", "sans-serif"],
    },
    extend: {
      colors: {
        white: "#fff",
        bg: "#f8f8f8",
        primary: "#443FA5",
        "primary-light": "#d6eefe",
        "primary-lighter": "rgba(0,151,251,0.08)",
        success: "#58b961",
        "success-light": "rgba(88, 185, 97, 0.2)",
        warning: "#ef5033",
        "warning-light": "rgba(239, 80, 51, 0.2)",
        label: "#433d3d",
        subline: "#505050",
        deactive: "#868686",
        disable: "#b2b2b2",
        "disable-light": "rgba(178, 178, 178, 0.32)",
        border: "#e1e1e1",
        "border-line": "#dedede",
        "table-border": "#dbdbdb",
        modal: "rgba(30, 27, 27, 0.4)",
        yellow: "#edb900",
        "yellow-light": "rgba(237, 185, 0, 0.32)",
      },
      flex: {
        2: "2 2 0%",
      },
      lineHeight: {
        12: "3rem",
      },
    },
  },
  plugins: [],
};
