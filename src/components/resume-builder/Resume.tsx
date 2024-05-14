import React, { useMemo, useState } from 'react';

// THIRD_PARTY
import parse from 'html-react-parser';

// COMPONENTS
import { SectionTitle } from './SectionTitle';
import { WorkHeader } from './WorkHeader';
import { NameHeading } from './NameHeading';
import { Contact } from './Contact';
import { Table } from './Table';

// DATA
import data from './data.json';

// UTILS
import { ResumeSectionsName } from './resume-utils';
import { ResumeFormData, ResumeType } from './types';

const transformResumeFormStateToData = (
  resumeState: ResumeFormData,
): ResumeType => {
  // @ts-expect-error
  return Object.keys(resumeState).map((stateSection) => {
    if (
      stateSection === ResumeSectionsName.RESUME_HEADER ||
      stateSection === ResumeSectionsName.FOOTER
    ) {
      return {
        section: stateSection,
        data: resumeState[stateSection as keyof ResumeFormData],
      };
    }
    return {
      section: stateSection,
      data: {
        ...resumeState[stateSection as keyof ResumeFormData],
        titleLetterCase: 'uppercase',
      },
    };
  });
};

interface ResumePropsType {
  resumeState: ResumeFormData;
}

export const Resume: React.FC<ResumePropsType> = (props) => {
  const { resumeState } = props;
  // const [data, setData] = useState(transformResumeFormStateToData(resumeState));
  // console.log({ resumeState, data });
  // const data = useMemo(
  //   () => transformResumeFormStateToData(resumeState),
  //   [resumeState]
  // );

  return (
    <div className="w-[890px] flex flex-col items-center justify-center border border-gray-400 rounded px-3 py-3">
      {data.map((resumeSection, index) => {
        switch (resumeSection.section) {
          case ResumeSectionsName.RESUME_HEADER: {
            return (
              <section key={index}>
                <NameHeading>{resumeSection?.data?.nameHeading}</NameHeading>
                <Contact
                  phoneNumber={resumeSection?.data?.contact?.phoneNumber}
                  email={resumeSection?.data?.contact?.email}
                  socialHandles={resumeSection?.data?.contact?.socialHandles}
                />
              </section>
            );
          }
          case ResumeSectionsName.QUALIFICATIONS: {
            return (
              <section key={index} className="w-full">
                {resumeSection?.data?.tableColumns ? (
                  <>
                    <SectionTitle textTransform={'uppercase'}>
                      {resumeSection?.data?.sectionTitle}
                    </SectionTitle>
                    <Table
                      columns={resumeSection?.data?.tableColumns}
                      data={resumeSection?.data?.rowData}
                    />
                  </>
                ) : null}
              </section>
            );
          }
          case ResumeSectionsName.EXPERIENCE: {
            return (
              <section key={index} className="w-full">
                <SectionTitle textTransform={'uppercase'}>
                  {resumeSection?.data?.sectionTitle}
                </SectionTitle>
                {resumeSection?.data?.experienceData?.map((work, workIndex) => (
                  <WorkHeader
                    key={workIndex}
                    type="job"
                    index={workIndex + 1}
                    company={work?.company}
                    location={work?.location}
                    jobRole={work?.jobRole}
                    link={work?.link}
                    duration={work?.duration}
                  >
                    <ul className="list-disc">
                      {work?.workDescription?.map((description, descIndex) => (
                        <li key={descIndex}>{parse(description)}</li>
                      ))}
                    </ul>
                  </WorkHeader>
                ))}
              </section>
            );
          }
          case ResumeSectionsName.PROJECTS: {
            return (
              <section key={index} className="w-full">
                <SectionTitle textTransform={'uppercase'}>
                  {resumeSection?.data?.sectionTitle}
                </SectionTitle>
                {resumeSection?.data?.projects?.map((project, projectIndex) => (
                  <WorkHeader
                    key={projectIndex}
                    type="project"
                    index={projectIndex + 1}
                    title={project?.projectTitle}
                    ProjectLink={
                      project?.projectLink ? (
                        <a
                          className="underline text-blue-600"
                          href={project?.projectLink?.link}
                        >
                          ({project?.projectLink?.label})
                        </a>
                      ) : null
                    }
                  >
                    <ul className="list-disc">
                      {project?.description?.map((line, lineIndex) => (
                        <li key={lineIndex}>{parse(line)}</li>
                      ))}
                    </ul>
                  </WorkHeader>
                ))}
              </section>
            );
          }
          case ResumeSectionsName.ACHIEVEMENTS: {
            return (
              <section key={index} className="w-full">
                <SectionTitle textTransform="uppercase">
                  {resumeSection?.data?.sectionTitle}
                </SectionTitle>
                <WorkHeader type="others">
                  <ul className="list-disc">
                    {resumeSection?.data?.descriptions?.map(
                      (line, lineIndex) => (
                        <li key={lineIndex}>{parse(line)}</li>
                      ),
                    )}
                  </ul>
                </WorkHeader>
              </section>
            );
          }
          case ResumeSectionsName.SKILLS: {
            return (
              <section key={index} className="w-full">
                <SectionTitle textTransform="uppercase">
                  {resumeSection?.data?.sectionTitle}
                </SectionTitle>
                <WorkHeader type="others">
                  <ul className="list-disc">
                    {resumeSection?.data?.descriptions?.map(
                      (skill, skillIndex) => (
                        <li key={skillIndex}>{parse(skill)}</li>
                      ),
                    )}
                  </ul>
                </WorkHeader>
              </section>
            );
          }
          case ResumeSectionsName.FOOTER: {
            return (
              <section key={index}>
                <a
                  href={resumeSection?.footerLink?.link}
                  className="underline text-blue-600"
                >
                  {resumeSection?.footerLink?.label}
                </a>
              </section>
            );
          }
        }
      })}
    </div>
  );
};
