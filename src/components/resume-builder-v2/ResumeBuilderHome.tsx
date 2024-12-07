'use client';
import React, { useCallback, useMemo } from 'react';

// PROVIDERS
import { ResumeDataProvider } from './context/ResumeDataContext';
import { LayoutProvider, useLayout } from './context/LayoutContext';

// COMPONENTS
import { ResumeThemeProvider } from './context/ResumeThemeContext';
import { Resume } from './Resume';
import { ThemeChangingNavbar } from './ThemeChangingNavbar';
import { EditPanel } from './components/EditPanel';

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
    return displayMode === 'edit' ? <EditPanel /> : null;
  }, [displayMode]);

  return (
    <>
      <ThemeChangingNavbar />
      <ResumeDataProvider>
        <div className="flex flex-row w-full items-start justify-center gap-2 px-2 h-full">
          <div className={`flex flex-col ${resumeWidthClassName} items-center`}>
            <Resume />
          </div>
          {renderEditPanel()}
        </div>
      </ResumeDataProvider>
    </>
  );
};
