'use client';
import React, { createContext, useState, useContext } from 'react';
import { ActiveSectionName, DisplayMode } from '../types/layout';

interface LayoutContextType {
  displayMode: DisplayMode;
  activeSection: ActiveSectionName;
  toggleDisplayMode: (_: ActiveSectionName) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [displayMode, setDisplayMode] = useState<DisplayMode>('preview');
  const [activeSection, setActiveSection] = useState<ActiveSectionName>('');

  const toggleDisplayMode = (sectionName: ActiveSectionName) => {
    setDisplayMode((prevMode) => (prevMode === 'edit' ? 'preview' : 'edit'));
    setActiveSection(sectionName);
  };

  return (
    <LayoutContext.Provider
      value={{
        displayMode,
        activeSection,
        toggleDisplayMode,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};
