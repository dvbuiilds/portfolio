import React from 'react';
import { Montserrat } from 'next/font/google';

// THIRD_PARTY
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from '@hello-pangea/dnd';

// HOOKS
import { useLayout } from '../../context/LayoutContext';

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

const montserrat = Montserrat({
  subsets: ['latin'],
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

  const onDragEnd = (result: DropResult<string>) => {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) {
      return;
    }

    const newItems = Array.from(sectionsOrder);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    updateSectionsOrder(newItems);
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
      className={`${montserrat.className} shadow-md w-3/4 bg-slate-50 mt-2 p-4 flex flex-col`}
    >
      {renderSections()}
    </div>
  );
};
