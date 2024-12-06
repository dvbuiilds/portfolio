import React from 'react';

// THIRD_PARTY
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from '@hello-pangea/dnd';

// HOOKS
import { useResumeData } from '../../context/ResumeDataContext';

// COMPONENTS
import { InputField } from './InputField';
import { DraggableWrapper } from '../DraggableWrapper';

type SocialHandleKeys = 'label' | 'link';

export const SocialHandlesEditBox: React.FC = () => {
  const { socialHandles, updateSocialHandles } = useResumeData();

  const onDragEnd = (result: DropResult<string>) => {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) {
      return;
    }

    const newItems = Array.from(socialHandles);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    updateSocialHandles(newItems);
  };

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    console.log('@Dhairya -> ', { event, index });
    updateSocialHandles((prev) => {
      const updatedSocialHandles = [...prev];
      updatedSocialHandles[index][event.target.name as SocialHandleKeys] =
        event.target.value;
      console.log('@Dhairya updatedSocialHandles', updatedSocialHandles);
      return updatedSocialHandles;
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {socialHandles.map((socialHandle, index) => (
              <Draggable
                key={socialHandle.label}
                draggableId={socialHandle.label}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <DraggableWrapper key={`socialHandle_${index}`}>
                      <InputField
                        value={socialHandle.label}
                        name={'label'}
                        onChange={(event) => onChangeHandler(event, index)}
                      />
                      <InputField
                        value={socialHandle.link}
                        name={'link'}
                        onChange={(event) => onChangeHandler(event, index)}
                      />
                    </DraggableWrapper>
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
