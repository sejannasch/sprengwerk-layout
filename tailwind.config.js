module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
      body: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        cyan: "#9cdbff",
        "spw-blue": "#3D7FC2",
      },
    },
  },
  variants: {},
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": { maxWidth: "640px" },
          "@screen md": { maxWidth: "1024px" },
          "@screen lg": { maxWidth: "1440px" },
          "@screen xl": { maxWidth: "1680px" },
        },
      });
    },
  ],
};
