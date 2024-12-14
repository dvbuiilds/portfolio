import React, { useCallback } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface AccordionContainerProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}
export const AccordionContainer: React.FC<AccordionContainerProps> = ({
  title,
  isOpen,
  onToggle,
  children,
}) => {
  const renderChevronIcon = useCallback(() => {
    return isOpen ? (
      <FiChevronUp className="text-gray-500" />
    ) : (
      <FiChevronDown className="text-gray-500" />
    );
  }, [isOpen]);

  return (
    <div className="border border-gray-300 rounded-md mb-2">
      <div
        onClick={onToggle}
        className="relative flex justify-between items-center p-1"
      >
        <h2 className="text-sm font-semibold">{title}</h2>
        {renderChevronIcon()}
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} p-1`}>{children}</div>
    </div>
  );
};
