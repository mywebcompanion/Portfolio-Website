import React from "react";

export default function IconButton(props) {
  const { icon } = props;

  return (
    <button
      type="button"
      className="hover:bg-blue-700 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
    >
      <img src={icon} alt="twitterLogo" className="h-6 w-6"></img>
    </button>
  );
}
