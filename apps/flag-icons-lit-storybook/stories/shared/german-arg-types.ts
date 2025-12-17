import type { ArgTypes } from '@storybook/web-components';
import { BaseLayoutArgTypes, BaseLayoutArgs } from './layout-arg-types';
import { BaseColorArgTypes, BaseColorArgs } from './color-arg-types';

/**
 * German flag argTypes with layout + 3 specific colors
 */
export const FlagArgTypes: ArgTypes = {
    ...BaseLayoutArgTypes,
    // Only the colors needed for German flag
    'color-black': BaseColorArgTypes['color-black'],
    'color-red': BaseColorArgTypes['color-red'],
    'color-yellow': BaseColorArgTypes['color-yellow'],
};

/**
 * German flag args with layout + 3 specific colors
 */
export const FlagArgs = {
    ...BaseLayoutArgs,
    // Only the colors needed for German flag with German-specific values
    'color-black': '#000000',   // Deutsches Schwarz
    'color-red': '#DD0000',     // Deutsches Rot
    'color-yellow': '#FFCE00',  // Deutsches Gold
};
 