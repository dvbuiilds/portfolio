// Theme Colors Mapping.
export const themeColors = {
  black: '#000000',
  orange: '#FF5722',
  darkRed: '#8B0000',
  darkBlue: '#00008B',
  darkGreen: '#006400',
} as const;

// Theme Colors Read Only
export const themeColorsReadOnly = Object.freeze(themeColors);
