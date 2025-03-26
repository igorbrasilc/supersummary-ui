import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      'supersummary-tokens': resolve(__dirname, '../tokens/src/index.ts'),
    },
  },
});
