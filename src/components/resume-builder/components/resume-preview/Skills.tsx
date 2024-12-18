import React from 'react';

// HOOKS
import { useResumeData } from '../../context/ResumeDataContext';
import { useResumeTheme } from '../../context/ResumeThemeContext';

// TYPES
import type { SkillSetItem } from '../../types/resume-data';

export const Skills: React.FC = () => {
  const { skills } = useResumeData();
  const { color } = useResumeTheme();

  return (
    <div className="my-1">
      <h2 className="font-medium text-sm" style={{ color }}>
        {skills.title}
      </h2>
      <hr className="w-full my-1" style={{ borderColor: color }} />
      <div className="mt-2">
        {skills.skillSet.map((skillSetItem, index) => (
          <SkillSet key={`skillSet_${index}`} data={skillSetItem} />
        ))}
      </div>
    </div>
  );
};

const SkillSet: React.FC<{
  data: SkillSetItem;
}> = ({ data }) => {
  return (
    <div className="text-xs">
      <span className="font-medium mr-1">{data.title}:</span>
      <span>{data.skills.join(', ')}</span>
    </div>
  );
};
