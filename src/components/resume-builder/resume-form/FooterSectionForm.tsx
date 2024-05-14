import React from 'react';
import { FieldValueProps } from './types';
import { FooterSection } from '../types';
import { motion } from 'framer-motion';

interface FooterSectionFormPropsType extends FieldValueProps<FooterSection> {}

export const FooterSectionForm: React.FC<FooterSectionFormPropsType> = (
  props,
) => {
  const { id, value, setValue } = props;

  const inputFieldClassNameValue =
    'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500';

  const fieldLabelClassNameValue =
    'block mb-2 text-sm font-medium text-gray-900 ';

  const handleFooterFieldValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setValue((prev) => ({
      ...prev,
      footerSection: {
        ...prev.footerSection,
        footerLink: {
          ...prev.footerSection.footerLink,
          [event.target.name]: event.target.value,
        },
      },
    }));
  };

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-4">Footer</h2>
      <div className="mb-5">
        <label htmlFor="label" className={fieldLabelClassNameValue}>
          Label
        </label>
        <input
          type="text"
          id="label"
          className={inputFieldClassNameValue}
          placeholder="Supporting Docs..."
          name="label"
          value={value.footerLink.label}
          onChange={handleFooterFieldValueChange}
          // required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="link" className={fieldLabelClassNameValue}>
          Section Title
        </label>
        <input
          type="text"
          id="link"
          className={inputFieldClassNameValue}
          placeholder="Eg. https://drive.google.com/..."
          name="link"
          value={value.footerLink.link}
          onChange={handleFooterFieldValueChange}
          // required
        />
      </div>
    </motion.div>
  );
};
