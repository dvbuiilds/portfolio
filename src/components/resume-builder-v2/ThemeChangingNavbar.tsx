import React from 'react';

// HOOKS
import { useResumeTheme } from './hooks/use-resume-theme';

// TYPES
import type { ThemeColorKeys } from './types/theme';

// CONFIGS
import { themeColorsReadOnly } from './config/theme-config';

/**
 *
 * @returns React.FC
 * This function is the only and only controller of theme color of Resume Builder Application.
 * This React component supplies application with a small navbar containing color pallet to choose theme color from.
 */
export const ThemeChangingNavbar: React.FC = () => {
  const { color, changeThemeColor } = useResumeTheme();
  return (
    <div className={'flex justify-around gap-4'}>
      {Object.entries(themeColorsReadOnly).map(([colorName, colorCode]) => (
        <div
          key={`${colorName}_${colorCode}`}
          className={`w-6 h-6 rounded-full cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-lg transition-colors duration-300 ease-in-out ${color === colorCode ? 'border-4 border-blue-300' : 'border-4 border-white'}`}
          style={{ backgroundColor: colorCode }}
          onClick={() => changeThemeColor(colorName as ThemeColorKeys)}
        />
      ))}
    </div>
  );
};
