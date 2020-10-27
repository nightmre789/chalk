module.exports = {
   purge: ["src/components/*.js", "public/**/*.html"],
   theme: {
      extend: {
         height: {
            padded: "95vh",
         },
         borderRadius: {
            xl: "1rem",
            ui: "1.5rem",
         },
      },
   },
   variants: {
      textColor: ["responsive", "hover", "focus", "group-hover"],
   },
   plugins: [],
   future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
   },
};
