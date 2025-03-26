import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: 'supersummary-react',
            replacement: resolve(__dirname, '../../react/src/index.tsx'),
          },
          {
            find: 'supersummary-tokens',
            replacement: resolve(__dirname, '../../tokens/src/index.ts'),
          },
        ],
      },
    });
  },
};

export default config;
