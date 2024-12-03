'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { SocialHandle } from '../types/resume-data';

interface ResumeDataContextType {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  socialHandles: Array<SocialHandle>;
  setSocialHandles: React.Dispatch<React.SetStateAction<Array<SocialHandle>>>;
}

const ResumeDataContext = createContext<ResumeDataContextType | undefined>(
  undefined,
);

export const ResumeDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  /**
   * States to save the Resume Data.
   * At the same time, I decided to keep the states seperate and not a consolidated object, because updating the state can be a tedious task for sections like Work Experience, etc that have big complex objects.
   */
  const [title, setTitle] = useState<string>('Enter Your Name');
  const [socialHandles, setSocialHandles] = useState<Array<SocialHandle>>([
    { label: 'abc@example.com', link: 'use mailto: in the link' },
    { label: 'LinkedIn', link: '#' },
  ]);

  return (
    <ResumeDataContext.Provider
      value={{ title, setTitle, socialHandles, setSocialHandles }}
    >
      {children}
    </ResumeDataContext.Provider>
  );
};

export const useResumeData = () => {
  const context = useContext(ResumeDataContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};
