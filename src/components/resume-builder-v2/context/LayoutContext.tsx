'use client';
import React, { createContext, useState, useContext } from 'react';
import { ActiveSectionName, DisplayMode } from '../types/layout';

interface LayoutContextType {
  displayMode: DisplayMode;
  activeSection: ActiveSectionName;
  toggleDisplayMode: (_: ActiveSectionName) => void;
  updateActiveSection: React.Dispatch<React.SetStateAction<ActiveSectionName>>;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [displayMode, setDisplayMode] = useState<DisplayMode>('preview');
  const [activeSection, updateActiveSection] = useState<ActiveSectionName>('');

  const toggleDisplayMode = (sectionName: ActiveSectionName) => {
    setDisplayMode((prevMode) => (prevMode === 'edit' ? 'preview' : 'edit'));
    updateActiveSection(sectionName);
  };

  return (
    <LayoutContext.Provider
      value={{
        displayMode,
        activeSection,
        toggleDisplayMode,
        updateActiveSection,
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
