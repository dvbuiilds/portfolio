import React from 'react';

// HOOKS
import { useLayout } from '../context/LayoutContext';

// COMPONENTS
import { AccordionContainer } from './AccordionContainer';

// TYPES
import { ActiveSectionName } from '../types/layout';
import { InputField } from './InputField';
import { useResumeData } from '../context/ResumeDataContext';

export const EditPanel: React.FC = () => {
  const { activeSection, toggleDisplayMode, updateActiveSection } = useLayout();
  const { title, updateTitle } = useResumeData();

  const onTabClick = (sectionName: ActiveSectionName) => {
    if (activeSection === sectionName) {
      updateActiveSection('');
    } else {
      updateActiveSection(sectionName);
    }
  };

  return (
    <div className="w-1/3 h-full relative p-2 border border-gray-300 rounded-md bg-blue-50 border">
      <button
        onClick={() => toggleDisplayMode('')}
        className="absolute top-0 right-1 text-gray-600 hover:text-gray-800"
        aria-label="Close"
      >
        {/* Close icon */}
        &times;
      </button>
      {/** All children here! */}
      <p className="mb-2">Edit Panel</p>
      <AccordionContainer
        title={'Title'}
        isOpen={activeSection === 'title'}
        onToggle={() => onTabClick('title')}
      >
        <InputField
          value={title}
          onChange={(event) => updateTitle(event.target.value)}
          onBlur={(event) => {
            if (event.target.value === '') {
              updateTitle('Enter Your Name');
            }
          }}
        />
      </AccordionContainer>
    </div>
  );
};
