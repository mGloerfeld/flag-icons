import type { ArgTypes } from '@storybook/web-components';

/**
 * Common layout argTypes for flag icon components
 * Reusable across different flag stories
 */
export const BaseLayoutArgTypes: ArgTypes = {
    responsive: {
        control: 'boolean',
        description: 'Make the flag responsive (overrides width/height)',
        defaultValue: false,
        table: {
            category: 'Layout'
        }
    },
    width: {
        control: { type: 'range', min: 50, max: 800, step: 10 },
        description: 'Width in pixels (only when responsive is false)',
        defaultValue: 300,
        if: { arg: 'responsive', eq: false },
        table: {
            category: 'Layout'
        }
    },
    height: {
        control: { type: 'range', min: 30, max: 400, step: 10 },
        description: 'Height in pixels (only when responsive is false)',
        defaultValue: 200,
        if: { arg: 'responsive', eq: false },
        table: {
            category: 'Layout'
        }
    },
    responsiveHeight: {
        control: 'select',
        options: [
            'auto',
            '25%',
            '50%',
            '75%',
            '100%',
            '25vh',
            '33vh',
            '50vh',
            '75vh',
            '100vh'
        ],
        defaultValue: 'auto',
        if: { arg: 'responsive', eq: true },
        description: 'Height mode for responsive flag',
        table: {
            category: 'Layout'
        }
    }
};

/**
 * Common layout args for flag components
 */
export const BaseLayoutArgs = {
    responsive: false,
    width: 300,
    height: 200,
    responsiveHeight: 'auto'
};