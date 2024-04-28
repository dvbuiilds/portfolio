import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ResumeFormData, ResumeHeaderData } from "../types";
import { FieldValueProps } from "./types";
import { BsXCircleFill } from "react-icons/bs";

interface HeaderSectionFormPropsType
  extends FieldValueProps<ResumeHeaderData> {}

export const HeaderSectionForm: React.FC<HeaderSectionFormPropsType> = (
  props
) => {
  const { value, setValue, id } = props;

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({
      ...prev,
      headerSection: { ...prev.headerSection, nameHeading: event.target.value },
    }));
  };

  const handlePhoneOrEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue((prev) => ({
      ...prev,
      headerSection: {
        ...prev.headerSection,
        contact: {
          ...prev.headerSection.contact,
          [event.target.name as "phoneNumber" | "email"]: event.target.value,
        },
      },
    }));
  };

  const handleSocialHandlesChange = (
    index: number,
    key: "handleName" | "profileLink",
    value: string
  ) => {
    setValue((prev) => {
      let socialHandles = prev.headerSection.contact.socialHandles;
      socialHandles[index][key] = value;
      return {
        ...prev,
        headerSection: {
          ...prev.headerSection,
          contact: { ...prev.headerSection.contact, socialHandles },
        },
      };
    });
  };

  const handleDeleteSocialHandleField = (index: number) => {
    if (value.contact.socialHandles.length === 1) return;
    if (!confirm("Are you sure you want to delete the current handle?")) return;
    setValue((prev) => {
      let socialHandles = prev.headerSection.contact.socialHandles;
      socialHandles = socialHandles.filter(
        (_handle, handleInd) => index !== handleInd
      );
      return {
        ...prev,
        headerSection: {
          ...prev.headerSection,
          contact: { ...prev.headerSection.contact, socialHandles },
        },
      };
    });
  };

  const handleAddSocialHandleField = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (value.contact.socialHandles.length === 5) return;

    console.log("add social handle field");
    setValue((prev) => ({
      ...prev,
      headerSection: {
        ...prev.headerSection,
        contact: {
          ...prev.headerSection.contact,
          socialHandles: [
            ...prev.headerSection.contact.socialHandles,
            { handleName: "", profileLink: "" },
          ],
        },
      },
    }));
  };

  const inputFieldClassNameValue =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const fieldLabelClassNameValue =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-4">Resume Header</h2>
      <div className="mb-5">
        <label htmlFor="name" className={fieldLabelClassNameValue}>
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="nameHeading"
          className={inputFieldClassNameValue}
          placeholder="Birendra Kumar"
          value={value.nameHeading}
          onChange={handleNameChange}
          // required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="phoneNumber" className={fieldLabelClassNameValue}>
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          className={inputFieldClassNameValue}
          placeholder="email@example.com"
          value={value?.contact.phoneNumber}
          onChange={handlePhoneOrEmailChange}
          // required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className={fieldLabelClassNameValue}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={inputFieldClassNameValue}
          placeholder="email@example.com"
          value={value?.contact.email}
          onChange={handlePhoneOrEmailChange}
          // required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="social" className={fieldLabelClassNameValue}>
          Social Handles
        </label>
        {value?.contact?.socialHandles?.map((_handle, index) => (
          <div key={index} className="flex flex-row gap-2 relative pr-5 pb-2">
            <div>
              <label
                htmlFor="handleName"
                className={`${fieldLabelClassNameValue} text-xs`}
              >
                Handle Name
              </label>
              <input
                type="text"
                id="handleName"
                name="handleName"
                className={inputFieldClassNameValue}
                placeholder="Eg. LinkedIn, GitHub, etc"
                value={value.contact.socialHandles[index].handleName}
                onChange={(event) =>
                  handleSocialHandlesChange(
                    index,
                    // @ts-ignore
                    event.target.name,
                    event.target.value
                  )
                }
                // required
              />
            </div>
            <div>
              <label
                htmlFor="profileLink"
                className={`${fieldLabelClassNameValue} text-xs`}
              >
                Profile Link
              </label>
              <input
                type="text"
                id="profileLink"
                name="profileLink"
                placeholder="https://github.com/<username>"
                className={inputFieldClassNameValue}
                value={value.contact.socialHandles[index].profileLink}
                onChange={(event) =>
                  handleSocialHandlesChange(
                    index,
                    // @ts-ignore
                    event.target.name,
                    event.target.value
                  )
                }
                // required
              />
            </div>
            <span
              className="absolute text-red-500 hover:text-red-700 cursor-pointer h-[15px] w-[15px] right-0 top-0"
              onClick={() => handleDeleteSocialHandleField(index)}
            >
              <BsXCircleFill />
            </span>
          </div>
        ))}
        <button
          className="my-2 rounded py-2 px-3 bg-blue-500 text-xs"
          onClick={handleAddSocialHandleField}
        >
          Add Handle
        </button>
      </div>
    </motion.div>
  );
};
