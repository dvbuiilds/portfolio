import { Title } from 'downloader/components/common';
import { ResumeBuilderHome } from 'downloader/components/resume-builder-v2/ResumeBuilderHome';
import { Resume } from 'downloader/components/resume-builder/Resume';
import { ResumeBuilder } from 'downloader/components/resume-builder/ResumeBuilder';

export default function Home() {
  return (
    <div className="flex flex-col max-md:flex-col justify-center items-center gap-1 max-w-screen-xl mx-auto ">
      <ResumeBuilderHome />
    </div>
  );
}
