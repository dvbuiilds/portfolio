import React from 'react';

interface TitleProps extends React.ComponentProps<'h1'> {}

export const Title: React.FC<TitleProps> = (props) => {
  const { children } = props;
  return (
    <h1 className="text-4xl my-4 font-extrabold text-gray-900">{children}</h1>
  );
};
