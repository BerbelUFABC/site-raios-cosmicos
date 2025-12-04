// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/site-raios-cosmicos/", // <- substitua por /meu-site/
  plugins: [react()],
});
