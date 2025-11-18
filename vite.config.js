import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ilyanamegy.github.io/',
  plugins: [react()],
});
