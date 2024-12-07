import React from 'react';
import { MdOutlineEdit } from 'react-icons/md';
import { ActiveSectionName } from '../../types/layout';
import { useLayout } from '../../context/LayoutContext';

export const EditableWrapper: React.FC<{
  id: ActiveSectionName;
  children: React.ReactNode;
}> = ({ id, children }) => {
  const { toggleDisplayMode } = useLayout();
  const onClickHandler = () => {
    toggleDisplayMode(id);
  };

  return (
    <div
      onClick={onClickHandler}
      className="relative border border-transparent hover:border-blue-300 group transition duration-300 ease-in-out cursor-pointer"
    >
      {/* Edit Icon */}
      <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <MdOutlineEdit className="text-blue-300" />
      </div>
      {/* Content */}
      {children}
    </div>
  );
};
