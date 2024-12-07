import React from 'react';
import { useResumeData } from '../../context/ResumeDataContext';
import { useResumeTheme } from '../../context/ResumeThemeContext';

export const WorkExperience: React.FC = () => {
  const { workExperience } = useResumeData();
  const { color } = useResumeTheme();

  return (
    <div className="my-1">
      <h2 className="font-medium text-sm" style={{ color }}>
        {workExperience.title}
      </h2>
      <hr className="w-full my-1" style={{ borderColor: color }} />
      {workExperience.experience.map((exp, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between">
            <div className="font-medium text-xs">
              {exp.companyName} - {exp.jobTitle}
            </div>
            <div className="font-medium text-xs">
              {exp.startDate} — {exp.endDate}
            </div>
          </div>
          <ul className="list-disc pl-5 mt-1 text-xs">
            {exp.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
