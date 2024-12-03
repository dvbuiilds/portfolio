import React from 'react';

// HOOKS
import { useResumeData } from '../context/ResumeDataContext';

// TYPES
import type { SocialHandle } from '../types/resume-data';

export const SocialHandles: React.FC = () => {
  const { socialHandles } = useResumeData();
  return (
    <div className="flex flex-row items-center justify-around">
      {socialHandles.map((socialHandle, index) => (
        <SocialHandle
          key={`socialHandle_${index}`}
          link={socialHandle.link}
          label={socialHandle.label}
        />
      ))}
    </div>
  );
};

const SocialHandle: React.FC<SocialHandle> = (props) => {
  return (
    <a className="text-center text-xs" href={props.link}>
      {props.label}
    </a>
  );
};
