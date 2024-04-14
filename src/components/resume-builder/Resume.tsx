import React from "react";

// COMPONENTS
import { SectionTitle } from "./SectionTitle";
import { WorkHeader } from "./WorkHeader";
import { NameHeading } from "./NameHeading";
import { Contact } from "./Contact";
import { Table } from "./Table";

// THIRD_PARTY
import parse from "html-react-parser";

// DATA
import data from "./data.json";

const ResumeSections = {
  RESUME_HEADER: "resumeHeader",
  QUALIFICATIONS: "qualifications",
  EXPERIENCE: "experience",
  PROJECTS: "projects",
  ACHIEVEMENTS: "achievements",
  SKILLS: "skills",
  FOOTER: "footer",
};

interface ResumePropsType {}
export const Resume: React.FC<ResumePropsType> = (props) => {
  return (
    <div className="w-[890px] flex flex-col items-center justify-center border border-gray-400 rounded px-3 py-3">
      {data.map((resumeSection, index) => {
        switch (resumeSection.section) {
          case ResumeSections.RESUME_HEADER: {
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
          case ResumeSections.QUALIFICATIONS: {
            return (
              <section key={index} className="w-full">
                {resumeSection?.data?.tableColumns ? (
                  <>
                    <SectionTitle textTransform={"uppercase"}>
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
          case ResumeSections.EXPERIENCE: {
            return (
              <section key={index} className="w-full">
                <SectionTitle textTransform={"uppercase"}>
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
          case ResumeSections.PROJECTS: {
            return (
              <section key={index} className="w-full">
                <SectionTitle textTransform={"uppercase"}>
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
          case ResumeSections.ACHIEVEMENTS: {
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
                      )
                    )}
                  </ul>
                </WorkHeader>
              </section>
            );
          }
          case ResumeSections.SKILLS: {
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
                      )
                    )}
                  </ul>
                </WorkHeader>
              </section>
            );
          }
          case ResumeSections.FOOTER: {
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
