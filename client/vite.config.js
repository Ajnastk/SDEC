import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server:{
 port : 3000,
 open : true,
  },
  build: {
    outDir: 'dist', // Explicitly set the output directory
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('three')) return 'three-vendor';
            return 'vendor'; // Common dependencies
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Suppress warnings for larger chunks
  },
  optimizeDeps: {
    include: ['three', '@splinetool/loader'],
  },
 
})
