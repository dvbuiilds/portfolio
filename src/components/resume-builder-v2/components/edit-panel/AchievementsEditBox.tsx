import React from 'react';
import { useResumeData } from '../../context/ResumeDataContext';
import { InputField } from './InputField';
import { BlueButton, ButtonWithCrossIcon } from './EditPanelComponents';
import { AchievementItem } from '../../types/resume-data';

export const AchievementsEditBox: React.FC = () => {
  const { achievements, updateAchievements } = useResumeData();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateAchievements((prev) => ({ ...prev, title: event.target.value }));
  };

  const handleAchievementChange = (
    index: number,
    field: keyof AchievementItem,
    value: string,
  ) => {
    updateAchievements((prev) => {
      const updatedAchievementList = [...prev.achievementList];
      updatedAchievementList[index] = {
        ...updatedAchievementList[index],
        [field]: value,
      };
      return { ...prev, achievementList: updatedAchievementList };
    });
  };

  const addNewAchievement = () => {
    const newAchievement: AchievementItem = {
      awardName: '',
      institutionName: '',
      dateAwarded: '',
      description: '',
    };
    updateAchievements((prev) => ({
      ...prev,
      achievementList: [...prev.achievementList, newAchievement],
    }));
  };

  const deleteAchievement = (index: number) => {
    if (achievements.achievementList.length === 1) {
      alert('At least one achievement item is required.');
      return;
    }
    updateAchievements((prev) => ({
      ...prev,
      achievementList: prev.achievementList.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-4">
      <InputField
        type="text"
        value={achievements.title}
        onChange={handleTitleChange}
        placeholder="Achievements Section Title"
      />

      {achievements.achievementList.map((achievement, index) => (
        <AchievementEditBox
          key={`achievementEditBox_${index}`}
          index={index}
          data={achievement}
          handleAchievementChange={handleAchievementChange}
          deleteAchievement={deleteAchievement}
        />
      ))}

      <BlueButton label="Add New Achievement" onClick={addNewAchievement} />
    </div>
  );
};

interface AchievementEditBoxProps {
  index: number;
  data: AchievementItem;
  handleAchievementChange: (
    index: number,
    field: keyof AchievementItem,
    value: string,
  ) => void;
  deleteAchievement: (index: number) => void;
}

const AchievementEditBox: React.FC<AchievementEditBoxProps> = ({
  index,
  data,
  handleAchievementChange,
  deleteAchievement,
}) => {
  return (
    <div className="p-1 border rounded relative flex flex-col gap-1">
      <div className="flex flex-row items-center justify-between">
        <p className="text-xs font-medium">{`Achievement #${index + 1}`}</p>
        <ButtonWithCrossIcon onClick={() => deleteAchievement(index)} />
      </div>
      <InputField
        value={data.awardName}
        onChange={(event) =>
          handleAchievementChange(index, 'awardName', event.target.value)
        }
        placeholder="Award Name"
      />
      <InputField
        value={data.institutionName}
        onChange={(event) =>
          handleAchievementChange(index, 'institutionName', event.target.value)
        }
        placeholder="Institution Name"
      />
      <InputField
        value={data.dateAwarded}
        onChange={(event) =>
          handleAchievementChange(index, 'dateAwarded', event.target.value)
        }
        placeholder="Date Awarded"
      />
      <InputField
        value={data.description}
        onChange={(event) =>
          handleAchievementChange(index, 'description', event.target.value)
        }
        placeholder="Description"
      />
    </div>
  );
};
