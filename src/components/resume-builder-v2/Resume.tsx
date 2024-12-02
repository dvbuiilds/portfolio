import React from 'react';

// HOOKS
import { useResumeTheme } from './hooks/use-resume-theme';

export const Resume = () => {
  const { color } = useResumeTheme();
  return <div style={{ color }}>Resume</div>;
};
