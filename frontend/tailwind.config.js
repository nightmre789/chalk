module.exports = {
   purge: ["src/components/*.js", "public/**/*.html"],
   theme: {
      extend: {},
   },
   variants: {},
   plugins: [],
   future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
   },
};
