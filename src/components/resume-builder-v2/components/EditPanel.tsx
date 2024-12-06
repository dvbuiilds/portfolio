import React from 'react';

// HOOKS
import { useLayout } from '../context/LayoutContext';

// COMPONENTS
import { AccordionContainer } from './AccordionContainer';

// TYPES
import { ActiveSectionName } from '../types/layout';
import { SocialHandlesEditBox } from './edit-panel-components/SocialHandlesEditBox';
import { TitleEditBox } from './edit-panel-components/TitleEditBox';

export const EditPanel: React.FC = () => {
  const { activeSection, toggleDisplayMode, updateActiveSection } = useLayout();

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
      {/** Title */}
      <AccordionContainer
        title={'Title'}
        isOpen={activeSection === 'title'}
        onToggle={() => onTabClick('title')}
      >
        <TitleEditBox />
      </AccordionContainer>
      {/** Social Handles */}
      <AccordionContainer
        title={'Social Handles'}
        isOpen={activeSection === 'socialHandles'}
        onToggle={() => onTabClick('socialHandles')}
      >
        <SocialHandlesEditBox />
      </AccordionContainer>
    </div>
  );
};
