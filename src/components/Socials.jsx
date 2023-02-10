import React from "react";
import IconButton from "./IconButton";
import twitterLogo from "../assets/twitter-logo.svg";
import githubLogo from "../assets/github.svg";
import facebookLogo from "../assets/facebook.svg";
import linkedinLogo from "../assets/linkedin.svg";
import gmailLogo from "../assets/gmail.svg";
import { motion } from "framer-motion";

export default function Socials() {
  return (
    <motion.div
      animate={{ y: -300 }}
      transition= {{ type: 'tween', duration: 1}}
      className="flex flex-col-reverse fixed bottom-[-300px] left-0 ml-3"
    >
      <div className="mt-6 w-auto ">
        <div className="h-20 bg-white w-0.5 ml-auto mr-auto"></div>
      </div>
      <IconButton icon={twitterLogo} />
      <IconButton icon={githubLogo} />
      <IconButton icon={facebookLogo} />
      <IconButton icon={linkedinLogo} />
      <IconButton icon={gmailLogo} />
    </motion.div>
  );
}
