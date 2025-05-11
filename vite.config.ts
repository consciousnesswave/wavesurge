import path from "path";
import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";

export default defineConfig({
  root: "src",
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: path.resolve(__dirname, "src/popup/index.html"),
        background: path.resolve(__dirname, "src/background/service-worker.tsx"
        ),
        setting: path.resolve(__dirname, "src/setting/index.html"),
      },
      output: {
        assetFileNames: "assets/[name]-[hash].[ext]",
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: (chunkInfo: {
          name: string;
          facadeModuleId: string | null;
        }) => {
          const filePath = chunkInfo.facadeModuleId ?? "";
          const fileName = path.basename(filePath, path.extname(filePath));
          return `${chunkInfo.name}/${fileName}.js`;
        },
      },
    },
  },
  plugins: [
    react(),
    copy({
      targets: [
        { src: "manifest.json", dest: "dist" },
        { src: "src/icons/**", dest: "dist/icons" },
      ],
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
