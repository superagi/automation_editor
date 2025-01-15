import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from "vite-plugin-compression"

export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      deleteOriginFile: false,
    }),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      deleteOriginFile: false,
    }),
  ],
  base: "/",
  resolve: {
    alias: {
      '@': '/src'
    },
  },
  server: {
    port: 3100,
    host: "0.0.0.0",
    hmr: {
      host: "localhost",
    },
  },
  optimizeDeps: {
    include: ["vue", "vue-router", "pinia", "ant-design-vue", "axios"],
  },
})