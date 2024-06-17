import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vitePluginPrettier from "vite-plugin-prettier";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    // vitePluginPrettier(),
    VitePWA({
      manifest: "./manifest.json",
      workbox: {
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // Example: 10MB
        // Other workbox options...
      },
    }),
  ],
});
