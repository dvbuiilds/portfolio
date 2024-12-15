import React from 'react';

// HOOKS
import { useResumeData } from '../../context/ResumeDataContext';

// COMPONENTS
import {
  BlueButton,
  ButtonWithCrossIcon,
  InputField,
} from './EditPanelComponents';

export const SkillsEditBox: React.FC = () => {
  const { skills, updateSkills } = useResumeData();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSkills((prev) => ({ ...prev, title: event.target.value }));
  };

  const handleSkillSetChange = (
    index: number,
    field: 'title' | 'skills',
    value: string,
  ) => {
    updateSkills((prev) => {
      const updatedSkillSet = [...prev.skillSet];
      if (field === 'title') {
        updatedSkillSet[index] = { ...updatedSkillSet[index], title: value };
      } else {
        updatedSkillSet[index] = {
          ...updatedSkillSet[index],
          skills: value.split(',').map((skill) => skill.trim()),
        };
      }
      return { ...prev, skillSet: updatedSkillSet };
    });
  };

  const addNewSkillSet = () => {
    updateSkills((prev) => ({
      ...prev,
      skillSet: [...prev.skillSet, { title: '', skills: [] }],
    }));
  };

  const deleteSkillSet = (index: number) => {
    if (skills.skillSet.length === 1) {
      alert('At least 1 skillset is required.');
      return;
    }
    updateSkills((prev) => ({
      ...prev,
      skillSet: prev.skillSet.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-4">
      <InputField
        type="text"
        value={skills.title}
        onChange={handleTitleChange}
        placeholder="Skills Section Title"
      />

      {skills.skillSet.map((skillSet, index) => (
        <div
          key={index}
          className="p-1 border rounded relative flex flex-col gap-1"
        >
          <div className="flex flex-row items-center justify-between">
            <p className="text-xs font-medium">{`Skill Set #${index + 1}`}</p>
            <ButtonWithCrossIcon onClick={() => deleteSkillSet(index)} />
          </div>
          <InputField
            value={skillSet.title}
            onChange={(e) =>
              handleSkillSetChange(index, 'title', e.target.value)
            }
            placeholder="Skill Set Title"
          />
          <InputField
            value={skillSet.skills.join(', ')}
            onChange={(e) =>
              handleSkillSetChange(index, 'skills', e.target.value)
            }
            placeholder="Skills (comma-separated)"
          />
        </div>
      ))}

      <BlueButton label="Add New Skill Set" onClick={addNewSkillSet} />
    </div>
  );
};
