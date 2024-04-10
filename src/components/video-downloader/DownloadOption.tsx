import React from 'react';

interface DownloadOptionPropsType {
  format: string;
  qualityLabel: string;
  contentSize: string;
  url: string;
}

export const DownloadOption: React.FC<DownloadOptionPropsType> = (props) => {
  const { format, qualityLabel, contentSize, url } = props;
  return (
    <div className="flex flex-row items-center justify-between border border-gray-300 rounded w-[25rem] dark:text-white pl-2">
      {`.${format} | ${qualityLabel} ${contentSize}`}
      <a
        href={url}
        className="no-underline focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
        target="_blank"
      >
        Download
      </a>
    </div>
  );
};
