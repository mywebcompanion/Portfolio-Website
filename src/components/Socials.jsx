import React from "react";
import IconButton from "./IconButton";
import twitterLogo from "../assets/twitter-logo.svg";
import githubLogo from "../assets/github.svg";
import facebookLogo from "../assets/facebook.svg";
import linkedinLogo from "../assets/linkedin.svg";  import gmailLogo from "../assets/gmail.svg";
import { motion } from "framer-motion";

export default function Socials() {
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
