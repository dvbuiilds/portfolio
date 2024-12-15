import React from 'react';

// HOOKS
import { useResumeData } from '../../context/ResumeDataContext';

// COMPONENTS
import { Course } from '../../types/resume-data';
import {
  BlueButton,
  ButtonWithCrossIcon,
  InputField,
} from './EditPanelComponents';

export const EducationEditBox: React.FC = () => {
  const { education, updateEducation } = useResumeData();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateEducation((prev) => ({ ...prev, title: event.target.value }));
  };

  const handleCourseChange = (
    index: number,
    field: keyof Course,
    value: string,
  ) => {
    updateEducation((prev) => {
      const updatedCoursesArray = [...prev.courses];
      updatedCoursesArray[index] = {
        ...updatedCoursesArray[index],
        [field]: value,
      };
      return { ...prev, courses: updatedCoursesArray };
    });
  };

  const addNewCourse = () => {
    const newCourse: Course = {
      courseName: '',
      institutionName: '',
      startDate: '',
      endDate: '',
      scoreEarned: '',
      description: '',
    };
    updateEducation((prev) => {
      const updatedCourses = prev.courses.concat(newCourse);
      return { ...prev, courses: updatedCourses };
    });
  };

  const deleteCourse = (courseIndex: number) => {
    if (education.courses.length === 1) {
      alert('Minimum 1 Education entry is needed!');
      return;
    }
    updateEducation((prev) => {
      const updatedCoursesArray = prev.courses.filter(
        (_, index) => index !== courseIndex,
      );
      return { ...prev, courses: updatedCoursesArray };
    });
  };

  return (
    <div className="space-y-4">
      <InputField
        type="text"
        value={education.title}
        onChange={handleTitleChange}
        placeholder="Education Section Title"
      />
      {education.courses.map((course, courseIndex) => (
        <CourseEditBox
          key={`courseEditBox_${courseIndex}`}
          index={courseIndex}
          data={course}
          deleteCourse={deleteCourse}
          handleCourseChange={handleCourseChange}
        />
      ))}

      <BlueButton label="Add New Education" onClick={addNewCourse} />
    </div>
  );
};

interface CourseEditBoxProps {
  index: number;
  data: Course;
  handleCourseChange: (
    index: number,
    keyName: keyof Course,
    value: string,
  ) => void;
  deleteCourse: (index: number) => void;
}

const CourseEditBox: React.FC<CourseEditBoxProps> = ({
  index,
  data,
  handleCourseChange,
  deleteCourse,
}) => {
  return (
    <div className="p-1 border rounded relative flex flex-col gap-1">
      <div className="flex flex-row items-center justify-between">
        <p className="text-xs font-medium">{`Education #${index + 1}`}</p>
        <ButtonWithCrossIcon onClick={() => deleteCourse(index)} />
      </div>
      <InputField
        value={data.institutionName}
        onChange={(event) =>
          handleCourseChange(index, 'institutionName', event.target.value)
        }
        placeholder="Institution Name"
      />
      <InputField
        value={data.courseName}
        onChange={(event) =>
          handleCourseChange(index, 'courseName', event.target.value)
        }
        placeholder="Course Name"
      />
      <div className="flex gap-2">
        <InputField
          type="text"
          value={data.startDate}
          onChange={(event) =>
            handleCourseChange(index, 'startDate', event.target.value)
          }
          placeholder="Start Date"
        />
        <InputField
          type="text"
          value={data.endDate}
          onChange={(event) =>
            handleCourseChange(index, 'endDate', event.target.value)
          }
          placeholder="End Date"
        />
      </div>
      <InputField
        value={data.scoreEarned}
        onChange={(event) =>
          handleCourseChange(index, 'scoreEarned', event.target.value)
        }
        placeholder="Score Earned"
      />
      <InputField
        value={data.description}
        onChange={(event) =>
          handleCourseChange(index, 'description', event.target.value)
        }
        placeholder="Description"
      />
    </div>
  );
};
