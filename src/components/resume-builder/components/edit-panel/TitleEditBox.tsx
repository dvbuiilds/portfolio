import React from 'react';

// HOOKS
import { useResumeData } from '../../context/ResumeDataContext';

// COMPONENTS
import { InputField } from './EditPanelComponents';

export const TitleEditBox = () => {
  const { title, updateTitle } = useResumeData();

  return (
    <InputField
      value={title}
      onChange={(event) => updateTitle(event.target.value)}
    />
  );
};
