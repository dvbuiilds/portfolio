import React from "react";

interface SectionTitlePropsType extends React.ComponentProps<"h5"> {}
export const SectionTitle: React.FC<SectionTitlePropsType> = (props) => {
  const { children } = props;
  return (
    <h5 className="bg-orange-400 font-semibold py-1 w-full pl-2 ">
      {children}
    </h5>
  );
};
