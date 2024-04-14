export type Resume = ResumeSections[];

export type ResumeSections =
  | { section: string; data: ResumeHeaderData }
  | { section: string; data: QualificationsData }
  | { section: string; data: WorkingExperienceData }
  | { section: string; data: ProjectData }
  | { section: string; data: DetailsData }
  | FooterSection;

export interface ResumeHeaderData {
  nameHeading: string;
  contact: {
    phoneNumber: string;
    email: string;
    socialHandles: Array<{
      handleName: string;
      profileLink: string;
    }>;
  };
}

export interface QualificationsData {
  sectionTitle: string;
  titleLetterCase: string;
  tableColumns: Array<string>;
  rowData: Array<Array<string>>;
}

export interface WorkingExperienceData {
  sectionTitle: string;
  titleLetterCase: string;
  experienceData: Array<ExperienceField>;
}

export interface ExperienceField {
  company: string;
  location: string;
  jobRole: string;
  link?: string;
  duration: string;
  workDescription: Array<string>;
}

export interface ProjectData {
  sectionTitle: string;
  titleLetterCase: string;
  projects: Array<ProjectField>;
}

export interface ProjectField {
  projectTitle: string;
  projectLink?: {
    label: string;
    link: string;
  };
  description: Array<string>;
}

export interface DetailsData {
  sectionTitle: string;
  titleLetterCase: string;
  descriptions: Array<string>;
}

export interface FooterSection {
  section: string;
  footerLink: {
    label: string;
    link: string;
  };
}

export interface ResumeFormData {
  headerSection: ResumeHeaderData;
  qualificationsSection: QualificationsData;
  workExperienceSection: WorkingExperienceData;
  projectsSection: ProjectData;
  detailsSection: DetailsData;
  footerSection: FooterSection;
}
