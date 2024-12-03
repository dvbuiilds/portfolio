'use client';
import React from 'react';

// COMPONENTS
import { ResumeThemeProvider } from './context/ResumeThemeContext';
import { Resume } from './Resume';
import { ThemeChangingNavbar } from './ThemeChangingNavbar';
import { ResumeDataProvider } from './context/ResumeDataContext';

export const ResumeBuilderHome = () => {
  return (
    <ResumeThemeProvider>
      <ThemeChangingNavbar />
      <ResumeDataProvider>
        <Resume />
      </ResumeDataProvider>
    </ResumeThemeProvider>
  );
};
