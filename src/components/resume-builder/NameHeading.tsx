import React from "react";

interface NameHeadingPropsType extends React.ComponentProps<"h4"> {}
export const NameHeading: React.FC<NameHeadingPropsType> = (props) => {
  return (
    <h4 className="text-2xl font-bold dark:text-white uppercase text-center">
      {props.children}
    </h4>
  );
};
