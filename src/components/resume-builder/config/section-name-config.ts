/**
 * SectionNameMapping is needed to keep the sectionName string at one place and use this mapping everywhere as an abstraction.
 */
export const SectionNameMapping = {
  EMPTY: '',
  TITLE: 'title',
  SOCIAL_HANDLES: 'socialHandles',
  EDUCATION: 'education',
  WORK_EXPERIENCE: 'workExperience',
  PROJECTS: 'projects',
  ACHIEVEMENTS: 'achievements',
  ACTIVITIES: 'activities',
  SKILLS: 'skills',
} as const;

/**
 * SectionIdTitleMapping is needed to map the sectionName with the section's title string that is needed in Edit Panel and SectionSelection Cards.
 */
export const SectionIdTitleMapping = {
  '': '',
  title: 'Title',
  socialHandles: 'Social Handles',
  education: 'Education',
  workExperience: 'Work Experience',
  projects: 'Projects',
  achievements: 'Achievements',
  activities: 'Activities',
  skills: 'Skills',
} as const;
