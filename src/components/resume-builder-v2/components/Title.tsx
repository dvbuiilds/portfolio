import React from 'react';

// HOOKS
import { useResumeData } from '../context/ResumeDataContext';
import { useResumeTheme } from '../context/ResumeThemeContext';

export const Title: React.FC = () => {
  const { title } = useResumeData();
  const { color } = useResumeTheme();
  return (
    <div className="w-full">
      <p className="text-center font-medium text-lg" style={{ color }}>
        {title}
      </p>
    </div>
  );
};
