import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// Vite konfiguratsiyasi
export default defineConfig({
  base: "/",
  plugins: [react(), svgr()],
});
