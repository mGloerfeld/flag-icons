/// <reference types='vitest' />
import { defineConfig } from 'vite';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
    root: __dirname,
    cacheDir: path.join(__dirname, '../node_modules/.vite/libs/flag-icons-lit'),

    plugins: [
        nxViteTsPaths(),

    ],
    build: {
        outDir: path.join(__dirname, './dist'),
        emptyOutDir: true,
        reportCompressedSize: true,
        lib: {
            // Could also be a dictionary or array of multiple entry points.
            entry: path.join(__dirname, './src/index.ts'),
            name: 'flag-icons-lit',
            fileName: 'index',
            // Change this to the formats you want to support.
            // Don't forget to update your package.json as well.
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            // External packages that should not be bundled into your library.
            external: [
                // "lit"
            ],
        }
    }
});
