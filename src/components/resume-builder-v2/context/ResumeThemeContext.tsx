'use client';
import { createContext, useContext, useState } from 'react';

// TYPES
import type { ThemeColorKeys, ThemeColorValues } from '../types/theme';

// CONFIGS
import { themeColorsReadOnly } from '../config/theme-config';

interface ResumeThemeContextType {
  color: ThemeColorValues;
  changeThemeColor: (colorKey: ThemeColorKeys) => void;
}

export const ResumeThemeContext = createContext<ResumeThemeContextType>({
  color: themeColorsReadOnly.black,
  changeThemeColor: (_colorKey: ThemeColorKeys) => {},
});

export const ResumeThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [color, updateThemeColor] = useState<ThemeColorValues>(
    themeColorsReadOnly.black,
  );

  const changeThemeColor = (colorKey: ThemeColorKeys) => {
    updateThemeColor(themeColorsReadOnly[colorKey]);
  };

  return (
    <ResumeThemeContext.Provider value={{ color, changeThemeColor }}>
      {children}
    </ResumeThemeContext.Provider>
  );
};

export const useResumeTheme = () => {
  const context = useContext(ResumeThemeContext);

  if (!context) {
    throw new Error('useResumeTheme must be used within a ThemeProvider');
  }

  return context;
};
