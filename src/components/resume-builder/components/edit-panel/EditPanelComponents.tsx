import React from 'react';
import { FaPlus } from 'react-icons/fa';

interface InputFieldProps extends React.ComponentProps<'input'> {}
export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  onBlur,
  className,
  ...otherInputProps
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`w-full rounded-md text-xs p-1 font-light border border-gray-300 ${className}`}
      {...otherInputProps}
    />
  );
};

/**
 * This interface and component were created to keep thr label and input field together, but currently i have decided to go without labels, hence this component is not being used anywhere. In future, it can be used anywhere that's why i am not removing it.
 */
interface LabelInputFieldPairProps extends React.ComponentProps<'input'> {
  label: string;
}
export const LabelInputFieldPair: React.FC<LabelInputFieldPairProps> = ({
  label,
  value,
  name,
  onChange,
  className,
  ...otherInputProps
}) => {
  return (
    <div className="flex flex-row gap-2 pr-2 items-center justify-between">
      <p className="text-xs">{label}</p>
      <InputField
        value={value}
        name={name}
        onChange={onChange}
        className={className}
        {...otherInputProps}
      />
    </div>
  );
};

export const ButtonWithCrossIcon: React.FC<{
  onClick: () => void;
  disabled?: boolean;
}> = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className="text-gray-600 hover:text-gray-800 disabled:text-gray-300 disabled:cursor-not-allowed"
      disabled={disabled}
    >
      &times;
    </button>
  );
};

export const ButtonWithPlusIcon: React.FC<{
  label: string;
  onClick: () => void;
}> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-blue-500 text-xs hover:text-blue-700"
    >
      <FaPlus className="mr-1" /> {label}
    </button>
  );
};

export const BlueButton: React.FC<{ label: string; onClick: () => void }> = ({
  label,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
    >
      {label}
    </button>
  );
};
