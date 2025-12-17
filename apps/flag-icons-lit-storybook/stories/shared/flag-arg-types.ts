import type { ArgTypes } from '@storybook/web-components';
import { BaseLayoutArgTypes, BaseLayoutArgs } from './layout-arg-types';
import { BaseColorArgTypes, BaseColorArgs } from './color-arg-types';

/**
 * Complete flag argTypes with layout + 13 colors
 */
export const flagArgTypes: ArgTypes = {
    ...BaseLayoutArgTypes,
    ...BaseColorArgTypes
};

/**
 * Complete flag args with layout + 13 colors
 */
export const flagArgs = {
    ...BaseLayoutArgs ,
    ...BaseColorArgs
};

// Re-export individual components for convenience
// export { baseFlagArgTypes, baseFlagArgs } from './layout-arg-types';
// export { thirteenColorArgTypes, thirteenColorArgs } from './color-arg-types';