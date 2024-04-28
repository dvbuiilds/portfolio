import React, { useState } from "react";
import { FieldValueProps } from "./types";
import { QualificationsData } from "../types";
import { motion } from "framer-motion";
import { BsXCircleFill } from "react-icons/bs";

interface QualificationsSectionFormPropsType
  extends FieldValueProps<QualificationsData> {}
export const QualificationsSectionForm: React.FC<
  QualificationsSectionFormPropsType
> = (props) => {
  const { id, value, setValue } = props;
  const [columns, setColumns] = useState<string>(value.tableColumns.join(","));
  const [rowWiseData, setRowWiseData] = useState<Array<string>>(
    value.rowData.map((row) => row.join(","))
  );

  const inputFieldClassNameValue =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const fieldLabelClassNameValue =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

  const handleSectionTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue((prev) => ({
      ...prev,
      qualificationsSection: {
        ...prev.qualificationsSection,
        sectionTitle: event.target.value,
      },
    }));
  };

  const handleTableColumnsStringChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const columnsText: string | undefined = event.target.value;
    setColumns(columnsText);
    const columns: string[] | undefined = columnsText?.split(",");
    if (columns) {
      setValue((prev) => ({
        ...prev,
        qualificationsSection: {
          ...prev.qualificationsSection,
          tableColumns: columns,
        },
      }));
    }
  };

  const handleRowValueChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowWiseData((prev) => {
      let updatedRows = [...prev];
      updatedRows[index] = event.target.value;
      setValue((prev) => {
        let updatedRowData = { ...prev };
        const rowValue = updatedRows[index].split(",");
        updatedRowData.qualificationsSection.rowData[index] = rowValue;
        return updatedRowData;
      });
      return updatedRows;
    });
    // const columnValue = columns.split(",");
    // // if (rowValue.length !== columnValue.length) {
    // //   return;
    // // }
  };

  const handleAddDataRow = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setRowWiseData((prev) => [...prev, ""]);
    setValue((prev) => ({
      ...prev,
      qualificationsSection: {
        ...prev.qualificationsSection,
        rowData: [...prev.qualificationsSection.rowData, []],
      },
    }));
  };

  const handleRemoveDataRow = (index: number) => {
    if (rowWiseData.length === 1) return;
    setRowWiseData((prev) => prev.filter((_, rowIndex) => rowIndex !== index));
    setValue((prev) => ({
      ...prev,
      qualificationsSection: {
        ...prev.qualificationsSection,
        rowData: prev.qualificationsSection.rowData.filter(
          (_, rowIndex) => rowIndex !== index
        ),
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
      <h2 className="mb-4">Qualification</h2>
      <div className="mb-5">
        <label htmlFor="sectionTitle" className={fieldLabelClassNameValue}>
          Section Title
        </label>
        <input
          type="text"
          id="sectionTitle"
          className={inputFieldClassNameValue}
          placeholder="Eg. Education"
          value={value.sectionTitle}
          onChange={handleSectionTitleChange}
          // required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className={fieldLabelClassNameValue}>
          Qualifications Table Columns
          <p className="text-xs font-thin">
            *Coma seperated column names. Eg.
            Institution,Program,Year,Grade,etc.
          </p>
        </label>
        <input
          type="email"
          id="email"
          className={inputFieldClassNameValue}
          placeholder="Institution,Program,Year,Grade,etc."
          value={columns}
          onChange={handleTableColumnsStringChange}
          // required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="course" className={fieldLabelClassNameValue}>
          Courses
        </label>
        {rowWiseData.map((_row, index) => (
          <div key={index} className="mt-2 relative">
            <label
              htmlFor={`course-${index}`}
              className={`${fieldLabelClassNameValue} text-xs`}
            >{`Course #${index + 1}`}</label>
            <input
              type="text"
              id={`course-${index}`}
              className={inputFieldClassNameValue}
              value={rowWiseData[index]}
              onChange={(e) => handleRowValueChange(index, e)}
              // required
            />
            <span
              className="absolute text-red-500 hover:text-red-700 cursor-pointer h-[15px] w-[15px] right-0 top-0"
              onClick={() => handleRemoveDataRow(index)}
            >
              <BsXCircleFill />
            </span>
          </div>
        ))}
        <button
          className="my-2 rounded py-2 px-3 bg-blue-500 text-xs"
          onClick={handleAddDataRow}
        >
          Add Course
        </button>
      </div>
    </motion.div>
  );
};
