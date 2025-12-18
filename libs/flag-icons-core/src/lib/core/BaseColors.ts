
/**
 * @fileoverview Flag Colors System
 * 
 * Comprehensive color management system for flag components.
 * Provides type-safe colors, country-specific palettes, and utility functions.
 * 
 * @version 1.0.0
 * @author Flag Icons Team
 */

/**
 * Base color palette with standard web-safe hex values
 * Organized by color families for better maintainability
 */
export enum BaseColors {
    // Primary Colors
    Red = '#FF0000',
    Blue = '#0000FF',
    Yellow = '#FFFF00',

    // Neutral Colors  
    White = '#FFFFFF',
    Black = '#000000',
    Gray = '#808080',
    Silver = '#C0C0C0',

    // Secondary Colors
    Green = '#00FF00',
    Orange = '#FFA500',
    Purple = '#800080',

    // Specialty Colors
    Brown = '#8B4513',
    Turquoise = '#40E0D0',
    Copper = '#B87333'
}

/**
 * Color intensity variations
 */
export enum ColorIntensity {
    Light = 0.3,
    Medium = 0.6,
    Dark = 0.8,
    Full = 1.0
}

/**
 * Type definitions for color operations
 */
export type ColorKey = keyof typeof BaseColors;
export type HexColor = `#${string}`;
export type RgbaColor = `rgba(${number}, ${number}, ${number}, ${number})`;
export type ColorValue = HexColor | RgbaColor;

/**
 * Interface for color theme definitions
 */
export interface ColorTheme {
    primary: ColorValue;
    secondary: ColorValue;
    tertiary?: ColorValue;
    accent?: ColorValue;
    background?: ColorValue;
    text?: ColorValue;
}

/**
 * Backwards compatibility map for 'color-' prefix keys
 * @deprecated Use BaseColors enum instead for better type safety
 */
export const BaseColorsMap = {
    'color-red': BaseColors.Red,
    'color-white': BaseColors.White,
    'color-blue': BaseColors.Blue,
    'color-green': BaseColors.Green,
    'color-yellow': BaseColors.Yellow,
    'color-black': BaseColors.Black,
    'color-orange': BaseColors.Orange,
    'color-brown': BaseColors.Brown,
    'color-purple': BaseColors.Purple,
    'color-gray': BaseColors.Gray,
    'color-turquoise': BaseColors.Turquoise,
    'color-silver': BaseColors.Silver,
    'color-copper': BaseColors.Copper
} as const;

/**
 * Country-specific color themes
 */
export const CountryThemes: Record<string, ColorTheme> = {
    germany: {
        primary: GermanColors.Black,
        secondary: GermanColors.Red,
        tertiary:   .Gold
    },
    france: {
        primary: FrenchColors.Blue,
        secondary: FrenchColors.White,
        tertiary: FrenchColors.Red
    },
    usa: {
        primary: AmericanColors.Red,
        secondary: AmericanColors.White,
        tertiary: AmericanColors.Blue
    },
    uk: {
        primary: BritishColors.Red,
        secondary: BritishColors.White,
        tertiary: BritishColors.Blue
    }
} as const;
