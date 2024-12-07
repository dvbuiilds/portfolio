'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { SocialHandle, WorkExperience } from '../types/resume-data';

interface ResumeDataContextType {
  title: string;
  updateTitle: React.Dispatch<React.SetStateAction<string>>;
  socialHandles: Array<SocialHandle>;
  updateSocialHandles: React.Dispatch<
    React.SetStateAction<Array<SocialHandle>>
  >;
  workExperience: WorkExperience;
  updateWorkExperience: React.Dispatch<React.SetStateAction<WorkExperience>>;
}

const ResumeDataContext = createContext<ResumeDataContextType | undefined>(
  undefined,
);

const initialResumeData: {
  title: string;
  socialHandles: Array<SocialHandle>;
  workExperience: WorkExperience;
} = {
  title: 'Enter Your Name',
  socialHandles: [
    { label: 'abc@example.com', link: 'use mailto: in the link' },
    { label: 'LinkedIn', link: '#' },
  ],
  workExperience: {
    title: 'WORK EXPERIENCE',
    experience: [
      {
        companyName: 'Google Inc.',
        jobTitle: 'Software Engineer',
        startDate: 'June 2023',
        endDate: 'Present',
        description: ['Worked on YouTube Ads Scaling.'],
      },
    ],
  },
};

export const ResumeDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  /**
   * States to save the Resume Data.
   * At the same time, I decided to keep the states seperate and not a consolidated object, because updating the state can be a tedious task for sections like Work Experience, etc that have big complex objects.
   */
  const [title, updateTitle] = useState<string>(initialResumeData.title);
  const [socialHandles, updateSocialHandles] = useState<Array<SocialHandle>>(
    initialResumeData.socialHandles,
  );
  const [workExperience, updateWorkExperience] = useState<WorkExperience>(
    initialResumeData.workExperience,
  );

  return (
    <ResumeDataContext.Provider
      value={{
        title,
        updateTitle,
        socialHandles,
        updateSocialHandles,
        workExperience,
        updateWorkExperience,
      }}
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
