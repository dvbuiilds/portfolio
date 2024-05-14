import React from 'react';

interface SectionTitlePropsType extends React.ComponentProps<'h5'> {
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case';
}

export const SectionTitle: React.FC<SectionTitlePropsType> = (props) => {
  const { textTransform = 'normal-case', children } = props;
  return (
    <h5
      className={`font-semibold py-1 w-full pl-2 my-1 border-b-[4px] ${
        textTransform ?? ''
      }`}
    >
      {children}
    </h5>
  );
};
