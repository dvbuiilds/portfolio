import React from 'react';

// HOOKS
import { useLayout } from '../../context/LayoutContext';

// COMPONENTS
import { AccordionContainer } from '../wrappers/AccordionContainer';
import { ButtonWithCrossIcon } from './EditPanelComponents';
import { SocialHandlesEditBox } from './SocialHandlesEditBox';
import { TitleEditBox } from './TitleEditBox';
import { WorkExperienceEditBox } from './WorkExperienceEditBox';

// TYPES
import { ActiveSectionName } from '../../types/layout';
import { ProjectsEditBox } from './ProjectsEditBox';
import { EducationEditBox } from './EducationEditBox';
import { ActivitiesEditBox } from './ActivitiesEditBox';
import { SkillsEditBox } from './SkillsEditBox';
import { AchievementsEditBox } from './AchievementsEditBox';

export const EditPanel: React.FC = () => {
  const { activeSection, toggleDisplayMode, updateActiveSection } = useLayout();

  const onTabClick = (sectionName: ActiveSectionName) => {
    if (activeSection === sectionName) {
      updateActiveSection('');
    } else {
      updateActiveSection(sectionName);
    }
  };

  return (
    <div className="w-1/3 h-full relative p-2 border border-gray-300 rounded-md bg-blue-50 border">
      <div className="flex flex-row items-center justify-between mb-2">
        <p className="font-medium">Edit Panel</p>
        <ButtonWithCrossIcon onClick={() => toggleDisplayMode('')} />
      </div>
      {/** Title */}
      <AccordionContainer
        title={'Title'}
        isOpen={activeSection === 'title'}
        onToggle={() => onTabClick('title')}
      >
        <TitleEditBox />
      </AccordionContainer>
      {/** Social Handles */}
      <AccordionContainer
        title={'Social Handles'}
        isOpen={activeSection === 'socialHandles'}
        onToggle={() => onTabClick('socialHandles')}
      >
        <SocialHandlesEditBox />
      </AccordionContainer>
      {/** Work Experience */}
      <AccordionContainer
        title={'Work Experience'}
        isOpen={activeSection === 'workExperience'}
        onToggle={() => onTabClick('workExperience')}
      >
        <WorkExperienceEditBox />
      </AccordionContainer>
      {/** Projects */}
      <AccordionContainer
        title={'Projects'}
        isOpen={activeSection === 'projects'}
        onToggle={() => onTabClick('projects')}
      >
        <ProjectsEditBox />
      </AccordionContainer>
      {/** Education */}
      <AccordionContainer
        title={'Education'}
        isOpen={activeSection === 'education'}
        onToggle={() => onTabClick('education')}
      >
        <EducationEditBox />
      </AccordionContainer>
      {/** Activities */}
      <AccordionContainer
        title={'Activities'}
        isOpen={activeSection === 'activities'}
        onToggle={() => onTabClick('activities')}
      >
        <ActivitiesEditBox />
      </AccordionContainer>
      {/** Activities */}
      <AccordionContainer
        title={'Skills'}
        isOpen={activeSection === 'skills'}
        onToggle={() => onTabClick('skills')}
      >
        <SkillsEditBox />
      </AccordionContainer>
      {/** Achievements */}
      <AccordionContainer
        title={'Achievements'}
        isOpen={activeSection === 'achievements'}
        onToggle={() => onTabClick('achievements')}
      >
        <AchievementsEditBox />
      </AccordionContainer>
    </div>
  );
};
