import React, { useState } from 'react';

interface SearchBoxPropsType {
  isLoading: boolean;
  onEnterPress?: (event: React.KeyboardEvent) => void;
  onSearchValueChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => Promise<void>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBox: React.FC<SearchBoxPropsType> = (props) => {
  const {
    isLoading,
    onEnterPress,
    onSearchValueChange,
    onSubmit,
    searchValue,
    setSearchValue,
  } = props;
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onSearchValueChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (errorMessage.length) {
      setErrorMessage('');
    }
    setSearchValue(event.target.value);
    onSearchValueChange?.(event);
  };

  const onEnterPressSubmitHandler = (event: React.KeyboardEvent) => {
    if (searchValue.length === 0) {
      setErrorMessage('URL field is empty!');
      return;
    }
    if (event.key === 'Enter') {
      console.log('Enter pressed');
      onEnterPress?.(event);
      onSubmit();
    }
  };

  const onSubmitHandler = async () => {
    if (errorMessage.length > 0) {
      return;
    }
    await onSubmit();
  };

  return (
    <div className="my-4 flex flex-col items-start justify-center relative w-[800px] max-md:w-[350px]">
      <input
        type="text"
        id="link"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-[0.25rem] focus:ring-blue-500 focus:border-blue-500 block w-full p-3 pr-[140px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="https://www.youtube.com/v=?xxx..."
        onKeyDown={onEnterPressSubmitHandler}
        value={searchValue}
        onChange={onSearchValueChangeHandler}
        required
      />
      <button
        type="button"
        className="absolute top-0 right-0 text-white bg-blue-700 enabled:hover:bg-blue-800 enabled:focus:ring-4 enabled:focus:ring-blue-300 font-medium rounded-[0_0.25rem_0.25rem_0] text-base px-8 py-3 h-[50px] dark:bg-blue-600 enabled:dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={onSubmitHandler}
        disabled={isLoading || searchValue.length === 0}
      >
        Download
      </button>
      {errorMessage ? (
        <p className="text-sm text-red-600 mt-1">{errorMessage}</p>
      ) : null}
    </div>
  );
};
