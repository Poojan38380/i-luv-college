import { sentryVitePlugin } from "@sentry/vite-plugin";
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "poojan-goyani",
    project: "javascript-react"
  })],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true
  },
});