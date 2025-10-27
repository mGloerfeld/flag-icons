
/**
 * French Flag Icons
 * 
 * This module provides access to various French flag variants including
 * national and military flags with their SVG geometries and specifications.
 */

import * as national from './national';
import * as military from './military';
import { Flag } from '../interfaces/flag';

/**
 * Collection of French flag variants
 */
export const france = {
    /** The national flag of France (blue, white, red vertical stripes - Tricolore) */
    national,

    /** The military flag of France */
    military,

    /** Available flag types for France */
    availableTypes: ['national', 'military'] as const,

    /** Country metadata */
    country: {
        name: 'France',
        code: 'FR',
        flagCount: 2,
    },
} as const;

// Type-safe exports
export type FrenchFlagType = typeof france;
export type FrenchFlagVariant = keyof Omit<FrenchFlagType, 'availableTypes' | 'country'>;

// Individual exports for direct access
export { national, military };

// Default export for convenience
export default france;

