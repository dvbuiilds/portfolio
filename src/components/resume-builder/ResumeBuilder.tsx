import React, { useState } from "react";
import { ResumeFormData } from "./types";

// THIRD_PARTY
import { motion } from "framer-motion";
import { HeaderSectionForm } from "./resume-form/HeaderSectionForm";
import { QualificationsSectionForm } from "./resume-form/QualificationsSectionForm";
import { ExperienceSectionForm } from "./resume-form/ExperienceSectionForm";

interface ResumeBuilderPropsType {}

export const ResumeBuilder: React.FC<ResumeBuilderPropsType> = (props) => {
  const [step, setStep] = useState<number>(0);
  const [resumeData, setResumeData] = useState<ResumeFormData>({
    headerSection: {
      nameHeading: "",
      contact: {
        email: "",
        phoneNumber: "",
        socialHandles: [{ handleName: "", profileLink: "" }],
      },
    },
    qualificationsSection: {
      sectionTitle: "",
      titleLetterCase: "uppercase",
      tableColumns: [""],
      rowData: [[""]],
    },
    workExperienceSection: {
      sectionTitle: "",
      titleLetterCase: "uppercase",
      experienceData: [
        {
          company: "",
          location: "",
          jobRole: "",
          link: "",
          duration: "",
          workDescription: [""],
        },
      ],
    },
    projectsSection: {
      sectionTitle: "",
      titleLetterCase: "uppercase",
      projects: [],
    },
    detailsSection: {
      sectionTitle: "",
      titleLetterCase: "uppercase",
      descriptions: [],
    },
    footerSection: {
      section: "",
      footerLink: { label: "", link: "" },
    },
  });

  const renderSubForms = () => {
    switch (step) {
      case 0: {
        return (
          <HeaderSectionForm
            key={step}
            value={resumeData.headerSection}
            setValue={setResumeData}
            id={"headerSection"}
          />
        );
      }
      case 1: {
        return (
          <QualificationsSectionForm
            id="qualificationsSection"
            value={resumeData.qualificationsSection}
            setValue={setResumeData}
          />
        );
      }
      case 2: {
        return (
          <ExperienceSectionForm
            id="workExperienceSection"
            value={resumeData.workExperienceSection}
            setValue={setResumeData}
          />
        );
      }
      case 3: {
        return (
          <motion.div
            key={step}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Project
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Birendra Kumar"
                // required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="email@example.com"
                // required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="social"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Social Handles
              </label>
              <input
                type="text"
                id="social"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // required
              />
            </div>
          </motion.div>
        );
      }
      case 4: {
        return (
          <motion.div
            key={step}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Achievments
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Birendra Kumar"
                // required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="email@example.com"
                // required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="social"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Social Handles
              </label>
              <input
                type="text"
                id="social"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // required
              />
            </div>
          </motion.div>
        );
      }
      case 5: {
        return (
          <motion.div
            key={step}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Skills
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Birendra Kumar"
                // required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="email@example.com"
                // required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="social"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Social Handles
              </label>
              <input
                type="text"
                id="social"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // required
              />
            </div>
          </motion.div>
        );
      }
      case 6: {
        return (
          <motion.div
            key={step}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Supporting Docs
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Birendra Kumar"
                // required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="email@example.com"
                // required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="social"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Social Handles
              </label>
              <input
                type="text"
                id="social"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // required
              />
            </div>
          </motion.div>
        );
      }
    }
  };

  const handlePreviousButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (step === 0) return;
    setStep((prevStep) => prevStep - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (step === 6) return;
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="flex flex-row max-md:flex-col items-center justify-center w-full">
      <form className="w-[400px]">
        <div
          className={`mb-4 flex flex-row items-center ${
            step > 0 ? "justify-between" : "justify-end"
          }`}
        >
          {step !== 0 ? (
            <button
              className="rounded py-2 px-3 bg-green-500"
              onClick={handlePreviousButtonClick}
            >
              Previous
            </button>
          ) : null}
          {step < 6 ? (
            <button
              className="rounded py-2 px-7 bg-green-500"
              onClick={handleNextButtonClick}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          )}
        </div>
        {renderSubForms()}
      </form>
      <img src="#" />
    </div>
  );
};
