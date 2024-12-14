import React from 'react';
import { useResumeData } from '../../context/ResumeDataContext';
import { InputField } from './InputField';

export const TitleEditBox = () => {
  const { title, updateTitle } = useResumeData();
  return (
    <InputField
      value={title}
      onChange={(event) => updateTitle(event.target.value)}
      onBlur={(event) => {
        if (event.target.value === '') {
          updateTitle('Enter Your Name');
        }
      }}
    />
  );
};
