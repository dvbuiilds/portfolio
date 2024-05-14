import React from 'react';
import { FieldValueProps } from './types';
import { ProjectData } from '../types';
import { motion } from 'framer-motion';
import { BsXCircleFill } from 'react-icons/bs';

interface ProjectsSectionFormPropsType extends FieldValueProps<ProjectData> {}

export const ProjectsSectionForm: React.FC<ProjectsSectionFormPropsType> = (
  props,
) => {
  const { id, value, setValue } = props;

  const inputFieldClassNameValue =
    'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500';

  const fieldLabelClassNameValue =
    'block mb-2 text-sm font-medium text-gray-900 ';

  const handleSectionTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setValue((prev) => ({
      ...prev,
      projectsSection: {
        ...prev.projectsSection,
        sectionTitle: event.target.value,
      },
    }));
  };

  const handleProjectTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    projectIndex: number,
  ) => {
    setValue((prev) => {
      const newProjects = [...prev.projectsSection.projects];
      newProjects[projectIndex].projectTitle = event.target.value;
      return {
        ...prev,
        projectsSection: {
          ...prev.projectsSection,
          projects: newProjects,
        },
      };
    });
  };

  const handleProjectLinkDetailsChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    projectIndex: number,
  ) => {
    setValue((prev) => {
      const newProjects = [...prev.projectsSection.projects];
      // @ts-expect-error
      newProjects[projectIndex].projectLink[event.target.name] =
        event.target.value;
      return {
        ...prev,
        projectsSection: {
          ...prev.projectsSection,
          projects: newProjects,
        },
      };
    });
  };

  const handleProjectDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    projectIndex: number,
    descriptionIndex: number,
  ) => {
    setValue((prev) => {
      let updatedProjectsData = [...prev.projectsSection.projects];
      updatedProjectsData[projectIndex].description[descriptionIndex] =
        event.target.value;
      return {
        ...prev,
        projectsSection: {
          ...prev.projectsSection,
          projects: updatedProjectsData,
        },
      };
    });
  };

  const handleAddProjectDescription = (projectIndex: number) => {
    setValue((prevValue) => {
      const newProjectData = [...prevValue.projectsSection.projects];
      newProjectData[projectIndex] = {
        ...newProjectData[projectIndex],
        description: [...newProjectData[projectIndex].description, ''],
      };
      return {
        ...prevValue,
        projectsSection: {
          ...prevValue.projectsSection,
          projects: newProjectData,
        },
      };
    });
  };

  const handleDeleteProjectDescription = (
    projectIndex: number,
    descIndex: number,
  ) => {
    if (value.projects[projectIndex].description.length === 1) return;
    setValue((prev) => {
      let updatedProjectsData = [...prev.projectsSection.projects];

      updatedProjectsData[projectIndex] = {
        ...updatedProjectsData[projectIndex],
        description: updatedProjectsData[projectIndex].description.filter(
          (_, index) => index !== descIndex,
        ),
      };

      return {
        ...prev,
        projectsSection: {
          ...prev.projectsSection,
          projects: updatedProjectsData,
        },
      };
    });
  };

  const handleAddProject = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setValue((prev) => ({
      ...prev,
      projectsSection: {
        ...prev.projectsSection,
        projects: [
          ...prev.projectsSection.projects,
          {
            projectTitle: '',
            projectLink: { label: '', link: '' },
            description: [''],
          },
        ],
      },
    }));
  };

  const handleDeleteProject = (projectIndex: number) => {
    if (value.projects.length === 1) return;
    setValue((prev) => {
      let updatedProjectsData = [...prev.projectsSection.projects];
      updatedProjectsData = updatedProjectsData.filter(
        (_com, index) => index !== projectIndex,
      );
      return {
        ...prev,
        projectsSection: {
          ...prev.projectsSection,
          projects: updatedProjectsData,
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
      <h2 className="mb-4">Projects</h2>
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
          onChange={handleSectionTitleChange}
          // required
        />
      </div>
      {value.projects.map((project, index) => (
        <div key={index} className="py-5">
          <div className="relative flex flex-row items-center justify-between">
            <h3>{`Project #${index + 1}`}</h3>
            <span
              className="absolute text-red-500 hover:text-red-700 cursor-pointer h-[15px] w-[15px] right-0 top-0"
              onClick={() => handleDeleteProject(index)}
            >
              <BsXCircleFill />
            </span>
          </div>
          <div className="mb-5">
            <label htmlFor="projectTitle" className={fieldLabelClassNameValue}>
              Project Title
            </label>
            <input
              type="text"
              id="projectTitle"
              className={inputFieldClassNameValue}
              placeholder="Eg. OMG - Video Chat Application, etc."
              name="projectTitle"
              value={value.projects[index].projectTitle}
              onChange={(event) => handleProjectTitleChange(event, index)}
              // required
            />
          </div>
          {value.projects[index].projectLink ? (
            <div className="mb-5">
              <label
                htmlFor="projectLink.label"
                className={fieldLabelClassNameValue}
              >
                Project Link
              </label>
              <div>
                <label
                  htmlFor="projectLink.label"
                  className={fieldLabelClassNameValue}
                >
                  Label
                </label>
                <input
                  type="text"
                  id="projectLink.label"
                  className={inputFieldClassNameValue}
                  placeholder="Eg. GitHub, etc."
                  name="label"
                  value={value.projects[index].projectLink?.label}
                  onChange={(event) =>
                    handleProjectLinkDetailsChange(event, index)
                  }
                  // required
                />
              </div>
              <div>
                <label
                  htmlFor="projectLink.link"
                  className={fieldLabelClassNameValue}
                >
                  Link
                </label>
                <input
                  type="text"
                  id="projectLink.link"
                  className={inputFieldClassNameValue}
                  placeholder="Eg. https://github.com/<username>/<repo>"
                  name="link"
                  value={value.projects[index].projectLink?.link}
                  onChange={(event) =>
                    handleProjectLinkDetailsChange(event, index)
                  }
                  // required
                />
              </div>
            </div>
          ) : null}
          <label htmlFor="description-#0" className={fieldLabelClassNameValue}>
            Description
          </label>
          {project.description.map((_desc, descIndex) => (
            <div className="my-2 relative" key={descIndex}>
              <input
                key={descIndex}
                type="text"
                id={`description-#${descIndex}`}
                className={`${inputFieldClassNameValue} mb-2`}
                placeholder="Eg. Leveraged <b>Socket.io for Text Chat</b> for messaging."
                value={value.projects[index].description[descIndex]}
                onChange={(event) =>
                  handleProjectDescriptionChange(event, index, descIndex)
                }
                // required
              />
              <span
                className="absolute text-red-500 hover:text-red-700 cursor-pointer h-[15px] w-[15px] right-0 top-0"
                onClick={() => handleDeleteProjectDescription(index, descIndex)}
              >
                <BsXCircleFill />
              </span>
            </div>
          ))}
          <span
            className="my-2 rounded py-2 px-3 bg-blue-500 text-xs"
            onClick={(event) => handleAddProjectDescription(index)}
          >
            Add Description
          </span>
        </div>
      ))}
      <button
        className="my-2 rounded py-2 px-3 bg-blue-500 text-xs"
        onClick={handleAddProject}
      >
        Add Project
      </button>
    </motion.div>
  );
};
