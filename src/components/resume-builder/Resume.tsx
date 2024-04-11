import React from "react";
import { Title } from "../common";
import { SectionTitle } from "./SectionTitle";
import { WorkHeader } from "./WorkHeader";

interface ResumePropsType {}
export const Resume: React.FC<ResumePropsType> = (props) => {
  return (
    <div className="w-[850px] flex flex-col items-center justify-center">
      <h4 className="text-2xl font-bold dark:text-white uppercase">
        Dhairya Varshney
      </h4>
      {/** Personal Credentials */}
      <p>
        +91-9911720868 | dhairyavarshneyoffice@gmail.com | LeetCode | Figma |
        GitHub | Twitter | LinkedIn
      </p>
      <section className="w-full">
        <SectionTitle textTransform={"uppercase"}>Education</SectionTitle>
        <table className="border-separate border-spacing-x-3">
          <thead>
            <tr>
              <th className="font-medium">Course</th>
              <th className="font-medium">Year</th>
              <th className="font-medium">Institution</th>
              <th className="font-medium">CGPA/Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">B.Tech (Information Technology)</td>
              <td className="text-center">2023</td>
              <td className="text-center">Delhi Technological University</td>
              <td className="text-center">9.20 CGPA</td>
            </tr>
            <tr>
              <td className="text-center">AISSCE(Class 12)</td>
              <td className="text-center">2018</td>
              <td className="text-center">
                D.A.V. Public School, Pushpanjali Enclave
              </td>
              <td className="text-center">93.40 %</td>
            </tr>
            <tr>
              <td className="text-center">AISSCE(Class 10)</td>
              <td className="text-center">2016</td>
              <td className="text-center">
                D.A.V. Public School, Pushpanjali Enclave
              </td>
              <td className="text-center">9.60 CGPA</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="w-full">
        <SectionTitle textTransform={"uppercase"}>
          INTERNSHIPS / WORKING EXPERIENCE
        </SectionTitle>
        <WorkHeader
          type="job"
          index={1}
          company="MakeMyTrip India Pvt Ltd"
          location="Bangalore"
          jobRole="Software Engineer(Frontend)"
          duration="Sept 2023 - Present"
        >
          <ul className="list-disc">
            <li>
              Crafting UI Components for Common Platform Library using ReactJs,
              TypeScript, StoryBook and Figma.
            </li>
          </ul>
        </WorkHeader>
      </section>
      <section className="w-full">
        <SectionTitle textTransform={"uppercase"}>PROJECTS</SectionTitle>
        <WorkHeader
          type="project"
          index={1}
          title="Sugriva (Hiring Management Solution for Solopreneurs) — ReactJs+Redux, NodeJs"
          ProjectLink={
            <a
              className="no-underline text-blue-600"
              href="https://github.com/dvbuiilds/sugriva"
            >
              (GitHub)
            </a>
          }
        >
          <ul className="list-disc">
            <li>
              Full Stack app with 2 distinct views - <b>Recruiter View</b> &{" "}
              <b>Candidate View</b> for efficient interaction.
            </li>
            <li>
              <b>Built-in Video Interview</b> feature using <b>Socket.io</b> and{" "}
              <b>PeerJS</b> enables smooth and real-time video interviews.
            </li>
            <li>
              Leveraged Socket.io for <b>Text Chat</b> for message exchange
              during Interview.
            </li>
            <li>
              Developed ExpressJs server for handling Auth+Form submission APIs
              & concurrent Socket.io events+callbacks.
            </li>
            <li>
              Leveraged <b>MongoDB</b> database to store and manage candidate
              and interview data securely.
            </li>
            <li>
              Implemented <b>Protected Routes</b> to ensure authenticated and
              authorized access to the application.
            </li>
          </ul>
        </WorkHeader>
      </section>
      <section className="w-full">
        <SectionTitle textTransform="uppercase">ACHIEVEMENTS</SectionTitle>
        <WorkHeader type="others">
          <ul className="list-disc">
            <li>
              <b>
                Competed in 600+ Questions on Leetcode with a Daily Streak of
                300+ days and a Contest Rating of 1501.
              </b>
            </li>
            <li>
              <b>
                Attended Urban Company on-Campus BootCamp series & won Exclusive
                Goodies.
              </b>
            </li>
          </ul>
        </WorkHeader>
      </section>
      <section className="w-full">
        <SectionTitle textTransform="uppercase">SKILLS</SectionTitle>
        <WorkHeader type="others">
          <ul className="list-disc">
            <li>
              <b>Programming/Tools & Technologies:</b> Javascript, jQuery,
              ReactJs with Redux, ExpressJs, HTML, CSS, C++, Python-Django,
              Linux, Git, Google Colab, Jupyter Notebook, BeautifulSoup,
              Selenium, Figma, WordPress.
            </li>
          </ul>
        </WorkHeader>
      </section>
      <a href="https://bit.ly/dv-sup-doc" className="text-blue-600">
        Supporting Documents
      </a>
    </div>
  );
};
