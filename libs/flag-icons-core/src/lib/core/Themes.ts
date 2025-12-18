import { BaseColors } from "./BaseColors";

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
 * Country-specific color themes
 */
export const CountryThemes: Record<string, ColorTheme> = {
    germany: {
        primary: GermanColors.Black,
        secondary: GermanColors.Red,
        tertiary: GermanColors.Gold
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
