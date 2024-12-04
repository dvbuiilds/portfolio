'use client';
import React, { useCallback, useMemo } from 'react';

// PROVIDERS
import { ResumeDataProvider } from './context/ResumeDataContext';
import { LayoutProvider, useLayout } from './context/LayoutContext';

// COMPONENTS
import { ResumeThemeProvider } from './context/ResumeThemeContext';
import { Resume } from './Resume';
import { ThemeChangingNavbar } from './ThemeChangingNavbar';

// This Component is an HOC for ResumeBuilder so that the later can access LayoutContext.
export const ResumeBuilderHome = () => {
  return (
    <ResumeThemeProvider>
      <LayoutProvider>
        <ResumeBuilder />
      </LayoutProvider>
    </ResumeThemeProvider>
  );
};

export const ResumeBuilder: React.FC = () => {
  const { displayMode } = useLayout();
  const resumeWidthClassName = useMemo<string>(
    () => (displayMode === 'preview' ? 'w-3/4' : 'w-2/3'),
    [displayMode],
  );
  const renderEditPanel = useCallback(() => {
    return displayMode === 'edit' ? <div>Edit Panel Here!</div> : null;
  }, [displayMode]);

  return (
    <div className="flex flex-row w-full items-center justify-center">
      <div className={`flex flex-col ${resumeWidthClassName} items-center`}>
        <ThemeChangingNavbar />
        <ResumeDataProvider>
          <Resume />
        </ResumeDataProvider>
      </div>
      {renderEditPanel()}
    </div>
  );
};
