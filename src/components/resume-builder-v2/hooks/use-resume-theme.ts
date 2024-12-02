// HOOKS
import { useContext } from 'react';

// COMPONENTS
import { ResumeThemeContext } from '../context/ResumeThemeContext';

export const useResumeTheme = () => {
  const context = useContext(ResumeThemeContext);

  if (!context) {
    throw new Error('useResumeTheme must be used within a ThemeProvider');
  }

  return context;
};
