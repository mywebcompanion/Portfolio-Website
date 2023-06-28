import React from "react";

export default function IconButton(props) {
  const { iconClass, url } = props;

  return (
    <button
      type="button"
      className="mb-1 hover:bg-gradient-to-r from-grPrimary to-grSecondary hover:text-transparent focus:outline-none font-medium rounded-lg text-sm p-1 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
      onClick={() => {
        window.open(url);
      }}
    >
      <div className="w-8">
        <i className={`${iconClass} text-2xl text-white`}></i>
      </div>
      {/* <img src={icon} alt="twitterLogo" className="h-6 w-6"></img> */}
    </button>
  );
}
