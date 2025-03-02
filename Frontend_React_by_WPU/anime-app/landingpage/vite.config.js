import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import obfuscator from 'rollup-plugin-obfuscator';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/landingpage/',
  publicDir: 'public',
  build: {
    outDir: '../weeboo/landingpage',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      plugins: [
        obfuscator({
          rotateStringArray: true,
          stringArray: true,
          stringArrayThreshold: 0.75,
          compact: true,
          controlFlowFlattening: true,
          debugProtection: true,
        }),
      ],
    },
  },
  esbuild: {
    minify: true,
  },
  sourcemap: false,
  minify: 'terser',
});
