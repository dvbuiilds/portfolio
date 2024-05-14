import React, { useState } from 'react';
import { ResumeFormData } from './types';

// THIRD_PARTY
import { HeaderSectionForm } from './resume-form/HeaderSectionForm';
import { QualificationsSectionForm } from './resume-form/QualificationsSectionForm';
import { ExperienceSectionForm } from './resume-form/ExperienceSectionForm';
import { ProjectsSectionForm } from './resume-form/ProjectsSectionForm';
import { DetailsSectionForm } from './resume-form/DetailsSectionForm';
import { FooterSectionForm } from './resume-form/FooterSectionForm';
import { Resume } from './Resume';

interface ResumeBuilderPropsType {}

export const ResumeBuilder: React.FC<ResumeBuilderPropsType> = (props) => {
  const [step, setStep] = useState<number>(0);
  const [resumeStatus, setResumeStatus] = useState<'in-progress' | 'ready'>(
    'ready',
  );
  const [resumeData, setResumeData] = useState<ResumeFormData>({
    headerSection: {
      nameHeading: '',
      contact: {
        email: '',
        phoneNumber: '',
        socialHandles: [{ handleName: '', profileLink: '' }],
      },
    },
    qualificationsSection: {
      sectionTitle: '',
      titleLetterCase: 'uppercase',
      tableColumns: [''],
      rowData: [['']],
    },
    workExperienceSection: {
      sectionTitle: '',
      titleLetterCase: 'uppercase',
      experienceData: [
        {
          company: '',
          location: '',
          jobRole: '',
          link: '',
          duration: '',
          workDescription: [''],
        },
      ],
    },
    projectsSection: {
      sectionTitle: '',
      titleLetterCase: 'uppercase',
      projects: [
        {
          projectTitle: '',
          projectLink: { label: '', link: '' },
          description: [''],
        },
      ],
    },
    achievementsSection: {
      sectionTitle: '',
      titleLetterCase: 'uppercase',
      descriptions: [''],
    },
    skillsSection: {
      sectionTitle: '',
      titleLetterCase: 'uppercase',
      descriptions: [''],
    },
    footerSection: {
      section: '',
      footerLink: { label: '', link: '' },
    },
  });

  const renderSubForms = () => {
    switch (step) {
      case 0: {
        return (
          <HeaderSectionForm
            key={step}
            value={resumeData.headerSection}
            setValue={setResumeData}
            id={'headerSection'}
          />
        );
      }
      case 1: {
        return (
          <QualificationsSectionForm
            id="qualificationsSection"
            value={resumeData.qualificationsSection}
            setValue={setResumeData}
          />
        );
      }
      case 2: {
        return (
          <ExperienceSectionForm
            id="workExperienceSection"
            value={resumeData.workExperienceSection}
            setValue={setResumeData}
          />
        );
      }
      case 3: {
        return (
          <ProjectsSectionForm
            id="projectsSection"
            value={resumeData.projectsSection}
            setValue={setResumeData}
          />
        );
      }
      case 4: {
        return (
          <DetailsSectionForm
            id="achievementsSection"
            value={resumeData.achievementsSection}
            setValue={setResumeData}
            sectionName="achievementsSection"
          />
        );
      }
      case 5: {
        return (
          <DetailsSectionForm
            id="skillsSection"
            value={resumeData.skillsSection}
            setValue={setResumeData}
            sectionName="skillsSection"
          />
        );
      }
      case 6: {
        return (
          <FooterSectionForm
            id="footerSection"
            value={resumeData.footerSection}
            setValue={setResumeData}
          />
        );
      }
    }
  };

  const handlePreviousButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    if (step === 0) return;
    setStep((prevStep) => prevStep - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    if (step === 6) return;
    setStep((prevStep) => prevStep + 1);
  };

  const handleResumeFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResumeStatus('ready');
  };

  const handleSubmitButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setResumeStatus('ready');
  };
  console.log({ resumeStatus });
  return (
    <div>
      {resumeStatus === 'in-progress' ? (
        <div className="flex flex-row max-md:flex-col items-center justify-center w-full">
          <form className="w-[400px]">
            <div
              className={`mb-4 flex flex-row items-center ${
                step > 0 ? 'justify-between' : 'justify-end'
              }`}
            >
              {step !== 0 ? (
                <button
                  className="rounded py-2 px-3 bg-green-500"
                  onClick={handlePreviousButtonClick}
                >
                  Previous
                </button>
              ) : null}
              {step < 6 ? (
                <button
                  className="rounded py-2 px-7 bg-green-500"
                  onClick={handleNextButtonClick}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleSubmitButtonClick}
                >
                  Submit
                </button>
              )}
            </div>
            {renderSubForms()}
          </form>
          {/* <img src="#" /> */}
        </div>
      ) : (
        <Resume resumeState={resumeData} />
      )}
    </div>
  );
};
