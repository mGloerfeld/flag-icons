
// libs/shared-wc/.storybook/preview.ts
import type { Preview } from '@storybook/web-components';

export const parameters: Preview['parameters'] = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        expanded: true,
        matchers: { color: /(background|color)$/i, date: /Date$/ }
    },
};

export const decorators = [
    (story: any) => {
        // Beispiel: globaler Container/Theme
        return story();
    }
];
