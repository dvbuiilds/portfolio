"use client";

import { Title } from "downloader/components/common";
import { Resume } from "downloader/components/resume-builder/Resume";
import { ResumeBuilder } from "downloader/components/resume-builder/ResumeBuilder";

export default function Home() {
  return (
    <div className="flex flex-row max-md:flex-col justify-center items-center gap-1 max-w-screen-xl mx-auto dark:text-white">
      <div>(AdBanner here)</div>
      <div className="flex flex-col justify-center items-center w-full">
        <Title>Resume Builder</Title>
        <ResumeBuilder />
        {/* <Resume /> */}
      </div>
      <div>(AdBanner here)</div>
    </div>
  );
}
