import React from "react";

export default function IconButton(props) {
  const { icon, url } = props;

  return (
    <button
      type="button"
      className="hover:bg-gradient-to-r from-grPrimary to-grSecondary hover:text-transparent focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
      onClick={() => {
        window.open(url);
      }}
    >
      <img src={icon} alt="twitterLogo" className="h-6 w-6"></img>
    </button>
  );
}
