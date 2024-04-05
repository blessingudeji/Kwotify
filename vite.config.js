import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  server: {
    port: 3000, // Specify the port you want to use
  },
  plugins: [
    tailwindcss(),
  ],
});
