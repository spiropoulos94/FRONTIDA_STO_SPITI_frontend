import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/global.scss";
          @import "./src/styles/_mixins.scss";
          @import "./src/styles/_variables.scss";
        `,
      },
    },
  },
});
