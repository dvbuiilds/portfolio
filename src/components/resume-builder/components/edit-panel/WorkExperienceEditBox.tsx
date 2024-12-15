import React from 'react';

// HOOKS
import { useResumeData } from '../../context/ResumeDataContext';

// COMPONENTS
import { Experience } from '../../types/resume-data';
import {
  BlueButton,
  ButtonWithCrossIcon,
  ButtonWithPlusIcon,
  InputField,
} from './EditPanelComponents';

export const WorkExperienceEditBox: React.FC = () => {
  const { workExperience, updateWorkExperience } = useResumeData();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateWorkExperience({ ...workExperience, title: event.target.value });
  };

  const handleExperienceChange = (
    index: number,
    field: keyof Experience,
    value: string,
  ) => {
    updateWorkExperience((prev) => {
      const selectedExperienceItem = prev.experience[index];
      const updatedExperienceItem = {
        ...selectedExperienceItem,
        [field]: value,
      };
      const updateExperience = prev.experience.map((prevExp, expIndex) => {
        if (expIndex === index) {
          return updatedExperienceItem;
        }
        return prevExp;
      });
      return { ...prev, experience: updateExperience };
    });
    return;
  };

  const handleDescriptionChange = (
    expIndex: number,
    descIndex: number,
    value: string,
  ) => {
    updateWorkExperience((prev) => {
      const selectedExperience = { ...prev.experience[expIndex] };
      selectedExperience.description[descIndex] = value;
      const updatedExperience = prev.experience.map((prevExp, index) => {
        if (index === expIndex) {
          return selectedExperience;
        }
        return prevExp;
      });
      return { ...prev, experience: updatedExperience };
    });
  };

  const addNewExperience = () => {
    const newExperience: Experience = {
      companyName: '',
      jobTitle: '',
      startDate: '',
      endDate: '',
      description: [''],
    };
    updateWorkExperience({
      ...workExperience,
      experience: [...workExperience.experience, newExperience],
    });
  };

  const deleteExperience = (index: number) => {
    if (workExperience.experience.length === 1) {
      alert('Minimum 1 Work Experience is needed!');
      return;
    }

    updateWorkExperience((prev) => {
      const updatedExperience = prev.experience.filter((_, i) => i !== index);
      return { ...prev, experience: updatedExperience };
    });
  };

  const addNewDescription = (expIndex: number) => {
    updateWorkExperience((prev) => {
      const updatedExperienceArray = prev.experience.map((prevExp, index) => {
        if (index === expIndex) {
          return {
            ...prevExp,
            description: [...prevExp.description, ''],
          };
        }
        return prevExp;
      });
      return { ...prev, experience: updatedExperienceArray };
    });
  };

  const deleteDescription = (expIndex: number, descIndex: number) => {
    if (workExperience.experience[expIndex].description.length === 1) {
      alert('Atleast one description is needed for experience.');
      return;
    }
    updateWorkExperience((prev) => {
      const selectedExperience = prev.experience[expIndex];
      const updatedDescriptions = selectedExperience.description.filter(
        (_, index) => descIndex !== index,
      );
      const updatedExperienceArray = prev.experience.map((prevExp, index) => {
        if (expIndex === index) {
          return {
            ...prevExp,
            description: updatedDescriptions,
          };
        }
        return prevExp;
      });
      return { ...prev, experience: updatedExperienceArray };
    });
  };

  return (
    <div className="space-y-4">
      <InputField
        type="text"
        value={workExperience.title}
        onChange={handleTitleChange}
        placeholder="Work Experience Title"
      />

      {workExperience.experience.map((exp, expIndex) => (
        <ExperienceEditBox
          key={`workExperienceEditBox_${expIndex}`}
          index={expIndex}
          data={exp}
          addNewDescription={addNewDescription}
          deleteDescription={deleteDescription}
          deleteExperience={deleteExperience}
          handleDescriptionChange={handleDescriptionChange}
          handleExperienceChange={handleExperienceChange}
        />
      ))}

      <BlueButton label="Add New Experience" onClick={addNewExperience} />
    </div>
  );
};

interface ExperienceEditBoxProps {
  index: number;
  data: Experience;
  handleExperienceChange: (
    index: number,
    keyName: keyof Experience,
    value: string,
  ) => void;
  deleteExperience: (index: number) => void;
  handleDescriptionChange: (
    expIndex: number,
    descIndex: number,
    value: string,
  ) => void;
  addNewDescription: (index: number) => void;
  deleteDescription: (expIndex: number, descIndex: number) => void;
}

const ExperienceEditBox: React.FC<ExperienceEditBoxProps> = ({
  index,
  data,
  handleExperienceChange,
  deleteExperience,
  handleDescriptionChange,
  addNewDescription,
  deleteDescription,
}) => {
  return (
    <div className="p-1 border rounded relative flex flex-col gap-1">
      <div className="flex flex-row items-center justify-between">
        <p className="text-xs font-medium">{`Experience #${index}`}</p>
        <ButtonWithCrossIcon onClick={() => deleteExperience(index)} />
      </div>
      <InputField
        value={data.companyName}
        onChange={(event) =>
          handleExperienceChange(index, 'companyName', event.target.value)
        }
        placeholder="Company Name"
      />
      <InputField
        type="text"
        value={data.jobTitle}
        onChange={(event) =>
          handleExperienceChange(index, 'jobTitle', event.target.value)
        }
        placeholder="Job Title"
      />
      <div className="flex gap-2">
        <InputField
          type="text"
          value={data.startDate}
          onChange={(event) =>
            handleExperienceChange(index, 'startDate', event.target.value)
          }
          placeholder="Start Date"
        />
        <InputField
          type="text"
          value={data.endDate}
          onChange={(event) =>
            handleExperienceChange(index, 'endDate', event.target.value)
          }
          placeholder="End Date"
        />
      </div>

      {data.description.map((desc, descIndex) => (
        <div key={descIndex} className="flex items-center gap-2">
          <InputField
            type="text"
            value={desc}
            onChange={(event) =>
              handleDescriptionChange(index, descIndex, event.target.value)
            }
            placeholder={`Description #${descIndex}`}
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
