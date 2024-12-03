import React from 'react';
import { Montserrat } from 'next/font/google';

// COMPONENTS
import { Title } from './components/Title';
import { SocialHandles } from './components/SocialHandles';

const montserrat = Montserrat({
  subsets: ['latin'],
});

const A4_SHEET_CONFIG = {
  width: '595px',
  height: '842px',
};

export const Resume = () => {
  return (
    <div className={`${montserrat.className} shadow-md w-3/4 bg-slate-50 mt-2`}>
      {/** Title */}
      <Title />
      {/** Social Handles */}
      <SocialHandles />
    </div>
  );
};
