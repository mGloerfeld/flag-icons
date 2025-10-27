
/**
 * German Flag Icons
 * 
 * This module provides access to various German flag variants including
 * national and military flags with their SVG geometries and specifications.
 */

import { national } from './national';
import { military } from './military';
import { Flag } from '../interfaces/flag';

/**
 * Collection of German flag variants
 */
export const germany = {
    /** The national flag of Germany (black, red, gold horizontal stripes) */
    national,

    /** The military flag of Germany */
    military,

    /** Available flag types for Germany */
    availableTypes: ['national', 'military'] as const,

    /** Country metadata */
    country: {
        name: 'Germany',
        code: 'DE',
        flagCount: 2,
    },
} as const;

// Type-safe exports
export type GermanFlagType = typeof germany;
export type GermanFlagVariant = keyof Omit<GermanFlagType, 'availableTypes' | 'country'>;

// Individual exports for direct access
export { national, military };

// Default export for convenience
export default germany;
