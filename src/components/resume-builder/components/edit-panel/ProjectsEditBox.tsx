import React from 'react';

// HOOKS
import { useResumeData } from '../../context/ResumeDataContext';

// COMPONENTS
import { Experience, Project } from '../../types/resume-data';
import { InputField } from './InputField';
import {
  BlueButton,
  ButtonWithCrossIcon,
  ButtonWithPlusIcon,
} from './EditPanelComponents';

export const ProjectsEditBox: React.FC = () => {
  const { projects, updateProjects } = useResumeData();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateProjects((prev) => ({ ...prev, title: event.target.value }));
  };

  const handleExperienceChange = (
    index: number,
    field: keyof Experience,
    value: string,
  ) => {
    updateProjects((prev) => {
      const updatedProjectsArray = [...prev.projects];
      updatedProjectsArray[index] = {
        ...updatedProjectsArray[index],
        [field]: value,
      };
      return { ...prev, projects: updatedProjectsArray };
    });
  };

  const handleDescriptionChange = (
    projIndex: number,
    descIndex: number,
    value: string,
  ) => {
    updateProjects((prev) => {
      const updatedProjectsArray = [...prev.projects];
      const updatedDescription = [
        ...updatedProjectsArray[projIndex].description,
      ];
      updatedDescription[descIndex] = value;
      updatedProjectsArray[projIndex] = {
        ...updatedProjectsArray[projIndex],
        description: updatedDescription,
      };

      return { ...prev, projects: updatedProjectsArray };
    });
  };

  const addNewProject = () => {
    const newProject: Project = {
      organizationName: '',
      projectTitle: '',
      startDate: '',
      endDate: '',
      description: [''],
    };
    updateProjects((prev) => {
      const updatedProjects = prev.projects.concat(newProject);
      return { ...prev, projects: updatedProjects };
    });
  };

  const deleteProject = (projIndex: number) => {
    if (projects.projects.length === 1) {
      alert('Minimum 1 Work Experience is needed!');
      return;
    }
    updateProjects((prev) => {
      const updatedProjectsArray = prev.projects.filter(
        (_, index) => index !== projIndex,
      );
      return { ...prev, projects: updatedProjectsArray };
    });
  };

  const addNewDescription = (projIndex: number) => {
    updateProjects((prev) => {
      const updatedProjectsArray = prev.projects.map((project, index) => {
        if (index === projIndex) {
          return {
            ...project,
            description: [...project.description, ''],
          };
        }
        return project;
      });
      return { ...prev, projects: updatedProjectsArray };
    });
  };

  const deleteDescription = (projIndex: number, descIndex: number) => {
    if (projects.projects[projIndex].description.length === 1) {
      alert('Atleast one description is needed for project.');
      return;
    }
    updateProjects((prev) => {
      const selectedProject = prev.projects[projIndex];
      const updatedDescriptions = selectedProject.description.filter(
        (_, index) => descIndex !== index,
      );
      const updatedProjects = prev.projects.map((proj, index) => {
        if (projIndex === index) {
          return {
            ...proj,
            description: updatedDescriptions,
          };
        }
        return proj;
      });
      return { ...prev, projects: updatedProjects };
    });
  };

  return (
    <div className="space-y-4">
      <InputField
        type="text"
        value={projects.title}
        onChange={handleTitleChange}
        placeholder="Work Experience Title"
      />

      {projects.projects.map((project, projIndex) => (
        <ProjectEditBox
          key={`projectsEditBox_${projIndex}`}
          index={projIndex}
          data={project}
          addNewDescription={addNewDescription}
          deleteDescription={deleteDescription}
          deleteProject={deleteProject}
          handleDescriptionChange={handleDescriptionChange}
          handleExperienceChange={handleExperienceChange}
        />
      ))}

      <BlueButton label="Add New Project" onClick={addNewProject} />
    </div>
  );
};

interface ProjectEditBoxProps {
  index: number;
  data: Project;
  handleExperienceChange: (
    index: number,
    keyName: keyof Experience,
    value: string,
  ) => void;
  deleteProject: (index: number) => void;
  handleDescriptionChange: (
    projIndex: number,
    descIndex: number,
    value: string,
  ) => void;
  addNewDescription: (index: number) => void;
  deleteDescription: (projIndex: number, descIndex: number) => void;
}

const ProjectEditBox: React.FC<ProjectEditBoxProps> = ({
  index,
  data,
  handleExperienceChange,
  deleteProject,
  handleDescriptionChange,
  addNewDescription,
  deleteDescription,
}) => {
  return (
    <div className="p-1 border rounded relative flex flex-col gap-1">
      <div className="flex flex-row items-center justify-between">
        <p className="text-xs font-medium">{`Experience #${index}`}</p>
        <ButtonWithCrossIcon onClick={() => deleteProject(index)} />
      </div>
      <InputField
        value={data.organizationName}
        onChange={(event) =>
          handleExperienceChange(index, 'companyName', event.target.value)
        }
        placeholder="Company Name"
      />
      <InputField
        type="text"
        value={data.projectTitle}
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
