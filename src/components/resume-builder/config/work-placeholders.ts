export const placeholders = {
  workExperience: {
    sectionTitle: 'WORK EXPERIENCE',
    companyName: 'Company Name',
    jobTitle: 'Job Title',
    startDate: 'Start Date',
    endDate: 'End Date',
    description: 'Job description or accomplishment',
    addExperience: 'Add New Experience',
    addDescription: 'Add Description',
  },
  projects: {
    sectionTitle: 'PROJECTS',
    organizationName: 'Organization Name',
    projectTitle: 'Project Title',
    startDate: 'Start Date',
    endDate: 'End Date',
    description: 'Project description or achievement',
    addProject: 'Add New Project',
    addDescription: 'Add Description',
  },
} as const;

export const SectionWisePlaceholderKeys = {
  workExperience: [
    'title',
    'companyName',
    'jobTitle',
    'startDate',
    'endDate',
    'description',
  ],
  projects: [
    'title',
    'organizationName',
    'projectTitle',
    'startDate',
    'endDate',
    'description',
  ],
};
