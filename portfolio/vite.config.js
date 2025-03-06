import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/", // Root-relative paths for production
  plugins: [react()],
  build: {
    outDir: 'dist',
    // Ensure proper module format and file organization
    rollupOptions: {
      output: {
        format: 'es',
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  // Properly resolve imports
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.json', '.css']
  }
})