
/**
 * Utility Functions
 */

/**
 * Convert hex color to RGB values
 * @param hex - Hex color string (e.g., '#FF0000')
 * @returns RGB object with r, g, b values
 */
export function hexToRgb(hex: HexColor): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

/**
 * Convert RGB to hex color
 * @param r - Red value (0-255)
 * @param g - Green value (0-255)  
 * @param b - Blue value (0-255)
 * @returns Hex color string
 */
export function rgbToHex(r: number, g: number, b: number): HexColor {
    return `#${[r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('')}`.toUpperCase() as HexColor;
}

/**
 * Lighten a hex color by a percentage
 * @param hex - Hex color string
 * @param percent - Percentage to lighten (0-100)
 * @returns Lightened hex color
 */
export function lightenColor(hex: HexColor, percent: number): HexColor {
    const rgb = hexToRgb(hex);
    if (!rgb) return hex;

    const factor = (100 + percent) / 100;
    const r = Math.min(255, Math.round(rgb.r * factor));
    const g = Math.min(255, Math.round(rgb.g * factor));
    const b = Math.min(255, Math.round(rgb.b * factor));

    return rgbToHex(r, g, b);
}

/**
 * Darken a hex color by a percentage
 * @param hex - Hex color string
 * @param percent - Percentage to darken (0-100)
 * @returns Darkened hex color
 */
export function darkenColor(hex: HexColor, percent: number): HexColor {
    const rgb = hexToRgb(hex);
    if (!rgb) return hex;

    const factor = (100 - percent) / 100;
    const r = Math.round(rgb.r * factor);
    const g = Math.round(rgb.g * factor);
    const b = Math.round(rgb.b * factor);

    return rgbToHex(r, g, b);
}

/**
 * Create RGBA color from hex with alpha
 * @param hex - Hex color string
 * @param alpha - Alpha value (0-1)
 * @returns RGBA color string
 */
export function hexToRgba(hex: HexColor, alpha: number): RgbaColor {
    const rgb = hexToRgb(hex);
    if (!rgb) return `rgba(0, 0, 0, ${alpha})` as RgbaColor;

    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})` as RgbaColor;
}

/**
 * Get country theme by name
 * @param country - Country name
 * @returns Color theme or null if not found
 */
export function getCountryTheme(country: string): ColorTheme | null {
    return CountryThemes[country.toLowerCase()] || null;
}

/**
 * Get all available country names
 * @returns Array of country names
 */
export function getAvailableCountries(): string[] {
    return Object.keys(CountryThemes);
}

/**
 * Validate if string is valid hex color
 * @param color - Color string to validate
 * @returns True if valid hex color
 */
export function isValidHexColor(color: string): color is HexColor {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
}

/**
 * Generate CSS custom property string
 * @param colorKey - Color property key
 * @param colorValue - Color value
 * @returns CSS custom property string
 */
export function toCssCustomProperty(colorKey: string, colorValue: ColorValue): string {
    return `--${colorKey}: ${colorValue};`;
}

/**
 * Generate CSS custom properties object
 * @param theme - Color theme object
 * @param prefix - Optional prefix for property names
 * @returns Object with CSS custom properties
 */
export function themeToCssProperties(theme: ColorTheme, prefix = 'flag'): Record<string, string> {
    const properties: Record<string, string> = {};

    Object.entries(theme).forEach(([key, value]) => {
        if (value) {
            properties[`--${prefix}-${key}`] = value;
        }
    });

    return properties;
}