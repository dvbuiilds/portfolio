import { themeColorsReadOnly } from '../config/theme-config';

// Theme Color Keys
export type ThemeColorKeys = keyof typeof themeColorsReadOnly;

// Theme Color Values
export type ThemeColorValues = (typeof themeColorsReadOnly)[ThemeColorKeys];
