import React from "react";
import { FieldValueProps } from "./types";
import { DetailsData } from "../types";
import { motion } from "framer-motion";
import { BsXCircleFill } from "react-icons/bs";

interface DetailsSectionFormPropsType extends FieldValueProps<DetailsData> {
  sectionName: "achievementsSection" | "skillsSection";
}

export const DetailsSectionForm: React.FC<DetailsSectionFormPropsType> = (
  props
) => {
  const { id, value, setValue, sectionName } = props;

  const inputFieldClassNameValue =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const fieldLabelClassNameValue =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

  const handleSectionTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue((prev) => ({
      ...prev,
      [sectionName]: {
        ...prev[sectionName],
        sectionTitle: event.target.value,
      },
    }));
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    descriptionIndex: number
  ) => {
    setValue((prev) => {
      let newDescriptions = [...prev[sectionName].descriptions];
      newDescriptions[descriptionIndex] = event.target.value;
      return {
        ...prev,
        [sectionName]: {
          ...prev[sectionName],
          descriptions: newDescriptions,
        },
      };
    });
  };

  const handleAddDescription = () => {
    setValue((prevValue) => {
      const newDescriptions = [...prevValue[sectionName].descriptions, ""];
      return {
        ...prevValue,
        [sectionName]: {
          ...prevValue[sectionName],
          descriptions: newDescriptions,
        },
      };
    });
  };

  const handleDeleteDescription = (descIndex: number) => {
    if (value.descriptions.length === 1) return;
    setValue((prev) => {
      const newDescriptions = [
        ...prev[sectionName].descriptions.filter((_, ind) => ind !== descIndex),
      ];

      return {
        ...prev,
        [sectionName]: { ...prev[sectionName], descriptions: newDescriptions },
      };
    });
  };

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-4">
        {sectionName === "achievementsSection" ? "Achievements" : "Skills"}
      </h2>
      <div className="mb-5">
        <label htmlFor="sectionTitle" className={fieldLabelClassNameValue}>
          Section Title
        </label>
        <input
          type="text"
          id="sectionTitle"
          className={inputFieldClassNameValue}
          placeholder="Internships / Work Experience"
          name="sectionTitle"
          value={value.sectionTitle}
          onChange={handleSectionTitleChange}
          // required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="description-#0" className={fieldLabelClassNameValue}>
          Descriptions
        </label>
        {value.descriptions.map((_desc, descIndex) => (
          <div className="my-2 relative" key={descIndex}>
            <input
              key={descIndex}
              type="text"
              id={`description-#${descIndex}`}
              className={`${inputFieldClassNameValue} mb-2`}
              placeholder="Eg. Leveraged <b>Socket.io for Text Chat</b> for messaging."
              value={value.descriptions[descIndex]}
              onChange={(event) => handleDescriptionChange(event, descIndex)}
              // required
            />
            <span
              className="absolute text-red-500 hover:text-red-700 cursor-pointer h-[15px] w-[15px] right-0 top-0"
              onClick={() => handleDeleteDescription(descIndex)}
            >
              <BsXCircleFill />
            </span>
          </div>
        ))}
        <span
          className="my-2 rounded py-2 px-3 bg-blue-500 text-xs"
          onClick={handleAddDescription}
        >
          Add Description
        </span>
      </div>
    </motion.div>
  );
};
