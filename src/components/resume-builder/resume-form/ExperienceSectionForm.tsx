import React from 'react';
import { FieldValueProps } from './types';
import { WorkingExperienceData } from '../types';
import { motion } from 'framer-motion';
import { BsXCircleFill } from 'react-icons/bs';

interface ExperienceSectionFormPropsType
  extends FieldValueProps<WorkingExperienceData> {}

export const ExperienceSectionForm: React.FC<ExperienceSectionFormPropsType> = (
  props,
) => {
  const { id, value, setValue } = props;

  const inputFieldClassNameValue =
    'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500';

  const fieldLabelClassNameValue =
    'block mb-2 text-sm font-medium text-gray-900 ';

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({
      ...prev,
      workExperienceSection: {
        ...prev.workExperienceSection,
        sectionTitle: event.target.value,
      },
    }));
  };

  const handleCompanyDetailsChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    setValue((prev) => {
      let updatedExperiencedData = [
        ...prev.workExperienceSection.experienceData,
      ];
      // @ts-ignore
      updatedExperiencedData[index][event.target.name] = event.target.value;
      return {
        ...prev,
        workExperienceSection: {
          ...prev.workExperienceSection,
          experienceData: updatedExperiencedData,
        },
      };
    });
  };

  const handleAddCompany = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setValue((prev) => ({
      ...prev,
      workExperienceSection: {
        ...prev.workExperienceSection,
        experienceData: [
          ...prev.workExperienceSection.experienceData,
          {
            company: '',
            duration: '',
            jobRole: '',
            location: '',
            link: '',
            workDescription: [''],
          },
        ],
      },
    }));
  };

  const handleDeleteCompany = (companyIndex: number) => {
    if (value.experienceData.length === 1) return;
    setValue((prev) => {
      let updatedExperienceData = [
        ...prev.workExperienceSection.experienceData,
      ];
      updatedExperienceData = updatedExperienceData.filter(
        (_com, index) => index !== companyIndex,
      );
      return {
        ...prev,
        workExperienceSection: {
          ...prev.workExperienceSection,
          experienceData: updatedExperienceData,
        },
      };
    });
  };

  const handleCompanyWorkDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    companyIndex: number,
    descriptionIndex: number,
  ) => {
    setValue((prev) => {
      let updatedExperiencedData = [
        ...prev.workExperienceSection.experienceData,
      ];
      updatedExperiencedData[companyIndex].workDescription[descriptionIndex] =
        event.target.value;
      return {
        ...prev,
        workExperienceSection: {
          ...prev.workExperienceSection,
          experienceData: updatedExperiencedData,
        },
      };
    });
  };

  const handleAddCompanyWorkDescription = (companyIndex: number) => {
    setValue((prevValue) => {
      const newExperienceData = [
        ...prevValue.workExperienceSection.experienceData,
      ];
      newExperienceData[companyIndex] = {
        ...newExperienceData[companyIndex],
        workDescription: [
          ...newExperienceData[companyIndex].workDescription,
          '',
        ],
      };
      return {
        ...prevValue,
        workExperienceSection: {
          ...prevValue.workExperienceSection,
          experienceData: newExperienceData,
        },
      };
    });
  };

  const handleDeleteCompanyDescription = (
    companyIndex: number,
    descIndex: number,
  ) => {
    if (value.experienceData[companyIndex].workDescription.length === 1) return;
    setValue((prev) => {
      let updatedExperiencedData = [
        ...prev.workExperienceSection.experienceData,
      ];

      updatedExperiencedData[companyIndex] = {
        ...updatedExperiencedData[companyIndex],
        workDescription: updatedExperiencedData[
          companyIndex
        ].workDescription.filter((_, index) => index !== descIndex),
      };

      return {
        ...prev,
        workExperienceSection: {
          ...prev.workExperienceSection,
          experienceData: updatedExperiencedData,
        },
      };
    });
  };

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-4">Work Experience</h2>
      <div className="mb-5">
        <label htmlFor="sectionTitle" className={fieldLabelClassNameValue}>
          Section Title
        </label>
        <input
          type="text"
          id="sectionTitle"
          className={inputFieldClassNameValue}
          placeholder="Internships / Work Experience"
          name="sectionTitle"
          value={value.sectionTitle}
          onChange={handleTitleChange}
          // required
        />
      </div>
      {value.experienceData.map((experience, index) => (
        <div key={index} className="py-5">
          <div className="relative flex flex-row items-center justify-between">
            <h3>{`Company #${index + 1}`}</h3>
            <span
              className="absolute text-red-500 hover:text-red-700 cursor-pointer h-[15px] w-[15px] right-0 top-0"
              onClick={() => handleDeleteCompany(index)}
            >
              <BsXCircleFill />
            </span>
          </div>
          <div className="mb-5">
            <label htmlFor="company" className={fieldLabelClassNameValue}>
              Company
            </label>
            <input
              type="text"
              id="company"
              className={inputFieldClassNameValue}
              placeholder="ABC Company"
              name="company"
              value={value.experienceData[index].company}
              onChange={(event) => handleCompanyDetailsChange(event, index)}
              // required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="location" className={fieldLabelClassNameValue}>
              Location
            </label>
            <input
              type="text"
              id="location"
              className={inputFieldClassNameValue}
              placeholder="Ex. Bangalore, Gurugram, etc."
              name="location"
              value={value.experienceData[index].location}
              onChange={(event) => handleCompanyDetailsChange(event, index)}
              // required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="jobRole" className={fieldLabelClassNameValue}>
              Job Role
            </label>
            <input
              type="text"
              id="jobRole"
              className={inputFieldClassNameValue}
              placeholder="Eg. Software Engineer"
              name="jobRole"
              value={value.experienceData[index].jobRole}
              onChange={(event) => handleCompanyDetailsChange(event, index)}
              // required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="link" className={fieldLabelClassNameValue}>
              Link
            </label>
            <input
              type="text"
              id="link"
              className={inputFieldClassNameValue}
              placeholder="Eg. link_of_proof"
              name="link"
              value={value.experienceData[index].link}
              onChange={(event) => handleCompanyDetailsChange(event, index)}
              // required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="duration" className={fieldLabelClassNameValue}>
              Duration
            </label>
            <input
              type="text"
              id="duration"
              className={inputFieldClassNameValue}
              placeholder="Eg. Sept 2023 - Present"
              name="duration"
              value={value.experienceData[index].duration}
              onChange={(event) => handleCompanyDetailsChange(event, index)}
              // required
            />
          </div>
          <label htmlFor="descriptions" className={fieldLabelClassNameValue}>
            Description
          </label>
          {experience.workDescription.map((_desc, descIndex) => (
            <div className="my-2 relative" key={descIndex}>
              <input
                key={descIndex}
                type="text"
                id={`description-#${descIndex}`}
                className={`${inputFieldClassNameValue} mb-2`}
                placeholder="Ex. Handled <b>Team of 80 people</b>."
                value={value.experienceData[index].workDescription[descIndex]}
                onChange={(event) =>
                  handleCompanyWorkDescriptionChange(event, index, descIndex)
                }
                // required
              />
              <span
                className="absolute text-red-500 hover:text-red-700 cursor-pointer h-[15px] w-[15px] right-0 top-0"
                onClick={() => handleDeleteCompanyDescription(index, descIndex)}
              >
                <BsXCircleFill />
              </span>
            </div>
          ))}
          <span
            className="my-2 rounded py-2 px-3 bg-blue-500 text-xs"
            onClick={(event) => handleAddCompanyWorkDescription(index)}
          >
            Add Description
          </span>
        </div>
      ))}
      <button
        className="my-2 rounded py-2 px-3 bg-blue-500 text-xs"
        onClick={handleAddCompany}
      >
        Add Experience
      </button>
    </motion.div>
  );
};
