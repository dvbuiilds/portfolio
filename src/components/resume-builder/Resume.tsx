import React from "react";
import { Title } from "../common";
import { SectionTitle } from "./SectionTitle";

interface ResumePropsType {}
export const Resume: React.FC<ResumePropsType> = (props) => {
  return (
    <div className="w-[800px] flex flex-col items-center justify-center">
      <h4 className="text-2xl font-bold dark:text-white uppercase">
        Dhairya Varshney
      </h4>
      {/** Personal Credentials */}
      <p>
        +91-9911720868 | dhairyavarshneyoffice@gmail.com | LeetCode | Figma |
        GitHub | Twitter | LinkedIn
      </p>
      <section className="w-full">
        <SectionTitle>EDUCATION</SectionTitle>
      </section>
    </div>
  );
};
