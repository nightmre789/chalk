import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteAliases } from "vite-aliases";
import ViteFonts from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      react(),
      ViteAliases(),
      ViteFonts({
         custom: {
            families: [
               {
                  name: "FF Mark",
                  local: "FF Mark",
                  src: "./src/assets/fonts/FFMarkPro-*.otf",
               },
               {
                  name: "Gilroy",
                  local: "Gilroy",
                  src: "./src/assets/fonts/Gilroy-*.otf",
               },
            ],
            display: "auto",
            preload: true,
            prefetch: false,
         },
      }),
   ],
});
