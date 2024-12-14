import React from 'react';

// HOOKS
import { useResumeData } from '../../context/ResumeDataContext';

// COMPONENTS
import { ActivityItem } from '../../types/resume-data';
import { InputField } from './InputField';
import {
  BlueButton,
  ButtonWithCrossIcon,
  ButtonWithPlusIcon,
} from './EditPanelComponents';

export const ActivitiesEditBox: React.FC = () => {
  const { activities, updateActivities } = useResumeData();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateActivities((prev) => ({ ...prev, title: event.target.value }));
  };

  const handleActivityChange = (
    index: number,
    field: keyof ActivityItem,
    value: string,
  ) => {
    updateActivities((prev) => {
      const updatedActivitiesArray = [...prev.activities];
      updatedActivitiesArray[index] = {
        ...updatedActivitiesArray[index],
        [field]: value,
      };
      return { ...prev, activities: updatedActivitiesArray };
    });
  };

  const handleDescriptionChange = (
    activityIndex: number,
    descIndex: number,
    value: string,
  ) => {
    updateActivities((prev) => {
      const updatedActivitiesArray = [...prev.activities];
      const updatedDescriptions = [
        ...updatedActivitiesArray[activityIndex].descriptions,
      ];
      updatedDescriptions[descIndex] = value;
      updatedActivitiesArray[activityIndex] = {
        ...updatedActivitiesArray[activityIndex],
        descriptions: updatedDescriptions,
      };

      return { ...prev, activities: updatedActivitiesArray };
    });
  };

  const addNewActivity = () => {
    const newActivity: ActivityItem = {
      activityTitle: '',
      institutionName: '',
      startDate: '',
      endDate: '',
      descriptions: [''],
    };
    updateActivities((prev) => {
      const updatedActivities = prev.activities.concat(newActivity);
      return { ...prev, activities: updatedActivities };
    });
  };

  const deleteActivity = (activityIndex: number) => {
    if (activities.activities.length === 1) {
      alert('Minimum 1 Activity is needed!');
      return;
    }
    updateActivities((prev) => {
      const updatedActivitiesArray = prev.activities.filter(
        (_, index) => index !== activityIndex,
      );
      return { ...prev, activities: updatedActivitiesArray };
    });
  };

  const addNewDescription = (activityIndex: number) => {
    updateActivities((prev) => {
      const updatedActivitiesArray = prev.activities.map((activity, index) => {
        if (index === activityIndex) {
          return {
            ...activity,
            descriptions: [...activity.descriptions, ''],
          };
        }
        return activity;
      });
      return { ...prev, activities: updatedActivitiesArray };
    });
  };

  const deleteDescription = (activityIndex: number, descIndex: number) => {
    if (activities.activities[activityIndex].descriptions.length === 1) {
      alert('At least one description is needed for an activity.');
      return;
    }
    updateActivities((prev) => {
      const selectedActivity = prev.activities[activityIndex];
      const updatedDescriptions = selectedActivity.descriptions.filter(
        (_, index) => descIndex !== index,
      );
      const updatedActivities = prev.activities.map((activity, index) => {
        if (activityIndex === index) {
          return {
            ...activity,
            descriptions: updatedDescriptions,
          };
        }
        return activity;
      });
      return { ...prev, activities: updatedActivities };
    });
  };

  return (
    <div className="space-y-4">
      <InputField
        type="text"
        value={activities.title}
        onChange={handleTitleChange}
        placeholder="Activities Section Title"
      />

      {activities.activities.map((activity, activityIndex) => (
        <ActivityEditBox
          key={`activityEditBox_${activityIndex}`}
          index={activityIndex}
          data={activity}
          addNewDescription={addNewDescription}
          deleteDescription={deleteDescription}
          deleteActivity={deleteActivity}
          handleDescriptionChange={handleDescriptionChange}
          handleActivityChange={handleActivityChange}
        />
      ))}

      <BlueButton label="Add New Activity" onClick={addNewActivity} />
    </div>
  );
};

interface ActivityEditBoxProps {
  index: number;
  data: ActivityItem;
  handleActivityChange: (
    index: number,
    keyName: keyof ActivityItem,
    value: string,
  ) => void;
  deleteActivity: (index: number) => void;
  handleDescriptionChange: (
    activityIndex: number,
    descIndex: number,
    value: string,
  ) => void;
  addNewDescription: (index: number) => void;
  deleteDescription: (activityIndex: number, descIndex: number) => void;
}

const ActivityEditBox: React.FC<ActivityEditBoxProps> = ({
  index,
  data,
  handleActivityChange,
  deleteActivity,
  handleDescriptionChange,
  addNewDescription,
  deleteDescription,
}) => {
  return (
    <div className="p-1 border rounded relative flex flex-col gap-1">
      <div className="flex flex-row items-center justify-between">
        <p className="text-xs font-medium">{`Activity #${index + 1}`}</p>
        <ButtonWithCrossIcon onClick={() => deleteActivity(index)} />
      </div>
      <InputField
        value={data.activityTitle}
        onChange={(event) =>
          handleActivityChange(index, 'activityTitle', event.target.value)
        }
        placeholder="Activity Title"
      />
      <InputField
        value={data.institutionName}
        onChange={(event) =>
          handleActivityChange(index, 'institutionName', event.target.value)
        }
        placeholder="Institution Name"
      />
      <div className="flex gap-2">
        <InputField
          type="text"
          value={data.startDate}
          onChange={(event) =>
            handleActivityChange(index, 'startDate', event.target.value)
          }
          placeholder="Start Date"
        />
        <InputField
          type="text"
          value={data.endDate}
          onChange={(event) =>
            handleActivityChange(index, 'endDate', event.target.value)
          }
          placeholder="End Date"
        />
      </div>

      {data.descriptions.map((desc, descIndex) => (
        <div key={descIndex} className="flex items-center gap-2">
          <InputField
            type="text"
            value={desc}
            onChange={(event) =>
              handleDescriptionChange(index, descIndex, event.target.value)
            }
            placeholder={`Description #${descIndex + 1}`}
          />
          <ButtonWithCrossIcon
            onClick={() => deleteDescription(index, descIndex)}
          />
        </div>
      ))}
      <ButtonWithPlusIcon
        onClick={() => addNewDescription(index)}
        label="Add Description"
      />
    </div>
  );
};
