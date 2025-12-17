import type { ArgTypes } from '@storybook/web-components';
import { BaseLayoutArgTypes, BaseLayoutArgs } from './layout-arg-types';
import { BaseColorArgTypes, BaseColorArgs } from './color-arg-types';

/**
 * French Flag ArgTypes Configuration
 * 
 * Combines base layout controls with the three colors of the French tricolor flag:
 * - Blue (Bleu): Traditional French blue
 * - White (Blanc): Pure white
 * - Red (Rouge): Traditional French red
 * 
 * This configuration provides a clean, focused interface for the French flag component.
 */
export const FlagArgTypes: ArgTypes = {
    ...BaseLayoutArgTypes,
    // French tricolor flag colors (left to right: blue, white, red)
    'color-blue': BaseColorArgTypes['color-blue'],   // Bleu français
    'color-white': BaseColorArgTypes['color-white'], // Blanc français  
    'color-red': BaseColorArgTypes['color-red'],     // Rouge français
};

/**
 * French Flag Default Values
 * 
 * Provides authentic French tricolor values:
 * - Blue: #0055A4 (Official French blue from the national flag)
 * - White: #FFFFFF (Pure white)
 * - Red: #EF4135 (Official French red from the national flag)
 * 
 * These values match the official colors defined in the French government's
 * graphic charter for the national flag.
 * 
 * @see https://en.wikipedia.org/wiki/Flag_of_France
 */
export const FlagArgs = {
    ...BaseLayoutArgs,
    // Official French tricolor values
    'color-blue': '#0055A4',   // Bleu de France (official French blue)
    'color-white': '#FFFFFF',  // Blanc français (pure white)
    'color-red': '#EF4135',    // Rouge français (official French red)
};