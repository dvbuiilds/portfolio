import React from 'react';

// HOOKS
import { useResumeData } from '../../context/ResumeDataContext';

// COMPONENTS
import { Experience } from '../../types/resume-data';
import { InputField } from './InputField';
import {
  BlueButton,
  ButtonWithCrossIcon,
  ButtonWithPlusIcon,
} from './EditPanelComponents';

export const WorkExperienceEdit: React.FC = () => {
  const { workExperience, updateWorkExperience } = useResumeData();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateWorkExperience({ ...workExperience, title: event.target.value });
  };

  const handleExperienceChange = (
    index: number,
    field: keyof Experience,
    value: string,
  ) => {
    const updatedExperience = [...workExperience.experience];
    updatedExperience[index] = { ...updatedExperience[index], [field]: value };
    updateWorkExperience({ ...workExperience, experience: updatedExperience });
  };

  const handleDescriptionChange = (
    expIndex: number,
    descIndex: number,
    value: string,
  ) => {
    const updatedExperience = [...workExperience.experience];
    const updatedDescription = [...updatedExperience[expIndex].description];
    updatedDescription[descIndex] = value;
    updatedExperience[expIndex] = {
      ...updatedExperience[expIndex],
      description: updatedDescription,
    };
    updateWorkExperience({ ...workExperience, experience: updatedExperience });
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
    const updatedExperience = workExperience.experience.filter(
      (_, i) => i !== index,
    );
    updateWorkExperience({ ...workExperience, experience: updatedExperience });
  };

  const addNewDescription = (expIndex: number) => {
    const updatedExperience = [...workExperience.experience];
    updatedExperience[expIndex].description.push('');
    updateWorkExperience({ ...workExperience, experience: updatedExperience });
  };

  const deleteDescription = (expIndex: number, descIndex: number) => {
    if (workExperience.experience[expIndex].description.length === 1) {
      alert('Atleast one description is needed for company.');
      return;
    }
    const updatedExperience = [...workExperience.experience];
    updatedExperience[expIndex].description = updatedExperience[
      expIndex
    ].description.filter((_, i) => i !== descIndex);
    updateWorkExperience({ ...workExperience, experience: updatedExperience });
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
