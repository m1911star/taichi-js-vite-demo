import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: "terser",
    terserOptions: {
      toplevel: true,
      mangle: false,
      keep_fnames: true,
      keep_classnames: true,
    },
    // target: "es",
  },
});
