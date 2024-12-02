'use client';
import React from 'react';

// COMPONENTS
import { ResumeThemeProvider } from './context/ResumeThemeContext';
import { Resume } from './Resume';
import { ThemeChangingNavbar } from './ThemeChangingNavbar';

export const ResumeBuilderHome = () => {
  return (
    <ResumeThemeProvider>
      <ThemeChangingNavbar />
      <Resume />
    </ResumeThemeProvider>
  );
};
