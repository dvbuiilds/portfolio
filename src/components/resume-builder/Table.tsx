import React from "react";

interface TablePropsType extends React.ComponentProps<"table"> {
  columns: Array<string>;
  data: Array<Array<string>>;
}

export const Table: React.FC<TablePropsType> = (props) => {
  const { columns, data } = props;
  return (
    <table className="border-separate border-spacing-x-3">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} className="font-medium">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {row.map((cell) => (
              <td key={`${cell}`} className="text-center">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
