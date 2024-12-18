import React from 'react';
import { RiDraggable } from 'react-icons/ri';

export const DraggableWrapper: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <div
      className={`flex items-center p-1 gap-0 bg-white border rounded shadow-sm ${className}`}
    >
      <div className="mr-1 text-gray-400 cursor-move">
        <RiDraggable size={20} />
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
};
