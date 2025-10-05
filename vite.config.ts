import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// removed platform-specific dev plugin import to avoid host-specific integrations

export default defineConfig({
  plugins: [
    react(),
  // runtime error overlay removed
  // cartographer plugin removed (platform-specific)
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
