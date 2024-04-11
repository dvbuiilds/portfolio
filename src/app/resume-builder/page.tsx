"use client";

import { Title } from "downloader/components/common";
import { Resume } from "downloader/components/resume-builder/Resume";

export default function Home() {
  return (
    <div className="flex flex-row max-md:flex-col items-center gap-1 max-w-screen-xl mx-auto dark:text-white">
      <div>Hello</div>
      <div>
        <Title>Resume Builder</Title>
        <Resume />
      </div>
      <div>Hello</div>
    </div>
  );
}
