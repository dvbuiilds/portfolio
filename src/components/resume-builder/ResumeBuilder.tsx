import React, { useState } from "react";
import { ResumeFormData } from "./types";

interface ResumeBuilderPropsType {}
// const resumeDataInitial: ResumeFormData = {

// }
export const ResumeBuilder: React.FC<ResumeBuilderPropsType> = (props) => {
  const [step, setStep] = useState<number>(0);
  const [resumeData, setResumeData] = useState<ResumeFormData>();
  return (
    <div className="flex flex-row max-md:flex-col items-center justify-center">
      <form className="" onSubmit={() => {}}></form>
      <img src="#" width={400} height={400} />
    </div>
  );
};
