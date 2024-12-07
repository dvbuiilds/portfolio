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
