export interface SocialHandle {
  label: string;
  link: string;
}

export interface Experience {
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface WorkExperience {
  title: string;
  experience: Experience[];
}

export interface Project {
  organizationName: string;
  projectTitle: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Projects {
  title: string;
  projects: Project[];
}
