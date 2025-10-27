/// <reference types='vitest' />
import { defineConfig } from 'vite';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/flag-icons-lib',

  plugins: [
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md'])
  ],

  build: {
    outDir: path.join(__dirname, './dist'),
    emptyOutDir: true,
    reportCompressedSize: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: path.join(__dirname, './src/index.ts'),
      name: 'flag-icons-core',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: [],
    },
  }
});
