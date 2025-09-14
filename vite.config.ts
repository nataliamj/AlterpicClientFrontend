// vite.config.ts
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
        // otros plugins...
    ],
    resolve: {
        alias: {
            '@': '/src',
            '@assets': '/src/assets'
        }
    }
});