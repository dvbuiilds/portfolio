import React from "react";

type WorkHeaderPropsType =
  | {
      type: "job";
      index: number;
      company: string;
      jobRole: string;
      link?: string | null;
      location: string;
      duration: string;
      children?: React.ReactElement;
    }
  | {
      type: "project";
      index: number;
      title: string;
      ProjectLink?: React.ReactNode;
      duration?: string;
      children?: React.ReactElement;
    }
  | {
      type: "others";
      children?: React.ReactElement;
    };

export const WorkHeader: React.FC<WorkHeaderPropsType> = (props) => {
  switch (props.type) {
    case "job": {
      const { index, company, jobRole, link, location, duration, children } =
        props;
      return (
        <div className="flex flex-col items-start my-1">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="font-bold">
              {`${index}.  ${company}, ${location} `}
              {jobRole ? (
                <>
                  {"- "}
                  {link ? (
                    <a href={link} className="underline text-blue-500">
                      {jobRole}
                    </a>
                  ) : (
                    jobRole
                  )}
                </>
              ) : null}
            </div>
            <div>{duration}</div>
          </div>
          <div className="pl-4">{children}</div>
        </div>
      );
    }
    case "project": {
      const { index, title, ProjectLink, duration, children } = props;
      return (
        <div className="flex flex-col items-start my-1">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="font-bold">
              {index}. {title} {ProjectLink ? <>- {ProjectLink}</> : null}
            </div>
            {duration ? <div>{duration}</div> : null}
          </div>
          <div className="pl-4">{children}</div>
        </div>
      );
    }
    case "others": {
      return (
        <div className="flex flex-col items-start my-1">
          <div className="pl-4">{props?.children}</div>
        </div>
      );
    }
    default:
      return <span>Please select one type of WorkHeader.</span>;
  }
};
