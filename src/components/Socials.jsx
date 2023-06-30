import React from "react";
import { motion } from "framer-motion";

export default function Socials() {
  const IconButton = ({ iconClass, url }) => {
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

  return (
    <motion.div
      animate={{ y: -300 }}
      transition= {{ type: 'tween', duration: 1}}
      className="mix-blend-difference flex flex-col-reverse fixed bottom-[-300px] left-0 ml-3"
    >
      <div className="mt-4 w-auto ">
        <div className="h-20 bg-white w-0.5 ml-auto mr-auto"></div>
      </div>
      <IconButton iconClass={'fa fa-twitter'} url={'https://twitter.com/PulkitC92471102'} />
      <IconButton iconClass={'fa fa-brands fa-github'} url={'https://github.com/pulkitchauhan03'} />
      <IconButton iconClass={'fa fa-brands fa-facebook-f'} url={'https://www.facebook.com/pulkit.chauhan.1048/'} />
      <IconButton iconClass={'fa fa-brands fa-linkedin'} url={'https://www.linkedin.com/in/pulkitchauhan03/'} />
      <IconButton iconClass={'fa fa-solid fa-envelope'} url={'https://mail.google.com/mail/?view=cm&fs=1&to=pulkitchauhan03@gmail.com'} />
    </motion.div>
  );
}
