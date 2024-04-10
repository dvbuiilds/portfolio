import React from 'react';

interface LoadingTextPropsType extends React.ComponentProps<'div'> {
  text?: string;
}

export const LoadingText: React.FC<LoadingTextPropsType> = (props) => {
  const { text } = props;
  return (
    <div className="my-10 text-4xl font-medium w-full leading-none text-center text-blue-700 animate-pulse dark:text-blue-200 cursor-not-allowed">
      {text ?? 'loading...'}
    </div>
  );
};
