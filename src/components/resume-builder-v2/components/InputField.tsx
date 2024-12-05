import React from 'react';

interface InputFieldProps extends React.ComponentProps<'input'> {}
export const InputField: React.FC<InputFieldProps> = (props) => {
  return (
    <input
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      className="w-full rounded-md text-xs p-1 font-light border border-gray-300"
    />
  );
};
