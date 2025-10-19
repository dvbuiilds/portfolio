import React from 'react';
import { Cormorant_Garamond } from 'next/font/google';

// THIRD_PARTY
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from '@hello-pangea/dnd';

// HOOKS
import { useLayout } from '../../context/LayoutContext';
import { useResumeTheme } from '../../context/ResumeThemeContext';

// COMPONENTS
import { Title } from './Title';
import { SocialHandles } from './SocialHandles';
import { EditableWrapper } from '../wrappers/EditableWrapper';
import { WorkExperience } from './WorkExperience';
import { Projects } from './Projects';
import { Education } from './Education';
import { Activities } from './Activities';
import { Skills } from './Skills';
import { Achievements } from './Achievements';

// TYPES
import { ActiveSectionName } from '../../types/layout';

// CONFIGS
import { SectionNameMapping } from '../../config/section-name-config';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const A4_SHEET_CONFIG = {
  width: '595px',
  height: '842px',
};

const renderSection = (sectionName: ActiveSectionName) => {
  switch (sectionName) {
    case SectionNameMapping.TITLE: {
      return <Title />;
    }
    case SectionNameMapping.SOCIAL_HANDLES: {
      return <SocialHandles />;
    }
    case SectionNameMapping.WORK_EXPERIENCE: {
      return <WorkExperience />;
    }
    case SectionNameMapping.PROJECTS: {
      return <Projects />;
    }
    case SectionNameMapping.EDUCATION: {
      return <Education />;
    }
    case SectionNameMapping.ACTIVITIES: {
      return <Activities />;
    }
    case SectionNameMapping.SKILLS: {
      return <Skills />;
    }
    case SectionNameMapping.ACHIEVEMENTS: {
      return <Achievements />;
    }
    default: {
      return;
    }
  }
};

export const Resume = () => {
  const { sectionsOrder, updateSectionsOrder } = useLayout();
  const { font } = useResumeTheme();

  // Get the appropriate font className based on the selected font
  const getFontClassName = () => {
    if (font === 'Cormorant Garamond') {
      return cormorantGaramond.className;
    }
    // Times New Roman is a system font, no className needed
    return '';
  };

  const onDragEnd = (result: DropResult<string>) => {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) {
      return;
    }

    updateSectionsOrder((prev) => {
      // getting new array reference.
      const newItems = Array.from(prev);
      // removing the dragged item from the existing array. the index of the dragged item is available in result.source.index.
      const [reorderedItem] = newItems.splice(result.source.index, 1);
      // placing the dragged item to the destination index. the destination index is available in result.destination.index.
      newItems.splice(result?.destination?.index ?? 0, 0, reorderedItem);
      return newItems;
    });
  };

  const renderSections = () => {
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {sectionsOrder.map((sectionName, sectionIndex) => (
                <Draggable
                  key={`socialHandeLabel_${sectionIndex}`}
                  draggableId={`socialHandeLabel_${sectionIndex}`}
                  index={sectionIndex}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <EditableWrapper
                        key={`${sectionName}_${sectionIndex}`}
                        id={sectionName}
                      >
                        {renderSection(sectionName)}
                      </EditableWrapper>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  };

  return (
    <div
      className={`${getFontClassName()} shadow-md w-3/4 bg-slate-50 mt-2 p-4 flex flex-col`}
      style={
        font === 'Times New Roman'
          ? { fontFamily: 'Times New Roman, serif' }
          : undefined
      }
    >
      {renderSections()}
    </div>
  );
};
