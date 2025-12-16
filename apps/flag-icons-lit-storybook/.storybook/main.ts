import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'
  ],
  addons: ['@storybook/addon-essentials'],
  core: {
    builder: "@storybook/builder-vite",
  },
  framework: {
    name: '@storybook/web-components-vite',
    options: {}
  },
  viteFinal: async (config) => {
    // TS-Paths für Vite spiegeln (falls nötig)
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@shared/ui': new URL('../../shared/ui/src/index.ts', import.meta.url).pathname
    };
    return config;
  }

};

export default config;
