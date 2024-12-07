import React from 'react';
import { Montserrat } from 'next/font/google';

// COMPONENTS
import { Title } from './components/Title';
import { SocialHandles } from './components/SocialHandles';
import { EditableWrapper } from './components/wrappers/EditableWrapper';

const montserrat = Montserrat({
  subsets: ['latin'],
});

const A4_SHEET_CONFIG = {
  width: '595px',
  height: '842px',
};

export const Resume = () => {
  return (
    <div
      className={`${montserrat.className} shadow-md w-3/4 bg-slate-50 mt-2 p-2`}
    >
      {/** Title */}
      <EditableWrapper id={'title'}>
        <Title />
      </EditableWrapper>
      {/** Social Handles */}
      <EditableWrapper id={'socialHandles'}>
        <SocialHandles />
      </EditableWrapper>
    </div>
  );
};
