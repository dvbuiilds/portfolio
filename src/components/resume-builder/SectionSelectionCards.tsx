import React from 'react';

// HOOKS
import { useLayout } from './context/LayoutContext';

// COMPONENTS
import { TbCircleCheckFilled } from 'react-icons/tb';

// TYPES
import type { ActiveSectionName } from './types/layout';

// CONFIGS
import { SectionIdTitleMapping } from './config/section-name-config';

const sectionsNameList = Object.keys(SectionIdTitleMapping).filter(
  (sectionName) => sectionName.length,
) as ActiveSectionName[];

export const SectionSelectionCards = () => {
  const { sectionsOrder, updateSectionsOrder } = useLayout();

  /**
   *
   * @param isSelected boolean
   * @param sectionName ActiveSectionName
   * This method was created with these two arguments as the value for 'isSelected' could not de determined in an optimized way within this component. So better this component is invoked inside SectionSelectionCard component that has the calculated value for isSelected prop. The sectionName argument is another requirement that we need for inserting or removing the section from sectionsOrder array.
   */
  const onSelectionCardClick = (
    isSelected: boolean,
    sectionName: ActiveSectionName,
  ) => {
    if (isSelected) {
      updateSectionsOrder((prev) =>
        prev.filter((sectionNameInList) => sectionNameInList !== sectionName),
      );
    } else {
      updateSectionsOrder((prev) => {
        const newOrder = [...prev];
        newOrder.splice(0, 0, sectionName);
        return newOrder;
      });
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      {sectionsNameList.map((sectionName) => (
        <SectionSelectionCard
          key={sectionName}
          sectionName={sectionName}
          sectionTitle={SectionIdTitleMapping[sectionName]}
          isSelected={sectionsOrder.includes(sectionName)}
          onCardClick={onSelectionCardClick}
        />
      ))}
    </div>
  );
};

const SectionSelectionCard: React.FC<{
  sectionName: ActiveSectionName;
  sectionTitle: string;
  isSelected: boolean;
  onCardClick: (isSelected: boolean, sectionName: ActiveSectionName) => void;
}> = ({ sectionName, sectionTitle, isSelected, onCardClick }) => {
  return (
    <div
      className={`relative w-40 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
        isSelected ? 'border-2 border-blue-500' : 'border border-gray-300'
      }`}
      onClick={() => onCardClick(isSelected, sectionName)}
    >
      {isSelected ? (
        <div className="absolute -top-1 -left-1 text-blue-500">
          <TbCircleCheckFilled />
        </div>
      ) : null}
      <h3 className="text-center text-xs">{sectionTitle}</h3>
    </div>
  );
};
