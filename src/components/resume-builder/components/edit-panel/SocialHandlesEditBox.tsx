import React, { useMemo } from 'react';

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
import { DraggableWrapper } from '../wrappers/DraggableWrapper';
import { BlueButton, ButtonWithCrossIcon } from './EditPanelComponents';

// TYPES
import type { SocialHandle } from '../../types/resume-data';

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
    updateSocialHandles((prev) => {
      const updatedSocialHandles = [...prev];
      updatedSocialHandles[index][event.target.name as SocialHandleKeys] =
        event.target.value;
      return updatedSocialHandles;
    });
  };

  const addNewSocialHandle = () => {
    if (socialHandles.length >= 5) {
      // Prevent addition if 5 or more handles
      alert('Social Handles should not be more than 5.');
      return;
    }
    updateSocialHandles((prev) => [
      ...prev,
      { label: 'New Social Media', link: 'https://' },
    ]);
  };

  const canDeleteSocialHandles = useMemo(
    () => socialHandles.length > 2,
    [socialHandles.length],
  );

  const deleteSocialHandle = (index: number) => {
    if (socialHandles.length <= 2) {
      // Prevent deletion if 2 or fewer handles
      alert('Social Media Handles should be minimum 2.');
      return;
    }
    updateSocialHandles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {socialHandles.map((socialHandle, index) => (
              <Draggable
                key={`socialHandeLabel_${index}`}
                draggableId={`socialHandeLabel_${index}`}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="mb-1"
                  >
                    <SocialHandleEditBox
                      index={index}
                      canDeleteSocialHandles={canDeleteSocialHandles}
                      socialHandle={socialHandle}
                      onChangeHandler={onChangeHandler}
                      deleteSocialHandle={deleteSocialHandle}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {/** Add Social Handle Button. Can be kept outside of the context wrapper, but just to save extra node, i kept it here. */}
      <BlueButton label="Add Social Handle" onClick={addNewSocialHandle} />
    </DragDropContext>
  );
};

const SocialHandleEditBox: React.FC<{
  canDeleteSocialHandles: boolean;
  socialHandle: SocialHandle;
  index: number;
  deleteSocialHandle: (_: number) => void;
  onChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => void;
}> = ({
  canDeleteSocialHandles,
  socialHandle,
  index,
  deleteSocialHandle,
  onChangeHandler,
}) => {
  return (
    <DraggableWrapper>
      <div className="flex flex-row justify-between items-center relative">
        <p className="text-sm">Social Handle #{index}</p>
        <ButtonWithCrossIcon
          onClick={() => deleteSocialHandle(index)}
          disabled={!canDeleteSocialHandles}
        />
      </div>
      <div className="flex flex-row gap-2 pr-2 items-center">
        <p className="text-xs">Label</p>
        <InputField
          value={socialHandle.label}
          name={'label'}
          onChange={(event) => onChangeHandler(event, index)}
        />
      </div>
      <div className="flex flex-row gap-4 pr-2 items-center">
        <p className="text-xs">Link</p>
        <InputField
          value={socialHandle.link}
          name={'link'}
          onChange={(event) => onChangeHandler(event, index)}
        />
      </div>
    </DraggableWrapper>
  );
};
