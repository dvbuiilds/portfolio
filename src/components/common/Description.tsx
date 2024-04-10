import React from 'react';

interface DescriptionPropsType extends React.ComponentProps<'p'> {}

export const Description: React.FC<DescriptionPropsType> = (props) => {
  const { children } = props;
  return <p className="dark:text-white">{children}</p>;
};
